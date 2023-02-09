module.exports = function toReadable (number) {
  const before20 = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  const doubleUnder20 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/;
  const getBefore20 = (n) => before20[Number(n)];
  const getDoubleUnder20 = (n) => doubleUnder20[n[0]] + ' ' + before20[n[1]];
  const num = Number(number);
    if (isNaN(num)) return '';
    if (num === 0) return 'zero';
  const numStr = num.toString();
    if (numStr.length > 9) {
      throw new Error('overflow');
    }
  const [, n1, n2, n3, n4, n5] = ('000000000' + numStr).substr(-9).match(regex);
  let str = '';
    str += n1 != 0 ? (getBefore20(n1) || getDoubleUnder20(n1)) + 'crore ' : '';
    str += n2 != 0 ? (getBefore20(n2) || getDoubleUnder20(n2)) + 'hundred ' : '';
    str += n3 != 0 ? (getBefore20(n3) || getDoubleUnder20(n3)) + 'thousand ' : '';
    str += n4 != 0 ? getBefore20(n4) + 'hundred ' : '';
    str += n5 != 0 && str != '' ? '' : '';
    str += n5 != 0 ? (getBefore20(n5) || getDoubleUnder20(n5)) : '';
  return str.trim();
}
