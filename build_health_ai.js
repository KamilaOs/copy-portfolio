const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'health-ai', 'index.html');
const sarahImg = 'https://raw.githubusercontent.com/KamilaOs/copy-portfolio/main/health-ai/assets/sarah.png'; // Will use placeholders or local if I can push them correctly, but for now I'll use the relative paths I'll create
// Actually I'll use data URIs or just placeholders that I'll replace with actual relative paths after pushing the generated images to assets folder.
// Since I can't easily "push" assets to subfolder via run_command without moving them first:

/* 
Generated Images:
C:\Users\Vilius\.gemini\antigravity\brain\0613cc17-4653-46a9-83b2-4975fc6073f0\sarah_j_avatar_1773080223906.png
C:\Users\Vilius\.gemini\antigravity\brain\0613cc17-4653-46a9-83b2-4975fc6073f0\mark_t_avatar_1773080238166.png
C:\Users\Vilius\.gemini\antigravity\brain\0613cc17-4653-46a9-83b2-4975fc6073f0\elena_r_avatar_1773080251431.png
*/

const newHead = `
    <title>Health-AI | Healthcare that hears you.</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --deep-sage: #1A3C34;
            --mid-sage: #2D5C4E;
            --sage-light: #4A8C75;
            --warm-ivory: #FAF7F2;
            --soft-gold: #C9A84C;
            --gold-pale: #FBF3DC;
            --text-dark: #0F1F1A;
            --muted-warm: #6B7C78;
            --white-warm: #FFFFFF;
            --sage-border: rgba(74,140,117,0.15);
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
            font-family: 'DM Sans', sans-serif;
            background-color: var(--warm-ivory);
            color: var(--text-dark);
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
            cursor: none;
        }

        h1, h2, h3, h4, .serif {
            font-family: 'Instrument Serif', serif;
            font-weight: 400;
        }

        /* Custom Cursor */
        .custom-cursor {
            width: 10px;
            height: 10px;
            background: var(--soft-gold);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            transition: transform 0.12s ease;
            transform: translate(-50%, -50%);
        }
        @media (pointer: coarse) { .custom-cursor { display: none; } body { cursor: auto; } }

        /* Animations */
        .fade-up {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-in {
            opacity: 0;
            transition: opacity 0.7s ease;
        }
        .fade-up.visible, .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Nav */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 72px;
            padding: 0 8vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(250,247,242,0.94);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid var(--sage-border);
            z-index: 1000;
            transform: translateY(-100%);
            transition: transform 0.4s ease;
        }
        nav.scrolled {
            transform: translateY(0);
        }

        .nav-logo {
            font-weight: 700;
            font-size: 20px;
            color: var(--deep-sage);
        }

        .nav-cta {
            background: var(--soft-gold);
            color: var(--text-dark);
            font-weight: 600;
            font-size: 14px;
            height: 38px;
            padding: 0 20px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: transform 0.2s ease;
        }
        .nav-cta:hover { transform: scale(1.05); }

        /* Sections */
        section {
            padding: 120px 8vw;
            position: relative;
        }

        .eyebrow {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--sage-light);
            margin-bottom: 24px;
            display: block;
        }

        /* Hero */
        .hero {
            min-height: 100vh;
            display: grid;
            grid-template-columns: 52% 48%;
            align-items: center;
            gap: 4vw;
            background: var(--warm-ivory);
            padding-top: 120px;
        }

        .hero-headline {
            font-size: 76px;
            line-height: 1.05;
            color: var(--text-dark);
            font-style: italic;
            margin-bottom: 32px;
        }

        .hero-body {
            font-size: 18px;
            color: var(--muted-warm);
            line-height: 1.8;
            max-width: 480px;
            margin-bottom: 40px;
        }

        .hero-ctas {
            display: flex;
            gap: 16px;
            margin-bottom: 60px;
        }

        .btn {
            height: 58px;
            padding: 0 36px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 16px;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .btn-primary {
            background: var(--soft-gold);
            color: var(--text-dark);
        }
        .btn-primary:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 24px rgba(201,168,76,0.3);
        }

        .btn-secondary {
            border: 1.5px solid var(--sage-light);
            color: var(--deep-sage);
        }
        .btn-secondary:hover {
            background: var(--gold-pale);
        }

        .hero-stats {
            display: flex;
            gap: 40px;
            border-top: 1px solid var(--sage-border);
            padding-top: 32px;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
        }

        .stat-num {
            font-family: 'Instrument Serif', serif;
            font-size: 48px;
            color: var(--deep-sage);
            line-height: 1;
        }

        .stat-label {
            font-size: 12px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--muted-warm);
            margin-top: 4px;
        }

        .hero-visual {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .float-anim {
            animation: float 5s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        /* How It Works */
        .how {
            background: var(--deep-sage);
            color: var(--warm-ivory);
        }

        .how-headline {
            font-size: 64px;
            font-style: italic;
            margin-bottom: 12px;
        }

        .how-subheadline {
            font-size: 20px;
            color: rgba(250,247,242,0.6);
            margin-bottom: 80px;
        }

        .how-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            position: relative;
        }

        .step-card {
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 40px 32px;
            position: relative;
            transition: all 0.3s ease;
        }

        .step-card:hover {
            background: rgba(255,255,255,0.1);
            transform: translateY(-4px);
        }

        .step-num-deco {
            font-family: 'Instrument Serif', serif;
            font-size: 72px;
            color: var(--soft-gold);
            opacity: 0.4;
            line-height: 1;
            margin-bottom: 12px;
        }

        .step-label {
            font-size: 10px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--sage-light);
            margin-bottom: 12px;
            display: block;
        }

        .step-title {
            font-size: 36px;
            font-style: italic;
            margin-bottom: 16px;
        }

        .step-body {
            font-size: 16px;
            line-height: 1.75;
            color: rgba(250,247,242,0.65);
        }

        .step-arrow {
            position: absolute;
            top: 50%;
            right: -16px;
            transform: translateY(-50%);
            font-size: 24px;
            color: var(--soft-gold);
            opacity: 0.4;
            z-index: 2;
        }

        /* Testimonials */
        .testimonials {
            background: var(--warm-ivory);
        }

        .testi-headline {
            font-size: 64px;
            font-style: italic;
            margin-bottom: 80px;
        }

        .testi-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .testi-card {
            background: var(--white-warm);
            border-radius: 20px;
            padding: 36px 32px;
            box-shadow: 0 4px 32px rgba(26,60,52,0.08);
            position: relative;
            transition: all 0.3s ease;
        }

        .testi-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(26,60,52,0.14);
        }

        .testi-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
        }

        .testi-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
        }

        .testi-info {
            display: flex;
            flex-direction: column;
        }

        .testi-name {
            font-weight: 700;
            font-size: 16px;
        }

        .testi-stars {
            color: var(--soft-gold);
            font-size: 14px;
            margin: 4px 0;
        }

        .testi-quote {
            font-size: 16px;
            line-height: 1.75;
            font-style: italic;
            position: relative;
            z-index: 2;
        }

        .testi-attr {
            font-size: 11px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--muted-warm);
            margin-top: 20px;
            display: block;
        }

        .testi-quote-deco {
            position: absolute;
            top: 20px;
            left: 20px;
            font-family: 'Instrument Serif', serif;
            font-size: 120px;
            color: var(--sage-light);
            opacity: 0.07;
            line-height: 1;
        }

        /* Terms */
        .terms {
            background: var(--gold-pale);
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }

        .statement-item {
            padding: 40px 0;
            border-bottom: 1px solid var(--sage-border);
        }
        .statement-item:last-child { border-bottom: none; }

        .statement-label {
            font-size: 42px;
            font-style: italic;
            color: var(--deep-sage);
            margin-bottom: 12px;
        }

        .statement-text {
            font-size: 17px;
            color: var(--muted-warm);
            line-height: 1.75;
        }

        /* CTA */
        .final-cta {
            background: var(--deep-sage);
            color: var(--warm-ivory);
            text-align: center;
            padding: 140px 8vw;
            overflow: hidden;
        }

        .final-cta::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.12), transparent 65%);
            pointer-events: none;
        }

        .cta-headline {
            font-size: 72px;
            font-style: italic;
            line-height: 1.05;
            max-width: 760px;
            margin: 0 auto 24px;
        }

        .cta-subheadline {
            font-size: 20px;
            color: rgba(250,247,242,0.6);
            margin-bottom: 52px;
        }

        .btn-large {
            height: 72px;
            padding: 0 64px;
            font-size: 18px;
            box-shadow: 0 8px 32px rgba(201,168,76,0.3);
        }

        .trust-line {
            font-size: 14px;
            color: rgba(250,247,242,0.4);
            margin-top: 24px;
        }

        /* Footer */
        footer {
            background: #0F1F1A;
            padding: 64px 8vw 40px;
            text-align: center;
            border-top: 1px solid rgba(74,140,117,0.2);
        }

        .footer-logo {
            font-weight: 700;
            font-size: 20px;
            color: var(--soft-gold);
            margin-bottom: 8px;
        }

        .footer-tagline {
            font-size: 13px;
            color: rgba(250,247,242,0.35);
            margin-bottom: 40px;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 24px;
            font-size: 12px;
            color: rgba(250,247,242,0.2);
        }

        .footer-links a {
            color: inherit;
            text-decoration: none;
            transition: color 0.2s;
        }
        .footer-links a:hover {
            color: var(--warm-ivory);
        }

        /* Abstract Blobs */
        .bg-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.25;
            pointer-events: none;
            z-index: 0;
        }

        @media (max-width: 900px) {
            .hero, .how-grid, .testi-grid, .terms {
                grid-template-columns: 1fr;
            }
            .step-arrow { display: none; }
            .hero-headline, .how-headline, .testi-headline, .cta-headline {
                font-size: 48px;
            }
        }
    </style>
`;

