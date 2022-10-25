const calcular = () =>{
    const masa = document.querySelector('#masa')
    const volumen = document.querySelector('#volumen')
    let resultado = document.querySelector('#resultado')
    if (masa.value=="" || volumen.value=="") {
        
    }else{
        let calculo = masa.value/volumen.value
        resultado.value = calculo
    }
}

const buttonCalcular = document.querySelector('#calcular')
buttonCalcular.addEventListener('click',calcular)