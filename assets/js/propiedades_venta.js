(function () {
	let paginaActual = window.location.pathname.split('/').pop();

	let containerId;
	let propiedadesARenderizar;

	const propiedades_ventas = [
		{
			nombre: 'Apartamento de lujo en zona exclusiva',
			src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
			descripcion:
				'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
			ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
			habitaciones: 4,
			costo: 5000,
			baños: 2,
			smoke: false,
			pets: false,
		},
		{
			nombre: 'Apartamento acogedor en la montaña',
			src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
			descripcion:
				'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
			ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
			habitaciones: 2,
			costo: 1200,
			baños: 3,
			smoke: true,
			pets: true,
		},
		{
			nombre: 'Penthouse de lujo con terraza panorámica',
			src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
			descripcion:
				'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
			ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
			habitaciones: 3,
			costo: 4500,
			baños: 2,
			smoke: false,
			pets: true,
		},
		{
			nombre: 'Refugio acogedor en la montaña',
			src: 'https://plus.unsplash.com/premium_photo-1683910702994-b412b9a76a12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			descripcion:
				'Encantador refugio en la montaña con impresionantes vistas panorámicas. Ideal para aquellos que buscan vivir tranquilos y disfrutar de la naturaleza circundante.',
			ubicacion: '',
			habitaciones: 2,
			costo: 1200,
			baños: 1,
			smoke: true,
			pets: true,
		},

		{
			nombre: 'Residencia moderna con diseño vanguardista',
			src: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			descripcion:
				'Elegante residencia moderna. Amplios espacios, acabados de alta calidad y comodidades modernas hacen de esta casa la opción perfecta para aquellos que buscan un estilo de vida contemporáneo.',
			ubicacion: '',
			habitaciones: 4,
			costo: 6000,
			baños: 3,
			smoke: false,
			pets: true,
		},
	];

	if (paginaActual === 'index.html') {
		containerId = 'propiedades-ventas-index';
	} else {
		containerId = 'propiedades-ventas';
	}

	const container = document.getElementById(containerId);

	if (paginaActual === 'index.html') {
		propiedadesARenderizar = propiedades_ventas.slice(0, 3);
	} else {
		propiedadesARenderizar = propiedades_ventas;
	}

	renderizarPropiedades(containerId, propiedadesARenderizar);
})();
