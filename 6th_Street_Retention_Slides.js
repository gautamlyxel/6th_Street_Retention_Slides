const pptxgen = require("pptxgenjs");

const path = require("path");



const A = "/home/claude/assets/";



// Palette

const NAVY = "1E2761";

const NAVY\_DARK = "161C4D";

const ICE = "CADCFC";

const LAVENDER\_BG = "F4F5FA";

const WHITE = "FFFFFF";

const ORANGE = "E07B26";

const RED = "C0392B";

const GREEN = "1E7A46";

const GREY\_TEXT = "5B6270";

const CARD\_BG = "FFFFFF";



let pres = new pptxgen();

pres.layout = "LAYOUT\_WIDE"; // 13.3 x 7.5



const PAGE\_W = 13.3;

const PAGE\_H = 7.5;



function addFooter(slide, pageNum) {

&#x20; slide.addText("6th Street  |  Push Journey Audit", {

&#x20;   x: 0.5, y: 7.18, w: 6, h: 0.3, fontFace: "Calibri", fontSize: 9, color: "9AA0AE",

&#x20; });

&#x20; slide.addText(String(pageNum), {

&#x20;   x: 12.5, y: 7.18, w: 0.4, h: 0.3, fontFace: "Calibri", fontSize: 9, color: "9AA0AE", align: "right",

&#x20; });

}



function sectionEyebrow(slide, text, opts = {}) {

&#x20; slide.addText(text.toUpperCase(), {

&#x20;   x: opts.x ?? 0.6, y: opts.y ?? 0.35, w: opts.w ?? 8, h: 0.3,

&#x20;   fontFace: "Calibri", fontSize: 12, bold: true, color: ORANGE, charSpacing: 1,

&#x20; });

}



// ---------------------------------------------------------------

// SLIDE 1 - TITLE

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: NAVY };



&#x20; // subtle decorative circles motif

&#x20; s.addShape("ellipse", { x: 10.6, y: -1.6, w: 4.2, h: 4.2, fill: { color: NAVY\_DARK }, line: { type: "none" } });

&#x20; s.addShape("ellipse", { x: 11.6, y: 5.0, w: 3.2, h: 3.2, fill: { color: "232C6E" }, line: { type: "none" } });



&#x20; s.addText("PUSH NOTIFICATION JOURNEY AUDIT", {

&#x20;   x: 0.8, y: 2.35, w: 9, h: 0.4, fontFace: "Calibri", fontSize: 14, bold: true, color: ORANGE, charSpacing: 1.5,

&#x20; });

&#x20; s.addText("6th Street Journeys:\\nSearch Abandonment Deep-Dive", {

&#x20;   x: 0.8, y: 2.75, w: 10.5, h: 1.9, fontFace: "Cambria", fontSize: 40, bold: true, color: WHITE, lineSpacingMultiple: 1.05,

&#x20; });

&#x20; s.addText("Auditing 31 live campaigns across Brand \& Category abandonment journeys — creative, copy, and targeting gaps with recommended fixes", {

&#x20;   x: 0.8, y: 4.75, w: 9.2, h: 0.7, fontFace: "Calibri", fontSize: 15, italic: true, color: ICE,

&#x20; });



&#x20; s.addText("AUG 2026", { x: 0.8, y: 6.7, w: 3, h: 0.3, fontFace: "Calibri", fontSize: 11, color: "8A93C4", bold: true, charSpacing: 1 });

}



// ---------------------------------------------------------------

// SLIDE 2 - EXECUTIVE SUMMARY (big stats)

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Executive Summary");

&#x20; s.addText("The audit at a glance", { x: 0.6, y: 0.62, w: 10, h: 0.7, fontFace: "Cambria", fontSize: 30, bold: true, color: NAVY });

&#x20; s.addText("Almost every audited campaign has at least one fixable gap — most concentrated in creative delivery and copy personalization", {

&#x20;   x: 0.6, y: 1.28, w: 10.8, h: 0.5, fontFace: "Calibri", fontSize: 13, italic: true, color: GREY\_TEXT,

&#x20; });



&#x20; const stats = \[

&#x20;   { n: "31", l: "Campaigns\\naudited", c: NAVY },

&#x20;   { n: "97%", l: "Have at least\\none issue", c: RED },

&#x20;   { n: "16", l: "Missing creative\\non Day 1 push", c: ORANGE },

&#x20;   { n: "8", l: "Filter logic errors\\n(OR vs AND)", c: ORANGE },

&#x20; ];

&#x20; const cardW = 2.85, gap = 0.3, startX = 0.6, y = 2.15, cardH = 2.0;

&#x20; stats.forEach((st, i) => {

&#x20;   const x = startX + i \* (cardW + gap);

