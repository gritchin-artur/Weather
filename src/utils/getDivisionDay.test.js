import getDivisionDay from './getDivisionDay';

describe('divides the day into am and pm', () => {
    test('23 --> "11 PM"', () => {
        expect(getDivisionDay(23)).toBe('11 PM');
    });
    test('6 --> "6 AM"', () => {
        expect(getDivisionDay(6)).toBe('6 AM');
    });
});
