function solution(n) {
    var answer = 0;
    let str = "";
    let num = n;
    
    while(num > 0) {
        str += num % 3;
        num = Math.floor(num / 3);
    }
    
    for (let i=0; i<str.length; i++) {
        answer += Number(str[i] * (3**(str.length-1-i)));
    }

    return answer;
}