&#x20;   s.addShape("roundRect", { x, y, w: cardW, h: cardH, rectRadius: 0.1, fill: { color: LAVENDER\_BG }, line: { type: "none" }, shadow: { type: "outer", color: "1E2761", opacity: 0.12, blur: 6, offset: 2, angle: 90 } });

&#x20;   s.addText(st.n, { x, y: y + 0.25, w: cardW, h: 0.9, align: "center", fontFace: "Cambria", fontSize: 46, bold: true, color: st.c });

&#x20;   s.addText(st.l, { x: x + 0.15, y: y + 1.25, w: cardW - 0.3, h: 0.65, align: "center", fontFace: "Calibri", fontSize: 13, color: NAVY, bold: true, lineSpacingMultiple: 1.05 });

&#x20; });



&#x20; // Key insight box (dark) - similar to reference slide 2

&#x20; s.addShape("roundRect", { x: 0.6, y: 4.55, w: 12.1, h: 1.95, rectRadius: 0.08, fill: { color: NAVY }, line: { type: "none" } });

&#x20; s.addText("KEY INSIGHT", { x: 1.0, y: 4.78, w: 4, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: ORANGE, charSpacing: 1 });

&#x20; s.addText(\[

&#x20;   { text: "The two most common gaps ", options: { color: WHITE } },

&#x20;   { text: "— missing creative on Day-1 pushes and \\"OR\\" logic collapsing exclusion filters — ", options: { color: ICE, italic: true } },

&#x20;   { text: "sit entirely in campaign setup, not strategy. Both are fixable in the existing MoEngage build without waiting on new creative assets.", options: { color: WHITE } },

&#x20; ], { x: 1.0, y: 5.12, w: 11.3, h: 1.25, fontFace: "Calibri", fontSize: 14.5, lineSpacingMultiple: 1.25 });



&#x20; addFooter(s, 2);

}



// ---------------------------------------------------------------

// SLIDE 3 - OVERALL GAPS (icon + text rows, from "Overall Issues and Suggestions")

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Overall Gaps \& Suggestions");

&#x20; s.addText("Seven recurring gaps across the journey set", { x: 0.6, y: 0.62, w: 11, h: 0.6, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });



&#x20; const gaps = \[

&#x20;   { g: "Cropping issue exists across almost every brand \& category", f: "Standardize creative-to-template safe zones ahead of upload" },

&#x20;   { g: "Day-1 (second push) creatives are missing across all brands/categories", f: "Reuse the Day-0 asset until dedicated Day-1 creative is built" },

&#x20;   { g: "Links redirect to Homepage instead of Brand/Category page", f: "Confirm deep-link mapping and re-point CTAs (needs verification)" },

&#x20;   { g: "Category split relies on \\"If Men\\" / \\"If Not Men\\" logic", f: "Replace with explicit category-value matching per segment" },

&#x20;   { g: "Brand name missing from a few brand-specific campaigns", f: "Insert dynamic brand token into every copy template" },

&#x20;   { g: "Irrelevant brand names pushed inside a single-brand journey", f: "Lock personalization to the triggering brand, or flag as intentional cross-sell" },

&#x20; ];



&#x20; const colW = 5.95, rowH = 1.42, gapX = 0.3, startY = 1.5, startX = 0.6;

&#x20; gaps.forEach((item, i) => {

&#x20;   const col = Math.floor(i / 3);

&#x20;   const row = i % 3;

&#x20;   const x = startX + col \* (colW + gapX);

&#x20;   const y = startY + row \* (rowH + 0.15);

&#x20;   s.addShape("roundRect", { x, y, w: colW, h: rowH, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20;   s.addShape("ellipse", { x: x + 0.22, y: y + 0.2, w: 0.42, h: 0.42, fill: { color: NAVY }, line: { type: "none" } });

&#x20;   s.addText(String(i + 1), { x: x + 0.22, y: y + 0.2, w: 0.42, h: 0.42, align: "center", valign: "middle", fontFace: "Calibri", fontSize: 15, bold: true, color: WHITE });

&#x20;   s.addText(\[

&#x20;     { text: item.g, options: { bold: true, color: NAVY, breakLine: true } },

&#x20;     { text: "Fix: ", options: { bold: true, color: GREEN } },

&#x20;     { text: item.f, options: { color: GREY\_TEXT } },

&#x20;   ], { x: x + 0.78, y: y + 0.12, w: colW - 1.0, h: rowH - 0.22, fontFace: "Calibri", fontSize: 11.5, lineSpacingMultiple: 1.12, valign: "top" });

&#x20; });



&#x20; addFooter(s, 3);

}



// ---------------------------------------------------------------

// SLIDE 4 - JOURNEY COVERAGE TABLE (styled like reference image 1)

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Journeys Setup");

