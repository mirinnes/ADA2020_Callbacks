/*  FALTA:
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.
 * Observaciones: 
 *  - Pensar en arrays dentro de arrays variable = [ ['dato1', 2, true], [], [] ]
 *  - Utilizar funciones de los arrays, find (o findIndex), map o for of
 *  - Utilizar nombres de variables y funciones representativas
 * 
 ************************************************/

 /***********************************************
 * HECHO:
 * 1. Hacer una función que guarde una persona
 *    en una lista de listas de datos de personas.
 *    Es decir, una lista con varias listas adentro.
 *    Deberia guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
 * 1b. Al ingresar nueva persona, validar que no 
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).
 *  2. Hacer una función que me devuelva la lista
 *    completa de personas.
 *  3. Hacer una función que me permita encontrar
 *    una persona por email.
 *  4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 *  5. Hacer una función para borrar personas por mail.
 * *************************************************
*/

// /////////////Parte Declaracion de Funciones

const newData = () => {
    /*Esta funcion es para que en el prompt dig "ingrese nombre"/"ingrese numero"/"ingrese email"
    NOTA: NO ANDA BIEN - Dice siempre "Nombre"
    */
    let arrVar = [``, ``, ``];
    arrVar = arrVar.map(element => {
        const info = [`Nombre:`, `Numero:`, `Email:`];
        element = prompt (`Ingese ${info[arrVar.indexOf(element)]}`);
        //console.log(element);
        return element;
    });
    //console.log ("Adentro de newData arrVar es:");
    //console.log(arrVar);
    return arrVar;
}

const addLista = (dataPers) => {
    validate(dataPers[0]);
    lista.push(dataPers);
}

const validate = (nombre) => {
    lista.forEach(element => {
        if (element[0] == nombre) throw new Error("El nombre ingrsado ya existe");
    });
}

const mostrarLista = () => {
    lista.forEach(element => {
        console.log(`${element}\n`);
   });
}

const buscarPorEmail = () => {
    let index;
    let busq = prompt(`¿Cuál email desea buscar?`);
    index = lista.findIndex(element => {
        return element[2] == busq;
    })
    return index;
}

const buscarPorNombre = () => {
    let busq = prompt("Ingrese el nombre a buscar:");
    console.log(`El nombre a buscar es ${busq}`);
    let nombreArr = [];
    lista.forEach(element => {
        console.log(`Estamos recorriendo el arreglo. Estamos en el nombre ${element[0]}`);
        let aux = element[0].includes(busq);
        console.log (`El resultado del includes es: ${aux}`);
        if(aux) {
            nombreArr.push(element[0]);
        }
        
    })
    console.log(`Los nombres que coinciden son ${nombreArr}`);
}

const borrarEmail = () => {
    let index = buscarPorEmail();
    let eliminado = lista.splice(index, 1);
    console.log(`La lista eliminada resulta:`);
    mostrarLista();

}


// ///////////////////////////// Parte de Ejecución del Programa:

const lista = [
    [`Carla`,`444`,`car@gmail.com`],
    [`Julieta`, `445`, `ju@gmail.com`],
    [`Camila`, `446`, `ca@gmail.com`]
   ];

let resp = "vacio";

alert(`Bienvenido al ingreso de datos en lista. Vamos a comenzar`);


do {
        console.log (`La lista que hay es:\n`);
        mostrarLista();
                
        resp = prompt(`¿Qué opcion desea hacer? (Agregar/Buscar/Borrar/Salir)`);
                
        switch (resp) {
            case "Agregar":
                let nuevaPersona = newData(); 
                console.log(`Ud desea agregar los siguientes datos: [${nuevaPersona}]`);
                addLista(nuevaPersona);
                console.log(`Los nuevos datos han sido agregados con exito.\nLa Lista actualizada se lee:\n`);
                break;
            case "Buscar":
                try {
                    let indice = buscarPorEmail();
                    let personaEncontrada = lista[indice][0];
                    console.log(`La persona encontrada por su email es: ${personaEncontrada}`);
                } catch(err) {
                    alert(`El email no se encuentra en la lista.`);
                }
                break;
            case "Borrar":
                try {
                    borrarEmail();
                } catch(err) {
                    alert(`El email no existe en la lista.`);
                }
                break;
            default: 
                alert(`Ud no ingreso ninguna opcion. Saliendo del programa`);
                resp="Salir";
                console.log(`La respuesta es: ${resp}`);
                break;

        }


    } while (resp !=="Salir");
















