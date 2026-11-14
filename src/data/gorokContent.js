// Top-level centralized content configuration for GoRok
export const GITHUB_REPO_URL = "https://github.com/apoorvslst/go-ngrok";

export const siteMetadata = {
  name: "GoRok",
  tagline: "High-performance edge reverse-proxying & stream multiplexer.",
  eyebrow: "[ EDGE REVERSE PROXY & TUNNEL ENGINE ]",
  headline: "EXPOSE ANY LOCAL PORT.\nZERO FIREWALL HOLES.\nSINGLE GO BINARY.",
  subheadline:
    "GoRok establishes an authenticated, multiplexed tunnel from your local machine to the public edge. Share local servers, test live webhooks, and debug HTTP traffic without opening router ports or configuring corporate VPNs.",
  statusPill: "EDGE NODES OPERATIONAL · GLOBAL P99: 14MS",
  copyright: "© 2026 GoRok. Engineered for developers who need to know."
};

export const cliTabs = [
  {
    id: "install",
    label: "Install",
    command: "curl -sSL https://gorok.dev/install.sh | bash",
    description: "Fetches and verifies the precompiled Go binary for your OS and architecture."
  },
  {
    id: "basic",
    label: "Basic HTTP Tunnel",
    command: "gorok http 3000",
    description: "Exposes localhost:3000 over public TLS on an ephemeral sub-route."
  },
  {
    id: "subdomain",
    label: "Custom Subdomain + Auth",
    command: "gorok http 8080 --subdomain myapp --token secret123",
    description: "Locks in https://myapp.gorok.dev with a 45s grace period and token protection."
  },
  {
    id: "inspect",
    label: "Traffic Inspector",
    command: "gorok inspect --port 4040",
    description: "Launches the in-memory circular ring buffer dashboard on localhost:4040."
  }
];

export const inspectorRequests = [
  {
    id: "req_stripe_982",
    method: "POST",
    path: "/api/webhooks/stripe",
    status: 200,
    statusText: "OK",
    latency: "42ms",
    sizeIn: "512B",
    sizeOut: "2.1KB",
    time: "10:42:15.118",
    headers: {
      "Host": "rahul.gorok.dev",
      "Content-Type": "application/json",
      "User-Agent": "Stripe/1.0 (+https://stripe.com/docs/webhooks)",
      "X-Stripe-Signature": "t=1699982400,v1=9f8a2b5c4d6e7f1a3b5c7d9e1f3a5b7c",
      "X-Forwarded-For": "54.187.205.235",
      "X-Yamux-Stream-Id": "stream_0042",
      "Connection": "keep-alive"
    },
    body: {
      id: "evt_3Nqk8sLkdIwHu7ix0tM",
      object: "event",
      api_version: "2023-10-16",
      type: "payment_intent.succeeded",
      data: {
        object: {
          id: "pi_3Nqk8sLkdIwHu7ix",
          amount: 4900,
          currency: "usd",
          status: "succeeded",
          customer: "cus_P92kxlA9vX1"
        }
      }
    }
  },
  {
    id: "req_dash_983",
    method: "GET",
    path: "/dashboard",
    status: 200,
    statusText: "OK",
    latency: "18ms",
    sizeIn: "120B",
    sizeOut: "8.4KB",
    time: "10:42:18.420",
    headers: {
      "Host": "rahul.gorok.dev",
      "Accept": "text/html,application/xhtml+xml",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
      "Accept-Encoding": "gzip, deflate, br",
      "X-Yamux-Stream-Id": "stream_0043"
    },
    body: null
  },
  {
    id: "req_heavy_984",
    method: "POST",
    path: "/api/heavy-task",
    status: 503,
    statusText: "ERR (Semaphore Overload)",
    latency: "2ms",
    sizeIn: "48B",
    sizeOut: "89B",
    time: "10:42:21.002",
    headers: {
      "Host": "rahul.gorok.dev",
      "Content-Type": "application/json",
      "X-Gorok-Shield": "shed_excess_streams",
      "X-Yamux-Stream-Id": "stream_0101"
    },
    body: {
      error: "service_unavailable",
      reason: "Channel semaphore saturated at 100 concurrent streams",
      action: "retry_after_backoff"
    }
  },
  {
    id: "req_github_985",
    method: "POST",
    path: "/api/webhooks/github",
    status: 200,
    statusText: "OK",
    latency: "34ms",
    sizeIn: "1.2KB",
    sizeOut: "320B",
    time: "10:42:24.891",
    headers: {
      "Host": "rahul.gorok.dev",
      "Content-Type": "application/json",
      "X-GitHub-Event": "push",
      "X-Hub-Signature-256": "sha256=d3b07384d113edec49eaa6238ad5ff00",
      "X-Yamux-Stream-Id": "stream_0044"
    },
    body: {
      ref: "refs/heads/main",
      commits: [
        {
          id: "6a9e10f",
          message: "fix(yamux): optimize buffer read allocation",
          author: { name: "apoorv", email: "dev@gorok.dev" }
        }
      ]
    }
  }
];

