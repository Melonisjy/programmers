function solution(food) {
    var answer = '';
    
    let water = 0;
    let arr = [];
    for (let i=0; i<food.length; i++) {
        
        if (i===0) {
            water = food[i];
        } else {
            arr.push(Math.floor(food[i] / 2))
        }
    }
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i]; j++) {
            if (arr[i] > 0) {
                answer += i+1;
            }    
        }        
    }
    for (let i=0; i<water; i++) {
        answer += 0;
    }
    
    // arr.reverse();
    
    for (let i=arr.length-1; i>-1; i--) {
        for (let j=0; j<arr[i]; j++) {
            if (arr[i] > 0) {
                answer += i+1;
            }    
        }        
    }
    return answer;
}