let trDots = {
    a1: [+prompt('insert a1'), +prompt('insert a2')],
    b1: [+prompt('insert b1'), +prompt('insert b2')],
    c1: [+prompt('insert c1'), +prompt('insert c2')]
};

const DIVIDENUMBER = 2;

let cMiddle = {
    c1: ( trDots.a1[0] + trDots.b1[0] ) / DIVIDENUMBER,
    c2: ( trDots.a1[0] + trDots.b1[0] ) / DIVIDENUMBER
};

let checkMiddle = false;

if (trDots.c1[0] === cMiddle.c1) {
    checkMiddle = true;
} else {
    checkMiddle = false;
}

console.log(checkMiddle)