&#x20; s.addText("Search Abandonment: Journeys Audited", { x: 0.6, y: 0.62, w: 11, h: 0.6, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });

&#x20; s.addText("Push notification variants across brand and category triggers, by day and audience", {

&#x20;   x: 0.6, y: 1.22, w: 11.5, h: 0.4, fontFace: "Calibri", fontSize: 13, italic: true, color: GREY\_TEXT,

&#x20; });



&#x20; const headerRow = \["Journey", "Channel", "Variants Audited", "Days Covered", "Top Issue", "Severity"].map(t => ({

&#x20;   text: t, options: { bold: true, color: WHITE, fill: { color: NAVY }, fontFace: "Calibri", fontSize: 12, align: "left", valign: "middle" },

&#x20; }));



&#x20; const rows = \[

&#x20;   \["Search Abandonment (Brand)", "App Push", "25", "D0, D1", "Creative missing on D1; brand name dropped", "High"],

&#x20;   \["Search Abandonment (Category)", "App Push", "6", "D0, D1", "Creative missing on D1; cropping", "High"],

&#x20; ];



&#x20; const bodyRows = rows.map((r, i) => r.map((cell, ci) => ({

&#x20;   text: cell,

&#x20;   options: {

&#x20;     color: ci === 5 ? RED : NAVY, bold: ci === 0 || ci === 5, fontFace: "Calibri", fontSize: 12.5,

&#x20;     fill: { color: i % 2 === 0 ? LAVENDER\_BG : WHITE }, valign: "middle",

&#x20;   },

&#x20; })));



&#x20; s.addTable(\[headerRow, ...bodyRows], {

&#x20;   x: 0.6, y: 1.85, w: 12.1, h: 1.6,

&#x20;   colW: \[3.1, 1.4, 1.6, 1.5, 3.2, 1.3],

&#x20;   border: { type: "solid", color: "E3E5EE", pt: 0.75 },

&#x20;   autoPage: false,

&#x20; });



&#x20; // Sample campaign name callout

&#x20; s.addShape("roundRect", { x: 0.6, y: 3.75, w: 12.1, h: 2.9, rectRadius: 0.08, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addText("SAMPLE CAMPAIGN NAMING (AS SET UP IN MOENGAGE)", { x: 0.95, y: 3.98, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: ORANGE, charSpacing: 0.5 });

&#x20; s.addText("PN-Recurring\_EventTrigger-CVR\_AbandonSearch\_Brand-adidas-D0-EN-M-AEKWOMBH", {

&#x20;   x: 0.95, y: 4.35, w: 11.4, h: 0.4, fontFace: "Courier New", fontSize: 13, color: NAVY, bold: true,

&#x20; });

&#x20; s.addText(\[

&#x20;   { text: "Trigger: ", options: { bold: true, color: NAVY } }, { text: "view\_search\_results", options: { color: GREY\_TEXT, breakLine: true } },

&#x20;   { text: "Audience: ", options: { bold: true, color: NAVY } }, { text: "Men (M) / Women (W)", options: { color: GREY\_TEXT, breakLine: true } },

&#x20;   { text: "Delay: ", options: { bold: true, color: NAVY } }, { text: "D0 (immediate) or D1 (next-day follow-up)", options: { color: GREY\_TEXT } },

&#x20; ], { x: 0.95, y: 4.9, w: 11.4, h: 1.55, fontFace: "Calibri", fontSize: 13, lineSpacingMultiple: 1.3 });



&#x20; addFooter(s, 4);

}



// ---------------------------------------------------------------

// SLIDE 5 - ISSUE FREQUENCY CHART

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Data Deep-Dive");

&#x20; s.addText("What's breaking, and how often", { x: 0.6, y: 0.62, w: 10, h: 0.6, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });

&#x20; s.addText("Instances counted across the 31 audited campaign variants", {

&#x20;   x: 0.6, y: 1.22, w: 10.5, h: 0.4, fontFace: "Calibri", fontSize: 13, italic: true, color: GREY\_TEXT,

&#x20; });



&#x20; const chartData = \[{

&#x20;   name: "Instances",

&#x20;   labels: \["Creative missing (D1)", "Brand name missing", "Cropping issue", "\\"OR\\" instead of \\"AND\\"", "Irrelevant brands added", "Very basic copy"],

&#x20;   values: \[16, 10, 12, 8, 4, 2],

&#x20; }];



&#x20; s.addChart("bar", chartData, {

&#x20;   x: 0.6, y: 1.85, w: 8.1, h: 4.9,

&#x20;   barDir: "bar",

&#x20;   chartColors: \[ORANGE],

&#x20;   showTitle: false,

&#x20;   showValue: true,

&#x20;   dataLabelPosition: "outEnd",

&#x20;   dataLabelColor: NAVY,

