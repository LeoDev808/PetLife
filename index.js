var elementos = document.querySelectorAll('.ask')

elementos.forEach (function (ask){
 ask.addEventListener('click', function () { ask.classList.toggle('on')
})
})