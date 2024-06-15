// Write a recursive function to generate the nth Fibonacci number.
// console.log(fibonacci(6)); // Output: 8
function fibonacci(n){
    
    if (n<=0){
        return 0
    }
    else if(n==1){
        return 1
    }
    else{
        fib_array = [0, 1]
        for(let i = 2 ; i <= n+2; i++){
            fib_array.push(fib_array[i-2]+fib_array[i-1])    
        }
        return fib_array[n]
    }
}


// Write a recursive function to count the occurrences of a value in an array.
// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // Output: 3
