var btnopen = document.querySelector('.open-modal')
var modal = document.querySelector('.modal')
var iconclose = document.querySelector('.modal-inner__header i')
var btnclose = document.querySelector('.modal-inner__footer button')


function toggleModal(e){
    console.log(e.target)
    modal.classList.toggle('hide')
}

btnopen.addEventListener('click',toggleModal)
btnclose.addEventListener('click',toggleModal)
iconclose.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if (e.target == e.currentTarget){
        toggleModal()
    }
})