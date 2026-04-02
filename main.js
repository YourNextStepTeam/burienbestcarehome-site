/**
 * Burien Best Care Home - Main JavaScript
 * Production-quality vanilla JavaScript for luxury adult family home website
 *
 * Features:
 * - Loading screen management
 * - Navigation with scroll detection and mobile menu
 * - Scroll reveal animations with Intersection Observer
 * - Parallax effects
 * - FAQ accordion functionality
 * - Testimonial carousel (if applicable)
 * - RSVP and contact form validation
 * - Smooth scrolling
 * - Counter animations
 * - Back to top button
 * - Accessibility helpers
 * - Lazy loading enhancement
 *
 * No external dependencies - pure vanilla JavaScript ES6+
 */

(function() {
  'use strict';

  /**
   * Configuration object
   */
  const config = {
    loadingScreenMinTime: 1500, // ms
    scrollThreshold: 100, // px
    parallelThreshold: 1024, // desktop breakpoint
    carouselAutoAdvanceTime: 6000, // ms
    countersAnimationDuration: 1500, // ms
    backToTopThreshold: 500, // px
    scrollRevealThreshold: 0.15,
    focusTrapDelay: 50, // ms
  };

  /**
   * Utility functions
   */
  const utils = {
    /**
     * Check if user prefers reduced motion
     */
    prefersReducedMotion() {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },

    /**
     * Check if element exists in DOM
     */
    elementExists(selector) {
      return document.querySelector(selector) !== null;
    },

    /**
     * Get all elements matching selector
     */
    getElements(selector) {
      return Array.from(document.querySelectorAll(selector));
    },

    /**
     * Smoothly scroll to element or position
     */
    smoothScrollTo(target, offset = 0) {
      let top = 0;

      if (typeof target === 'string') {
        const element = document.querySelector(target);
        if (!element) return;
        top = element.offsetTop - offset;
      } else if (typeof target === 'number') {
        top = target;
      } else if (target instanceof Element) {
        top = target.offsetTop - offset;
      }

      window.scrollTo({
        top,
        behavior: this.prefersReducedMotion() ? 'auto' : 'smooth',
      });
    },

    /**
     * Validate email format
     */
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    /**
     * Validate phone number (basic)
     */
    isValidPhone(phone) {
      const phoneRegex = /^[\d\s\-\+\(\)]*\d[\d\s\-\+\(\)]*$/;
      return phone.length >= 10 && phoneRegex.test(phone);
    },

    /**
     * Format phone number (simple formatting)
     */
    formatPhoneNumber(phone) {
      const cleaned = phone.replace(/\D/g, '');
      if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
      }
      return phone;
    },

    /**
     * Animate counter from 0 to target number
     */
    animateCounter(element, targetValue, duration = config.countersAnimationDuration) {
      if (this.prefersReducedMotion()) {
        element.textContent = targetValue;
        return;
      }

      const increment = targetValue / (duration / 16);
      let currentValue = 0;

      const frame = () => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          element.textContent = targetValue;
        } else {
          element.textContent = Math.floor(currentValue);
          requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);
    },

    /**
     * Get nav offset height for smooth scroll
     */
    getNavOffset() {
      const nav = document.querySelector('nav');
      return nav ? nav.offsetHeight : 0;
    },

    /**
     * Trap focus within an element
     */
    trapFocus(element, onEscape = null) {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyDown = (e) => {
        if (e.key === 'Escape' && onEscape) {
          onEscape();
          return;
        }

        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      element.addEventListener('keydown', handleKeyDown);
      firstElement?.focus();

      return () => element.removeEventListener('keydown', handleKeyDown);
    },
  };

  /**
   * Loading Screen Manager
   */
  const loadingScreen = {
    init() {
      const loader = document.querySelector('.loading-screen');
      if (!loader) return;

      // Wait for all images and fonts to load
      const startTime = Date.now();
      const imageElements = document.querySelectorAll('img');
      let loadedImages = 0;

      if (imageElements.length === 0) {
        this.complete(loader, startTime);
        return;
      }

      imageElements.forEach((img) => {
        const handleLoad = () => {
          loadedImages++;
          if (loadedImages === imageElements.length) {
            this.complete(loader, startTime);
          }
        };

        if (img.complete) {
          handleLoad();
        } else {
          img.addEventListener('load', handleLoad);
          img.addEventListener('error', handleLoad);
        }
      });
    },

    complete(loader, startTime) {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, config.loadingScreenMinTime - elapsed);

      setTimeout(() => {
        loader.classList.add('loaded');
        // Remove from DOM after transition completes
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }, remaining);
    },
  };

  /**
   * Navigation Manager
   */
  const navigation = {
    nav: null,
    mobileNav: null,
    hamburger: null,
    navLinks: [],
    removeFocusTrap: null,

    init() {
      this.nav = document.querySelector('nav');
      this.mobileNav = document.querySelector('.navbar-menu');
      this.hamburger = document.querySelector('.hamburger');
      this.navLinks = utils.getElements('nav a[href^="#"], .navbar-menu a[href^="#"]');

      if (!this.nav) return;

      // Scroll detection
      window.addEventListener('scroll', () => this.handleScroll());

      // Mobile hamburger
      if (this.hamburger) {
        this.hamburger.addEventListener('click', () => this.toggleMobileNav());
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        this.hamburger.setAttribute('aria-controls', 'mobile-nav');
      }

      // Nav links
      this.navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href === '#') return;

          e.preventDefault();
          this.closeMobileNav();
          utils.smoothScrollTo(href, utils.getNavOffset());
          this.updateActiveLink(href);
        });
      });

      // Close mobile nav on outside click
      document.addEventListener('click', (e) => {
        if (
          this.mobileNav &&
          !this.mobileNav.contains(e.target) &&
          !this.hamburger.contains(e.target)
        ) {
          this.closeMobileNav();
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.mobileNav?.classList.contains('active')) {
          this.closeMobileNav();
        }
      });

      // Update active link on scroll
      window.addEventListener('scroll', () => this.updateActiveLinkOnScroll());
    },

    handleScroll() {
      if (!this.nav) return;
      const scrolled = window.scrollY > config.scrollThreshold;
      this.nav.classList.toggle('nav-scrolled', scrolled);
    },

    toggleMobileNav() {
      if (this.mobileNav?.classList.contains('active')) {
        this.closeMobileNav();
      } else {
        this.openMobileNav();
      }
    },

    openMobileNav() {
      if (!this.mobileNav || !this.hamburger) return;

      this.mobileNav.classList.add('active');
      this.hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';

      // Trap focus in mobile nav
      setTimeout(() => {
        this.removeFocusTrap = utils.trapFocus(this.mobileNav, () => {
          this.closeMobileNav();
        });
      }, config.focusTrapDelay);
    },

    closeMobileNav() {
      if (!this.mobileNav || !this.hamburger) return;

      this.mobileNav.classList.remove('active');
      this.hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';

      if (this.removeFocusTrap) {
        this.removeFocusTrap();
        this.removeFocusTrap = null;
      }
    },

    updateActiveLink(href) {
      this.navLinks.forEach((link) => {
        if (link.getAttribute('href') === href) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    },

    updateActiveLinkOnScroll() {
      const sections = utils.getElements('[id]');
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const navHeight = utils.getNavOffset();

        if (rect.top <= navHeight + 10 && rect.bottom > navHeight) {
          currentSection = `#${section.id}`;
        }
      });

      if (currentSection) {
        this.updateActiveLink(currentSection);
      }
    },
  };

  /**
   * Scroll Reveal with Intersection Observer
   */
  const scrollReveal = {
    observer: null,
    elements: [],

    init() {
      this.elements = utils.getElements('.reveal');
      if (this.elements.length === 0) return;

      // If user prefers reduced motion, immediately reveal all
      if (utils.prefersReducedMotion()) {
        this.elements.forEach((el) => el.classList.add('active'));
        return;
      }

      // Create Intersection Observer
      const options = {
        threshold: config.scrollRevealThreshold,
        rootMargin: '0px 0px -50px 0px',
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            this.observer.unobserve(entry.target);
          }
        });
      }, options);

      this.elements.forEach((el) => this.observer.observe(el));
    },

    destroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
    },
  };

  /**
   * Parallax Effect Manager
   */
  const parallax = {
    hero: null,
    enabled: true,

    init() {
      this.hero = document.querySelector('.hero, [data-parallax]');
      if (!this.hero) return;

      // Disable on mobile
      this.enabled = window.innerWidth > config.parallelThreshold;

      if (!this.enabled || utils.prefersReducedMotion()) {
        return;
      }

      window.addEventListener('scroll', () => this.update());
      window.addEventListener('resize', () => {
        this.enabled = window.innerWidth > config.parallelThreshold;
      });
    },

    update() {
      if (!this.hero || !this.enabled) return;

      const scrollY = window.scrollY;
      const offset = scrollY * 0.5;

      this.hero.style.backgroundPosition = `center ${offset}px`;
    },
  };

  /**
   * FAQ Accordion Manager
   */
  const faqAccordion = {
    items: [],

    init() {
      this.items = utils.getElements('.faq-item');
      if (this.items.length === 0) return;

      this.items.forEach((item) => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        // Add ARIA attributes
        const answer = item.querySelector('.faq-answer');
        if (answer) {
          answer.setAttribute('id', `faq-answer-${Math.random().toString(36).slice(2, 9)}`);
        }

        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', answer?.id || '');
        question.setAttribute('role', 'button');
        question.setAttribute('tabindex', '0');

        // Click handler
        question.addEventListener('click', () => this.toggle(item));

        // Keyboard handlers
        question.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggle(item);
          }
        });
      });
    },

    toggle(item) {
      const isActive = item.classList.contains('active');
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (isActive) {
        this.close(item);
      } else {
        // Close all others
        this.items.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            this.close(otherItem);
          }
        });

        // Open this one
        item.classList.add('active');
        if (question) question.setAttribute('aria-expanded', 'true');
        if (answer) {
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
      }
    },

    close(item) {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      item.classList.remove('active');
      if (question) question.setAttribute('aria-expanded', 'false');
      if (answer) answer.style.maxHeight = '0px';
    },
  };

  /**
   * Testimonial Carousel Manager
   */
  const carousel = {
    container: null,
    slides: [],
    dots: [],
    currentIndex: 0,
    autoAdvanceTimer: null,
    isHovered: false,

    init() {
      this.container = document.querySelector('[data-carousel], .testimonial-carousel');
      if (!this.container) return;

      this.slides = utils.getElements(`${this.container.selector || '.testimonial-carousel'} .slide, [data-carousel-slide]`);
      this.dots = utils.getElements(`${this.container.selector || '.testimonial-carousel'} .dot, [data-carousel-dot]`);

      if (this.slides.length === 0) return;

      // Add ARIA attributes
      this.container.setAttribute('role', 'region');
      this.container.setAttribute('aria-label', 'Testimonials carousel');
      this.container.setAttribute('aria-live', 'polite');

      this.slides.forEach((slide, index) => {
        slide.setAttribute('role', 'article');
        slide.setAttribute('aria-label', `Testimonial ${index + 1} of ${this.slides.length}`);
        if (index !== 0) slide.style.display = 'none';
      });

      this.dots.forEach((dot, index) => {
        dot.setAttribute('role', 'button');
        dot.setAttribute('tabindex', index === 0 ? '0' : '-1');
        dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
        dot.addEventListener('click', () => this.goToSlide(index));
        dot.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.goToSlide(index);
          }
        });
      });

      // Navigation buttons
      const prevBtn = this.container.querySelector('[data-carousel-prev]');
      const nextBtn = this.container.querySelector('[data-carousel-next]');

      if (prevBtn) {
        prevBtn.setAttribute('aria-label', 'Previous testimonial');
        prevBtn.addEventListener('click', () => this.prev());
      }

      if (nextBtn) {
        nextBtn.setAttribute('aria-label', 'Next testimonial');
        nextBtn.addEventListener('click', () => this.next());
      }

      // Auto-advance
      this.startAutoAdvance();

      // Pause on hover/focus
      this.container.addEventListener('mouseenter', () => {
        this.isHovered = true;
        this.stopAutoAdvance();
      });

      this.container.addEventListener('mouseleave', () => {
        this.isHovered = false;
        this.startAutoAdvance();
      });

      this.container.addEventListener('focusin', () => {
        this.stopAutoAdvance();
      });

      this.container.addEventListener('focusout', () => {
        if (!this.isHovered) {
          this.startAutoAdvance();
        }
      });
    },

    goToSlide(index) {
      if (index === this.currentIndex) return;

      this.slides[this.currentIndex].style.display = 'none';
      this.slides[index].style.display = 'block';

      if (this.dots[this.currentIndex]) {
        this.dots[this.currentIndex].setAttribute('tabindex', '-1');
        this.dots[this.currentIndex].classList.remove('active');
      }

      if (this.dots[index]) {
        this.dots[index].setAttribute('tabindex', '0');
        this.dots[index].classList.add('active');
        this.dots[index].focus();
      }

      this.currentIndex = index;
    },

    prev() {
      const newIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
      this.goToSlide(newIndex);
      this.stopAutoAdvance();
      this.startAutoAdvance();
    },

    next() {
      const newIndex = (this.currentIndex + 1) % this.slides.length;
      this.goToSlide(newIndex);
      this.stopAutoAdvance();
      this.startAutoAdvance();
    },

    startAutoAdvance() {
      if (utils.prefersReducedMotion()) return;
      this.autoAdvanceTimer = setInterval(() => this.next(), config.carouselAutoAdvanceTime);
    },

    stopAutoAdvance() {
      clearInterval(this.autoAdvanceTimer);
    },
  };

  /**
   * Open House RSVP Form Manager
   */
  const rsvpForm = {
    form: null,

    init() {
      this.form = document.querySelector('[data-form="rsvp"], .rsvp-form');
      if (!this.form) return;

      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      this.addValidation();
    },

    addValidation() {
      const nameInput = this.form.querySelector('input[name="name"]');
      const emailInput = this.form.querySelector('input[name="email"]');
      const phoneInput = this.form.querySelector('input[name="phone"]');
      const guestsInput = this.form.querySelector('input[name="guests"]');

      if (nameInput) {
        nameInput.addEventListener('blur', () => this.validateRequired(nameInput));
      }

      if (emailInput) {
        emailInput.addEventListener('blur', () => this.validateEmail(emailInput));
      }

      if (phoneInput) {
        phoneInput.addEventListener('blur', () => this.validatePhone(phoneInput));
        phoneInput.addEventListener('input', () => {
          phoneInput.value = utils.formatPhoneNumber(phoneInput.value);
        });
      }

      if (guestsInput) {
        guestsInput.addEventListener('blur', () => this.validateRequired(guestsInput));
      }
    },

    validateRequired(input) {
      const isValid = input.value.trim() !== '';
      return this.setValidation(input, isValid, 'This field is required');
    },

    validateEmail(input) {
      const isValid = utils.isValidEmail(input.value);
      return this.setValidation(input, isValid, 'Please enter a valid email address');
    },

    validatePhone(input) {
      const isValid = input.value.trim() === '' || utils.isValidPhone(input.value);
      return this.setValidation(input, isValid, 'Please enter a valid phone number');
    },

    setValidation(input, isValid, errorMessage) {
      const errorId = `${input.name}-error`;
      let errorElement = document.querySelector(`#${errorId}`);

      if (!isValid) {
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', errorId);

        if (!errorElement) {
          errorElement = document.createElement('span');
          errorElement.id = errorId;
          errorElement.className = 'error-message';
          errorElement.textContent = errorMessage;
          input.parentElement.appendChild(errorElement);
        }
      } else {
        input.setAttribute('aria-invalid', 'false');
        input.removeAttribute('aria-describedby');
        if (errorElement) {
          errorElement.remove();
        }
      }

      return isValid;
    },

    handleSubmit(e) {
      e.preventDefault();

      const nameInput = this.form.querySelector('input[name="name"]');
      const emailInput = this.form.querySelector('input[name="email"]');
      const phoneInput = this.form.querySelector('input[name="phone"]');
      const guestsInput = this.form.querySelector('input[name="guests"]');

      const isNameValid = this.validateRequired(nameInput);
      const isEmailValid = this.validateEmail(emailInput);
      const isPhoneValid = this.validatePhone(phoneInput);
      const isGuestsValid = this.validateRequired(guestsInput);

      if (!isNameValid || !isEmailValid || !isPhoneValid || !isGuestsValid) {
        return;
      }

      this.showSuccess();
    },

    showSuccess() {
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.setAttribute('role', 'alert');
      successMessage.textContent = 'Thank you for your RSVP! We look forward to seeing you.';

      this.form.parentElement.insertBefore(successMessage, this.form);
      this.form.style.display = 'none';

      setTimeout(() => {
        this.form.style.display = 'block';
        this.form.reset();
        successMessage.remove();
      }, 5000);
    },
  };

  /**
   * Contact Form Manager
   */
  const contactForm = {
    form: null,

    init() {
      this.form = document.querySelector('[data-form="contact"], .contact-form');
      if (!this.form) return;

      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      this.addValidation();
    },

    addValidation() {
      const inputs = this.form.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        if (input.type === 'email') {
          input.addEventListener('blur', () => this.validateEmail(input));
        } else if (input.type === 'tel') {
          input.addEventListener('blur', () => this.validatePhone(input));
          input.addEventListener('input', () => {
            input.value = utils.formatPhoneNumber(input.value);
          });
        } else if (input.hasAttribute('required')) {
          input.addEventListener('blur', () => this.validateRequired(input));
        }
      });
    },

    validateRequired(input) {
      const isValid = input.value.trim() !== '';
      return this.setValidation(input, isValid, 'This field is required');
    },

    validateEmail(input) {
      const isValid = input.value.trim() === '' || utils.isValidEmail(input.value);
      return this.setValidation(input, isValid, 'Please enter a valid email address');
    },

    validatePhone(input) {
      const isValid = input.value.trim() === '' || utils.isValidPhone(input.value);
      return this.setValidation(input, isValid, 'Please enter a valid phone number');
    },

    setValidation(input, isValid, errorMessage) {
      const errorId = `${input.name}-error`;
      let errorElement = document.querySelector(`#${errorId}`);

      if (!isValid) {
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', errorId);

        if (!errorElement) {
          errorElement = document.createElement('span');
          errorElement.id = errorId;
          errorElement.className = 'error-message';
          errorElement.textContent = errorMessage;
          input.parentElement.appendChild(errorElement);
        }
      } else {
        input.setAttribute('aria-invalid', 'false');
        input.removeAttribute('aria-describedby');
        if (errorElement) {
          errorElement.remove();
        }
      }

      return isValid;
    },

    handleSubmit(e) {
      e.preventDefault();

      const inputs = this.form.querySelectorAll('input[required], textarea[required]');
      let isFormValid = true;

      inputs.forEach((input) => {
        if (input.type === 'email') {
          if (!this.validateEmail(input)) isFormValid = false;
        } else if (input.type === 'tel') {
          if (!this.validatePhone(input)) isFormValid = false;
        } else {
          if (!this.validateRequired(input)) isFormValid = false;
        }
      });

      if (!isFormValid) {
        return;
      }

      this.showSuccess();
    },

    showSuccess() {
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.setAttribute('role', 'alert');
      successMessage.textContent = 'Thank you for your message. We will be in touch soon!';

      this.form.parentElement.insertBefore(successMessage, this.form);
      this.form.style.display = 'none';

      setTimeout(() => {
        this.form.style.display = 'block';
        this.form.reset();
        successMessage.remove();
      }, 5000);
    },
  };

  /**
   * Counter Animation Manager
   */
  const counters = {
    elements: [],
    observer: null,

    init() {
      this.elements = utils.getElements('[data-count], .counter');
      if (this.elements.length === 0) return;

      const options = {
        threshold: 0.5,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target.dataset.count || entry.target.textContent;
            const value = parseInt(target, 10);

            if (!isNaN(value)) {
              utils.animateCounter(entry.target, value);
            }

            this.observer.unobserve(entry.target);
          }
        });
      }, options);

      this.elements.forEach((el) => this.observer.observe(el));
    },

    destroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
    },
  };

  /**
   * Back to Top Button Manager
   */
  const backToTopButton = {
    button: null,

    init() {
      this.button = document.querySelector('[data-back-to-top], .back-to-top');
      if (!this.button) return;

      this.button.setAttribute('aria-label', 'Back to top');
      this.button.setAttribute('type', 'button');

      this.button.addEventListener('click', () => {
        utils.smoothScrollTo(0);
      });

      window.addEventListener('scroll', () => this.toggleVisibility());
      this.toggleVisibility();
    },

    toggleVisibility() {
      const isVisible = window.scrollY > config.backToTopThreshold;
      this.button.classList.toggle('visible', isVisible);
      this.button.setAttribute('aria-hidden', !isVisible);
      this.button.setAttribute('tabindex', isVisible ? '0' : '-1');
    },
  };

  /**
   * Footer Year Manager
   */
  const footer = {
    init() {
      const yearElements = utils.getElements('[data-year], .year');
      yearElements.forEach((el) => {
        el.textContent = new Date().getFullYear();
      });
    },
  };

  /**
   * Lazy Loading Enhancement
   */
  const lazyLoading = {
    images: [],
    observer: null,

    init() {
      // Check if native lazy loading is supported
      const img = document.createElement('img');
      if ('loading' in img) {
        // Native lazy loading supported
        return;
      }

      // Fallback to Intersection Observer
      this.images = utils.getElements('img[loading="lazy"]');
      if (this.images.length === 0) return;

      const options = {
        rootMargin: '50px',
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            this.observer.unobserve(img);
          }
        });
      }, options);

      this.images.forEach((img) => {
        img.classList.add('lazy');
        this.observer.observe(img);
      });
    },

    destroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
    },
  };

  /**
   * Skip to Content Link Manager
   */
  const skipToContent = {
    init() {
      const skipLink = document.querySelector('[href="#main-content"], .skip-to-content');
      if (!skipLink) return;

      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.querySelector('#main-content, main');
        if (mainContent) {
          mainContent.setAttribute('tabindex', '-1');
          mainContent.focus();
          mainContent.addEventListener('blur', () => {
            mainContent.removeAttribute('tabindex');
          });
        }
      });
    },
  };

  /**
   * Initialize all modules on DOMContentLoaded
   */
  document.addEventListener('DOMContentLoaded', () => {
    loadingScreen.init();
    navigation.init();
    scrollReveal.init();
    parallax.init();
    faqAccordion.init();
    carousel.init();
    rsvpForm.init();
    contactForm.init();
    counters.init();
    backToTopButton.init();
    footer.init();
    lazyLoading.init();
    skipToContent.init();
  });

  /**
   * Cleanup on page unload
   */
  window.addEventListener('unload', () => {
    scrollReveal.destroy();
    counters.destroy();
    lazyLoading.destroy();
    carousel.stopAutoAdvance();
  });

  /**
   * Expose public API for external use (if needed)
   */
  window.SiteApp = {
    utils,
    navigation,
    scrollReveal,
    parallax,
    carousel,
    rsvpForm,
    contactForm,
  };
})();
