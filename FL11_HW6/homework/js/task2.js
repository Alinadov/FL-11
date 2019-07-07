let triAngle = {
    a: +prompt('insert triangle first side'),
    b: +prompt('insert triangle second side'),
    c: +prompt('insert triangle third side')
};

let checkTriAngle = 'Triangle doesn’t exist';

if (triAngle.a === 0 || triAngle.b === 0 || triAngle.c === 0) {
    checkTriAngle = 'Triangle doesn’t exist';
} else if (isNaN(triAngle.a) || isNaN(triAngle.b) || isNaN(triAngle.c)) {
    checkTriAngle = 'Triangle doesn’t exist';
} else if ( triAngle.a === triAngle.b && triAngle.b === triAngle.c && triAngle.a === triAngle.c ) {
    checkTriAngle = 'Equivalent triangle';    
} else if ( triAngle.a === triAngle.b || triAngle.b === triAngle.c || triAngle.a === triAngle.c ) {
    checkTriAngle = 'Isosceles triangle';
} else {
    checkTriAngle = 'Normal triangle';
}

console.log(checkTriAngle);