function toggleSubCategories(categoryNumber) {
    // Hide all sub-content elements
    const subContents = document.querySelectorAll(".category-mega-menu-sub-item");
    const baseContent = document.querySelector(".category-mega-menu-base-item");

    subContents.forEach((subContent) => {
        subContent.style.display = "none";
    });

    baseContent.style.display = "none";

    // Show the sub-content of the clicked card
    const subContent = document.getElementById(`category-mega-menu-sub-item-${categoryNumber}`);
    subContent.style.display = "block";
}

function showBaseCategories() {
    // Hide all sub-content elements
    const baseContent = document.querySelector(".category-mega-menu-base-item");
    baseContent.style.display = "block";

    const subContents = document.querySelectorAll(".category-mega-menu-sub-item");

    subContents.forEach((subContent) => {
        subContent.style.display = "none";
    });
}
