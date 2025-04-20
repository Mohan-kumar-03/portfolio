console.log('connected');
const menu = document.getElementById('menu');
const list = document.getElementById('nav_list');


menu.addEventListener('click',show_menu);

function show_menu(){
    console.log('menu clicked !');
    list.classList.toggle('nav_show');
}
