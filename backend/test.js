const coucou = 'coucou';

function coucoutest() {
    const coucou2 = coucou;

    console.log(coucou2);

    return coucou2;
}

coucoutest();

// ERROR
console.log(coucou2);

function coucoutest2() {
// ERROR
    console.log(coucou2);
}

coucoutest2();

function coucoutest3() {
    const coucou6 = coucoutest();

    // ERROR
    console.log(coucou2);

    console.log(coucou6);
}

coucoutest3();
