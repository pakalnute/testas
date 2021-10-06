//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

class grybai {
    constructor(tipas) {
        this.tipas = tipas;
    }
}

let g1 = new grybai('baravykas');
let g2 = new grybai('umede');
let g3 = new grybai('lepsis');
console.log(g1);
console.log(g2);
console.log(g3);