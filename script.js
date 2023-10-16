const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const successMessage = document.querySelector('.success-message')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    validateInputs();
});

function validName(value) {
    return value.trim() !== "" && /^[^\d]+$/.test(value);
}

function validLastName(value) {
    return value.trim() !== "" && /^[^\d]+$/.test(value);
}

function validEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function validPassword(str) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

function setError(input, message) {
    const inputElement = input.parentElement;
    const errorDisplay = inputElement.querySelector('.message');

    errorDisplay.innerText = message;
    inputElement.classList.add('error');
    inputElement.classList.remove('success');
}

function setSuccess(input, message) {
    const inputElement = input.parentElement;
    const errorDisplay = inputElement.querySelector('.message');

    errorDisplay.innerText = '';
    inputElement.classList.add('success')
    inputElement.classList.remove('error')
}

function inputReset(firstName, lastName, email, password) {
    firstName.parentElement.classList.remove('error');
    firstName.parentElement.classList.remove('success');

    lastName.parentElement.classList.remove('error');
    lastName.parentElement.classList.remove('success');

    email.parentElement.classList.remove('error');
    email.parentElement.classList.remove('success');

    password.parentElement.classList.remove('error');
    password.parentElement.classList.remove('success');
}


function validateInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setError(firstName, 'Required field')
    } else if (!validName(firstNameValue)) {
        setError(firstName, 'Invalid input')
    } else {
        setSuccess(firstName)
    }

    if (lastNameValue === '') {
        setError(lastName, 'Required field')
    } else if (!validName(lastNameValue)) {
        setError(lastName, 'Invalid input')
    } else {
        setSuccess(lastName)
    }

    if (passwordValue === '') {
        setError(password, 'Required field')
    } else if (!validPassword(passwordValue)) {
        setError(password, 'Invalid input')
    } else {
        setSuccess(password)
    }

    if (emailValue === '') {
        setError(email, 'Required field')
    } else if (!validName(emailValue)) {
        setError(email, 'Invalid input')
    } else {
        setSuccess(email)
    }

    const allInputsAreSuccessful = (
        validName(firstNameValue) &&
        validLastName(lastNameValue) &&
        validEmail(emailValue) &&
        validPassword(passwordValue)
    );

    if (allInputsAreSuccessful) {
        successMessage.style.display = 'block';

        form.reset();

        inputReset(firstName, lastName, email, password);
    } else if (!allInputsAreSuccessful) {
        successMessage.style.display = 'none';
    }
}