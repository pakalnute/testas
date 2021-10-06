//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

class grybai {
    constructor(tipas) {
        this.tipas = tipas;
    }
}

let g1 = new grybas('baravykas');
let g2 = new grybas('umede');
let g3 = new grybas('lepsis');
console.log(g1);
console.log(g2);
console.log(g3);