---
layout: home

head:
  - - meta
    - name: description
      content: "Support FlyEnv development through Ko-fi, WeChat, or Alipay. Your sponsorship helps us build the best local development environment tool for macOS, Windows, and Linux."
  - - meta
    - property: og:title
      content: "Sponsor FlyEnv"
  - - meta
    - property: og:description
      content: "Support FlyEnv development. Your sponsorship helps us keep building, improving, and supporting the community."
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"DonateAction","name":"Sponsor FlyEnv","description":"Support FlyEnv open-source development through Ko-fi, WeChat, or Alipay donations.","recipient":{"@type":"Organization","name":"FlyEnv","url":"https://www.flyenv.com"},"instrument":[{"@type":"PaymentMethod","name":"Ko-fi"},{"@type":"PaymentMethod","name":"WeChat Pay"},{"@type":"PaymentMethod","name":"Alipay"}]}
---

<script setup>
import AppSponsor from './components/AppSponsor/index.vue'
import sponsorData from './data/sponsor.json'
</script>

<div class="sponsor-page">

<!-- Hero -->
<section class="sponsor-hero-section">
  <div class="sponsor-hero-inner">
    <h1 class="sponsor-hero-title">
      Making local development<br class="hidden md:block">
      <span class="gradient-text">fast, native, and enjoyable</span> again.
    </h1>
    <p class="sponsor-hero-desc">
      FlyEnv is an independently built, open-source environment manager for macOS, Windows, and Linux. Your support keeps it free and constantly improving.
    </p>
  </div>
</section>

<!-- Indie Manifesto -->
<section class="sponsor-section">
  <div class="sponsor-section-inner">
    <div class="manifesto-card">
      <div class="manifesto-quote">❝</div>
      <div class="manifesto-content">
        <div class="manifesto-header">
          <span class="manifesto-icon">🚀</span>
          <h2 class="no-border">Built Independently</h2>
        </div>
        <p class="manifesto-text">FlyEnv is independently built and maintained by a single developer.</p>
        <div class="manifesto-list">
          <p>No VC funding.</p>
          <p>No big company backing.</p>
          <p>No corporate roadmap.</p>
        </div>
        <p class="manifesto-text">Just continuous work to make local development better for everyone.</p>
        <div class="manifesto-fuel">
          <p class="manifesto-fuel-title">Your sponsorship directly fuels:</p>
          <div class="manifesto-fuel-item">
            <span class="manifesto-arrow">→</span>
            <span>Cross-platform native binaries</span>
          </div>
          <div class="manifesto-fuel-item">
            <span class="manifesto-arrow">→</span>
            <span>Faster release cycles</span>
          </div>
          <div class="manifesto-fuel-item">
            <span class="manifesto-arrow">→</span>
            <span>Community-driven features</span>
          </div>
          <div class="manifesto-fuel-item">
            <span class="manifesto-arrow">→</span>
            <span>Keeping FlyEnv independent and free</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why Sponsor -->
<section class="sponsor-section sponsor-section-alt">
  <div class="sponsor-section-inner-wide">
    <div class="section-header">
      <h2 class="no-border">Where Your Support Goes</h2>
      <p>Your sponsorship helps FlyEnv stay independent and evolve.</p>
    </div>
    <div class="support-grid">
      <div class="support-card card-hover">
        <div class="support-icon">🖥</div>
        <h3>Native Binaries</h3>
        <p>Maintain native binaries for macOS, Windows & Linux across architectures.</p>
      </div>
      <div class="support-card card-hover">
        <div class="support-icon">🌍</div>
        <h3>Cross-Platform</h3>
        <p>Improve compatibility and fix platform-specific edge cases.</p>
      </div>
      <div class="support-card card-hover">
        <div class="support-icon">🤖</div>
        <h3>AI Integrations</h3>
        <p>Build new AI agent & local LLM integrations for smarter workflows.</p>
      </div>
      <div class="support-card card-hover">
        <div class="support-icon">📦</div>
        <h3>Open Source Infra</h3>
        <p>Support open-source infrastructure and upstream dependencies.</p>
      </div>
      <div class="support-card card-hover wide">
        <div class="support-icon">🔒</div>
        <h3>Stay Independent</h3>
        <p>No ads, no tracking, no paywalls — just a tool built for developers, funded by developers.</p>
      </div>
    </div>
  </div>
</section>

