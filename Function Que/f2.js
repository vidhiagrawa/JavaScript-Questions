//  Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox ' 



    let num = "the quick brown fox"
    let upper = () => { 
            let capital = num.split(" ")
            let text;
            let cap = [];
            for( let i = 0; i < capital.length; i++ ){
                    cap += " "
                    text = capital[i] 
                    cap += text.charAt(0).toUpperCase() + text.slice(1)
                }
                console.log(cap)
    }
    upper()

    // let num = "the quick brown fox"
    // let upper = () => {
    //         let capital = num.split(" ")
    //         let text;
    //         let cap = "a";
    //         for( let i = 0; i < capital.length; i++ ){
    //             if( i == 0 ){
    //                 text = capital[i] 
    //                 cap = text.charAt(0).toUpperCase() + text.slice(1)
            
    //             }else{
    //                 cap += " "
    //                 text = capital[i] 
    //                 cap += text.charAt(0).toUpperCase() + text.slice(1)
    //             }
                
    //         }
    //         console.log(cap)
    // }
    // upper()
