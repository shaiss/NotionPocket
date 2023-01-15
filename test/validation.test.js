const validation = require('../validation/validation');

describe('Validation functions', () => {
    it('should return true for valid save data', () => {
        const save = {
            "title": "Test Save",
            "url": "https://www.example.com"
        }
        expect(validation.validateSave(save)).toBe(true);
    });

    it('should return false for invalid save data', () => {
        const save = null;
        expect(validation.validateSave(save)).toBe(false);
    });
});
