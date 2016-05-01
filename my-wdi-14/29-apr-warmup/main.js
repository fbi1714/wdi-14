var isLeapYear = function(num){

 if ( num%4 === 0)
 {
  if (num%100 === 0)
  {
    if ( num%400 !== 0)
    {
    return "false";
    }
    if ( num%400 === 0)
    {
    return "true";
    }
  }
  if ( num%100 !== 0)
  {
    return "true";
  }
 }
 if ( num%4 !== 0)
 {
    return "false";
 }

};

console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