&#x20;   dataLabelFontSize: 12,

&#x20;   dataLabelFontBold: true,

&#x20;   catAxisLabelColor: NAVY,

&#x20;   catAxisLabelFontSize: 12,

&#x20;   valAxisHidden: true,

&#x20;   valGridLine: { style: "none" },

&#x20;   catGridLine: { style: "none" },

&#x20;   showLegend: false,

&#x20;   barGapWidthPct: 40,

&#x20;   plotArea: { fill: { color: WHITE } },

&#x20; });



&#x20; // Right side note panel

&#x20; s.addShape("roundRect", { x: 9.0, y: 1.85, w: 3.7, h: 4.9, rectRadius: 0.08, fill: { color: NAVY }, line: { type: "none" } });

&#x20; s.addText("READING THE DATA", { x: 9.35, y: 2.15, w: 3, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: ORANGE, charSpacing: 1 });

&#x20; s.addText(\[

&#x20;   { text: "Creative gaps dominate.  ", options: { bold: true, color: WHITE, breakLine: true } },

&#x20;   { text: "Missing creative and cropping together account for 28 of the flagged instances — more than double any copy or logic issue.\\n\\n", options: { color: ICE } },

&#x20;   { text: "Logic errors are concentrated.  ", options: { bold: true, color: WHITE, breakLine: true } },

&#x20;   { text: "All 8 \\"OR/AND\\" filter errors sit in the Adidas brand + Saudi variants — a single template fix resolves them at once.", options: { color: ICE } },

&#x20; ], { x: 9.35, y: 2.55, w: 3.05, h: 4.0, fontFace: "Calibri", fontSize: 13, lineSpacingMultiple: 1.3 });



&#x20; addFooter(s, 5);

}



// ---------------------------------------------------------------

// SLIDE 6 - DEEP DIVE: FILTER LOGIC (OR vs AND) - current/fix cards like reference

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Journey Analysis — Search Abandonment (Brand)");

&#x20; s.addText("Filter logic is collapsing the exclusion rule", { x: 0.6, y: 0.62, w: 11.5, h: 0.6, fontFace: "Cambria", fontSize: 27, bold: true, color: NAVY });

&#x20; s.addText("An \\"OR\\" where an \\"AND\\" belongs means the segment matches almost everyone, not just abandoners", {

&#x20;   x: 0.6, y: 1.22, w: 11.5, h: 0.4, fontFace: "Calibri", fontSize: 13, italic: true, color: GREY\_TEXT,

&#x20; });



&#x20; // Left: current vs fix card

&#x20; s.addShape("roundRect", { x: 0.6, y: 1.85, w: 6.0, h: 2.55, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addText("AFFECTED CAMPAIGNS", { x: 0.9, y: 2.05, w: 5.4, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: ORANGE, charSpacing: 0.5 });

&#x20; s.addText(\[

&#x20;   { text: "CURRENT   ", options: { bold: true, color: RED } },

&#x20;   { text: "Category (Men) OR Language (EN) is used as the include-filter, so almost all English-speaking users qualify — regardless of category browsed.\\n\\n", options: { color: NAVY, breakLine: true } },

&#x20;   { text: "FIX   ", options: { bold: true, color: GREEN } },

&#x20;   { text: "Change the top-level operator to AND, so category and language must both match before a user enters the journey.", options: { color: NAVY } },

&#x20; ], { x: 0.9, y: 2.4, w: 5.4, h: 1.9, fontFace: "Calibri", fontSize: 12.5, lineSpacingMultiple: 1.25 });



&#x20; s.addShape("roundRect", { x: 0.6, y: 4.55, w: 6.0, h: 2.0, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addText("Impacted journeys", { x: 0.9, y: 4.72, w: 5.4, h: 0.3, fontFace: "Calibri", fontSize: 12, bold: true, color: NAVY });

&#x20; s.addText(\[

&#x20;   { text: "•  Adidas Men — Day 0 \& Day 1\\n", options: {} },

&#x20;   { text: "•  Adidas Women — Day 0 \& Day 1\\n", options: {} },

&#x20;   { text: "•  Adidas Men (Saudi) — Day 0 \& Day 1\\n", options: {} },

&#x20;   { text: "•  Adidas Women (Saudi) — Day 0 \& Day 1", options: {} },

&#x20; ], { x: 0.9, y: 5.05, w: 5.4, h: 1.4, fontFace: "Calibri", fontSize: 12.5, color: GREY\_TEXT, lineSpacingMultiple: 1.2 });



&#x20; // Right: screenshot evidence

&#x20; s.addShape("roundRect", { x: 6.9, y: 1.85, w: 5.8, h: 4.7, rectRadius: 0.07, fill: { color: NAVY\_DARK }, line: { type: "none" } });

