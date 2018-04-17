const ms = (v: Date | number | string): number =>
  typeof v === "number"
    ? v
    : (typeof v === "string" ? new Date(v) : v).getTime();

const min = ms("0000-01-01T00:00:00.000Z");
const max = ms("9999-12-31T23:59:59.999Z");

/**
 * @returns a new date with a random time between `0000-01-01T00:00:00.000Z` and `9999-12-31T23:59:59.999Z`.
 */
export const randomDate = () =>
  new Date(Math.floor(Math.random() * (max - min + 1)) + min);

/**
 * Add the specified number of milliseconds to the given date.
 * @param date the reference date
 * @param amount the amount of milliseconds to be added
 * @returns a new date with the milliseconds added to the reference date
 */
export const addMilliseconds = (date: Date | number | string, amount: number) =>
  new Date(ms(date) + amount);

/**
 * Add one millisecond to the given date.
 * @param date the reference date
 * @returns a new date with one millisecond added to the reference date
 */
export const nextDate = (date: Date | number | string) =>
  addMilliseconds(date, 1);

/**
 * Subtract one millisecond from the given date.
 * @param date the reference date
 * @returns a new date with one millisecond subtracted to the reference date
 */
export const previousDate = (date: Date | number | string) =>
  addMilliseconds(date, -1);
