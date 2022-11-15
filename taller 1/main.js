addEventListener("DOMContentLoaded",e=>{
    let opcion = document.querySelector('.medio');
    let dist = document.querySelector('[name="dis"]')
    let rest = 0
    
    opcion.addEventListener("change", (e)=>{
        let seleccion = e.target.value
            if( seleccion == "kmc"){
            rest = 40
        }
        else{
            rest = 60
        }
    })


    let unidad = document.querySelector('.unidad')
    unidad.addEventListener("change", (e)=>{
        let seleccion = e.target.value
        if( seleccion == "km"){
            rest = 40
        }
        else{
            rest = 60
        }

    })

    let op = dist * rest
    let myform = document.querySelector("#myform");

    myform.addEventListener("submit", (e)=>{
        e.preventDefault()
        let result = document.querySelector(".rest")
        result.insertAdjacentHTML("beforeend",`
        <p>${rest}</p>
        `)
    })
    
})