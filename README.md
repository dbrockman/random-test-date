# random-test-date

Tiny util to create random date objects in tests.

```ts
import {
  addMilliseconds,
  nextDate,
  previousDate,
  randomDate
} from "random-test-date";

// Returns a new date with a random time between `0000-01-01T00:00:00.000Z` and `9999-12-31T23:59:59.999Z`.
const date_1 = randomDate();

// date_2 is a new date 10 milliseconds after date_1
const date_2 = addMilliseconds(date_1, 10);

// date_3 is a new date 10 milliseconds before date_1
const date_3 = addMilliseconds(date_1, -10);

// date_4 is a new date 1 millisecond after date_1
// nextDate is just an alias for addMilliseconds(date, 1)
const date_4 = nextDate(date_1);

// date_5 is a new date 1 millisecond before date_1
// previousDate is just an alias for addMilliseconds(date, -1)
const date_5 = previousDate(date_1);
```
