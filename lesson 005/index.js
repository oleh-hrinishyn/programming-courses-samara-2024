console.log('Lesson 001');

(() => {
    // place your code here for paragraph 5.2
    /*
    let a = +prompt("First number?");
    let b = +prompt("Second number?");

    alert(a + b);
    */
    
    //alert( Math.round(6.35 * 10) / 10 );

    /*
    function random(min, max) {
        return min + Math.random() * (max - min);
    };

    alert( random(1, 5) );
    alert( random(1, 5) );
    alert( random(1, 5) );
    */

    /*
    function random(min, max) {
        return Math.ceil(min + Math.random() * (max - min));
    };

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    alert( random(1, 5) );
    alert( random(1, 5) );
    alert( random(1, 5) );
    */

    /*
    function readNumber() {
        let a;
        do {
            a = prompt("Enter a number!");
        } while (isNaN(a));
        alert(`Read: ${a}`)
    };
    
    readNumber();
    */


})();

(() => {
    // place your code here for paragraph 5.3
    /*
    function ucFirst(strr) {
        let up_first = strr[0].toUpperCase();
        let finished_strr = up_first + strr.slice(1);
        return finished_strr;
    }

    alert(ucFirst("василь"))
    */

    /*
    function checkSpam(strr) {
        if (strr.toLowerCase().includes('viagra') || strr.toUpperCase().includes('XXX')) {
            return true;
        } else {
            return false;
        };
    };

    alert(checkSpam('buy ViAgRA now'))
    alert(checkSpam('free xxxxx'))
    alert(checkSpam("innocent rabbit"))
    */

    /*
    function truncate(strr, maxlength) {
        if (strr.length >= maxlength) {
            return strr.slice(0, maxlength) + '...';
        } else {
            return strr;
        };
    };
    
    alert(truncate("Що я хотів би розповісти на цю тему:", 20))
    alert(truncate("Всім привіт!", 20))
    */
    
    /*
    function extractCurrencyValue(strr) {
        return +strr.slice(1);
    }

    alert( extractCurrencyValue('$120') == 120 );
    */



})();

(() => {
    // place your code here for paragraph 5.4
    /*
    let styles = ["Jazz", "Blues"];
    styles.push("Rock-n-Roll");
    styles[(styles.length - 1) / 2] = "Classics";
    styles.shift(styles[0]);
    styles.unshift("Rap", "Reggae");
    alert(styles);
    */

    /*
    let arr = ["a", "b"];

    arr.push(function() {
        alert( this );
    });

    arr[2]();
    */

    /*
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
    */

    /* thats too difficult...*/
})();

(() => {
    // place your code here for paragraph 5.5
    /* my version:
    function camelize(strr) {
        let all_words = strr.split("-")
        for (let i = 1; i < all_words.length; i++) {
            all_words.splice(1, all_words.length, all_words[i][0].toUpperCase() + all_words[i].slice(1));
        };
        console.log(all_words);
        let finished_strr = all_words.join("");
        return finished_strr;
    };

    original:
    function camelize(strr) {
        return strr.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    }

    alert(camelize("background-color"));
    alert(camelize("list-style-image"));
    alert(camelize("-webkit-transition"));
    */

    /*
    function filterRange(liss, a, b) {
        return liss.filter(el => (el >= a && el <= b));    
    }

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    alert(filtered);
    alert(arr);
    */

    /*
    let arr = [5, 2, 1, -10, 8]

    arr.sort((a, b) => b - a);

    alert(arr);
    */

    /*
    function copySorted(liss) {
        let sorted = liss.slice().sort((a, b) => a.localeCompare(b))
        return sorted;
    };

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без змін)
    */

    /*
    let ivan = { name: "Іван", age: 25 };
    let petro = { name: "Петро", age: 30 };
    let mariya = { name: "Марія", age: 28 };

    let users = [ ivan, petro, mariya ];

    let names = users.map(obj => obj.name);

    alert(names);
    */

    /*
    let ivan = { name: "Іван", surname: "Іванко", id: 1 };
    let petro = { name: "Петро", surname: "Петренко", id: 2 };
    let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

    let users = [ ivan, petro, mariya ];

    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
      }));
    */
    
    /*
    let ivan = { name: "Іван", age: 25 };
    let petro = { name: "Петро", age: 30 };
    let mariya = { name: "Марія", age: 28 };
      
    function sortByAge(liss) {
        liss.sort((a, b) => a.age - b.age)
    };

    let arr = [ petro, ivan, mariya ];

    sortByAge(arr);
      
    alert(arr[0].name); // Ivan
    alert(arr[1].name); // Mariya
    alert(arr[2].name); // Petro
    */

    /*
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];

    function getAverageAge(liss) {
        let list_of_ages = liss.map(obj => obj.age)
        let sum = 0
        for (let age of list_of_ages) {
            sum += age;
        };
        let finished_value = sum / liss.length;
        return finished_value
    }

    alert( getAverageAge(arr) );
    */
    
    /*
    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length;
      }
      
      let ivan = { name: "Іван", age: 25 };
      let petro = { name: "Петро", age: 30 };
      let mariya = { name: "Марія", age: 29 };
      
      let arr = [ ivan, petro, mariya ];
      
      alert( getAverageAge(arr) );
    */   

    /*  
    function groupById(liss) {
        return liss.reduce((obj, value) => {
            obj[value.id] = value;
            return obj;
        }, {})
    }

    let users = [
        {id: 'іван', name: "Іван Іванко", age: 20},
        {id: 'ганна', name: "Ганна Іванко", age: 24},
        {id: 'петро', name: "Петро Петренко", age: 31},
    ];

    let usersById = groupById(users);

    console.log(usersById)
    */

    // i've done 10 tasks out of 13, that was too hard...
   
})();