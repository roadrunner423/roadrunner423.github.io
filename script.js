class hi{
    constructor(pass){  
        this.pass = pass;
    }
    checkPass(){
        if(this.pass == "1234"){
            return(true);
        }else{
            return(false);
        }
    }

}
let pass = prompt("Enter the password");
let allow = new hi(pass);
if(allow.checkPass()){
    window.location.replace("second.html");
} else {
    window.location.replace("index.html");
}
//text printing system
//document.getElementById("text").innerHTML = "<p>" + allow.checkPass() + "</p>"