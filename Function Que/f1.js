

    let char = ""
    function vowels(vow) {
        let count = 0;
        for( const char of vow ){
            if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
            count++;
            console.log( char )
        }
        }
        console.log(count)
    }
    vowels("aeiou")
