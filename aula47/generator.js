function* geradora1(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora2(){
    yield* geradora1();
    yield 3;
    yield 4;
    yield 5;
}

const g = geradora2();
for (let val of g) console.log(val);