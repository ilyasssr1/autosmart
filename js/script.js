/* =============================
   LOGIN/REGISTER FUNCTIONALITY
   ============================= */

document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  const tabIndicator = document.querySelector(".tab-indicator");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active");

      // Move tab indicator
      if (tabIndicator) {
        if (targetTab === "login") {
          tabIndicator.style.left = "6px";
        } else {
          tabIndicator.style.left = "calc(50% + 6px)";
        }
      }
    });
  });

  // Password toggle functionality
  const passwordToggles = document.querySelectorAll(".password-toggle");

  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const input = this.previousElementSibling;
      const icon = this.querySelector("i");

      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });
  });

  // Profile picture upload functionality
  const profilePictureInput = document.getElementById("profile-picture-input");
  const profilePicturePreview = document.getElementById(
    "profile-picture-preview"
  );
  const profilePictureImg = document.getElementById("profile-picture-img");

  if (profilePictureInput && profilePicturePreview) {
    profilePicturePreview.addEventListener("click", () => {
      profilePictureInput.click();
    });

    profilePictureInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          profilePictureImg.src = e.target.result;
          profilePictureImg.style.display = "block";
          profilePicturePreview.querySelector("i").style.display = "none";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Password requirements display
  const registerPassword = document.getElementById("register-password");
  const passwordRequirements = document.getElementById("password-requirements");
  const confirmPassword = document.getElementById("register-confirm-password");
  const confirmPasswordValidation = document.getElementById(
    "confirm-password-validation"
  );

  if (registerPassword && passwordRequirements) {
    registerPassword.addEventListener("focus", () => {
      passwordRequirements.classList.add("show");
    });

    registerPassword.addEventListener("blur", () => {
      // Keep requirements visible if password field has content
      if (registerPassword.value.length > 0) {
        passwordRequirements.classList.add("show");
      } else {
        passwordRequirements.classList.remove("show");
      }
    });

    // Password strength calculation
    registerPassword.addEventListener("input", function () {
      const password = this.value;
      const strengthBar = document.getElementById("password-strength-bar");

      // Calculate password strength
      let strength = 0;
      let requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      };

      // Update requirement indicators
      Object.keys(requirements).forEach((req) => {
        const reqElement = document.getElementById(`req-${req}`);
        if (reqElement) {
          const icon = reqElement.querySelector("i");
          if (requirements[req]) {
            reqElement.classList.add("valid");
            icon.className = "fas fa-check-circle";
          } else {
            reqElement.classList.remove("valid");
            icon.className = "fas fa-circle";
          }
        }
      });

      // Calculate strength score
      strength += requirements.length ? 20 : 0;
      strength += requirements.uppercase ? 20 : 0;
      strength += requirements.lowercase ? 20 : 0;
      strength += requirements.number ? 20 : 0;
      strength += requirements.special ? 20 : 0;

      // Update strength bar
      if (strengthBar) {
        strengthBar.style.setProperty("--strength-width", `${strength}%`);

        // Update strength bar color based on score
        if (strength <= 20) {
          strengthBar.style.setProperty("--strength-color", "var(--error)");
        } else if (strength <= 40) {
          strengthBar.style.setProperty("--strength-color", "var(--warning)");
        } else if (strength <= 60) {
          strengthBar.style.setProperty("--strength-color", "var(--accent)");
        } else if (strength <= 80) {
          strengthBar.style.setProperty("--strength-color", "var(--success)");
        } else {
          strengthBar.style.setProperty("--strength-color", "var(--primary)");
        }
      }

      // Check password match when password changes
      if (confirmPassword && confirmPassword.value.length > 0) {
        checkPasswordMatch();
      }
    });
  }

  // Password match validation
  if (confirmPassword && confirmPasswordValidation) {
    confirmPassword.addEventListener("input", checkPasswordMatch);
    confirmPassword.addEventListener("blur", checkPasswordMatch);
  }

  function checkPasswordMatch() {
    if (!registerPassword || !confirmPassword || !confirmPasswordValidation)
      return;

    const password = registerPassword.value;
    const confirmPass = confirmPassword.value;

    if (confirmPass.length === 0) {
      confirmPasswordValidation.textContent = "";
      confirmPasswordValidation.className = "validation-message";
      return;
    }

    if (password === confirmPass) {
      confirmPasswordValidation.textContent = "✓ Passwords match";
      confirmPasswordValidation.className = "validation-message valid";
      confirmPassword.style.borderColor = "var(--success)";
    } else {
      confirmPasswordValidation.textContent = "✗ Passwords do not match";
      confirmPasswordValidation.className = "validation-message error";
      confirmPassword.style.borderColor = "var(--error)";
    }
  }

  // Form animations and interactions
  const formGroups = document.querySelectorAll(".form-group");

  formGroups.forEach((group) => {
    const input = group.querySelector(".form-control");
    const label = group.querySelector("label");

    if (input && label) {
      // Add focus effects
      input.addEventListener("focus", () => {
        label.style.color = "var(--primary)";
        group.style.transform = "translateY(-2px)";
      });

      input.addEventListener("blur", () => {
        label.style.color = "var(--light)";
        group.style.transform = "translateY(0)";
      });
    }
  });

  // Social login button effects
  const socialButtons = document.querySelectorAll(".social-btn");

  socialButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.02)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Submit button loading state
  const submitButtons = document.querySelectorAll(".submit-btn");

  submitButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.type === "submit") {
        const originalText = this.querySelector("span").textContent;
        const originalIcon = this.querySelector("i").className;

        // Show loading state
        this.querySelector("span").textContent = "Processing...";
        this.querySelector("i").className = "fas fa-spinner fa-spin";
        this.disabled = true;

        // Simulate processing (remove this in production)
        setTimeout(() => {
          this.querySelector("span").textContent = originalText;
          this.querySelector("i").className = originalIcon;
          this.disabled = false;
        }, 2000);
      }
    });
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add floating animation to background shapes
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape, index) => {
    shape.style.animationDelay = `${index * 2}s`;
  });

  // Add parallax effect to floating elements
  const floatingIcons = document.querySelectorAll(".floating-icon");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    floatingIcons.forEach((icon, index) => {
      const speed = 0.5 + index * 0.1;
      icon.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
});

