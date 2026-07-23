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
  galeria1: 'images/lenceria.png',
  galeria2: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=80',
  galeria3: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=80',
  galeria4: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80'
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
    description: 'Soluciones de impresión para marcas, empresas, eventos y proyectos que necesitan hacerse notar.',
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
    gallery: 'Ejemplos visuales de materiales y piezas impresas',
    process: 'Una ruta clara, simple y ordenada',
    advantages: 'Razones para trabajar con una producción cuidada',
    faq: 'Respuestas rápidas a dudas comunes',
    contact: 'Hablemos de tu siguiente pieza impresa'
  },
  contact: {
    description: 'Comparte lo que necesitas y te respondemos por WhatsApp para revisar alcance, materiales y la mejor opción de impresión.',
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
      description: 'Piezas de alto impacto para dar visibilidad a campañas, lanzamientos y comunicación exterior.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar espectaculares y gran formato.'
    },
    {
      image: imageRoutes.lonasViniles,
      imageAlt: 'Lonas y viniles impresos',
      title: 'Lonas y viniles',
      description: 'Soluciones versátiles para promociones, señalización, decoración y comunicación temporal o permanente.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar lonas y viniles.'
    },
    {
      image: imageRoutes.playeras,
      imageAlt: 'Impresión personalizada en playeras',
      title: 'Playeras y textiles',
      description: 'Personalización textil para equipos, marcas, activaciones y proyectos con identidad propia.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar impresión en playeras y textiles.'
    },
    {
      image: imageRoutes.tazas,
      imageAlt: 'Tazas promocionales personalizadas',
      title: 'Tazas y promocionales',
      description: 'Objetos útiles y memorables para campañas, regalos corporativos y acciones de marca.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar tazas y promocionales.'
    },
    {
      image: imageRoutes.tarjetas,
      imageAlt: 'Tarjetas, volantes y papelería impresa',
      title: 'Tarjetas, volantes y papelería',
      description: 'Material impreso para presentación, difusión y comunicación cotidiana con acabados limpios.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar tarjetas, volantes y papelería.'
    },
    {
      image: imageRoutes.publicitario,
      imageAlt: 'Material publicitario personalizado',
      title: 'Material publicitario personalizado',
      description: 'Piezas hechas a medida para puntos de venta, eventos, activaciones y campañas específicas.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar material publicitario personalizado.'
    }
  ],
  gallery: [
    {
      image: imageRoutes.galeria1,
      imageAlt: 'Trabajo de impresión de gran formato',
      title: 'Gran formato con presencia visual',
      description: 'Aplicaciones para exteriores e interiores con lectura clara y composición limpia.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar una pieza similar a la de la galería 1.'
    },
    {
      image: imageRoutes.galeria2,
      imageAlt: 'Material publicitario impreso en mesa',
      title: 'Material impreso para campañas',
      description: 'Piezas pensadas para comunicar sin saturar y sostener la identidad visual.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar una pieza similar a la de la galería 2.'
    },
    {
      image: imageRoutes.galeria3,
      imageAlt: 'Textiles personalizados',
      title: 'Textiles personalizados',
      description: 'Aplicaciones textiles para equipos, promociones y presencia de marca.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar una pieza similar a la de la galería 3.'
    },
    {
      image: imageRoutes.galeria4,
      imageAlt: 'Promocionales personalizados',
      title: 'Promocionales con identidad',
      description: 'Objetos que acompañan la marca más allá del punto de venta.',
      buttonText: 'Cotizar',
      whatsappMessage: 'Hola, quiero cotizar una pieza similar a la de la galería 4.'
    }
  ],
  process: [
    {
      title: '1. Cuéntanos tu idea',
      description: 'Nos compartes el tipo de pieza, el uso y el formato que tienes en mente.'
    },
    {
      title: '2. Revisamos la propuesta',
      description: 'Aterrizamos materiales, rutas de impresión y el enfoque visual más conveniente.'
    },
    {
      title: '3. Producción',
      description: 'Preparamos la pieza con atención al detalle y una presentación limpia.'
    },
    {
      title: '4. Entrega',
      description: 'Compartimos el resultado final para que tu proyecto esté listo para usarse.'
    }
  ],
  advantages: [
    {
      title: 'Diseño visual claro',
      description: 'Una presentación sobria y legible ayuda a que cada pieza se vea profesional.'
    },
    {
      title: 'Contenido editable en un solo archivo',
      description: 'Los textos, imágenes, servicios y enlaces viven en js/content.js.'
    },
    {
      title: 'Responsive desde el inicio',
      description: 'La composición se adapta a escritorio, tablet y celular sin depender de librerías.'
    },
    {
      title: 'WhatsApp directo',
      description: 'Cada botón abre un mensaje precargado con el teléfono configurado desde el contenido.'
    }
  ],
  faqs: [
    {
      question: '¿Cómo solicito una cotización?',
      answer: 'Usa cualquier botón de WhatsApp del sitio y envía el mensaje que ya viene preparado.'
    },
    {
      question: '¿Puedo cambiar una imagen sin tocar el código?',
      answer: 'Sí. Puedes reemplazar el archivo dentro de images/ usando el mismo nombre.'
    },
    {
      question: '¿Qué pasa si una imagen no existe?',
      answer: 'La tarjeta muestra un fondo neutro para conservar la estructura visual sin romper el diseño.'
    },
    {
      question: '¿Dónde cambio el color principal?',
      answer: 'En css/styles.css, dentro de las variables CSS del bloque :root.'
    }
  ],
  socials: []
};