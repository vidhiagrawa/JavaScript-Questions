// <!--  Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw' -->


    let str = (a) => {
       let arrange = a.split("").sort().join("")
       console.log(arrange)
    }

    str("webmaster")
    
