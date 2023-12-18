const blurLinks = document.querySelectorAll(".blur-if-hover");
const pageContent = document.querySelector("main");

blurLinks.forEach((link) => {
  link.addEventListener("mouseover", function () {
    pageContent.style.filter = "blur(5px)"; // Adjust the blur intensity as needed
  });
});

blurLinks.forEach((link) => {
  link.addEventListener("mouseout", function () {
    pageContent.style.filter = "none"; // Remove the blur on mouse out
  });
});
