import codecs

cards_html = """                <!-- Card 1: Chaos 2.0 -->
                <div class="work-card fade-in">
                    <div class="card-accent"></div>
                    <div class="card-thumb-wrap">
                        <img src="./placeholder-thumb.jpg" alt="Chaos 2.0 project thumbnail" class="card-thumb"
                            onerror="this.style.display='none'; this.parentElement.setAttribute('data-empty', 'true')" />
                    </div>
                    <div class="card-body">
                        <span class="card-number">001</span>
                        <span class="card-type">Landing Page</span>
                        <span class="card-spec-badge">Spec Work</span>
                        <h3 class="card-title">Chaos 2.0</h3>
                        <div class="card-links">
                            <a href="./chaos-2.0-brand-page/index.html" target="_blank" rel="noopener noreferrer"
                                class="card-link">Live Page <span>→</span></a>
                            <a href="GOOGLE_DOC_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                class="card-link">Google Doc <span>→</span></a>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Flockly Rebuild -->
                <div class="work-card fade-in">
                    <div class="card-accent"></div>
                    <div class="card-thumb-wrap">
                        <img src="./placeholder-thumb.jpg" alt="Flockly Rebuild project thumbnail" class="card-thumb"
                            onerror="this.style.display='none'; this.parentElement.setAttribute('data-empty', 'true')" />
                    </div>
                    <div class="card-body">
                        <span class="card-number">002</span>
                        <span class="card-type">Landing Page</span>
                        <span class="card-spec-badge">Spec Work</span>
                        <h3 class="card-title">Flockly Rebuild</h3>
                        <div class="card-links">
                            <a href="./flockly-rebuild/index.html" target="_blank" rel="noopener noreferrer"
                                class="card-link">Live Page <span>→</span></a>
                            <a href="GOOGLE_DOC_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                class="card-link">Google Doc <span>→</span></a>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Health AI -->
                <div class="work-card fade-in">
                    <div class="card-accent"></div>
                    <div class="card-thumb-wrap">
                        <img src="./placeholder-thumb.jpg" alt="Health AI project thumbnail" class="card-thumb"
                            onerror="this.style.display='none'; this.parentElement.setAttribute('data-empty', 'true')" />
                    </div>
                    <div class="card-body">
                        <span class="card-number">003</span>
                        <span class="card-type">Landing Page</span>
                        <span class="card-spec-badge">Spec Work</span>
                        <h3 class="card-title">Health AI</h3>
                        <div class="card-links">
                            <a href="./health-ai/index.html" target="_blank" rel="noopener noreferrer"
                                class="card-link">Live Page <span>→</span></a>
                            <a href="GOOGLE_DOC_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                class="card-link">Google Doc <span>→</span></a>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Health AI Scrollytelling -->
                <div class="work-card fade-in">
                    <div class="card-accent"></div>
                    <div class="card-thumb-wrap">
                        <img src="./placeholder-thumb.jpg" alt="Health AI Scrollytelling project thumbnail" class="card-thumb"
                            onerror="this.style.display='none'; this.parentElement.setAttribute('data-empty', 'true')" />
                    </div>
                    <div class="card-body">
                        <span class="card-number">004</span>
                        <span class="card-type">Advertorial</span>
                        <span class="card-spec-badge">Spec Work</span>
                        <h3 class="card-title">Health AI: Scrollytelling</h3>
                        <div class="card-links">
                            <a href="./health-ai-scrollytelling/index.html" target="_blank" rel="noopener noreferrer"
                                class="card-link">Live Page <span>→</span></a>
                            <a href="GOOGLE_DOC_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                class="card-link">Google Doc <span>→</span></a>
                        </div>
                    </div>
                </div>

                <!-- Card 5: Natal Chart Editorial -->
                <div class="work-card fade-in">
                    <div class="card-accent"></div>
                    <div class="card-thumb-wrap">
                        <img src="./placeholder-thumb.jpg" alt="Natal Chart Editorial project thumbnail" class="card-thumb"
                            onerror="this.style.display='none'; this.parentElement.setAttribute('data-empty', 'true')" />
                    </div>
                    <div class="card-body">
                        <span class="card-number">005</span>
                        <span class="card-type">Advertorial</span>
                        <span class="card-spec-badge">Spec Work</span>
                        <h3 class="card-title">Natal Chart Editorial</h3>
                        <div class="card-links">
                            <a href="./natal-chart-editorial/index.html" target="_blank" rel="noopener noreferrer"
                                class="card-link">Live Page <span>→</span></a>
                            <a href="GOOGLE_DOC_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                class="card-link">Google Doc <span>→</span></a>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Sleepbear Pro -->
                <div class="work-card fade-in">
                    <div class="card-accent"></div>
                    <div class="card-thumb-wrap">
                        <img src="./placeholder-thumb.jpg" alt="Sleepbear Pro project thumbnail" class="card-thumb"
                            onerror="this.style.display='none'; this.parentElement.setAttribute('data-empty', 'true')" />
                    </div>
                    <div class="card-body">
                        <span class="card-number">006</span>
                        <span class="card-type">Landing Page</span>
                        <span class="card-spec-badge">Spec Work</span>
                        <h3 class="card-title">Sleepbear Pro</h3>
                        <div class="card-links">
                            <a href="./sleepbear-pro/index.html" target="_blank" rel="noopener noreferrer"
                                class="card-link">Live Page <span>→</span></a>
                            <a href="GOOGLE_DOC_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                class="card-link">Google Doc <span>→</span></a>
                        </div>
                    </div>
                </div>

                <!-- Card 7: The Ones Who Never Came Back -->
                <div class="work-card fade-in">
                    <div class="card-accent"></div>
                    <div class="card-thumb-wrap">
                        <img src="./placeholder-thumb.jpg" alt="The Ones Who Never Came Back project thumbnail" class="card-thumb"
                            onerror="this.style.display='none'; this.parentElement.setAttribute('data-empty', 'true')" />
                    </div>
                    <div class="card-body">
                        <span class="card-number">007</span>
                        <span class="card-type">Essay</span>
                        <span class="card-spec-badge">Spec Work</span>
                        <h3 class="card-title">The Ones Who Never Came Back</h3>
                        <div class="card-links">
                            <a href="./the-ones-who-never-came-back/index.html" target="_blank" rel="noopener noreferrer"
                                class="card-link">Live Page <span>→</span></a>
                            <a href="GOOGLE_DOC_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                class="card-link">Google Doc <span>→</span></a>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Travel List 2026 -->
                <div class="work-card fade-in">
                    <div class="card-accent"></div>
                    <div class="card-thumb-wrap">
                        <img src="./placeholder-thumb.jpg" alt="Travel List 2026 project thumbnail" class="card-thumb"
                            onerror="this.style.display='none'; this.parentElement.setAttribute('data-empty', 'true')" />
                    </div>
                    <div class="card-body">
                        <span class="card-number">008</span>
                        <span class="card-type">Advertorial</span>
                        <span class="card-spec-badge">Spec Work</span>
                        <h3 class="card-title">Travel List 2026</h3>
                        <div class="card-links">
                            <a href="./travel_list_2026/index.html" target="_blank" rel="noopener noreferrer"
                                class="card-link">Live Page <span>→</span></a>
                            <a href="GOOGLE_DOC_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                class="card-link">Google Doc <span>→</span></a>
                        </div>
                    </div>
                </div>

                <!-- Card 9: True Crime Newsletter -->
                <div class="work-card fade-in">
                    <div class="card-accent"></div>
                    <div class="card-thumb-wrap">
                        <img src="./placeholder-thumb.jpg" alt="True Crime Newsletter project thumbnail" class="card-thumb"
                            onerror="this.style.display='none'; this.parentElement.setAttribute('data-empty', 'true')" />
                    </div>
                    <div class="card-body">
                        <span class="card-number">009</span>
                        <span class="card-type">Email Sequence</span>
                        <span class="card-spec-badge">Spec Work</span>
                        <h3 class="card-title">True Crime Newsletter</h3>
                        <div class="card-links">
                            <a href="./true-crime-newsletter/index.html" target="_blank" rel="noopener noreferrer"
                                class="card-link">Live Page <span>→</span></a>
                            <a href="GOOGLE_DOC_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                class="card-link">Google Doc <span>→</span></a>
                        </div>
                    </div>
                </div>"""

content = codecs.open('D:/01 PROJECTS/KAMILA/copy-portfolio/index.html', 'r', 'utf-8').read()

# Make Filter Edits
filter_old = '<button class="work-filter" data-filter="Email Sequence">Email</button>'
filter_new = '<button class="work-filter" data-filter="Email Sequence">Email</button>\n                    <button class="work-filter" data-filter="Essay">Essays</button>'
content = content.replace(filter_old, filter_new)

# Make Work Grid Edits
start_marker = '                <!-- Card 1: Fleming AI -->'
end_marker = '            </div>\n        </div>\n    </section>'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + cards_html + '\n\n' + content[end_idx:]
    codecs.open('D:/01 PROJECTS/KAMILA/copy-portfolio/index.html', 'w', 'utf-8').write(content)
    print("Success: Edits applied")
else:
    print(f"Failed to find boundaries! start={start_idx}, end={end_idx}")
