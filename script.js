/* ==========================================================================
   Iris — personal profile site
   Edit content here (translations + links). Layout & theme live in styles.css.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. LINKS  — social / profile links
   To add, remove or edit a link, edit the array below.
   - id     : internal id (used by the hero + VRChat sections to reuse a link)
   - href   : replace "#" with your real URL
   - icon   : SVG path (viewBox 0 0 24 24, fill currentColor)
   - name   : { es, en }
   - desc   : { es, en }
   -------------------------------------------------------------------------- */

const LINK_ICONS = {
  discord: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z',
  steam: 'M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z',
  threads: 'M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z',
  vrchat: 'M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3.5a2.5 2.5 0 0 1 0 5V19a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2v-2.5a2.5 2.5 0 0 1 0-5V8zm4 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',

  instagram: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077'
};

const LINKS = [
  { id: 'discord', href: 'https://discord.com/users/383364978759041025', name: { es: 'Discord', en: 'Discord' }, desc: { es: 'pasa a saludar', en: 'come say hi' } },
  { id: 'vrchat', href: 'https://vrchat.com/home/user/usr_585456eb-6a61-4eda-b97f-c000efa7acb2', name: { es: 'VRChat', en: 'VRChat' }, desc: { es: 'mi espacio social', en: 'my social space' } },
  { id: 'steam', href: 'https://steamcommunity.com/profiles/76561198820816564', name: { es: 'Steam', en: 'Steam' }, desc: { es: 'mis juegos', en: 'my games' } },
  { id: 'threads', href: 'https://www.threads.com/@ghasty3', name: { es: 'Threads', en: 'Threads' }, desc: { es: 'pensamientos cortos', en: 'short thoughts' } },
  { id: 'instagram', href: 'https://www.instagram.com/ghasty3/', name: { es: 'Instagram', en: 'Instagram' }, desc: { es: 'mis fotos', en: 'my photos' } }
];

/* --------------------------------------------------------------------------
   1b. MUSIC — corner player playlist.
   Drop your mp3 files into assets/audio/ and their covers into
   assets/covers/ (named after the song) and add them here.
   - title      : shown in the player
   - src        : path to the audio file
   - cover      : spinning disc image (falls back to profile.jpg if missing)
   - startDelay : fake loading time (ms) before the first play attempt
   - volume     : 0.0 – 1.0
   -------------------------------------------------------------------------- */

const MUSIC = {
  tracks: [
    { title: 'lovergirl', src: 'assets/audio/lovergirl.mp3', cover: 'assets/covers/lovergirl.png' },
    { title: 'High On Heaven', src: 'assets/audio/High On Heaven.mp3', cover: 'assets/covers/High On Heaven.png' }
  ],
  startDelay: 6000,
  volume: 0.8
};

/* --------------------------------------------------------------------------
   1c. VISITS — page visit counter (see end of the page).
   - mode 'abacus' : plain number styled with a pixel font (works, recommended)
   - mode 'moe'    : pixel-art image from count.getloli.com (service was
                     unreachable when tested — keep 'abacus' unless it works)
   -------------------------------------------------------------------------- */

const VISITS = {
  mode: 'abacus',
  abacus: 'https://abacus.jasoncameron.dev/hit/irisiwi/visits',
  moe: 'https://count.getloli.com/get/@irisiwi?theme=moebooru'
};

/* --------------------------------------------------------------------------
   1d. GALLERY — photo sections for the gallery tab.
   Static hosting can't list folder contents, so each photo is one line here:
   just add the path relative to this file. Sections without photos show an
   empty state until you add them.
   -------------------------------------------------------------------------- */

const GALLERY = {
  photos: {
    vrchat: [
      'assets/images/vrchat.png'
    ],
    irl: [
      'assets/images/Imagen1.png',
      'assets/images/Imagen2.jpg',
      'assets/images/Imagen3.jpg',
      'assets/images/Imagen4.jpg',
      'assets/images/Imagen5.jpg',
      'assets/images/Imagen6.jpg',
      'assets/images/Imagen7.jpg'
    ],
    minecraft: []
  }
};

