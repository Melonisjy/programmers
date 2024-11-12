function solution(t, p) {
    let arr = [];
    var answer = 0;
    
    for (i=0; i<t.length-p.length+1; i++) {
        arr.push(t.substr(i, p.length));
    }
    
    for (i=0; i<arr.length; i++) {
        if (parseInt(arr[i]) <= parseInt(p)) {
            answer += 1;
        }
    }
    
    return answer;
}