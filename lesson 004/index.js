console.log('Lesson 001');

(() => {
    // place your code here for paragraph 4.1
    //let user = new Object();
    //user.name = "Ivan";
    //user.surname = "Smith";
    //user.name = "Pedro";
    //delete user.name;

    //function isEmpty(obj) {
        //for (let key in obj) {
            //return false;
        //};
        //return true
    //}

    /*
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      };

    let sum = 0;
    for (let key in salaries) {
        sum = sum + salaries{key};
    };
    
    console.log(sum);
    */

    /*
    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof(obj[key] === NUmber)) {
                obj[key] *= 2
            };
        };
    }

    let menu = {
        width: 200,
        height: 300,
        title: "Моє меню"
      };

    multiplyNumeric(menu);

    for (let key in menu) {
        console.log(menu[key]);
    };
    */


})();

(() => {
    // place your code here for paragraph 4.4
    /*
    let calculator = {
        read() {
            this.a = +prompt("a")
            this.b = +prompt("b")
        },
        sum() {
            return this.a + this.b
        },
        mul() {
            return this.a * this.b
        }
    };

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
    */

    /*
    let ladder = {
        step: 0,
        up() {
          this.step++;
          return this;
        },
        down() {
          this.step--;
          return this;
        },
        showStep: function() {
          alert( this.step );
          return this;
        }
      };
    
      ladder.up().up().down().showStep().down().showStep();
      */

})();

(() => {
    // place your code here for paragraph 4.5
    /*
    function Calculator() {
        this.a = +prompt("a:")
        this.b = +prompt("b:")

        this.read = function() {
            return console.log(this.a, this.b);
        };

        this.sum = function() {
            return this.a + this.b;
        };

        this.mul = function() {
            return this.a * this.b;
        };
    };

    let calculator = new Calculator();
    calculator.read();

    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );
    */

    /*
    function Accumulator(startingValue) {
        this.value = startingValue;

        this.read = function() {
            this.new_value = +prompt("new value?");
            this.value += this.new_value;
        };
    };
    let accumulator = new Accumulator(1); // початкове значення 1

    accumulator.read(); // додає введене користувачем значення
    accumulator.read(); // додає введене користувачем значення

    alert(accumulator.value);
    */

})();