let bodyHtml = `
    <div class="custom-cursor"></div>

    <nav id="navbar">
        <div class="nav-logo">Health-AI</div>
        <a href="#assessment" class="nav-cta">Talk to a Doctor Now</a>
    </nav>

    <section class="hero">
        <div class="bg-blob" style="width: 400px; height: 400px; background: var(--sage-light); top: 10%; left: -100px;"></div>
        <div class="bg-blob" style="width: 300px; height: 300px; background: var(--soft-gold); bottom: 10%; right: -50px;"></div>
        
        <div class="hero-text fade-up">
            <span class="eyebrow">TELEHEALTH — AVAILABLE 24/7 — CONSULTATION IN UNDER 2 HOURS</span>
            <h1 class="hero-headline">The system is content<br>to let you wait. <span style="display:block">We aren't.</span></h1>
            <p class="hero-body">You've rehearsed your symptoms for weeks. Chosen your words carefully. Shown up hoping this time would be different. And you were told it's nothing. In minutes.</p>
            <div class="hero-ctas">
                <a href="#assessment" class="btn btn-primary">Talk to a Doctor Now — Available 24/7</a>
                <a href="#assessment" class="btn btn-secondary">Start Free Assessment</a>
            </div>
            <div class="hero-stats">
                <div class="stat-item">
                    <div class="stat-num">2h</div>
                    <div class="stat-lbl">Under 2 Hours</div>
                </div>
                <div class="stat-item">
                    <div class="stat-num">500+</div>
                    <div class="stat-lbl">Qualified Doctors</div>
                </div>
                <div class="stat-item">
                    <div class="stat-num">24/7</div>
                    <div class="stat-lbl">Support Always</div>
                </div>
            </div>
        </div>

        <div class="hero-visual fade-in" style="--delay: 0.3s">
            <svg width="480" height="520" viewBox="0 0 480 520" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;" class="float-anim">
                <circle cx="240" cy="220" r="180" fill="var(--gold-pale)" />
                <path d="M 240 120 Q 240 120 240 120 Q 340 120 340 220 Q 340 420 240 420 Q 140 420 140 220 Q 140 120 240 120" fill="#2D5C4E" />
                <circle cx="100" cy="150" r="30" fill="var(--sage-light)" opacity="0.3" />
                <rect x="350" y="300" width="60" height="30" rx="15" fill="var(--sage-light)" opacity="0.4" />
                <path d="M 380 100 Q 410 120 380 140" stroke="var(--sage-light)" stroke-width="4" fill="none" opacity="0.3" />
                <circle cx="150" cy="450" r="6" fill="var(--soft-gold)" />
                <circle cx="400" cy="200" r="4" fill="var(--soft-gold)" />
                <circle cx="320" cy="480" r="8" fill="var(--soft-gold)" />
            </svg>
        </div>
    </section>

    <section class="how">
        <span class="eyebrow">HOW IT WORKS</span>
        <h2 class="how-headline">A consultation in under 2 hours.</h2>
        <p class="how-subheadline">A prescription at your pharmacy by the time you finish your coffee.</p>

        <div class="how-grid">
            <div class="step-card fade-up">
                <div class="step-num-deco">01</div>
                <span class="step-label">STEP 01</span>
                <h3 class="step-title">Check</h3>
                <p class="step-body">Complete our AI-driven health assessment in 5 minutes. Your symptoms, your history, your patterns, captured clearly and organised into a record a doctor can actually act on.</p>
                <div class="step-arrow">→</div>
            </div>
            <div class="step-card fade-up" style="--delay: 0.1s">
                <div class="step-num-deco">02</div>
                <span class="step-label">STEP 02</span>
                <h3 class="step-title">Connect</h3>
                <p class="step-body">Speak to a qualified doctor by video call in under two hours. Any time. Any day. A real consultation with someone whose entire job is to help you, not manage their next appointment.</p>
                <div class="step-arrow">→</div>
            </div>
            <div class="step-card fade-up" style="--delay: 0.2s">
                <div class="step-num-deco">03</div>
                <span class="step-label">STEP 03</span>
                <h3 class="step-title">Recover</h3>
                <p class="step-body">Receive your treatment plan and digital prescription instantly, sent directly to your local pharmacy. No follow-up appointments just to get what you already needed.</p>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <span class="eyebrow">REAL PATIENTS</span>
        <h2 class="testi-headline">Finally heard.</h2>

        <div class="testi-grid">
            <div class="testi-card fade-up">
                <div class="testi-quote-deco">"</div>
                <div class="testi-header">
                    <img src="assets/sarah.png" class="testi-avatar" alt="Sarah J.">
                    <div class="testi-info">
                        <span class="testi-name">Sarah J.</span>
                        <div class="testi-stars">★★★★★</div>
                    </div>
                </div>
                <p class="testi-quote">"I was tired of being dismissed. Health-AI gave me a clear report that finally got me the right specialist referral in under two hours."</p>
                <span class="testi-attr">— SARAH J.</span>
            </div>
            <div class="testi-card fade-up" style="--delay: 0.1s">
                <div class="testi-quote-deco">"</div>
                <div class="testi-header">
                    <img src="assets/mark.png" class="testi-avatar" alt="Mark T.">
                    <div class="testi-info">
                        <span class="testi-name">Mark T.</span>
                        <div class="testi-stars">★★★★★</div>
                    </div>
                </div>
                <p class="testi-quote">"I did the assessment, spoke to a doctor, and had my meds at the pharmacy by lunch. Three days of waiting, gone."</p>
                <span class="testi-attr">— MARK T.</span>
            </div>
            <div class="testi-card fade-up" style="--delay: 0.2s">
                <div class="testi-quote-deco">"</div>
                <div class="testi-header">
                    <img src="assets/elena.png" class="testi-avatar" alt="Elena R.">
                    <div class="testi-info">
                        <span class="testi-name">Elena R.</span>
                        <div class="testi-stars">★★★★★</div>
                    </div>
                </div>
                <p class="testi-quote">"Getting a professional consultation and a treatment plan before the sun came up changed everything."</p>
                <span class="testi-attr">— ELENA R.</span>
            </div>
        </div>
    </section>

    <section class="terms">
        <div class="terms-text fade-up">
            <span class="eyebrow">YOUR HEALTH ON YOUR TERMS</span>
            <div class="statement-item fade-up">
                <h3 class="statement-label">Your history.</h3>
                <p class="statement-text">Organised and on record so you never have to repeat yourself to someone who isn't listening.</p>
            </div>
            <div class="statement-item fade-up" style="--delay: 0.15s">
                <h3 class="statement-label">Your symptoms.</h3>
                <p class="statement-text">Documented and timestamped so the next appointment, you walk in with evidence they cannot dismiss.</p>
            </div>
            <div class="statement-item fade-up" style="--delay: 0.3s">
                <h3 class="statement-label">Your health.</h3>
                <p class="statement-text">Finally moving at your pace. Not the system's.</p>
            </div>
        </div>
        <div class="terms-visual fade-in">
            <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="120" stroke="var(--sage-light)" stroke-width="2" fill="none" opacity="0.2" />
                <circle cx="200" cy="200" r="80" stroke="var(--sage-light)" stroke-width="2" fill="none" opacity="0.4" />
                <circle cx="200" cy="200" r="40" stroke="var(--sage-light)" stroke-width="2" fill="none" opacity="0.6" />
            </svg>
        </div>
    </section>

    <section class="final-cta" id="assessment">
        <h2 class="cta-headline">You've spent long enough fighting just to be heard.</h2>
        <p class="cta-subheadline">Healthcare that hears you. Solutions that find you.</p>
        <a href="#" class="btn btn-primary btn-large">Start Your Free Assessment — It Takes 5 Minutes</a>
        <p class="trust-line">No credit card required. No waiting room. No dismissal.</p>
    </section>

    <footer>
        <div class="footer-logo">Health-AI</div>
        <p class="footer-tagline">Healthcare that hears you.</p>
        <div class="footer-links">
            <a href="#">Privacy</a> &middot;
            <a href="#">Terms</a> &middot;
            <a href="#">Contact</a>
        </div>
    </footer>

    <script>
        // Custom Cursor
        const cursor = document.querySelector('.custom-cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = \`translate3d(\${e.clientX}px, \${e.clientY}px, 0)\`;
        });

        // Sticky Nav
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Intersection Observer
        const observerOptions = {
            threshold: 0.12
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up, .fade-in, .statement-item').forEach(el => observer.observe(el));
    </script>
`;

// Combine and write
const finalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    \${newHead}
</head>
<body>
    \${bodyHtml}
</body>
</html>`;

fs.writeFileSync(filepath, finalHtml, 'utf8');
console.log('Health-AI Overhaul Complete.');
