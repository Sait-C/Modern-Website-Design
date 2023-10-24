let filter_btns = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for(let i = 0; i < filter_btns.length; i++) {
    filter_btns[i].addEventListener('click', function () {
        for(let j = 0; j < tab_items.length; j++) {
            filter_btns[j].classList.remove('active');
        }
        filter_btns[i].classList.add('active');
        let selected_tab = filter_btns[i].getAttribute('data-tab');
        for(let t = 0; t < tab_items.length; t++) {
            document.querySelector('.tab-filter-item-container').style.height = 
            tab_items[t].scrollHeight + 'px';
            if(tab_items[t].classList.contains(selected_tab)) {
                tab_items[t].classList.add('selected_tab');
            }else {
                tab_items[t].classList.remove('selected_tab');
            }
        }
    })
}

for (let th = 0; th < tab_items.length; th++) {
    document.querySelector('.tab-filter-item-container').style.height = 
        tab_items[t].scrollHeight + 'px';
}