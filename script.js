// ===== PAGE LOADER =====
document.addEventListener("DOMContentLoaded", () => {
  // Hide loader after page loads
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
    
    // Start entrance animations after loader is hidden
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('visible');
        }, index * 200);
      });
      
      // Animate text reveal
      const textLines = document.querySelectorAll('.text-reveal-container');
      textLines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add('revealed');
        }, index * 300);
      });
    }, 500);
  }, 2000);
  
  // Custom cursor effect
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
    
    // Smooth cursor movement with slight lag for follower
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 80);
  });
  
  document.addEventListener('mouseout', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
  });
  
  // Add cursor effects and magnetic pull for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .portfolio-item, .service-card');
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorFollower.style.width = '50px';
      cursorFollower.style.height = '50px';
      cursorFollower.style.backgroundColor = 'rgba(93, 95, 239, 0.15)';
      cursorFollower.style.mixBlendMode = 'exclusion';
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.width = '30px';
      cursorFollower.style.height = '30px';
      cursorFollower.style.backgroundColor = 'rgba(93, 95, 239, 0.2)';
      cursorFollower.style.mixBlendMode = 'normal';
    });
    
    // Magnetic effect for buttons and links
    if (element.tagName === 'BUTTON' || element.tagName === 'A') {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)';
      });
    }
  });

  // ===== HEADER SCROLL EFFECT =====
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
 // Parallax scroll effect for hero section
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (scrollPosition < window.innerHeight) {
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      // Keep the transform centered by maintaining the -50%, -50% translate
      heroContent.style.transform = `translate(-50%, -50%) translateY(${scrollPosition * 0.3}px)`;
      heroContent.style.opacity = 1 - (scrollPosition / (window.innerHeight * 0.8));
    }
  });

  // ===== PORTFOLIO ITEMS =====
  const portfolioData = [
    {
      id: 1,
      title: "E-Commerce Site",
      category: "web",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Full-featured e-commerce website with product listings and cart functionality.",
      githubLink: "https://github.com/ZaibiJafri/Ecomsite",
      previewLink: "https://ecomsite.pages.dev/"
    },
    {
      id: 2,
      title: "Weather App",
      category: "web",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Real-time weather application using Weather API with location-based forecasts.",
      githubLink: "https://github.com/ZaibiJafri/",
      previewLink: "https://github.com/ZaibiJafri/"
    },
    {
      id: 3,
      title: "Chat Application",
      category: "web",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      description: "Real-time chat application with private messaging and group chat features.",
      githubLink: "https://github.com/ZaibiJafri/",
      previewLink: "https://github.com/ZaibiJafri/"
    },
    {
      id: 4,
      title: "TicTacToe Game",
      category: "web",
      image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Interactive Tic Tac Toe game with score tracking and player options.",
      githubLink: "https://github.com/ZaibiJafri/",
      previewLink: "https://github.com/ZaibiJafri/"
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "ui",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
      description: "Responsive personal portfolio website showcasing skills and projects.",
      githubLink: "https://github.com/ZaibiJafri/",
      previewLink: "https://github.com/ZaibiJafri/"
    },
    {
      id: 6,
      title: "Web Scraping Tool",
      category: "web",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Python-based web scraping tool for gathering and analyzing web data.",
      githubLink: "https://github.com/ZaibiJafri/",
      previewLink: "https://github.com/ZaibiJafri/"
    }
  ];

  const portfolioGrid = document.getElementById("portfolio-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Generate portfolio items
  function generatePortfolioItems(items) {
    portfolioGrid.innerHTML = "";

    items.forEach(item => {
      const portfolioItem = document.createElement("div");
      portfolioItem.classList.add("portfolio-item");
      portfolioItem.dataset.category = item.category;

      portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-overlay">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="portfolio-links">
            <a href="${item.githubLink}" target="_blank" class="portfolio-link"><i class="fab fa-github"></i> Code</a>
            <a href="${item.previewLink}" target="_blank" class="portfolio-link"><i class="fas fa-external-link-alt"></i> Preview</a>
          </div>
        </div>
      `;

      portfolioGrid.appendChild(portfolioItem);
    });
  }

  function getCategory(category) {
    switch (category) {
      case 'web':
        return 'Web Design';
      case 'brand':
        return 'Branding';
      case 'ui':
        return 'UI/UX Design';
      default:
        return 'Design';
    }
  }

  // Filter portfolio items
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(btn => btn.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      if (filter === "all") {
        generatePortfolioItems(portfolioData);
      } else {
        const filteredItems = portfolioData.filter(item => item.category === filter);
        generatePortfolioItems(filteredItems);
      }
    });
  });

  // Initial portfolio load
  generatePortfolioItems(portfolioData);

  // ===== TESTIMONIALS SLIDER =====
  const testimonialData = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Working with this creative studio was a game-changer for our brand. The attention to detail and innovative approach to design exceeded our expectations. Our website traffic has increased by 150% since the redesign!"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, StartUp Inc.",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      text: "As a startup, we needed a strong visual identity to stand out in a competitive market. The branding strategy and design created for us perfectly captured our vision and values. Highly recommended for anyone looking to elevate their brand!"
    },
    {
      id: 3,
      name: "Emma Lewis",
      position: "E-commerce Manager, StyleShop",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Our online store needed a complete overhaul to improve user experience and conversion rates. The UX/UI redesign provided was intuitive, beautiful, and most importantly, effective. Our sales have increased by 75% in just two months!"
    }
  ];

  const testimonialsSlider = document.getElementById("testimonials-slider");
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");
  let currentSlide = 0;

  // Generate testimonial slides
  function generateTestimonials() {
    testimonialData.forEach((testimonial, index) => {
      const slide = document.createElement("div");
      slide.classList.add("testimonial-slide");
      if (index === 0) slide.classList.add("active");

      slide.innerHTML = `
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
        <p class="testimonial-text">${testimonial.text}</p>
        <h4 class="testimonial-author">${testimonial.name}</h4>
        <p class="testimonial-position">${testimonial.position}</p>
      `;

      testimonialsSlider.appendChild(slide);
    });
  }

  // Navigate testimonials
  function showSlide(n) {
    const slides = document.querySelectorAll(".testimonial-slide");

    slides.forEach(slide => slide.classList.remove("active"));

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  // Initialize testimonials
  generateTestimonials();

  // Auto-advance testimonials
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 7000);

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    // For demonstration, we'll just show a success message

    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());

    // Simulate sending data
    setTimeout(() => {
      alert("Thanks for your message! I'll get back to you soon.");
      contactForm.reset();
    }, 1000);
  });

  // ===== COUNTDOWN TIMER =====
  const countdownElement = document.getElementById("countdown");

  // Set end date - 7 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate.getTime() - now;

    if (timeLeft <= 0) {
      countdownElement.innerHTML = "Offer expired!";
      return;
    }

    // Calculate time units
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display countdown
    countdownElement.innerHTML = `
      <span>${days}d</span> : <span>${hours}h</span> : <span>${minutes}m</span> : <span>${seconds}s</span>
    `;
  }

  // Initial countdown update
  updateCountdown();

  // Update countdown every second
  setInterval(updateCountdown, 1000);

  // ===== SMOOTH SCROLLING =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});

  // ===== PARTICLES JS INITIALIZATION =====
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 1200
          }
        },
        "color": {
          "value": ["#6C63FF", "#00E0B0", "#B37FFF", "#FF6B6B"]
        },
        "shape": {
          "type": ["circle", "triangle", "polygon", "star"],
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 6
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.8,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "rgba(255, 255, 255, 0.3)",
          "opacity": 0.3,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 180,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 200,
            "size": 8,
            "duration": 2,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 150,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 6
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  // Add interactive tilt effect to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xRotation = ((y - rect.height / 2) / rect.height) * 8;
      const yRotation = ((x - rect.width / 2) / rect.width) * -8;
      
      card.style.transform = `perspective(1000px) translateZ(20px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
    
    card.addEventListener('mouseout', () => {
      card.style.transform = 'perspective(1000px) translateZ(0) rotateX(0) rotateY(0)';
    });
  });

  // Add typewriter effect
  const typewriterTexts = document.querySelectorAll('.typewriter');
  typewriterTexts.forEach(text => {
    const content = text.textContent;
    text.textContent = '';
    text.style.opacity = '1';
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < content.length) {
        text.textContent += content.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
  });
  
  // ===== SCROLL REVEAL ANIMATIONS =====
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: false
    });
    
    // Reveal animations for different sections
    sr.reveal('.section-header', {
      distance: '40px',
      delay: 100
    });
    
    sr.reveal('.service-card', {
      interval: 100
    });
    
    sr.reveal('.portfolio-item', {
      interval: 100
    });
    
    sr.reveal('.testimonial-slide', {
      distance: '20px'
    });
    
    sr.reveal('.contact-info', {
      origin: 'left'
    });
    
    sr.reveal('.contact-form', {
      origin: 'right'
    });
  }
  
  // ===== GSAP ANIMATIONS =====
  if (typeof gsap !== 'undefined') {
    // Stagger animations for menu items
    gsap.from('nav ul li', {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      delay: 2.5,
      duration: 0.8,
      ease: "power2.out"
    });
    
    // Logo animation
    gsap.from('.logo', {
      opacity: 0,
      x: -50,
      delay: 2.3,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    });
    
    // Service cards hover effect
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.icon'), {
          y: -10,
          scale: 1.1,
          duration: 0.3,
          ease: "power1.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.icon'), {
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)"
        });
      });
    });
    
    // Animate countdown numbers
    gsap.to('.countdown-timer span', {
      scale: 1.2,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
      ease: "power1.inOut"
    });
  }