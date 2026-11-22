# GoRok — Official Web Interface

> Single-page web experience for **GoRok**, the high-performance edge reverse-proxy and Yamux stream multiplexer.

Visually inspired by the dark editorial aesthetics of [realmalliance.com](https://realmalliance.com/).

---

##  Core Product Identity

GoRok is a lightweight reverse-tunneling service built in Go that securely exposes local servers (e.g. `localhost:3000`) to the public internet through an encrypted outbound connection—with zero router configuration, zero open inbound firewall ports, and zero complex VPNs.

- **Main GoRok Project:** [github.com/apoorvslst/go-ngrok](https://github.com/apoorvslst/go-ngrok)
- **Frontend Repository:** [github.com/apoorvslst/GoRoK](https://github.com/apoorvslst/GoRoK)

---

##  Visual System & Architecture

- **Primary Background:** `#050505` (Deep void black)
- **Surface Panels:** `#0E0E0E` and `#121212`
- **Primary Text:** `#F2F2EE` (Warm off-white)
- **Brand Accent:** `#FF4F00` (Industrial bright orange)
- **Accent Hover:** `#FF6A2A`
- **Subtle Borders:** `rgba(255, 255, 255, 0.10)`
- **Typography:** `JetBrains Mono` / Monospace for headings and technical labels, `Inter` for body copy.

---

##  Key Sections Included

1. **Navigation Bar:** Wordmark, desktop section anchors, GitHub source link, mobile drawer.
2. **Hero Section:** Monospace headline, live interactive terminal session simulator with dynamic request injection.
3. **Interactive Command Center:** 4 tabbed commands with 1-click clipboard copy (Install, Basic Tunnel, Subdomain + Auth, Traffic Inspector).
4. **Live Traffic Inspector Mockup:** Real-time request feed, header/JSON body explorer, and interactive `Replay Request to localhost:3000` test loop.
5. **Numbered Capabilities (01 to 08):** Alternating layout covering NAT traversal, Yamux multiplexing, 45s grace period, 100-stream semaphore shield, panic recovery, Prometheus metrics (:9090), graceful shutdown, and circular ring buffer.
6. **Ecosystem Compatibility:** React/Next.js, Express, FastAPI, Gin, Docker, Stripe, GitHub Actions, and PostgreSQL/Redis.
7. **4-Stage Onboarding Timeline:** Download, Run, Inspect, Share.
8. **Developer FAQ Accordion:** Hairline expand/collapse answers to technical architecture questions.
9. **Product Philosophy:** 4 core principles for calm developer reliability.
10. **Closing Call to Action:** Copyable installer command and direct binary download.
11. **Minimal Editorial Footer:** Global p99 latency status indicator and categorized links.

---

##  Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

##  License

MIT © 2026 GoRok. Engineered for developers who need to know.
