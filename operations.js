let a = "-2 5 D + R";
operations(a);
export function operations(ops) {
     let result = null;
     var array = new Array();
     for (let index = 0; index < ops.length; index++) {
          if (ops[index] === '-') {
               var n = '-';
               index++;
               var n = n + ops[index];
               array.push(n);
          }
          else {
               switch (ops[index]) {
                    case 'D':
                         const i = array.length - 1;
                         var dobrabar = array[i];
                         dobrabar = 2 * dobrabar;
                         array.push(dobrabar);
                         break;
                    case 'R':
                         array.pop();
                         break;
                    case '+':
                         const r=array.length-1;
                         const j=array.length - 2;
                         var l = array[r];
                         var ls = array[j];
                         var sum= Number(l)+ Number(ls);
                         array.push(sum);
                    case ' ':
                         break;
                    default:
                         array.push(ops[index]);
                         break;
               }
          }
     }
     console.log(array);
     return result;
}