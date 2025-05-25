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
    
    // Add the cursor to the typing text element only if it doesn't already exist
    if (!typingText.querySelector('.typing-cursor')) {
      typingText.appendChild(cursorSpan);
      
      // Type the text character by character safely
      let currentText = "";
      let chars = text.split('');
      chars.forEach((char, index) => {
        tl.to({}, {
          duration: 0.1,
          onStart: () => {
            currentText += char;
            // Safely update text content by removing and re-adding the cursor
            typingText.textContent = currentText;
            typingText.appendChild(cursorSpan);
          }
        }, index * 0.1);
      });
    }
  }

  // Contact Sections Reveal Animation
  gsap.from("#contact .mb-16", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Contact Info Column Animation with Staggered Effect
  const contactInfoItems = gsap.utils.toArray("#contact .bg-white\\/10 .flex.items-start");
  gsap.from(contactInfoItems, {
    scrollTrigger: {
      trigger: "#contact .bg-white\\/10",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Social Icons Reveal Animation
  gsap.from("#contact .bg-white\\/10 .flex.space-x-4 a", {
    scrollTrigger: {
      trigger: "#contact .bg-white\\/10 .mt-10",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(1.7)",
    transformOrigin: "center"
  });

  // Contact Form Container Animation
  gsap.from("#contact .bg-white.dark\\:bg-gray-800", {
    scrollTrigger: {
      trigger: "#contact .bg-white.dark\\:bg-gray-800",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Contact Form Elements Animation - Staggered Entry
  const formElements = gsap.utils.toArray("#contact-form .relative, #contact-form button");
  gsap.from(formElements, {
    scrollTrigger: {
      trigger: "#contact-form",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    delay: 0.3
  });
  
  // Background blobs subtle movement animation
  gsap.to("#contact .absolute.top-20", {
    y: -15,
    x: 10,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  gsap.to("#contact .absolute.bottom-10", {
    y: 15,
    x: -10,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut", 
    delay: 0.5
  });
  
  // Form hover effects
  const inputFields = document.querySelectorAll("#contact-form input, #contact-form textarea");
  
  inputFields.forEach(field => {
    field.addEventListener("mouseenter", () => {
      gsap.to(field, {
        scale: 1.02,
        duration: 0.3,
        ease: "power1.out"
      });
    });
    
    field.addEventListener("mouseleave", () => {
      gsap.to(field, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out"
      });
    });
  });
  
  // Submit button hover animation
  const submitButton = document.querySelector("#contact-form button[type='submit']");
  if (submitButton) {
    // Initial attention-grabbing animation
    gsap.timeline({repeat: -1, repeatDelay: 1})
      .to(submitButton, {
        boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)',
        duration: 1,
        ease: "sine.inOut"
      })
      .to(submitButton, {
        boxShadow: '0 0 10px rgba(79, 70, 229, 0.4)',
        duration: 1,
        ease: "sine.inOut"
      });
    
    // Enhanced hover effect
    submitButton.addEventListener("mouseenter", () => {
      gsap.to(submitButton, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: '0 0 30px rgba(99, 102, 241, 1)'
      });
      
      gsap.to(submitButton.querySelector("i"), {
        x: 8,
        rotation: 15,
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    });
    
    submitButton.addEventListener("mouseleave", () => {
      gsap.to(submitButton, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(submitButton.querySelector("i"), {
        x: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
  
  // Submit animation
  const contactForm = document.getElementById("contact-form");
  const statusMessage = document.getElementById("status-message");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      // Create a timeline for the submit animation
      const submitTl = gsap.timeline();
      
      // Get the button
      const button = contactForm.querySelector("button");
      
      // Animate the button
      submitTl.to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: "power1.inOut"
      })
      .to(button, {
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.5)"
      });
      
      // Success message animation happens in the emailJS callback
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
  document.querySelectorAll("#home .flex.space-x-6 a").forEach(el => el.classList.add("social-icon"));
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