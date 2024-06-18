// Write a recursive function to check if a string is a palindrome.
// console.log(isPalindrome("racecar")); // Output: true

    function cheakpalindrome(str) {
        if (str.length <= 1) {
            return true;
        }
        if (str[0] !== str[str.length - 1]) {
            return false;
        }
        return cheakpalindrome(str.slice(1, -1));
    }

// Write a recursive function to compute the power of a number.
// console.log(power(2, 3)); // Output: 8

    function power(a, b) {
        if (b === 0) {
            return 1;
        }

        if (b < 0 || b % 1 !== 0) {
            return 'error';
        }

        return a * power(a, b - 1);
    }