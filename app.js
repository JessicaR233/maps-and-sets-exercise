// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])

[1,2,3,4];

// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")

'ref'


// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// {
//     [1,2,3] : true,
//     [1,2,3] : false
// };


// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
function hasDuplicate(arr)  {
    const arrNew = new Set(arr);
    if (arr.length == arrNew.size) return true;
    return false;
};


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(str)    {
    const map = new Map();
    const vowel = 'aeiou';
    const strLowerCase = str.toLowerCase();
    for (char of strLowerCase)   {
        if (vowel.includes(char))   {
            if(map.has(char))   {
                let count = map.get(char);
                map.set(char, count+1);
            }
            else map.set(char, 1);
        }

    }
    return map;
};