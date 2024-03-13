const longestCommonPrefix = function(strs) {
    const firstStr = strs[0];
    for(let i = 0; i < firstStr.length; i++){
        const str = firstStr.slice(0,i+1);
        console.log(str);
        const isDiffrent = !strs.every(value => value.slice(0,i+1) === str);
        
        if(isDiffrent){
            return str.slice(0,i);
        }
        
    }
     
};