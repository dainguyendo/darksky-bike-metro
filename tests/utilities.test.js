import {isEmpty,determine} from '../app/js/utils/utilities';

test('Object is empty', () => {
  expect(isEmpty({})).toBe(true);
});

test('Object is not empty', () => {
  expect(isEmpty({ property: 'a prop' })).toBe(false);
});
