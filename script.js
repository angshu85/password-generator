 
  
 const characterAmountRange = document.getElementById("characterAmountRange");
 const characterAmountNumber = document.getElementById("characterAmountNumber");
 const includeUppercaseElement = document.getElementById("includeUppercase");
 const includeNumberElement= document.getElementById("includeNumber");
 const includeSymbolsElement = document.getElementById("includeSymbols");
 const form = document.getElementById("passwordGeneratorForm");
 const passwordDisplay= document.getElementById("passwordDisplay");
 
 const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
 const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
 const NUMBER_CHAR_CODES= arrayFromLowToHigh(48, 57);
 const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
         arrayFromLowToHigh(58, 64)
       ).concat(
         arrayFromLowToHigh(91, 96)
       ).concat(
         arrayFromLowToHigh(123, 126)
       );
 
 characterAmountNumber.addEventListener("input", syncCharacterAmount);
 characterAmountRange.addEventListener("input",syncCharacterAmount);
 
 function syncCharacterAmount(e){
   const value = e.target.value;
   characterAmountNumber.value= value;
   characterAmountRange.value= value;
 
 }
 
 form.addEventListener("submit", function syncCharacterAmount(e) {
   e.preventDefault();
   const characterAmount = characterAmountNumber.value;
   const includeUppercase= includeUppercaseElement.checked;
   const includeNumber = includeNumberElement.checked;
   const includeSymbols = includeSymbolsElement.checked;
   
   generatePassword(characterAmount,includeUppercase,includeNumber,includeSymbols);
 })
 
 
 function arrayFromLowToHigh(low,high){
   const array= [];
   for (let i=low; i<=high; i++){
     array.push(i);
   }
   return array;
 }
 
 function generatePassword(characterAmount,includeUppercase,includeNumber,includeSymbols) {
   let charCodes = LOWERCASE_CHAR_CODES;
   if (includeUppercase) charCodes= charCodes.concat(UPPERCASE_CHAR_CODES);
   if (includeNumber) charCodes= charCodes.concat(NUMBER_CHAR_CODES);
   if (includeSymbols) charCodes= charCodes.concat(SYMBOL_CHAR_CODES);
 
   const passwordCharacters= [];
   for (let i=0; i<characterAmount; i++){
     const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
     passwordCharacters.push(String.fromCharCode(characterCode));
   }
   const Finalpassword = passwordCharacters.join("");
   passwordDisplay.textContent=  Finalpassword;
   
   return Finalpassword;
 }
 