// Input: an integer
// Processing:  calculate the sum of all the odd integers between 1 and n, inclusive
// Output: sum of all the odd integers between 1 and n, inclusive

function OddSum() {
    var candidate = parseInt(document.getElementById('integerBox').value);

    // calculate the sum of all the odd integers between 1 and n, inclusive
    var Oddsumm = 0;
    for (var Innum = 1;  Innum <= candidate;  Innum = Innum +2) {
        Oddsumm = Oddsumm + Innum ;
        }
    
    
    document.getElementById('outputDiv').innerHTML = Oddsumm;
}