/* --------------------------------------------------------------------------
   2. TRANSLATIONS — all UI text (Spanish is the default language)
   Replace the placeholder strings below with your real copy.
   -------------------------------------------------------------------------- */

const translations = {
  es: {
    nav: {
      home: 'Inicio', about: 'Sobre mí', vrchat: 'VRChat',
      setup: 'Setup', links: 'Links',
      label: 'Navegación principal'
    },
    hero: {
      subtitle: 'VRChat • Games • Tech • 3D',
      intro: 'holiii!! Soy Iris :3 — bienvenidx a mi rinconcito de internet.',
      tags: ['🎮 Gaming', '🥽 VRChat', '🖥️ Tech', '🎨 3D'],
      scroll: 'Bajar a la siguiente sección',
      profileAlt: 'Foto de perfil de Iris'
    },
    about: {
      eyebrow: 'holiii',
      title: 'Sobre mí',
      subtitle: 'un poquito sobre quién soy',
      aboutTitle: 'Quién soy',
      aboutBody: 'Holiii!! Soy Iris :3 Paso un tiempo sospechosamente grande jugando, trasteando con tecnología y dando vueltas por VR. Me gusta crear cositas, probar hardware y perderme en internet.',
      likesTitle: 'Cosas que me gustan',
      likes: 'Me gustan los juegos, la VR, la tecnología, el hardware, el 3D y los proyectos creativos.',
      langTitle: 'Idiomas',
      lang1name: 'Español', lang1level: 'Nativo',
      lang2name: 'English', lang2level: 'Fluido',
      infoTitle: 'Datos random',
      info: [
        { label: 'Pronombres', value: 'ella' },
        { label: 'Zona horaria', value: 'CET (UTC+1)' },
        { label: 'Ritmo', value: 'nocturna' },
        { label: 'Combustible', value: 'mucho café' }
      ]
    },
    interests: {
      eyebrow: 'cosas que me molan',
      title: 'Intereses',
      subtitle: 'cosas que me gustan, sin orden particular',
      groups: [
        { title: 'Gaming', text: "Voy rotando por muchos juegos sin ningún ritmo aparente, pero siempre acabo volviendo a los mismos: Minecraft, GTA Online y Overwatch. Aunque mi juego favorito es No Man's Sky." },
        { title: 'VR', text: 'PCVR. Solo juego VRChat; cuando me acuerdo de ponerme el full body, estoy usando Slimes.' },
        { title: 'Tech', text: 'Me encanta montar ordenadores y trabajaría gratis diagnosticando, ensamblando y reparando PCs. En mi PC personal uso CachyOS.' },
        { title: 'Creativo / 3D', text: 'A veces hago avatares o assets, pero no tengo mucha necesidad porque estoy feliz con mi Kitsulene.' }
      ]
    },
    vrchat: {
      eyebrow: 'mi espacio social',
      title: 'VRChat',
      subtitle: 'donde me vas a encontrar la mayor parte del tiempo',
      imageAlt: 'Mi avatar de VRChat',
      body: 'Este es mi espacio social principal :3 Suelo estar en mundos random, con amigxs o simplemente de chill. Si me ves por ahí, ¡saluda!',
      platformLabel: 'Plataforma', platformValue: 'PCVR',
      trackingLabel: 'Tracking', trackingValue: '6 Gorbit Slimes · ICM45',
      worldsTitle: 'Mundos favoritos',
      worlds: 'Mi mundo favorito es El Opti YT Search. Es divertido no jugar en un slideshow.'
    },
    setup: {
      eyebrow: 'mi equipamiento',
      title: 'Mi Setup',
      subtitle: 'las cosas que uso para jugar, crear y estar en VR',
      cards: [
        { icon: '💻', title: 'PC', items: ['Ryzen 7 3700X', 'RTX 5060 Ti 16GB', '32 GB RAM', 'WOLED QHD 240Hz (ROG)'] },
        { icon: '🥽', title: 'VR', items: ['Meta Quest 3', 'PCVR', '6 SlimeVR trackers'] },
        { icon: '🎮', title: 'Otros periféricos', items: ['Ajazz AK820 MAX HE', 'ATK F1 V2 Ultimate', 'EasySMX X20'] },
        { icon: '🎧', title: 'Audio', items: ['Logitech G435', 'FIFINE K688'] }
      ]
    },
    links: {
      eyebrow: 'encuéntrame',
      title: 'Links',
      subtitle: 'donde puedes encontrarme o apoyarme'
    },
    end: {
      backToTop: 'Volver arriba ↑',
      madeWith: 'hecho con cariño por Iris ♥',
      visits: 'visitas'
    },
    music: {
      loading: 'cargando',
      play: 'Reproducir',
      pause: 'Pausar',
      skip: 'Siguiente canción',
      aria: 'Reproductor de música'
    },
    gallery: {
      open: 'Galería',
      title: 'Galería',
      close: 'Cerrar galería',
      empty: 'Aún no hay fotos por aquí'
    }
  },

  en: {
    nav: {
      home: 'Home', about: 'About', vrchat: 'VRChat',
      setup: 'Setup', links: 'Links',
      label: 'Main navigation'
    },
    hero: {
      subtitle: 'VRChat • Games • Tech • 3D',
      intro: "hi!! I'm Iris :3 — welcome to my little corner of the internet.",
      tags: ['🎮 Gaming', '🥽 VRChat', '🖥️ Tech', '🎨 3D'],
      scroll: 'Scroll to the next section',
      profileAlt: "Iris' profile picture"
    },
    about: {
      eyebrow: 'holiii',
      title: 'About me',
      subtitle: 'a little bit about who I am',
      aboutTitle: 'Who I am',
      aboutBody: "Hi!! I'm Iris :3 I spend a suspicious amount of time playing games, messing with technology and hanging out in VR. I love making little things, trying hardware and getting lost on the internet.",
      likesTitle: 'Things I like',
      likes: 'I like games, VR, technology, hardware, 3D and creative projects.',
      langTitle: 'Languages',
      lang1name: 'Spanish', lang1level: 'Native',
      lang2name: 'English', lang2level: 'Fluent',
      infoTitle: 'Random facts',
      info: [
        { label: 'Pronouns', value: 'she/her' },
        { label: 'Timezone', value: 'CET (UTC+1)' },
        { label: 'Schedule', value: 'night owl' },
        { label: 'Fuel', value: 'too much coffee' }
      ]
    },
    interests: {
      eyebrow: 'things i\'m into',
      title: 'Interests',
      subtitle: 'stuff I like, in no particular order',
      groups: [
        { title: 'Gaming', text: "I rotate through a bunch of games with no apparent rhythm, but I always end up coming back to the same ones: Minecraft, GTA Online and Overwatch. Though my favorite game is No Man's Sky." },
        { title: 'VR', text: "PCVR. I only play VRChat; when I remember to put on my full body, I'm using Slimes." },
        { title: 'Tech', text: "I love building computers and I'd work for free diagnosing, assembling and repairing PCs. On my personal PC I use CachyOS." },
        { title: 'Creative / 3D', text: "Sometimes I make avatars or assets, but I don't really need to since I'm happy with my Kitsulene." }
      ]
    },
    vrchat: {
      eyebrow: 'my main social space',
      title: 'VRChat',
      subtitle: "where you'll find me most of the time",
      imageAlt: 'My VRChat avatar',
      body: "This is my main social space :3 I'm usually in random worlds, with friends or just chilling. If you see me around, come say hi!",
      platformLabel: 'Platform', platformValue: 'PCVR',
      trackingLabel: 'Tracking', trackingValue: '6 Gorbit Slimes · ICM45',
      worldsTitle: 'Favorite worlds',
      worlds: "My favorite world is the Opti YT Search. It's fun not playing in a slideshow."
    },
    setup: {
      eyebrow: 'my gear',
      title: 'My Setup',
      subtitle: 'what I use to play, create and hang out in VR',
      cards: [
        { icon: '💻', title: 'PC', items: ['Ryzen 7 3700X', 'RTX 5060 Ti 16GB', '32 GB RAM', 'WOLED QHD 240Hz (ROG)'] },
        { icon: '🥽', title: 'VR', items: ['Meta Quest 3', 'PCVR', '6 SlimeVR trackers'] },
        { icon: '🎮', title: 'Other peripherals', items: ['Ajazz AK820 MAX HE', 'ATK F1 V2 Ultimate', 'EasySMX X20'] },
        { icon: '🎧', title: 'Audio', items: ['Logitech G435', 'FIFINE K688'] }
      ]
    },
    links: {
      eyebrow: 'find me',
      title: 'Links',
      subtitle: 'where you can find or support me'
    },
    end: {
      backToTop: 'Back to top ↑',
      madeWith: 'made with ♥ by Iris',
      visits: 'visitors'
    },
    music: {
      loading: 'loading',
      play: 'Play',
      pause: 'Pause',
      skip: 'Next song',
      aria: 'Music player'
    },
    gallery: {
      open: 'Gallery',
      title: 'Gallery',
      close: 'Close gallery',
      empty: 'No photos here yet'
    }
  }
};