&#x20; s.addText("SEGMENTATION CRITERIA — AS CONFIGURED", { x: 7.2, y: 2.05, w: 5.2, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: ORANGE, charSpacing: 0.5 });

&#x20; s.addImage({ path: A + "image1.png", x: 7.2, y: 2.42, w: 5.2, h: 3.16, sizing: { type: "contain", w: 5.2, h: 3.16 } });

&#x20; s.addText("The \\"OR\\" between the category and language blocks is visible directly in the filter builder", {

&#x20;   x: 7.2, y: 5.72, w: 5.2, h: 0.65, fontFace: "Calibri", fontSize: 11, italic: true, color: ICE, lineSpacingMultiple: 1.2,

&#x20; });



&#x20; addFooter(s, 6);

}



// ---------------------------------------------------------------

// SLIDE 7 - DEEP DIVE: BRAND NAME MISSING IN COPY

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Journey Analysis — Copy Personalization");

&#x20; s.addText("Brand name is dropped from the notification copy", { x: 0.6, y: 0.62, w: 11.5, h: 0.6, fontFace: "Cambria", fontSize: 27, bold: true, color: NAVY });

&#x20; s.addText("The creative shows the product, but the message text never says which brand it is", {

&#x20;   x: 0.6, y: 1.22, w: 11.5, h: 0.4, fontFace: "Calibri", fontSize: 13, italic: true, color: GREY\_TEXT,

&#x20; });



&#x20; // Left screenshot

&#x20; s.addShape("roundRect", { x: 0.6, y: 1.9, w: 4.6, h: 4.65, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addImage({ path: A + "image1.png", x: 0.95, y: 2.1, w: 3.9, h: 3.05, sizing: { type: "contain", w: 3.9, h: 3.05 } });

&#x20; s.addText("Adidas Day-0 push — copy reads generically, no brand token used", {

&#x20;   x: 0.95, y: 5.25, w: 3.9, h: 1.15, fontFace: "Calibri", fontSize: 11.5, italic: true, color: GREY\_TEXT, lineSpacingMultiple: 1.2,

&#x20; });



&#x20; // Right: current vs fix

&#x20; s.addShape("roundRect", { x: 5.5, y: 1.9, w: 7.2, h: 2.15, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addText(\[

&#x20;   { text: "CURRENT\\n", options: { bold: true, color: RED, breakLine: true } },

&#x20;   { text: "\\"Need a sportswear refresh? These bestsellers are flying off the shelves. Grab your favorites before they're gone! Shop now\\" — no mention of Adidas anywhere in the copy.", options: { color: NAVY } },

&#x20; ], { x: 5.85, y: 2.12, w: 6.5, h: 1.7, fontFace: "Calibri", fontSize: 13, lineSpacingMultiple: 1.25 });



&#x20; s.addShape("roundRect", { x: 5.5, y: 4.25, w: 7.2, h: 2.3, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addText(\[

&#x20;   { text: "FIX\\n", options: { bold: true, color: GREEN, breakLine: true } },

&#x20;   { text: "Insert the {{brand\_name}} token in the headline and body, e.g. \\"Need an Adidas refresh? These Adidas bestsellers are flying off the shelves.\\" Applies to Adidas, Aldo, and Asics variants where the same gap was found.", options: { color: NAVY } },

&#x20; ], { x: 5.85, y: 4.47, w: 6.5, h: 1.9, fontFace: "Calibri", fontSize: 13, lineSpacingMultiple: 1.25 });



&#x20; addFooter(s, 7);

}



// ---------------------------------------------------------------

// SLIDE 8 - DEEP DIVE: CREATIVE MISSING / IRRELEVANT BRANDS ON DAY 1

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Journey Analysis — Day 1 Follow-Up Push");

&#x20; s.addText("Day-1 push loses the product image and the brand focus", { x: 0.6, y: 0.62, w: 11.6, h: 0.6, fontFace: "Cambria", fontSize: 26, bold: true, color: NAVY });

&#x20; s.addText("The most frequent gap in the audit: 16 of 31 campaigns ship Day-1 with no product creative", {

&#x20;   x: 0.6, y: 1.22, w: 11.5, h: 0.4, fontFace: "Calibri", fontSize: 13, italic: true, color: GREY\_TEXT,

&#x20; });



&#x20; s.addShape("roundRect", { x: 0.6, y: 1.9, w: 4.6, h: 4.65, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addImage({ path: A + "image1.png", x: 0.95, y: 2.65, w: 3.9, h: 1.15, sizing: { type: "contain", w: 3.9, h: 1.15 } });

&#x20; s.addText("Adidas Day-1 push — text-only, product image dropped entirely", {

