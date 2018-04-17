import { addMilliseconds, nextDate, previousDate, randomDate } from "../src";

test("that randomDate return a valid date", () => {
  expect(randomDate()).toBeInstanceOf(Date);
  expect(randomDate().getTime()).not.toBeNaN();
});

test("that addMilliseconds return a new date", () => {
  const d1 = randomDate();
  const d2 = addMilliseconds(d1, 0);
  expect(d1 === d2).toBe(false);
  expect(d1.getTime() === d2.getTime()).toBe(true);
  expect(randomDate().getTime() === randomDate().getTime()).toBe(false);
});

test("that addMilliseconds adds the amout of milliseconds", () => {
  const ref = randomDate().getTime();
  expect(addMilliseconds(ref, 0).getTime()).toBe(ref);
  expect(addMilliseconds(ref, 1).getTime()).toBe(ref + 1);
  expect(addMilliseconds(ref, 3).getTime()).toBe(ref + 3);
  expect(addMilliseconds(ref, -1).getTime()).toBe(ref - 1);
  expect(addMilliseconds(ref, -3).getTime()).toBe(ref - 3);
});

test("that nextDate adds one millisecond", () => {
  const ref = randomDate();
  expect(nextDate(ref).getTime()).toBe(ref.getTime() + 1);
});

test("that previousDate adds one millisecond", () => {
  const ref = randomDate();
  expect(previousDate(ref).getTime()).toBe(ref.getTime() - 1);
});
