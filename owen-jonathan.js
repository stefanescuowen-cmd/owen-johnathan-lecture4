const prompt = require ("prompt-sync")();

//Lecture Code:

// let name = ["Mike", [["x", "y"], "b"], "John", "Steve"];

// console.log(name[1][0])

    // #1

        // let sum = 0
        // let arr = []
        // let n = Number(prompt("Length: "))
        //     for(let i=0; i<n; i++){
        //     let input = Number(prompt("Input a number: "))
        //     arr.push(input)
        //     sum = sum + input
        // }
        // console.log(arr)
        // console.log(sum)

    // #2

        // My code:

        // let fibLength = Number(prompt("How many Fibonacci numbers to generate? "));
        // let fib = [0, 1];
        //     for (let i = 2; i < fibLength; i++) {
        //     fib[i] = fib[i - 1] + fib[i - 2];
        // }
        // console.log("Fibonacci sequence: " , fib);
        // let index = Number(prompt("Enter index to see nth Fibonacci number: "));
        // console.log(`The number at index ${index} is:`, fib[index]);
        // function removeAt(array, index) {
        //     for (let i = index; i < array.length - 1; i++) {
        //     array[i] = array[i + 1];
        //     }
        // array.pop();
        // }
        // let testArr = ["cat", "dog", "fish", "bird"];
        // console.log("Before remove: ", testArr);
        // removeAt(testArr, 2);
        // console.log("After remove: ", testArr);
        // function insertAt(array, index, value) {
        //     for (let i = array.length - 1; i >= index; i--) {
        //     array[i + 1] = array[i];
        //     }
        // array[index] = value;
        // }
        // console.log("Before insert: ", testArr);
        // insertAt(testArr, 2, "bear");
        // console.log("After insert: ", testArr);

        // Group Code:

        // let previous = 0
        // let current = 1
        // let fib = [previous, current]
        // let input = Number(prompt("How many items in the seq: "))
        // for(let i = 0; i<input-2; i++){
        //     let next = previous + current
        //     fib.push(next)
        //     pevious = current
        //     current = next
        // }
        // console.log(fib)

    // #3
        
        // let item = []
        // console.log("Choose an option: \n\t1. Add item \n\t2. Search item \n\t3. Remove item \n\t4. Print the list\n\t5. Exit")
        // while(true){
        //     let input = Number(prompt("Choose an option: "))
        //     if(input === 1){
        //         let userIput = prompt("Item name: ").toLowerCase()
        //         if(item.indexOf(userIput) === -1){
        //             item.push(userIput)
        //             console.log("Item has been added!")
        //         }
        //         else{
        //             console.log("Item already exists!")
        //         }
        //     }
        //     else if(input === 2){
        //         let userIput = prompt("Item name: ").toLowerCase()
        //         if(item.indexOf(userIput) === -1){
        //             item.push(userIput)
        //             console.log("Item not found!")
        //         }
        //         else{
        //             console.log("Item Found!")
        //         }
        //     }
        //     else if(input === 3){
        //         let userIput = prompt("Item name to delete: ").toLowerCase()
        //         let index = item.indexOf(userIput)
        //         if(item.indexOf(userIput) === -1){
        //             item.push(userIput)
        //             console.log("Item not found!")
        //         }
        //         else{
        //             item.splice(index, 1)
        //             console.log("Item has been removed!")
        //         }
        //     }
            
        //     //My Code:

        //     else if (input === 4) {
        //         if (item.length === 0) {
        //         console.log("The shopping list is empty!");
        //         } else {
        //         console.log("Shopping List:");
        //         item.forEach((listItem, index) => {
        //         let capitalizedItem = listItem.charAt(0).toUpperCase() + listItem.slice(1);
        //         console.log(`${index + 1}. ${capitalizedItem}`);
        //         });
        //         }
        //     }

        //     //Group Code:

        //     // else if(input === 4){
        //     //     for(let i=0; i<item.length; i++){
        //     //         let obj = item[i]
        //     //         let intialChar = obj.slice(0, 1).toUpperCase()
        //     //         let remChar = obj.slice(1).toLowerCase()
        //     //         let fullChar = intialChar+remChar
        //     //         console.log(`${i+1}. ${fullChar}`)
        //     //     }
        //     // }
            
        //     else if(input === 5){
        //         console.log("Quit")
        //         break
        //     }
        //     else{
        //         console.log("Not a valid input!")
        //     }
        // }

     // #4

    //  let name = "Mike John Maria"
    //  let splitedName = name.split(" ")
    //  cosnole.log(splitedName)
    //  let joinedName = splitedName.join("_")
    //  console.log(joinedName)

    // Assignment:

    // #1

    function max(...numbers){
        let result = -Infinity;
        for(let number  of numbers){
        if(number > result) result = number;
        }
        return result
    }
    console.log (max( 4, 3 , 67, 1));

    // #2

    let uA = prompt("Enter in Numbers: ")
    let reverse = "";

        if (uA[0] === "-"){
        reverse = "-" +uA.slice(1).split("").reverse("").join("");
        }
        else 
        {
        reverse = uA.split("").reverse("").join("")
        }
    console.log("Your reversed number would be: ", reverse);

    