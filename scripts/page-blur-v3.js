const blurLinks = document.querySelectorAll(".blur-if-hover");
const pageContent = document.querySelector("main");
const html = document.querySelector("html");

let scrollbarWidthPx = window.innerWidth - document.body.clientWidth;
let scrollbarSideMargin = 0;

calculateScrollbarWidth();

blurLinks.forEach((link) => {
  link.addEventListener("mouseover", function () {
    pageContent.style.filter = "blur(5px)"; // Adjust the blur intensity as needed
    
    // Disable body scrolling
    

    $("html").css({
      overflow: "hidden",
      [scrollbarSideMargin === 0 ? 'marginRight' : 'marginLeft']: `${scrollbarSideMargin + scrollbarWidthPx}px`,
    });

    $(".header-contact-info, .top-categories .top-category-list").css({
      [scrollbarSideMargin === 0 ? 'marginRight' : 'marginLeft']: `${scrollbarSideMargin + scrollbarWidthPx}px`,
    });

    $("nav").css({ [scrollbarSideMargin === 0 ? 'paddingRight' : 'paddingLeft']: `${scrollbarSideMargin + scrollbarWidthPx}px` });
  });
});

blurLinks.forEach((link) => {
  link.addEventListener("mouseout", function () {
    pageContent.style.filter = "none"; // Remove the blur on mouse out
    
    // Enable scrolling again
    $("html").css({
      overflow: '',
      [scrollbarSideMargin === 0 ? 'marginRight' : 'marginLeft']: '',
    });

    $(".header-contact-info, .top-categories .top-category-list").css({
      [scrollbarSideMargin === 0 ? 'marginRight' : 'marginLeft']: '',
    });

    $("nav").css({ [scrollbarSideMargin === 0 ? 'paddingRight' : 'paddingLeft']: '' });
  });
});


function calculateScrollbarWidth() {
  if (window.getComputedStyle) {
    let bodyStyle = window.getComputedStyle(document.body);
    if (bodyStyle) {
      scrollbarSideMargin = parseInt(bodyStyle.direction === 'rtl' ? bodyStyle.marginLeft : bodyStyle.marginRight, 10);
    }
  }
}