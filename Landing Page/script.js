document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (fullName === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Registration successful! Welcome to PerfectJodi.com.");
            registrationForm.reset();
        }
    });
});
