console.log('Lesson 002');

(() => {
    // place your code here for paragraph 2.13

    // Task 1
    // 1

    // Task 2
    // 1 2 3 4
    // 1 2 3 4 5

    // Task 3
    // 1 2 3 4
    // 1 2 3 4

    // Task 4

    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            alert( i );
        }
    }

    // Task 5

    let i = 0;
    while (i < 3) {
        alert( `число ${i}!` );
        i++;
    }

    // Task 6

    let n;
    while (num <= 100 && num) {
        n = prompt("Введіть число n, яке є більше за 100:");
    };

    // Task 7

    let n = 10;

    prime:
    for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue prime;
        };
        alert(i);
    };
    
})();

(() => {
    // place your code here for paragraph 2.14

    // Task 1

    let browser = prompt("Введіть браузер:")

    if (browser === "Edge") {
        alert( "You've got the Edge!" );
    } else if (browser === "Chrome"
         || browser === "Firefox"
         || browser === "Safari"
         || browser === "Opera") {
        alert( 'Ми підтримуємо і ці браузери' );
    } else {
        alert( 'Маємо надію, що ця сторінка виглядає добре!' );
    }

    // Task 2

    let a = +prompt('a?', '');

    switch(a) {
        case 0:
        alert(0);
        break;

        case 1:
        alert(1);
        break;

        case 2:
        case 3:
        alert( '2,3' );
        break;   
    }
})();