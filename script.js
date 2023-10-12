const slider = () => {
  const slideRef = document.createElement("div");
  const loadingProgress = 0;

  const handleClickNext = () => {
    let items = slideRef.querySelectorAll(".banner-item");
    slideRef.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.querySelectorAll(".banner-item");
    slideRef.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/themes/selftpl_5fc48b7fbab49/assets/uploads/entry_slider_image_3.png?revision=7.2.7.1-9-1696857147",
      description: "Badduck DM - 07 1080P HD Kameralı Katlanabilir FPV Drone",
      title: "YENİ HOBİ DRONU",
    },
    {
      id: 2,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/themes/selftpl_5fc48b7fbab49/assets/uploads/entry_slider_image_5.png?revision=7.2.7.1-9-1696857147",
      description: "DJI - Agriculture",
      title: "TÜRKİYE RESMİ SATICISI",
    },
    {
      id: 3,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/themes/selftpl_5fc48b7fbab49/assets/uploads/entry_slider_image_8.png?revision=7.2.7.1-9-1696857147",
      description:
        "Milli Eğitim Bakanlığı ve SHGM onaylı İHA-0 ve İHA-1 Dron pilotluğu eğitimleri",
      title: "MEB VE SHGM ONAYLI EĞİTİMLER",
    },
    {
      id: 4,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/themes/selftpl_5fc48b7fbab49/assets/uploads/entry_slider_image_9.png?revision=7.2.7.1-9-1696857147",
      description: "Türkiye Resmi Distribütörü",
      title: "CHASING",
    },
    {
      id: 5,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/themes/selftpl_5fc48b7fbab49/assets/uploads/entry_slider_image_10.png?revision=7.2.7.1-9-1696857147",
      description: "Türkiye Resmi Distribütörü",
      title: "EMLID",
    },
    {
      id: 6,
      imgUrl:
        "https://ideacdn.net/idea/cq/36/themes/selftpl_5fc48b7fbab49/assets/uploads/entry_slider_image_2.png?revision=7.2.7.1-9-1696857147",
      description:
        "Şimdi ön sipariş verip stoklarla sınırlı indirimden sen de faydalan!",
      title: "DJI MATRICE 30T DE İLK 10 MÜŞTERİYE ÖZEL %30 İNDİRİM",
    },
  ];

  // Create the container div
  const container = document.createElement("div");
  container.classList.add("banner-container");

  // Create the loadbar div
  const loadbar = document.createElement("div");
  loadbar.classList.add("loadbar");
  loadbar.style.width = `${loadingProgress}`;

  // Append loadbar to container
  container.appendChild(loadbar);

  // Append slide div to container
  container.appendChild(slideRef);

  // Create and append items to slide div
  data.forEach((item) => {
    const slideItem = document.createElement("div");
    slideItem.classList.add("banner-item");
    slideItem.style.backgroundImage = `url(${item.imgUrl})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("div");
    title.classList.add('banner-item-title');
    title.textContent = item.title;

    const description = document.createElement("div");
    description.classList.add('banner-item-description');
    description.textContent = item.description;

    const button = document.createElement("button");
    button.textContent = "Daha fazlasını gör";

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(button);
    slideItem.appendChild(content);
    slideRef.appendChild(slideItem);

    // Create the buttons div
    const buttons = document.createElement("div");
    buttons.classList.add("banner-buttons");


    // Create the prev button
    const prevButton = document.createElement("button");
    prevButton.id = "prev";
    prevButton.addEventListener("click", handleClickPrev);

    const prevIcon = document.createElement("i");
    prevIcon.className = "fa fa-angle-left";
    prevButton.appendChild(prevIcon);

    // Create the next button
    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.addEventListener("click", handleClickNext);

    const nextIcon = document.createElement("i");
    nextIcon.className = "fa fa-angle-right";
    nextButton.appendChild(nextIcon);

    // Append buttons to container
    buttons.appendChild(prevButton);
    buttons.appendChild(nextButton);
    container.appendChild(buttons);
});

  // Add the container to the DOM (assuming there is an element with id "root" where you want to mount the slider)
  document.getElementById("root").appendChild(container);
};

// Call the slider function to initialize slider
slider();
