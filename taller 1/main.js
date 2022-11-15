addEventListener("DOMContentLoaded",e=>{
    let opcion = document.querySelector('.cont');
    let valor = document.querySelector('[name="temp"]')
    let rest = 0
    
    opcion.addEventListener("change", (e)=>{
        let seleccion = e.target.value
            if( seleccion == "cen"){
            rest = (valor.value * 9/5) + 32 
        }
        else{
            rest = (valor.value - 32 ) * 5/9
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