/* ==========================================================================
   3. Rendering helpers (no need to edit below)
   ========================================================================== */

function svgIcon(id, className) {
  const d = LINK_ICONS[id];
  if (!d) return '';
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${d}" fill="currentColor"/></svg>`;
}

function linkById(id) {
  return LINKS.find((l) => l.id === id);
}

function renderHeroTags(lang) {
  const list = translations[lang].hero.tags;
  const root = document.querySelector('[data-render="hero.tags"]');
  if (!root) return;
  root.innerHTML = list.map((t) => `<li class="hero-tag">${t}</li>`).join('');
}

function renderHeroLinks(lang) {
  const ids = ['discord', 'vrchat', 'steam'];
  const root = document.querySelector('[data-render="hero.links"]');
  if (!root) return;
  root.innerHTML = ids.map((id) => {
    const link = linkById(id);
    return `<a class="btn btn-primary" href="${link.href}">${svgIcon(id, 'btn-icon')}<span>${link.name[lang]}</span></a>`;
  }).join('');
}

function renderAboutLikes(lang) {
  const root = document.querySelector('[data-render="about.likes"]');
  if (root) root.textContent = translations[lang].about.likes;
}

function renderAboutInfo(lang) {
  const root = document.querySelector('[data-render="about.info"]');
  if (!root) return;
  root.innerHTML = translations[lang].about.info.map((i) =>
    `<li class="info-row"><span class="info-label">${i.label}</span><span class="info-value">${i.value}</span></li>`
  ).join('');
}