/* =============================
   NAVIGATION: TOGGLE & STICKY
   ============================= */

// Toggle du menu (ouvre/ferme la liste de liens)
document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".navLinks");
  const menuBar = document.querySelector("#menuBtn");

  if (menuBar && navBar) {
    menuBar.onclick = () => {
      navBar.classList.toggle("active");
    };
  }
});

// Header sticky après un certain scroll
window.onscroll = () => {
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 100);
  }
};

/* =============================
   SLIDERS (Swiper)
   ============================= */

// Slider principal (ex: homepage)
document.addEventListener("DOMContentLoaded", function () {
  const swiperElement = document.querySelector(".myHomy");
  if (swiperElement) {
    var swiper = new Swiper(".myHomy", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});

/* =============================
   COMPTEUR ANIMÉ
   ============================= */

document.addEventListener("DOMContentLoaded", function () {
  const valueDisplays = document.querySelectorAll(".num");
  const interval = 1000;

  valueDisplays.forEach((valueDisplay) => {
    if (valueDisplay) {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-value")) || 0;
      let duration = Math.floor(interval / endValue);

      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    }
  });
});

/* =============================
   SLIDER AVIS / CLIENTS (Swiper)
   ============================= */

document.addEventListener("DOMContentLoaded", function () {
  const swiperElement = document.querySelector(".myClient");
  if (swiperElement) {
    var swiper = new Swiper(".myClient", {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
  }
});

/* =============================
   ICÔNES ÉQUIPE: EFFET BOUNCE AU SURVOL
   ============================= */

document.addEventListener("DOMContentLoaded", function () {
  const teamMembers = document.querySelectorAll(".col-t");

  teamMembers.forEach((member) => {
    if (member) {
      const icons = member.querySelectorAll(".icon i");

      member.addEventListener("mouseenter", () => {
        icons.forEach((icon, idx) => {
          icon.style.transform = "translateY(-10px)";
          setTimeout(() => {
            icon.style.transform = "translateY(0)";
          }, 150 + idx * 100); // rebond échelonné
        });
      });
    }
  });
});

/* =============================
   CALCULATRICE DE CRÉDIT AUTO
   ============================= */

document.addEventListener("DOMContentLoaded", function () {
  const priceInput = document.getElementById("price");
  const rateInput = document.getElementById("rate");
  const periodInput = document.getElementById("period");
  const downPaymentInput = document.getElementById("downPayment");
  const calculateBtn = document.getElementById("calculateBtn");
  const resultBox = document.getElementById("resultBox");
  const monthlyPaymentEl = document.getElementById("monthlyPayment");
  const totalInterestEl = document.getElementById("totalInterest");
  const totalPaymentEl = document.getElementById("totalPayment");
  const appliedRateEl = document.getElementById("appliedRate");

  if (
    priceInput &&
    rateInput &&
    periodInput &&
    downPaymentInput &&
    calculateBtn &&
    resultBox &&
    monthlyPaymentEl &&
    totalInterestEl &&
    totalPaymentEl &&
    appliedRateEl
  ) {
    // Calcul automatique du taux en fonction du prix saisi
    priceInput.addEventListener("input", calculateInterestRate);

    // Lance le calcul lorsqu'on clique sur le bouton
    calculateBtn.addEventListener("click", calculateLoan);

    function calculateInterestRate() {
      const price = parseFloat(priceInput.value) || 0;
      let rate = 0;

      if (price < 10000) {
        rate = 3;
      } else if (price >= 10000 && price <= 30000) {
        rate = 5;
      } else {
        rate = 7;
      }

      rateInput.value = rate;
    }

    function calculateLoan() {
      const price = parseFloat(priceInput.value) || 0;
      const downPayment = parseFloat(downPaymentInput.value) || 0;
      const period = parseFloat(periodInput.value) || 1;

      if (price <= 0 || period <= 0) {
        alert("Please enter valid price and loan period values");
        return;
      }

      // Déterminer le taux selon le prix
      calculateInterestRate();
      const rate = parseFloat(rateInput.value) / 100; // conversion en décimal

      // Montant emprunté
      const loanAmount = price - downPayment;

      if (loanAmount <= 0) {
        alert("Down payment cannot be greater than or equal to the price");
        return;
      }

      // Formule mensualité: P = (r*PV) / (1 - (1 + r)^(-n))
      const monthlyRate = rate / 12;
      const monthlyPayment =
        (monthlyRate * loanAmount) / (1 - Math.pow(1 + monthlyRate, -period));

      // Totaux
      const totalPayment = monthlyPayment * period;
      const totalInterest = totalPayment - loanAmount;

      // Affichage
      monthlyPaymentEl.textContent = `$${monthlyPayment.toFixed(2)}`;
      totalInterestEl.textContent = `$${totalInterest.toFixed(2)}`;
      totalPaymentEl.textContent = `$${totalPayment.toFixed(2)}`;
      appliedRateEl.textContent = `${rate * 100}%`;

      // Révèle le bloc de résultats
      resultBox.style.display = "block";
    }
  }
});

/* =============================
   CATALOGUE: DONNÉES DÉMO
   ============================= */

const cars = [
  {
    id: 1,
    name: "Dacia Duster 1.5 dCi",
    year: 2020,
    price: 165000,
    km: "45,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Casablanca",
    condition: "Très bon état",
    img: "/img/buy/aut1.png",
  },
  {
    id: 2,
    name: "Renault Clio 4 1.5 dCi",
    year: 2019,
    price: 125000,
    km: "62,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Rabat",
    condition: "Très bon état",
    img: "/img/buy/aut2.png",
  },
  {
    id: 3,
    name: "Peugeot 208 1.6 BlueHDi",
    year: 2018,
    price: 110000,
    km: "78,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Fès",
    condition: "Bon état",
    img: "/img/buy/aut3.png",
  },
  {
    id: 4,
    name: "Hyundai Tucson 2.0 CRDi",
    year: 2017,
    price: 185000,
    km: "95,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Marrakech",
    condition: "Très bon état",
    img: "/img/buy/aut4.png",
  },
  {
    id: 5,
    name: "Kia Sportage 1.7 CRDi",
    year: 2018,
    price: 175000,
    km: "88,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Agadir",
    condition: "Très bon état",
    img: "/img/buy/aut5.png",
  },
  {
    id: 6,
    name: "Toyota Corolla 1.6",
    year: 2019,
    price: 190000,
    km: "70,000",
    gear: "Automatique",
    fuel: "Essence",
    location: "Tanger",
    condition: "Excellent",
    img: "/img/buy/aut6.png",
  },
  {
    id: 7,
    name: "Volkswagen Golf 7 2.0 TDI",
    year: 2017,
    price: 165000,
    km: "110,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Kénitra",
    condition: "Bon état",
    img: "/img/buy/aut7.png",
  },
  {
    id: 8,
    name: "Mercedes C200d",
    year: 2016,
    price: 235000,
    km: "120,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Casablanca",
    condition: "Très bon état",
    img: "/img/buy/aut8.png",
  },
  {
    id: 9,
    name: "BMW 320d",
    year: 2015,
    price: 210000,
    km: "150,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Rabat",
    condition: "Bon état",
    img: "/img/buy/aut9.png",
  },
  {
    id: 10,
    name: "Dacia Logan 1.5 dCi",
    year: 2019,
    price: 105000,
    km: "60,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Settat",
    condition: "Très bon état",
    img: "/img/buy/aut10.png",
  },
  {
    id: 11,
    name: "Audi A3 1.6 TDI",
    year: 2016,
    price: 160000,
    km: "130,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Oujda",
    condition: "Bon état",
    img: "/img/buy/aut11.png",
  },
  {
    id: 12,
    name: "Peugeot 3008 1.5 BlueHDi",
    year: 2020,
    price: 260000,
    km: "55,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Casablanca",
    condition: "Excellent",
    img: "/img/buy/aut12.png",
  },
  {
    id: 13,
    name: "Skoda Octavia 2.0 TDI",
    year: 2018,
    price: 175000,
    km: "120,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Meknès",
    condition: "Très bon état",
    img: "/img/buy/aut13.png",
  },
  {
    id: 14,
    name: "Honda Civic 1.5 Turbo",
    year: 2019,
    price: 215000,
    km: "68,000",
    gear: "Automatique",
    fuel: "Essence",
    location: "Tanger",
    condition: "Excellent",
    img: "/img/buy/aut14.png",
  },
  {
    id: 15,
    name: "Ford Focus 1.5 TDCi",
    year: 2017,
    price: 120000,
    km: "140,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Tetouan",
    condition: "Bon état",
    img: "/img/buy/aut15.png",
  },
  {
    id: 16,
    name: "Citroën C-Elysée 1.6 HDi",
    year: 2018,
    price: 105000,
    km: "125,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Oujda",
    condition: "Très bon état",
    img: "/img/buy/aut16.png",
  },
  {
    id: 17,
    name: "Toyota Yaris 1.3",
    year: 2016,
    price: 115000,
    km: "155,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "Fès",
    condition: "Bon état",
    img: "/img/buy/aut17.png",
  },
  {
    id: 18,
    name: "Range Rover Evoque 2.2 SD4",
    year: 2016,
    price: 330000,
    km: "130,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Casablanca",
    condition: "Très bon état",
    img: "/img/buy/aut18.png",
  },
  {
    id: 19,
    name: "Hyundai i10 1.2",
    year: 2019,
    price: 98000,
    km: "60,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "Agadir",
    condition: "Très bon état",
    img: "/img/buy/aut19.png",
  },
  {
    id: 20,
    name: "Renault Megane 1.5 dCi",
    year: 2017,
    price: 135000,
    km: "135,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Rabat",
    condition: "Bon état",
    img: "/img/buy/aut20.png",
  },
  {
    id: 21,
    name: "BMW X3 20d",
    year: 2015,
    price: 270000,
    km: "175,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Marrakech",
    condition: "Bon état",
    img: "/img/buy/aut21.png",
  },
  {
    id: 22,
    name: "Volkswagen Polo 1.6",
    year: 2018,
    price: 125000,
    km: "100,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "Casablanca",
    condition: "Très bon état",
    img: "/img/buy/aut22.png",
  },
  {
    id: 23,
    name: "Nissan Qashqai 1.5 dCi",
    year: 2017,
    price: 165000,
    km: "130,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Salé",
    condition: "Bon état",
    img: "/img/buy/aut23.png",
  },
  {
    id: 24,
    name: "Seat Leon 2.0 TDI",
    year: 2018,
    price: 180000,
    km: "115,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Mohammedia",
    condition: "Très bon état",
    img: "/img/buy/aut24.png",
  },
  {
    id: 25,
    name: "Renault Captur 1.5 dCi",
    year: 2019,
    price: 165000,
    km: "75,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Marrakech",
    condition: "Très bon état",
    img: "/img/buy/aut25.png",
  },
  {
    id: 26,
    name: "Peugeot 301 1.6 HDi",
    year: 2017,
    price: 98000,
    km: "165,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Casablanca",
    condition: "Bon état",
    img: "/img/buy/aut26.png",
  },
  {
    id: 27,
    name: "Dacia Sandero 1.5 dCi",
    year: 2020,
    price: 120000,
    km: "58,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "El Jadida",
    condition: "Très bon état",
    img: "/img/buy/aut27.png",
  },
  {
    id: 28,
    name: "Toyota CH-R Hybrid",
    year: 2019,
    price: 295000,
    km: "72,000",
    gear: "Automatique",
    fuel: "Hybride",
    location: "Rabat",
    condition: "Excellent",
    img: "/img/buy/aut28.png",
  },
  {
    id: 29,
    name: "Kia Picanto 1.2",
    year: 2018,
    price: 98000,
    km: "90,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "Fès",
    condition: "Bon état",
    img: "/img/buy/aut29.png",
  },
  {
    id: 31,
    name: "BMW X1 2.0d",
    year: 2018,
    price: 285000,
    km: "95,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Rabat",
    condition: "Très bon état",
    img: "/img/buy/aut31.png",
  },
  {
    id: 32,
    name: "Audi A3 2.0 TDI",
    year: 2019,
    price: 320000,
    km: "68,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Casablanca",
    condition: "Excellent",
    img: "/img/buy/aut32.png",
  },
  {
    id: 33,
    name: "Ford Focus 1.6 TDCi",
    year: 2016,
    price: 135000,
    km: "180,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Tanger",
    condition: "Bon état",
    img: "/img/buy/aut33.png",
  },
  {
    id: 34,
    name: "Opel Corsa 1.4",
    year: 2017,
    price: 135000,
    km: "145,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "Agadir",
    condition: "Bon état",
    img: "/img/buy/aut34.png",
  },
  {
    id: 35,
    name: "Skoda Octavia 2.0 TDI",
    year: 2018,
    price: 195000,
    km: "110,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Fès",
    condition: "Très bon état",
    img: "/img/buy/aut35.png",
  },
  {
    id: 36,
    name: "Hyundai i20 1.4",
    year: 2019,
    price: 125000,
    km: "85,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "Marrakech",
    condition: "Très bon état",
    img: "/img/buy/aut36.png",
  },
  {
    id: 37,
    name: "Kia Rio 1.2",
    year: 2018,
    price: 115000,
    km: "95,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "Casablanca",
    condition: "Bon état",
    img: "/img/buy/aut37.png",
  },
  {
    id: 38,
    name: "Renault Clio 1.5 dCi",
    year: 2017,
    price: 105000,
    km: "155,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Salé",
    condition: "Bon état",
    img: "/img/buy/aut38.png",
  },
  {
    id: 39,
    name: "Peugeot 208 1.2 PureTech",
    year: 2019,
    price: 140000,
    km: "72,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "Rabat",
    condition: "Très bon état",
    img: "/img/buy/aut39.png",
  },
  {
    id: 40,
    name: "Citroën C3 1.6 HDi",
    year: 2016,
    price: 95000,
    km: "175,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Mohammedia",
    condition: "Bon état",
    img: "/img/buy/aut40.png",
  },
  {
    id: 41,
    name: "Volkswagen Golf 2.0 TDI",
    year: 2018,
    price: 220000,
    km: "105,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Casablanca",
    condition: "Très bon état",
    img: "/img/buy/aut41.png",
  },
  {
    id: 42,
    name: "Seat Ibiza 1.0 TSI",
    year: 2019,
    price: 135000,
    km: "68,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "Tanger",
    condition: "Très bon état",
    img: "/img/buy/aut42.png",
  },
  {
    id: 43,
    name: "Nissan Micra 1.2",
    year: 2017,
    price: 98000,
    km: "125,000",
    gear: "Manuelle",
    fuel: "Essence",
    location: "El Jadida",
    condition: "Bon état",
    img: "/img/buy/aut43.png",
  },
  {
    id: 44,
    name: "Toyota Yaris 1.5 Hybrid",
    year: 2020,
    price: 185000,
    km: "45,000",
    gear: "Automatique",
    fuel: "Hybride",
    location: "Marrakech",
    condition: "Excellent",
    img: "/img/buy/aut44.png",
  },
  {
    id: 45,
    name: "Honda Civic 1.6 i-DTEC",
    year: 2018,
    price: 195000,
    km: "115,000",
    gear: "Manuelle",
    fuel: "Diesel",
    location: "Fès",
    condition: "Très bon état",
    img: "/img/buy/aut45.png",
  },
  {
    id: 46,
    name: "Mazda CX-5 2.2 Skyactiv-D",
    year: 2017,
    price: 245000,
    km: "135,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Agadir",
    condition: "Très bon état",
    img: "/img/buy/aut46.png",
  },
  {
    id: 47,
    name: "Subaru Forester 2.0",
    year: 2016,
    price: 185000,
    km: "165,000",
    gear: "Automatique",
    fuel: "Essence",
    location: "Agadir",
    condition: "Bon état",
    img: "/img/buy/aut47.png",
  },
  {
    id: 48,
    name: "Lexus CT 200h",
    year: 2018,
    price: 275000,
    km: "88,000",
    gear: "Automatique",
    fuel: "Hybride",
    location: "Rabat",
    condition: "Excellent",
    img: "/img/buy/aut48.png",
  },
  {
    id: 49,
    name: "Infiniti Q30 2.2d",
    year: 2017,
    price: 225000,
    km: "125,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Tanger",
    condition: "Très bon état",
    img: "/img/buy/aut49.png",
  },
  {
    id: 50,
    name: "Range Rover Evoque 2.2",
    year: 2016,
    price: 385000,
    km: "145,000",
    gear: "Automatique",
    fuel: "Diesel",
    location: "Casablanca",
    condition: "Très bon état",
    img: "/img/buy/aut50.png",
  },
];

/* =============================
   PANIER & PAGINATION
   ============================= */

document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.getElementById("cart-button");
  const cartDropdown = document.getElementById("cart-dropdown");
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const cartClear = document.getElementById("cart-clear");
  const carGrid = document.getElementById("car-grid");
  const pagination = document.getElementById("pagination");
  const search = document.getElementById("search");
  const sort = document.getElementById("sort");

  let cart = [];
  let currentPage = 1;
  const itemsPerPage = 8;

  // Ouvre/ferme le dropdown panier
  if (cartButton && cartDropdown) {
    cartButton.addEventListener("click", (e) => {
      e.stopPropagation();
      cartDropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!cartButton.contains(e.target) && !cartDropdown.contains(e.target)) {
        cartDropdown.classList.remove("open");
      }
    });
  }

  // Vider le panier
  if (cartClear) {
    cartClear.addEventListener("click", () => {
      cart = [];
      updateCart();
    });
  }

  // Ajout d'un véhicule au panier
  function addToCart(car) {
    const existing = cart.find((item) => item.id === car.id);
    if (existing) existing.quantity++;
    else cart.push({ id: car.id, img: car.img, quantity: 1 });

    // Animation compteur
    if (cartCount) {
      cartCount.classList.remove("bump");
      void cartCount.offsetWidth; // reflow pour relancer l'anim
      cartCount.classList.add("bump");
    }

    updateCart();
    showNotification(`${car.name} added!`);
  }

  // Mise à jour du panier
  function updateCart() {
    if (cartCount) {
      cartCount.textContent = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    }

    if (cartItems) {
      if (!cart.length) {
        cartItems.innerHTML =
          '<div class="empty-cart-message">Cart is empty</div>';
      } else {
        cartItems.innerHTML = cart
          .map(
            (item) => `
            <div class="cart-item">
              <img src="${item.img}">
              <div class="ci-count">${item.quantity}</div>
            </div>`
          )
          .join("");
      }
    }

    if (cartTotal) {
      const total = cart.reduce((sum, item) => {
        const car = cars.find((c) => c.id === item.id);
        return sum + car.price * item.quantity;
      }, 0);

      cartTotal.textContent = `${total.toLocaleString("fr-MA")} MAD`;
    }
  }

  // Mini notification visuelle
  function showNotification(msg) {
    const notif = document.createElement("div");
    notif.textContent = msg;
    notif.style.cssText = `position:fixed;bottom:20px;right:20px;background:var(--main-color);color:#fff;padding:12px 20px;border-radius:8px;opacity:0;transition:0.3s;z-index:9999;`;
    document.body.appendChild(notif);
    setTimeout(() => (notif.style.opacity = "1"), 10);
    setTimeout(() => {
      notif.style.opacity = "0";
      setTimeout(() => document.body.removeChild(notif), 300);
    }, 3000);
  }

  // Rendu des cartes véhicules
  function renderCars(list) {
    if (carGrid) {
      carGrid.innerHTML = "";
      list.forEach((car) => {
        const card = document.createElement("article");
        card.className = "car-card";
        card.innerHTML = `
          <div class="card-media">
            <img src="${car.img}" alt="${car.name}">
            <span class="chip">New</span>
          </div>
          <div class="card-body">
            <h3>${car.name}</h3>
            <div class="meta-badges">
              <span class="badge badge-year">${car.year}</span>
              <span class="badge badge-km">${car.km} km</span>
              <span class="badge badge-gear">${car.gear}</span>
              ${
                car.fuel
                  ? `<span class="badge badge-fuel">${car.fuel}</span>`
                  : ""
              }
            </div>
            <div class="meta-badges">
              ${
                car.location
                  ? `<span class="badge badge-location"><i class="bx bx-map"></i> ${car.location}</span>`
                  : ""
              }
              ${
                car.condition
                  ? `<span class="badge badge-condition">${car.condition}</span>`
                  : ""
              }
            </div>
            <div class="card-foot">
              <div class="price">${car.price.toLocaleString("fr-MA")} MAD</div>
              <button class="btn add" data-id="${car.id}">Add</button>
            </div>
          </div>`;

        // Attache l'action "Add"
        const addButton = card.querySelector(".add");
        if (addButton) {
          addButton.addEventListener("click", () => addToCart(car));
        }
        carGrid.appendChild(card);
      });
    }
  }

  // Pagination: rendu des numéros de page
  function renderPagination(totalItems) {
    if (pagination) {
      const pages = Math.ceil(totalItems / itemsPerPage);
      pagination.innerHTML = "";
      for (let i = 1; i <= pages; i++) {
        const span = document.createElement("span");
        span.className = "pg" + (i === currentPage ? " active" : "");
        span.textContent = i;
        span.addEventListener("click", () => goToPage(i));
        pagination.appendChild(span);
      }
    }
  }

  function goToPage(page) {
    currentPage = page;
    applyFilters();
  }

  // Recherche / tri / pagination
  function applyFilters() {
    let filtered = [...cars];

    if (search && search.value) {
      const query = search.value.toLowerCase();
      filtered = filtered.filter((c) => c.name.toLowerCase().includes(query));
    }

    if (sort && sort.value) {
      const sortValue = sort.value;
      if (sortValue === "price") filtered.sort((a, b) => a.price - b.price);
      if (sortValue === "price_desc")
        filtered.sort((a, b) => b.price - a.price);
      if (sortValue === "year") filtered.sort((a, b) => b.year - a.year);
      if (sortValue === "name")
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    const start = (currentPage - 1) * itemsPerPage;
    renderCars(filtered.slice(start, start + itemsPerPage));
    renderPagination(filtered.length);
  }

  // Écouteurs: recherche & tri
  if (search) {
    search.addEventListener("input", () => {
      currentPage = 1;
      applyFilters();
    });
  }

  if (sort) {
    sort.addEventListener("change", applyFilters);
  }

  // Initialisation
  applyFilters();
});

/* =============================
   PAGE "SELL CAR" — SUGGESTIONS MARQUES & UPLOAD IMAGES
   ============================= */

document.addEventListener("DOMContentLoaded", function () {
  const carBrands = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Lexus",
    "Lotus",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "Mini",
    "Mitsubishi",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  const brandInput = document.getElementById("brand");
  const suggestionsList = document.getElementById("brandSuggestions");
  const otherBrandContainer = document.getElementById("otherBrandContainer");
  const otherBrandInput = document.getElementById("otherBrand");
  const sellForm = document.getElementById("sellForm");
  const input = document.getElementById("carImages");
  const preview = document.getElementById("preview");

  if (brandInput && suggestionsList && otherBrandContainer && otherBrandInput) {
    // Affiche/filtre les suggestions de marque au fur et à mesure de la saisie
    brandInput.addEventListener("input", function () {
      const value = this.value.toLowerCase();
      suggestionsList.innerHTML = "";

      if (value.length > 1) {
        const filteredBrands = carBrands.filter((brand) =>
          brand.toLowerCase().includes(value)
        );

        if (filteredBrands.length > 0) {
          suggestionsList.style.display = "block";

          filteredBrands.forEach((brand) => {
            const item = document.createElement("div");
            item.className = "suggestion-item";
            item.textContent = brand;
            item.addEventListener("click", () => {
              brandInput.value = brand;
              suggestionsList.style.display = "none";
              otherBrandContainer.style.display = "none";
            });
            suggestionsList.appendChild(item);
          });

          // Option "Autre marque"
          const otherItem = document.createElement("div");
          otherItem.className = "suggestion-item";
          otherItem.innerHTML = '<i class="fas fa-plus"></i> Autre marque...';
          otherItem.addEventListener("click", () => {
            suggestionsList.style.display = "none";
            otherBrandContainer.style.display = "block";
          });
          suggestionsList.appendChild(otherItem);
        } else {
          suggestionsList.style.display = "none";
          otherBrandContainer.style.display = "block";
        }
      } else {
        suggestionsList.style.display = "none";
        otherBrandContainer.style.display = "none";
      }
    });

    // Masque la liste si on clique ailleurs
    document.addEventListener("click", function (e) {
      if (
        !brandInput.contains(e.target) &&
        !suggestionsList.contains(e.target)
      ) {
        suggestionsList.style.display = "none";
      }
    });
  }

  // Prévisualisation des images uploadées (ajout cumulatif)
  if (input && preview) {
    input.addEventListener("change", () => {
      const files = Array.from(input.files);

      if (files.length === 0) return;

      // Limite à 5 photos (optionnel, supprimez si non désiré)
      const currentCount = preview.querySelectorAll(".preview-item").length;
      if (currentCount + files.length > 5) {
        alert("Vous ne pouvez ajouter que 5 photos maximum.");
        return;
      }

      files.forEach((file) => {
        // Valide le type MIME (image)
        if (!file.type.match("image.*")) {
          alert("Veuillez sélectionner uniquement des images");
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          const previewItem = document.createElement("div");
          previewItem.className = "preview-item preview-item-3d";

          const img = document.createElement("img");
          img.src = e.target.result;
          img.style.maxWidth = "150px"; // Ajustez la taille si nécessaire
          img.style.height = "auto";

          const removeBtn = document.createElement("div");
          removeBtn.className = "remove-btn";
          removeBtn.innerHTML = "×";
          removeBtn.addEventListener("click", () => {
            previewItem.remove();
          });

          previewItem.appendChild(img);
          previewItem.appendChild(removeBtn);
          preview.appendChild(previewItem);
        };
        reader.readAsDataURL(file);
      });
    });
  }

  // Formulaire de vente: empêcher le rechargement & générer l'aperçu
  if (sellForm) {
    sellForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validation basique des champs requis
      let isValid = true;
      const requiredFields = this.querySelectorAll("[required]");

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          field.classList.add("invalid");
          isValid = false;

          setTimeout(() => {
            field.classList.remove("invalid");
          }, 500);
        }
      });

      // Vérifie qu'au moins une image est présente
      const imageCount = preview
        ? preview.querySelectorAll(".preview-item").length
        : 0;
      if (imageCount === 0) {
        alert("Veuillez ajouter au moins une image de votre véhicule");
        isValid = false;
      }

      if (!isValid) return;

      // Valeur finale de la marque (liste ou champ "autre")
      const finalBrand =
        otherBrandContainer &&
        otherBrandContainer.style.display === "block" &&
        otherBrandInput
          ? otherBrandInput.value
          : brandInput
          ? brandInput.value
          : "";

      // Remplir l'aperçu
      if (document.getElementById("previewBrand")) {
        document.getElementById("previewBrand").textContent = finalBrand;
      }
      if (document.getElementById("previewModel")) {
        document.getElementById("previewModel").textContent =
          document.getElementById("model").value;
      }
      if (document.getElementById("previewYear")) {
        document.getElementById("previewYear").textContent =
          document.getElementById("year").value;
      }
      if (document.getElementById("previewMileage")) {
        document.getElementById("previewMileage").textContent =
          new Intl.NumberFormat("fr-FR").format(
            document.getElementById("mileage").value
          ) + " km";
      }
      if (document.getElementById("previewFuel")) {
        document.getElementById("previewFuel").textContent =
          document.getElementById("fuel").value;
      }
      if (document.getElementById("previewPrice")) {
        document.getElementById("previewPrice").textContent =
          new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(document.getElementById("price").value);
      }

      // Gestion des images dans l'aperçu
      const previewImages = preview
        ? preview.querySelectorAll(".preview-item img")
        : [];
      if (
        document.getElementById("previewMainImage") &&
        previewImages.length > 0
      ) {
        document.getElementById("previewMainImage").src = previewImages[0].src; // Première image comme principale
      }

      // Ajout d'une galerie pour les autres images
      const galleryContainer = document.getElementById("previewGallery");
      if (galleryContainer && previewImages.length > 1) {
        galleryContainer.innerHTML = ""; // Vider la galerie
        previewImages.forEach((img, index) => {
          if (index > 0) {
            // Ignorer la première image (déjà utilisée comme principale)
            const galleryItem = document.createElement("img");
            galleryItem.src = img.src;
            galleryItem.style.width = "100px"; // Ajustez la taille
            galleryItem.style.margin = "5px";
            galleryContainer.appendChild(galleryItem);
          }
        });
      }

      // Détails de confirmation
      const successDetails = document.getElementById("successDetails");
      if (successDetails) {
        successDetails.innerHTML = `
          <p><strong>Référence:</strong> AS-${Math.floor(
            10000 + Math.random() * 90000
          )}</p>
          <p><strong>Marque:</strong> ${finalBrand}</p>
          <p><strong>Modèle:</strong> ${
            document.getElementById("model").value
          }</p>
          <p><strong>Prix:</strong> ${new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(document.getElementById("price").value)}</p>
          <p><strong>Statut:</strong> En attente de validation</p>
          <p style="margin-top: 10px; font-style: italic;">Vous recevrez un email de confirmation sous peu.</p>
        `;
      }

      // Affiche le message de succès + l'aperçu
      const successMsg = document.getElementById("successMsg");
      const carPreview = document.getElementById("carPreview");
      if (successMsg) successMsg.style.display = "block";
      if (carPreview) carPreview.style.display = "block";

      // Confettis 🎉
      createConfetti();

      // Scroll jusqu'au message
      setTimeout(() => {
        if (successMsg) {
          successMsg.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    });
  }
});

