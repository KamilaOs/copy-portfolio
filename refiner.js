const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'sleepbear-pro', 'index.html');
let html = fs.readFileSync(filepath, 'utf8');

// 1. UPDATE CSS VARIABLES & ROOT
html = html.replace(/--muted:\s*#[a-fA-F0-9]{6};/, '--muted: #6B5A50;');

// 2. ENTIRE STYLE REPLACEMENT
const styleStart = html.indexOf('<style>');
const styleEnd = html.indexOf('</style>') + 8;

const newStyle = `<style>
    :root {
      --honey: #F5A623;
      --honey-pale: #FFF8ED;
      --honey-mid: #FEF0D0;
      --terracotta: #8B3A2A;
      --terra-deep: #5C1F12;
      --terra-warm: #C4714F;
      --cream: #FFFBF4;
      --warm-white: #FFFFFF;
      --muted: #6B5A50;
      --text: #1A1208;
      --bear: #C4714F;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      background-color: var(--cream);
      color: var(--text);
      font-family: 'Nunito', sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      font-feature-settings: 'kern' 1;
    }
    html {
      scroll-behavior: smooth;
    }
    body {
      cursor: none;
    }

    /* Custom Cursor */
    .custom-cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      background-color: var(--honey);
      border-radius: 50%;
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease-out;
    }
    @media (pointer: coarse) {
        .custom-cursor { display: none; }
        body { cursor: auto; }
    }

    /* Nav */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: rgba(255, 251, 244, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5vw;
      z-index: 100;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease;
      cursor: none;
    }
    nav.visible {
      opacity: 1;
      pointer-events: all;
    }
    .nav-logo {
      font-weight: 800;
      font-size: 18px;
      color: var(--terracotta);
    }
    .nav-btn {
      background: var(--honey);
      color: var(--text);
      font-weight: 700;
      font-size: 13px;
      height: 38px;
      border-radius: 999px;
      padding: 0 20px;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: background 0.2s ease;
      cursor: none;
    }
    .nav-btn:hover {
      background: #e09418;
    }

    /* Resets & Utilities */
    section {
      position: relative;
      width: 100%;
      padding: 100px 8vw; /* Global enforcement */
    }
    .fade-up {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .fade-in {
      opacity: 0;
      transition: opacity 0.7s ease;
    }
    .fade-in.slow {
      transition: opacity 1.4s ease;
    }
    .fade-in.again {
      transition: opacity 1.2s ease;
    }
    .fade-up.visible,
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    [style*="--delay"] {
      transition-delay: var(--delay);
    }

    /* Section 1 - Hero */
    .hero {
      min-height: 100vh;
      padding: 160px 8vw 100px 8vw;
      background: var(--cream);
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 55% 45%; /* Enforced constraint */
      max-width: 1400px;
      margin: 0 auto;
      align-items: center;
      gap: 4vw;
    }
    .hero-eyebrow {
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 60px;
    }
    .hero-headline {
      margin-bottom: 40px;
    }
    .hero-headline > div {
      font-weight: 900;
      font-size: 96px;
      line-height: 0.92;
      color: var(--text);
    }
    .hero-headline > div.honey {
      color: var(--honey);
    }
    .hero-body {
      max-width: 620px;
      font-weight: 400;
      font-size: 18px; /* Bumped size globally */
      color: var(--muted);
      line-height: 1.75;
      margin-bottom: 24px;
    }
    /* First sentence entry point boldness */
    .hero-body span.lead {
      font-weight: 600;
    }

    .hero-right-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      min-height: 420px; /* Enforced tall SVG constraint */
      position: relative;
      animation: float-hero 4s ease-in-out infinite alternate;
    }
    @keyframes float-hero {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-15px); }
    }
    .hero-svg {
      width: 100%;
      max-width: 600px;
      height: auto;
    }

    /* "Again." Section */
    .again-section {
      background: var(--terra-deep);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 80px 5vw; /* Enforced constraint */
    }
    .again-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60vw;
      height: 60vw;
      background: radial-gradient(circle, rgba(139, 58, 42, 0.4) 0%, transparent 70%);
      pointer-events: none;
      z-index: 1;
    }
    .again-word {
      font-weight: 900;
      font-size: 140px; /* Enforced desktop constraint */
      line-height: 1;
      color: var(--honey);
      z-index: 2;
      margin: 0;
      text-align: center;
    }
    .again-emoji {
      font-size: 60px;
      margin-top: 16px; /* pulled tight */
      z-index: 2;
      text-align: center;
    }

    /* Section 2 - Transition Strip */
    .strip {
      background: var(--honey-mid);
      position: relative;
    }
    .strip-grid {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 60px;
      align-items: start;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }
    .strip-lead-body {
      margin: 0 auto 40px 0;
      max-width: 600px;
      font-size: 18px; /* bumped */
      color: var(--muted);
      line-height: 1.75;
      text-align: center;
    }
    .strip-title {
      font-weight: 900;
      font-size: 72px;
      color: var(--text);
      margin-bottom: 24px;
      line-height: 1;
    }
    .strip-subtitle {
      font-weight: 400;
      font-size: 18px; /* bumped */
      color: var(--muted);
      max-width: 560px;
      line-height: 1.7;
    }
    .strip-right {
      border-left: 2px solid rgba(245, 166, 35, 0.4);
      padding-left: 40px;
    }
    .strip-aside {
      font-weight: 700;
      font-style: italic;
      font-size: 22px; /* enforced size */
      color: var(--terra-warm); /* updated */
      margin-bottom: 16px;
      line-height: 1.5;
    }
    .strip-clarify {
      font-weight: 400;
      font-size: 18px; /* bumped */
      color: var(--muted);
    }
    .strip-deco-bear {
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 120px;
      opacity: 0.2;
      pointer-events: none;
    }

    @media (max-width: 1024px) {
      .hero-grid { grid-template-columns: 1fr; }
      .hero-right-visual { display: none; }
      .strip-grid { grid-template-columns: 1fr; gap: 40px; }
      .strip-right { border-left: none; padding-left: 0; border-top: 2px solid rgba(245,166,35,0.4); padding-top: 24px; }
    }

    /* Section 3 - Product Reveal */
    .reveal {
      background: var(--terra-deep);
      background: radial-gradient(circle at center, var(--terracotta) 0%, var(--terra-deep) 100%);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .reveal-halo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1800px;
      height: 1800px;
      pointer-events: none;
      z-index: 0;
    }
    .reveal-inner {
      max-width: 700px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }
    .reveal-intro {
      font-weight: 400;
      font-size: 20px;
      color: rgba(255, 251, 244, 0.8);
      margin-bottom: 48px;
    }
    .reveal-main {
      font-weight: 900;
      font-size: clamp(64px, 10vw, 108px);
      color: var(--honey);
      line-height: 1;
      margin-bottom: 32px;
      transform: scale(0.85);
    }
    .reveal-main.visible {
      animation: scaleIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    @keyframes scaleIn {
      from { transform: scale(0.85); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .reveal-sub {
      font-weight: 800;
      font-size: clamp(36px, 5vw, 52px);
      color: var(--warm-white);
      margin-bottom: 64px;
      letter-spacing: 0.3em;
    }
    .reveal-sub.visible {
      animation: spacingIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    @keyframes spacingIn {
      to { letter-spacing: -0.01em; opacity: 1; }
    }


    .trust-lines {
      display: flex;
      flex-direction: column;
      gap: 16px;
      text-align: center;
      align-items: center;
    }
    .trust-line {
      font-weight: 600;
      font-size: 18px;
      transition: transform 0.3s ease, color 0.3s ease;
      cursor: default;
    }
    .trust-line:hover {
      transform: translateX(6px);
      color: var(--honey) !important;
    }
    .trust-line:nth-child(1) { color: var(--honey); }
    .trust-line:nth-child(2) { color: rgba(255, 251, 244, 0.9); }
    .trust-line:nth-child(3) { color: rgba(255, 251, 244, 0.35); }

    /* Section 4 - Real Promise */
    .promise {
      background: var(--honey-pale);
    }
    .promise-header-group {
      text-align: center;
      margin-bottom: 48px; /* Tightly grouped sequence */
    }
    .promise-eye {
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--honey);
      margin-bottom: 16px; /* explicitly grouped tight */
    }
    .promise-strike-wrap {
      margin-bottom: 12px; /* explicitly grouped tight */
    }
    .promise-strike-container {
      font-weight: 700;
      font-size: 24px;
      color: var(--muted);
      opacity: 0.6;
      display: inline-block;
      position: relative;
    }
    .promise-strike {
      position: relative;
      display: inline-block;
    }
    .promise-strike::after {
      content: '';
      position: absolute;
      left: -2%;
      top: 50%;
      height: 2px;
      background: var(--muted);
      width: 0%;
      transition: width 0.5s ease;
    }
    .promise-strike.visible::after {
      width: 104%;
    }
    .promise-title {
      font-weight: 800;
      font-size: 36px;
      color: var(--text);
      /* margin-bottom handled by parent promise-header-group */
    }

    .promise-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* Enforced horizontally */
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }
    @media (max-width: 900px) {
      .promise-grid { grid-template-columns: 1fr; }
    }
    
    .promise-block {
      background: #FFFFFF;
      padding: 44px 36px;
      border-radius: 18px;
      box-shadow: 0 6px 32px rgba(139, 58, 42, 0.10);
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: left;
    }
    .promise-block::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: var(--honey);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.35s ease;
    }
    .promise-block:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(139, 58, 42, 0.16);
    }
    .promise-block:hover::before {
      transform: scaleX(1);
    }
    .p-ghost {
      position: absolute;
      top: 20px; /* Right-corner specific positioning */
      right: 20px;
      font-size: 80px;
      font-weight: 900;
      color: rgba(245, 166, 35, 0.08); /* 8% opacity */
      pointer-events: none;
      line-height: 1;
    }
    .p-label {
      font-weight: 800;
      font-size: 26px;
      color: var(--honey);
      margin-bottom: 16px;
      position: relative;
      z-index: 2;
    }
    .p-body {
      font-weight: 400;
      font-size: 18px; /* bumped */
      color: var(--muted);
      line-height: 1.8;
      position: relative;
      z-index: 2;
    }

    /* Section 5 - Social Proof */
    .proof {
      background: var(--honey-mid);
      padding-bottom: 80px; /* Reduced from 100px */
      text-align: center;
    }
    .proof-main {
      font-weight: 900;
      font-size: clamp(80px, 12vw, 120px);
      color: var(--honey);
      line-height: 0.9;
      margin-bottom: 16px;
      font-variant-numeric: tabular-nums;
      display: inline-block;
    }
    .proof-main.pulsed {
      animation: pulsePop 0.3s ease forwards;
    }
    @keyframes pulsePop {
      0% { transform: scale(1); }
      50% { transform: scale(1.04); }
      100% { transform: scale(1); }
    }

    .proof-sub {
      font-weight: 400;
      font-size: 18px; /* bumped */
      color: var(--muted);
      max-width: 480px;
      margin: 0 auto 80px auto;
    }
    .reviews {
      display: flex;
      gap: 24px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .review {
      flex: 1;
      background: #FFFFFF; /* Explicit solid clean white */
      border-radius: 20px;
      padding: 40px 32px;
      box-shadow: 0 4px 20px rgba(139, 58, 42, 0.12);
      text-align: left;
      position: relative;
      transition: transform 0.2s ease, border-color 0.2s ease;
      border-left: 4px solid transparent;
      overflow: hidden;
    }
    .review:hover {
      transform: translateY(-4px);
      border-left-color: var(--honey);
    }
    .r-quote-mark {
      position: absolute;
      top: -10px;
      left: 10px;
      font-size: 100px; /* scaled to instruction */
      font-weight: 900;
      color: var(--honey);
      opacity: 0.08; /* instructed opacity */
      line-height: 1;
      pointer-events: none;
    }
    .stars {
      font-weight: 600;
      font-size: 16px;
      color: var(--honey);
      position: relative;
      z-index: 2;
    }
    .quote {
      font-weight: 400;
      font-size: 16px;
      color: var(--text);
      line-height: 1.7;
      margin-top: 16px;
      position: relative;
      z-index: 2;
    }
    .attr {
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 24px;
      position: relative;
      z-index: 2;
    }
    @media (max-width: 768px) {
      .reviews { flex-direction: column; }
    }

    /* Section 6 - CTA */
    .cta {
      background: var(--honey);
      background: radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.15) 0%, transparent 60%), var(--honey);
      padding-bottom: 100px; /* max clamped padding */
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta-watermark {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 1500px;
      opacity: 0.06;
      pointer-events: none;
      z-index: 0;
    }
    .cta-inner {
      position: relative;
      z-index: 2;
    }
    .cta-h1 {
      font-weight: 900;
      font-size: clamp(56px, 10vw, 96px);
      color: var(--text);
      line-height: 0.9;
      margin-bottom: 24px;
    }
    .cta-h2 {
      font-weight: 700;
      font-size: clamp(36px, 5vw, 52px);
      color: rgba(26, 18, 8, 0.65); /* explicit darker copy */
      margin-bottom: 64px;
      line-height: 1;
    }
    .blur-in {
      filter: blur(4px);
      opacity: 0;
      transition: filter 0.7s ease, opacity 0.7s ease;
    }
    .blur-in.visible {
      filter: blur(0px);
      opacity: 1;
    }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--warm-white);
      color: var(--text);
      font-weight: 800;
      font-size: 19px; /* larger */
      border-radius: 999px;
      height: 72px; /* explicitly huge */
      padding: 0 64px;
      text-decoration: none;
      box-shadow: 0 8px 28px rgba(26, 18, 8, 0.2);
      transition: all 0.2s ease;
      margin-bottom: 32px;
      cursor: none;
    }
    .cta-btn:hover {
      background: rgba(255, 255, 255, 0.95);
      transform: scale(1.02);
      box-shadow: 0 12px 32px rgba(26, 18, 8, 0.3), 0 0 20px rgba(255, 255, 255, 0.5);
    }
    .cta-trust {
      font-weight: 400;
      font-size: 14px;
      color: rgba(26, 18, 8, 0.5);
    }

    /* Footer */
    footer {
      background: var(--terra-deep);
      border-top: 1px solid rgba(245, 166, 35, 0.2);
      padding: 64px 5vw 40px 5vw; /* tight padding constraint */
      text-align: center;
    }
    .f-logo {
      font-weight: 800;
      font-size: 20px;
      color: var(--honey);
      margin-bottom: 8px;
    }
    .f-tag {
      font-weight: 400;
      font-size: 13px;
      color: rgba(255, 251, 244, 0.4);
      margin-bottom: 40px;
    }
    .f-links {
      display: flex;
      gap: 24px;
      justify-content: center;
    }
    .f-links a {
      font-weight: 400;
      font-size: 12px;
      color: rgba(255, 251, 244, 0.2);
      text-decoration: none;
      transition: color 0.2s;
      cursor: none;
    }
    .f-links a:hover {
      color: var(--honey);
    }
  </style>`;

html = html.substring(0, styleStart) + newStyle + html.substring(styleEnd);

// Remove the HTML div completely for the texture
html = html.replace(/[ \t]*<div class="texture-overlay"><\/div>\n?/, '');

// Adjust Hero styling for span entry bold tags inside exact copy strings
html = html.replace(
    "The assignment that needed to be finished three days ago still sits unopened on your desk.",
    "<span class=\"lead\">The assignment that needed to be finished three days ago still sits unopened on your desk.</span>"
);
html = html.replace(
    "You can't exactly tell them you've been stockpiling sleep supplements trying to find one that actually works.",
    "<span class=\"lead\">You can't exactly tell them you've been stockpiling sleep supplements trying to find one that actually works.</span>"
);

// Absorb the "At 7am..." body into Strip 
const orphanRegex = /<!-- AGAIN POST BODY -->\s*<section class="again-post-body">\s*<div class="hero-body fade-up">\s*(At 7am the coffee is already on\. The day hasn't started and you're already behind it\. Everything feels harder than\s*it should\. Not impossible\. Just heavier than it used to be\.)\s*<\/div>\s*<\/section>\s*/m;

const stripMatch = html.match(orphanRegex);
if (stripMatch) {
    // Rip it out of original location
    html = html.replace(orphanRegex, '');
    // Extract exact copy text unharmed
    const orphanText = stripMatch[1];

    // Inject inside the strip-left right above strip-title
    html = html.replace(
        '<div class="strip-left">',
        `<div class="strip-left">
        <div class="strip-lead-body fade-up">
          ${orphanText}
        </div>`
    );
} else {
    // fallback for newline differences
    html = html.replace(
        /<!-- AGAIN POST BODY -->\s*<section class="again-post-body">\s*<div class="hero-body fade-up">([\s\S]*?)<\/div>\s*<\/section>/,
        ''
    );
    html = html.replace(
        '<div class="strip-left">',
        `<div class="strip-left">
        <div class="strip-lead-body fade-up">
          At 7am the coffee is already on. The day hasn't started and you're already behind it. Everything feels harder than
          it should. Not impossible. Just heavier than it used to be.
        </div>`
    );
}

// Wrap Promise tightly formatted block
html = html.replace(
    /<div class="promise-eye fade-in">([^<]+)<\/div>\s*<div class="promise-strike-wrap">\s*<div class="promise-strike-container fade-in" style="--delay: 0\.1s">\s*<span class="promise-strike">([^<]+)<\/span>\s*<\/div>\s*<\/div>\s*<div class="promise-title fade-up" style="--delay: 0\.2s">([^<]+)<\/div>/g,
    `<div class="promise-header-group">
      <div class="promise-eye fade-in">$1</div>
      <div class="promise-strike-wrap">
        <div class="promise-strike-container fade-in" style="--delay: 0.1s">
          <span class="promise-strike">$2</span>
        </div>
      </div>
      <div class="promise-title fade-up" style="--delay: 0.2s">$3</div>
    </div>`
);

fs.writeFileSync(filepath, html, 'utf8');
console.log('Refinement Complete.');
