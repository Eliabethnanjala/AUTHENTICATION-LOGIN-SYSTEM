const signupForm = document.getElementById("signup-form");
if(signupForm){
    signupForm.addEventListener("submit",function (e){
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        localStorage.setItem("username",JSON.stringify({username,email,password}));
        document.getElementById("signupmessage").textContent="registered successfully!";
        document.getElementById("signupmessage").className="success";
        
    });
}
//Login form
const loginForm = document.getElementById("login-form");
if(loginform) {
    loginForm.addEventListener("submit",function (e){
        e.preventDefault();
        const username=document.getElementById("username").value;
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        const storeduser=JSON.parse(localStorage.getItem("username"));
        if(storeduser && storeduser.username===username && storeduser.email===email && storeduser.password===password){
            document.getElementById("loginmessage").textContent="login successful!";
            document.getElementById("loginmessage").className="success";
        }else{
            document.getElementById("loginmessage").textContent="invalid credentials";
            document.getElementById("loginmessage").className="error";
        }
    });
}
//reset password
const resetForm = document.getElementById("reset-form");
if(resetForm) {
    resetForm.addEventListener("submit",function (e){
        e.preventDefault();
        const email=document.getElementById("email").value;
        const newpassword=document.getElementById(newpassword).value;
        const confirmpassword = document.getElementById(confirm- password).value;
        const storeduser=JSON.parse(localStorage.getItem("username"));
        if(storeduser && storeduser.email===email){
            if(newpassword===confirm-password){
                storeduser.password=newpassword;
                localStorage.setItem("username",JSON.stringify(storeduser));
                document.getElementById("resetmessage").textContent="password reset successful!";
                document.getElementById("resetmessage").className="success";
            }else{
                document.getElementById("resetmessage").textContent="passwords do not match";
                document.getElementById("resetmessage").className="error";
            }
        }else{
                document.getElementById("resetmessage").textContent="email not found";
                document.getElementById("resetmessage").className="error";
            }
        });
    

}