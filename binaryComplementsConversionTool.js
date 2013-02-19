/**
 * Binary conversion tool: binary<->one's complement <-> two's complement
 * @author: Antoine Dahan
 * @date 02.19.2013
 */
function calculate(form)	{
	
	var inputNumber = document.getElementById("inputNumber").value;
	var binary, ones, twos;
	
	if(!checkValues(inputNumber))	{
		if(inputNumber.length == 0)	{
			alert("No value specified for conversion");
		}
		else {
			alert("Invalid input in text box (only 1's and 0's permitted)");
		}
	}
	
	else if (document.getElementById("binary").checked)	{
		binary = inputNumber;
		ones = invert(inputNumber);
		twos = addOne(ones);
		alert("Binary: " + binary + "\nOne's Complement: " + ones +"\nTwo's Complement: " + twos);
	}
	
	else if(document.getElementById("onesComplement").checked) {
		ones = inputNumber;
		twos = addOne(inputNumber);
		binary = invert(inputNumber);
		alert("Binary: " + binary + "\nOne's Complement: " + ones +"\nTwo's Complement: " + twos);
	}
	
	else if(document.getElementById("twosComplement").checked) { 
		if(!(allZeros(inputNumber)))	{
			twos = inputNumber;
			ones = subtractOne(inputNumber);
			binary = invert(ones);
			alert("Binary: " + binary + "\nOne's Complement: " + ones +"\nTwo's Complement: " + twos);
		}
		else  {
			alert("Cannot calculate binary and one's complement of a two's complement value of " + inputNumber);
		}
	}
	
	else {
		alert("Please identify the value you input (binary, one's complement, or two's complement)");
	}
}
		
/**
 * Returns inverted value of valueToInvert
 * ex: 10001 ---> 01110
 */
function invert(valueToInvert)	{
	
	for(var i = 0; i < valueToInvert.length; i++)	{
		if(valueToInvert.charAt(i) == '0')	{
			valueToInvert = setCharAt(valueToInvert, i, '1');
		}
		else  {
			valueToInvert = setCharAt(valueToInvert, i, '0');
		}
	}
	
	return valueToInvert;
}

/**
 * Returns (valueToAddOneTo + 1)
 */
function addOne(valueToAddOneTo)	{
	for(var i = valueToAddOneTo.length - 1; i >=0; i--)	{
		if(valueToAddOneTo.charAt(i) == '0')	{
			valueToAddOneTo = setCharAt(valueToAddOneTo, i, '1'); 
			i++;
			
			while(i < valueToAddOneTo.length)	{
				valueToAddOneTo = setCharAt(valueToAddOneTo, i, '0');
				i++;
			}
			
			return valueToAddOneTo;
		}
	}
	
	return "1" + invert(valueToAddOneTo) + " <NOTE: EXTRA BIT ADDED!>";
}

/**
 * Returns (valueToSubtractOneFrom - 1)
 */
function subtractOne(valueToSubtractOneFrom)  {
	for(var i = valueToSubtractOneFrom.length - 1; i >=0; i--)	{
		if(valueToSubtractOneFrom.charAt(i) == '1')	{
			valueToSubtractOneFrom = setCharAt(valueToSubtractOneFrom, i, '0'); 
			i++;

			while(i < valueToSubtractOneFrom.length)	{
				valueToSubtractOneFrom = setCharAt(valueToSubtractOneFrom, i, '1');
				i++;
			}
			
			return valueToSubtractOneFrom;
		}	
	}
}

/**
 * Returns false if value contains character other than '0' or '1' 
 */
function checkValues(supposedBinaryValue)	{
	if(supposedBinaryValue.length != 0)	{
		for(var i = 0; i < supposedBinaryValue.length; i++)	{
			if(!(supposedBinaryValue.charAt(i) == '0' || supposedBinaryValue.charAt(i) == '1'))	return false;
		}
		
		return true;
	}
}

/**
 * Returns true if value is equal to 0 (all 0's)
 */
function setCharAt(string, index, character) {
    if(index > string.length-1) return string; //If invalid index.
    return string.substr(0,index) + character + string.substr(index+1);
}

/**
 * Returns true is value is equal to 0 (all 0's)
 */
function allZeros(binaryValue)	{
	for (var i = 0; i < binaryValue.length - 1; i++)	{
		if(binaryValue.charAt(i) == '1') return false;
	}
	return true;
}

		
