console.log('Lesson 001');

(() => {
    // place your code here for paragraph 5.2
    
    // Task 1

    let a = +prompt("Перше число?");
    let b = +prompt("Друге число?");

    alert(a + b);
    
    // Task 2
    
    alert( Math.round(6.35 * 10) / 10 );

    // Task 3

    function readNumber() {
        let a;
      
        do {
            a = prompt("Введіть число", 0);
        } while ( isNaN(a) );
      
        if (a === null || a === '') { 
            return null;
        }
      
        return +a;
    }
      
    alert(`Read: ${readNumber()}`);

    // Task 4

    // Через помилку округлення при додаванні дробів, тобто 'i' набуде значення приблизно 9.999999999, а не 10

    // Task 5

    function random(a, b) {
        return a + Math.random() * (b - a);
    };

    alert( random(1, 5) );
    alert( random(1, 5) );
    alert( random(1, 5) );

    // Task 6
    
    function randomInteger(a, b) {
        return Math.floor(r = a + Math.random() * (b - a + 1));
    }

    alert( randomInteger(1, 5) );
    alert( randomInteger(1, 5) );
    alert( randomInteger(1, 5) );

})();

(() => {
    // place your code here for paragraph 5.3

    // Task 1
    
    function ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    alert(ucFirst("василь"));
    
    // Task 2
    
    function checkSpam(str) {
        if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) {
            return true;
        } else {
            return false;
        };
    };

    alert(checkSpam('buy ViAgRA now'))
    alert(checkSpam('free xxxxx'))
    alert(checkSpam("innocent rabbit"))
    
    // Task 3
    
    function truncate(str, m_length) {
        return (str.length >= m_length) ? str.slice(0, m_length - 1) + '...' : str;
    };
    
    alert(truncate("Що я хотів би розповісти на цю тему:", 20))
    alert(truncate("Всім привіт!", 20))
    
    // Task 4
    
    function extractCurrencyValue(str) {
        return +str.slice(1);
    }

    alert( extractCurrencyValue('$120') == 120 );

})();

(() => {
    // place your code here for paragraph 5.4

    // Task 1
    // 4

    // Task 2
    
    let styles = ["Jazz", "Blues"];
    styles.push("Rock-n-Roll");
    styles[Math.floor((styles.length - 1) / 2)] = "Classics";
    alert( styles.shift() );
    styles.unshift("Rap", "Reggae");
    
    // Task 3
    
    let arr = ["a", "b"];

    arr.push(function() {
        alert( this );
    });

    arr[2]();
    
    // Task 4
    
    function sumInput() {
        let arr = []
        let a;
        do {
            a = prompt("Enter a number:");
            arr.push(+a);
        } while (isNaN(a) === false && a !== null && a !== "");
        let sum = 0;
        for (let el in arr) {
            sum += el;
        };
        return sum
    };

    sumInput();
    
    // Task 5

    function getMaxSubSum(arr) {
        let maxSum = 0; 
      
        for (let i = 0; i < arr.length; i++) {
            let sumFixedStart = 0;
            for (let j = i; j < arr.length; j++) {
                sumFixedStart += arr[j];
                maxSum = Math.max(maxSum, sumFixedStart);
            }
        }
      
        return maxSum;
    }
      
    alert( getMaxSubSum([-1, 2, 3, -9]) );
    alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
    alert( getMaxSubSum([-2, -1, 1, 2]) );
    alert( getMaxSubSum([1, 2, 3]) );
    alert( getMaxSubSum([100, -9, 2, -3, 5]) );
    
})();

(() => {
    // place your code here for paragraph 5.5

    // Task 1
    
    function camelize(str) {
        let words = str.split("-")
        let words1 = words.map((word, index) => 
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1));

        return words1.join("");
    };

    alert(camelize("background-color"))
    alert(camelize("list-style-image"))
    alert(camelize("-webkit-transition"))

    // Task 2

    function filterRange(arr, a, b) {
        return arr.filter(c => (c >= a && c <= b));    
    }

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    alert(filtered);
    alert(arr);
    
    // Task 3

    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
            let val = arr[i];
      
            if (val < a || val > b) {
                arr.splice(i, 1);
                i--;
            }
        }
      
    }
      
    let arr = [5, 3, 8, 1];
      
    filterRangeInPlace(arr, 1, 4); 
      
    lert( arr );

    // Task 4
    
    let arr = [5, 2, 1, -10, 8]

    arr.sort((a, b) => b - a);

    alert(arr);
    
    // Task 5
    
    function copySorted(arr) {
        return arr.slice().sort();
    };

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted );
    alert( arr );
    
    // Task 6



    // Task 7
    
    let ivan = { name: "Іван", age: 25 };
    let petro = { name: "Петро", age: 30 };
    let mariya = { name: "Марія", age: 28 };

    let users = [ ivan, petro, mariya ];

    let names = users.map(obj => obj.name);

    alert(names);
    
    // Task 8
    
    let ivan = { name: "Іван", surname: "Іванко", id: 1 };
    let petro = { name: "Петро", surname: "Петренко", id: 2 };
    let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

    let users = [ ivan, petro, mariya ];

    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));

    alert( usersMapped[0].id );
    alert( usersMapped[0].fullName );
    
    // Task 9
      
    function sortByAge(arr) {
        arr.sort((a, b) => a.age - b.age)
    };

    let ivan = { name: "Іван", age: 25 };
    let petro = { name: "Петро", age: 30 };
    let mariya = { name: "Марія", age: 28 };

    let arr = [ petro, ivan, mariya ];

    sortByAge(arr);
      
    alert(arr[0].name);
    alert(arr[1].name);
    alert(arr[2].name);
    
    // Task 10

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
      
    let arr = [1, 2, 3];
    shuffle(arr);
    alert(arr);

    // Task 11
    
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];

    function getAverageAge(arr) {
        let l = arr.map(obj => obj.age)
        let b = 0
        for (let a of l) {
            b += a;
        };
        return b / arr.length
    }

    alert( getAverageAge(arr) );
    
    // Task 12
    
    function unique(arr) {
        let result = [];
      
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
      
        return result;
    }
      
    let strings = ["Привіт", "Світ", "Привіт", "Світ",
        "Привіт", "Привіт", "Світ", "Світ", ":-O"
    ];
      
    alert( unique(strings) );
    
    // Task 13

    function groupById(arr) {
        return arr.reduce((a, b) => {
            a[b.id] = b;
            return a;
        }, {})
    }

    let users = [
        {id: 'іван', name: "Іван Іванко", age: 20},
        {id: 'ганна', name: "Ганна Іванко", age: 24},
        {id: 'петро', name: "Петро Петренко", age: 31},
    ];

    let usersById = groupById(users);

    console.log(usersById)
    
   
})();