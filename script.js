// ===== NAVIGATION =====
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// Scroll effect
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu toggle
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Stagger children of a container
document.querySelectorAll('.stagger-children').forEach(parent => {
  parent.querySelectorAll(':scope > *').forEach((child, i) => {
    child.classList.add('fade-up');
    child.style.transitionDelay = `${i * 0.1}s`;
  });
});

// ===== CONTACT FORM TYPE TOGGLE =====
const toggleBtns = document.querySelectorAll('.toggle-btn');
toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== HERO ENTRANCE =====
// The hero items animate in on load via CSS + class
window.addEventListener('DOMContentLoaded', () => {
  const heroItems = document.querySelectorAll('.hero-animate');
  heroItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 + i * 120);
  });

  const sunWrap = document.querySelector('.hero-sun-wrap');
  if (sunWrap) {
    setTimeout(() => sunWrap.classList.add('visible'), 400);
  }
});
