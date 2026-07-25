/* 宮古島紹介ページのJavaScript
   1. ヒーロー画像の自動切り替え
   2. スクロール時のヘッダー変化
   3. 要素のフェードイン
   4. Start Tourボタンのクリック演出
*/

(function () {
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

  if (slides.length > 1) {
    window.setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 5000);
  }

  const mast = document.getElementById("mast");
  const updateHeader = () => {
    mast.classList.toggle("solid", window.scrollY > window.innerHeight * 0.7);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    observer.observe(element);
  });

  const tourButton = document.getElementById("tourButton");
  const tourMessage = document.getElementById("tourMessage");

  tourButton.addEventListener("click", () => {
    tourButton.classList.add("clicked");
    tourMessage.textContent = "バーチャルツアーを開きます。";
    window.setTimeout(() => tourButton.classList.remove("clicked"), 300);
  });
})();
