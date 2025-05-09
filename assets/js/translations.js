// Language translation data
const translations = {
  en: {
    "hero-hello": "Hello I'm",
    "hero-name": "Raihan,",
    "portfolio-title": "My Portfolio",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-certificates": "Certificates",
    "nav-contact": "Contact",
    "project-live": "Live Demo",
    "project-github": "GitHub",
    "about-title": "About Me",
    "contact-title": "Contact Me",
    "projects-title": "My Projects",
    "certificates-title": "My Certificates",
    "view-work": "View My Work",
    "lets-talk": "Let's Talk",
    "developer-title": "Creative Web Developer",
    "developer-desc": "I transform ideas into stunning digital experiences with clean code and creative designs. Specializing in modern web solutions that deliver results.",
    "need-developer": "Need a developer for your project?",
    "lets-work-together": "Let's Work Together",
    "contact-subtitle": "Have a project in mind or want to discuss a potential collaboration? Feel free to reach out using the form below or through my contact details.",
    "about-content-1": "I'm a Full-Stack Web Developer with expertise in crafting modern, responsive, and user-friendly applications. With a strong foundation in both front-end and back-end technologies, I bring creative ideas to life through clean, efficient code and intuitive design.",
    "about-content-2": "My approach combines technical excellence with creative problem-solving. I specialize in React.js for building dynamic user interfaces and Django for robust backend systems. Whether developing custom web applications or creating responsive designs, I'm committed to delivering high-quality solutions that meet both user needs and business objectives.",
    "frontend-title": "Frontend",
    "backend-title": "Backend",
    "skills-title": "Skills"
    // Add more translations as needed
  },
  bn: {
    "hero-hello": "হ্যালো আমি",
    "hero-name": "রায়হান,",
    "portfolio-title": "আমার পোর্টফোলিও",
    "nav-home": "হোম",
    "nav-about": "আমার সম্পর্কে",
    "nav-projects": "প্রজেক্টস",
    "nav-certificates": "সার্টিফিকেট",
    "nav-contact": "যোগাযোগ",
    "project-live": "লাইভ ডেমো",
    "project-github": "গিটহাব",
    "about-title": "আমার সম্পর্কে",
    "contact-title": "যোগাযোগ করুন",
    "projects-title": "আমার প্রজেক্টস",
    "certificates-title": "আমার সার্টিফিকেট",
    "view-work": "আমার কাজ দেখুন",
    "lets-talk": "কথা বলুন",
    "developer-title": "ক্রিয়েটিভ ওয়েব ডেভেলপার",
    "developer-desc": "আমি ধারণাগুলোকে রূপ দিই আকর্ষণীয় ডিজিটাল অভিজ্ঞতায়, যেখানে স্বচ্ছ কোডিং ও সৃজনশীল ডিজাইন মিলেমিশে কাজ করে। আধুনিক ও কার্যকর ওয়েব সমাধান তৈরি করাই আমার বিশেষত্ব, যা সত্যিকার অর্থেই ফল এনে দেয়।",
    "need-developer": "আপনার প্রজেক্টের জন্য ডেভেলপার প্রয়োজন?",
    "lets-work-together": "চলুন একসাথে কাজ করি",
    "contact-subtitle": "আপনার কোনো প্রজেক্ট আছে বা সম্ভাব্য কোনো সহযোগিতা নিয়ে কথা বলতে চান? নিচের ফর্মটি ব্যবহার করে কিংবা আমার যোগাযোগের তথ্যের মাধ্যমে নির্দ্বিধায় যোগাযোগ করুন। কথা বলার অপেক্ষায় আছি!",
    "about-content-1": "আমি একজন ফুল-স্ট্যাক ওয়েব ডেভেলপার, আধুনিক, রেসপনসিভ ও ব্যবহারবান্ধব অ্যাপ্লিকেশন তৈরি করতে দক্ষ। ফ্রন্টএন্ড ও ব্যাকএন্ড—দুই প্রযুক্তিতেই শক্ত ভিত্তি রয়েছে আমার, যা দিয়ে আমি সৃজনশীল ধারণাগুলোকে রূপ দিই পরিষ্কার, কার্যকর কোড ও স্বজ্ঞাত ডিজাইনের মাধ্যমে।",
    "about-content-2": "আমার কাজের ধরণে প্রযুক্তিগত উৎকর্ষতা ও সৃজনশীল সমস্যা সমাধানের এক অভিনব সমন্বয় থাকে। আমি React.js ব্যবহার করে ডায়নামিক ইউজার ইন্টারফেস এবং Django দিয়ে শক্তিশালী ব্যাকএন্ড সিস্টেম তৈরি করতে বিশেষজ্ঞ। কাস্টম ওয়েব অ্যাপ্লিকেশন হোক কিংবা রেসপনসিভ ডিজাইন—প্রতিটি প্রজেক্টেই আমি এমন উচ্চমানের সমাধান দিতে প্রতিশ্রুতিবদ্ধ, যা ব্যবহারকারীর চাহিদা ও ব্যবসায়িক লক্ষ্য—উভয়ই পূরণ করে।",
    "frontend-title": "ফ্রন্টএন্ড",
    "backend-title": "ব্যাকএন্ড",
    "skills-title": "দক্ষতাসমূহ"
    // Add more translations as needed
  }
};

// Default language
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to set the language
function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('language', language);
  updateContent();
}

// Function to update content based on selected language
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Set language attribute on html element for proper font selection
  if (currentLanguage === 'bn') {
    document.documentElement.setAttribute('lang', 'bn');
  } else {
    document.documentElement.setAttribute('lang', 'en');
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  updateContent();
  
  // Setup language toggle button
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', function() {
      const newLanguage = currentLanguage === 'en' ? 'bn' : 'en';
      setLanguage(newLanguage);
    });
  }
}); 