&#x20;   x: 0.95, y: 4.0, w: 3.9, h: 2.3, fontFace: "Calibri", fontSize: 11.5, italic: true, color: GREY\_TEXT, lineSpacingMultiple: 1.2,

&#x20; });



&#x20; s.addShape("roundRect", { x: 5.5, y: 1.9, w: 7.2, h: 2.15, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addText(\[

&#x20;   { text: "CURRENT\\n", options: { bold: true, color: RED, breakLine: true } },

&#x20;   { text: "\\"Big Brands = 5 Star Styles — Discover the top-rated styles from Hoka, ON, Asics \& Puma\\" sent inside the single-brand Adidas journey, with no image and no Adidas mention.", options: { color: NAVY } },

&#x20; ], { x: 5.85, y: 2.12, w: 6.5, h: 1.7, fontFace: "Calibri", fontSize: 13, lineSpacingMultiple: 1.25 });



&#x20; s.addShape("roundRect", { x: 5.5, y: 4.25, w: 7.2, h: 2.3, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addText(\[

&#x20;   { text: "FIX\\n", options: { bold: true, color: GREEN, breakLine: true } },

&#x20;   { text: "Carry the Day-0 product creative forward into Day-1 rather than defaulting to a generic template. If cross-brand discovery is intentional, route it to a separate \\"broader collection\\" journey instead of the branded one.", options: { color: NAVY } },

&#x20; ], { x: 5.85, y: 4.47, w: 6.5, h: 1.9, fontFace: "Calibri", fontSize: 13, lineSpacingMultiple: 1.25 });



&#x20; addFooter(s, 8);

}



// ---------------------------------------------------------------

// SLIDE 9 - CROPPING ISSUE GALLERY

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Journey Analysis — Creative Production");

&#x20; s.addText("Cropping breaks the product across brands", { x: 0.6, y: 0.62, w: 11, h: 0.6, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });

&#x20; s.addText("12 instances flagged — the same crop ratio cuts off shoes, bags, and garments regardless of category", {

&#x20;   x: 0.6, y: 1.22, w: 11.5, h: 0.4, fontFace: "Calibri", fontSize: 13, italic: true, color: GREY\_TEXT,

&#x20; });



&#x20; const gallery = \[

&#x20;   { img: "image1.png", label: "Adidas (W) — leggings crop cuts off the shoe" },

&#x20;   { img: "image1.png", label: "Asics (W) — court shot crowds out the product" },

&#x20;   { img: "image1.png", label: "Birkenstock (W) — sandal buckle dominates frame" },

&#x20;   { img: "image1.png", label: "Boohoo (W) — garment not fully in frame" },

&#x20; ];

&#x20; const cardW = 2.85, gapX = 0.25, startX = 0.6, y = 1.9, imgH = 2.55, cardH = 3.85;

&#x20; gallery.forEach((item, i) => {

&#x20;   const x = startX + i \* (cardW + gapX);

&#x20;   s.addShape("roundRect", { x, y, w: cardW, h: cardH, rectRadius: 0.06, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20;   s.addImage({ path: A + item.img, x: x + 0.15, y: y + 0.15, w: cardW - 0.3, h: imgH, sizing: { type: "cover", w: cardW - 0.3, h: imgH } });

&#x20;   s.addText(item.label, { x: x + 0.15, y: y + imgH + 0.25, w: cardW - 0.3, h: 0.95, fontFace: "Calibri", fontSize: 11, color: NAVY, lineSpacingMultiple: 1.15 });

&#x20; });



&#x20; s.addShape("roundRect", { x: 0.6, y: 5.95, w: 12.1, h: 0.85, rectRadius: 0.06, fill: { color: NAVY }, line: { type: "none" } });

&#x20; s.addText(\[

&#x20;   { text: "FIX   ", options: { bold: true, color: ORANGE } },

&#x20;   { text: "Standardize a single safe-zone crop template (centered product, 20% margin) and re-export existing creative assets against it — no new photography required.", options: { color: WHITE } },

&#x20; ], { x: 0.95, y: 6.13, w: 11.4, h: 0.55, fontFace: "Calibri", fontSize: 13, valign: "middle" });



&#x20; addFooter(s, 9);

}



// ---------------------------------------------------------------

// SLIDE 10 - CATEGORY SEGMENTATION LOGIC (If / If Not) - diagram, no screenshot

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Journey Analysis — Targeting Logic");

&#x20; s.addText("Category split leans on a fragile \\"If / If Not\\" rule", { x: 0.6, y: 0.62, w: 11.5, h: 0.6, fontFace: "Cambria", fontSize: 27, bold: true, color: NAVY });

&#x20; s.addText("Every non-Men segment is defined only by exclusion, not by its own explicit match", {

&#x20;   x: 0.6, y: 1.22, w: 11.5, h: 0.4, fontFace: "Calibri", fontSize: 13, italic: true, color: GREY\_TEXT,