<!-- Community Voices -->
<section class="sponsor-section">
  <div class="sponsor-section-inner-wide">
    <div class="section-header">
      <h2 class="no-border">Loved by Developers Worldwide</h2>
      <p>Real words from real users around the globe.</p>
    </div>
    <div class="voices-grid">
      <div class="voice-card voice-hover">
        <div class="quote-mark">"</div>
        <p class="voice-text">"Rápida, nativa y simplifica mi trabajo."</p>
        <div class="voice-author">
          <span class="voice-flag">🇪🇸</span>
          <div>
            <p class="voice-name">wgnd.93</p>
            <p class="voice-location">Spain</p>
          </div>
        </div>
      </div>
      <div class="voice-card voice-hover">
        <div class="quote-mark">"</div>
        <p class="voice-text">"Semoga Semakin Bermanfaat Untuk Banyak Orang"</p>
        <div class="voice-author">
          <span class="voice-flag">🇮🇩</span>
          <div>
            <p class="voice-name">Fadlur.id</p>
            <p class="voice-location">Indonesia</p>
          </div>
        </div>
      </div>
      <div class="voice-card voice-hover">
        <div class="quote-mark">"</div>
        <p class="voice-text">"The definitive local development powerhouse for engineers!"</p>
        <div class="voice-author">
          <span class="voice-flag">🇺🇸</span>
          <div>
            <p class="voice-name">Max Voitsekhovsky</p>
            <p class="voice-location">USA</p>
          </div>
        </div>
      </div>
      <div class="voice-card voice-hover">
        <div class="quote-mark">"</div>
        <p class="voice-text">"Esse app é incrível, meus parabéns"</p>
        <div class="voice-author">
          <span class="voice-flag">🇧🇷</span>
          <div>
            <p class="voice-name">Augusto César</p>
            <p class="voice-location">Brazil</p>
          </div>
        </div>
      </div>
      <div class="voice-card voice-hover">
        <div class="quote-mark">"</div>
        <p class="voice-text">"Un vrai plaisir de développer dans cet environnement."</p>
        <div class="voice-author">
          <span class="voice-flag">🇫🇷</span>
          <div>
            <p class="voice-name">POIREL Denis</p>
            <p class="voice-location">France</p>
          </div>
        </div>
      </div>
      <div class="voice-card voice-hover">
        <div class="quote-mark">"</div>
        <p class="voice-text">"Amazing environment manager!! Super recommended"</p>
        <div class="voice-author">
          <span class="voice-flag">🇵🇹</span>
          <div>
            <p class="voice-name">Dennys Oliveira</p>
            <p class="voice-location">Portugal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Donation Methods -->