function renderInterests(lang) {
  const root = document.querySelector('[data-render="interests.groups"]');
  if (!root) return;
  root.innerHTML = translations[lang].interests.groups.map((g) =>
    `<article class="card interest-card">
       <h3 class="card-title">${g.title}</h3>
       <p class="card-text">${g.text}</p>
     </article>`
  ).join('');
}

function renderVrchatWorlds(lang) {
  const root = document.querySelector('[data-render="vrchat.worlds"]');
  if (root) root.textContent = translations[lang].vrchat.worlds;
}

function renderVrchatLinks(lang) {
  const ids = ['vrchat'];
  const root = document.querySelector('[data-render="vrchat.links"]');
  if (!root) return;
  root.innerHTML = ids.map((id) => {
    const link = linkById(id);
    return `<a class="btn btn-primary" href="${link.href}">${svgIcon(id, 'btn-icon')}<span>${link.name[lang]}</span></a>`;
  }).join('');
}

function renderSetup(lang) {
  const root = document.querySelector('[data-render="setup.cards"]');
  if (!root) return;
  root.innerHTML = translations[lang].setup.cards.map((c) =>
    `<article class="card setup-card">
       <span class="setup-icon" aria-hidden="true">${c.icon}</span>
       <h3 class="card-title">${c.title}</h3>
       <ul class="setup-items">${c.items.map((i) => `<li>${i}</li>`).join('')}</ul>
     </article>`
  ).join('');
}

