function racunanje_mesecne_rate(godine, vrsta_nekretnine) {

let meseci  = godine * 12;
let rata = nekretnine[vrsta_nekretnine]/meseci;
rata = rata.toFixed(2);
console.log('------------------')
// console.log(meseci + ' meseci.');
// console.log(rata + ' eura.');
console.log(`mesecna rata za ${vrsta_nekretnine} iznosi ${rata} na ${godine} godina`);
}

let nekretnine = {
    stan: 70000,
    kuca: 150000,
    plac: 30000
};

racunanje_mesecne_rate(10, 'stan');
racunanje_mesecne_rate(15, 'kuca');
racunanje_mesecne_rate(5, 'plac');



// //stan
// let godine = 15;
// let meseci  = godine * 12;
// let rata = nekretnine.stan/meseci;
// rata = rata.toFixed(2);

// console.log(meseci + ' meseci.');
// console.log(rata + ' eura.');
// console.log(`mesecna rata za stan iznosi ${rata} na ${godine} godina`);

// //---------------------------------------------

// // PLAC

// godinee = 5
// let mesecii  = godinee * 12;
// let rataa = nekretnine.plac/mesecii;
// rata = rataa.toFixed(2);
// console.log('------------------')
// console.log(mesecii + ' meseci.');
// console.log(rata + ' eura.');
// console.log(`mesecna rata za plac iznosi ${rataa} na ${godinee} godina`);

// //---------------------------------------------

// // kuca

// godineee = 10
// let meseciii  = godineee * 12;
// let rataaa = nekretnine.kuca/meseciii;
// rata = rataaa.toFixed(2);
// console.log('------------------')
// console.log(meseciii + ' meseci.');
// console.log(rataaa + ' eura.');
// console.log(`mesecna rata za kucu iznosi ${rataaa} na ${godineee} godina`);


