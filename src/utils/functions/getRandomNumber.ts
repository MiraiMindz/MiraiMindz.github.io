export function getRandomNumber(min: number, max: number) {
    let _min: number = Math.ceil(min);
    let _max: number = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}
