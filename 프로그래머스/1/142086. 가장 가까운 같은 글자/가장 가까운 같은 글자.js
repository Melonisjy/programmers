function solution(s) {
    let arr = [];
    var answer = [];
    
    for (let i=0; i<s.length; i++) {
        if (arr.includes(s[i])) {
            answer.push(arr.length - arr.lastIndexOf(s[i]));
        } else {
            answer.push(-1);
        }
        arr.push(s[i]);
    }
    return answer;
}