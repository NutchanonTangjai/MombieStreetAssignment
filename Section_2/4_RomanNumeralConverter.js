function romanConvert(num){
    var result = "";;
    var romanArray = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    for (var i = 0; i < romanArray.length; i++) {
        //if the given number is greater than or equal to romanArray[i][0] (romanArray's number value)
        if(num>=romanArray[i][0]){
            //add romanArray[i][1] (romanArray's charater) into String result
            result += romanArray[i][1];
            //num - romanArray[i][0] (romanArray's number value)
            num -= romanArray[i][0];
            //reloop 1 Pos
            i--;
        }
    }
    return result;
}
console.log(romanConvert(16));
console.log(romanConvert(29));
console.log(romanConvert(99));
console.log(romanConvert(501));