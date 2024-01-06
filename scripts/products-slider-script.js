const productsSwiper = (swiperClass, data, options) => {
  // Create the wrapper div
  const wrapper = document.createElement("div");
  wrapper.classList.add("swiper-wrapper");

  // Create and append items to slide div
  data.forEach((item) => {
    // Create swiper-slide for each item
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    const slideProductBox = document.createElement("div");
    slideProductBox.classList.add("product-slide-box");

    const likeBtn = document.createElement("div");
    likeBtn.classList.add("like-btn");

    const likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-regular");
    likeIcon.classList.add("fa-heart");

    likeBtn.appendChild(likeIcon);

    const slideImage = document.createElement("div");
    slideImage.classList.add("product-slide-img");

    const productImage = document.createElement("img");
    productImage.classList.add('lazy-load');
    productImage.alt = item.name;
    productImage.setAttribute('data-src', item.imgUrl);

    slideImage.appendChild(productImage);

    const slideProductDetailBox = document.createElement("div");
    slideProductDetailBox.classList.add("product-detail-box");

    const productType = document.createElement("div");
    productType.classList.add("product-type");

    const productName = document.createElement("a");
    productName.href = "#";
    productName.textContent = item.name;

    const productCategory = document.createElement("span");
    productCategory.textContent = item.category;

    productType.appendChild(productName);
    productType.appendChild(productCategory);

    const productPrice = document.createElement("a");
    productPrice.classList.add("product-price");
    productPrice.href = "#";
    productPrice.textContent = `$${item.price}`;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Sepete Ekle";
    addToCartBtn.classList.add("add-to-cart-btn");
    addToCartBtn.classList.add("btn");
    addToCartBtn.classList.add("btn-smooth");

    
    slideProductDetailBox.appendChild(productType);
    slideProductDetailBox.appendChild(productPrice);
    
    slideProductBox.appendChild(likeBtn);
    slideProductBox.appendChild(slideImage);
    slideProductBox.appendChild(slideProductDetailBox);
    slideProductBox.appendChild(addToCartBtn);

    slide.appendChild(slideProductBox);

    wrapper.appendChild(slide);
  });

  // Create pagination buttons
  const swiperNextBtn = document.createElement("div");
  swiperNextBtn.classList.add("swiper-button-next");

  const swiperPrevBtn = document.createElement("div");
  swiperPrevBtn.classList.add("swiper-button-prev");

  // Add pagination buttons and wrapper to container
  const container = document.querySelector(swiperClass);

  container.appendChild(wrapper);
  container.appendChild(swiperNextBtn);
  container.appendChild(swiperPrevBtn);

  return new Swiper(swiperClass, options);
};

const popularData = [
  {
    id: 1,
    imgUrl:
      "https://ideacdn.net/idea/cq/36/myassets/products/007/dji-bs65-akilli-sarj-istasyonu-1_min.jpg?revision=1697143329",
    name: "DJI BS65 Akıllı Şarj İstasyonu",
    category: "DJI Ürünleri",
    description: "",
    price: 25
  },
  {
    id: 2,
    imgUrl:
      "https://ideacdn.net/idea/cq/36/myassets/products/002/4_min.jpg?revision=1697143329",
    name: "BADDUCK DM - 07 1080 P HD Kameralı Katlanabilir FPV Drone",
    category: "Dron Multikopter",
    description: "",
    price: 35
  },
];

const newsData = [
    {
      id: 1,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/myassets/products/430/eachine-e8-mavi.jpg?revision=1697143329&AppLanguageCode=tr",
      name: "Dron Kumandası",
      category: "Dron Malzemeleri",
      description: "",
      price: 45
    },
    {
      id: 2,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/myassets/products/430/eachine-e8-mavi.jpg?revision=1697143329&AppLanguageCode=tr",
      name: "Dron Kumandası",
      category: "Dron Malzemeleri",
      description: "",
      price: 124
    },
  ];

  const inSaleData = [
    {
      id: 1,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/myassets/products/430/eachine-e8-mavi.jpg?revision=1697143329&AppLanguageCode=tr",
      name: "Dron Kumandası",
      category: "Dron Malzemeleri",
      description: "",
      price: 45
    },
    {
      id: 2,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/myassets/products/430/eachine-e8-mavi.jpg?revision=1697143329&AppLanguageCode=tr",
      name: "Dron Kumandası",
      category: "Dron Malzemeleri",
      description: "",
      price: 124
    },
  ];

const options = {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  loop: false,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    577: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};

const popularProductsSwiper = productsSwiper(".popular-products-swiper", popularData, options);

const newProductsSwiper = productsSwiper(".new-products-swiper", newsData, options);

const inSaleProductsSwiper = productsSwiper(".on-sale-products-swiper", inSaleData, options)