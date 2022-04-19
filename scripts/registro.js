window.addEventListener('load', () => {
	const formularioRegistro = document.querySelector('#formularioRegistro')
	const nombreUsuario = document.getElementById('nombreUsuario')
	const nombre = document.getElementById('nombre')
	const email = document.getElementById('email')
	const contrasena = document.getElementById('contrasena')
	const confirmarContrasena = document.getElementById('confirmarContrasena')
	// const celular = document.getElementById('celular')

	formularioRegistro.addEventListener('submit', (e) => {
		e.preventDefault()
		validaCampos()
	})

	const validaCampos = () => {
		//capturar los valores ingresados por el nombreUsuario
		const nombreUsuarioValor = nombreUsuario.value.trim()
		const nombreValor = nombre.value.trim()
		const emailValor = email.value.trim()
		const contrasenaValor = contrasena.value.trim()
		const confirmarContrasenaValor = confirmarContrasena.value.trim();
		// const celular = celular.value.trim()

		//validando campo nombreUsuario
		if (!nombreUsuarioValor) {
			validaFalla(nombreUsuario, 'Rellene este campo')
		} else {
			validaOk(nombreUsuario)
		}
		//validando campo nombre
		if (!nombreValor) {
			validaFalla(nombre, 'Rellene este campo')
		} else {
			validaOk(nombre)
		}

		//validando campo email
		if (!emailValor) {
			validaFalla(email, 'Rellene este campo')
		} else if (!validaEmail(emailValor)) {
			validaFalla(email, 'El e-mail no es válido')
		} else {
			validaOk(email)
		}
		//validando campo password
		const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
		if (!contrasenaValor) {
			validaFalla(contrasena, 'Rellene este campo')
		} else if (contrasenaValor.length < 8) {
			validaFalla(contrasena, 'Debe tener 8 caracteres cómo mínimo.')
		} else if (!contrasenaValor.match(er)) {
			validaFalla(contrasena, 'Debe tener mayusculas, minusculas y un números.')
		} else {
			validaOk(contrasena)
		}

		//validando campo password Confirmación
		if (!confirmarContrasenaValor) {
			validaFalla(confirmarContrasena, 'Confirme su Contraseña')
		} else if (contrasenaValor !== confirmarContrasenaValor) {
			validaFalla(confirmarContrasena, 'La Contraseña no coincide')
		} else {
			validaOk(confirmarContrasena)
		}
		// if (!celularValor) {
		// 	validaFalla(celular, 'Campo vacío')
		// } else if (celularValor.length < 10) {
		// 	validaFalla(celular, 'Debe tener 10 caracteres cómo mínimo.')
		// } else {
		// 	validaOk(celular)
		// }
	}

	const validaFalla = (input, msje) => {
		const formularioControl = input.parentElement
		const aviso = formularioControl.querySelector('p')
		aviso.innerText = msje

		formularioControl.className = 'formularioControl falla'
	}
	const validaOk = (input, msje) => {
		const formularioControl = input.parentElement
		formularioControl.className = 'formularioControl ok'
	}

	const validaEmail = (email) => {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	}

})