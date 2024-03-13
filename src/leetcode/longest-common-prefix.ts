const longestCommonPrefix = function(strs: Array<string>) {
    const firstStr = strs[0];
    let counter = 0;
    if(!firstStr.length){
        return '';
    }
    for(let i = 0; i < firstStr.length; i++){
        const str = firstStr.slice(0,i+1);
          if(strs.length === 1){
            return str;
        }
        const isDiffrent = !strs.every(value => value.slice(0,i+1) === str);
        counter++;
        if(isDiffrent){
            return str.slice(0,i);
        }
        if(counter === firstStr.length){
            return str;
        }

    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));