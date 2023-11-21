//Empieza formulario de contacto
let txtNombre = document.getElementById("from_name");
const btn = document.getElementById("btnEnviar");
let txtNumber = document.getElementById("Telefono");
let mensaje = document.getElementById("message");
let alertValidaciones = document.getElementById("alertValidaciones");
let email = document.getElementById("email_id");

function validarNombre(){
    if( txtNombre.value == null || txtNombre.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtNombre.value))) { 
        return false;
    }
    return true;
}//validarNombre

function telefono(){
    if( !(/^\d{10}$/.test(txtNumber.value)) || (txtNumber.value=="0000000000") ) { 
        return false;
    }
    return true;

}//funcion telefono

function validarMensaje(){
    if (mensaje.value==0){
        return false;
    }//mensaje 0
    return true;

}//validarMensaje

function validarCorreo(){
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (! validEmail.test(email.value)){
        return false;
    }
    return true;
}//validarCorreo
document.getElementById('form')
.addEventListener('submit',function(event){
    let isValid = true;
    event.preventDefault();

    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="solid thin green";
    txtNumber.style.border="solid thin green";
    email.style.border="solid thin green";
    mensaje.style.border="solid thin green";

    if (! validarNombre()){
        Swal.fire({title:"El campo nombre, es requerido",
        text: 'El nombre completo, sin bloques de espacios o números y carácteres especiales.',
        icon: 'error',
        confirmButtonColor: "#E4C247",
        confirmButtonText: 'Ok'
    }); 
        txtNombre.style.border="solid thick red";
        isValid = false;
    }//Nombre

    if (! telefono()){
        Swal.fire({title:"El campo telefono es requerido",
    text: 'Máximo 10 cifras',
    icon: 'error',
    confirmButtonColor: "#E4C247",
    confirmButtonText: 'Ok'
}); 
    txtNumber.style.border="solid thick red";
    isValid = false;
    }//telefono

    if (! validarCorreo()){
        Swal.fire({title:"El campo e-mail es requerido",
        text: 'Se requiere el siguiente formato: tu_correo@dominio.com',
        icon: 'error',
        confirmButtonColor: "#E4C247",
        confirmButtonText: 'Ok'
    }); 
        email.style.border="solid thick red";
        isValid = false;
    }//If correo 

    if (! validarMensaje()){
        Swal.fire({title:"El campo mensaje, es requerido",
    text: 'este campo no se puede ir vacío',
    icon: 'error',
    confirmButtonColor: "#E4C247",
    confirmButtonText: 'Ok'
}); 
    mensaje.style.border="solid thick red";
    isValid = false;
    }//validar mensaje

    if ((!validarNombre())&&(!validarCorreo()) && (!telefono())){
        Swal.fire({title:"Completa los campos obligatorios",
                   text: 'Campo de nombre, correo, contraseña, son requeridos',
                   icon: 'warning',
                   confirmButtonColor: "#E4C247",
                   confirmButtonText: 'Ok'});
       }//validar todos los campos
    
       if (isValid){
        Swal.fire({title:"envío exitoso",
        text: 'Gracias por tu interés, te contactaré pronto',
        icon: 'success',
        confirmButtonColor: "#E4C247",
        confirmButtonText: '¡ok, gracias!'
    });
       if (isValid){
        txtNombre.value="";
        email.value="";
        email.style.border="";
        txtNombre.style.border="";
        txtNumber.style.border="";
        txtNumber.value="";
        mensaje.value="";
        mensaje.style.border="";
       }
        
        }//isValid
      
   


    });//btn "enviar"
//Termina formulario de contacto
