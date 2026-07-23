const imageRoutes = {
  logo: 'images/logo.png',
  logo_trans: 'images/logo_trans.png',
  hero: 'images/hero.png',
  espectaculares: 'images/tesla.png',
  lonasViniles: 'images/viniles1.png',
  playeras: 'images/textil.png',
  tazas: 'images/taza.png',
  tarjetas: 'images/card.png',
  publicitario: 'images/publicitario.png',
  gran_formato: 'images/gran_formato.png',
  textiles: 'images/textiles.png',
  promocionales: 'images/promocionales.png',
  campagna: 'images/campagna.png'
};

// Sustituye estas rutas por archivos locales en `images/` cuando tengas tus fotografías definitivas.
// Ejemplo: hero: 'images/hero.jpg'

window.STAMPATO_CONTENT = {
  companyName: 'Stampato Creativa',
  companyLogo: imageRoutes.logo_trans,
  whatsapp: '+52 7773957777',
  address: 'Río Grijalva 442, zona 1, Vista Hermosa, 62290 Cuernavaca, Mor.',

  hero: {
    eyebrow: 'Impresión para marcas que quieren presencia',
    title: 'Impresión que convierte ideas en presencia.',
    description: 'Creamos piezas impresas que hacen visible una idea, fortalecen una identidad y convierten cada proyecto en una experiencia de marca.',
    whatsappButtonText: 'Cotizar por WhatsApp',
    secondaryButtonText: 'Ver servicios',
    image: imageRoutes.hero,
    imageAlt: 'Mesa de trabajo con materiales impresos y piezas de diseño'
  },

  sectionLabels: {
    services: 'Servicios',
    gallery: 'Galería de trabajos',
    process: 'Proceso de trabajo',
    advantages: 'Ventajas',
    faq: 'Preguntas frecuentes',
    contact: 'Contacto'
  },

  sectionTitles: {
    services: 'Soluciones de impresión para distintas necesidades',
    gallery: 'Proyectos que convierten ideas en presencia',
    process: 'Una ruta clara, simple y ordenada',
    advantages: 'Producción cuidada de principio a fin',
    faq: 'Todo lo que necesitas saber antes de imprimir',
    contact: 'Hablemos de tu siguiente proyecto'
  },

  contact: {
    description: 'Cuéntanos qué tienes en mente. Te ayudamos a elegir materiales, formatos y acabados para lograr una pieza que represente el nivel de tu marca.',
    whatsappButtonText: 'Abrir WhatsApp',
    mapButtonText: 'Ver dirección',
    socialTitle: 'Redes sociales'
  },

  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Ventajas', href: '#ventajas' },
    { label: 'FAQ', href: '#preguntas-frecuentes' },
    { label: 'Contacto', href: '#contacto' }
  ],

  services: [
    {
      image: imageRoutes.espectaculares,
      imageAlt: 'Impresión de espectacular de gran formato',
      title: 'Espectaculares y gran formato',
      description: 'Impresiones de gran impacto para campañas que buscan dominar el espacio, atraer miradas y permanecer en la memoria.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar espectaculares y gran formato.'
    },
    {
      image: imageRoutes.lonasViniles,
      imageAlt: 'Lonas y viniles impresos',
      title: 'Lonas y viniles',
      description: 'Soluciones versátiles para escaparates, fachadas, interiores, señalización y espacios donde tu marca necesita hacerse presente.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar lonas y viniles.'
    },
    {
      image: imageRoutes.playeras,
      imageAlt: 'Impresión personalizada en playeras',
      title: 'Playeras y textiles',
      description: 'Textiles personalizados que convierten una prenda, uniforme o accesorio en una extensión natural de la identidad de tu marca.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar impresión en playeras y textiles.'
    },
    {
      image: imageRoutes.tazas,
      imageAlt: 'Tazas promocionales personalizadas',
      title: 'Tazas y promocionales',
      description: 'Objetos útiles y bien diseñados que acompañan a tus clientes y mantienen tu marca presente más allá de una campaña.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar tazas y promocionales.'
    },
    {
      image: imageRoutes.tarjetas,
      imageAlt: 'Tarjetas, volantes y papelería impresa',
      title: 'Tarjetas, volantes y papelería',
      description: 'Papelería con materiales y acabados cuidados que transmite profesionalismo desde el primer contacto.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar tarjetas, volantes y papelería.'
    },
    {
      image: imageRoutes.publicitario,
      imageAlt: 'Material publicitario personalizado',
      title: 'Material publicitario personalizado',
      description: 'Piezas creadas a la medida para lanzamientos, activaciones, eventos, puntos de venta y campañas con identidad propia.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar material publicitario personalizado.'
    }
  ],

  gallery: [
    {
      image: imageRoutes.gran_formato,
      imageAlt: 'Trabajo de impresión de gran formato',
      title: 'Gran formato con presencia visual',
      description: 'Proyectos donde la escala, el diseño y la calidad de impresión trabajan juntos para generar impacto.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar una pieza similar a gran formato con presencia visual.'
    },
    {
      image: imageRoutes.campagna,
      imageAlt: 'Material publicitario impreso en mesa',
      title: 'Material impreso para campañas',
      description: 'Una misma identidad visual aplicada con coherencia en cada pieza y en cada punto de contacto de una campaña.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar una pieza similar a material impreso para campañas.'
    },
    {
      image: imageRoutes.textiles,
      imageAlt: 'Textiles personalizados',
      title: 'Textiles personalizados',
      description: 'Moda, hospitalidad, eventos y branding reunidos en textiles que elevan la percepción de una marca.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar una pieza similar a textiles personalizados.'
    },
    {
      image: imageRoutes.promocionales,
      imageAlt: 'Promocionales personalizados',
      title: 'Promocionales con identidad',
      description: 'Promocionales concebidos como experiencias de marca, no como simples objetos con un logotipo.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar una pieza similar a promocionales con identidad.'
    }
  ],

  process: [
    {
      title: '1. Cuéntanos tu idea',
      description: 'Conocemos el objetivo, el uso, las dimensiones, la cantidad y el contexto de tu proyecto.'
    },
    {
      title: '2. Revisamos la propuesta',
      description: 'Definimos materiales, formatos, sistemas de impresión y acabados para encontrar la mejor solución.'
    },
    {
      title: '3. Producción',
      description: 'Producimos cada pieza con atención al detalle, consistencia visual y control de calidad.'
    },
    {
      title: '4. Entrega',
      description: 'Coordinamos la entrega o instalación para que tu proyecto llegue listo para destacar.'
    }
  ],

  advantages: [
    {
      title: 'Asesoría personalizada',
      description: 'Te ayudamos a elegir materiales, dimensiones y acabados según el uso, el presupuesto y el resultado que buscas.'
    },
    {
      title: 'Soluciones a la medida',
      description: 'Cada proyecto se plantea según sus necesidades reales, desde una pieza especial hasta una producción completa.'
    },
    {
      title: 'Calidad en cada detalle',
      description: 'Cuidamos color, definición, materiales y acabados para lograr una presentación limpia y profesional.'
    },
    {
      title: 'Comunicación directa',
      description: 'Mantenemos un contacto claro durante la cotización, producción y entrega para evitar sorpresas.'
    }
  ],

  faqs: [
    {
      question: '¿Qué información necesito para solicitar una cotización?',
      answer: 'Compártenos el tipo de producto, las medidas, la cantidad, el uso que tendrá, el material que tienes en mente y la fecha en que lo necesitas. Si aún no conoces todos los detalles, podemos orientarte.'
    },
    {
      question: '¿Existe una cantidad mínima de impresión?',
      answer: 'Depende del producto y del sistema de impresión. Algunos proyectos pueden producirse desde una sola pieza, mientras que otros requieren una cantidad mínima para optimizar costos.'
    },
    {
      question: '¿Pueden ayudarme a elegir el material y los acabados?',
      answer: 'Sí. Revisamos el uso, la duración, el presupuesto y la apariencia que buscas para recomendarte materiales, laminados, barnices, cortes y acabados adecuados.'
    },
    {
      question: '¿En qué formato debo enviar mi archivo?',
      answer: 'Preferentemente en PDF listo para impresión, con tipografías convertidas a curvas, imágenes en alta resolución y sangrados cuando sean necesarios. También podemos revisar otros formatos antes de producir.'
    },
    {
      question: '¿Revisan los archivos antes de imprimir?',
      answer: 'Sí. Verificamos medidas, resolución, márgenes, sangrados y aspectos técnicos básicos. Si detectamos algún problema, te lo informamos antes de iniciar la producción.'
    },
    {
      question: '¿Pueden hacer el diseño si todavía no tengo un archivo?',
      answer: 'Sí. Podemos desarrollar o adaptar la pieza gráfica de acuerdo con el formato, el material y la identidad visual de tu proyecto.'
    },
    {
      question: '¿Cuánto tarda la producción?',
      answer: 'El tiempo depende del producto, la cantidad, los materiales y los acabados. Al cotizar te indicaremos un plazo estimado antes de comenzar.'
    },
    {
      question: '¿Manejan entregas o instalación?',
      answer: 'Sí. Podemos coordinar entrega y, en determinados proyectos de gran formato, también instalación. La disponibilidad y el costo dependen de la ubicación y las características del trabajo.'
    }
  ],

  socials: []
};