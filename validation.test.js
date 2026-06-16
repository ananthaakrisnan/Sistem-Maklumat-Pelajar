const {
    isValidName,
    isValidUsername,
    isValidEmail,
    isValidPassword
} = require('./validation.js');

describe('Validation Functions', () => {
    
    // Test isValidName
    describe('isValidName', () => {
        test('should return true for valid name (3+ characters)', () => {
            expect(isValidName('Ahmad')).toBe(true);
            expect(isValidName('Ali Bakar')).toBe(true);
        });

        test('should return false for name less than 3 characters', () => {
            expect(isValidName('Ali')).toBe(true);
            expect(isValidName('Ab')).toBe(false);
        });

        test('should return false for empty name', () => {
            expect(isValidName('')).toBe(false);
        });
    });

    // Test isValidUsername
    describe('isValidUsername', () => {
        test('should return true for valid username (3+ characters)', () => {
            expect(isValidUsername('ahmad123')).toBe(true);
            expect(isValidUsername('user_name')).toBe(true);
        });

        test('should return false for username less than 3 characters', () => {
            expect(isValidUsername('ab')).toBe(false);
        });

        test('should return false for empty username', () => {
            expect(isValidUsername('')).toBe(false);
        });
    });

    // Test isValidEmail
    describe('isValidEmail', () => {
        test('should return true for valid email format', () => {
            expect(isValidEmail('test@example.com')).toBe(true);
            expect(isValidEmail('user123@mail.co.uk')).toBe(true);
        });

        test('should return false for invalid email format', () => {
            expect(isValidEmail('invalidemail')).toBe(false);
            expect(isValidEmail('test@.com')).toBe(false);
            expect(isValidEmail('@example.com')).toBe(false);
        });

        test('should return false for empty email', () => {
            expect(isValidEmail('')).toBe(false);
        });
    });

    // Test isValidPassword
    describe('isValidPassword', () => {
        test('should return true for password 6+ characters', () => {
            expect(isValidPassword('password123')).toBe(true);
            expect(isValidPassword('123456')).toBe(true);
        });

        test('should return false for password less than 6 characters', () => {
            expect(isValidPassword('12345')).toBe(false);
            expect(isValidPassword('abc')).toBe(false);
        });

        test('should return false for empty password', () => {
            expect(isValidPassword('')).toBe(false);
        });
    });

});
