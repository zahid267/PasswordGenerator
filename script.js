// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var ucChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lcChars = 'abcdefghijklmnopqrstuvwxyz';
var numChars = '0123456789';
var scChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword(){
  var result = "";
  var reqresult = "";   /// All Required characters
  var randomChars = "";
  var passlen = promptLen();
  
  var numok = promptCnum("numeric");
  if(numok){  // Select 1 numeric character
    result = getRandomString(1,result,numChars)
    randomChars += numChars;
  }
  var lcok = promptCnum("lowercase");
  if(lcok){   // Select 1 lower character
    result = getRandomString(1,result,lcChars)
    randomChars += lcChars;
  }
  var ucok = promptCnum("uppercase");
  if(ucok){   // Select 1 uppercase character
    result = getRandomString(1,result,ucChars)
    randomChars += ucChars;
  }
  var scok = promptCnum("special");
  if(scok){   // Select 1 special character
    result = getRandomString(1,result,scChars)
    randomChars += scChars;
  }
  if(randomChars === ""){
    alert("You should select at least one character category to generate password. No password is generated.\nTry again.");
    return "";
  }

  passlen = passlen - result.length;   /// find the password length for remaining characters (total characters - already selected)
  reqresult = result;
  result = "";
  /// now select remaining characters from the mixed categories of characters
  result = getRandomString(passlen,result,randomChars)

  /// now ramdomly insert the required characters in the result sctring at a random position
  var reqpos = Math.floor(Math.random() * result.length);
  result = result.slice(0, reqpos) + reqresult + result.slice(reqpos);

  //alert(reqresult+"\n"+result + "\n"+result.length);

  return result;


}
function promptLen(){
  var passlen = prompt("How many characters would you like your password to contain?\nEnter a number between 8 and 128.");
    if(passlen >= 8 && passlen<=128){
      return passlen;
    }else{
      alert("The Password length should be from 8 to 128. \nRe-enter the password length.");
      promptLen();
    }
}
function promptCnum(nameType){
  var sok = confirm("Click OK to confirm including "+nameType+" characters.");
  return sok;
}
function getRandomString(length,result,randomChars) {
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}