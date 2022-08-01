// Let

function checkPrime(prime) {
    let primeChecking = Math.sqrt(prime);
    let i = 2
    for ( i ; i <= primeChecking; i++ ) {
        if (n % i === 0) {
            return;
        }

    }
    return 1;
}

//Hàm vòng lặp
function checkPrimenumber() {
    const primeNumber = Number(document.getElementById("primeNumber").value);
    let primeArray = [];
    // Số nguyên tố là số chia dư 1
    // Nếu = 2 hoặc chia = 0 thì số đó không phải số nguyên tố
    
    if (primeNumber < 2) {
        alert(`Number ${primeNumber} is not a Prime Number. Please input another Number`);
    }

    let i = 2
    for ( i ; i <= primeNumber; i++) {
        if (checkPrime(i) === 1) {
            // Push vào mảng nếu chia ra dư 1
            // Đúng điều kiện của số nguyên tố
            primeArray.push(i);
        }
    }
    document.getElementById("primeResults").innerHTML = "Prime Number:" + " " + primeArray.join(", ")

}
checkPrimenumber();