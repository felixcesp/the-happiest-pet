
window.addEventListener('load', () => {
    const form = document.querySelector('#formulariologin')
    const usuarioLogin = document.getElementById('ususarioLogin')
    const passLogin = document.getElementById('contrasenaLogin')

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validaCampos();
    })

    const validaCampos = () => {
        //capturar los valores ingresados por el usuario
        const usuarioLoginValor = usuarioLogin.value.trim()
        const passLoginValor = passLogin.value.trim()

        //validando campo usuario
        if( usuarioLoginValor == null || usuarioLoginValor.length == 0 || /^\s+$/.test(usuarioLoginValor) ) {
            
            validaFalla(usuarioLogin, 'Campo obligatorio')
        } else {
            validaOk(usuarioLogin)
        }

        //validando campo contrasena
        if (!passLoginValor) {
            validaFalla(passLogin, 'Campo obligatorio')
        } else {
            validaOk(passLogin)
        }
    }

    const validaFalla = (input, mensaje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = mensaje

        formControl.className = 'falla'
    }
    const validaOk = (input) => {
        const formControl = input.parentElement
        formControl.className = 'formRegistro_ok'
    }
})