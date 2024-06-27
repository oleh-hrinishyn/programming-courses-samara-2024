console.log('Lesson 001');

(() => {
    // place your code here for paragraph 5.2 (https://uk.javascript.info/variables)
// 1.
// let a = +prompt("First number: ", "");
// let b = +prompt("Second number: ", "");
// alert( a + b );

// 2.
// alert( Math.round(6.35 * 10) / 10 );

// 3.
// function readNumber(){
//     let num
//     do{
//         num = prompt("Enter number: ", )
//         } while(!isFinite(num))
//     if (num == null || num === '') return null
//     return +num 
// }
// alert(readNumber())

// 4.
// При додаванні дробових значень втрачається точність, тому і ніколи не буде дорівнювати 10

// 5.
// function random(min, max){
//     return min + Math.random() * (max - min);
// }

// 6.
// function randomInteger(min, max){
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
// }

})();

(() => {
    // place your code here for paragraph 5.3(https://uk.javascript.info/types)
// 1.
// function ucFirst(str) {
//     if (!str) return str
//     return str[0].toUpperCase() + str.slice(1)
// }
// alert(ucFirst("test"))

// 2.
// function checkSpam(str) {
//     let lowStr = str.toLowerCase()
//     return lowStr.includes("viagra") || lowStr.includes("xxx")
// }
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// 3.
// function truncate(str, maxLenght){
//     if (str.length < maxLenght) return str
//     else return str.slice(0, maxLenght - 1) + '…'
// }
// alert(truncate("Що я хотів би розповісти на цю тему:", 20))

// 4.
// function extractCurrencyValue(str) {
//     return +str.slice(1);
//}

})();

(() => {
    // place your code here for paragraph 5.4 (https://uk.javascript.info/alert-prompt-confirm)
// 1. 4, тому що два масиви посилаються на один і той самий об'єкт

2.
// let styles = ["Jazz", "Blues"]
// styles.push("Rock-n-Roll")
// alert(styles)
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert(styles)
// alert(styles.shift());
// styles.unshift("Rap", "Reggae");
// alert(styles)

// 3. Виклик функції

// 4.
// function sumInput() {
//     let numbers = [];  
//     while (true) {
//       let value = prompt("Введіть, будь ласка, номер", 0);
//       if (value === "" || value === null || !isFinite(value)) break;
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
//   alert(sumInput());

// 5.
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
  
//     for (let item of arr) { 
//       partialSum += item; 
//       maxSum = Math.max(maxSum, partialSum); 
//       if (partialSum < 0) partialSum = 0;  
//     }
  
//     return maxSum;
//   }
  
//   alert( getMaxSubSum([-1, 2, 3, -9]));
})();

(() => {
    // place your code here for paragraph 5.5 (https://uk.javascript.info/operators)
// 1.
// function camelize(str) {
//     return str
//       .split('-') 
//       .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); 
//     }
// alert(camelize("background-color"))

// 2.
// function filterRange(arr, a, b) {
    
//     return arr.filter(item => (a <= item && item <= b));
//   }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);  
// alert( filtered ); 

// 3.
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert( arr );
  
// 4.
// function copySorted(arr) {
//     return arr.slice().sort();
//   }
//   let arr = ["HTML", "JavaScript", "CSS"];
//   let sorted = copySorted(arr);

//   alert( sorted );
//   alert( arr );


})();

