window.addEventListener('load', () => {
    const form = document.querySelector('#formularioRegistro')
    const usuario = document.getElementById('nombres')
    const apellidos = document.getElementById('apellidos')
    const email = document.getElementById('correo')
    const pass = document.getElementById('contrasena')
    const passConfirma = document.getElementById('confirmarContrasena')
    const edad = parseInt(document.getElementById('edad'))

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validaCampos();
    })

    const validaCampos = () => {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const apellidosValor = apellidos.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const passConfirmaValor = passConfirma.value.trim()
        const edadValor = edad.value

        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if (!usuarioValor) {
            
            validaFalla(usuario, 'Campo obligatorio')
        } else {
            validaOk(usuario)
        }

        if (!apellidosValor) {
            
            validaFalla(apellidos, 'Campo obligatorio')
        } else {
            validaOk(apellidos)
        }

        //validando campo email
        if (!emailValor) {
            validaFalla(email, 'Campo obligatorio')
        } else if (!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        } else {
            validaOk(email)
        }
        //validando campo password
        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
        if (!passValor) {
            validaFalla(pass, 'Campo obligatorio')
        } else if (passValor.length < 8) {
            validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo.')
        } else if (!passValor.match(er)) {
            validaFalla(pass, 'Incluya mayusculas minusculas y numeros')
        } else {
            validaOk(pass)
        }

        //validando campo password Confirmación
        if (!passConfirmaValor) {
            validaFalla(passConfirma, 'Confirme su password')
        } else if (passValor !== passConfirmaValor) {
            validaFalla(passConfirma, 'La password no coincide')
        } else {
            validaOk(passConfirma)
        }

        // if (edadValor < 0) {
        //     validaFalla(edad, 'Numero No Valido')
        // }
        // if (edadValor.length < 10) {
        //     validaFalla(edad, 'Campo obligatorio')
        // } else {
        //     validaOk(edad)
        // }


    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'falla'
    }
    const validaOk = (input) => {
        const formControl = input.parentElement
        formControl.className = 'formRegistro_ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

})