function renderLinks(lang) {
  const root = document.querySelector('[data-render="links.items"]');
  if (!root) return;
  root.innerHTML = LINKS.map((l) =>
    `<li>
       <a class="link-card" href="${l.href}">
         ${svgIcon(l.id, 'link-icon')}
         <span class="link-text">
           <span class="link-name">${l.name[lang]}</span>
           <span class="link-desc">${l.desc[lang]}</span>
         </span>
         <span class="link-arrow" aria-hidden="true">↗</span>
       </a>
     </li>`
  ).join('');
}

function renderDynamic(lang) {
  renderHeroTags(lang);
  renderHeroLinks(lang);
  renderAboutLikes(lang);
  renderAboutInfo(lang);
  renderInterests(lang);
  renderVrchatWorlds(lang);
  renderVrchatLinks(lang);
  renderSetup(lang);
  renderLinks(lang);
}

/* ==========================================================================
   4. Language switching
   ========================================================================== */

const STORAGE_KEY = 'iris-lang';
let currentLang = 'es';

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = key.split('.').reduce((o, k) => (o ? o[k] : undefined), translations[lang]);
    if (value) node.textContent = value;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
    const key = node.getAttribute('data-i18n-aria');
    const value = key.split('.').reduce((o, k) => (o ? o[k] : undefined), translations[lang]);
    if (value) node.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
    const key = node.getAttribute('data-i18n-alt');
    const value = key.split('.').reduce((o, k) => (o ? o[k] : undefined), translations[lang]);
    if (value) node.setAttribute('alt', value);
  });

  renderDynamic(lang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.setAttribute('aria-pressed', String(active));
    btn.classList.toggle('is-active', active);
  });
}

function initLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const browser = (navigator.language || '').toLowerCase();

  if (saved === 'es' || saved === 'en') {
    currentLang = saved;
  } else if (browser.startsWith('en')) {
    currentLang = 'en';
  } else {
    currentLang = 'es';
  }

  applyLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      localStorage.setItem(STORAGE_KEY, lang);
      applyLanguage(lang);
    });
  });
}

/* ==========================================================================
   5. Navigation
   ========================================================================== */

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.classList.toggle('is-open', open);
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) {
      menu.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-open');
    }
  });

  const sections = ['home', 'about', 'vrchat', 'setup', 'links']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const links = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => {
          l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach((s) => observer.observe(s));
}

/* ==========================================================================
   6. Scroll reveal animations (respects prefers-reduced-motion)
   ========================================================================== */

function initReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const targets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((t) => observer.observe(t));
}

/* ==========================================================================
   7. Music player
   ========================================================================== */

const MUSIC_ICONS = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" fill="currentColor"/></svg>',
  skip: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5l9 7-9 7V5zm10 0h2v14h-2V5z" fill="currentColor"/></svg>'
};

let startMusicLoading = () => {};

