// Task 1: Sum of an Array
// Description: Write a function that uses reduce to sum all the numbers in an array.
// Check: Test with [1, 2, 3, 4, 5] and expect the sum 15.

(() => {
    // place your code here
    /*
    function arrayElementsSum(array) {
        let result = array.reduce((sum, current) => sum + current, 0);
        return result;
    }

    alert(arrayElementsSum([1, 2, 3, 4, 5]));
    */

})();

// Task 2: Product of an Array
// Description: Write a function that uses reduce to calculate the product of all numbers in an array.
// Check: Test with [1, 2, 3, 4, 5] and expect the product 120.

(() => {
    // place your code here

    /*
    function arrayElementsProduct(array) {
        let result = array.reduce((product, current) => product * current);
        return result;
    }

    alert(arrayElementsProduct([1, 2, 3, 4, 5]));
    */

})();

// Task 3: Find Maximum Value
// Description: Write a function that uses reduce to find the maximum value in an array.
// Check: Test with [3, 1, 4, 1, 5, 9] and expect the maximum value 9.

(() => {
    // place your code here
    
    /*
    function arrayMaximumValue(array) {
        let result = array.reduce((max, current) => Math.max(max, current), array[0]);
        return result;
    }


    alert(arrayMaximumValue([1, 2, 3, 4, 5]));
    */

})();

// Task 4: Flatten an Array
// Description: Write a function that uses reduce to flatten a 2D array.
// Check: Test with [[1, 2], [3, 4], [5, 6]] and expect the flattened array [1, 2, 3, 4, 5, 6].

(() => {
    // place your code here

    /*
    function arrayFlatten(array) {
        let result = array.reduce((finished, current_part) => finished.concat(current_part));
        console.log(result);
        return result;
    }

    alert(arrayFlatten([[1, 2], [3, 4], [5, 6]]))
    */

})();

// Task 5: Count Occurrences
// Description: Write a function that uses reduce to count the occurrences of each element in an array.
// Check: Test with ['a', 'b', 'a', 'c', 'b', 'a'] and expect the count {'a': 3, 'b': 2, 'c': 1}.

(() => {
    // place your code here

    /*
    function occurrencesCount(array) {
        let result = array.reduce((count, symbol) => {
            count[symbol] = (count[symbol] || 0) + 1;
            return count;
        }, {})
        return result;
    };

    console.log(occurrencesCount(['a', 'b', 'a', 'c', 'b', 'a']))
    */

})();

// Task 6: Group By Property
// Description: Write a function that uses reduce to group an array of objects by a property.
// Check: Test with [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}, {type: 'vegetable', name: 'carrot'}] and expect the grouping {'fruit': [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}], 'vegetable': [{type: 'vegetable', name: 'carrot'}]}.

(() => {
    // place your code here

    /*
    function groupByProperty(array) {
        let result = array.reduce((obj, value) => {
            if (!obj[value.type]) {
                obj[value.type] = [];
            }
            obj[value.type].push(value);
            return obj;
        }, {})
        return result;
    }

    console.log(groupByProperty([{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}, {type: 'vegetable', name: 'carrot'}]))
    */


})();

// Task 7: Sum of Specific Property
// Description: Write a function that uses reduce to sum the values of a specific property in an array of objects.
// Check: Test with [{price: 10}, {price: 20}, {price: 30}] and expect the sum 60.

(() => {
    // place your code here

    /*
    function sumOfSpecificProperty(array) {
        let result = array.reduce((obj, value) => {
            obj.push(value.price);
            return obj;
        }, [])

        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
    }

    console.log(sumOfSpecificProperty([{price: 10}, {price: 20}, {price: 30}]))
    */


})();

// Task 8: Remove Duplicates
// Description: Write a function that uses reduce to remove duplicates from an array.
// Check: Test with [1, 2, 3, 1, 2, 4] and expect the array [1, 2, 3, 4].

(() => {
    // place your code here



})();

// Task 9: Average of an Array
// Description: Write a function that uses reduce to calculate the average of an array of numbers.
// Check: Test with [10, 20, 30, 40] and expect the average 25.

(() => {
    // place your code here

    /*
    function getAverageValue(array) {
        let result = array.reduce((sum, current) => sum + current, 0) / array.length;
        return result;
    };

    console.log(getAverageValue([10, 20, 30, 40]))
    */


})();

// Task 10: Reverse a String
// Description: Write a function that uses reduce to reverse a string.
// Check: Test with 'hello' and expect the reversed string 'olleh'.

(() => {
    // place your code here


})();