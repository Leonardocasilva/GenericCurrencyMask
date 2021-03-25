const languageCountry = 'en-EN';
const countryCurrency = 'USD';
const miliarDivision = ',';
const decimalDivision = '.';
const limiteValueCharachter = 8;

let input = '$10000000.25'
let output = '';

input = input.replace(/[\W_]/g, '');
input = input.length > limiteValueCharachter ? input.substring(0, limiteValueCharachter) : input;

if (input.length > 2) {
	input = input.substring(0, input.lastIndexOf(input.slice(-2))).concat(decimalDivision).concat(input.slice(-2));
  output = new Intl.NumberFormat(languageCountry, { style: 'currency', currency: countryCurrency }).format(input);
} else {
	output = new Intl.NumberFormat(languageCountry, { style: 'currency', currency: countryCurrency })
  .format(input.length === 2 ? `0${decimalDivision}${input}` : input.length === 1 ? `0${decimalDivision}0${input}` : '0')
}

console.log(output);
