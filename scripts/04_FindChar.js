export function findChar(string, index){

    if(typeof(string) !== 'string' || !Number.isInteger(index)){
        return undefined;
    }
    if(index < 0 || index >= string.length) {
        return 'Incorrect index';
    }
    return string.charAt(index);
}