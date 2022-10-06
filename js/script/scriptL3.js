let automobili = {
audi: ['70000', '2017', 'q7'],
bvw: ['50000', '2018', '330D'],
porsche: ['60000', '2016', 'Boxter'],
mercedes: ['100000', '2019', 'S400']
};

for (automobil in automobili) {
    let podaci_o_vozilu = automobili[automobil];
    let naziv_auta = automobil;
    // console.log(automobil+': '+podaci_o_vozilu);
    console.log(`${naziv_auta} model: ${podaci_o_vozilu[2]},
    godiste: ${podaci_o_vozilu[1]},
    cena: ${podaci_o_vozilu[0]},
    `);

}

let osoba = {
    ime: 'Aleksandar',
    prezime: 'Djuric',
    godine: 24,
    grad: 'Raca'
    };

    console.log(
    `ime: ${osoba.ime}
    prezime: ${osoba.prezime}
    godine: ${osoba.godine}
    grad: ${osoba.grad}`);


