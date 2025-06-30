export function isEvenOrOdd(string){
    if(typeof(string) !== 'string'){
        return undefined;
    }
    if(string.length % 2 === 0){
        return 'Even';
    }
    return 'Odd';
};