console.log('Lesson 001');

(() => {
    // place your code here for paragraph 5.7
    /*
    function unique(arr) {
        let unique_arr = new Set(arr);
        return unique_arr;
      }
      
      let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
      
      console.log( unique(values) ); // Hare, Krishna, :-O
    */

    /* version with array methods only
    function unique(arr) {
        return arr.filter((el, index) => arr.indexOf(el) === index);
    }
      
      let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
      
      console.log( unique(values) );
    
    */
    /*
    function aclean(arr) {
        let map = new Map();
      
        for (let word of arr) {
          let sorted = word.toLowerCase().split('').sort().join(''); // (*)
          map.set(sorted, word);
        }
      
        return Array.from(map.values());
      }
      
      let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
      
      alert( aclean(arr) );
      */
      
      /*
      let map = new Map();
 
      map.set("name", "John");

      let keys = Array.from(map.keys());

      keys.push("more");

      console.log(keys)
      */
})();


(() => {
  // place your code here from codewars

  /*
  function dnaStrand(dna){
    if (dna.length == 0) {
      return "???"
    } else {
      let elements = dna.split("");
      for (let i = 0; i < elements.length; i++) {
        if (elements[i] == "A") {
          elements.splice(i, 1, "T");
        } else if (elements[i] == "T") {
          elements.splice(i, 1, "A");
        } else if (elements[i] == "G") {
          elements.splice(i, 1, "C");
        } else if (elements[i] == "C") {
          elements.splice(i, 1, "G");
        }
      }
      let finished_dna = elements.join("")
      return finished_dna;
    }
  }
    */


})();