//Write a recursive function to calculate the factorial of a number.
//console.log(factorial(5)); // Output: 120
//function factorial(x) {
    //if (x == 1) {
        //return x;
    //} else {
        //return x * factorial(x - 1);
    //}
//}

//console.log(factorial(4));

// Write a recursive function to generate all permutations of a string.
//console.log(permute("abc")); // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]

//function permute(strr) {
    //let list = [strr];
    //if (strr.length === 1) {
        //return strr;
    //} else if (strr.length === 2) {
        //let new_strr = strr[1] + strr[0]
        //return new_strr
    //} else {
        //let permuted_strr_1 = strr[0] + permute(strr.slice(1, 3));
        //let permuted_strr_2 = permute(strr.slice(0, 2)) + strr.slice(2, 3);
        //let permuted_strr_3 = permuted_strr_2[0] + permute(permuted_strr_2.slice(1, 3)); 
        //let permuted_strr_4 = permute(permuted_strr_2.slice(1, 3)) + permuted_strr_2[0];
        //let permuted_strr_5 = permuted_strr_4[0] + permute(permuted_strr_4.slice(1, 3));
        //list.push(permuted_strr_1, permuted_strr_2, permuted_strr_3, permuted_strr_4, permuted_strr_5);
        //return list
    //}
//}

//console.log(permute("abc"));