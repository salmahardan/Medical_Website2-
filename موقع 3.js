let meun = document.querySelector('#meun-btu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');

}

window.onscroll = () => {
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');

}





