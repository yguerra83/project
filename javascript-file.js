document.addEventListener("DOMContentLoaded", function () {
            fields.firstName = document.getElementById('firstName');
            fields.lastName = document.getElementById('lastName');
            fields.email = document.getElementById('email');
            fields.question = document.getElementById('question');
        }

        function isNotEmpty(value) {
            if (value == null || typeof value == 'undefined') return false;
            return (value.length > 0);
        }

        function isEmail(email) {
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            return regex.test(String(email).toLowerCase());
        }

        function fieldValidation(field, validationFunction) {
            if (field == null) return false;

            let isFieldValid = validationFunction(field.value)
            if (!isFieldValid) {
                field.className = 'placeholderRed';
            } else {
                field.className = '';
            }

            return isFieldValid;
        }