addEventListener("DOMContentLoaded",e=>{
    let myform = document.querySelector("#myform");
    let result = document.querySelector(".rest")
    let data = document.querySelector(`[name="year"]`)
    let fecha = data.value
    let mes = document.querySelector("option")
    let hoy = new Date()
    
    myform.addEventListener("submit", (e)=>{
        console.log(e)
        let forma =  hoy.getFullYear() - fecha ; 
        e.preventDefault()
        result.insertAdjacentHTML("beforeend",`
        <p>Tu eda es de${forma}</p>
        <p>Tu eda es de${mes.innerHTML}</p>
        `)
    })
})