//eleventh method
function firstLast6(array) {
//the function uses an array.
    if (array[0] == 6 || array[array.length - 1] == 6){
        //if the array at zero equals 6 or the last number equals 6, return true.
        return true;
    } else {
        return false;
    }

}

//twelfth method
function has23(array){
    //The array needs to have either 2 or 3 in it for it to be true.
    if(array[0] == 2 || array[0] == 3){
        return true;
        //If the array at zero equals 2 or 3 return true.
    }else if(array[1] == 2 || array[1] == 3){
        return true;
        //If the array at one equals 2 or 3 also return true.
    }
    return false;
}

//thirteen method
function fix23(array){
    if(array[0] == 2 && array[1] == 3){
        array[1] = 0;
        return array;
    }else if(array[1] == 2 && array[2] == 3){
        array[2] = 0;
        return array;
    }
    return array;
}

//fourteen method
function countYZ(str) {
    var count = 0;
    //Counter, starts at zero
    str = str.toLowerCase();
    //This turns the string to all lowercase.
    for(var i = 0; i < str.length; i++){
        //A for variable that goes from 0 to less than the length of the string.
        if(str[i] == " ") {
            //This tells the program, if there is space in the string, do the following action.
            if (str[i - 1] == "y" || str[i - 1] == "z") {
                //if the character before the space is a y or z, you add one to the count.
                count = count + 1;
            }
        }
    }
    if (str[str.length-1] == "y" || str[str.length-1] == "z") {
        //This is for the ones at the end, if the last character is a y or z, you add one to count.
        //It's string length minus 1 because an array starts at zero.
        count = count + 1;
    }
    return count;
}

//fifteen method
function endOther(str1,str2){
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        //turns both string1 and string2 to lowercase.
        var res1 = str1.substring(str1.length-str2.length, str1.length);
        var res2 = str2.substring(str2.length-str1.length, str2.length);
        //creating two new variables, res1 is a substring of str1.
        //res2 is a substring of str2.
        if(str1 == str2){
            //If the strings are the same text, return true.
            return true;
        }
        if(str1.length > str2.length && res1 == str2){
            //if str1 is longer than str2 and res1 is equal to str2, return true.
            return true;
        }
        if(str2.length > str1.length && res2 == str1){
            //if str2 is longer than str1 and res2 is equal to str1, return true.
            return true;
        }
        return false;
}

//sixteen method
function starOut(str){
    //Start with blank variable because n will be the new word.
    var n = "";
    for(var i = 0; i < str.length; i++){
        //for loop so it goes to every character.
        if(str[i]!="*"&& str[i-1] !="*"&& str[i+1] !="*"){
        //if i is not a star and the letters before and after aren't stars,
        //then you add the i that passed the tests to n.
            n = n + str[i];
        }
    }
    //return the new word.
    return n;
}

//seventeen method
function getSandwich(str){
    var n = "";
    //New variable.
    breadone = 0;
    breadtwo = 0;
    //Two parts, bread one and bread two.
    for(var i = 0; i<str.length; i++){
        //for variable that goes from zero to the length of the string.
        if(str.indexOf("bread") != str.lastIndexOf("bread")){
            //if
            breadtwo = str.lastIndexOf("b");
            //bread two is given a new value, the last occurrence of b.
            breadone = str.indexOf("d");
            //bread one is given the value, the first occurrence of d.
            n = str.substring(breadone+1,breadtwo);
            //n is given a new value, a substring of one value above breadone to breadtwo.
            //Must be in a substring because else you will be given the numerical value rather than the string.
        }
    }
    return n;
}

//eighteen method
function canBalance(arr){
    var balanceOne = 0;
    var balanceTwo = 0;
    for(var i = 0; i < arr.length; i++){
//for var that goes from 0 to the length og the array.
        balanceOne += arr[i];
//balance One is equal to whatever number the array is on.
        for(var a = i+1; a < arr.length; a++){
//for var that goes through a new set "a" a is whatever i is plus one.
            balanceTwo += arr[a];
//balanceTwo is equal to the number of a.
        }
        if(balanceOne == balanceTwo){
//If balanceOne is equal to balanceTwo, you return true.
            return true;
        }
        balanceTwo = 0;
//balanceTwo is reset to 0 for each i.
    }
    return false;
}

//nineteen method
function countClumps(arr){
    var clumps = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] && arr[i + 1] != arr[i + 2]) {
            clumps += 1;
        }
    }
    return clumps;
}

//twentieth method
function evenlySpaced(a,b,c){
    var arr = [a,b,c];
    arr.sort(function(a,b){return a-b});
    var biggest = arr[2];
    var middle = arr[1];
    var smallest = arr[0];

    var diffOne = biggest - middle;
    var diffTwo = middle - smallest;

    if(diffOne == diffTwo){
        return true;
    }
    return false;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6(true,false);
    document.getElementById("output").innerHTML += has23(true,false);
    document.getElementById("output").innerHTML += fix23(true,false);
    document.getElementById("output").innerHTML += countYZ(true,false);
    document.getElementById("output").innerHTML += endOther(true,false);
    document.getElementById("output").innerHTML += starOut(true,false);
    document.getElementById("output").innerHTML += getSandwich(true,false);
    document.getElementById("output").innerHTML += canBalance(true,false);
    document.getElementById("output").innerHTML += countClumps(true,false);
    document.getElementById("output").innerHTML += evenlySpaced(true,false);

}
