const searchScreen = document.getElementById('search');

function closeSearchScreen () {
    searchScreen.classList.remove('active');
}

function openSearchScreen () {
    searchScreen.classList.add('active');
}