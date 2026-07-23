(function () {
  const content = window.STAMPATO_CONTENT;

  if (!content) {
    return;
  }

  const state = {
    menuOpen: false,
    lightboxOpen: false,
    hoverCloseTimer: null,
    lightboxMode: null
  };

  const selectors = {
    header: '[data-header]',
    brand: '[data-brand]',
    navLinks: '[data-nav-links]',
    quoteLink: '[data-quote-link]',
    menuToggle: '[data-menu-toggle]',
    siteNav: '[data-site-nav]',
    heroEyebrow: '[data-hero-eyebrow]',
    heroTitle: '[data-hero-title]',
    heroDescription: '[data-hero-description]',
    heroWhatsapp: '[data-hero-whatsapp]',
    heroSecondary: '[data-hero-secondary]',
    heroMeta: '[data-hero-meta]',
    heroVisual: '[data-hero-visual]',
    servicesGrid: '[data-services-grid]',
    galleryGrid: '[data-gallery-grid]',
    processGrid: '[data-process-grid]',
    advantagesGrid: '[data-advantages-grid]',
    faqList: '[data-faq-list]',
    contactTitle: '[data-contact-title]',
    contactDescription: '[data-contact-description]',
    contactWhatsapp: '[data-contact-whatsapp]',
    contactMap: '[data-contact-map]',
    contactInfo: '[data-contact-info]',
    socialPanel: '[data-social-panel]',
    socialTitle: '[data-social-title]',
    socialLinks: '[data-social-links]',
    footerCopy: '[data-footer-copy]',
    footerYear: '[data-footer-year]',
    floatingWhatsapp: '[data-floating-whatsapp]',
    lightbox: '[data-lightbox]',
    lightboxImage: '[data-lightbox-image]',
    lightboxCaption: '[data-lightbox-caption]',
    lightboxClose: '[data-lightbox-close]',
    template: '[data-card-template]',
    cardMedia: '[data-card-media]',
    cardTitle: '[data-card-title]',
    cardDescription: '[data-card-description]',
    cardButton: '[data-card-button]'
  };

  const get = (selector, root = document) => root.querySelector(selector);
  const getAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function sanitizePhone(phone) {
    return String(phone || '').replace(/[^\d+]/g, '');
  }

  function buildWhatsAppLink(phone, message) {
    const numericPhone = sanitizePhone(phone).replace(/\D/g, '');
    const text = encodeURIComponent(message || 'Hola, quiero más información.');
    return `https://wa.me/${numericPhone}?text=${text}`;
  }

  function formatPhoneForDisplay(phone) {
    return String(phone || '').trim();
  }

  function buildMapLink(address) {
    if (!address) {
      return '#';
    }

    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }

  function createMedia(image, alt, options = {}) {
    const { loading = 'lazy' } = options;
    const media = document.createElement('div');
    media.className = 'media';

    const img = document.createElement('img');
    img.src = image;
    img.alt = alt || '';
    img.loading = loading;
    img.decoding = 'async';

    const fallback = document.createElement('div');
    fallback.className = 'media__fallback';
    fallback.innerHTML = '<span>Imagen no disponible</span>';

    img.addEventListener('error', () => {
      media.classList.add('is-broken');
    });

    media.append(img, fallback);
    return media;
  }

  function createCard(item, variant) {
    const template = get(selectors.template);
    const card = template.content.firstElementChild.cloneNode(true);
    const mediaSlot = get(selectors.cardMedia, card);
    const titleSlot = get(selectors.cardTitle, card);
    const descriptionSlot = get(selectors.cardDescription, card);
    const buttonSlot = get(selectors.cardButton, card);

    const media = createMedia(item.image, item.imageAlt);
    media.classList.add(`media--${variant}`);

    if (variant === 'gallery' || variant === 'service') {
      media.classList.add('media--zoomable');
      media.tabIndex = 0;
      media.setAttribute('role', 'button');
      media.setAttribute('aria-label', `Ampliar ${item.title}`);
      media.addEventListener('click', () => window.openLightbox(item, 'click'));
      media.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          window.openLightbox(item, 'click');
        }
      });
    }

    mediaSlot.append(media);
    titleSlot.textContent = item.title;
    descriptionSlot.textContent = item.description;
    buttonSlot.textContent = item.buttonText || 'Cotizar';
    buttonSlot.href = buildWhatsAppLink(content.whatsapp, item.whatsappMessage);
    buttonSlot.target = '_blank';
    buttonSlot.rel = 'noopener noreferrer';

    return card;
  }

  function createListCard(item) {
    const article = document.createElement('article');
    article.className = 'info-card reveal';
    article.innerHTML = `
      <h3></h3>
      <p></p>
    `;
    article.querySelector('h3').textContent = item.title;
    article.querySelector('p').textContent = item.description;
    return article;
  }

  function onNavClick(event) {
    const target = document.querySelector(event.currentTarget.getAttribute('href'));
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    state.menuOpen = false;
    get(selectors.menuToggle).setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  function renderNav() {
    const navList = get(selectors.navLinks);
    const quoteLink = get(selectors.quoteLink);

    navList.innerHTML = '';
    content.nav.forEach(item => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      link.addEventListener('click', onNavClick);
      li.append(link);
      navList.append(li);
    });

    quoteLink.textContent = content.contact.whatsappButtonText;
    quoteLink.href = buildWhatsAppLink(content.whatsapp, content.contact.description);
    quoteLink.target = '_blank';
    quoteLink.rel = 'noopener noreferrer';
  }

  function renderHero() {
    const brandLogo = document.querySelector('[data-brand-logo]');
    if (brandLogo && content.companyLogo) {
      brandLogo.src = content.companyLogo;
      brandLogo.loading = 'lazy';
    }
    get(selectors.brand).textContent = content.companyName;
    get(selectors.heroEyebrow).textContent = content.hero.eyebrow;
    get(selectors.heroTitle).textContent = content.hero.title;
    get(selectors.heroDescription).textContent = content.hero.description;

    const heroWhatsapp = get(selectors.heroWhatsapp);
    heroWhatsapp.textContent = content.hero.whatsappButtonText;
    heroWhatsapp.href = buildWhatsAppLink(content.whatsapp, content.hero.description);
    heroWhatsapp.target = '_blank';
    heroWhatsapp.rel = 'noopener noreferrer';

    get(selectors.heroSecondary).textContent = content.hero.secondaryButtonText;

    const meta = get(selectors.heroMeta);
    meta.innerHTML = '';
    [content.address, formatPhoneForDisplay(content.whatsapp)].forEach(value => {
      if (!value) {
        return;
      }

      const li = document.createElement('li');
      li.textContent = value;
      meta.append(li);
    });

    get(selectors.heroVisual).append(createHeroVisual());
  }

  function createHeroVisual() {
    const frame = document.createElement('article');
    frame.className = 'hero-visual__frame';
    frame.append(createMedia(content.hero.image, content.hero.imageAlt, { loading: 'eager' }));

   /*const label = document.createElement('div');
    label.className = 'hero-visual__label';
    label.innerHTML = '<span>Producción visual</span><strong>Impresión con presencia</strong>';

    const chip = document.createElement('div');
    chip.className = 'hero-visual__chip';
    chip.textContent = 'Diseño + impresión + presentación';
    */


    return frame;
  }

  function renderSectionLabels() {
    Object.entries(content.sectionLabels).forEach(([key, value]) => {
      getAll(`[data-section-label="${key}"]`).forEach(element => {
        element.textContent = value;
      });
    });

    Object.entries(content.sectionTitles).forEach(([key, value]) => {
      getAll(`[data-section-title="${key}"]`).forEach(element => {
        element.textContent = value;
      });
    });
  }

  function renderCards() {
    const servicesGrid = get(selectors.servicesGrid);
    const galleryGrid = get(selectors.galleryGrid);
    const processGrid = get(selectors.processGrid);
    const advantagesGrid = get(selectors.advantagesGrid);

    servicesGrid.innerHTML = '';
    galleryGrid.innerHTML = '';
    processGrid.innerHTML = '';
    advantagesGrid.innerHTML = '';

    content.services.forEach(item => servicesGrid.append(createCard(item, 'service')));
    content.gallery.forEach(item => galleryGrid.append(createCard(item, 'gallery')));
    content.process.forEach(item => processGrid.append(createListCard(item)));
    content.advantages.forEach(item => advantagesGrid.append(createListCard(item)));
  }

  function renderFaq() {
    const list = get(selectors.faqList);
    list.innerHTML = '';

    content.faqs.forEach((item, index) => {
      const details = document.createElement('details');
      details.className = 'faq-item reveal';
      if (index === 0) {
        details.open = true;
      }

      const summary = document.createElement('summary');
      summary.textContent = item.question;

      const answer = document.createElement('div');
      answer.className = 'faq-item__answer';
      answer.textContent = item.answer;

      details.append(summary, answer);
      list.append(details);
    });
  }

  function renderContact() {
    get(selectors.contactTitle).textContent = content.sectionTitles.contact;
    get(selectors.contactDescription).textContent = content.contact.description;

    const whatsappLink = buildWhatsAppLink(content.whatsapp, content.contact.description);
    const contactWhatsapp = get(selectors.contactWhatsapp);
    contactWhatsapp.textContent = content.contact.whatsappButtonText;
    contactWhatsapp.href = whatsappLink;
    contactWhatsapp.target = '_blank';
    contactWhatsapp.rel = 'noopener noreferrer';

    const contactMap = get(selectors.contactMap);
    contactMap.textContent = content.address ? content.contact.mapButtonText : '';
    contactMap.href = buildMapLink(content.address);
    contactMap.target = '_blank';
    contactMap.rel = 'noopener noreferrer';
    contactMap.hidden = !content.address;

    const info = get(selectors.contactInfo);
    info.innerHTML = '';

    const infoItems = [
      { label: 'WhatsApp', value: formatPhoneForDisplay(content.whatsapp), href: whatsappLink },
      { label: 'Dirección', value: content.address, href: buildMapLink(content.address) }
    ].filter(item => item.value);

    infoItems.forEach(item => {
      const block = document.createElement(item.href ? 'a' : 'div');
      block.className = 'info-panel__item';
      if (item.href) {
        block.href = item.href;
        block.target = '_blank';
        block.rel = 'noopener noreferrer';
      }

      const label = document.createElement('span');
      label.className = 'info-panel__label';
      label.textContent = item.label;

      const value = document.createElement('strong');
      value.textContent = item.value;

      block.append(label, value);
      info.append(block);
    });

    const socialPanel = get(selectors.socialPanel);
    const socialTitle = get(selectors.socialTitle);
    const socialLinks = get(selectors.socialLinks);

    socialLinks.innerHTML = '';
    if (content.socials.length) {
      socialTitle.textContent = content.contact.socialTitle;
      content.socials.forEach(item => {
        if (!item.url || !item.label) {
          return;
        }

        const link = document.createElement('a');
        link.className = 'social-link';
        link.href = item.url;
        link.textContent = item.label;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        socialLinks.append(link);
      });
      socialPanel.hidden = socialLinks.children.length === 0;
    } else {
      socialPanel.hidden = true;
    }
  }

  function renderFooter() {
    get(selectors.footerCopy).textContent = content.companyName;
    get(selectors.footerYear).textContent = String(new Date().getFullYear());
  }

  function renderFloatingButton() {
    const floating = get(selectors.floatingWhatsapp);
    floating.addEventListener('click', () => {
      window.open(buildWhatsAppLink(content.whatsapp, content.hero.description), '_blank', 'noopener,noreferrer');
    });
  }

  function setupMobileMenu() {
    const menuToggle = get(selectors.menuToggle);
    const siteNav = get(selectors.siteNav);

    function syncState() {
      document.body.classList.toggle('nav-open', state.menuOpen);
      menuToggle.setAttribute('aria-expanded', String(state.menuOpen));
      siteNav.dataset.open = String(state.menuOpen);
    }

    menuToggle.addEventListener('click', () => {
      state.menuOpen = !state.menuOpen;
      syncState();
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && state.menuOpen) {
        state.menuOpen = false;
        syncState();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 900 && state.menuOpen) {
        state.menuOpen = false;
        syncState();
      }
    });

    syncState();
  }

  function setupSmoothScrolling() {
    getAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', event => {
        if (link.closest('.site-nav__list')) {
          return;
        }

        const href = link.getAttribute('href');
        if (!href || href === '#') {
          return;
        }

        const target = document.querySelector(href);
        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function setupScrollHeader() {
    const header = get(selectors.header);
    const update = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function setupRevealAnimations() {
    const nodes = getAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    nodes.forEach(node => observer.observe(node));
  }

  function setupFAQ() {
    getAll('.faq-item').forEach(details => {
      details.addEventListener('toggle', () => {
        if (!details.open) {
          return;
        }

        getAll('.faq-item').forEach(other => {
          if (other !== details) {
            other.open = false;
          }
        });
      });
    });
  }

  function setupLightbox() {
    const lightbox = get(selectors.lightbox);
    const lightboxImage = get(selectors.lightboxImage);
    const lightboxCaption = get(selectors.lightboxCaption);
    const closeTargets = getAll(selectors.lightboxClose);

    function close() {
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      state.lightboxOpen = false;
      lightboxImage.src = '';
      lightboxImage.alt = '';
      lightboxCaption.textContent = '';
      document.body.classList.remove('lightbox-open');
      state.lightboxMode = null;
    }

    function showImageError() {
      lightboxCaption.textContent = 'Vista temporal no disponible. Puedes cerrar esta caja con la X o la tecla Escape.';
    }

    closeTargets.forEach(target => {
      target.addEventListener('click', close);
    });

    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) {
        close();
      }
    });

    lightboxImage.addEventListener('error', showImageError);
    lightboxImage.loading = 'lazy';

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && state.lightboxOpen) {
        close();
      }
    });

    window.openLightbox = (item, mode = 'click') => {
      if (state.hoverCloseTimer) {
        window.clearTimeout(state.hoverCloseTimer);
        state.hoverCloseTimer = null;
      }

      lightboxImage.src = item.image;
      lightboxImage.alt = item.imageAlt || item.title;
      lightboxCaption.textContent = item.title;
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      state.lightboxOpen = true;
      state.lightboxMode = mode;
      document.body.classList.add('lightbox-open');
      lightboxCaption.textContent = item.title || '';
    };

    window.closeLightbox = close;
  }

  function init() {
    document.title = content.companyName;
    renderNav();
    renderHero();
    renderSectionLabels();
    renderCards();
    renderFaq();
    renderContact();
    renderFooter();
    renderFloatingButton();
    setupMobileMenu();
    setupSmoothScrolling();
    setupScrollHeader();
    setupRevealAnimations();
    setupFAQ();
    setupLightbox();

    const contactMap = get(selectors.contactMap);
    if (!content.address) {
      contactMap.hidden = true;
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();