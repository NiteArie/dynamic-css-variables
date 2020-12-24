const app = (() => {
    const _form = document.querySelector('.container__form');
    const _userInput = document.querySelector('.container__form__user');
    const _passwordInput = document.querySelector('.container__form__password');
    const _resetButton = document.querySelector('.container__form__reset');
    const _alert = document.querySelector('.container__form__alert');

    const _warningMessage = 'UserID/Password can not be blank.';
    const _errorMessage = 'UserID or Password is incorrect. Please try again.';
    const _successMessage = 'Login successfully.';
    const _initialColor = 'hsl(210, 10%, 80%)';
    const _warningColor = 'hsl(30, 80%, 70%)';
    const _errorColor = 'hsl(0, 70%, 60%)';
    const _successColor = 'hsl(120, 50%, 50%)';

    _resetButton.addEventListener('click', (event) => {
        resetForm();
    })
    
    _form.addEventListener('submit', (event) => {
        event.preventDefault();

        

        let _formFufill = true;
        let _username = _userInput.value;
        let _password = _passwordInput.value;

        if ( validEmptyUserInput(_username) ) {
            _formFufill = false;

        }

        if ( validEmptyPasswordInput(_password)) {
            _formFufill = false;
        }

        if ( _formFufill ) {
            hideAlert();
            if ( checkLogin(_username, _password) ) {
                updateInputBorderColor(_initialColor);
                updateAlertMessage(_successMessage);
                updateAlertColor(_successColor);
                showAlert();
            } else {
                updateInputBorderColor(_errorColor);
                updateAlertMessage(_errorMessage);
                updateAlertColor(_errorColor);
                showAlert();
            }  
        } else {
            updateInputBorderColor(_warningColor);
            updateAlertMessage(_warningMessage);
            updateAlertColor(_warningColor);
            showAlert();
        }
    })

    function validEmptyUserInput(user) {
        return user.length == 0;
    }

    function validEmptyPasswordInput(password) {
        return password.length == 0;
    }

    function checkLogin(username, password) {
        return username === 'testuser' && password === 'mypassword';
    }

    function updateAlertColor(color) {
        document.body.style.setProperty("--alertColor", color);
    }

    function updateInputBorderColor(borderColor) {
        document.body.style.setProperty("--inputBorder", borderColor);
    }

    function updateAlertMessage(message) {
        _alert.textContent = message;
    }

    function showAlert() {
        _alert.classList.remove('hidden');
    }

    function hideAlert() {
        _alert.classList.add('hidden');
    }

    function resetUserInput() {
        _userInput.value = '';
    }

    function resetPasswordInput() {
        _passwordInput.value = '';
    }

    function resetForm() {
        hideAlert();
        resetUserInput();
        resetPasswordInput();
        updateInputBorderColor(_initialColor);

    }


})();