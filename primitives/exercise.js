// Define a function named sum that takes two arguments
//    a (number)
//    b (number)
//
// Return the sum of these two arguments
function sum(a, b) {
  // YOUR CODE HERE
 return a + b;
}

// Define a function named product that takes two arguments
//    a (number)
//    b (number)
//
// Return the product of these two arguments
function product(a, b) {
  // YOUR CODE HERE
return a * b}
// Define a function named sumAndProduct that takes three arguments
//    x (number)
//    y (number)
//    z (number)
//
// Return the sum of the first two arguments multiplied by the third argument.
// For example, given 1, 2, and 5, then return 15.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
function sumAndProduct(x, y, z) {
  // YOUR CODE HERE
  return ((x+y)*z);}
//console.log((x+y)*y);


// Define a function named roundUp that takes one argument
//    decimal (number)
//
// Return the argument rounded up to the nearest integer
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
function roundUp(decimal) {
  // YOUR CODE 
  return (Math.ceil(decimal))
}


// Define a function named toFahrenheit that takes one argument
//    celsius (number)
//
// Return the argument converted to Fahrenheit rounded to the nearest integer.
// Use Google to find the formula.
function toFahrenheit(celsius) {
  // YOUR CODE HERE
  return Math.round((9/5) * celsius + 32);

}

// Define a function named areaOfCircle that takes one argument
//    radius (number)
//
// Return the area of a circle using that argument. Use Google to find the
// formula.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
function areaOfCircle(radius) {
  // YOUR CODE HERE
  return Math.PI * radius * radius
} 

// Define a function named areaOfRing that takes two arguments
//    outerRadius (number)
//    innerRadius (number)
//
// Return the area of a circular ring using these arguments. Use Google to find
// the formula.
function areaOfRing(outerRadius, innerRadius) {
  // YOUR CODE HERE
var innerRadius = Math.PI * innerRadius ** 2
var outerRadius = Math.PI * outerRadius ** 2
return outerRadius - innerRadius
}

// Define a function named greet that takes 2 arguments
//    firstName (string)
//    lastName (string)
//
// Return a string in the format 'Hello, Kelly Rippa!' using these arguments
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings
function greet(firstName, lastName) {
  // YOUR CODE HERE
  return ('Hello,' + " " + firstName + " " + lastName + "!")
}

// Define a function named toSentence that takes four arguments
//    word1 (string)
//    word2 (string)
//    word3 (string)
//    oxfordComma (boolean)
//
// If oxfordComma is true,
//    Return a string in the format "word1, word2, and word3."
// If oxfordComma is false,
//    Return a string in the format "word1, word2 and word3."
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators
function toSentence(word1, word2, word3, oxfordComma) {
  // YOUR CODE HERE
  if (oxfordComma) {
    return word1 + ',' + " " +word2 + "," + " " + "and" + " " + word3 + '.'
    } else{
      return word1 + ',' + " " +word2  + " " + "and" + " " + word3 + '.'
    }
}


// Define a function named toRoman that takes one argument
//    arabic (number)
//
// If the argument is less than 1
//    Return null
// If the argument is greater than 10
//    Return null
// Otherwise
//    Return the argument converted to a roman numeral string
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement

  function toRoman(arabic) {
    if (arabic < 1 || arabic > 10) {
    return null;
    } else{

      switch (arabic) {
        case 1:
          return  'I';
        case 2:
          return  "II";
        case 3:
          return  "III";
        case 4:
          return  "IV";
        case 5:
          return  "V";
        case 6:
          return  "VI";
        case 7:
          return  "VII";
          case 8:
            return  "VIII";
        case 9:
          return  "IX";
        case 10:
          return  "X";
      }
    }
  }


// Define a function toDolla that takes one argument
//    amount (number)
//
// Return the argument converted to a dollar currency string. For example, given
// 10, then return '$10.00'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function toDolla(amount) {
    return '$' + amount.toFixed(2)

 }



// Define a function named percentage that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the percentage of the first argument divided by the second. For
// example, given 1 and 4, then return '25.0%'.
function percentage(numerator, denominator) {
  var percentage = numerator * 100 / denominator;
  return percentage.toFixed(1) + '%';
}


// Define a function named isStrictlyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal and have the same type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using
//
// See https://dorey.github.io/JavaScript-Equality-Table/
function isStrictlyEqual(value1, value2) {
  if (value1 === value2){
    return true
}else{
  return false  
}
}


// Define a function named isLooselyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal regardless of type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
function isLooselyEqual(value1, value2) {
  if (value1 == value2) {
    return true
  }else{
    return false
  }
}


// Define a function named remainder that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the remainder of the first argument divided by the second. For
// example, given 4 and 3, then return 1.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
function remainder(numerator, denominator) {
  return (numerator % denominator)
}


// Define a function named isEven that takes one argument
//    integer (number)
//
// If the number is even
//    Return true
// Otherwise
//    Return false
//
// Hint: What number will give you a remainder of 0 if the argument is even?
function isEven(integer) {
  if (integer % 2 == 0) {
    return true
  }else{
    return false
    }
  }



// Define a function named isOdd that takes one argument
//    integer (number)
//
// If the number is odd
//    Return true
// Otherwise
//    Return false
function isOdd(integer) {
  if (integer % 2 == 0) {
    return false
  }else{
    return true
    }
  }


// Define a function named isVowel that takes one argument
//    letter (string)
//
// If the letter is a vowel
//    Return true
// Otherwise
//    Return false
//
// Treat 'y' as a consonant.
function isVowel(string) {
  var satan = 'y'
  return ("aeiouAEIOU".indexOf(string) !== -1);
};

  

