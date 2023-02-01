const submit_button=document.querySelector(".button");
const img2_click =document.querySelector("#mig2");


submit_button.onclick = () => {
    // submit_button.preventDefault;
    const fname= document.getElementById("fname").value;
    console.log(fname)
    const Email= document.getElementById("email").value;
    const password= document.getElementById("Password").value;

    localStorage.setItem("full_Name",fname);
    localStorage.setItem("Email",Email);
    localStorage.setItem("password",password);
    document.getElementById

    if(fname !== "" && Email !== "" && password !== ""){
        alert("good job You are registered");
        window.location.href="./index.html"
    }
    else
    {
        alert("oops! please fill  all the inputs");
        window.location.href="./index.html"
    
    }
    document.getElementById("img1").disabled = true; 
    
}
