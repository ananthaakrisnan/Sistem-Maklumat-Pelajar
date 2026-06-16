function isValidName(name){
    return name.trim().length >= 3;
}

function isValidUsername(username){
    return username.trim().length >= 3;
}

function isValidEmail(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function isValidPassword(password){
    return password.length >= 6;
}

// Export untuk Jest/Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidName,
        isValidUsername,
        isValidEmail,
        isValidPassword
    };
}
