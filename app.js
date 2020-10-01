//variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');



//load event listeners
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', appInit);

    //validate the fields
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    //reset form
    resetBtn.addEventListener('click', resetForm);

    //submit form
    sendEmailForm.addEventListener('submit', sendEmail);

}


//functions
function appInit() {
    sendBtn.disabled = true;



}

//first step is to make validations.
function validateField() {
    let errors;

    //validate the length of the field
    validateLength(this);

    //validate the email
    if (this.type === 'email') {
        validateEmail(this);
    }
    //check for errors in all the fields
    errors = document.querySelectorAll('.error');
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (errors.length === 0) {
            sendBtn.disabled = false;
        }
    }
}

//validate length
function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//validate email
function validateEmail(field) {
    let emailText = field.value;
    //check for the @ symbol
    if (emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//reset the form
function resetForm(e) {
    e.preventDefault();
    sendEmailForm.reset();
    sendBtn.disabled = true;
}

//send email
function sendEmail(e) {
    e.preventDefault();

    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    //hide the spinner then show the image
    setTimeout(() => {

        spinner.style.display = 'none';

        //show the image
        document.getElementById('loaders').appendChild(sendEmailImg);

        //reset the form and remove the image
        setTimeout(() => {
            sendEmailForm.reset();
            sendEmailImg.remove();
            sendBtn.disabled = true;
        }, 3000);
    }, 4000);
}
