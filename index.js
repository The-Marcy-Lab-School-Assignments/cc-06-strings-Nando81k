//write your code here
const reverseString = (str) => {
    let reversed = ""
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
        console.log(reversed)
    }
}

reverseString("Something");

const reverseZigZagString = (str) => {
    let reverseZigZag = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            reverseZigZag += str[i].toUpperCase();
        } else {
            reverseZigZag += str[i].toLowerCase();
        }
    }
    return reverseZigZag;
};

reverseZigZagString("Something");
