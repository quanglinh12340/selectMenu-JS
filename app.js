const selectField = document.getElementById('selectField')
const selectText = document.getElementById('selectText')
const options = document.querySelectorAll('.options')
const list = document.getElementById('list')
const arrowIcon = document.getElementById('arrowIcon')


selectField.onclick = () => {
    list.classList.toggle('hide')
    arrowIcon.classList.toggle('rotate')
}

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent
        list.classList.toggle('hide')
        arrowIcon.classList.toggle('rotate')
    }


}