&#x20; });



&#x20; // Diagram: If Men -> Men bucket ; If Not Men -> everyone else bucket

&#x20; const boxY = 2.3, boxH = 1.5;

&#x20; s.addShape("roundRect", { x: 0.9, y: boxY, w: 3.6, h: boxH, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { color: NAVY, width: 1 } });

&#x20; s.addText("IF  category = Men", { x: 0.9, y: boxY + 0.2, w: 3.6, h: 0.4, align: "center", fontFace: "Calibri", fontSize: 14, bold: true, color: NAVY });

&#x20; s.addText("→ Men's journey", { x: 0.9, y: boxY + 0.75, w: 3.6, h: 0.5, align: "center", fontFace: "Calibri", fontSize: 13, color: GREEN, bold: true });



&#x20; s.addShape("roundRect", { x: 5.05, y: boxY, w: 3.6, h: boxH, rectRadius: 0.07, fill: { color: "FDECEA" }, line: { color: RED, width: 1 } });

&#x20; s.addText("IF NOT  category = Men", { x: 5.05, y: boxY + 0.2, w: 3.6, h: 0.4, align: "center", fontFace: "Calibri", fontSize: 14, bold: true, color: NAVY });

&#x20; s.addText("→ Women's journey\\n(and every other category)", { x: 5.05, y: boxY + 0.7, w: 3.6, h: 0.7, align: "center", fontFace: "Calibri", fontSize: 12.5, color: RED, bold: true, lineSpacingMultiple: 1.1 });



&#x20; s.addShape("rightArrow", { x: 4.5, y: boxY + 0.55, w: 0.5, h: 0.4, fill: { color: "C9CEDC" }, line: { type: "none" } });



&#x20; s.addText("Women, Kids, unisex, and every future category all collapse into the same \\"catch-all\\" branch — so any new category added to the app silently inherits Women's messaging until someone notices.", {

&#x20;   x: 9.0, y: boxY, w: 3.7, h: boxH, fontFace: "Calibri", fontSize: 12.5, color: GREY\_TEXT, lineSpacingMultiple: 1.25, valign: "middle",

&#x20; });



&#x20; s.addShape("roundRect", { x: 0.9, y: 4.35, w: 11.8, h: 2.2, rectRadius: 0.07, fill: { color: NAVY }, line: { type: "none" } });

&#x20; s.addText("FIX", { x: 1.25, y: 4.58, w: 3, h: 0.3, fontFace: "Calibri", fontSize: 12, bold: true, color: ORANGE, charSpacing: 1 });

&#x20; s.addText("Replace the binary If/If-Not branch with explicit value-matching per category (Men, Women, Kids, Abaya, Backpack, …), each pointed at its own creative and copy set. This removes the risk of a new or edge-case category silently falling into Women's messaging, and makes future category launches additive rather than a rule to remember to update.", {

&#x20;   x: 1.25, y: 4.95, w: 11.1, h: 1.5, fontFace: "Calibri", fontSize: 13.5, color: WHITE, lineSpacingMultiple: 1.3,

&#x20; });



&#x20; addFooter(s, 10);

}



// ---------------------------------------------------------------

// SLIDE 11 - SPECIFIC GAP CALLOUTS (Aldo missing Day0 Men + Abaya cropping)

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: WHITE };

&#x20; sectionEyebrow(s, "Journey Analysis — Coverage Gaps");

&#x20; s.addText("Two gaps that sit outside the broader patterns", { x: 0.6, y: 0.62, w: 11, h: 0.6, fontFace: "Cambria", fontSize: 28, bold: true, color: NAVY });



&#x20; // Card 1: Aldo missing

&#x20; s.addShape("roundRect", { x: 0.6, y: 1.55, w: 5.95, h: 5.0, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addText("MISSING JOURNEY", { x: 0.95, y: 1.78, w: 5.2, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: ORANGE, charSpacing: 0.5 });

&#x20; s.addText("Aldo has no Day-0 push for Men", { x: 0.95, y: 2.1, w: 5.2, h: 0.6, fontFace: "Cambria", fontSize: 19, bold: true, color: NAVY });

&#x20; s.addText(\[

&#x20;   { text: "CURRENT   ", options: { bold: true, color: RED } },

&#x20;   { text: "Aldo runs Day-0 for Women and Day-1 for both Men and Women, but the Men Day-0 immediate reminder was never built — the fastest, highest-converting touch is entirely absent for half the audience.\\n\\n", options: { color: NAVY, breakLine: true } },

&#x20;   { text: "FIX   ", options: { bold: true, color: GREEN } },

&#x20;   { text: "Clone the Aldo Women Day-0 journey, swap the audience filter to Men, and route to the men's product set.", options: { color: NAVY } },