function initMusicPlayer() {
  const player = document.getElementById('musicPlayer');
  if (!player || !MUSIC.tracks.length) return;

  const audio = new Audio();
  audio.preload = 'auto';
  audio.volume = MUSIC.volume;

  const titleEl = document.getElementById('musicTitle');
  const statusEl = document.getElementById('musicStatus');
  const progressEl = document.getElementById('musicProgress');
  const fillEl = document.getElementById('musicProgressFill');
  const toggleBtn = document.getElementById('musicToggle');
  const skipBtn = document.getElementById('musicSkip');
  const discImg = player.querySelector('.music-disc img');

  skipBtn.innerHTML = MUSIC_ICONS.skip;

  let index = 0;

  const music = () => translations[currentLang].music;
  const fmt = (t) => Math.floor(t / 60) + ':' + String(Math.floor(t % 60)).padStart(2, '0');

  function setState(state) {
    player.dataset.state = state;
  }

  function setToggleIcon() {
    const playing = player.dataset.state === 'playing';
    toggleBtn.innerHTML = playing ? MUSIC_ICONS.pause : MUSIC_ICONS.play;
    toggleBtn.setAttribute('aria-label', playing ? music().pause : music().play);
  }

  function setPlaying(isPlaying) {
    setState(isPlaying ? 'playing' : 'paused');
    setToggleIcon();
  }

  function loadTrack(i) {
    index = (i + MUSIC.tracks.length) % MUSIC.tracks.length;
    audio.src = MUSIC.tracks[index].src;
    titleEl.textContent = MUSIC.tracks[index].title;
    discImg.onerror = () => { discImg.src = 'assets/images/profile.jpg'; };
    discImg.src = MUSIC.tracks[index].cover || 'assets/images/profile.jpg';
  }

  const INTERACTION_EVENTS = ['pointerdown', 'keydown', 'touchstart'];

  function unlockInteraction() {
    INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, onFirstInteraction));
  }

  function onFirstInteraction(e) {
    if (player.dataset.state === 'playing') return;
    if (e.target && player.contains(e.target)) return;
    unlockInteraction();
    tryPlay();
  }

  function tryPlay() {
    audio.play().then(() => {
      unlockInteraction();
      setPlaying(true);
    }).catch(() => {
      setPlaying(false);
      if (!audio.duration) statusEl.textContent = '…';
    });
  }

  toggleBtn.addEventListener('click', () => {
    if (player.dataset.state === 'playing') {
      audio.pause();
      setPlaying(false);
    } else {
      tryPlay();
    }
  });

  skipBtn.addEventListener('click', () => {
    const wasPlaying = player.dataset.state === 'playing';
    loadTrack(index + 1);
    if (wasPlaying) tryPlay();
  });

  progressEl.addEventListener('click', (e) => {
    if (!audio.duration || player.dataset.state === 'loading') return;
    const rect = progressEl.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      fillEl.style.width = (audio.currentTime / audio.duration) * 100 + '%';
      statusEl.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
    }
  });

  audio.addEventListener('ended', () => {
    loadTrack(index + 1);
    tryPlay();
  });

  audio.addEventListener('error', () => {
    if (player.dataset.state !== 'loading') {
      setState('paused');
      setToggleIcon();
      statusEl.textContent = '…';
    }
  });

  loadTrack(0);
  fillEl.style.width = '0%';
  statusEl.textContent = music().loading + '… 0%';

  function startLoading() {
    const start = performance.now();
    const timer = setInterval(() => {
      const pct = Math.min(100, Math.round(((performance.now() - start) / MUSIC.startDelay) * 100));
      fillEl.style.width = pct + '%';
      statusEl.textContent = music().loading + '… ' + pct + '%';
      if (pct >= 100) {
        clearInterval(timer);
        toggleBtn.disabled = false;
        skipBtn.disabled = false;
        setState('paused');
        setToggleIcon();
        tryPlay();
        INTERACTION_EVENTS.forEach((e) => window.addEventListener(e, onFirstInteraction, { passive: true }));
      }
    }, 80);
  }

  startMusicLoading = startLoading;
}

/* ==========================================================================
   8. Visit counter
   ========================================================================== */

