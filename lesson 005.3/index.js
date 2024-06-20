console.log('Lesson 001');

(() => {
    // place your code here for paragraph 5.9
    /*
    function sumSalaries(array) {
      return Object.values(array).reduce((sum, current) => sum + current, 0);
    };
    
    let salaries = {
      "Іван": 100,
      "Петро": 300,
      "Марія": 250
    };
    
    console.log( sumSalaries(salaries) );
    */

    /*
    function count(array) {
      return Object.keys(array).length;
    };

    let user = {
      name: 'Іван',
      age: 30
    };
    
    console.log( count(user) );
    */


})();


(() => {
  // place your code here for paragraph 5.10

  /*
  let user = { name: "Ivan", years: 30 };
  user["isAdmin"] = false;
  let {name, years: age, isAdmin = false} = user;
  console.log(name, age, isAdmin);
  */

  /*
  let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
  };

  function topSalary(array) {
    if (array == {}) {
      return null;
    } else {
      let salaries_values = Object.values(salaries);
      return Object.values(salaries).reduce((a, b) => (a > b) ? a : b, salaries_values[0]);
    }
  }

  console.log(topSalary(salaries));
  */
  /*
  function persistence(num) {
    if (num < 0) {
      return "???";
    } else if (String(num).length == 1) {
      return 0;
    } else {
      let elements = String(num).split("");
      let mult_count = 0;
      let value;
      do {
        value = elements.reduce((mult, current) => mult * current, 1);
        elements = String(value).split("");
        mult_count += 1;
      } while (String(value).length > 1);
      return mult_count;
    }
  }

  function isTriangle(a,b,c) {
    console.log(a, b, c)
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    } else if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
      return false;
    } else {
      return true;
    }
  }
  */

  /*
  function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}
  
  console.log(isTriangle(1, 4, 5))
  */

})();