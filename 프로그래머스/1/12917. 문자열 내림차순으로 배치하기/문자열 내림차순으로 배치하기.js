function solution(s) {
    // 문자열을 배열로 변환하고, 아스키 코드 값을 기준으로 내림차순 정렬
    let arr = s.split("").sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
    
    // 배열을 다시 문자열로 변환하여 반환
    return arr.join("");
}
