addEventListener("DOMContentLoaded",e=>{
    let und = document.querySelector('.unidad_arroz');
    let more = document.querySelector('.add')
    let cant_arroz = document.querySelector('[name="arroz"]')
    let prep = 0
    let add = ""
    
    und.addEventListener("change", (e)=>{
        let seleccion = e.target.value
            if( seleccion == "kg"){
                prep = cant_arroz.value * 1000
                console.log(prep)
            }
            else{
                prep = cant_arroz.value
            }
    })
    
    more.addEventListener("change", (e)=>{
        let seleccion = e.target.value
        if( seleccion == "pollo"){
            add = seleccion
        }else if (seleccion == "verduras"){
            add = seleccion
        }else{
            add = seleccion
        }
    })
    let calcular = 50 * prep
    let myform = document.querySelector("#myform");

    myform.addEventListener("submit", (e)=>{
        e.preventDefault()
        let result = document.querySelector(".rest")
        result.insertAdjacentHTML("beforeend",`
        <p>${calcular}</p>
        `)
    })
    
})