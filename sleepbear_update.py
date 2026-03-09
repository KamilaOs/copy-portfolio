import codecs

def update_sleepbear_html():
    filepath = 'D:/01 PROJECTS/KAMILA/copy-portfolio/sleepbear-pro/index.html'
    content = codecs.open(filepath, 'r', 'utf-8').read()

    # 1. CSS UPDATES
    # Add grain overlay to body and update hero + cta background
    css_insert = """
    .texture-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.25;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    .hero {
      position: relative;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      max-width: 1400px;
      margin: 0 auto;
      align-items: center;
    }
    .hero-right-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      position: relative;
    }
    .hero-shape {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, var(--honey), var(--bear));
      border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
      animation: morph 8s ease-in-out infinite alternate;
      opacity: 0.15;
      filter: blur(40px);
      position: absolute;
    }
    .hero-star {
      position: absolute;
      top: 20%;
      right: 20%;
      font-size: 80px;
      color: var(--honey);
      animation: float 6s ease-in-out infinite;
      opacity: 0.8;
      transform: rotate(15deg);
    }
    
    @keyframes float {
      0% { transform: translateY(0px) rotate(15deg); }
      50% { transform: translateY(-20px) rotate(20deg); }
      100% { transform: translateY(0px) rotate(15deg); }
    }
    
    @keyframes morph {
      0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
      100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    }

    .again-banner {
      background: var(--honey);
      width: 100%;
      padding: 80px 0;
      text-align: center;
      margin: 80px 0;
    }
    .again-banner .hero-punchline {
      padding: 0;
      color: var(--cream);
      margin: 0;
    }
    
    .strip-grid {
      display: grid;
      grid-template-columns: 1fr 300px;
      gap: 60px;
      align-items: start;
      max-width: 1200px;
      margin: 0 auto;
    }
    .strip-aside {
      border-left: 2px solid rgba(26, 18, 8, 0.1);
      padding-left: 32px;
      margin-left: 0;
      margin-top: 0;
      font-size: 20px;
      line-height: 1.5;
    }
    .strip-clarify {
      margin-left: 0;
      margin-top: 16px;
    }
    
    .reveal {
      background: radial-gradient(circle at center, #24375c 0%, var(--navy) 100%);
      position: relative;
    }
    .reveal::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    }
    
    .promise {
      background: radial-gradient(circle at top, #FFFBF4 0%, var(--honey-pale) 100%);
    }
    .promise-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 5vw;
    }
    .promise-block {
      background: var(--warm-white);
      padding: 48px 32px;
      border-radius: 24px;
      box-shadow: 0 10px 40px rgba(140, 123, 110, 0.08);
      border: 1px solid rgba(245, 166, 35, 0.1);
      max-width: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }
    .promise-block:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(245, 166, 35, 0.12);
    }
    .p-label {
      font-size: 24px;
      margin-bottom: 16px;
    }
    .p-body {
      font-size: 16px;
    }
    
    .cta {
      background: radial-gradient(circle at center, #F7B543 0%, var(--honey) 100%);
      position: relative;
    }
    .cta::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }

    @media (max-width: 1024px) {
      .hero-grid { grid-template-columns: 1fr; }
      .hero-right-visual { display: none; }
      .strip-grid { grid-template-columns: 1fr; gap: 40px; }
      .strip-aside { border-left: none; padding-left: 0; border-top: 2px solid rgba(26, 18, 8, 0.1); padding-top: 24px; }
      .promise-grid { grid-template-columns: 1fr; }
    }
"""

    if ".texture-overlay" not in content:
        content = content.replace("</style>", css_insert + "\n  </style>")
        content = content.replace("<body>", "<body>\n  <div class=\"texture-overlay\"></div>")

    # 1. HERO REPLACEMENT
    hero_old = """
  <!-- SECTION 1 -->
  <section class="hero">
    <div class="hero-eyebrow fade-in">FINALLY. A GOOD NIGHT'S SLEEP. 🌙</div>
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
    <div class="hero-punchline fade-in again">
      Again. 😮‍💨
    </div>
    <div class="hero-body fade-in">
      At 7am the coffee is already on. The day hasn't started and you're already behind it. Everything feels harder than
      it should. Not impossible. Just heavier than it used to be.
    </div>
  </section>"""
  
    hero_new = """
  <!-- SECTION 1 -->
  <section class="hero">
    <div class="hero-grid">
      <div class="hero-left-content">
        <div class="hero-eyebrow fade-in" style="text-align: left; padding-left: 10vw;">FINALLY. A GOOD NIGHT'S SLEEP. 🌙</div>
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
        <div class="hero-shape"></div>
        <div class="hero-star">✦</div>
      </div>
    </div>
    
    <div class="again-banner fade-in again">
      <div class="hero-punchline">
        Again. 😮‍💨
      </div>
    </div>
    
    <div class="hero-body fade-in" style="margin: 0 auto; max-width: 800px; padding: 0 5vw; text-align: center; font-size: 22px;">
      At 7am the coffee is already on. The day hasn't started and you're already behind it. Everything feels harder than
      it should. Not impossible. Just heavier than it used to be.
    </div>
  </section>"""
    
    if "hero-grid" not in content:
        content = content.replace(hero_old.strip(), hero_new.strip())

    # 2. STRIP REPLACEMENT
    strip_old = """
  <!-- SECTION 2 -->
  <section class="strip">
    <div class="strip-title fade-up">You deserve real sleep.</div>
    <div class="strip-subtitle fade-up" style="--delay: 0.1s">Not an overpriced magic potion in a capsule that promises
      you'll sleep like a newborn every night.</div>
    <div class="strip-aside fade-up" style="--delay: 0.2s">Had anyone actually slept with a newborn in the room?</div>
    <div class="strip-clarify fade-up" style="--delay: 0.3s">Not the experience we want to give you.</div>
  </section>"""
    
    strip_new = """
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
  </section>"""

    if "strip-grid" not in content:
        content = content.replace(strip_old.strip(), strip_new.strip())

    # 3. PROMISE REPLACEMENT
    promise_old = """
    <div class="promise-block fade-up" style="--delay: 0.1s">
      <div class="p-label">The assignment. 📋</div>
      <div class="p-body">After a restful sleep, that work that felt impossible will just feel like work again.</div>
    </div>
    <div class="promise-block fade-up" style="--delay: 0.2s">
      <div class="p-label">The Friday night. 🍻</div>
      <div class="p-body">You'll have enough energy to actually show up. And mean it.</div>
    </div>
    <div class="promise-block fade-up" style="--delay: 0.3s">
      <div class="p-label">The life. 🎁</div>
      <div class="p-body">The one everyone keeps telling you should feel like a gift. Will start to feel a little more
        like one.</div>
    </div>"""

    promise_new = """
    <div class="promise-grid">
      <div class="promise-block fade-up" style="--delay: 0.1s">
        <div class="p-label">The assignment. 📋</div>
        <div class="p-body">After a restful sleep, that work that felt impossible will just feel like work again.</div>
      </div>
      <div class="promise-block fade-up" style="--delay: 0.2s">
        <div class="p-label">The Friday night. 🍻</div>
        <div class="p-body">You'll have enough energy to actually show up. And mean it.</div>
      </div>
      <div class="promise-block fade-up" style="--delay: 0.3s">
        <div class="p-label">The life. 🎁</div>
        <div class="p-body">The one everyone keeps telling you should feel like a gift. Will start to feel a little more
          like one.</div>
      </div>
    </div>"""

    if "promise-grid" not in content:
        content = content.replace(promise_old.strip(), promise_new.strip())

    codecs.open(filepath, 'w', 'utf-8').write(content)
    print("applied successfully to index.html")

update_sleepbear_html()
