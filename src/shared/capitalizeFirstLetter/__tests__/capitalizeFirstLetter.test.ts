import fc from 'fast-check';
import { capitalizeFirstLetter } from '../index';

describe('CapitalizeFirstLetter properties', () => {
  it('should always not equal test string', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 5, maxLength: 10 }), (testString) => {
        expect(capitalizeFirstLetter(testString)).not.toEqual(testString);
      })
    );
  });

  it('should always return 1 symbol', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 5, maxLength: 10 }), (testString) => {
        const stringLength = testString.length;

        expect(capitalizeFirstLetter(testString).length).toEqual(stringLength - (stringLength - 1));
        expect(capitalizeFirstLetter(testString).length).toBeLessThan(testString.length);
        expect(capitalizeFirstLetter(testString)).toHaveLength(1);
      })
    );
  });

  it('should work only with lower case chars', () => {
    /** get only lower case chars */
    const stringFilter = (str: string): boolean => !str.charAt(0).search(/[a-z]/g);

    fc.assert(
      fc.property(fc.string({ minLength: 5, maxLength: 10 }).filter(stringFilter), (testString) => {
        expect(capitalizeFirstLetter(testString).charCodeAt(0)).not.toEqual(testString.charCodeAt(0));
      })
    );
  });

  it('should do not work with other chars', () => {
    /** get only no lower case chars */
    const stringFilter = (str: string): boolean => !str.charAt(0).search(/[^a-z]/g);

    fc.assert(
      fc.property(fc.string({ minLength: 5, maxLength: 10 }).filter(stringFilter), (testString) => {
        expect(capitalizeFirstLetter(testString).charCodeAt(0)).toEqual(testString.charCodeAt(0));
      })
    );
  });
});
