$(document).ready(function() {
    let usuario = '';
    $('#usuario').on('keydown', function(e){

        if(e.keyCode >= 90 || e.keyCode <= 48 && e.keyCode != 8){
            e.preventDefault();
        }

        if(e.keyCode >= 48 && e.keyCode <= 90){
            console.log(e.key);
            usuario += e.key;
            console.log(usuario);
        } else if(e.keyCode === 8){
            usuario = usuario.slice(0, -1);
            console.log(usuario);
        }

        if(usuario.length > 0 && usuario.length < 17){
            $('#errorUsuario').removeClass('text-gray-300');
            $('#errorUsuario').addClass('text-green-300');
        } else if(usuario.length === 0){
            $('#errorUsuario').removeClass('text-green-300');
            $('#errorUsuario').removeClass('text-red-300');
            $('#errorUsuario').addClass('text-gray-300');
        } else{
            $('#errorUsuario').removeClass('text-green-300');
            $('#errorUsuario').removeClass('text-gray-300');
            $('#errorUsuario').addClass('text-red-300');
        }
        
    })
});