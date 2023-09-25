$(document).ready(function() {

    $('#usuario, #pwd, #email, #pwdRepeat').on('keydown', function(e){
        prohibirTeclas(e);
    })


    $('#pwd').on('focus', function() {
        $('#tooltipPwd').show();
    })

    $('#pwd').on('blur', function() {
        $('#tooltipPwd').hide();
    });


    const elementoOjoCerradoPwd = document.getElementById('mostrarContrasena');

    elementoOjoCerradoPwd.addEventListener('click', (e) => {
        e.preventDefault();
        if(elementoOjoCerradoPwd.value === 'oculto'){
            const elementoImagen = document.getElementById('imgMostrarContrasena');
            elementoImagen.src = './assets/visible.png'
            const elementoInputPwd = document.getElementById('pwd');
            elementoInputPwd.type = 'text';
            elementoOjoCerradoPwd.value = 'visible';
        } else{
            const elementoImagen = document.getElementById('imgMostrarContrasena');
            elementoImagen.src = './assets/invisible.png';
            elementoOjoCerradoPwd.value = 'oculto'
            const elementoInputPwd = document.getElementById('pwd');
            elementoInputPwd.type = 'password';
        }
    });

    const elementoOjoCerradoPwdRepeat = document.getElementById('mostrarContrasenaRepeat');

    elementoOjoCerradoPwdRepeat.addEventListener('click', (e) => {
        e.preventDefault();
        if(elementoOjoCerradoPwdRepeat.value === 'oculto'){
            const elementoImagen = document.getElementById('imgMostrarContrasenaRepeat');
            elementoImagen.src = './assets/visible.png'
            const elementoInputPwd = document.getElementById('pwdRepeat');
            elementoInputPwd.type = 'text';
            elementoOjoCerradoPwdRepeat.value = 'visible';
        } else{
            const elementoImagen = document.getElementById('imgMostrarContrasenaRepeat');
            elementoImagen.src = './assets/invisible.png';
            elementoOjoCerradoPwdRepeat.value = 'oculto'
            const elementoInputPwd = document.getElementById('pwdRepeat');
            elementoInputPwd.type = 'password';
        }
    });


    $('#pwd').on('input', function(){
        if(validarContrasena()){
            $('#pwdRepeatMensaje').show();
            $('#pwdRepeatMensaje').text('Las contraseñas coinciden');
            $('#pwdRepeatMensaje').removeClass('text-gray-300');
            $('#pwdRepeatMensaje').addClass('text-green-300');
        } else{
            $('#pwdRepeatMensaje').show();
            $('#pwdRepeatMensaje').text('Las contraseñas no coinciden');
            $('#pwdRepeatMensaje').removeClass('text-green-300');
            $('#pwdRepeatMensaje').addClass('text-red-300');
        }
    })

    $('#pwdRepeat').on('input', function(){
        if(validarContrasena()){
            $('#pwdRepeatMensaje').show();
            $('#pwdRepeatMensaje').text('Las contraseñas coinciden');
            $('#pwdRepeatMensaje').removeClass('text-gray-300');
            $('#pwdRepeatMensaje').addClass('text-green-300');
        } else{
            $('#pwdRepeatMensaje').show();
            $('#pwdRepeatMensaje').text('Las contraseñas no coinciden');
            $('#pwdRepeatMensaje').removeClass('text-green-300');
            $('#pwdRepeatMensaje').addClass('text-red-300');
        }
    })

    const prohibirTeclas = (e) =>{
        if(e.keyCode >= 90 || e.keyCode <= 48 && e.keyCode != 8 && e.keyCode != 9){
            e.preventDefault();
            console.log('hola')
        }
    }


    
    const capturarCorreo = () =>{
        const elementoCorreo = document.getElementById('email');
        const elementoListaEmail = document.getElementById('emailList');


        if(elementoCorreo.value != ''){
            const correo = elementoCorreo.value + ' ' + elementoListaEmail.value;

            return correo;
        } else{
            return false;
        }
        
    }

    const validarContrasena = () =>{
        const elementoInputPwd = document.getElementById('pwd');
        const elementoInputPwdRepeat = document.getElementById('pwdRepeat');

        if(elementoInputPwd.value != '' && elementoInputPwdRepeat.value != ''){
            if(elementoInputPwd.value === elementoInputPwdRepeat.value) { 
                return true;
            }
            return false;
        } else{
            false;
        }

    }

    const validarUsuario = () =>{
        const usuario = document.getElementById('usuario').value;

        if(usuario.length <= 16){
            return usuario;
        } else{
            return false;
        }
        
    }
    $('#enviar').on('click', function(e){
        e.preventDefault()
        const correo = capturarCorreo();
        const validacion = validarContrasena();
        const usuario = validarUsuario()


    let validacionCompleta = true;

    if (!usuario) {
        $('#errorUsuario').removeClass('text-green-300');
        $('#errorUsuario').addClass('text-red-300');
        validacionCompleta = false;
    } else {
        $('#usuario').text('Máximo 16 Caracteres');
        $('#errorUsuario').addClass('text-green-300');
    }

    if (!validacion) {
        $('#pwdRepeatMensaje').show();
        $('#pwdRepeatMensaje').text('Ingrese una contraseña');
        $('#pwdRepeatMensaje').removeClass('text-green-300');
        $('#pwdRepeatMensaje').addClass('text-red-300');
        validacionCompleta = false;
    } else {
        $('#pwdRepeatMensaje').show();
        $('#pwdRepeatMensaje').text('Las contraseñas coinciden');
        $('#pwdRepeatMensaje').addClass('text-green-300');
    }

    if (!correo) {
        $('#errorEmail').show();
        $('#errorEmail').text('Ingrese un correo válido');
        $('#errorEmail').removeClass('text-green-300');
        $('#errorEmail').addClass('text-red-300');
        validacionCompleta = false;
    } else {
        $('#errorEmail').show();
        $('#errorEmail').text('Correo Válido');
        $('#errorEmail').removeClass('text-gray-300');
        $('#errorEmail').addClass('text-green-300');
    }

    if (validacionCompleta) {
        alert(`Registro exitoso! \n Nombre de usuario: ${usuario} \n Correo Electrónico: ${correo} \n Contraseña válida?: ${validacion}`);
    }

})
});