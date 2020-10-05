module.exports = function reverse(num){
    let str = String(Math.abs(num));
    num = Number(str.split("").reverse().join(""));
    return(num);
   }
