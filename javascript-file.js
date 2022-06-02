function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        window.confirm("Valid email address!");
        document.form1.text1.focus();
        return true;
    } else {
        window.confirm("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}