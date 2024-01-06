// Implement lazy loading using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = document.querySelectorAll(".lazy-load");

  var options = {
    root: null, // use the viewport as the root
    rootMargin: "0px", // no margin
    threshold: 0.1, // trigger when 10% of the image is visible
  };

  var imageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy-load");
        imageObserver.unobserve(lazyImage);
      }
    });
  }, options);

  lazyImages.forEach(function (image) {
    imageObserver.observe(image);
  });
});
