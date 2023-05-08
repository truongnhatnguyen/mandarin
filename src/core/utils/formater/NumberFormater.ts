const formater = new Intl.NumberFormat();
export class NumberFormater {
 static format(value: number) {
  return formater.format(value);
 }
 static roundUp(num: number, precision = 2) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
 }
}
