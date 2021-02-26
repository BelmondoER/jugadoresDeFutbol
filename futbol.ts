class Humano{

    private nombre:string;

    constructor(nombre:string) {
        this.nombre = nombre;
        
    }
    getNombre():string { return this.nombre; };
 
}

export interface Division{
    sector:string[],
    valorDeDestreza:number[]
}

const divisionesDelArco:Division = {
    sector:[`Abajo al centro`,
    `Abajo izquierda`,
    `Abajo derecha`,
    `Medio al centro`,
    `Medio derecha`,
    `Medio izquierda`,
    `Arriba derecha`,
    `Arriba izquierda`,
    `Arriba al centro`,
    `Afuera`,
    ],
    valorDeDestreza:[9,5,4,9,7,8,2,2,8,99]
}  

class Arquero extends Humano{

    private defensa:number;

    constructor(nombre:string,defensa:number) {
        super(nombre);
        this.defensa = defensa;
        
    }
    getNombre():string { return `${super.getNombre()} el arquero`; };

    getDefensa():number { return this.defensa; };

    atajar(fuerzaYdireccion:number[],divisionesDelArco:Division):string{
        let defensa:number = (divisionesDelArco.valorDeDestreza[fuerzaYdireccion[1]]+ this.getDefensa())/2;
        return fuerzaYdireccion[0]> defensa ? "goool!!!": "atajooo!!"

    }
   
}

class Delantero extends Humano{

    private ataque:number;
    private pieHabil:string;

    constructor(nombre:string, ataque:number, pieHabil:string) {
        super(nombre);
        this.ataque = ataque;
        this.pieHabil = pieHabil;
        
    }
    getNombre():string { return `${super.getNombre()} el delantero`; };

    getAtaque():number { return this.ataque; };

    getPieHabil():string { return this.pieHabil; };

    patear(ladoQueRecibe:string):number[]{
        let fuerzaYdireccion: number[]=[];
        let direccionDelTiro: number = Math.floor(Math.random()*10);
        let penalizacion: number = ladoQueRecibe != this.pieHabil ? 0.6 : 1; 
        fuerzaYdireccion.push(penalizacion*this.getAtaque(),direccionDelTiro);
        return fuerzaYdireccion;
    }
    
}


function recibirPelota():string{ 
    let ladoQueRecibe:string = Math.floor(Math.random()*10) >4 ? `derecho`:`izquierdo`;
    return ladoQueRecibe;
} 

const delantero = new Delantero("Jose", 6, "derecho");
const arquero = new Arquero("Juan",6);
const ladoReceptor = recibirPelota();                               
const patada = delantero.patear(ladoReceptor);
const atajada = arquero.atajar(patada,divisionesDelArco);
console.log();
console.log();
console.log();
console.log(`La pelota llega a los pies del jugador ${delantero.getNombre()} desde el lado ${ladoReceptor}!!`);
console.log();
console.log(`Este patea con el pie ${delantero.getPieHabil()} con todas sus fuerzas hacia el arco!!!`);
console.log();
console.log(`El arquero realiza una maniobra para llegar a ${divisionesDelArco.sector[patada[1]]} y ...${atajada}`);