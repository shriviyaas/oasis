document.addEventListener("DOMContentLoaded", function () 
{
    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");
    const usersDatabase = [
        {
            username: "shri",
            password: "1234"
        }
    ];
    loginButton.addEventListener("click", function () 
    {
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;
        const user = usersDatabase.find(user => user.username === usernameInput);
        if (!user) 
        {
            alert("User not found");
            return;
        }
        if (passwordInput === user.password)
        {
            alert("Login Successfull");
        } 
        else
        {
            alert("Invalid username or password");
        }
        loginForm.reset();
    });
});