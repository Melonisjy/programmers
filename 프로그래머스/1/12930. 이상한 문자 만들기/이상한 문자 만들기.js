function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    let str = '';
    
    for (i=0; i<arr.length; i++) {
        str = arr[i];
        for (j=0; j<str.length; j++) {
            if (j % 2 === 0) {
                answer += str[j].toUpperCase();
            } else {
                answer += str[j].toLowerCase();
            }
        }
        answer += " ";
    }
    answer = answer.substr(0, answer.length-1);
    return answer;
}