export const capabilities = [
  {
    number: "01",
    title: "NAT TRAVERSAL WITHOUT OPEN PORTS",
    summary:
      "Your home or office router blocks incoming internet calls. GoRok establishes an outbound TLS connection to our edge, turning incoming traffic back through the established wire with zero firewall changes.",
    tags: ["networking", "nat-traversal", "zero-ports"],
    visualType: "flow",
    detail: "Bypasses CGNAT, symmetric NATs, and strict corporate firewalls using outbound dialer handshakes."
  },
  {
    number: "02",
    title: "YAMUX STREAM MULTIPLEXING",
    summary:
      "Instead of opening dozens of heavy TCP connections, GoRok multiplexes hundreds of independent virtual request streams inside one single TCP pipe, completely eliminating Head-of-Line blocking.",
    tags: ["multiplexing", "yamux", "low-overhead"],
    visualType: "multiplex",
    detail: "Goroutine-backed session pools multiplex up to 256 logical streams with window-based flow control."
  },
  {
    number: "03",
    title: "SUBDOMAIN GRACE PERIOD & ZERO HIJACKING",
    summary:
      "If your Wi-Fi drops or your laptop lid closes, GoRok holds your custom subdomain reserved in memory for 45 seconds. When you reconnect with your secret token, your live session is seamlessly restored.",
    tags: ["resilience", "grace-period", "subdomain-lock"],
    visualType: "state-badge",
    detail: "45-second atomic lease timer holds routing tables without exposing URLs to third-party squatters."
  },
  {
    number: "04",
    title: "STREAM SEMAPHORE ABUSE SHIELD",
    summary:
      "Protect your local laptop from getting melted by botnet traffic. Built-in zero-allocation channel semaphores cap concurrent in-flight streams to 100, shedding excess requests with clean 503 Overloaded responses.",
    tags: ["ddos-protection", "semaphore", "stability"],
    visualType: "gauge",
    detail: "Bounded Go channels act as mutual exclusion tokens: acquire on stream start, release on EOF."
  },
  {
    number: "05",
    title: "CRASH-PROOF PANIC RECOVERY",
    summary:
      "A malformed HTTP header from a bad actor should never crash your server. GoRok wraps every request in deferred panic-recovery middleware, logging line-accurate stack traces while keeping all other tunnels alive.",
    tags: ["safety", "middleware", "zero-downtime"],
    visualType: "terminal-log",
    detail: "Recover() blocks capture runtime panics, serialize debug payloads, and reply with safe 500 boundaries."
  },
  {
    number: "06",
    title: "PROMETHEUS PRODUCTION METRICS",
    summary:
      "Standard Go writers forget status codes once bytes are sent. GoRok's ResponseWriterWrapper captures status codes and byte counts, exporting real-time Gauges, Counters, and Latency Histograms to port :9090.",
    tags: ["observability", "prometheus", "grafana"],
    visualType: "metrics",
    detail: "Exports http_requests_total, tunnel_active_streams, and stream_latency_bucket metrics out of the box."
  },
  {
    number: "07",
    title: "ZERO-DOWNTIME GRACEFUL SHUTDOWN",
    summary:
      "When upgrading your server, hitting Ctrl+C traps OS signals, closes the front door to new traffic, and grants in-flight requests a 5-second drain window to finish writing their responses cleanly before exiting.",
    tags: ["lifecycle", "os-signals", "graceful-drain"],
    visualType: "shutdown",
    detail: "Signal listeners on syscall.SIGINT and syscall.SIGTERM trigger Yamux GOAWAY frames with a 5s sync window."
  },
  {
    number: "08",
    title: "LOCAL PRIVACY & RING BUFFER STORAGE",
    summary:
      "Your confidential payload data never gets stored on cloud disks. The inspector runs strictly on your own localhost using a fixed 50-slot circular buffer that caps memory usage permanently at ~5 MB.",
    tags: ["privacy", "ring-buffer", "memory-safe"],
    visualType: "ring-buffer",
    detail: "O(1) pointer-head buffer overwrite ensures deterministic zero-leak memory footprint on developer machines."
  }
];

