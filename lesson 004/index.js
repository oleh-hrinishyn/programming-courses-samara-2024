console.log('Lesson 004');

(() => {
    // place your code here for paragraph 4.1

    // Task 1

    let user = {};
    user.name = "Ivan";
    user.surname = "Smith";
    user.name = "Pedro";
    delete user.name;

    // Task 2

    function isEmpty(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    // Task 3
    
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      };

    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    
    alert(sum);
    
    // Task 4
    
    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof(obj[key] == "number")) {
                obj[key] *= 2;
            }
        }
    }

})();

(() => {
    // place your code here for paragraph 4.4

    // Task 1
    // помилка

    // Task 2
    
    let calculator = {
        sum() {
            return this.a + this.b;
        },
      
        mul() {
            return this.a * this.b;
        },
      
        read() {
            this.a = +prompt('Введіть a:', 0);
            this.b = +prompt('Введіть b:', 0);
        }
    };
      
    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
    
    // Task 3
    
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
        showStep() {
            alert( this.step );
            return this;
        }
    };
    
    ladder.up().up().down().showStep().down().showStep();
      

})();

(() => {
    // place your code here for paragraph 4.5
    
    // Task 1

    let obj = {};

    function A() { return obj; }
    function B() { return obj; }

    alert( new A() == new B() ); 

    // Task 2

    function Calculator() {

        this.read = function() {
            this.a = +prompt('Введіть a:', 0);
            this.b = +prompt('Введіть b:', 0);
        };
      
        this.sum = function() {
            return this.a + this.b;
        };
      
        this.mul = function() {
            return this.a * this.b;
        };
    }
      
    let calculator = new Calculator();
    calculator.read();

    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );
    
    // Task 3
    
    function Accumulator(startingValue) {
        this.value = startingValue;

        this.read = function() {
            this.new_value = +prompt("Введіть нове число:");
            this.value += this.new_value;
        };
    }
    let accumulator = new Accumulator(1);
    accumulator.read();
    accumulator.read();
    alert(accumulator.value);
    
})();