let operaciones = []

const calc = () => {
    let ope = document.getElementById("pantalla").value
    
    let validDot = String(ope)

    if (validDot.includes("..")) {
        alert("warning")
    }

    const validar = eval(ope)
    

    if (validar !== undefined) { 
        let res = document.calculadora.print.value = eval(document.calculadora.print.value)
        const objOp = {
            ope,
            res
        }
        operaciones.push(objOp)
    } 
    let resHistorial = ""
    operaciones.forEach(operacion => {
        resHistorial+=`<li>${operacion.ope} = ${operacion.res}</li>`
    })

    document.getElementById("historial").innerHTML = resHistorial

}
const limpiarHistorial = () => {
    operaciones = []
    document.getElementById("historial").innerHTML = ""
    
}
const eliminarUltimo = () => {
    let ope = String(document.getElementById("pantalla").value)
    let res = ope.substring(0, ope.length-1)
    document.calculadora.print.value = res
}
const validarPunto = () =>{
    let actual = String(document.calculadora.print.value)
    if (actual.includes(".")) {
        return
    } else {
        document.calculadora.print.value+="."
    }
}