export const ecosystemTools = [
  { name: "Next.js / React", port: "localhost:3000", tag: "Fullstack Web", desc: "HMR and Server Actions forwarded with sub-millisecond roundtrips." },
  { name: "Node.js / Express", port: "localhost:8000", tag: "REST & Microservices", desc: "Test raw API endpoints, session cookies, and CORS configurations." },
  { name: "Python / FastAPI / Django", port: "localhost:8080", tag: "Async & AI APIs", desc: "Stream LLM tokens and async SSE payloads without connection truncation." },
  { name: "Go / Gin / Fiber", port: "localhost:9000", tag: "High Concurrency", desc: "Benchmarked to sustain maximum throughput with native Go runtime efficiency." },
  { name: "Docker Containers", port: "docker:5000", tag: "Containerized Stacks", desc: "Forward container networks and compose clusters without host port bindings." },
  { name: "Stripe & Shopify Webhooks", port: "Live Handshakes", tag: "Fintech & E-Commerce", desc: "Capture signature verification headers and replay checkout events locally." },
  { name: "GitHub Actions & CI/CD", port: "Automated Ephemeral", tag: "DevOps & Testing", desc: "Spin up instant tunnels inside headless runners for end-to-end integration tests." },
  { name: "Local PostgreSQL / Redis", port: "Raw TCP / Socket", tag: "Data Stores", desc: "Tunnel native database connections and Redis caches over authenticated TLS." }
];

export const onboardingSteps = [
  {
    step: "01",
    action: "DOWNLOAD",
    title: "Single Static Go Binary",
    desc: "Grab the precompiled binary for Windows, macOS (Apple Silicon & Intel), or Linux. Zero runtime dependencies, no glibc version mismatches."
  },
  {
    step: "02",
    action: "RUN",
    title: "One Command Tunneling",
    desc: "Type `gorok http 3000` to expose your local web server immediately over an encrypted outbound Yamux connection."
  },
  {
    step: "03",
    action: "INSPECT",
    title: "Real-Time Traffic Inspector",
    desc: "Open `localhost:4040` to see real-time incoming traffic, inspect raw headers and JSON payloads, and replay webhooks in 1 click."
  },
  {
    step: "04",
    action: "SHARE",
    title: "Production-Grade Edge Link",
    desc: "Send your secure `https://<subdomain>.gorok.dev` link to teammates, clients, or third-party webhooks with zero firewall changes."
  }
];

export const faqs = [
  {
    q: "What is GoRok?",
    a: "GoRok is a high-performance reverse-proxy tunneling system written in pure Go. It lets you expose local development ports to the internet without port forwarding or setting up public static IPs."
  },
  {
    q: "How is this different from SSH reverse tunneling (ssh -R)?",
    a: "SSH creates separate system-level processes and heavy TCP connections per session, suffering from Head-of-Line blocking and fragile connection drops. GoRok uses Yamux to multiplex hundreds of virtual streams inside one user-space TCP socket with lightweight Go goroutines, using negligible RAM."
  },
  {
    q: "Do I need to open ports on my home or office router?",
    a: "No. GoRok creates an outbound TCP connection from your machine to our server. Firewalls permit outbound connections by default, so you never have to touch your router or firewall configuration."
  },
  {
    q: "Is my webhook data retained on your servers?",
    a: "No. GoRok streams request payloads directly into your client Yamux session with zero edge persistence. The Traffic Inspector and Ring Buffer run entirely on your local machine."
  },
  {
    q: "Can I use custom subdomains?",
    a: "Yes. Pass the `--subdomain` flag: `gorok http 3000 --subdomain yourname`. GoRok will reserve it and protect it with a 45-second Grace Period if your connection flickers."
  },
  {
    q: "Can I self-host the GoRok server?",
    a: "Yes. GoRok compiles into a single server binary (`gorokd`) and Docker container ready to run on any VPS or Kubernetes cluster with Prometheus metrics exposed on :9090."
  }
];

export const philosophyPrinciples = [
  {
    num: "01",
    title: "Zero Configuration",
    desc: "A single binary that works instantly without config files, YAML boilerplate, or daemon setup. Point and tunnel."
  },
  {
    num: "02",
    title: "Predictable Memory",
    desc: "Fixed ring buffers and channel semaphores ensure your laptop never freezes, even when attacked by bots."
  },
  {
    num: "03",
    title: "Unbreakable Sessions",
    desc: "Grace periods and exponential backoff keep your tunnel alive across Wi-Fi drops, sleep states, and hot reloads."
  },
  {
    num: "04",
    title: "Total Visibility",
    desc: "Every raw byte, header, and latency millisecond is visible and replayable locally on your machine with zero cloud leak."
  }
];

