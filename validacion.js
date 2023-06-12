let correo=document.getElementById("email")
let contrasenia=document.getElementById("password")
let confirmacion=document.getElementById("confirm")
let f=document.getElementById("formulario")
let error=document.getElementById("errores");
let contenedorF=document.getElementById("f");

f.addEventListener('submit', (e)=>{
    e.preventDefault();
    let patronCorreo=/^\w+@\w+\.\w{2,}(\.\w+)*$/;
    let flag=false;
    error.innerHTML=""; 

    let elem=f.querySelectorAll('input');
    elem.forEach(i=>{
        i.classList.remove('no');
    })
    
    if(correo.value==""||!patronCorreo.test(correo.value)){
        flag=true
        let li=document.createElement("li");
        li.innerHTML="Error en el correo eletronico"
        error.appendChild(li)
        correo.classList.add('no');
    }

    if(contrasenia.value==""){
        flag=true
        let li=document.createElement("li");
        li.innerHTML="Coloque la contraseña"
        error.appendChild(li)
        contrasenia.classList.add('no');
    } else if(contrasenia.value.length<8){
        flag=true
        let li=document.createElement("li");
        li.innerHTML="La contraseña debe ser de al menos 8 caracteres"
        error.appendChild(li)
        contrasenia.classList.add('no');
    }
    
    if(confirmacion.value==""){
        flag=true
        let li=document.createElement("li");
        li.innerHTML="Repita su contraseña"
        error.appendChild(li)
        confirmacion.classList.add('no');
    } else if(contrasenia.value!==confirmacion.value){
        flag=true
        let li=document.createElement("li");
        li.innerHTML="Las contraseñas deben ser iguales"
        error.appendChild(li)
        confirmacion.classList.add('no');
    }

    if(!flag){
        error.innerHTML="";
        let usuario=correo.value
        f.reset()
        f.classList.add('hide')
        
        let aviso= document.createElement('div')
        aviso.classList.add('aviso')
        
        let text= document.createElement('h1')
        text.innerHTML="La cuenta ha sido creada"

        let cuenta=document.createElement('h3')
        cuenta.innerHTML=usuario

        let r= document.createElement('button')
        r.textContent="Volver a crear"

        aviso.appendChild(text)
        aviso.appendChild(cuenta)
        aviso.appendChild(r)
        contenedorF.appendChild(aviso)

        r.addEventListener('click',()=>{
            aviso.classList.add('hide')
            f.classList.remove('hide')
            correo.focus()
        })
    }
})