<section class="sponsor-section sponsor-section-alt">
  <div class="sponsor-section-inner-medium">
    <div class="section-header">
      <h2 class="no-border">Choose Your Way to Support</h2>
      <p>Every contribution, big or small, keeps FlyEnv moving forward.</p>
    </div>
    <div class="donate-grid">
      <!-- Ko-fi -->
      <div class="donate-card donate-hover">
        <div class="donate-header kofi-bg">
          <svg class="donate-header-icon" viewBox="0 0 1024 1024" fill="currentColor"><path d="M1018.912 381.792c-32.992-174.304-207.328-195.968-207.328-195.968H30.816c-25.76 0-28.96 34.048-28.96 34.048s-3.488 312.48-0.928 504.416c7.008 103.424 110.336 114.016 110.336 114.016s352.736-0.992 510.56-2.08c104.032-18.176 114.464-109.472 113.408-159.328 185.696 10.24 316.672-120.8 283.68-295.072z m-471.968 149.792c-53.152 61.984-171.136 169.632-171.136 169.632s-5.152 5.088-13.216 0.992c-3.232-2.432-4.608-3.84-4.608-3.84-18.912-18.816-143.712-130.08-172.128-168.704-30.24-41.184-44.416-115.2-3.872-158.304 40.576-43.104 128.224-46.336 186.144 17.376 0 0 66.784-76.032 147.968-41.088 81.248 34.976 78.176 128.48 30.848 183.936z m263.392 20.384c-39.584 4.96-71.776 1.184-71.776 1.184V310.752h75.52s84.096 23.52 84.096 112.544c0 81.632-42.016 113.792-87.84 128.64z"/></svg>
        </div>
        <div class="donate-body">
          <h3>Ko-fi</h3>
          <p>Credit Card / PayPal</p>
          <div class="donate-qr-wrap">
            <img src="https://oss.macphpstudy.com/image/qrcode3@2x.png" alt="Ko-fi QR" class="donate-qr" />
          </div>
          <a href="https://ko-fi.com/xpf0000" target="_blank" rel="noopener noreferrer" class="donate-btn kofi-btn no-underline">
            Support on Ko-fi
            <svg class="donate-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </div>
      <!-- WeChat -->
      <div class="donate-card donate-hover">
        <div class="donate-header wechat-bg">
          <svg class="donate-header-icon" viewBox="0 0 1025 1024" fill="currentColor"><path d="M1024.16 694.816c0-149.92-143.104-271.392-319.584-271.392-176.576 0-319.68 121.504-319.68 271.392S528 966.208 704.576 966.208c55.456 0 107.648-12.096 153.184-33.248l125.984 54.528-14.592-140.544c34.784-43.392 55.04-95.808 55.04-152.128zM596.832 621.28c-25.152 0-45.472-20.352-45.472-45.472s20.32-45.472 45.472-45.472c25.12 0 45.44 20.384 45.44 45.472s-20.384 45.472-45.44 45.472z m215.392 0c-25.056 0-45.44-20.352-45.44-45.472s20.384-45.472 45.44-45.472c25.184 0 45.536 20.384 45.536 45.472s-20.352 45.472-45.536 45.472zM704.576 387.488c49.376 0 96.416 8.8 139.264 24.64 0.32-5.728 0.992-11.232 0.992-16.992 0-198.08-189.152-358.624-422.432-358.624C189.184 36.512 0.032 197.024 0.032 395.136c0 74.496 26.816 143.776 72.704 201.12L53.472 781.92l166.432-72.096c41.216 19.2 86.784 32.16 134.88 38.784-3.616-17.504-5.824-35.424-5.824-53.792 0.032-169.44 159.552-307.296 355.616-307.296z m-139.808-209.6c33.184 0 60 26.88 60 60 0 33.184-26.816 60.064-60 60.064s-60.032-26.88-60.032-60.064c0-33.152 26.88-60 60.032-60zM280.032 297.952c-33.184 0-60-26.88-60-60.064 0-33.152 26.848-60 60-60 33.184 0 60.032 26.88 60.032 60s-26.88 60.064-60.032 60.064z"/></svg>
        </div>
        <div class="donate-body">
          <h3>WeChat Pay</h3>
          <p>Scan to donate</p>
          <div class="donate-qr-wrap">
            <img src="https://oss.macphpstudy.com/image/qrcode1@2x.png" alt="WeChat QR" class="donate-qr" />
          </div>
          <div class="donate-btn wechat-btn">
            <svg class="donate-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/></svg>
            Scan QR Code
          </div>
        </div>
      </div>
      <!-- Alipay -->
      <div class="donate-card donate-hover">
        <div class="donate-header alipay-bg">
          <svg class="donate-header-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1023.795 853.64v6.348a163.807 163.807 0 0 1-163.807 163.807h-696.18A163.807 163.807 0 0 1 0 859.988v-696.18A163.807 163.807 0 0 1 163.807 0h696.181a163.807 163.807 0 0 1 163.807 163.807V853.64z" fill="#009FE9"/><path d="M844.836 648.267c-40.952-14.333-95.623-34.809-156.846-57.128a949.058 949.058 0 0 0 90.094-222.573H573.325V307.14h245.711v-43.41l-245.71 2.458V143.33H472.173c-18.223 0-21.704 20.476-21.704 20.476v102.38H204.759v40.952h245.71v61.427H245.712v40.952h409.518a805.522 805.522 0 0 1-64.909 148.246c-128.384-42.795-266.186-77.604-354.233-55.08a213.564 213.564 0 0 0-112.003 63.27c-95.418 116.917-26.21 294.034 175.274 294.034 119.989 0 236.087-67.366 325.771-177.73 134.322 65.932 398.666 176.297 398.666 176.297V701.3s-32.352-4.095-178.96-53.033z m-563.702 144.97c-158.893 0-204.759-124.699-126.336-194.112a191.86 191.86 0 0 1 90.913-46.276c93.575-10.238 189.811 35.629 293.624 86.614-74.941 94.598-166.674 153.774-258.2 153.774z" fill="#FFFFFF"/></svg>
        </div>
        <div class="donate-body">
          <h3>Alipay</h3>
          <p>Scan to donate</p>
          <div class="donate-qr-wrap">
            <img src="https://oss.macphpstudy.com/image/qrcode2@2x.png" alt="Alipay QR" class="donate-qr" />
          </div>
          <div class="donate-btn alipay-btn">
            <svg class="donate-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/></svg>
            Scan QR Code
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Roadmap 2026 -->
<section class="sponsor-section">
  <div class="sponsor-section-inner">
    <div class="section-header">
      <h2 class="no-border">2026 Roadmap</h2>
      <p>Your sponsorship accelerates these goals.</p>
    </div>
    <div class="roadmap-card">
      <div class="roadmap-list">
        <div class="roadmap-item">
          <div class="roadmap-check check-done">✓</div>
          <div class="roadmap-text">
            <p class="roadmap-title">Linux GUI Optimization</p>
            <p class="roadmap-desc">Improved native desktop experience for Linux users.</p>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-check check-progress">~</div>
          <div class="roadmap-text">
            <p class="roadmap-title">AI Agent & Local LLM Integration</p>
            <p class="roadmap-desc">Deep integration with local AI workflows and Ollama.</p>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-check check-planned"></div>
          <div class="roadmap-text">
            <p class="roadmap-title">Native Container Runtime Support</p>
            <p class="roadmap-desc">Lightweight native containers without Docker overhead.</p>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-check check-planned"></div>
          <div class="roadmap-text">
            <p class="roadmap-title">Remote Team Environment Sync</p>
            <p class="roadmap-desc">Share and sync environments across team members.</p>
          </div>
        </div>
        <div class="roadmap-item">
          <div class="roadmap-check check-planned"></div>
          <div class="roadmap-text">
            <p class="roadmap-title">One-Click Deployment Pipelines</p>
            <p class="roadmap-desc">Deploy from local to staging/production effortlessly.</p>
          </div>
        </div>
      </div>
      <div class="roadmap-footer">
        <a href="https://github.com/xpf0000/FlyEnv/discussions" target="_blank" rel="noopener noreferrer" class="roadmap-link no-underline">
          Have a feature idea? Join the discussion on GitHub
          <svg class="roadmap-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Special Thanks -->
