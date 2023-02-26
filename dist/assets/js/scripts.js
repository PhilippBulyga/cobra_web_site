const profileIcon = document.querySelector('.profile-icon')
const profileIconButton = document.querySelector('#profile-icon')
const mobileMenu = document.querySelector('.account-buttons')

profileIcon.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('mobileMenu')
})

document.addEventListener('click', function handleClickOutsideBox(event) {
    if(event.target !== mobileMenu && mobileMenu.classList.contains('mobileMenu') && event.target !== profileIconButton){
        mobileMenu.classList.toggle('mobileMenu')
    }
});