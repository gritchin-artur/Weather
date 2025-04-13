import groupByDay from './groupByDate';

describe('groupByDay', () => {
    test('groups timestamps by date correctly', () => {
        const timestamps = [
            '2023-10-01T12:00:00Z',
            '2023-10-01T18:30:00Z',
            '2023-10-02T09:15:00Z'
        ];
        const expected = {
            '2023-10-01': ['2023-10-01T12:00:00Z', '2023-10-01T18:30:00Z'],
            '2023-10-02': ['2023-10-02T09:15:00Z']
        };
        expect(groupByDay(timestamps)).toEqual(expected);
    });

    test('handles empty array', () => {
        expect(groupByDay([])).toEqual({});
    });

    test('handles single timestamp', () => {
        const timestamps = ['2023-10-01T12:00:00Z'];
        const expected = {
            '2023-10-01': ['2023-10-01T12:00:00Z']
        };
        expect(groupByDay(timestamps)).toEqual(expected);
    });

    test('handles timestamps with different formats but same date', () => {
        const timestamps = [
            '2023-10-01T12:00:00Z',
            '2023-10-01T12:00:00.000Z',
            '2023-10-01T18:30:45.123Z'
        ];
        const expected = {
            '2023-10-01': [
                '2023-10-01T12:00:00Z',
                '2023-10-01T12:00:00.000Z',
                '2023-10-01T18:30:45.123Z'
            ]
        };
        expect(groupByDay(timestamps)).toEqual(expected);
    });
});
