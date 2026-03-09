const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'sleepbear-pro', 'index.html');
let html = fs.readFileSync(filepath, 'utf8');

// The new geometric bear SVG string
const newHeroSvg = `<svg class="hero-svg" viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
  <!-- Inner floating container -->
  <g class="float-group">
    <!-- Base Head (perfect circle) -->
    <circle cx="190" cy="190" r="140" fill="var(--terra-warm)" />
    
    <!-- Left Ear -->
    <circle cx="80" cy="80" r="45" fill="var(--terra-warm)" />
    <circle cx="80" cy="80" r="25" fill="var(--honey)" />
    
    <!-- Right Ear -->
    <circle cx="300" cy="80" r="45" fill="var(--terra-warm)" />
    <circle cx="300" cy="80" r="25" fill="var(--honey)" />
    
    <!-- Snout area -->
    <circle cx="190" cy="230" r="50" fill="var(--honey-mid)" opacity="0.9" />
    
    <!-- Nose (oval) -->
    <ellipse cx="190" cy="210" rx="18" ry="12" fill="var(--terra-deep)" />
    
    <!-- Eyes -->
    <circle cx="140" cy="170" r="10" fill="var(--terra-deep)" />
    <circle cx="240" cy="170" r="10" fill="var(--terra-deep)" />

    <!-- Sleeping closed eyes (alternative) -->
    <!-- (Removing the open eyes circles and using the paths instead) -->
    <path d="M 125 175 Q 140 185 155 175" stroke="var(--terra-deep)" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 225 175 Q 240 185 255 175" stroke="var(--terra-deep)" stroke-width="6" fill="none" stroke-linecap="round"/>
    
    
    <!-- Floating ZZZs -->
    <g fill="var(--terra-warm)" opacity="0.4" font-family="Nunito, sans-serif" font-weight="900">
      <text x="290" y="50" font-size="22" transform="rotate(5 290 50)">Z</text>
      <text x="320" y="20" font-size="18" transform="rotate(-5 320 20)">z</text>
      <text x="345" y="-5" font-size="14" transform="rotate(-10 345 -5)">z</text>
    </g>
    
    <!-- Scattered Stars -->
    <g fill="var(--honey)">
      <circle cx="40" cy="180" r="4" />
      <circle cx="60" cy="250" r="6" />
      <circle cx="330" cy="160" r="8" />
      <circle cx="310" cy="280" r="5" />
      <circle cx="280" cy="320" r="7" />
    </g>
  </g>
</svg>`;

// Locate the block containing <svg class="hero-svg"...</svg>
// and replace it entirely with the newly defined string.

const svgStartRegex = /<svg class="hero-svg" viewBox="0 0 500 500" xmlns="http:\/\/www\.w3\.org\/2000\/svg">/;
const svgEndRegex = /<\/svg>/g;

// Find the start index
let startMatch = html.match(svgStartRegex);

if (startMatch) {
    let startIndex = startMatch.index;

    // Find the NEXT closing </svg> tag after the start index
    svgEndRegex.lastIndex = startIndex;
    let endMatch = svgEndRegex.exec(html);

    if (endMatch) {
        let endIndex = endMatch.index + 6; // +6 to include </svg>

        html = html.substring(0, startIndex) + newHeroSvg + html.substring(endIndex);
    }
}

// 2. Adjust CSS Animation
const cssUpdates = `
    .hero-right-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      min-height: 420px;
      position: relative;
    }
    .hero-svg {
      width: 100%;
      max-width: 380px; /* Locked to 380px */
      height: auto;
      overflow: visible;
    }
    .float-group {
      animation: float-hero 4s ease-in-out infinite alternate;
    }
    @keyframes float-hero {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-12px); }
    }
`;

// Doing a targeted replace for the hero css block
const cssStartRegex = /\.hero-right-visual \{[\s\S]*?@keyframes float-hero \{[\s\S]*?\}\s*\.hero-svg \{[\s\S]*?\}/;

html = html.replace(cssStartRegex, cssUpdates.trim());

// 3. Remove the open eye circles
html = html.replace(
    /<circle cx="140" cy="170" r="10" fill="var\(--terra-deep\)" \/>\s*<circle cx="240" cy="170" r="10" fill="var\(--terra-deep\)" \/>/g,
    ''
)

fs.writeFileSync(filepath, html, 'utf8');
console.log('Bear update Complete.');
