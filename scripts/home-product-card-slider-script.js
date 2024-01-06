const homeProductCardSlider = () => {
    const pagination = document.createElement("div");
    pagination.classList.add("pagination");
  
    const data = [
      {
        id: 1,
        imgUrl:
          "https://ideacdn.net/idea/cq/36/myassets/products/430/eachine-e8-mavi.jpg?revision=1697143329&AppLanguageCode=tr",
        description: "Badduck DM - 07 1080P HD Kameralı Katlanabilir FPV Drone",
        title: "YENİ HOBİ DRONU",
      },
      {
        id: 2,
        imgUrl:
          "https://ideacdn.net/idea/cq/36/myassets/products/637/x7-access-black-5-600x600.jpg?revision=1697143329&AppLanguageCode=tr",
        description: "Drone Kumandaları , Rc Drone Kumandaları , Drone Malzemeleri",
        title: "FrSky QX7 Drone Kumandası-Siyah",
      },
      {
        id: 3,
        imgUrl:
          "https://ideacdn.net/idea/cq/36/myassets/products/532/matek-mini-power-hub-lead.jpg?revision=1697143329&AppLanguageCode=tr",
        description:
          "Drone ESC Modelleri , Drone Parçaları",
        title: "Güç dağıtım kartı Matek Mini PDB/ BEC 5V & 12v",
      },
      {
        id: 4,
        imgUrl:
          "https://ideacdn.net/idea/cq/36/myassets/products/917/dji-zenmuse-h20-drone-kamerasi-1.jpg?revision=1697143329&AppLanguageCode=tr",
        description: "Enerji, Güvenlik, İnşaat ve Haritalama Drone Uygulamaları , Drone Kamera ve Gimballeri",
        title: "DJI Zenmuse H20 Drone Kamerası",
      },
    ];
  
    // Create the container div
    const container = document.createElement("div");
    container.classList.add("swiper-wrapper");
  
    // Create and append items to slide div
    data.forEach((item) => {
      const slideItem = document.createElement("div");
      slideItem.classList.add("product-item");
      slideItem.classList.add("swiper-slide");

      const itemImage = document.createElement("div");
      itemImage.classList.add("product-item-image");

      const image = document.createElement("img");
      image.classList.add('lazy-load');
      image.setAttribute('data-src', item.imgUrl);
      image.alt = item.title;
      itemImage.appendChild(image);

      const content = document.createElement("div");
      content.classList.add("product-item-content");
  
      const title = document.createElement("div");
      title.classList.add('product-item-title');
      title.textContent = item.title;
  
      const description = document.createElement("div");
      description.classList.add('product-item-description');
      description.textContent = item.description;
  
      const button = document.createElement("a");
      button.textContent = "Ürüne Git";
      button.classList.add('btn');
      button.classList.add('btn-shadow');
      button.classList.add('btn-sharp');
  
      slideItem.appendChild(itemImage);
      content.appendChild(title);
      content.appendChild(description);
      content.appendChild(button);
      slideItem.appendChild(content);
      container.appendChild(slideItem);
  });
  
    // Add the container to the DOM (assuming there is an element with id "root" where you want to mount the slider)
    document.getElementById("home-product-card-slider-root").appendChild(container);
    document.getElementById("home-product-card-slider-root").appendChild(pagination);
  };
  
  // Call the slider function to initialize slider
  homeProductCardSlider();
  