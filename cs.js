function legalAge(grade){

if(grade >= 94.5){
    console.log("1");
} else if (grade >=91.5){
    console.log("1.25"); 

} else if (grade >=89.5){
    console.log("1.25");  

} else if (grade >=86.5){
    console.log("1.75"); 
    
} else if (grade >=84.5){
    console.log("2");  

}else{
    console.log("you are not an adult");

}
}
computeGrade(85);

function login(username,password){
    if(username === "Axelle"){

        if(password ===1234){
            console.log("welcome user");
        }else{
            console.log("Invalid login Crendentials");
    }
} else {
    console.log("invalid user");
}
}

login("Axelle",123);