// Define a function named largestOfThree which takes three arguments
//    value1 (number)
//    value2 (number)
//    value3 (number)
//
// Return the largest argument by value
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
function largestOfThree(value1, value2, value3) {
return Math.max(value1, value2, value3)
}


// Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length

// Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function longestOfThree(value1, value2, value3) {
var length1 = value1.length
var length2 = value2.length
var length3 = value3.length
if (length1 > length2 && length1 > length3){
  return value1
} else if (length2 > length1 && length2 > length3){
  return value2
}
else{
return value3
 }
}



//Fuck this shit. Why this shit is not working? Fuck! 
// now it works, fuck y. try to solve the above by using a loop next time (while or for) 


// Define a function named iceCreamPosition that takes two arguments
//    pieTemperature (string)
//    iceCreamFlavor (string)
//
// If iceCreamFlavor is 'cardamom'
//    Return 'not at all' immediately
// Otherwise
//    If pieTemperature is 'cold'
//      Return 'on top'
//    If pieTemperature is 'warm'
//      Return 'on the side'
// Otherwise
//    Return 'up to you'
function iceCreamPosition(pieTemperature, iceCreamFlavor) {
  var cardamon = 'cardamom'
  var temperature = 'cold'
  var put = 'on top'
  var not = 'not at all'
  var side = 'on the side'
  var temp1 = 'warm'
  var last1 = 'up to you'
  if (iceCreamFlavor === cardamon) {
    return not
  } else if (pieTemperature === temperature) {
    return put
  }
  else if (pieTemperature === temp1) {
  return side
} else {
  return last1
}
 
  }



// Define a function named isLeapYear that takes one argument
//    year (number)
//
// If the argument is a leap year
//    Return true
// Otherwise
//    Return false
//
// See: https://en.wikipedia.org/wiki/Leap_year#Algorithm
function isLeapYear(year) {
  // YOUR CODE HERE
  if  (year % 4!==0) {
    return false
  }
  if (year % 100 !==0) {
      return true
  }
  if (year % 400 !==0) {
       return false
  }
  return true
}





// Define a function named shout that takes one argument
//    message (string)
//
// Return the same argument but all in uppercase letters. For example, given
// 'Shut the front door', then return 'SHUT THE FRONT DOOR'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function shout(message) {
  return message.toUpperCase()
}


// Define a function named whisper that takes one argument
//    message (string)
//
// Return the same argument but all in lowercase letters and prefixed by
// 'shhh... '. For exaple, given 'GOLF TIME', then return "shhh... golf time"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function whisper(message) {
  return 'shhh... ' + (message.toLowerCase());
}


// Define a function named stopAt that takes two arguments
//   source (string)
//   stop (string)
//
// Return the source all the way up to the position where stop begins. For
// example, given 'how now brown cow' and 'brown', then return 'how now'.
//
// Hint: This will require a combination of 3 different steps
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
function stopAt(source, stop) {
var ottoman = source.indexOf(stop)
var turkey = source.substring(0, ottoman);
var empire = turkey.trim()
return empire

 }


// Define a function named capitalize that takes one argument
//    message (string)
//
// Return the argument with the first letter capitalized. For example, given
// 'oh, you', then return 'Oh, you'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
function capitalize(message) {
var devil = message.charAt(0).toUpperCase() + message.slice(1)
return devil
}


// Define a function named leftPad5 that takes one argument
//    word (string)
//
// If the argument's length is less than 5
//    Return the argument but prefixed with spaces until it's 5 characters long
// If the argument's length is 5 or more characters
//    Return the argument
function leftPad5(word) {
 var example = 5
 while (word.length < example) {
   word = ' ' + word
  }
return word
} 



// Define a function named superPicky that takes one argument
//    value (anything)
//
// If the argument is a string,
//    Return 'Thanks! Got it.'
// Otherwise
//    Return 'I wanted a string, but all I got was a stinking TYPE'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
function superPicky(value) {
var jamesdean = 'Thanks! Got it.'
var vtype = typeof value 
var pulp = 'I wanted a string, but all I got was a stinking ' + vtype
if (typeof value === 'string')  {
  return jamesdean
} else {
  return pulp
}
}



    // Define a function named calculateTaxRate that takes two arguments
//    salary (number from 1 to 74,900)
//    status (string that's either 'single' or 'joint')
//
// If the status is anything other than 'single' or 'joint'
//    Return a string that says 'Better call an accountant'
// If the salary is greater than 74,900
//    Return a string that says 'Better call an accountant'
// Otherwise
//    Return a string for the tax percentage they are in:
//       * single up to (and including) $9,225 => '10%'
//       * single above $9,225 => '15%'
//       * joint up to (and including) $18,450 => '10%'
//       * joint above $18,450 => '15%'
function calculateTaxRate(salary, status) {
var call = 'Better call an accountant'
var Single_Mike = 'single'
var Joint_Mike = 'joint'
var salary_Mike = 74900
var single_upto = '10%'
var mariotest = '10%'
var single_above = '15%'
var nicktest = '15%'
var single_amount = 9225
var joint_upto = 18450
if (status !== Single_Mike && status !== Joint_Mike) {
  return call
} else if (salary > salary_Mike) {
  return call
} else if (Single_Mike === status) {
       if (salary > single_amount) {
         return nicktest
       } else {
         return mariotest
       }
  }  else if (Joint_Mike === status) {
    if (salary > joint_upto) {
      return nicktest
    } else {
      return mariotest
   }
  }
}
  