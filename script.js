let a = document.getElementsByTagName('li');
let list = document.getElementById('list');// последний элменте
let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let elements = document.querySelectorAll('ul > li:last-child');// последний элемент
let btn3 = document.getElementById('button3');
let next = document.querySelectorAll('ul > li');
let btn4 = document.getElementById('button4');
let btn5 = document.getElementById('button5');
let btn6 = document.getElementById('button6');
let btn7 = document.getElementById('button7');
let i = -1;
let p = 0 ;


// первый элемент
btn1.addEventListener('click', function() {
    // alert(a[0].innerHTML);
    let first = list.firstElementChild.innerHTML;
    alert(first);
});


// последний элемент 
btn2.addEventListener('click', function() {
    // alert(a[6].innerHTML); 
    // for (let elem of elements) { 
    //     alert(elem.innerHTML); 
    //   }
    let last = list.lastElementChild.innerHTML;
    alert(last);
});



// следующий элемент
btn3.addEventListener('click', function () {
//  for(let elem of next) {
//      alert(elem.innerHTML);
//  }
i++;
if(a[i] !== undefined) {
    alert(a[i].innerHTML);
}
});


// предыдущий элемент

btn4.addEventListener('click', function () {
    p--;
    if(a[p] !== undefined) {
        console.log(a[p]);
    }

});


// добавить элемент 
let div = document.createElement('div');
btn5.addEventListener('click', function () {
        div.classList.add('black');
        div.innerHTML = 'hello world';
        document.body.appendChild(div);
        console.log(div)
});

//удалить элемент
btn6.addEventListener('click', function() {
    document.body.removeChild(div);
});

// добавить элемент в начало
btn7.addEventListener('click', function() {
document.body.insertBefore(div, list);
});





// /// создали елемент
// let div = document.createElement('div');
//     div.classList.add('black');
//     // div.textContent = 'Hello world!';
//     div.innerHTML = 'Hello world!';
//     console.log(div);
//     // document.body.appendChild(div); // добавиили элемент в конец страницы


//  /// удаляем елемент
// // document.body.removeChild(div);



//  /// добавить в начало
// // document.body.insertBefore(div, list);

// //// добавить внутрь ul
// list.appendChild(div); //// в конец ul 








 
