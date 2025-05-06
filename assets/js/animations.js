// GSAP Animations for Portfolio Website

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
function initHeroAnimations() {
  // Create a timeline for hero section
  const heroTl = gsap.timeline();

  // Hero profile picture animation
  heroTl.from(".hero-profile", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    scale: 0.8,
    ease: "elastic.out(1, 0.5)",
  });

  // Hero text animation - staggered
  heroTl.from(".hero-text", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  }, "-=0.7");

  // Social media icons animation with bounce effect
  heroTl.from(".social-icon", {
    duration: 0.6,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out(2)",
    transformOrigin: "center center",
  }, "-=0.2");

  // CTA Button Animation with special effect
  heroTl.from(".cta-button", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: "power2.out",
  }, "-=0.3");

  // Add a subtle pulse to the CTA button
  gsap.to(".cta-button", {
    scale: 1.05,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 2
  });
}

// Text Reveal Animation for Headings
function initTextRevealAnimations() {
  // Select all section headings
  gsap.utils.toArray("section h2").forEach(heading => {
    gsap.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power3.out"
    });
  });
}

// About Section Animations
function initAboutAnimations() {
  // About Text Animation
  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

  // About Image Animation
  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1.2,
    x: 50,
    opacity: 0,
    ease: "power3.out"
  });

  // Skill Box Animation with 3D effect
  gsap.from(".skill-box", {
    scrollTrigger: {
      trigger: ".skill-box",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    y: 30,
    rotationY: 15,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
  });
}

// Projects Section Animations
function initProjectsAnimations() {
  // Create a staggered reveal animation for project cards
  let projectCards = gsap.utils.toArray(".project-card");
  
  projectCards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      scale: 0.95,
      delay: i * 0.1,
      ease: "power3.out"
    });
  });
  
  // Project image hover animation
  projectCards.forEach(card => {
    const projectImage = card.querySelector("img");
    
    if (projectImage) {
      card.addEventListener("mouseenter", () => {
        gsap.to(projectImage, {
          duration: 0.4,
          scale: 1.05,
          ease: "power1.out"
        });
      });
      
      card.addEventListener("mouseleave", () => {
        gsap.to(projectImage, {
          duration: 0.4,
          scale: 1,
          ease: "power1.out"
        });
      });
    }
  });
}

// Certificates Section Animations
function initCertificatesAnimations() {
  // Certificate Item Animation
  gsap.from(".certificate-item", {
    scrollTrigger: {
      trigger: "#certificates",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    scale: 0.9,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });
  
  // Carousel navigation button animation
  gsap.from("#prev-certificate, #next-certificate", {
    scrollTrigger: {
      trigger: "#certificates",
      start: "top 70%"
    },
    duration: 0.5,
    opacity: 0,
    x: (i) => i === 0 ? -20 : 20,
    ease: "power2.out",
    delay: 0.5
  });
}

// Contact Section Animations
function initContactAnimations() {
  // Contact Form Animation
  gsap.from("#contact-form", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
  });

  // Input Field Animations with sequenced approach
  const formElements = gsap.utils.toArray("#contact-form input, #contact-form textarea, #contact-form button");
  
  gsap.from(formElements, {
    scrollTrigger: {
      trigger: "#contact-form",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.6,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out"
  });
  
  // Form fields focus animation
  formElements.forEach(element => {
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      element.addEventListener("focus", () => {
        gsap.to(element, {
          duration: 0.3,
          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
          ease: "power1.out"
        });
      });
      
      element.addEventListener("blur", () => {
        gsap.to(element, {
          duration: 0.3,
          boxShadow: "none",
          ease: "power1.out"
        });
      });
    }
  });
  
  // Typing animation for Contact heading
  const typingText = document.querySelector('.typing-text');
  if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%"
      }
    });
    
    // Create span for cursor
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'typing-cursor';
    cursorSpan.textContent = '|';
    cursorSpan.style.marginLeft = '2px';
    cursorSpan.style.fontWeight = 'normal';
    cursorSpan.style.animation = 'blink 1s infinite';
    
    // Add cursor style
    const style = document.createElement('style');
    style.textContent = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    typingText.appendChild(cursorSpan);
    
    // Type the text character by character
    let chars = text.split('');
    chars.forEach((char, index) => {
      tl.to(cursorSpan, {
        duration: 0.1,
        onStart: () => {
          typingText.insertBefore(document.createTextNode(char), cursorSpan);
        }
      }, index * 0.1);
    });
  }
}

// Float Animation
function initFloatAnimations() {
  // Apply floating animation to specific elements
  gsap.to(".float-element", {
    y: 15,
    duration: 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });
}

// Parallax Effect for Background Elements
function initParallaxEffects() {
  // Apply parallax effect to background elements
  gsap.utils.toArray(".parallax-bg").forEach(layer => {
    const speed = layer.dataset.speed || 0.1;
    
    gsap.to(layer, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
      ease: "none"
    });
  });
}

// Navigation Highlight Effect
function initNavHighlight() {
  // Highlight current section in navigation
  const sections = document.querySelectorAll("section[id]");
  
  sections.forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      toggleClass: {
        targets: `.nav-link[href="#${section.id}"]`,
        className: "active-nav"
      },
      onEnter: () => updateActiveNav(section.id),
      onEnterBack: () => updateActiveNav(section.id)
    });
  });
}

function updateActiveNav(sectionId) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active-nav");
    if(link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active-nav");
    }
  });
}

// Custom cursor effect
function initCustomCursor() {
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);
  
  window.addEventListener('mousemove', e => {
    gsap.to(cursorDot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power1.out"
    });
  });
}

// Initialize all animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add class to elements for selecting in GSAP
  document.querySelector("#home img").classList.add("hero-profile");
  document.querySelectorAll("#home h1, #home h2, #home p").forEach(el => el.classList.add("hero-text"));
  document.querySelectorAll("#home .flex.space-x-7 a").forEach(el => el.classList.add("social-icon"));
  document.querySelector("#home a[href='#projects'] span").classList.add("cta-button");
  
  document.querySelectorAll("#about p, #about h3, #about ul").forEach(el => el.classList.add("about-text"));
  document.querySelector("#about img").classList.add("about-image");
  document.querySelectorAll("#about .grid.grid-cols-2 div").forEach(el => el.classList.add("skill-box"));
  
  document.querySelectorAll("#projects .grid > div").forEach(el => el.classList.add("project-card"));
  
  // Initialize animations
  initHeroAnimations();
  initTextRevealAnimations();
  initAboutAnimations();
  initProjectsAnimations();
  initCertificatesAnimations();
  initContactAnimations();
  initFloatAnimations();
  initParallaxEffects();
  initNavHighlight();
  initCustomCursor();
  
  // Footer animation
  gsap.from("footer", {
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 1
  });
}); 