document.getElementById("loginBtn").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate a successful login (replace this with actual authentication logic)
    if (username === "jinesh@gmail.com" && password === "123456") {
        alert("Login successful!");
        // You can redirect to another page or perform other actions here
    } else {
        alert("Login failed. Please check your credentials.");
    }
});