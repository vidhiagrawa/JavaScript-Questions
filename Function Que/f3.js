// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'



    const name = (str) => {
        for( let i = 0; i < str.length; i++ ){
            // console.log(str[i])
            if( str[i] < str[0] ){
                const tag = i++
                console.log(tag)
            }
        }
    }

    name("Web Development Tutorial")

