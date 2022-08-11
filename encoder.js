let s = "abz";
let t = 2;
encoder(s, t);
 function encoder(inputstring, repeatCount) {
   var array = new Array();
   var i = inputstring.length - 1;
   const last = inputstring[i];
   var b = last + 1;
   // console.log(b);
   const newstr = inputstring.slice(0, -1)
   inputstring = last + newstr;
   console.log(inputstring);
   var text = "";
   for (let index = 0; index < repeatCount; index++) {
      for (var f = 0; f < inputstring.length; f++) {
         var codeCharacter = inputstring.charCodeAt(f);
         if (codeCharacter === 122) {
            codeCharacter = 96;
            array[f] = codeCharacter;
         }
         if (codeCharacter === 90) {
            codeCharacter = 65;
            array[f] = codeCharacter;
         }
         else {
            codeCharacter++;
            array[f] = codeCharacter;
         }
      }
      text="";
      for (var i = 0; i < array.length; i++) {
         text = text+ String.fromCharCode(array[i]);
         inputstring=text;
      }
      console.log(inputstring);
   }
   
}