
// <!-- write a code whoich can give grades to the student acc to their scores. 90-100A,, 70-89B, 60-69C, 50-59D, 0-49f (can use prompt method too)  -->


    let marks = prompt("enter your marks :-");
    let grade;
    if( marks >= 90 && marks <= 100){
        grade = "A";
    } else if( marks >=70 && marks <= 89){
        grade = "B";
    }
     else if( marks >=60 && marks <= 69){
        grade = "C";
    }
     else if( marks >=50 && marks <= 59){
        grade = "D";
    }
     else if( marks >=0 && marks <= 49){
        grade = "E";
    }
    console.log("According to your marks your grades are :", grade);

