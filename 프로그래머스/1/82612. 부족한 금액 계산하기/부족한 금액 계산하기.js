function solution(price, money, count) {
    let pay = 0;
    for (i=1; i<=count; i++) {
        pay += price * i
    }
    
    return money < pay ? pay - money : 0;
}