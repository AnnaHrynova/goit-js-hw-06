
const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const {
        elements: { email, password },
    } = evt.currentTarget;

    const user = {
        email: email.value,
        password: password.value,
    };

if (!email.value || !password.value) {
    alert("All fields must be filled!");
    return;
    };
    
    console.log(user);

    form.reset();
});
