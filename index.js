/*
Crear una promesa para devolver el factorial  de un numero 
comprendido entre 1 a 10
emplear async y await
*/

const empleados=[
    {
        id:1,
        nombre: 'Simon bolivar'
    },
    {
        id:2,
        nombre:'Juan Salgado'
    }
]

const  getFactorial = (id)  =>{
    return new Promise( (resolve, reject) =>{
        const empleado = empleados.find(e => e.id ===id)?.nombre;
        (empleado)
        ?resolve(empleado)
        :reject('El empleado no existe')
    })
}


const id= 0

getFactorial(id)
    .then(empleado => {
        console.log('El empleado: '+empleado)
    })
    .catch(err => console.log(err))