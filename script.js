// ----------------- Navigation Bar ----------------------

const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.getElementById("navbar");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.style.display = menuOpen ? "flex" : "none";
  header.classList.toggle("bg-white", menuOpen);
});

document.addEventListener("mousedown", (e) => {
  if (
    menuOpen &&
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    mobileMenu.style.display = "none";
    header.classList.remove("bg-white");
    menuOpen = false;
  }
});

// ----------------- Features Section ----------------------

const cards = [
  {
    title: "SalesSync",
    desc: "BTL activation tool that helps businesses effortlessly collect consumer data during field activation campaigns.",
  },
  {
    title: "Webkaari",
    desc: "Build your digital presence with ease",
  },
  {
    title: "Garaj Connectivity Cloud",
    desc: "Pakistan’s first auto-scaling Connectivity Cloud that stops DDoS attacks before they reach your infrastructure — powered by Cloudflare.",
  },
];

const cardGrid = document.getElementById("cardGrid");

cards.forEach(({ title, desc }) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
      <div class="card-content">
        <span>Product Launch</span>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
      <button>
        Learn More
        <img src="./assets/icons/right_arrow.svg" alt="arrow icon" />
      </button>
    `;

  cardGrid.appendChild(card);
});

// -------------------- About Section ----------------------------

const accordians = [
  "Infrastructure as a Service",
  "Business Continuity",
  "Data Center",
  "Productivity and SaaS",
  "Network & Security",
  "Communication Solutions",
];

const container = document.getElementById("accordionContainer");

accordians.forEach((title) => {
  const acc = document.createElement("div");
  acc.className = "accordion";

  acc.innerHTML = `
    <button class="accordion-button">
      <span class="accordion-title">${title}</span>
      <span class="accordion-icon">
        <img src="./assets/icons/arrow-down.svg" alt="arrow down" />
      </span>
    </button>
    <div class="accordion-content">Your text here...</div>
  `;

  const btn = acc.querySelector(".accordion-button");
  const icon = acc.querySelector(".accordion-icon");

  btn.addEventListener("click", () => {
    const isOpen = acc.classList.contains("open");
    acc.classList.toggle("open");

    icon.innerHTML = isOpen
      ? '<img src="./assets/icons/arrow-down.svg" alt="arrow down" />'
      : '<img src="./assets/icons/arrow-down.svg" alt="arrow down" class="arrow-up" />';
  });

  container.appendChild(acc);
});

// ----------------------- Solutions Section ---------------------------------

const sectionCards = [
  {
    icon: "./assets/icons/server.svg",
    title: "Local Data Hosting for Compliance and Performance",
    desc: "Data is securely hosted within Pakistan’s largest Tier 3 data center, ensuring compliance with local regulations and delivering low-latency performance.",
  },
  {
    icon: "./assets/icons/cloud.svg",
    title: "Scalable and Flexible Cloud Infrastructure",
    desc: "Garaj offers scalable compute, storage, and networking resources that adapt to your business needs, supporting various applications from development to enterprise solutions.",
  },
  {
    icon: "./assets/icons/security.svg",
    title: "End-to-End Data Security",
    desc: "Your data stays protected at every step — from secure storage and encrypted transfers to threat monitoring and disaster recovery. Garaj ensures your business data is safeguarded against breaches, loss, or unauthorized access.",
  },
  {
    icon: "./assets/icons/security.svg",
    title: "Built-in Cybersecurity Measures",
    desc: "Intrinsic security features embedded in cloud infrastructure, ensuring protection is integrated by design across architecture, operations, and the software lifecycle",
  },
  {
    icon: "./assets/icons/user.svg",
    title: "User-Friendly Self-Service Portal",
    desc: "A comprehensive self-service portal allows for easy management of services, billing, and support, empowering users with greater control and transparency.",
  },
  {
    icon: "./assets/icons/server.svg",
    title: "24/7 Local Support and Managed Services",
    desc: "Dedicated local support teams are available around the clock to assist with setup, management, and troubleshooting, ensuring seamless operation and peace of mind.",
  },
];

const sectionContainer = document.getElementById("sectionCardContainer");

sectionCards.forEach(({ icon, title, desc }) => {
  const card = document.createElement("div");
  card.className = "solution-card";

  card.innerHTML = `
      <img src="${icon}" alt="card_icon" />
      <h3>${title}</h3>
      <p>${desc}</p>
    `;

  sectionContainer.appendChild(card);
});

// --------------------- Customers  Section ------------------------------

const customersCards = [
  {
    icon: "./assets/icons/flash.svg",
    title: "Jeff Bezos",
    desc: "In the age of digital, the most important thing is being online and staying visible.",
  },
  {
    icon: "./assets/icons/sphere.svg",
    title: "Larry Page",
    desc: "In the age of digital, the most important thing is being online and staying visible.",
  },
  {
    icon: "./assets/icons/flash.svg",
    title: "Jeff Bezos",
    desc: "In the age of digital, the most important thing is being online and staying visible.",
  },
];

const customersContainer = document.getElementById("customerCards");

customersCards.forEach(({ icon, title, desc }) => {
  const card = document.createElement("div");
  card.className = "customer-card";

  card.innerHTML = `
      <div class="card-header">
        <img src="${icon}" alt="icon" class="icon" />
        <h3>${title}</h3>
      </div>
      <p>${desc}</p>
    `;

  customersContainer.appendChild(card);
});

// --------------------- Partners  Section ------------------------------

const partners = ["./assets/images/veeam-logo.svg"];

const partnersContainer = document.getElementById("partnersContainer");

partners.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "partner-logo";
  partnersContainer.appendChild(img);
});

// ------------------------- Footer ---------------------------------

const socials = [
  { icon: "./assets/icons/facebook.svg", link: "https://www.facebook.com" },
  { icon: "./assets/icons/instagram.svg", link: "https://www.instagram.com" },
  { icon: "./assets/icons/youtube.svg", link: "https://www.youtube.com" },
  { icon: "./assets/icons/linkedin.svg", link: "https://www.linkedin.com" },
];

const socialIcons = document.getElementById("socialIcons");

socials.forEach(({ icon, link }) => {
  const a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  a.rel = "noreferrer";
  a.innerHTML = `<img src="${icon}" alt="social_icon" />`;
  socialIcons.appendChild(a);
});

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
