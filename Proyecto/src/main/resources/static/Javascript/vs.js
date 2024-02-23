//OBJETO CON RUTAS DE IMAGENES

const $card = document.querySelectorAll('.card');

const nombresCarreras = [
    {
        titulo: 'Licenciatura en Biología',
        rutaImagen: '/Assets/Images/Nuevas/biologia.jpg',
    },
    {
        titulo: 'Técnico en Geología Minera',
        rutaImagen: '/Assets/Images/Nuevas/mina.jpg',
    },
    {
        titulo: 'Biología',
        rutaImagen: '/Assets/Images/Nuevas/biologia.jpg',
    },
    {
        titulo: 'Tecnico En Geología Y Control En Sondaje',
        rutaImagen: '/Assets/Images/Nuevas/mina2.jpg',
    },
    {
        titulo: 'Introducción al cultivo de hongos Pleurotus Ostreatus',
        rutaImagen: '/Assets/Images/Nuevas/hongo.jpg',
    },
    {
        titulo: 'Derecho',
        rutaImagen: '/Assets/Images/Nuevas/derecho2.jpg',
    },
    {
        titulo: 'Curso Validación de Métodos Analíticos y Acreditación de Laboratorios ISO 17025',
        rutaImagen: '/Assets/Images/Nuevas/cursoraro.jpg',
    },
    {
        titulo: 'Técnico Jurídico',
        rutaImagen: '/Assets/Images/Nuevas/tecnicojuridico.jpg',
    },
    {
        titulo: 'La cultura esotérica de Occidente',
        rutaImagen: '/Assets/Images/Nuevas/esoterismo.jpeg',
    },
    {
        titulo: 'Técnicas de atención y servicio al cliente',
        rutaImagen: '/Assets/Images/CardImages/asistente.jpg',
    },
    {
        titulo: 'Médico Cirujano/Médica Cirujana',
        rutaImagen: '/Assets/Images/Nuevas/cirujano.jpg',
    },
    {
        titulo: 'Tecnico En Enfermería',
        rutaImagen: '/Assets/Images/Nuevas/tecnicomedico.jpg',
    },
    {
        titulo: 'Medicina',
        rutaImagen: '/Assets/Images/CardImages/medico2.jpg',
    },
    {
        titulo: 'Primeros Auxilios',
        rutaImagen: '/Assets/Images/Nuevas/auxilios.jpg',
    },
    {
        titulo: 'Diseñador/ Diseñadora',
        rutaImagen: '/Assets/Images/Nuevas/diseno.jpg',
    },
    {
        titulo: 'Diseño',
        rutaImagen: '/Assets/Images/Nuevas/tecdiseno.jpg',
    },
    {
        titulo: 'Técnico Diseño Digital',
        rutaImagen: '/Assets/Images/Nuevas/disenooooo.jpg',
    },
    {
        titulo: 'Técnico de nivel superior en Diseño Gráfico',
        rutaImagen: '/Assets/Images/Nuevas/otrodiseno.jpg',
    },
    {
        titulo: 'Curso de Fundamentos del Diseño Gráfico',
        rutaImagen: '/Assets/Images/Nuevas/fundamentos.jpg',
    },
    {
        titulo: 'Curso de Photoshop e Illustrator',
        rutaImagen: '/Assets/Images/CardImages/phoil.png',
    },
    {
        titulo: 'Curso de Photoshop e Illustrator',
        rutaImagen: '/Assets/Images/CardImages/phoil.png',
    },
    {
        titulo: 'Educador/a de Párvulos',
        rutaImagen: '/Assets/Images/CardImages/parvulos.jpg',
    },
    {
        titulo: 'Técnico De Nivel Superior En Educación Básica',
        rutaImagen:
            '/Assets/Images/CardImages/Técnico-de-Nivel-Superior-en-Educación-Básica-01.jpg',
    },
    {
        titulo: 'Ingeniería Civil Informática',
        rutaImagen: '/Assets/Images/Nuevas/informatica4.jpg',
    },
    {
        titulo: 'Capacitación Docente en Didáctica del Proceso Enseñanza - Aprendizaje',
        rutaImagen: '/Assets/Images/CardImages/capdocente.jpg',
    },
    {
        titulo: 'Técnico Universitario en Informática',
        rutaImagen: '/Assets/Images/Nuevas/informatica3.jpg',
    },
    {
        titulo: 'Ingeniería De Ejecución En Informática Mención Desarrollo De Sistemas',
        rutaImagen: '/Assets/Images/Nuevas/informatica2.jpg',
    },
    {
        titulo: 'Desarrollo de Software',
        rutaImagen: '/Assets/Images/Nuevas/informatica.jpg',
    },
    // Agrega más títulos y rutas de imagen según sea necesario
    ,
];

// Itera a través de las cartas
$card.forEach((card) => {
    // Acceder al elemento de título dentro de la carta
    const tituloCarrera = card.querySelector('.card__title');

    if (tituloCarrera) {
        // Obtiene el contenido del título
        const contenidoNombre = tituloCarrera.textContent.trim();

        // Busca el título en el array de títulos específicos
        const nombreEspecifico = nombresCarreras.find(
            (item) => item.titulo === contenidoNombre
        );

        if (nombreEspecifico) {
            // Si se encuentra un título específico, cambia la imagen de la carta
            const imagenElement = card.querySelector('.card__image');
            if (imagenElement) {
                imagenElement.src = nombreEspecifico.rutaImagen;
            }
        }
    }
});
