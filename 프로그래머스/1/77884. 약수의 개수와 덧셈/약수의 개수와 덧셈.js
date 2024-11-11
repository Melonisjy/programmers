function solution(left, right) {
    let answer = 0;
    
    for (i=left; i <= right; i++) {
        let measure = 0;
        
        for (j=0; j <= i; j++) {
            if (i % j === 0) {
                measure ++;
            }
        }
        
        if (measure % 2 === 0) {
            answer += i
        } else {
            answer -= i
        }
    }
    
    return answer
}