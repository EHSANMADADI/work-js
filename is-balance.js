
var b = "({}{{}((({}[]";
var a="{}[()]";
isbalance(a);
isbalance(b);
 export function isbalance(input) {
     var result = false;
     let openp = 0;
     let opena = 0;
     let openb = 0;
     let closep = 0;
     let closea = 0;
     let closeb = 0;
     for (let i = 0; i < input.length; i++) {
          switch (input[i]) {
               case '(': openp++;
                    break;

               case '{': opena++;
                    break;

               case '[': openb++;
                    break;

               case ')': closep++;
                    break;

               case '}': closea++;
                    break;

               case ']': closeb++;
                    break;
          }
     }
     if (openp == closep && opena == closea && openb == closeb) {
          result = true;
     }
     console.log(result);
     return result;
}