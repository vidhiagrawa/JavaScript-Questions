// <!-- Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g -->


let splitting = (a) => {

    for(let i = 0; i < a.length; i++){
        // console.log(a[i])
        if( a[i] == a[0] ){
            console.log(a[i])
        }
        if ( a[i] == a[0] || a[i] == a[1] ){
            console.log(a[i])
        }
        
        
    }
    for(let j = 0; j < a.length; j++){
        if ( a[j] == a[0] || a[j] == a[1] || a[j] == a[2] ){
            console.log(a[j])
        }
        
    }
    
}
splitting("dog")



// let name = "dog"

//     for( let i = 0; i < 1; i++ ){
//     console.log(name[i])

//     for( let j = 0; j < 2; j++ ){
//         console.log(name[j])
        
//     }
//     for( let k = 0; k < name.length; k++ ){
//         console.log(name[k])
//     }
//     for( let l = 1; l < 3; l++ ){
//         console.log(name[l])
//     }
//     for( let m  = 2; m < 3; m++ ){
//         console.log(name[m])
//     }
// }