<section class="sponsor-section sponsor-section-alt">
  <div class="sponsor-section-inner">
    <div class="section-header">
      <h2 class="no-border">Special Thanks</h2>
      <p>Thank you to every friend who supports the FlyEnv project.</p>
    </div>
    <div class="thanks-card">
      <div class="thanks-avatar">F4</div>
      <div class="thanks-body">
        <p class="thanks-name">F4nniu</p>
        <p class="thanks-desc">Founder of <a href="https://www.fastadmin.net/" target="_blank" rel="noopener noreferrer" class="no-underline">FastAdmin</a>, for sponsoring the <strong>flyenv.com</strong> domain.</p>
      </div>
      <div class="thanks-badge hidden sm:block">🎗</div>
    </div>
  </div>
</section>

<!-- Recent Supporters -->
<section class="sponsor-section">
  <div class="sponsor-section-inner">
    <AppSponsor
      :list="sponsorData.list"
      title="Recent Supporters"
      :subtitle="`Showing ${sponsorData.list.length} supporters with messages`"
    />
  </div>
</section>

<!-- CTA Banner -->
<section class="sponsor-section">
  <div class="sponsor-section-inner-medium">
    <div class="cta-banner">
      <div class="cta-blur cta-blur-top"></div>
      <div class="cta-blur cta-blur-bottom"></div>
      <div class="cta-content">
        <h2 class="no-border">Join the Mission</h2>
        <p>FlyEnv is powered by its community. Whether you donate, contribute code, or simply spread the word — you're helping make local development better for everyone.</p>
        <div class="cta-buttons">
          <a href="https://ko-fi.com/xpf0000" target="_blank" rel="noopener noreferrer" class="cta-btn cta-btn-primary no-underline">
            Become a Supporter
            <svg class="cta-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <a href="https://github.com/xpf0000/FlyEnv" target="_blank" rel="noopener noreferrer" class="cta-btn cta-btn-secondary no-underline">
            <svg class="cta-btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C19.612 23.027 24 18.062 24 12.073c0-6.627-5.373-12-12-12z"/></svg>
            Star on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

