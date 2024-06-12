console.log('Lesson 001');

(() => {
    // place your code here for paragraph 2.4 (https://uk.javascript.info/variables)
    
    // Task 1

    let admin, name;
    name = "Іван";
    admin = name;
    alert(admin);

    //Task 2

    Ourplanet = "Земля";
    CurrentUserName = "Давид";

    //Task 3

    const birthday = '18.04.1982'; //Дата народження не вираховується, а визначена одразу - можна використати великі літери

    const age = someCode(birthday); //Вік знаходиться під час виконання певної функції, тому використати великі літери неможна


    
})();

(() => {
    // place your code here for paragraph 2.5 (https://uk.javascript.info/types)

    let name = "Ілля";

    alert( `привіт ${1}` ); // привіт 1

    alert( `привіт ${"name"}` ); // привіт name 

    alert( `привіт ${name}` ); // привіт Ілля

})();

(() => {
    // place your code here for paragraph 2.6 (https://uk.javascript.info/alert-prompt-confirm)

    UserName = prompt('Введіть ім я: ');
    alert(UserName);

})();

(() => {
    // place your code here for paragraph 2.8 (https://uk.javascript.info/operators)

    // Task 1

    // let a = 1, b = 1;

    let c = ++a; // c = 2, a = 2
    let d = b++; // d = 1, b = 2

    // Task 2

    // let a = 2;

    let x = 1 + (a *= 2);
    // a = 4, x = 5

    // Task 3

    "" + 1 + 0     // 10
    "" - 1 + 0     // -1
    true + false   // 1
    6 / "3"        // 2
    "2" * "3"      // 6
    4 + 5 + "px"   // 9px
    "$" + 4 + 5    // $45
    "4" - 2        // 2
    "4px" - 2      // NaN
    "  -9  " + 5   //   -9  5
    "  -9  " - 5   // -14
    null + 1       // 1
    undefined + 1  // NaN
    " \t \n" - 2   // -2

    // Task 4

    let a = prompt("Перше число?", 1);
    let b = prompt("Друге число?", 2);

    alert(+a + +b); // 3

})();

(() => {
    // place your code here for paragraph 2.9 (https://uk.javascript.info/comparison)

    5 > 4                // true
    "ананас" > "яблуко"  // false
    "2" > "12"           // true
    undefined == null    // true
    undefined === null   // false
    null == "\n0\n"      // false
    null === +"\n0\n"    // false

})();

(() => {
    // place your code here for paragraph 2.10 (https://uk.javascript.info/ifelse)

    // Task 1

    if ("0") {
        alert( 'Привіт' ); // Буде виведено привіт, бо рядок не порожній, при рядку '' нічого б не відбулось
      }

    // Task 2

    let LangName = prompt('Яка “офіційна” назва JavaScript?', '');
    if (LangName == 'ECMAScript') {
        alert('Правильно!');
    } else {
        alert('Ви не знаєте? ECMAScript!');
    }

    // Task 3

    let num = +prompt('Введіть число', '');
    if (num < 0) {
        alert('-1');
    } else if (num == 0) {
        alert('0');
    } else {
        alert('1');
    }

    // Task 4

    let result;

    result = (a + b < 4) ? 'Нижче' : 'Вище';

    // Task 5

    let message;

    message = (login == 'Працівник') ? 'Привіт' :
    (login == 'Директор') ? 'Вітаю' :
    (login == '') ? 'Немає логіну' : 
    '';

})();

(() => {
    // place your code here for paragraph 2.11 (https://uk.javascript.info/logical-operators)
    
    // Task 1  //2
    // Task 2  //1  //2
    // Task 3  //null
    // Task 4  //1  //undefined
    // Task 5  //3
    // Task 6  

    if (age >= 14 && age <= 90);

    // Task 7

    if (!(age >= 14 && age <= 90));

    if (age < 14 || age > 90);

    // Task 8  //перший і третій
    // Task 9

    let userName = prompt('Введіть логін', '');

    if (userName === 'Admin') {

        let pass = prompt('Введіть пароль', '');

        if (pass === 'Господар') {
            alert( 'Ласкаво просимо!' );
        } else if (pass === '' || pass === null) {
            alert( 'Скасовано' );
        } else {
            alert( 'Неправильний пароль' );
        }

    } else if (userName === '' || userName === null) {
        alert( 'Скасовано' );
    } else {
        alert( 'Я вас не знаю' );
    }

})();