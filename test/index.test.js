import packageDevide from '../index';

afterAll((done) => {
    done();
});

describe('Testing 14 CF', () => {
    test('13 CF', () => {
        expect(packageDevide([3, 5, 9], 13)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"number": 1, "pack": 3}),
                expect.objectContaining({"number": 2, "pack": 5})
            ])
        );
    });
});

describe('Testing 14 MB11', () => {
    test('14 MB11', () => {
        expect(packageDevide([2, 5, 8], 14)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"number": 1, "pack": 8}),
                expect.objectContaining({"number": 3, "pack": 2})
            ])
        );
    });
});

describe('Testing 10 VS5', () => {
    test('10 VS5', () => {
        expect(packageDevide([3, 5], 10)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"number": 2, "pack": 5})
            ])
        );
    });
});

describe('Testing 21 VS5', () => {
    test('21 VS5', () => {
        expect(packageDevide([3, 5], 21)).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"number": 3, "pack": 5}),
                expect.objectContaining({"number": 2, "pack": 3})
            ])
        );
    });
});
