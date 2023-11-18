function random (min,max)
{
    const r = Math.random() * (max - min) + min
    return r
}

let rand = random(1,50)
// console.log(rand)

let i = 0
while (i<10)
{
    console.log(Math.floor(random(1,50)))
    i++
}