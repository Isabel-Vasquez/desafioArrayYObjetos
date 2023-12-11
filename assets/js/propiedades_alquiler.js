(function () {
	let paginaActual = window.location.pathname.split('/').pop();

	let containerId;
	let propiedadesARenderizar;

	const propiedades_alquiler = [
		{
			nombre: 'Apartamento en el centro de la ciudad',
			src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
			descripcion:
				'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
			ubicacion: '123 Main Street, Anytown, CA 91234',
			habitaciones: 2,
			baños: 2,
			costo: 2000,
			smoke: false,
			pets: true,
		},
		{
			nombre: 'Apartamento luminoso con vista al mar',
			src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			descripcion:
				'Este hermoso apartamento ofrece una vista impresionante al mar',
			ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
			habitaciones: 3,
			baños: 3,
			costo: 2500,
			smoke: true,
			pets: true,
		},
		{
			nombre: 'Condominio moderno en zona residencial',
			src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
			descripcion:
				'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
			ubicacion: '123 Main Street, Anytown, CA 91234',
			habitaciones: 2,
			baños: 2,
			costo: 2200,
			smoke: false,
			pets: false,
		},
		{
			nombre: 'Casa frente al mar con vista panorámica',
			src: 'https://plus.unsplash.com/premium_photo-1684348962187-988fc3d7f024?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			descripcion:
				'Encantadora casa frente al mar con vistas panorámicas a las olas y la puesta de sol. Disfruta de la tranquilidad y la serenidad de vivir junto a la playa.',
			ubicacion: '',
			habitaciones: 3,
			costo: 4500,
			baños: 2,
			smoke: false,
			pets: true,
		},
		{
			nombre: 'Cabaña rústica en el bosque',
			src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			descripcion:
				'Acogedora cabaña rústica ubicada en medio del bosque, perfecta para aquellos que buscan tranquilidad y conexión con la naturaleza. Disfruta de la serenidad del entorno natural.',
			ubicacion: '',
			habitaciones: 1,
			costo: 800,
			baños: 1,
			smoke: true,
			pets: true,
		},
	];

	if (paginaActual === 'index.html') {
		containerId = 'propiedades-alquiler-index';
	} else {
		containerId = 'propiedades-alquiler';
	}

	const container = document.getElementById(containerId);

	if (paginaActual === 'index.html') {
		propiedadesARenderizar = propiedades_alquiler.slice(0, 3);
	} else {
		propiedadesARenderizar = propiedades_alquiler;
	}

	renderizarPropiedades(containerId, propiedadesARenderizar);
})();

(function () {})();
