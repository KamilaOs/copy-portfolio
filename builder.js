const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'sleepbear-pro', 'index.html');
let html = fs.readFileSync(filepath, 'utf8');

// 1. UPDATE CSS VARIABLES
html = html.replace(`    :root {
      --honey: #F5A623;
      --honey-pale: #FFF8ED;
      --honey-mid: #FEF0D0;
      --navy: #1B2B4B;
      --cream: #FFFBF4;
      --warm-white: #FFFFFF;
      --muted: #8C7B6E;
      --text: #1A1208;
      --bear: #C4714F;
    }`, `    :root {
      --honey: #F5A623;
      --honey-pale: #FFF8ED;
      --honey-mid: #FEF0D0;
      --terracotta: #8B3A2A;
      --terra-deep: #5C1F12;
      --terra-warm: #C4714F;
      --cream: #FFFBF4;
      --warm-white: #FFFFFF;
      --muted: #8C7B6E;
      --text: #1A1208;
      --bear: #C4714F;
    }`);

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
      --muted: #8C7B6E;
      --text: #1A1208;
      --bear: #C4714F;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--cream);
      color: var(--text);
      font-family: 'Nunito', sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      font-feature-settings: 'kern' 1;
      cursor: none;
    }

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

    .texture-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.35;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

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

    section {
      position: relative;
      width: 100%;
      min-padding: 100px 8vw;
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

    .hero {
      min-height: 100vh;
      padding: 160px 8vw 100px 8vw;
      background: var(--cream);
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 60% 40%;
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
      font-size: 18px;
      color: var(--muted);
      line-height: 1.75;
      margin-bottom: 24px;
    }

    .hero-right-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
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

    .again-section {
      background: var(--terra-deep);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 100px 8vw;
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
      font-size: clamp(100px, 12vw, 240px);
      line-height: 1;
      color: var(--honey);
      z-index: 2;
      margin: 0;
      text-align: center;
    }
    .again-emoji {
      font-size: 60px;
      margin-top: 24px;
      z-index: 2;
      text-align: center;
    }
    .again-post-body {
      background: var(--cream);
      padding: 120px 8vw;
      text-align: center;
    }
    .again-post-body .hero-body {
      margin: 0 auto;
      max-width: 800px;
      font-size: 22px;
      color: var(--text);
    }

    .strip {
      background: var(--honey-mid);
      padding: 120px 8vw;
      position: relative;
    }
    .strip::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(26,18,8,0.02) 10px, rgba(26,18,8,0.02) 11px);
      pointer-events: none;
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
    .strip-title {
      font-weight: 900;
      font-size: 72px;
      color: var(--text);
      margin-bottom: 24px;
      line-height: 1;
    }
    .strip-subtitle {
      font-weight: 400;
      font-size: 20px;
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
      font-size: 22px;
      color: var(--terra-warm);
      margin-bottom: 16px;
      line-height: 1.5;
    }
    .strip-clarify {
      font-weight: 400;
      font-size: 16px;
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

    .reveal {
      background: var(--terra-deep);
      background: radial-gradient(circle at center, var(--terracotta) 0%, var(--terra-deep) 100%);
      padding: 160px 8vw;
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

    .promise {
      background: var(--honey-pale);
      padding: 160px 8vw;
    }
    .promise-eye {
      text-align: center;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--honey);
      margin-bottom: 24px;
    }
    .promise-strike-container {
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      color: var(--muted);
      opacity: 0.6;
      margin-bottom: 24px;
      display: inline-block;
      position: relative;
    }
    .promise-strike-wrap {
      text-align: center;
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
      transition: width 0.8s ease;
    }
    .promise-strike.visible::after {
      width: 104%;
    }
    
    .promise-title {
      text-align: center;
      font-weight: 800;
      font-size: 36px;
      color: var(--text);
      margin-bottom: 80px;
    }

    .promise-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .promise-block {
      background: var(--warm-white);
      padding: 48px;
      border-radius: 20px;
      box-shadow: 0 8px 40px rgba(140, 60, 20, 0.10);
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
      transform: translateY(-6px);
      box-shadow: 0 16px 50px rgba(140, 60, 20, 0.15);
    }
    .promise-block:hover::before {
      transform: scaleX(1);
    }
    .p-ghost {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 80px;
      font-weight: 900;
      color: rgba(245, 166, 35, 0.10);
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
      font-size: 16px;
      color: var(--muted);
      line-height: 1.8;
      position: relative;
      z-index: 2;
    }

    @media (max-width: 1024px) {
      .promise-grid { grid-template-columns: 1fr; }
    }

    .proof {
      background: var(--honey-mid);
      padding: 160px 8vw;
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
      font-size: 20px;
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
      background: var(--warm-white);
      border-radius: 20px;
      padding: 40px 32px;
      box-shadow: 0 8px 32px rgba(139, 58, 42, 0.12);
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
      font-size: 120px;
      font-weight: 900;
      color: var(--honey);
      opacity: 0.08;
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

    .cta {
      background: var(--honey);
      background: radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.15) 0%, transparent 60%), var(--honey);
      padding: 160px 8vw;
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
      color: rgba(26, 18, 8, 0.55);
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
      font-size: 18px;
      border-radius: 999px;
      height: 64px;
      padding: 0 48px;
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

    footer {
      background: var(--terra-deep);
      border-top: 1px solid rgba(245, 166, 35, 0.2);
      padding: 80px 8vw 40px 8vw;
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

const SVGS = {
    heroVisual: `<svg class="hero-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <!-- abstract blob -->
  <path fill="var(--honey)" fill-opacity="0.8" d="M373.5,-375C466.5,-269,512.5,-134.5,516,-3.5C519.5,127.5,480.5,255,387.5,334C294.5,413,147.5,443.5,6.5,437C-134.5,430.5,-269,387,-349.5,308C-430,229,-456.5,114.5,-445.5,11C-434.5,-92.5,-386,-185,-305.5,-291C-225,-397,-112.5,-516,11,-527C134.5,-538,280.5,-481,373.5,-375Z" transform="translate(250 250) scale(0.65)" />
  <path fill="var(--terra-warm)" fill-opacity="0.6" d="M304.5,-339.5C397,-250,476.5,-125,489.5,13C502.5,151,449,302,356.5,404C264,506,132,559,1.5,557.5C-129,556,-258,500,-354.5,398C-451,296,-515,148,-487,-28C-459,-204,-339,-408,-246.5,-497.5C-154,-587,-77,-562,24,-586C125,-610,212,-429,304.5,-339.5Z" transform="translate(250 250) scale(0.55)" />
  <g fill="var(--terracotta)">
    <circle cx="150" cy="180" r="15"/>
    <circle cx="138" cy="168" r="6"/>
    <circle cx="162" cy="168" r="6"/>
    <circle cx="380" cy="300" r="22"/>
    <circle cx="362" cy="285" r="9"/>
    <circle cx="398" cy="285" r="9"/>
    <circle cx="100" cy="350" r="10"/>
    <circle cx="92" cy="342" r="4"/>
    <circle cx="108" cy="342" r="4"/>
  </g>
  <g fill="var(--text)" opacity="0.3">
    <circle cx="450" cy="120" r="3"/>
    <circle cx="250" cy="80" r="2"/>
    <circle cx="80" cy="220" r="1.5"/>
    <circle cx="280" cy="420" r="2.5"/>
  </g>
  <g fill="rgba(196,113,79,0.7)" font-family="Nunito, sans-serif" font-weight="900">
    <text x="200" y="140" font-size="24" transform="rotate(-15 200 140)">z</text>
    <text x="220" y="110" font-size="18" transform="rotate(-5 220 110)">z</text>
    <text x="240" y="90" font-size="14" transform="rotate(10 240 90)">z</text>
    <text x="320" y="220" font-size="32" transform="rotate(-10 320 220)">z</text>
    <text x="350" y="190" font-size="24" transform="rotate(5 350 190)">z</text>
  </g>
</svg>`,
    haloReveal: `<svg class="reveal-halo" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="var(--honey)" stroke-opacity="0.15">
    <circle cx="500" cy="500" r="200" stroke-width="60"/>
    <circle cx="500" cy="500" r="320" stroke-width="40"/>
    <circle cx="500" cy="500" r="420" stroke-width="20"/>
    <circle cx="500" cy="500" r="500" stroke-width="10"/>
    <circle cx="500" cy="500" r="560" stroke-width="4"/>
    <circle cx="500" cy="500" r="700" stroke-width="2"/>
    <circle cx="500" cy="500" r="850" stroke-width="1"/>
  </g>
</svg>`,
    watermarkBear: `<svg class="cta-watermark" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M120 160 C120 100, 180 80, 250 80 C320 80, 380 100, 380 160 C380 220, 340 300, 250 300 C160 300, 120 220, 120 160 Z" />
    <circle cx="150" cy="120" r="30" />
    <circle cx="350" cy="120" r="30" />
    <path d="M210 200 Q250 220 290 200" />
    <circle cx="210" cy="160" r="5" fill="#ffffff" />
    <circle cx="290" cy="160" r="5" fill="#ffffff" />
  </g>
</svg>`,
    stripBear: `<svg class="strip-deco-bear" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g fill="var(--terra-warm)">
    <circle cx="100" cy="110" r="50"/>
    <circle cx="65" cy="70" r="20"/>
    <circle cx="135" cy="70" r="20"/>
  </g>
</svg>`
};

let newBody = `  <div class="custom-cursor" id="custom-cursor"></div>
  <div class="texture-overlay"></div>
  <nav id="nav">
    <div class="nav-logo">Sleep🐻Bear Pro</div>
    <a href="#" class="nav-btn">Buy Now &rarr;</a>
  </nav>

  <!-- SECTION 1 -->
  <section class="hero">
    <div class="hero-grid">
      <div class="hero-left-content">
        <div class="hero-eyebrow fade-in" style="text-align: left;">FINALLY. A GOOD NIGHT'S SLEEP. 🌙</div>
        <div class="hero-headline">
          <div class="fade-up" style="--delay: 0s">You're not lazy.</div>
          <div class="fade-up" style="--delay: 0.12s">You're not dramatic.</div>
          <div class="honey fade-up" style="--delay: 0.24s">You just haven't</div>
          <div class="honey fade-up" style="--delay: 0.36s">been sleeping well.</div>
        </div>
        <div class="hero-body fade-in" style="--delay: 0.8s">
          The assignment that needed to be finished three days ago still sits unopened on your desk. Your friends can't
          understand why you won't come out on Friday night.
        </div>
        <div class="hero-body fade-in">
          You can't exactly tell them you've been stockpiling sleep supplements trying to find one that actually works.
          That's a conversation that ends with them joking about you getting old. So you just say you're tired.
        </div>
      </div>
      <div class="hero-right-visual fade-in" style="--delay: 0.5s">
        ${SVGS.heroVisual}
      </div>
    </div>
  </section>

  <!-- AGAIN BANNER -->
  <section class="again-section">
    <div class="again-glow"></div>
    <div class="again-word fade-in">Again.</div>
    <div class="again-emoji fade-in" style="--delay: 0.4s">😮‍💨</div>
  </section>

  <!-- AGAIN POST BODY -->
  <section class="again-post-body">
    <div class="hero-body fade-up">
      At 7am the coffee is already on. The day hasn't started and you're already behind it. Everything feels harder than
      it should. Not impossible. Just heavier than it used to be.
    </div>
  </section>

  <!-- SECTION 2 -->
  <section class="strip">
    <div class="strip-grid">
      <div class="strip-left">
        <div class="strip-title fade-up">You deserve real sleep.</div>
        <div class="strip-subtitle fade-up" style="--delay: 0.1s">Not an overpriced magic potion in a capsule that promises
          you'll sleep like a newborn every night.</div>
      </div>
      <div class="strip-right fade-up" style="--delay: 0.2s">
        <div class="strip-aside">Had anyone actually slept with a newborn in the room?</div>
        <div class="strip-clarify">Not the experience we want to give you.</div>
      </div>
    </div>
    ${SVGS.stripBear}
  </section>

  <!-- SECTION 3 -->
  <section class="reveal">
    ${SVGS.haloReveal}
    <div class="reveal-inner">
      <div class="reveal-intro fade-up">The only thing we can offer you is this:</div>
      <div class="reveal-main fade-in slow">Gummy Bears. 🐻</div>
      <div class="reveal-sub fade-in slow" style="--delay: 0.3s">SleepBear Pro.</div>
      <div class="trust-lines">
        <div class="trust-line fade-up" style="--delay: 0.5s">✓ No side effects.</div>
        <div class="trust-line fade-up" style="--delay: 0.7s">✓ No empty promises.</div>
        <div class="trust-line fade-up" style="--delay: 0.9s">✓ No newborns.</div>
      </div>
    </div>
  </section>

  <!-- SECTION 4 -->
  <section class="promise">
    <div class="promise-eye fade-in">WHAT WE CAN PROMISE</div>
    <div class="promise-strike-wrap">
      <div class="promise-strike-container fade-in" style="--delay: 0.1s">
        <span class="promise-strike">We can't promise you'll sleep like a newborn.</span>
      </div>
    </div>
    <div class="promise-title fade-up" style="--delay: 0.2s">But we can promise this:</div>

    <div class="promise-grid">
      <div class="promise-block fade-up" style="--delay: 0.1s">
        <div class="p-ghost">01</div>
        <div class="p-label">The assignment. 📋</div>
        <div class="p-body">After a restful sleep, that work that felt impossible will just feel like work again.</div>
      </div>
      <div class="promise-block fade-up" style="--delay: 0.2s">
        <div class="p-ghost">02</div>
        <div class="p-label">The Friday night. 🍻</div>
        <div class="p-body">You'll have enough energy to actually show up. And mean it.</div>
      </div>
      <div class="promise-block fade-up" style="--delay: 0.3s">
        <div class="p-ghost">03</div>
        <div class="p-label">The life. 🎁</div>
        <div class="p-body">The one everyone keeps telling you should feel like a gift. Will start to feel a little more
          like one.</div>
      </div>
    </div>
  </section>

  <!-- SECTION 5 -->
  <section class="proof">
    <div class="proof-main fade-up" id="counter">0</div>
    <br>
    <div class="proof-sub fade-up" style="--delay: 0.1s">people already woke up feeling like themselves again. 🌅</div>
    <div class="reviews">
      <div class="review fade-up" style="--delay: 0.1s">
        <div class="r-quote-mark">"</div>
        <div class="stars">★★★★★</div>
        <div class="quote">"I stopped dreading my alarm. That's all I wanted."</div>
        <div class="attr">— JAMIE, 31</div>
      </div>
      <div class="review fade-up" style="--delay: 0.2s">
        <div class="r-quote-mark">"</div>
        <div class="stars">★★★★★</div>
        <div class="quote">"No grogginess. No weird dreams. Just actually woke up fine."</div>
        <div class="attr">— MARCUS, 28</div>
      </div>
      <div class="review fade-up" style="--delay: 0.3s">
        <div class="r-quote-mark">"</div>
        <div class="stars">★★★★★</div>
        <div class="quote">"I didn't believe gummies would work. Now I'm the person recommending them to everyone."</div>
        <div class="attr">— RACHEL, 34</div>
      </div>
    </div>
  </section>

  <!-- SECTION 6 -->
  <section class="cta">
    ${SVGS.watermarkBear}
    <div class="cta-inner">
      <div class="cta-h1 fade-up">Buy today. 🛒</div>
      <div class="cta-h2 blur-in" style="--delay: 0.1s">Sleep better tomorrow.</div>
      <a href="#" class="cta-btn fade-up" style="--delay: 0.2s">Buy Today — Sleep Better Tomorrow</a>
      <div class="cta-trust fade-in" style="--delay: 0.3s">
        No side effects. No empty promises. <br>
        8,900+ sleepers can't be wrong. 🐻
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="f-logo">Sleep🐻Bear Pro</div>
    <div class="f-tag">Finally. A good night's sleep.</div>
    <div class="f-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Contact</a>
    </div>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      /* Custom cursor logic */
      const cursor = document.getElementById('custom-cursor');
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px', threshold: 0.12 });

      document.querySelectorAll('.fade-up, .fade-in, .blur-in, .promise-strike').forEach(el => observer.observe(el));

      const nav = document.getElementById('nav');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) nav.classList.add('visible');
        else nav.classList.remove('visible');
      });

      // Counter animation
      const counter = document.getElementById('counter');
      let counted = false;
      const cntObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counted) {
          counted = true;
          let start = null;
          const duration = 1500;
          const final = 8900;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const ease = 1 - Math.pow(2, -10 * progress); // easeOutExpo
            counter.innerText = Math.floor(ease * final).toLocaleString() + '+';
            if (progress < 1) window.requestAnimationFrame(step);
            else {
              counter.innerText = "8,900+";
              counter.classList.add('pulsed');
            }
          };
          window.requestAnimationFrame(step);
          cntObserver.disconnect();
        }
      }, { threshold: 0.5 });
      cntObserver.observe(counter);
    });
  </script>`;

const bodyStart = html.indexOf('<body>') + 6;
const bodyEnd = html.indexOf('</body>');

html = html.substring(0, bodyStart) + '\n' + newBody + '\n' + html.substring(bodyEnd);

fs.writeFileSync(filepath, html, 'utf8');
console.log('Update Complete.');
