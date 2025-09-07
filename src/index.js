module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) return ones[number];

  if (number < 100) {
    const ten = Math.floor(number / 10);
    const rest = number % 10;
    return rest ? `${tens[ten]} ${ones[rest]}` : tens[ten];
  }

  if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const rest = number % 100;
    return rest
      ? `${ones[hundred]} hundred ${toReadable(rest)}`
      : `${ones[hundred]} hundred`;
  }

  return 'Number out of range';
};
