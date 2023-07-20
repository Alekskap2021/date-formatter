# Formatters

Formatting data is easy than you think

## Installation

```bash
> npm i js-formatters
```

## Import

```javascript
// es6
import { dateFormatter } from 'js-formatters';

// es5
const { dateFormatter } = require('js-formatters');
```

## dateFormatter

The dateFormatter function enables language-sensitive date and time formatting.

```javascript
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(dateFormatter(date, { locale: 'en-US' }));
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

|     Param     |               Type               | default   |                                                                                                                    Description                                                                                                                    |
| :-----------: | :------------------------------: | --------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    locale     |        string \| string[]        | undefined | The locales argument must be either a [string containing a BCP 47 locale](https://datatracker.ietf.org/doc/html/rfc5646) or an array of such locales. If the locales argument is not provided or specified, the runtime's default locale is used. |
|    weekDay    | 'oneLetter' \| 'short' \| 'full' | undefined |                                                                                             Parameter responsible for displaying the day of the week                                                                                              |
|   timeZone    |   'city' \| 'country' \| 'GMT'   | undefined |                                                                                           Parameter responsible for the display format of the time zone                                                                                           |
|  isDateShort  |             boolean              | true      |                                                        Parameter responsible for the date display format. If false - the month will be displayed as a word, and the year will be 4 numbers                                                        |
| withShortTime |        true \| undefined         | undefined |                                                     Parameter responsible for the time display format. Displays time without seconds. Allowed to be used only if withFullTime was not passed                                                      |
| withFullTime  |        true \| undefined         | undefined |                                                      Parameter responsible for the time display format. Displays time with seconds. Allowed to be used only if withShortTime was not passed                                                       |
