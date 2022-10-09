// legra guztiek espazio bera okupatu behar dute
document.body.style.fontFamily = "monospace";

// mapa sortu ( 14x25 )
let mapa = new Array(14);
 for (let i = 0; i < 14; i++) {
    mapa[i] = new Array(25);
 }

// mapa hasieratu 
for(let i=0; i<14; i++){
    for(let j=0; j<25; j++) {
        mapa[i][j]=0;
    }
}

// mapa bistaratu
for(let i=0; i<14; i++){
    let errenkada = []
    for(let j=0; j<25; j++) {
        errenkada.push(mapa[i][j])
    }
    document.write( errenkada.join(" ") + "<br>" )
}

// https://raw.githubusercontent.com/juananpe/promises-exercises/main/levels/level.json  JSON hau jaitsi, Zeharkatu eta tile bakoitza mapan sartu
// mapa bistaratu 

/*  Helburua

s s s s s s s s s s s s s s s s s s s s s s s s s
s s s s s s s s s s s s s s s s s s s s s s s s s
s s s s s s s s s s s s s s s s s s s s s s s s s
s s s s s s s s s s s s s s s s s s s s s s s s s
s s s s s s s s s s s s s s s s s s s s s s s s s
s s s s s s s s s s s s s s s s s s s s g g s s s
s s s s s s s s s s s s s s s s s s s s g g s s s
s s s s s s s s s s s s s s s s s s s s s s s s s
s s s s s s s s s s s s s s s s s s s s s s s s s
s s s s s g g s s s s s s s s s s s s s s s s s s
s s s s s g g s s s s s s s s s s s s s s s s s s
s s s s s s s s s s s s s s s s s s s s s s s s s
g g g g g g g g g g g g g g g g g g g g g g g g g
g g g g g g g g g g g g g g g g g g g g g g g g g

*/
