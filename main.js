class Concesionaria {
    constructor(){
        this.vehiculos=[];
    }

    agregarVehiculo(vehiculo){
        this.vehiculos.push(vehiculo);
    }
    
    mostrarVehiculos(){
        this.vehiculos.forEach( x =>console.log(x.toString()));
    }

    vehiculoMasCaro(){
    let indexAux;        
        for (const index in this.vehiculos) {
            if(indexAux){
                if(this.vehiculos[indexAux].getPrecio < this.vehiculos[index].getPrecio){
                    indexAux = index; 
                }
            }else{
                indexAux = index;
            }
        }

        return `Vehículo más caro: ${this.vehiculos[indexAux].getMarca} ${this.vehiculos[indexAux].getModelo}`        
    }

    vehiculoMasBarato(){
        let indexAux;        
            for (const index in this.vehiculos) {
                if(indexAux){
                    if(this.vehiculos[indexAux].getPrec > this.vehiculos[index].getPrecio){
                        indexAux = index; 
                    }
                }else{
                    indexAux = index;
                }
            }
    
        return `Vehículo más barato: ${this.vehiculos[indexAux].getMarca} ${this.vehiculos[indexAux].getModelo}`        
    }
    

    vehiculoQueContengaY(){
        const vehiculoEncontrado= this.vehiculos.find(x=>  x.getMarca.includes('Y') || x.getModelo.includes('Y') );
        return `Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculoEncontrado.getMarca} ${vehiculoEncontrado.getMarca} ${vehiculoEncontrado.precioString()}`;
    }

    PorPrecioMayorAMenor(){
        const vehiculoOrdenar = [...this.vehiculos];
        vehiculoOrdenar.sort((a,b)=> b.getPrecio - a.getPrecio);
        console.log("Vehículos ordenados por precio de mayor a menor:");
        vehiculoOrdenar.forEach(x=>console.log(`${x.getMarca} ${x.getModelo}`));
    }
}



class Vehiculo{
    constructor(marca,modelo,precio){
        this.marca=marca;
        this.modelo=modelo;
        this.setPrecio= precio;
    }

    get getMarca(){
        return this.marca;
    }

    get getModelo(){
        return this.modelo;
    }

    get getPrecio(){
       return this.precio;
    }
    set setPrecio(precio){
        this.precio = precio.toFixed(2);
    }
    precioString(){
        const precioString = this.precio.toString();
        return `$${precioString.replace('.',',')}`;
    }
}
class Auto extends Vehiculo{
    constructor(marca,modelo,puertas,precio){
        super(marca,modelo,precio)
        this.puertas=puertas;
    }


    get getPuertas(){
        return this.puertas;
    }

    toString(){
        return `Marca: ${this.getMarca} // Modelo: ${this.getModelo} // Cilindrada: ${this.getPuertas} // Precio: ${this.precioString()}`;
    }
}
class Moto extends Vehiculo{
    constructor(marca,modelo,cilindradas,precio){
        super(marca,modelo,precio)
        this.cilindradas= cilindradas;
    }

    get getCilindradas(){
        return this.cilindradas;
    }
    toString(){
        return `Marca: ${this.getMarca} // Modelo: ${this.getModelo} // Puertas: ${this.getCilindradas} // Precio: ${this.precioString()}`;
    }
}



const concesionaria= new Concesionaria();

concesionaria.agregarVehiculo(new Auto("Peugeot" ,"206" ,4, 200000.00));
concesionaria.agregarVehiculo(new Moto("Honda" ,"Titan" ,"125cc", 60000.00));
concesionaria.agregarVehiculo(new Auto("Peugeot" ,"208" ,4, 250000.00));
concesionaria.agregarVehiculo(new Moto("Yamaha" ,"YBR" ,"160cc", 80500.50));

concesionaria.mostrarVehiculos();
console.log("=========================================")
console.log(concesionaria.vehiculoMasCaro());
console.log(concesionaria.vehiculoMasBarato());
console.log(concesionaria.vehiculoQueContengaY());
console.log("=========================================")
concesionaria.PorPrecioMayorAMenor();