/* =============================
   CONFETTIS (ANIMATION VISUELLE)
   ============================= */

function createConfetti() {
  const colors = ["#d32f2f", "#000000", "#006bb4", "#28a745"];
  const container = document.body;

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = 5 + Math.random() * 10 + "px";
    confetti.style.height = 5 + Math.random() * 10 + "px";
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";

    container.appendChild(confetti);

    const animation = confetti.animate(
      [
        { transform: "translateY(0) rotate(0)", opacity: 1 },
        {
          transform: `translateY(-${100 + Math.random() * 200}vh) rotate(${
            720 + Math.random() * 360
          }deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 2000 + Math.random() * 3000,
        easing: "cubic-bezier(0.1, 0.8, 0.3, 1)",
      }
    );

    animation.onfinish = () => {
      confetti.remove();
    };
  }
}

/* =============================
   APPARITION PROGRESSIVE DES CHAMPS
   ============================= */

document.addEventListener("DOMContentLoaded", function () {
  const formGroups = document.querySelectorAll(".form-group");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  formGroups.forEach((group, index) => {
    if (group) {
      group.style.opacity = 0;
      group.style.transform = "translateY(20px)";
      group.style.transition = `opacity 0.5s ease ${
        index * 0.1
      }s, transform 0.5s ease ${index * 0.1}s`;
      observer.observe(group);
    }
  });
});

// FAQ toggle
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});
