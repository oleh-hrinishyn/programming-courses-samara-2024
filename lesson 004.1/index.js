// Task 1: Sum of an Array
// Description: Write a function that uses reduce to sum all the numbers in an array.
// Check: Test with [1, 2, 3, 4, 5] and expect the sum 15.

(() => {
    // place your code here

    function SumOfArray(a) {
        return a.reduce((b, c) => b + c, 0);
    }

    let Arr = [1, 2, 3, 4, 5];
    alert(SumOfArray(Arr));

})();

// Task 2: Product of an Array
// Description: Write a function that uses reduce to calculate the product of all numbers in an array.
// Check: Test with [1, 2, 3, 4, 5] and expect the product 120.

(() => {
    // place your code here

    function ProdOfArray(a) {
        return a.reduce((b, c) => b * c, 1);
    }
    
    let Arr = [1, 2, 3, 4, 5];
    alert(ProdOfArray(Arr));

})();

// Task 3: Find Maximum Value
// Description: Write a function that uses reduce to find the maximum value in an array.
// Check: Test with [3, 1, 4, 1, 5, 9] and expect the maximum value 9.

(() => {
    // place your code here

    function MaxOfArray(a) {
        return a.reduce((b, c) => (b > c) ? b : c, a[0]);
    }

    let Arr = [3, 1, 4, 1, 5, 9];
    alert(MaxOfArray(Arr));

})();

// Task 4: Flatten an Array
// Description: Write a function that uses reduce to flatten a 2D array.
// Check: Test with [[1, 2], [3, 4], [5, 6]] and expect the flattened array [1, 2, 3, 4, 5, 6].

(() => {
    // place your code here

    function Flanarray(a) {
        return a.reduce((b, c) => b.concat(c), []);
    }

    let Arr = [[1, 2], [3, 4], [5, 6]];
    alert(Flanarray(Arr));

})();

// Task 5: Count Occurrences
// Description: Write a function that uses reduce to count the occurrences of each element in an array.
// Check: Test with ['a', 'b', 'a', 'c', 'b', 'a'] and expect the count {'a': 3, 'b': 2, 'c': 1}.

(() => {
    // place your code here

    function countOccurrences(a) {
        return a.reduce((b, c) => { b[c] = (c in b) ? b[c] + 1 : 1; return b }, {});
    }
    
    let Arr = ['a', 'b', 'a', 'c', 'b', 'a'];
    console.log(countOccurrences(Arr));

})();

// Task 6: Group By Property
// Description: Write a function that uses reduce to group an array of objects by a property.
// Check: Test with [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}, {type: 'vegetable', name: 'carrot'}] and expect the grouping {'fruit': [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}], 'vegetable': [{type: 'vegetable', name: 'carrot'}]}.

(() => {
    // place your code here



})();

// Task 7: Sum of Specific Property
// Description: Write a function that uses reduce to sum the values of a specific property in an array of objects.
// Check: Test with [{price: 10}, {price: 20}, {price: 30}] and expect the sum 60.

(() => {
    // place your code here

    function sumProperty(a, p) {
        return a.reduce((b, c) => {
            return b + c[p];
        }, 0);
    }
    
    let Arr = [{price: 10}, {price: 20}, {price: 30}];
    
    alert(sumProperty(Arr, 'price'));

})();

// Task 8: Remove Duplicates
// Description: Write a function that uses reduce to remove duplicates from an array.
// Check: Test with [1, 2, 3, 1, 2, 4] and expect the array [1, 2, 3, 4].

(() => {
    // place your code here

    function removeDuplicates(a) {
        return a.reduce((b, c) => {
            if (b.indexOf(c) === -1) {
                b.push(c);
            }
            return b;
        }, []);
    }
    
    let Arr = [1, 2, 3, 1, 2, 4];
    console.log(removeDuplicates(Arr));

})();

// Task 9: Average of an Array
// Description: Write a function that uses reduce to calculate the average of an array of numbers.
// Check: Test with [10, 20, 30, 40] and expect the average 25.

(() => {
    // place your code here

    function AverOfArray(a) {
        return (a.reduce((b, c) => b + c, 0))/a.length;
    }

    let Arr = [10, 20, 30, 40];
    alert(AverOfArray(Arr));

})();

// Task 10: Reverse a String
// Description: Write a function that uses reduce to reverse a string.
// Check: Test with 'hello' and expect the reversed string 'olleh'.

(() => {
    // place your code here

    function reverseString(a) {
        return a.split('').reduce((b, c) => c + b, '');
    }
    
    let string = 'hello';
    alert(reverseString(string));

})();