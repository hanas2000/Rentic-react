class Validation {
    checkEmail = (email) => {
        // eslint-disable-next-line
        let validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validEmailRegex.test(email);
    };

    isEmpty = (str) => {
        return str.trim() === '';
    };

    checkMaxLength = (str, max) => {
        return str.length <= max;
    };

    checkMinLength = (str, min) => {
        return str.length >= min;
    };

    checkPasswordSymbols = (str) => {
        let regex = /^[\w!#$%&*+?@^]+$/;
        return regex.test(str);
    };

    checkMinCountUpperCase = (str, minCount) => {
        let regex = new RegExp('[A-Z]{' + minCount + ',}');
        return regex.test(str);
    };

    checkMinCountLowerCase = (str, minCount) => {
        let regex = new RegExp('[a-z]{' + minCount + ',}');
        return regex.test(str);
    };

    checkMinCountDigits = (str, minCount) => {
        let regex = new RegExp('\\d{' + minCount + ',}');
        return regex.test(str);
    };

    checkMinDate = (date, min) => {
        if (date.getFullYear() <= min.getFullYear() && date.getMonth() <= min.getMonth() && date.getDay() < min.getDay())
            return false;
        return true;
    };

    checkMinNumber = (number, min) => {
        if (number < min)
            return false;
        return true;
    };

    checkMaxNumber = (number, max) => {
        if (number > max)
            return false;
        return true;
    };
}

export default Validation;
