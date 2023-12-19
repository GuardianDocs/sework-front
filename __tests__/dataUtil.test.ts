import { convertDateToZonedDateTime, convertZonedDateTimeToDate } from '@/utils/dateUtil';

describe('convertDateToZonedDateTime', () => {
  it('should convert a date string to a zoned date time string', () => {
    const dateString = '2021-01-01';
    const expected = '2021-01-01T00:00:00.000Z';
    const actual = convertDateToZonedDateTime(dateString);
    expect(actual).toEqual(expected);
  });
});

describe('convertZonedDateTimeToDate', () => {
  it('should convert a zoned date time string to a date string', () => {
    const zonedDateTimeString = '2021-01-01T00:00:00.000Z';
    const expected = '2021-01-01';
    const actual = convertZonedDateTimeToDate(zonedDateTimeString);
    expect(actual).toEqual(expected);
  });
});
