const startButton = document.querySelector('.start-button'),
startElems = document.querySelector('.start-elems'),
mainForm = document.querySelector('.main-form'),
formCalculate = document.querySelector('.form-calculate'),
endButton = document.querySelector('.end-button'),
total = document.querySelector('.total'),
wantFaster = document.querySelector('.want-faster'),
fastRange = document.querySelector('.fast-range')


function showElem(elem) {
  elem.style.display = 'block';
}

function hideElem(elem) {
  elem.style.display = 'none';
}

//получает сам элемент внутри формы, который изменил состояние, инпут, радио и т. д.
function handlerCallBackForm(event) {
  const target = event.target;
  
  if (target.classList.contains('want-faster')) {
   target.checked ? showElem(fastRange) : hideElem(fastRange);
 }
}

startButton.addEventListener('click', () => {
  hideElem(startElems);
  showElem(mainForm);
});

endButton.addEventListener('click', () => {  
  for (const elem of formCalculate.elements) {
    if (elem.tagName === 'FIELDSET') {
     hideElem(elem);
   }
 }

 showElem(total);

});

//форм addEventListener change отслеживает изменение любого элемента внутри формы пишут текст радиокнопки чекбоксы и тд
formCalculate.addEventListener('change', handlerCallBackForm);

//1/52.36