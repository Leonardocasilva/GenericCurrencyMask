
/// languageCountry 	- Meta charset used on your country
/// countryCurrency 	- Currency abreviation used on your country
/// miliarDivision 	- Can be dot or comma, use based on your country
/// decimalDivision 	- Can be dot or comma, use based on your country
/// limiteValueCharachter - How much digits do you want allow on request
CurrencyMask('en-EN', 'USD', ',', '.', 8, '0.01');

CurrencyMask (lc, cc, md, dd, lvc, valueInput) => {
	const languageCountry = lc;
	const countryCurrency = cc;
	const miliarDivision = md;
	const decimalDivision = dd;
	const limiteValueCharachter = lvc;

	let input = '0.00'
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
	
	return output;
}
