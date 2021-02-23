class Arquero{

    private nombre:string = "";
    private defensa = 0;

    constructor(nombre:string) {
        this.nombre = nombre;
        
    }
    getNombre():string { return this.nombre; };

    getDefensa():number { return this.defensa; };

    setdefensa() { this.defensa = Math.floor(Math.random()*10); };

    setNombre(nombre:string) { this.nombre = nombre; };

    atajar (tiroDelJugador:number,direccionTiro):boolean { 
        this.setdefensa();
        return tiroDelJugador > this.getDefensa()&& direccionTiro < 9? false : true;
          }

 
}

class Jugador {

    private nombre:string = "";
    private ataque = 0;
    private pieHabil:string = ""

    constructor(nombre:string, pieHabil:string) {
        this.nombre = nombre;
        this.pieHabil = pieHabil;
    }
    getNombre():string { return this.nombre; };

    getAtaque():number { return this.ataque; };

    setAtaque() { this.ataque = Math.floor(Math.random()*10+3); };

    setNombre(nombre:string) { this.nombre = nombre; };
    
    patear():number{
        let pieQuePatea= Math.floor(Math.random()*2); 
        let potenciaDeTiro= 0;
        this.setAtaque();
        potenciaDeTiro += pieQuePatea > 1? this.getAtaque():Math.floor(this.getAtaque()*0.8);
        return potenciaDeTiro;
    }
   

}

class Arco {

    private divisionesDelArco:Array<string>=[`Abajo al centro`,
                                             `Abajo izquierda`,
                                             `Abajo derecha`,
                                             `Medio al centro`,
                                             `Medio derecha`,
                                             `Medio izquierda`,
                                             `Arriba derecha`,
                                             `Arriba izquierda`,
                                             `Arriba al centro`,
                                             `al Palo derecho`,
                                             `al Palo izquierdo`,
                                             `al Travesaño`,
                                               ];
    constructor(){ 

    };
    getDivisiones():Array<string>{ return this.divisionesDelArco}; // no se si la voy a necesitar
    getPosicion():number{
        return Math.floor(Math.random()*this.divisionesDelArco.length);
    }
}
function aJugar(){ 
    const jugador = new Jugador("Jose","derecho");
    const arquero = new Arquero("Juan");
    const arco = new Arco();
    let goles = 0;
    let atajadas = 0;
    let texto = ``;
    while (goles<5 && atajadas<5 ){
        
        let patada = jugador.patear();
        let direccionDelTiro= arco.getPosicion();
        let atajada = arquero.atajar(patada,direccionDelTiro);
        console.log(`La patada fue de ${patada}`);
        console.log(`La direccion fue de ${direccionDelTiro}`);
        console.log(`la atajada fue de ${arquero.getDefensa()}`);
        console.log(`¿Atajo? ${atajada}`);
        if (atajada){
            texto = `                  Casi convierte el jugador ${jugador.getNombre()},
                    pero el arquero ${arquero.getNombre()} estaba ahi.
                    La pelota fue ${arco.getDivisiones()[direccionDelTiro]}. `
                    atajadas++
        } else {
            texto = `                  El jugador ${jugador.getNombre()} convierte el gol,
                    el arquero ${arquero.getNombre()} no pudo detener la pelota que
                    fue ${arco.getDivisiones()[direccionDelTiro]}. `
                    goles++;
        }
        console.log();
        console.log (texto + `El marcador esta en ${goles} goles`)
    } 
    texto= atajadas>goles ? `Gano ${arquero.getNombre()} ${atajadas}-${goles}`:`Gano ${jugador.getNombre()} ${goles}-${atajadas}`;
    console.log(texto);
}

aJugar();