</div>

<style scoped>
.sponsor-page {
  max-width: 100%;
  margin: 0 auto;
}

/* Hero */
.sponsor-hero-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding-top: 5rem;
  padding-bottom: 4rem;
}

.dark .sponsor-hero-section {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

.sponsor-hero-inner {
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}

.sponsor-hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.dark .sponsor-hero-title {
  color: #f1f5f9;
}

@media (min-width: 768px) {
  .sponsor-hero-title {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .sponsor-hero-title {
    font-size: 3.5rem;
  }
}

.gradient-text {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sponsor-hero-desc {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.625;
}

.dark .sponsor-hero-desc {
  color: #94a3b8;
}

/* Sections */
.sponsor-section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.sponsor-section-alt {
  background: rgba(248, 250, 252, 0.5);
}

.dark .sponsor-section-alt {
  background: rgba(30, 41, 59, 0.3);
}

.sponsor-section-inner {
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.sponsor-section-inner-wide {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.sponsor-section-inner-medium {
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem;
}

@media (min-width: 768px) {
  .section-header h2 {
    font-size: 1.875rem;
  }
}

.section-header p {
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Manifesto */
.manifesto-card {
  background: rgba(251, 191, 36, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px dashed #fde68a;
  position: relative;
  overflow: hidden;
}

.dark .manifesto-card {
  background: rgba(251, 191, 36, 0.06);
  border-color: rgba(251, 191, 36, 0.25);
}

@media (min-width: 768px) {
  .manifesto-card {
    padding: 2.5rem;
  }
}

.manifesto-quote {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 3.75rem;
  color: #fde68a;
  font-family: Georgia, serif;
  line-height: 1;
  user-select: none;
}

.dark .manifesto-quote {
  color: rgba(251, 191, 36, 0.2);
}

.manifesto-content {
  position: relative;
  z-index: 10;
}

.manifesto-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.manifesto-header h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}

.manifesto-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.manifesto-text {
  color: var(--vp-c-text-1);
  font-size: 1rem;
  line-height: 1.625;
  margin: 0 0 1rem;
}

.manifesto-list {
  margin-bottom: 1.5rem;
}

.manifesto-list p {
  color: var(--vp-c-text-2);
  font-weight: 500;
  margin: 0 0 0.5rem;
}

.manifesto-fuel {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 0.75rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dark .manifesto-fuel {
  background: rgba(0, 0, 0, 0.2);
}

.manifesto-fuel-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.25rem;
}

.manifesto-fuel-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.manifesto-arrow {
  color: var(--vp-c-brand-1);
  margin-top: 0.125rem;
  flex-shrink: 0;
}

/* Support Grid */
.support-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .support-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .support-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.support-card {
  background: #fff;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.dark .support-card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.support-card.wide {
  grid-column: span 1;
}

@media (min-width: 768px) {
  .support-card.wide {
    grid-column: span 2;
  }
}

@media (min-width: 1024px) {
  .support-card.wide {
    grid-column: span 2;
  }
}

.support-icon {
  font-size: 1.875rem;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.support-card h3 {
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.25rem;
  font-size: 1rem;
}

.support-card p {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.625;
  margin: 0;
}

.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.12);
}

.dark .card-hover:hover {
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
}

/* Voices */
.voices-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .voices-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .voices-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.voice-card {
  background: #fff;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  position: relative;
}

.dark .voice-card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.quote-mark {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 3.5rem;
  line-height: 1;
  color: #e2e8f0;
  font-family: Georgia, serif;
  user-select: none;
}

.dark .quote-mark {
  color: rgba(148, 163, 184, 0.15);
}

.voice-text {
  color: var(--vp-c-text-1);
  font-style: italic;
  font-size: 1rem;
  line-height: 1.625;
  margin: 0 0 1rem;
  position: relative;
  z-index: 10;
  padding-top: 1.5rem;
}

.voice-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 10;
}

.voice-flag {
  font-size: 1.125rem;
  line-height: 1;
}

.voice-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.voice-location {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.voice-hover {
  transition: all 0.2s ease;
}

.voice-hover:hover {
  transform: scale(1.01);
}

/* Donate */
.donate-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .donate-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.donate-card {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.dark .donate-card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.donate-header {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kofi-bg {
  background: linear-gradient(to bottom right, #fff1f2, #fef2f2);
}

.wechat-bg {
  background: linear-gradient(to bottom right, #f0fdf4, #ecfdf5);
}

.alipay-bg {
  background: linear-gradient(to bottom right, #eff6ff, #f0f9ff);
}

.donate-header-icon {
  width: 2.5rem;
  height: 2.5rem;
}

.kofi-bg .donate-header-icon {
  color: #f43f5e;
}

.wechat-bg .donate-header-icon {
  color: #16a34a;
}

.alipay-bg .donate-header-icon {
  color: #2563eb;
}

.donate-body {
  padding: 1.5rem;
  text-align: center;
}

.donate-body h3 {
  font-weight: 700;
  color: var(--vp-c-text-1);
  font-size: 1.125rem;
  margin: 0 0 0.25rem;
}

.donate-body > p {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
}

.donate-qr-wrap {
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.dark .donate-qr-wrap {
  background: var(--vp-c-bg);
}

.donate-qr {
  width: 13rem;
  height: 13rem;
  object-fit: contain;
  border-radius: 0.5rem;
  margin: 0 auto;
  display: block;
}

.donate-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fff;
  cursor: default;
}

.donate-btn-icon {
  width: 1rem;
  height: 1rem;
}

.kofi-btn {
  background: #f43f5e;
  transition: background 0.2s;
}

.kofi-btn:hover {
  background: #e11d48;
}

.wechat-btn {
  background: #16a34a;
}

.alipay-btn {
  background: #2563eb;
}

.donate-hover {
  transition: all 0.2s ease;
}

.donate-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.12);
}

.dark .donate-hover:hover {
  box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.3);
}

/* Roadmap */
.roadmap-card {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
}

.dark .roadmap-card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

@media (min-width: 768px) {
  .roadmap-card {
    padding: 2rem;
  }
}

.roadmap-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.roadmap-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.roadmap-check {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.check-done {
  background: #10b981;
  color: #fff;
}

.check-progress {
  background: #6366f1;
  color: #fff;
}

.check-planned {
  background: #e2e8f0;
  color: #94a3b8;
}

.dark .check-planned {
  background: #334155;
  color: #64748b;
}

.roadmap-title {
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.roadmap-desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0.125rem 0 0;
}

.roadmap-footer {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f5f9;
  text-align: center;
}

.dark .roadmap-footer {
  border-top-color: var(--vp-c-divider);
}

.roadmap-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.roadmap-link:hover {
  color: var(--vp-c-brand-2);
}

.roadmap-link-icon {
  width: 1rem;
  height: 1rem;
}

/* Special Thanks */
.thanks-card {
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.dark .thanks-card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.thanks-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: #fde68a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b45309;
  font-size: 0.875rem;
  font-weight: 700;
  flex-shrink: 0;
}

.dark .thanks-avatar {
  background: rgba(251, 191, 36, 0.25);
  color: #fbbf24;
}

.thanks-body {
  flex: 1;
}

.thanks-name {
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.125rem;
}

.thanks-desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.thanks-desc a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.thanks-badge {
  margin-left: auto;
  font-size: 1.5rem;
  line-height: 1;
}

/* CTA */
.cta-banner {
  background: linear-gradient(to right, #4f46e5, #9333ea, #ec4899);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .cta-banner {
    padding: 3rem;
  }
}

.cta-blur {
  position: absolute;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  filter: blur(3rem);
}

.cta-blur-top {
  top: 0;
  right: 0;
  width: 24rem;
  height: 24rem;
  transform: translate(50%, -50%);
}

.cta-blur-bottom {
  bottom: 0;
  left: 0;
  width: 16rem;
  height: 16rem;
  transform: translate(-50%, 50%);
}

.cta-content {
  position: relative;
  z-index: 10;
}

.cta-content h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.75rem;
}

@media (min-width: 768px) {
  .cta-content h2 {
    font-size: 1.875rem;
  }
}

.cta-content p {
  color: #e0e7ff;
  max-width: 36rem;
  margin: 0 auto 2rem;
  line-height: 1.625;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.2s;
}

.cta-btn-primary {
  background: #fff;
  color: #4f46e5;
}

.cta-btn-primary:hover {
  background: #eef2ff;
}

.cta-btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

.cta-btn-icon {
  width: 1rem;
  height: 1rem;
}

.cta-btn-secondary .cta-btn-icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
