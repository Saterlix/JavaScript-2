var age = +prompt('Введите возраст')
if(age <= 0 ) {
    alert('Что-то пошло не так')
}else if( age <= 18 ) {
    alert('Вы еще молоды, Вам нужно учиться')
}else if( age <= 50 ){
    alert('Вам нужно работать')
}
else if( age <= 59 ){
    alert('Вам скоро на пенсию')
}
else if (age <= 100){
    alert('Вы пенсионер')
}else {
    alert('Что-то пошло не так')
}

time = +prompt('Введите время')

switch (true) {
    case time >= 0 && time <= 6: 
        alert( time + ' часа ночи')
        break;
    case time >= 7 && time <= 11: 
        alert(time +  ' часов утра')
        break;
        case time === 12:
        alert('12 часов дня')
        break;
    case time >= 13 && time <= 17:
        alert( (time) - 12  + ' часа дня')
        break;
    case time >= 18 && time <= 23: 
        alert( (time) - 12 + ' часов вечера')
        break;
    default:
    alert('Вы ввели не правильное время!!! ')
}


var a = +prompt('Введите число')
var b = +prompt('Введите число')
var c = +prompt('Введите число')

if(a > b && a < c || a < b && a > c){
    alert('Среднее число ' + a )
}else if(b > a && b < c || b < a && b > c){
    alert('Среднее число ' + b )
}else if(c > b && c < a || c < b && c > a) {
    alert('Среднее число ' + c )
}else {
    alert('Ошибка')
}