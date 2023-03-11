//Preentrega1 "Cajero Automático"
let saldo= Number (
    prompt ("                              "+
    "Bienvenidos al Cajero Automático"+"\n"+
    "¿Cuánto dinero desea ingresar a la cuenta?"
    ) )

let opcion = Number (
prompt ("                              "+
"Bienvenidos al Cajero Automático"+"\n"+
"1. Depositar dinero a la cuenta"+"\n"+
"2. Extraer dinero de la cuenta"+"\n"+
"3. Consultar saldo en cuenta"+"\n"+
"4. Salir"
) )
let valor=0

function depositar(valor){
    return valor+saldo
}
function extraer(valor){
    if(saldo<valor){ 
    //El dinero a retirar no debe pasar de lo que hay en cuenta
        alert("No hay saldo en la cuenta")
        return saldo
    }else{
        return saldo-valor
    }
}
function consultar(saldo){
    alert(saldo)
}

while(opcion != 4){
    switch(opcion){
        case 1:
        valor=Number(prompt("Ingresar cantidad de dinero a depositar"))
       // console.log(depositar(valor))
        saldo=depositar(valor)
        break
        case 2:
        valor=Number(prompt("Ingresar cantidad de dinero a extraer"))
       // console.log(extraer(valor))
        saldo=extraer(valor)
        break
        case 3:
        saldo=depositar(valor)
        saldo=extraer(valor)
        consultar(saldo)
        break
    }

    opcion = Number (
        prompt ("                              "+
        "Bienvenidos al Cajero Automático"+"\n"+
        "1. Depositar dinero a la cuenta"+"\n"+
        "2. Extraer dinero de la cuenta"+"\n"+
        "3. Consultar saldo en cuenta"+"\n"+
        "4. Salir"
        ) )
}