function initVisitCounter() {
  const el = document.getElementById('visitCounter');
  if (!el) return;

  if (VISITS.mode === 'moe') {
    const img = document.createElement('img');
    img.className = 'visit-count-img';
    img.alt = '';
    img.referrerPolicy = 'no-referrer';
    img.src = VISITS.moe + '&_=' + Date.now();
    el.replaceChildren(img);
    return;
  }

  fetch(VISITS.abacus)
    .then((r) => r.json())
    .then((data) => {
      if (typeof data.value === 'number') el.textContent = data.value;
    })
    .catch(() => {});
}

/* ==========================================================================
   9. Entry overlay
   ========================================================================== */

function initEntryOverlay() {
  const overlay = document.getElementById('entryOverlay');

  if (!overlay) {
    initReveal();
    startMusicLoading();
    return;
  }

  const content = document.querySelectorAll('header.site-nav, main, .page-end, .music-player, .skip-link');
  document.body.classList.add('locked');
  content.forEach((el) => { el.inert = true; });
  overlay.focus();

  function enter(lang) {
    if (lang === 'es' || lang === 'en') {
      localStorage.setItem(STORAGE_KEY, lang);
      applyLanguage(lang);
    }
    document.body.classList.remove('locked');
    content.forEach((el) => { el.inert = false; });
    overlay.classList.add('dismissed');
    setTimeout(() => overlay.remove(), 700);
    initReveal();
    startMusicLoading();
  }

  overlay.querySelectorAll('.entry-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.add('selected');
      setTimeout(() => enter(btn.getAttribute('data-lang')), 420);
    });
  });
}

/* ==========================================================================
   10. Gallery
   ========================================================================== */

const GALLERY_SECTIONS = [
  { id: 'vrchat', label: 'VRChat' },
  { id: 'irl', label: 'IRL' },
  { id: 'minecraft', label: 'Minecraft' }
];

function initGallery() {
  const gallery = document.getElementById('gallery');
  const openBtn = document.getElementById('openGallery');
  const closeBtn = document.getElementById('closeGallery');
  const tabsEl = gallery.querySelector('[data-render="gallery.tabs"]');
  const gridEl = gallery.querySelector('[data-render="gallery.grid"]');

  let active = 'vrchat';
  let lastFocus = null;

  const t = () => translations[currentLang];

  function renderTabs() {
    tabsEl.innerHTML = GALLERY_SECTIONS.map((s) =>
      `<button type="button" class="gallery-tab${s.id === active ? ' is-active' : ''}" role="tab"
         aria-selected="${s.id === active}" data-section="${s.id}">${s.label}</button>`
    ).join('');
  }

  function renderGrid() {
    const photos = GALLERY.photos[active] || [];
    if (!photos.length) {
      gridEl.innerHTML = `<div class="gallery-empty"><span aria-hidden="true">📷</span><p>${t().gallery.empty}</p></div>`;
      return;
    }
    gridEl.innerHTML = photos.map((src, i) =>
      `<figure class="gallery-item">
         <img src="${src}" alt="${active} ${i + 1}" loading="lazy">
       </figure>`
    ).join('');
  }

  function render() {
    renderTabs();
    renderGrid();
  }

  tabsEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.gallery-tab');
    if (!tab || tab.getAttribute('data-section') === active) return;
    active = tab.getAttribute('data-section');
    render();
  });

  function open() {
    lastFocus = document.activeElement;
    active = 'vrchat';
    render();
    gallery.hidden = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => gallery.classList.add('is-open'));
    });
    document.body.classList.add('locked');
    closeBtn.focus();
  }

  function close() {
    gallery.classList.remove('is-open');
    document.body.classList.remove('locked');
    setTimeout(() => { gallery.hidden = true; }, 320);
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('#openGallery, #navGallery').forEach((btn) => {
    btn.addEventListener('click', open);
  });
  closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !gallery.hidden) close();
  });
}

function init() {
  initLanguage();
  initNav();
  initMusicPlayer();
  initVisitCounter();
  initGallery();
  initEntryOverlay();
}

document.addEventListener('DOMContentLoaded', init);
