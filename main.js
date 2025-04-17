// Creating Elements
let title_input = document.querySelector('.title');
let plus = document.querySelector('.plus');
let alert = document.querySelector('.alert');
let duty_ul = document.querySelector('.duty_ul');
let completeAll_or_deleteAll = document.querySelector('.completeAll_or_deleteAll');
let completeAll = document.querySelector('.completeAll');
let deleteAll = document.querySelector('.deleteAll');

// creating focus:-
window.onfocus = function () {
    title_input.focus();
}

// handel the alert:-
title_input.addEventListener('input', function(e){
             let value =e.target.value
             if (value!=='') {
                 alert.style.display = 'none';  
             } 
         })

plus.addEventListener('click', function () {

    if (title_input.value.trim() ==='') {
        alert.style.display='block'
        title_input.focus();
    } else {
    // creating one_task:-
    let one_task = document.createElement('div');
    one_task.classList.add('one_task');
    duty_ul.appendChild(one_task);

//  creating li and button:-
let duty_li = document.createElement('li');
duty_li.classList.add('complete');
let duty_li_text = document.createTextNode(title_input.value);
duty_li.appendChild(duty_li_text);
let duty_button = document.createElement('button');
duty_button.classList.add('delate');
let duty_button_text = document.createTextNode('❌');
duty_button.appendChild(duty_button_text);
// add li and button in one_task:-
one_task.appendChild(duty_li)
one_task.appendChild(duty_button)
// delete input value and making focus
title_input.value='';
title_input.focus();

completeAll_or_deleteAll.style.opacity = 1;
completeAll_or_deleteAll.style.display = 'flex';
}
 });

 window.addEventListener('click', function (e) {
    // delete One task
    if(e.target.className =='delate' ){
        e.target.parentNode.remove();
    }
    // add line through on task
    if(e.target.classList.contains('complete') ){
        e.target.classList.toggle('line_through');
    }
    // add line through on task all
    if(e.target.classList.contains('completeAll') ){
let duty_ul_li = duty_ul.querySelectorAll('li');

for (let index = 0; index < duty_ul_li.length; index++) {
    duty_ul_li[index].classList.add('line_through');
}
}
    // delete all task
    if(e.target.className =='deleteAll' ){
        duty_ul.innerHTML='';
        title_input.focus();
        // completeAll_or_deleteAll.style.opacity = 0;
        completeAll_or_deleteAll.style.display = 'none';
    }
 })
