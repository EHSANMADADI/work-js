var i = "aaaabbbbcc";
removeRepetitive(i);
export function removeRepetitive(instr) {
     let result = null;
     //filter  Repeated character
     let newstr = new Set(instr);
     console.log(newstr);
     /// convert to array
     result = [...newstr];
     console.log(result);
     ///convert to string
     result = result.join("");
     console.log(result);
     return result;
}
