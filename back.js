BtnSearchNav = document.querySelector('.btn_search')
SearchSub = document.querySelector('.sub_search')
CloseIcon = document.querySelector('.close')

BtnSearchNav.addEventListener('click', () => {
    SearchSub.classList.remove("off")
})

CloseIcon.addEventListener('click', () => {
    SearchSub.classList.add("off")
})