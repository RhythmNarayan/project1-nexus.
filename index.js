
function validation(){
    if (document.getElementById("fname").value == ""){
        document.getElementById("result").innerHTML="Enter your Full Name*";
        return false;
    }
    else if (document.getElementById("email").value == ""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if (document.getElementById("password").value == ""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if (document.getElementById("password").value.length < 8){
        document.getElementById("result").innerHTML="Password should be atleast 8 characters long*";
        return false;
    }
    else if (document.getElementById("checkbox").checked == false){
        document.getElementById("result").innerHTML="Accept the Terms and Conditions*";
        return false;
    }
    // else{
    //     validated();
    // }
}

// function validated() {
//     if (validation() == true){
//         window.location.href = "successful_signup.html";
//     }
// }