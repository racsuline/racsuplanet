/* ─── RACSU PLANET MULTILINGUAL (ES, EN, PT) ─── */
const I18N_TRANSLATIONS = {
  es: {
    meta_desc: "Racsu Planet - Servidor de Minecraft Skyblock en español. Compatible con Java y Bedrock Edition (PC, móviles y consolas).",
    nav_home: "Inicio",
    nav_how_to_join: "Cómo Entrar",
    nav_skyblock: "Skyblock",
    nav_modpack: "Modpack",
    nav_vote: "Votar",
    nav_rules: "Reglas",
    nav_store: "Tienda",

    hero_tagline: '<span class="hl">Servidor de Minecraft</span> | Java & Bedrock<a href="#disclaimer" class="hl-star" title="Ver aclaración">*</a>',
    hero_ip_text: "Click para copiar la IP",
    copied_text: "¡Copiado!",

    status_loading: "Consultando estado...",
    status_online: "Online",
    status_offline: "Offline",
    status_players: "Jugadores:",
    status_discord_online: "en Discord",

    guide_title: "Cómo Entrar en 3 Pasos",
    guide_subtitle: "Conéctate fácilmente desde cualquier edición oficial de Minecraft",
    guide_tab_java: "Java Edition",
    guide_tab_bedrock: "Bedrock (Móvil/Win10)",
    guide_tab_console: "Consolas",
    guide_step1_java_title: "Abre Minecraft Java",
    guide_step1_java_desc: "Inicia tu cliente oficial en versión 26.2 o superior.",
    guide_step2_java_title: "Añadir Servidor",
    guide_step2_java_desc: "Multijugador > Añadir Servidor con la IP play.racsu.com",
    guide_step3_java_title: "¡A Jugar!",
    guide_step3_java_desc: "Guarda y conéctate. Tu isla flotante te espera.",
    guide_step1_bedrock_title: "Abre Minecraft Bedrock",
    guide_step1_bedrock_desc: "Desde Windows 10/11, Android o iOS con cuenta oficial.",
    guide_step2_bedrock_title: "Añadir a Servidores",
    guide_step2_bedrock_desc: "Pestaña Servidores > Añadir Servidor con IP y puerto.",
    guide_step3_bedrock_title: "Conéctate",
    guide_step3_bedrock_desc: "Presiona Jugar y comienza tu aventura en el cielo.",
    guide_step1_console_title: "Instala BedrockTogether",
    guide_step1_console_desc: "Descarga la app en tu móvil o tablet (Android o iOS) conectado a la misma red Wi-Fi que tu consola:",
    guide_step2_console_title: "Configura en la App",
    guide_step2_console_desc: "Añade los datos de Racsu Planet y presiona el botón Run para iniciar la conexión LAN:",
    guide_step3_console_title: "Entra desde tu Consola",
    guide_step3_console_desc: 'Abre Minecraft en tu consola, entra a la pestaña <strong>Amigos</strong> y únete a Racsu Planet bajo <strong>Partidas LAN</strong>. ¡Mantén la app abierta!',
    console_thirdparty_notice: "Racsu Planet no está afiliado a esta app ni a sus desarrolladores. Es una herramienta de terceros; no ofrecemos soporte técnico para su funcionamiento, pero puedes preguntarnos en Discord.",
    console_troubleshoot_title: "Problemas comunes y soluciones",
    console_troubleshoot_p1: "Misma red Wi-Fi: La consola y el móvil deben estar en la misma red local (evita redes de invitados o aislamiento AP).",
    console_troubleshoot_p2: "Permiso en iOS (iPhone/iPad): Verifica en Ajustes > BedrockTogether que el permiso de Red local esté activado.",
    console_troubleshoot_p3: "Mantener app abierta: No cierres la app en tu teléfono mientras juegas; si se cierra, se perderá la conexión LAN.",
    console_troubleshoot_p4: "Suscripción online: Requiere suscripción activa según tu consola (Xbox Game Pass Core, PlayStation Plus o Nintendo Switch Online) y cuenta Microsoft.",
    console_troubleshoot_p5: "Si no aparece en la lista: Pulsa Stop y vuelve a pulsar Run en la app móvil, y espera unos segundos en la pestaña Amigos de la consola.",
    console_dns_title: "Otros métodos: Redirección DNS (BedrockConnect)",
    console_dns_desc: "También puedes conectar cambiando la DNS primaria de tu consola por una IP pública de BedrockConnect (ej. 104.238.130.180). Al unirte a cualquier servidor destacado oficial se abrirá una lista para escribir play.racsu.com. Este método puede verse afectado si tu proveedor bloquea DNS externas, por lo que recomendamos BedrockTogether.",
    guide_copy_ip: "Copiar IP",
    guide_copy_port: "Copiar Puerto",
    guide_modpack_tip: "Paso opcional: Instala el modpack oficial Racsu Planet+ para optimizar tu rendimiento.",
    guide_modpack_btn: "Ver Modpack",

    trailer_title: "Tráiler Oficial",
    trailer_subtitle: "Echa un vistazo a la experiencia que te espera en Racsu Planet",

    skyblock_title: "¿Qué vas a encontrar?",
    skyblock_subtitle: "Todo lo que necesitas para tu aventura en el cielo",
    feat_islands_title: "Islas",
    feat_islands_desc: "Comienza desde cero en tu isla flotante y construye tu propio mundo.",
    feat_duels_title: "Duelos y KOTH",
    feat_duels_desc: "Compite en la arena de combate PvP y domina la colina en eventos KOTH.",
    feat_grid1_title: "Economía y Farming",
    feat_grid1_desc: "Cultiva recursos, véndelos en el mercado dinámico y domina la economía.",
    feat_grid2_title: "Clasificaciones",
    feat_grid2_desc: "Sube en el ranking de nivel de islas y demuestra quién manda en el cielo.",
    feat_grid3_title: "Java & Bedrock",
    feat_grid3_desc: "Conéctate con tu cuenta oficial desde Java o Bedrock en play.racsu.com",

    modpack_title: "Racsu Planet+",
    modpack_subtitle: "Modpack oficial del servidor — Fabric · MC 26.2",
    modpack_tag_opt: "Optimización",
    modpack_tag_ui: "Nueva Interfaz",
    modpack_tag_anim: "Animaciones",
    modpack_desc: 'Pack personalizado con <strong style="color:var(--ore-text-bright);">+90 mods</strong> seleccionados para optimizar FPS, añadir shaders y renovar la estética visual.',
    modpack_download_text: "Descargar Modpack en Modrinth",

    community_title: "Comunidad y Votación",
    community_subtitle: "Únete a nuestro Discord y vota para ganar recompensas",
    community_discord_title: "Discord de Racsu Planet",
    community_discord_desc: "Conoce a otros jugadores, comparte capturas de tu isla y participa en sorteos y torneos de la comunidad.",
    community_discord_cta: "Unirse al Discord Oficial →",
    community_vote_title: "Vota por Racsu Planet",
    community_vote_desc: "Apoya al servidor votando en nuestras 10 plataformas asociadas y recibe 50 estrellas por voto en tu cuenta de juego.",
    community_vote_btn: "Ver sitios de votación →",

    rules_title: "Reglas del Servidor",
    rules_subtitle: "Normativa básica para mantener una comunidad sana, justa y respetuosa",
    rules_r1: "Prohibido el discurso de odio, discriminación, bullying o acoso.",
    rules_r2: "Prohibidas las discusiones políticas o religiosas.",
    rules_r3: "Usa lenguaje apropiado; sin spam, mayúsculas excesivas ni contenido NSFW.",
    rules_r4: "Prohibido el uso de exploits, bugs, VPNs y construcción de lag machines.",
    rules_r5: "PvP activado; respeta a los demás y usa el sentido común en todo momento.",
    rules_summary_link: "Leer las 21 Reglas Oficiales Completas →",

    vote_page_title: "Vota por Racsu Planet",
    vote_page_subtitle: "Apoya al servidor y consigue 50 estrellas por voto en cada plataforma:",
    vote_modrinth_title: "¿Utilizas Modrinth?",
    vote_modrinth_desc: "También puedes apoyarnos siguiendo y guardando el servidor en Modrinth para enterarte de todas nuestras novedades.",
    vote_modrinth_btn: "Guardar Servidor en Modrinth",

    footer_brand_desc: "Servidor de Minecraft Skyblock en español compatible con Java y Bedrock Edition.",
    footer_links_title: "Links Rápidos",
    footer_community_title: "Comunidad",
    footer_server_title: "Conexión",
    footer_disclaimer: '<span class="hl-star">*</span> Servidor <span class="hl-gold">Premium</span>: requiere una cuenta legal de Minecraft para jugar (no compatible con versiones crackeadas o pirateadas).',
    footer_copyright: "© 2026 Racsu Planet. No afiliado con Mojang AB ni Microsoft. Contacto: me@racsu.com"
  },
  en: {
    meta_desc: "Racsu Planet - Spanish Minecraft Skyblock server. Compatible with Java and Bedrock Edition (PC, mobile, and consoles).",
    nav_home: "Home",
    nav_how_to_join: "How to Join",
    nav_skyblock: "Skyblock",
    nav_modpack: "Modpack",
    nav_vote: "Vote",
    nav_rules: "Rules",
    nav_store: "Store",

    hero_tagline: '<span class="hl">Minecraft Server</span> | Java & Bedrock<a href="#disclaimer" class="hl-star" title="View clarification">*</a>',
    hero_ip_text: "Click to copy IP",
    copied_text: "Copied!",

    status_loading: "Checking status...",
    status_online: "Online",
    status_offline: "Offline",
    status_players: "Players:",
    status_discord_online: "on Discord",

    guide_title: "How to Join in 3 Steps",
    guide_subtitle: "Easily connect from any official Minecraft edition",
    guide_tab_java: "Java Edition",
    guide_tab_bedrock: "Bedrock (Mobile/Win10)",
    guide_tab_console: "Consoles",
    guide_step1_java_title: "Open Minecraft Java",
    guide_step1_java_desc: "Launch your official client on version 26.2 or higher.",
    guide_step2_java_title: "Add Server",
    guide_step2_java_desc: "Multiplayer > Add Server with the IP play.racsu.com",
    guide_step3_java_title: "Join & Play!",
    guide_step3_java_desc: "Save and connect. Your floating skyblock island awaits.",
    guide_step1_bedrock_title: "Open Minecraft Bedrock",
    guide_step1_bedrock_desc: "From Windows 10/11, Android, or iOS with an official account.",
    guide_step2_bedrock_title: "Add to Servers",
    guide_step2_bedrock_desc: "Servers tab > Add Server with IP and port.",
    guide_step3_bedrock_title: "Connect",
    guide_step3_bedrock_desc: "Press Play and start your Skyblock adventure.",
    guide_step1_console_title: "Install BedrockTogether",
    guide_step1_console_desc: "Download the app on your mobile or tablet (Android or iOS) connected to the same Wi-Fi network as your console:",
    guide_step2_console_title: "Configure in the App",
    guide_step2_console_desc: "Enter Racsu Planet server details and tap Run to start the LAN connection:",
    guide_step3_console_title: "Join from your Console",
    guide_step3_console_desc: 'Open Minecraft on your console, go to the <strong>Friends</strong> tab, and join Racsu Planet under <strong>LAN Games</strong>. Keep the app open!',
    console_thirdparty_notice: "Racsu Planet is not affiliated with this app or its developers. It is a third-party tool; we do not provide technical support for its operation, but you can ask us on Discord.",
    console_troubleshoot_title: "Common issues and solutions",
    console_troubleshoot_p1: "Same Wi-Fi network: Your console and mobile device must be on the exact same local network (avoid guest networks or AP isolation).",
    console_troubleshoot_p2: "iOS Permission (iPhone/iPad): Go to Settings > BedrockTogether and ensure the Local Network permission is enabled.",
    console_troubleshoot_p3: "Keep app open: Do not close the app on your phone while playing; if closed, the LAN connection will drop.",
    console_troubleshoot_p4: "Online subscription: Requires an active multiplayer subscription on your console (Xbox Game Pass Core, PlayStation Plus, or Nintendo Switch Online) and a Microsoft account.",
    console_troubleshoot_p5: "If it does not show up: Tap Stop and then Run again in the mobile app, and wait a few seconds in the console Friends tab.",
    console_dns_title: "Other methods: DNS Redirection (BedrockConnect)",
    console_dns_desc: "You can also connect by setting your console's primary DNS to a public BedrockConnect IP (e.g. 104.238.130.180). Joining any official featured server will bring up a menu to enter play.racsu.com. This method can be blocked by certain ISPs or routers, which is why we recommend BedrockTogether.",
    guide_copy_ip: "Copy IP",
    guide_copy_port: "Copy Port",
    guide_modpack_tip: "Optional step: Install the official Racsu Planet+ modpack for boosted performance.",
    guide_modpack_btn: "View Modpack",

    trailer_title: "Official Trailer",
    trailer_subtitle: "Take a quick look at the adventure awaiting you in Racsu Planet",

    skyblock_title: "What You'll Find",
    skyblock_subtitle: "Everything you need for your sky adventure",
    feat_islands_title: "Islands",
    feat_islands_desc: "Start from scratch on your floating island and build your own world.",
    feat_duels_title: "Duels & KOTH",
    feat_duels_desc: "Fight in PvP duels and rule the hill during live KOTH events.",
    feat_grid1_title: "Economy & Farming",
    feat_grid1_desc: "Farm resources, sell in the market, and dominate the economy.",
    feat_grid2_title: "Leaderboards",
    feat_grid2_desc: "Level up your island and show who rules the sky.",
    feat_grid3_title: "Java & Bedrock",
    feat_grid3_desc: "Connect with your official account from Java or Bedrock at play.racsu.com",

    modpack_title: "Racsu Planet+",
    modpack_subtitle: "Official server modpack — Fabric · MC 26.2",
    modpack_tag_opt: "Optimization",
    modpack_tag_ui: "New Interface",
    modpack_tag_anim: "Animations",
    modpack_desc: 'Custom pack with <strong style="color:var(--ore-text-bright);">+90 mods</strong> selected to optimize FPS, add shaders, and refresh the UI.',
    modpack_download_text: "Download Modpack on Modrinth",

    community_title: "Community & Voting",
    community_subtitle: "Join our Discord and vote to earn in-game rewards",
    community_discord_title: "Racsu Planet Discord",
    community_discord_desc: "Meet other players, share screenshots of your island, and take part in community giveaways and tournaments.",
    community_discord_cta: "Join Official Discord →",
    community_vote_title: "Vote for Racsu Planet",
    community_vote_desc: "Support the server by voting on our 10 partner platforms and receive 50 stars per vote on your account.",
    community_vote_btn: "View voting sites →",

    rules_title: "Server Rules",
    rules_subtitle: "Essential guidelines to keep our community fair, safe, and fun",
    rules_r1: "No hate speech, discrimination, bullying, or harassment.",
    rules_r2: "Political and religious arguments are prohibited.",
    rules_r3: "Use appropriate language; no spam, excessive caps, or NSFW content.",
    rules_r4: "No exploits, bugs, VPNs, or building lag machines.",
    rules_r5: "PvP enabled; respect others and use common sense at all times.",
    rules_summary_link: "Read all 21 Official Rules →",

    vote_page_title: "Vote for Racsu Planet",
    vote_page_subtitle: "Support the server and get 50 stars per vote on each platform:",
    vote_modrinth_title: "Do you use Modrinth?",
    vote_modrinth_desc: "You can also support us by following and saving the server on Modrinth to stay tuned for updates.",
    vote_modrinth_btn: "Save Server on Modrinth",

    footer_brand_desc: "Minecraft Skyblock server compatible with Java and Bedrock Edition.",
    footer_links_title: "Quick Links",
    footer_community_title: "Community",
    footer_server_title: "Connection",
    footer_disclaimer: '<span class="hl-star">*</span> <span class="hl-gold">Premium</span> server: requires an official Minecraft account to play (cracked or pirated versions are not supported).',
    footer_copyright: "© 2026 Racsu Planet. Not affiliated with Mojang AB or Microsoft. Contact: me@racsu.com"
  },
  pt: {
    meta_desc: "Racsu Planet - Servidor de Minecraft Skyblock em espanhol. Compatível com Java e Bedrock Edition (PC, celulares e consoles).",
    nav_home: "Início",
    nav_how_to_join: "Como Entrar",
    nav_skyblock: "Skyblock",
    nav_modpack: "Modpack",
    nav_vote: "Votar",
    nav_rules: "Regras",
    nav_store: "Loja",

    hero_tagline: '<span class="hl">Servidor de Minecraft</span> | Java & Bedrock<a href="#disclaimer" class="hl-star" title="Ver esclarecimento">*</a>',
    hero_ip_text: "Clique para copiar o IP",
    copied_text: "Copiado!",

    status_loading: "Verificando status...",
    status_online: "Online",
    status_offline: "Offline",
    status_players: "Jogadores:",
    status_discord_online: "no Discord",

    guide_title: "Como Entrar em 3 Passos",
    guide_subtitle: "Conecte-se facilmente de qualquer edição oficial de Minecraft",
    guide_tab_java: "Java Edition",
    guide_tab_bedrock: "Bedrock (Mobile/Win10)",
    guide_tab_console: "Consoles",
    guide_step1_java_title: "Abra o Minecraft Java",
    guide_step1_java_desc: "Inicie seu cliente oficial na versão 26.2 ou superior.",
    guide_step2_java_title: "Adicionar Servidor",
    guide_step2_java_desc: "Multijogador > Adicionar Servidor com o IP play.racsu.com",
    guide_step3_java_title: "Conecte-se e Jogue!",
    guide_step3_java_desc: "Salve e entre. Sua ilha flutuante te espera.",
    guide_step1_bedrock_title: "Abra o Minecraft Bedrock",
    guide_step1_bedrock_desc: "No Windows 10/11, Android ou iOS com conta oficial.",
    guide_step2_bedrock_title: "Adicionar aos Servidores",
    guide_step2_bedrock_desc: "Aba Servidores > Adicionar Servidor com IP e porta.",
    guide_step3_bedrock_title: "Conectar",
    guide_step3_bedrock_desc: "Pressione Jogar e comece sua jornada no Skyblock.",
    guide_step1_console_title: "Instale o BedrockTogether",
    guide_step1_console_desc: "Baixe o aplicativo no celular ou tablet (Android ou iOS) conectado à mesma rede Wi-Fi do seu console:",
    guide_step2_console_title: "Configure no App",
    guide_step2_console_desc: "Insira os dados do Racsu Planet e toque no botão Run para iniciar a conexão LAN:",
    guide_step3_console_title: "Entre pelo seu Console",
    guide_step3_console_desc: 'Abra o Minecraft no seu console, vá até a aba <strong>Amigos</strong> e entre no Racsu Planet em <strong>Partidas LAN</strong>. Mantenha o app aberto!',
    console_thirdparty_notice: "O Racsu Planet não é afiliado a este aplicativo nem aos seus desenvolvedores. É uma ferramenta de terceiros; não oferecemos suporte técnico para seu funcionamento, mas você pode tirar dúvidas no Discord.",
    console_troubleshoot_title: "Problemas comuns e soluções",
    console_troubleshoot_p1: "Mesma rede Wi-Fi: O console e o celular devem estar na mesma rede local (evite redes de convidados ou isolamento de AP).",
    console_troubleshoot_p2: "Permissão no iOS (iPhone/iPad): Vá em Ajustes > BedrockTogether e verifique se a permissão de Rede Local está ativada.",
    console_troubleshoot_p3: "Manter app aberto: Não feche o app no telefone enquanto joga; se for fechado, a conexão LAN será perdida.",
    console_troubleshoot_p4: "Assinatura online: Requer assinatura ativa de acordo com seu console (Xbox Game Pass Core, PlayStation Plus ou Nintendo Switch Online) e conta Microsoft.",
    console_troubleshoot_p5: "Se não aparecer na lista: Toque em Stop e depois em Run no aplicativo do celular, e aguarde alguns segundos na aba Amigos do console.",
    console_dns_title: "Outros métodos: Redirecionamento DNS (BedrockConnect)",
    console_dns_desc: "Você também pode se conectar alterando o DNS primário do console para um IP público do BedrockConnect (ex: 104.238.130.180). Ao entrar em qualquer servidor em destaque oficial, abrirá um menu para digitar play.racsu.com. Esse método pode ser bloqueado por certos provedores, por isso recomendamos o BedrockTogether.",
    guide_copy_ip: "Copiar IP",
    guide_copy_port: "Copiar Porta",
    guide_modpack_tip: "Passo opcional: Instale o modpack oficial Racsu Planet+ para máximo desempenho.",
    guide_modpack_btn: "Ver Modpack",

    trailer_title: "Trailer Oficial",
    trailer_subtitle: "Veja uma prévia da aventura que te espera no Racsu Planet",

    skyblock_title: "O que você vai encontrar?",
    skyblock_subtitle: "Tudo o que você precisa para sua jornada no céu",
    feat_islands_title: "Ilhas",
    feat_islands_desc: "Comece do zero em sua ilha flutuante e construa seu próprio mundo.",
    feat_duels_title: "Duelos e KOTH",
    feat_duels_desc: "Lute em duelos PvP e domine a colina em eventos KOTH.",
    feat_grid1_title: "Economia e Farming",
    feat_grid1_desc: "Cultive recursos, venda no mercado e domine a economia.",
    feat_grid2_title: "Classificações",
    feat_grid2_desc: "Suba no ranking de ilhas e mostre quem manda no céu.",
    feat_grid3_title: "Java & Bedrock",
    feat_grid3_desc: "Conecte-se com sua conta oficial de Java ou Bedrock em play.racsu.com",

    modpack_title: "Racsu Planet+",
    modpack_subtitle: "Modpack oficial del servidor — Fabric · MC 26.2",
    modpack_tag_opt: "Otimização",
    modpack_tag_ui: "Nova Interface",
    modpack_tag_anim: "Animações",
    modpack_desc: 'Pack personalizado com <strong style="color:var(--ore-text-bright);">+90 mods</strong> selecionados para otimizar FPS, shaders e visual.',
    modpack_download_text: "Baixar Modpack no Modrinth",

    community_title: "Comunidade e Votação",
    community_subtitle: "Entre no nosso Discord e vote para ganhar recompensas",
    community_discord_title: "Discord do Racsu Planet",
    community_discord_desc: "Conheça outros jogadores, compartilhe fotos da sua ilha e participe de sorteios e torneios da comunidade.",
    community_discord_cta: "Entrar no Discord Oficial →",
    community_vote_title: "Vote no Racsu Planet",
    community_vote_desc: "Apoie o servidor votando em nossas 10 plataformas parceiras e ganhe 50 estrelas por voto na sua conta.",
    community_vote_btn: "Ver sites de votação →",

    rules_title: "Regras do Servidor",
    rules_subtitle: "Diretrizes essenciais para manter uma comunidade segura e justa",
    rules_r1: "Proibido discurso de ódio, discriminação, bullying ou assédio.",
    rules_r2: "Proibidas discussões políticas ou religiosas.",
    rules_r3: "Use linguagem apropriada; sem spam, maiúsculas excessivas ou NSFW.",
    rules_r4: "Proibido uso de exploits, bugs, VPNs e máquinas de lag.",
    rules_r5: "PvP ativado; respeite os outros e use o bom senso sempre.",
    rules_summary_link: "Ler as 21 Regras Oficiais Completas →",

    vote_page_title: "Vote no Racsu Planet",
    vote_page_subtitle: "Apoie o servidor e ganhe 50 estrelas por voto em cada plataforma:",
    vote_modrinth_title: "Você usa o Modrinth?",
    vote_modrinth_desc: "Você também pode nos apoiar seguindo e salvando o servidor no Modrinth para acompanhar as novidades.",
    vote_modrinth_btn: "Salvar Servidor no Modrinth",

    footer_brand_desc: "Servidor de Minecraft Skyblock compatível com Java e Bedrock Edition.",
    footer_links_title: "Links Rápidos",
    footer_community_title: "Comunidade",
    footer_server_title: "Conexão",
    footer_disclaimer: '<span class="hl-star">*</span> Servidor <span class="hl-gold">Premium</span>: requer uma conta oficial de Minecraft para jogar (não compatível com versões piratas ou crackeadas).',
    footer_copyright: "© 2026 Racsu Planet. Não afiliado à Mojang AB ou Microsoft. Contato: me@racsu.com"
  }
};

function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  if (paramLang && ['es', 'en', 'pt'].includes(paramLang)) {
    return paramLang;
  }

  const saved = localStorage.getItem('preferred-lang');
  if (saved && ['es', 'en', 'pt'].includes(saved)) {
    return saved;
  }

  const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('en')) return 'en';
  return 'es';
}

function updateLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('preferred-lang', lang);

  const select = document.getElementById('lang-select');
  if (select) select.value = lang;

  const currentDict = I18N_TRANSLATIONS[lang] || I18N_TRANSLATIONS.es;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (currentDict[key] !== undefined) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = currentDict[key];
      } else {
        el.textContent = currentDict[key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (currentDict[key] !== undefined) {
      el.setAttribute('title', currentDict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (currentDict[key] !== undefined) {
      el.setAttribute('placeholder', currentDict[key]);
    }
  });

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && currentDict.meta_desc) {
    descMeta.setAttribute('content', currentDict.meta_desc);
  }
}

function changeLanguage(lang) {
  updateLanguage(lang);
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

document.addEventListener('DOMContentLoaded', () => {
  const initialLang = detectLanguage();
  updateLanguage(initialLang);
});
