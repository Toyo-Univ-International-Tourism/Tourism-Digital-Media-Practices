"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.getElementById("siteHeader");
  const menuButton = document.getElementById("menuButton");
  const globalNavigation = document.getElementById("globalNavigation");

  const tourModal = document.getElementById("tourModal");
  const modalCloseButton = document.getElementById("modalCloseButton");
  const tourModalTitle = document.getElementById("tourModalTitle");
  const tourModalDescription = document.getElementById(
    "tourModalDescription"
  );

  const demoStartButton = document.getElementById("demoStartButton");
  const toast = document.getElementById("toast");
  const currentYear = document.getElementById("currentYear");

  const openTourButtons = document.querySelectorAll("[data-open-tour]");
  const closeTourElements = document.querySelectorAll("[data-close-tour]");
  const navigationLinks = globalNavigation.querySelectorAll("a");
  const beachCards = document.querySelectorAll(".beach-card");
  const revealElements = document.querySelectorAll(".reveal");
  const virtualTourUrl =
    "https://viewtoly-mvp-462744124914.asia-northeast1.run.app/v/XBel1p_kL95a";

  let previouslyFocusedElement = null;
  let toastTimer = null;

  const beachDescriptions = {
    "与那覇前浜ビーチ":
      "与那覇前浜ビーチからツアーを開始する想定です。白い砂浜と宮古ブルーの海を360度映像で体験します。",

    "砂山ビーチ":
      "砂山ビーチからツアーを開始する想定です。砂山を越えた先に広がる海と自然の岩のアーチを体験します。",

    "新城海岸":
      "新城海岸からツアーを開始する想定です。透明度の高い浅瀬と穏やかな海の景観を体験します。"
  };

  function updateHeader() {
    if (window.scrollY > 30) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }

  function openMenu() {
    menuButton.classList.add("active");
    globalNavigation.classList.add("active");
    siteHeader.classList.add("menu-active");
    document.body.classList.add("menu-open");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "メニューを閉じる");
  }

  function closeMenu() {
    menuButton.classList.remove("active");
    globalNavigation.classList.remove("active");
    siteHeader.classList.remove("menu-active");
    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニューを開く");
  }

  function toggleMenu() {
    const isOpen = globalNavigation.classList.contains("active");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openTourModal(beachName = "") {
    previouslyFocusedElement = document.activeElement;

    if (beachName && beachDescriptions[beachName]) {
      tourModalTitle.textContent = `${beachName}からツアーを開始`;
      tourModalDescription.textContent = beachDescriptions[beachName];
    } else {
      tourModalTitle.textContent = "バーチャルツアーを開始";
      tourModalDescription.textContent =
        "ここから360度ビーチツアーが開始される想定です。このサンプルでは、実際の360度コンテンツは表示されません。";
    }

    tourModal.classList.add("active");
    tourModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    window.setTimeout(() => {
      modalCloseButton.focus();
    }, 100);
  }

  function closeTourModal() {
    tourModal.classList.remove("active");
    tourModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (
      previouslyFocusedElement &&
      typeof previouslyFocusedElement.focus === "function"
    ) {
      previouslyFocusedElement.focus();
    }
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("active");

    if (toastTimer) {
      window.clearTimeout(toastTimer);
    }

    toastTimer = window.setTimeout(() => {
      toast.classList.remove("active");
    }, 3500);
  }

  function handleModalKeyboard(event) {
    if (!tourModal.classList.contains("active")) {
      return;
    }

    if (event.key === "Escape") {
      closeTourModal();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = tourModal.querySelectorAll(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement =
      focusableElements[focusableElements.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === firstElement
    ) {
      event.preventDefault();
      lastElement.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === lastElement
    ) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  function setupScrollAnimation() {
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => {
        element.classList.add("visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px"
      }
    );

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 3, 2) * 0.12}s`;
      observer.observe(element);
    });
  }

  menuButton.addEventListener("click", toggleMenu);

  navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  openTourButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closeMenu();
      window.location.href = virtualTourUrl;
    });
  });

  closeTourElements.forEach((element) => {
    element.addEventListener("click", closeTourModal);
  });

  beachCards.forEach((card) => {
    const beachName = card.dataset.beach;

    card.addEventListener("click", () => {
      openTourModal(beachName);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openTourModal(beachName);
      }
    });
  });

  demoStartButton.addEventListener("click", () => {
    window.location.href = virtualTourUrl;
  });

  document.addEventListener("keydown", handleModalKeyboard);

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  });

  currentYear.textContent = new Date().getFullYear();

  updateHeader();
  setupScrollAnimation();
});
