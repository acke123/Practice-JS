//primer IF
// let prvi_broj = 5;
//     drugi_broj = 10;

    // if(prvi_broj < drugi_broj) {
    //     console.log('Prvi broj je manji od prvog')
    // } else {
    //     window.alert('Drugi je manji od prvog')
    // }


// Primer Switch
//let mesec = 6;
// switch(mesec) {
//     case 1:
//         console.log('januar');
//         break;
//     case 2:
//         console.log('februar');
//          break;
//     case 3:
//         console.log('mart');
//         break;
//     case 4:
//         console.log('april');
//         break;
//     case 5:
//         console.log('maj');
//         break;
//     case 6:
//         console.log('jun');
//         break;
//     case 7:
//         console.log('jul');
//         break;
//     case 8:
//         console.log('avgust');
//         break;
//     case 9:
//         console.log('septembar');
//         break;
//     case 10:
//         console.log('oktobar');
//         break;
//     case 11:
//         console.log('novembar');
//         break;
//     case 12:
//         console.log('decembar');
//          break;
// }

// primer WHILE
// let novcanice = 25 // 25 novcanica
//     vrednost_novcanice = 10; //10evra vrednost jedne
//     izbrojane_novcanice = 0;
//     while(novcanice > izbrojane_novcanice) {
//         izbrojane_novcanice++;
//         console.log(izbrojane_novcanice);
//     }
// console.log(izbrojane_novcanice * vrednost_novcanice);

//While sa nizom
 let novcanice = [10, 5, 20, 50, 17, 10, 100, 38, 7, 24, 13, 67];
 let broj_novcanica = novcanice.length;
// console.log('Broj izbrojanih novanica je: '+broj_novcanica);
//let brojac = 0;

// while(brojac < broj_novcanica) {
//     console.log('----------------------');
//     console.log('Novcanica na poziciji '+brojac+' ima vrednost: '+novcanice[brojac]);
//     brojac++;
// }

//Primer For petlje
// let ukupno_novca = 0;
// for(let brojac = 0; brojac < broj_novcanica; brojac++){
//     console.log('----------------------');
//     console.log('Novcanica na poziciji '+brojac+' ima vrednost: '+novcanice[brojac]);

//     ukupno_novca += novcanice[brojac];
// }
// console.log('Ukupno imamo ' + ukupno_novca + 'evra');

//skraceni FOR
// for(let brojac in novcanice){
//     console.log('Novcanica na poziciji '+brojac+' ima vrednost: '+novcanice[brojac]);
// }

// Foreach
// for(let novanica of novcanice) {
//     console.log(novanica);
// }
// let count = 0;
// let automobili = ['audi','bmw','mecedes','peugeot']
// for(let automobil of automobili){
//     if(automobil === 'peugeot') {
//         console.log(automobil);
//         count = count + 1;
//         }
//     }
//     if(count == 0){
//         console.log('Nema pezoa u automobilima :(');
//     }