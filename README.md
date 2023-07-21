# js-formatters

Formatting data is easy than you think

## Installation

```bash
> npm i js-formatters
```

## Import

```javascript
// es6
import { dateFormatter, rangeFormatter } from 'js-formatters';

// es5
const { dateFormatter, rangeFormatter } = require('js-formatters');
```

# dateFormatter

The dateFormatter function enables language-sensitive date and time formatting.

```javascript
// dateFormatter(date: Date, options)

const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// The output format may differ depending on your
// default locale.
console.log(dateFormatter(date));
// expected output: "12/20/2020"

// Specify date and time format using options object
console.log(
  dateFormatter(date, {
    locale: 'en-GB',
    isDateShort: false,
    weekDay: 'full',
    withFullTime: true,
    timeZone: 'GMT',
  })
);
// Expected output "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## dateFormatter options

### locale

_default - undefined_\
_type - string | string [ ] | undefined_;

he locales argument must be either a [string containing a BCP 47 locale](https://datatracker.ietf.org/doc/html/rfc5646) or an array of such locales. If the locales argument is not provided or specified, the runtime's default locale is used.

```javascript
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));

console.log(dateFormatter(date, { locale: 'en-GB' }));
// Expected output "20/12/20"

console.log(dateFormatter(date, { locale: 'ch-CH' }));
// Expected output "20.12.20"
```

### weekDay

_default - undefined_\
_type - 'oneLetter' | 'short' | 'full' | undefined_;

Parameter responsible for displaying the day of the week

```javascript
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));

console.log(
  dateFormatter(date, {
    weekDay: 'full',
  })
);
// Expected output "Sunday, 12/20/20"

console.log(
  dateFormatter(date, {
    weekDay: 'short',
  })
);
// Expected output "Sun, 12/20/20"

console.log(
  dateFormatter(date, {
    weekDay: 'oneLetter',
  })
);
// Expected output "S, 12/20/20"
```

### timeZone

_default - undefined_\
_type - 'city' | 'country' | 'GMT' | undefined_;

Parameter responsible for the display format of the time zone

```javascript
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));

console.log(
  dateFormatter(date, {
    timeZone: 'city',
  })
);
// Expected output "12/20/20, Almaty Time"

console.log(
  dateFormatter(date, {
    timeZone: 'country',
  })
);
// Expected output "12/20/20, East Kazakhstan Time"

console.log(
  dateFormatter(date, {
    timeZone: 'GMT',
  })
);
// Expected output "12/20/20, GMT+6"
```

### isDateShort

_default - true_\
_type - boolean_

Parameter responsible for the date display format. If false - the month will be displayed as a word, and the year will be 4 numbers

```javascript
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));

console.log(
  dateFormatter(date, {
    isDateShort: true,
  })
);
// Expected output "12/20/20"

console.log(
  dateFormatter(date, {
    isDateShort: false,
  })
);
// Expected output "December 20, 2020"
```

### withShortTime

_default - undefined_\
_type - true | undefined _

Parameter responsible for the time display format. Displays time without seconds. **Allowed to be used only if withFullTime was not passed**

```javascript
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));

console.log(dateFormatter(date));
// Expected output "12/20/20"

console.log(
  dateFormatter(date, {
    withShortTime: true,
  })
);
// Expected output "12/20/20, 09:23 AM"
```

### withFullTime

_default - undefined_\
_type - true | undefined _

Parameter responsible for the time display format. Displays time with seconds. **Allowed to be used only if withShortTime was not passed**

```javascript
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));

console.log(dateFormatter(date));
// Expected output "12/20/20"

console.log(
  dateFormatter(date, {
    withFullTime: true,
  })
);
// Expected output "12/20/20, 09:23:16 AM"
```

# rangeFormatter

The rangeFormatter function allows you to get the distance to a date in the past or future.

```javascript
// rangeFormatter(date: Date | number, options)

console.log(rangeFormatter(new Date('2023-09-01T23:38:04')));
// expected output: "next month"

console.log(rangeFormatter(new Date('2025-09-01T23:38:04')));
// expected output: "in 2 years"

console.log(rangeFormatter(new Date('2022-09-01T23:38:04')));
// expected output: "11 months ago"

console.log(rangeFormatter(new Date('2023-07-01T23:38:04')));
// expected output: "3 weeks ago"

console.log(rangeFormatter(new Date('2023-04-01T23:38:04')));
// expected output: "4 months ago"

console.log(rangeFormatter(new Date('2023-07-23T23:38:04')));
// expected output: "in 2 days"

console.log(rangeFormatter(new Date('2023-07-21T16:38:04')));
// expected output: "in 1 hour"
```

## rangeFormatter options

### locale

_default - undefined_\
_type - string | string [ ] | undefined_;

The locales argument must be either a [string containing a BCP 47 locale](https://datatracker.ietf.org/doc/html/rfc5646) or an array of such locales. If the locales argument is not provided or specified, the runtime's default locale is used.

### futureStyle

_default - "when"_\
_type - 'when' | 'after_'

This option determines the output of the future tense format.

```javascript
const date = new Date('2023-09-01T23:38:04');
console.log(
  rangeFormatter(date, {
    futureStyle: 'after',
  })
);
// expected output: "in 1 month"

console.log(
  rangeFormatter(date, {
    futureStyle: 'when',
  })
);
// expected output: "next month"
```

### width

_default - "full"_\
_type - 'full' | 'shortest' | 'short'_;

This option determines whether words should be abbreviated in the output. Output depends on the locale passed

```javascript
const date = new Date('2023-09-01T23:38:04');
console.log(
  rangeFormatter(date, {
	locale: "ru-RU"
    width: 'full',
  })
);
// expected output: "в следующем месяце"

console.log(
  rangeFormatter(date, {
	locale: "ru-RU"
    width: 'short',
  })
);
// expected output: "в следующем мес."

console.log(
  rangeFormatter(date, {
	locale: "ru-RU"
    width: 'shortest',
  })
);
// expected output: "в след. мес."
```
