module.exports = function toReadable (number) {
    let single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    
    function convert_hundreds(n) {
       return (n<1000 && n>=100) ? (single[Math.floor(n/100)]) + ' hundred ' + convert_dozens(n%100) : convert_dozens(n); 
    }
    
    function  convert_dozens (n) {
        if (n<10) {
            return single[n];
        }
        else if (n>=10 && n<20) {
            return teens[n-10];
        }
        else {
            return dozens[Math.floor(n/10)] + ' ' + single[n%10];
        }
    }

    function convert(n) {
        return (n===0) ? 'zero' : convert_hundreds(n);
    }

    return convert(number).trim();
}
