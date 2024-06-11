console.log('Lesson 003');

(() => {
    // place your code here for paragraph 2.15 (https://uk.javascript.info/variables)

    // Task 1
    // Різниці в поведінці немає

    // Task 2

    function checkAge(age) {
        return (age > 18) ? true : confirm('Батьки дозволили?');
    }

    function checkAge(age) {
        return (age > 18) || confirm('Батьки дозволили?');
    }

    // Task 3

    function min(a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }

    // Task 4

    let x = prompt("Введіть x", '');
    let n = prompt("Введіть n", '');

    function pow(x, n) {
        let result = x;
      
        for (let i = 1; i < n; i++) {
            result *= x;
        }
      
        return result;
    }

    alert(pow(x, n));

})();

(() => {
    // place your code here for paragraph 2.17 (https://uk.javascript.info/logical-operators)

    function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
    }
      
    ask(
        "Ви згодні?",
        () => alert("Ви погодились."),
        () => alert("Ви скасували виконання.")
    );
})();