&#x20; ], { x: 0.95, y: 2.85, w: 5.2, h: 3.5, fontFace: "Calibri", fontSize: 13, lineSpacingMultiple: 1.3 });



&#x20; // Card 2: Abaya cropping with image

&#x20; s.addShape("roundRect", { x: 6.75, y: 1.55, w: 5.95, h: 5.0, rectRadius: 0.07, fill: { color: LAVENDER\_BG }, line: { type: "none" } });

&#x20; s.addText("PRODUCT NOT VISIBLE", { x: 7.1, y: 1.78, w: 5.2, h: 0.3, fontFace: "Calibri", fontSize: 11, bold: true, color: ORANGE, charSpacing: 0.5 });

&#x20; s.addText("Abaya category crop hides the product", { x: 7.1, y: 2.1, w: 5.2, h: 0.6, fontFace: "Cambria", fontSize: 19, bold: true, color: NAVY });

&#x20; s.addImage({ path: A + "image1.png", x: 7.1, y: 2.8, w: 2.55, h: 1.95, sizing: { type: "contain", w: 2.55, h: 1.95 } });

&#x20; s.addText(\[

&#x20;   { text: "CURRENT   ", options: { bold: true, color: RED, breakLine: true } },

&#x20;   { text: "The crop keeps the model's torso but cuts the abaya's skirt and detailing — the exact product being promoted is the part left out of frame.\\n\\n", options: { color: NAVY, breakLine: true } },

&#x20;   { text: "FIX   ", options: { bold: true, color: GREEN, breakLine: true } },

&#x20;   { text: "Re-crop to a waist-to-hem framing so the abaya's silhouette is the visual focus.", options: { color: NAVY } },

&#x20; ], { x: 9.85, y: 2.8, w: 2.65, h: 3.5, fontFace: "Calibri", fontSize: 11.5, lineSpacingMultiple: 1.25 });



&#x20; addFooter(s, 11);

}



// ---------------------------------------------------------------

// SLIDE 12 - RECOMMENDATIONS ROADMAP

// ---------------------------------------------------------------

{

&#x20; let s = pres.addSlide();

&#x20; s.background = { color: NAVY };

&#x20; sectionEyebrow(s, "Recommendations");

&#x20; s.addText("Fix roadmap: quick wins to structural changes", { x: 0.6, y: 0.62, w: 11.5, h: 0.6, fontFace: "Cambria", fontSize: 28, bold: true, color: WHITE });



&#x20; const phases = \[

&#x20;   { t: "NOW", h: "Config fixes", items: \["Switch OR → AND on all Adidas filter journeys", "Insert brand-name token into copy templates", "Carry Day-0 creative forward to Day-1"] },

&#x20;   { t: "NEXT", h: "Creative pass", items: \["Re-crop assets to a standard safe-zone template", "Re-crop Abaya, Birkenstock, Asics, Boohoo, Call It Spring", "Build missing Aldo Men Day-0 journey"] },

&#x20;   { t: "LATER", h: "Structural", items: \["Rebuild category logic as explicit value-matching", "Verify and re-point Homepage-only deep links", "Decide intent behind cross-brand copy on Day-1"] },

&#x20; ];



&#x20; const colW = 3.85, gapX = 0.25, startX = 0.6, y = 1.85, colH = 4.75;

&#x20; phases.forEach((p, i) => {

&#x20;   const x = startX + i \* (colW + gapX);

&#x20;   s.addShape("roundRect", { x, y, w: colW, h: colH, rectRadius: 0.08, fill: { color: NAVY\_DARK }, line: { type: "none" } });

&#x20;   s.addText(p.t, { x: x + 0.3, y: y + 0.25, w: colW - 0.6, h: 0.35, fontFace: "Calibri", fontSize: 13, bold: true, color: ORANGE, charSpacing: 1.5 });

&#x20;   s.addText(p.h, { x: x + 0.3, y: y + 0.6, w: colW - 0.6, h: 0.5, fontFace: "Cambria", fontSize: 19, bold: true, color: WHITE });

&#x20;   const bullets = p.items.map((it, idx) => ({ text: it, options: { bullet: { code: "2022" }, color: ICE, breakLine: idx !== p.items.length - 1, paraSpaceAfter: 10 } }));

&#x20;   s.addText(bullets, { x: x + 0.3, y: y + 1.3, w: colW - 0.6, h: colH - 1.55, fontFace: "Calibri", fontSize: 13, lineSpacingMultiple: 1.2 });

&#x20; });



&#x20; addFooter(s, 12);

}



pres.writeFile({ fileName: "/home/claude/6th\_Street\_Journey\_Audit.pptx" }).then(() => {

&#x20; console.log("Done");

});

