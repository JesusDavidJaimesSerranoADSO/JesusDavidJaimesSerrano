addEventListener("DOMContentLoaded",e=>{
    let opcion = document.querySelector('.cont');
    let valor = document.querySelector('[name="moneda"]')
    let rest = 0
    
    opcion.addEventListener("change", (e)=>{
        let seleccion = e.target.value
            if( seleccion == "pad"){
            rest = valor.value / 4800
        }
        else{
            rest = valor.value * 4800
        }
    })
    
    let myform = document.querySelector("#myform");

    myform.addEventListener("submit", (e)=>{
        e.preventDefault()
        let result = document.querySelector(".rest")
        result.insertAdjacentHTML("beforeend",`
        <p>${rest}</p>
        `)
    })
    
})