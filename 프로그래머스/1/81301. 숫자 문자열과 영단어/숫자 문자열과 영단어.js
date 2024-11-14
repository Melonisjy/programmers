function solution(s) {
    var answer = "";
    let str = "";
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    let count = 0;
    
    
    for (let i=0; i<s.length; i++) {
        if (!isNaN(s[i])) {
           answer += s[i];
        } else {
            str += s[i];
            if (numbers.includes(str)) {
                if (str === "zero") {
                    answer += 0;
                } else if (str === "one") {
                    answer += 1;
                } else if (str === "two") {
                    answer += 2;
                } else if (str === "three") {
                    answer += 3;
                } else if (str === "four") {
                    answer += 4;
                } else if (str === "five") {
                    answer += 5;
                } else if (str === "six") {
                    answer += 6;
                } else if (str === "seven") {
                    answer += 7;
                } else if (str === "eight") {
                    answer += 8;
                } else if (str === "nine") {
                    answer += 9;
                }
                str = "";                
            }
        }
        
        
    }
    return parseInt(answer);
}