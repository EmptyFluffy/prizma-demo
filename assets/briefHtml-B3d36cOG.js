import{nt as e}from"./index-D5bauiXE.js";var t=e=>e.replace(/[&<>]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`})[e]),n=e=>(e<0?`-$`:`$`)+Math.round(Math.abs(e)).toLocaleString(`en-US`),r=e=>`${e.toFixed(2)}x`,i=e=>`${Math.round(e*100)}%`,a=e=>`${Math.round(e)}%`,o=e=>e.charAt(0).toUpperCase()+e.slice(1),s={good:`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"/></svg>`,warn:`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5l6 10.5H2z"/><path d="M8 6.8v2.9M8 11.6v.1"/></svg>`,bad:`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>`},c=(e,n)=>`<span class="vd vd-${e}">${s[e]}${t(n)}</span>`,l={green:`good`,amber:`warn`,red:`bad`},u={green:`Above target`,amber:`Below target`,red:`Below break-even`},d=(e,t,n)=>e>=t?`green`:e>=n?`amber`:`red`,f=e=>e===`over`||e===`heavy`?`bad`:e===`tight`||e===`medium`?`warn`:`good`;function p(e){return e.map(e=>`<tr>
      <th scope="row">${t(e.name)}</th>
      <td>${t(e.phase)}</td>
      <td class="r">${n(e.fee)}</td>
      <td class="r">${e.percentComplete==null?`n/a`:a(e.percentComplete*100)}</td>
      <td class="r">${e.staffed?r(e.yield):`n/a`}</td>
      <td class="r${e.profit<0?` neg`:``}">${n(e.profit)}</td>
      <td>${e.staffed?c(l[e.status],u[e.status]):c(`warn`,`No architect yet`)}</td>
    </tr>`).join(``)}function m(e){return e.map(e=>`<tr>
      <th scope="row">${t(e.name)}</th>
      <td class="r">${e.projectCount}</td>
      <td class="r">${n(e.revenue)}</td>
      <td class="r">${n(e.labor)}</td>
      <td class="r">${r(e.yield)}</td>
      <td class="r${e.profit<0?` neg`:``}">${n(e.profit)}</td>
    </tr>`).join(``)}function h(n){return n.map(n=>`<tr>
      <th scope="row">${t(n.name)}</th>
      <td>${t(e(n.role))}</td>
      <td class="r">${t(n.load)}</td>
      <td class="r">${n.projects}</td>
      <td>${c(f(n.status),o(n.status))}</td>
    </tr>`).join(``)}var g=(e,t,n,r=!1)=>`<div class="fig"><div class="k">${e}</div><div class="v${r?` neg`:``}">${t}</div><div class="n">${n}</div></div>`;function _(e){let s=`prizma, firm brief. ${t(e.firmName)}, ${t(e.week)}`,f=e.illustrative?`<p class="illus">Illustrative sample. The figures come from a demonstration model, not real books. Your brief is built from your own people, projects and rates.</p>`:``,_=e.liquidProjects==null?`n/a`:`≈${e.liquidProjects.toFixed(1)} <small>typical projects</small>`,v=d(e.firmYield,e.target,e.breakEven),y=e.confidenceLevel.toLowerCase()===`low`,b=e.backlogMonths==null?g(`Revenue per person`,n(e.revenuePerPersonAnnual),`Annualized`):g(`Backlog`,`${e.backlogMonths.toFixed(1)} <small>months</small>`,`Remaining fee over weekly revenue`),x=e.hasTeams?`<h3>By team <small>per week</small></h3>
       <table>
         <thead><tr><th scope="col">Team</th><th scope="col" class="r">Projects</th><th scope="col" class="r">Revenue</th><th scope="col" class="r">Labor</th><th scope="col" class="r">Multiplier</th><th scope="col" class="r">Profit</th></tr></thead>
         <tbody>${m(e.teams)}</tbody>
       </table>`:``,S=e.stability.hasTeams?`<div class="figs figs-3">
         ${g(`Rigid`,`${e.stability.rigid.toFixed(0)} <small>h/wk</small>`,`Unassigned hours inside the best single team`)}
         ${g(`Liquid`,`${e.stability.liquid.toFixed(0)} <small>h/wk</small>`,`Unassigned hours across the whole studio`)}
         ${g(`Silo Gap`,`${e.stability.silo.toFixed(0)} <small>h/wk</small>`,e.stability.silo>.05?`Trapped by the team structure`:`No hours trapped`)}
       </div>`:`<div class="figs figs-1">${g(`Unassigned hours`,`${e.stability.liquid.toFixed(0)} <small>h/wk</small>`,`Architect hours on no project`)}</div>`,C=Math.max(0,e.fragility?.survivesLosing??0),w=e.fragility?`<h3>Fragility</h3>
       <p class="note">${c(`warn`,`${e.fragility.spofNames.join(`, `)} ${e.fragility.spofNames.length===1?`is a single point of failure`:`are single points of failure`}`)}</p>
       <p class="note">Without ${e.fragility.spofNames.length===1?`that person`:`any one of them`}, a project is left with no architect on the current roster. ${C===0?`The firm can lose no one else before a project is without one.`:`The firm survives losing ${C} before a project is without one.`}</p>`:``;return`<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<title>prizma firm brief, ${t(e.firmName)}, ${t(e.week)}</title>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
/* the app's tokens (src/index.css): cool neutrals at hue 262, ink as the accent, verdict colours
   for state only */
:root{--bg:oklch(97.2% 0.003 262);--surface:oklch(100% 0 0);--ink:oklch(17.5% 0.012 262);--ink-2:oklch(43% 0.022 262);--ink-dim:oklch(51% 0.02 262);
--line:oklch(92.6% 0.006 262);--line-2:oklch(87.5% 0.009 262);
--green-text:oklch(48% 0.12 150);--amber-text:oklch(48% 0.1 70);--red-text:oklch(50% 0.17 25)}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--ink);font-family:"Geist",system-ui,sans-serif;font-size:12px;line-height:1.5;-webkit-font-smoothing:antialiased;padding:28px 0;font-variant-numeric:tabular-nums}
.page{position:relative;width:8.5in;min-height:11in;margin:0 auto 24px;padding:0.8in 0.85in 0.9in;background:var(--surface);border:1px solid var(--line);box-shadow:0 1px 2px oklch(17.5% 0.012 262/.04)}
.page::after{content:attr(data-foot);position:absolute;left:0.85in;right:0.85in;bottom:0.48in;padding-top:9px;font-size:10px;color:var(--ink-dim);border-top:1px solid var(--line)}
.page[data-foot=""]::after{content:none}
/* type: a title, a section, a figure, a label, the text; sentence case, nothing under 10 px */
.where{font-size:11px;font-weight:500;color:var(--ink-dim)}
h2{margin-top:4px;font-size:24px;line-height:1.15;font-weight:600;letter-spacing:-.025em}
h3{margin-top:30px;font-size:13px;font-weight:600}
h3 small,.k small{margin-left:6px;font-size:11px;font-weight:400;color:var(--ink-dim)}
.lede + table{margin-top:18px}
.lede{max-width:52em;margin-top:10px;font-size:12.5px;line-height:1.55;color:var(--ink-2)}
.note{max-width:56em;margin-top:8px;font-size:11.5px;line-height:1.55;color:var(--ink-2)}
.note b{font-weight:600;color:var(--ink)}
/* a verdict: a mark and words, in the state's colour */
.vd{display:inline-flex;align-items:center;gap:5px;font-weight:500;white-space:nowrap}
.vd svg{flex:none;width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.vd-good{color:var(--green-text)}.vd-warn{color:var(--amber-text)}.vd-bad{color:var(--red-text)}
.neg{color:var(--red-text)}
/* the cover */
.cover{display:flex;flex-direction:column}
.cover-top{display:flex;justify-content:space-between;align-items:baseline}
.brand{font-size:22px;font-weight:650;letter-spacing:-.045em;line-height:1}
.cover-tag{font-size:11.5px;color:var(--ink-2);text-align:right}
.cover-mid{margin:auto 0;padding:40px 0}
.cover-mid .where{font-size:13px}
.cover-mid h1{max-width:9em;margin-top:12px;font-size:54px;line-height:1.02;font-weight:600;letter-spacing:-.04em}
.cover-firm{margin-top:28px;padding-top:16px;font-size:14px;color:var(--ink-2);border-top:1px solid var(--line-2)}
.cover-firm b{display:block;margin-bottom:2px;font-size:18px;font-weight:600;letter-spacing:-.01em;color:var(--ink)}
.illus{max-width:34em;font-size:10.5px;line-height:1.5;color:var(--ink-dim)}
/* the two lead figures: side by side, a hairline between them, no boxes */
.leads{display:grid;grid-template-columns:1fr 1fr;margin-top:26px;border-top:1px solid var(--ink)}
.lead{padding:18px 26px 4px 0}
.lead + .lead{padding-left:26px;border-left:1px solid var(--line-2)}
.lead .k{font-size:12px;font-weight:500;color:var(--ink-2)}
.lead .v{margin-top:4px;font-size:40px;line-height:1.05;font-weight:600;letter-spacing:-.035em;white-space:nowrap}
.lead .v small{font-size:14px;font-weight:500;letter-spacing:0;color:var(--ink-2)}
.lead .vd{margin-top:6px;font-size:13px}
.lead .n{margin-top:10px;font-size:11.5px;line-height:1.5;color:var(--ink-2)}
.conf{margin-top:18px;font-size:11.5px;color:var(--ink-2)}
.conf.low{color:var(--amber-text)}
/* a row of figures: one rule above, hairlines between */
.figs{display:grid;grid-template-columns:repeat(4,1fr);margin-top:14px;border-top:1px solid var(--line-2);border-bottom:1px solid var(--line-2)}
.figs-3{grid-template-columns:repeat(3,1fr)}.figs-1{grid-template-columns:1fr}
.fig{padding:12px 14px 13px 0}
.fig + .fig{padding-left:14px;border-left:1px solid var(--line)}
.fig .k{font-size:11px;font-weight:500;color:var(--ink-2)}
.fig .v{margin-top:3px;font-size:20px;line-height:1.2;font-weight:600;letter-spacing:-.015em;white-space:nowrap}
.fig .v small{font-size:11.5px;font-weight:500;letter-spacing:0;color:var(--ink-2)}
.fig .n{margin-top:3px;font-size:10.5px;line-height:1.4;color:var(--ink-dim)}
/* tables and sums */
table{width:100%;margin-top:8px;border-collapse:collapse;font-size:11.5px}
thead th{padding:0 10px 7px 0;font-size:10.5px;font-weight:500;color:var(--ink-dim);text-align:left;border-bottom:1px solid var(--line-2)}
tbody th{font-weight:600;text-align:left}
tbody th,td{padding:8px 10px 8px 0;vertical-align:middle;border-bottom:1px solid var(--line)}
th.r,td.r{text-align:right}
td:last-child,th:last-child{padding-right:0}
.sum{margin-top:8px}
.sum div{display:flex;justify-content:space-between;gap:16px;padding:8px 0;font-size:11.5px;border-bottom:1px solid var(--line)}
.sum span:first-child{color:var(--ink-2)}
.sum small{margin-left:6px;font-size:10.5px;color:var(--ink-dim)}
.sum .tot{font-size:13px;font-weight:600;border-bottom:0;border-top:1px solid var(--ink);margin-top:-1px}
.sum .tot span:first-child{color:var(--ink)}
.method p{max-width:54em;margin-top:12px;font-size:12px;line-height:1.6;color:var(--ink-2)}.method p b{font-weight:600;color:var(--ink)}
@media print{body{background:#fff;padding:0}.page{border:0;box-shadow:none;margin:0;width:auto;min-height:auto;page-break-after:always;padding:0.3in 0.34in 0.6in}.page::after{left:0.34in;right:0.34in;bottom:0.2in}.page:last-child{page-break-after:auto}@page{size:letter;margin:0.5in}}
</style></head>
<body>

<div class="page cover" data-foot="">
  <div class="cover-top"><span class="brand">prizma</span><span class="cover-tag">Capacity and financial review<br>${t(e.week)}</span></div>
  <div class="cover-mid">
    <div class="where">Firm brief</div>
    <h1>What this firm can take on next.</h1>
    <div class="cover-firm"><b>${t(e.firmName)}</b>${e.peopleCount} people, ${e.projectCount} active projects</div>
  </div>
  ${f}
</div>

<div class="page" data-foot="${s}">
  <div class="where">Summary</div>
  <h2>The two numbers a principal decides on</h2>
  <p class="lede">The first says whether the firm can absorb new work. The second says whether the work it has pays. Everything else in this brief supports these two.</p>
  <div class="leads">
    <div class="lead"><div class="k">Stability Margin</div><div class="v">${_}</div><div class="n">What the firm can absorb before anyone moves or is hired. ${e.stability.liquid.toFixed(0)} architect hours a week are on no project.</div></div>
    <div class="lead"><div class="k">Net multiplier</div><div class="v">${r(e.firmYield)}</div>${c(l[v],u[v])}<div class="n">Net revenue per dollar of direct labor, on burdened cost (DPE). Target ${r(e.target)}, break-even rate ${r(e.breakEven)}.</div></div>
  </div>
  <p class="conf${y?` low`:``}">${t(o(e.confidenceLevel))} confidence: ${i(e.confidencePct)} of inputs confirmed</p>
  <h3>At a glance</h3>
  <div class="figs">
    ${g(`Profit <small>per week</small>`,n(e.weeklyProfit),`${i(e.marginPct)} margin`,e.weeklyProfit<0)}
    ${g(`Utilization`,i(e.utilization),`Typical range 70 to 85%`)}
    ${b}
    ${g(`Active projects`,String(e.projectCount),`${e.peopleCount} people`)}
  </div>
</div>

<div class="page" data-foot="${s}">
  <div class="where">Financial performance</div>
  <h2>The standard review, from the live model</h2>
  <p class="lede">The figures an A/E financial review reports, computed from the firm's current data.</p>
  <div class="figs">
    ${g(`Net multiplier`,r(e.firmYield),`Target ${r(e.target)}, break-even ${r(e.breakEven)}`)}
    ${g(`Overhead rate`,a(e.overheadRatePct),`On direct labor`)}
    ${g(`Utilization`,i(e.utilization),`Typical range 70 to 85%`)}
    ${g(`Revenue per person`,n(e.revenuePerPersonAnnual),`Annualized`)}
  </div>

  <h3>How the firm reaches profit <small>per week</small></h3>
  <div class="sum">
    <div><span>Net revenue</span><span>${n(e.pl.revenue)}</span></div>
    <div><span>Project labor<small>direct</small></span><span>${n(-e.pl.projectLabor)}</span></div>
    <div><span>Non-project labor<small>indirect</small></span><span>${n(-e.pl.nonProjectLabor)}</span></div>
    <div><span>Overhead<small>rent, software, admin</small></span><span>${n(-e.pl.overhead)}</span></div>
    <div class="tot"><span>Profit, ${i(e.marginPct)} margin</span><span${e.pl.profit<0?` class="neg"`:``}>${n(e.pl.profit)}</span></div>
  </div>

  <h3>By project <small>profit per week</small></h3>
  <table>
    <thead><tr><th scope="col">Project</th><th scope="col">Phase</th><th scope="col" class="r">Fee</th><th scope="col" class="r">Done</th><th scope="col" class="r">Multiplier</th><th scope="col" class="r">Profit</th><th scope="col">Verdict</th></tr></thead>
    <tbody>${p(e.projects)}</tbody>
  </table>
  ${x}
  <p class="note">The firm's ${r(e.firmYield)} is all revenue over all labor, <b>not the average of the project multipliers</b>. ${e.hasTeams?`Team labor adds up to firm labor and team revenue to firm revenue: the same rule at all three levels.`:`A small project and a large one do not weigh the same, so an average would mislead.`}</p>
</div>

<div class="page" data-foot="${s}">
  <div class="where">Capacity and risk</div>
  <h2>What happens next</h2>
  <p class="lede">A financial review says what already happened. These readings come from the same connections and say what the firm can take, and what it cannot lose.</p>
  <table>
    <thead><tr><th scope="col">Person</th><th scope="col">Role</th><th scope="col" class="r">Load</th><th scope="col" class="r">Projects</th><th scope="col">Verdict</th></tr></thead>
    <tbody>${h(e.people)}</tbody>
  </table>
  <h3>Stability Margin <small>where the unassigned hours are</small></h3>
  ${S}
  <h3>Cost of non-project time <small>per week</small></h3>
  <div class="sum">
    <div><span>Fragmentation<small>lost switching between projects</small></span><span>${n(e.nonProjectBreakdown.fragmentation)}</span></div>
    <div><span>Bench<small>architects on no project</small></span><span>${n(e.nonProjectBreakdown.bench)}</span></div>
    <div><span>Management<small>PM and principal time beyond their projects</small></span><span>${n(e.nonProjectBreakdown.management)}</span></div>
    <div class="tot"><span>Non-project labor</span><span>${n(e.nonProjectBreakdown.total)}</span></div>
  </div>
  ${w}
</div>

<div class="page method" data-foot="${s}">
  <div class="where">Basis and method</div>
  <h2>How these numbers are built</h2>
  <p>Every figure is <b>arithmetic on the firm's current data</b>, not a forecast. People are connected to projects; hours follow from those connections and each project's phase; cost follows from each person's burdened rate; firm numbers are sums rolled up, never averages of averages.</p>
  <h3>Prizma's terms in standard A/E vocabulary</h3>
  <table>
    <thead><tr><th scope="col">In this brief</th><th scope="col">Standard term</th><th scope="col">Note</th></tr></thead>
    <tbody>
      <tr><th scope="row">Net multiplier</th><td>Net multiplier</td><td>Net revenue over direct labor</td></tr>
      <tr><th scope="row">Break-even rate</th><td>Break-even rate</td><td>Overhead rate plus 1.0</td></tr>
      <tr><th scope="row">Utilization</th><td>Utilization rate</td><td>Hours on projects over hours available</td></tr>
      <tr><th scope="row">Burdened rate</th><td>DPE</td><td>Salary plus personnel expense</td></tr>
      <tr><th scope="row">Non-project labor</th><td>Indirect labor</td><td>A component of overhead</td></tr>
      <tr><th scope="row">Stability Margin, Silo Gap, fragility</th><td>None</td><td>Prizma's own readings</td></tr>
    </tbody>
  </table>
  <p>Where a value is not yet confirmed against a real proposal or timesheet, it carries an inherited assumption. The confidence line on the summary page says how much of the result rests on confirmed data.</p>
</div>

</body></html>`}function v(e){let t=window.open(``,`_blank`);return t?(t.document.open(),t.document.write(e),t.document.close(),t.focus(),t.setTimeout(()=>t.print(),400),!0):!1}function y(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}function b(e,t=`firm-brief.doc`){y(new Blob([`﻿`,e],{type:`application/msword`}),t)}export{b as downloadBriefAsWord,v as openBriefForPrint,_ as renderBriefHtml};