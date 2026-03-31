const STORAGE_KEYS = {
    activeUser: 'everest_active_user',
    users: 'everest_temp_users',
    progress: 'everest_dashboard_progress',
    settings: 'everest_dashboard_settings',
    customWords: 'everest_dashboard_custom_words',
    wordEdits: 'everest_dashboard_word_edits',
    hiddenWords: 'everest_dashboard_hidden_words',
    controlWordDraft: 'everest_control_word_draft'
};

const SESSION_MS = 60 * 60 * 1000;
const CONTROL_MODE_HASH = '7797e2a91f350ba257658afea4fd03a5ff63793c7abdb4ac01efb422debc6b15';
const CONTROL_SESSION_KEY = 'everest_control_mode_unlocked';
const LOGIN_FALLBACK_URL = 'https://astroversed.github.io/everest.start/';
const FIRESTORE_LEADERBOARD_COLLECTION = 'leaderboard';
const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyCVb6UZ48mcD8tAW67LMMVPi2SMNiemcUY',
    authDomain: 'everest-dashboard-e58a5.firebaseapp.com',
    projectId: 'everest-dashboard-e58a5',
    storageBucket: 'everest-dashboard-e58a5.firebasestorage.app',
    messagingSenderId: '36464478604',
    appId: '1:36464478604:web:b8dfacd61af6c80aa3eea9',
    measurementId: 'G-EBP09MWQRD'
};
const THEME_ICONS = {
    'basic-communication': 'assets/icons/Communication.png',
    'grammar-language': 'assets/icons/Grammar.png',
    'human-body-identity': 'assets/icons/Body.png',
    'personal-social-life': 'assets/icons/Personal.png',
    'education-work': 'assets/icons/Education.png',
    'places-environment': 'assets/icons/Places.png',
    'movement-navigation': 'assets/icons/Travel.png',
    'shopping-daily-life': 'assets/icons/Daily.png',
    'clothing-style': 'assets/icons/Style.png',
    'food-drinks': 'assets/icons/Food.png',
    'nature-weather': 'assets/icons/Weather.png',
    'culture-leisure': 'assets/icons/Culture.png',
    'tools-objects': 'assets/icons/Tools.png',
    technology: 'assets/icons/Technology.png',
    'concepts-academic': 'assets/icons/Colors.png'

};

const CONTROL_FORGE_EMOJIS = [
    '\uD83D\uDCD8', '\uD83D\uDCDA', '\uD83E\uDDE0', '\uD83D\uDCAC', '\uD83D\uDDE3\uFE0F', '\u270D\uFE0F',
    '\uD83C\uDFAF', '\uD83E\uDDED', '\u26F0\uFE0F', '\u2744\uFE0F', '\uD83C\uDF24\uFE0F', '\uD83C\uDF3F',
    '\uD83C\uDF0A', '\uD83C\uDFD9\uFE0F', '\uD83D\uDE8F', '\uD83C\uDF4E', '\u2615', '\uD83E\uDDF0',
    '\uD83D\uDCBB', '\uD83C\uDF93', '\uD83E\uDE7A', '\uD83C\uDFC3', '\uD83D\uDC4B', '\u2764\uFE0F',
    '\uD83C\uDF89', '\uD83D\uDCA1', '\uD83D\uDE80', '\uD83D\uDEB2', '\uD83C\uDFB5', '\uD83D\uDCCD'
];

const CONTROL_FORGE_EMOJI_CATEGORIES = [
    {
        id: 'study',
        title: 'Study',
        emojis: ['\uD83D\uDCD8', '\uD83D\uDCDA', '\uD83E\uDDE0', '\uD83D\uDCDD', '\u270F\uFE0F', '\uD83D\uDCD6', '\uD83C\uDF93', '\uD83E\uDDE9', '\uD83D\uDCA1', '\uD83D\uDCCC', '\uD83D\uDCCE', '\uD83D\uDCC2']
    },
    {
        id: 'people',
        title: 'People',
        emojis: ['\uD83D\uDC4B', '\uD83E\uDDD1', '\uD83D\uDC68\u200D\uD83C\uDFEB', '\uD83D\uDC69\u200D\uD83C\uDFEB', '\uD83E\uDDD1\u200D\uD83D\uDCBB', '\uD83D\uDC68\u200D\uD83D\uDCBB', '\uD83D\uDC69\u200D\uD83D\uDCBB', '\uD83E\uDD1D', '\uD83E\uDEF6', '\uD83D\uDE4C', '\uD83D\uDC4F', '\uD83D\uDDE3\uFE0F']
    },
    {
        id: 'nature',
        title: 'Nature',
        emojis: ['\u26F0\uFE0F', '\u2744\uFE0F', '\uD83C\uDF24\uFE0F', '\uD83C\uDF27\uFE0F', '\uD83C\uDF08', '\uD83C\uDF0A', '\uD83C\uDF3F', '\uD83C\uDF33', '\uD83C\uDF3B', '\uD83C\uDF43', '\uD83D\uDD25', '\u2B50']
    },
    {
        id: 'travel',
        title: 'Travel',
        emojis: ['\uD83D\uDE8C', '\uD83D\uDE97', '\uD83D\uDEB2', '\u2708\uFE0F', '\uD83D\uDE80', '\uD83E\uDDED', '\uD83D\uDCCD', '\uD83D\uDDFA\uFE0F', '\uD83C\uDFD9\uFE0F', '\uD83C\uDFE0', '\uD83C\uDFEB', '\uD83C\uDFDE\uFE0F']
    },
    {
        id: 'food',
        title: 'Food',
        emojis: ['\uD83C\uDF4E', '\uD83C\uDF49', '\uD83C\uDF53', '\uD83C\uDF55', '\uD83C\uDF54', '\uD83C\uDF5F', '\uD83C\uDF2E', '\uD83C\uDF5E', '\u2615', '\uD83E\uDDC3', '\uD83C\uDF7D\uFE0F', '\uD83E\uDD57']
    },
    {
        id: 'fun',
        title: 'Fun',
        emojis: ['\uD83C\uDFAF', '\uD83C\uDFAE', '\uD83C\uDFB5', '\uD83C\uDFA7', '\uD83C\uDFAC', '\uD83C\uDFA8', '\uD83C\uDFC6', '\u26BD', '\uD83C\uDFC0', '\uD83C\uDF89', '\u2764\uFE0F', '\uD83D\uDE0A']
    }
];

const EVEREST_LINES = {
    success: [
        'The ridge just opened for you.',
        'It is cold at the top, but that answer was warm.',
        'Snow on the summit, fire in your progress.',
        'That step held. Keep climbing.'
    ],
    error: [
        'Thin air happens. Reset your footing and try again.',
        'The trail slipped there. The next step can hold.',
        'A little ice on the route. Read the clue and climb again.',
        'The summit is patient. Take another pass.'
    ],
    info: [
        'Everest likes calm focus and clean repetitions.',
        'Climb one precise answer at a time.',
        'The summit rewards consistency more than speed.',
        'Every route becomes clearer after a few steps.'
    ]
};

const controlUi = {
    en: {
        title: 'Control mode',
        subtitle: 'Unlock Everest administration tools for this dashboard session only.',
        unlockLabel: 'Control key',
        unlockPlaceholder: 'Enter the control key',
        unlockButton: 'Unlock control mode',
        unlockedBadge: 'Control mode active',
        lockedHint: 'Only the final options block can open this route.',
        managedUser: 'Managed user',
        managedUserText: 'Choose the climber you want to manage.',
        userSelect: 'Select a climber',
        rankTools: 'Ranking and session actions',
        rankToolsText: 'Remove a climber from the ridge or close the session completely.',
        removeRanking: 'Remove from ranking',
        closeSession: 'Close session',
        statTools: 'Points, wins, loses and session time',
        statToolsText: 'Adjust the current stored values and session minutes remaining.',
        sessionMinutes: 'Minutes left',
        applyStats: 'Apply changes',
        explorerTools: 'Explorer word forge',
        explorerToolsText: 'Create, update or remove native-learning words directly inside the Explorer.',
        wordTheme: 'Theme',
        wordTerm: 'English term',
        wordType: 'Type',
        wordMeaning: 'Meaning',
        wordExample: 'Example',
        wordTip: 'Everest tip',
        wordEmoji: 'Emoji',
        wordPicker: 'Explorer word',
        wordPickerText: 'Load an existing Explorer word to edit it, or keep the forge clear to create a new one.',
        wordPickerPlaceholder: 'Choose an Explorer word',
        wordPickerSearch: 'Search an Explorer word...',
        addWord: 'Add explorer word',
        saveWord: 'Save explorer word',
        deleteWord: 'Delete explorer word',
        clearWord: 'New word',
        unlockSuccess: 'Control mode unlocked. The ridge now answers to your commands.',
        unlockFail: 'That key could not open Control mode.',
        userRemoved: 'The climber was removed from the live ranking.',
        sessionClosed: 'The selected session was closed from the ridge.',
        statsApplied: 'User stats and session time were updated.',
        wordAdded: 'The new explorer word was added to the route.',
        wordUpdated: 'The explorer word was updated successfully.',
        wordDeleted: 'The explorer word was removed from the route.',
        wordLoaded: 'The explorer word is ready in the forge.',
        noManagedUser: 'Choose a climber before using Control mode.',
        selfClosed: 'Your session was closed from Control mode.',
        wordIncomplete: 'Complete every explorer field before saving the word.',
        wordNeedSelection: 'Choose an existing Explorer word before trying to delete it.',
        currentStageTag: 'Current route',
        deactivateButton: 'Deactivate control mode',
        deactivateSuccess: 'Control mode was closed and your pending changes were secured.',
        managedSearchPlaceholder: 'Search a climber...',
        themeSearchPlaceholder: 'Search a theme...',
        wordThemePlaceholder: 'Choose a route',
        emojiGridHint: 'Choose an emoji for the new Explorer word.'
    },
    es: {
        title: 'Modo control',
        subtitle: 'Desbloquea herramientas de administraci\u00F3n de Everest solo para esta sesi\u00F3n del dashboard.',
        unlockLabel: 'Clave de control',
        unlockPlaceholder: 'Introduce la clave de control',
        unlockButton: 'Desbloquear modo control',
        unlockedBadge: 'Modo control activo',
        lockedHint: 'Solo el \u00FAltimo bloque de opciones puede abrir esta ruta.',
        managedUser: 'Usuario administrado',
        managedUserText: 'Elige el escalador que quieres gestionar.',
        userSelect: 'Selecciona un escalador',
        rankTools: 'Acciones de ranking y sesi\u00F3n',
        rankToolsText: 'Quita a un escalador del ranking o cierra su sesi\u00F3n por completo.',
        removeRanking: 'Eliminar del ranking',
        closeSession: 'Cerrar sesi\u00F3n',
        statTools: 'Puntos, victorias, derrotas y tiempo de sesi\u00F3n',
        statToolsText: 'Ajusta los valores guardados y los minutos restantes de la sesi\u00F3n.',
        sessionMinutes: 'Minutos restantes',
        applyStats: 'Aplicar cambios',
        explorerTools: 'Editor de palabras del Explorer',
        explorerToolsText: 'Crea, edita o elimina palabras de aprendizaje natural directamente dentro del Explorer.',
        wordTheme: 'Tema',
        wordTerm: 'T\u00E9rmino en ingl\u00E9s',
        wordType: 'Tipo',
        wordMeaning: 'Significado',
        wordExample: 'Ejemplo',
        wordTip: 'Consejo Everest',
        wordEmoji: 'Emoji',
        wordPicker: 'Palabra del Explorer',
        wordPickerText: 'Carga una palabra existente del Explorer para editarla, o deja la forja limpia para crear una nueva.',
        wordPickerPlaceholder: 'Elige una palabra del Explorer',
        wordPickerSearch: 'Buscar una palabra del Explorer...',
        addWord: 'Agregar palabra al Explorer',
        saveWord: 'Guardar palabra del Explorer',
        deleteWord: 'Eliminar palabra del Explorer',
        clearWord: 'Nueva palabra',
        unlockSuccess: 'Modo control desbloqueado. La cresta ahora responde a tus comandos.',
        unlockFail: 'Esa clave no pudo abrir el Modo control.',
        userRemoved: 'El escalador fue retirado del ranking en vivo.',
        sessionClosed: 'La sesion seleccionada fue cerrada desde la cresta.',
        statsApplied: 'Los datos del usuario y su tiempo de sesi\u00F3n fueron actualizados.',
        wordAdded: 'La nueva palabra del Explorer fue agregada a la ruta.',
        wordUpdated: 'La palabra del Explorer fue actualizada correctamente.',
        wordDeleted: 'La palabra del Explorer fue eliminada de la ruta.',
        wordLoaded: 'La palabra del Explorer ya est\u00E1 lista en el editor.',
        noManagedUser: 'Elige un escalador antes de usar el Modo control.',
        selfClosed: 'Tu sesi\u00F3n fue cerrada desde el Modo control.',
        wordIncomplete: 'Completa todos los campos del Explorer antes de guardar la palabra.',
        wordNeedSelection: 'Elige primero una palabra existente del Explorer antes de intentar eliminarla.',
        currentStageTag: 'Ruta actual',
        deactivateButton: 'Desactivar modo control',
        deactivateSuccess: 'El Modo control se cerr\u00F3 y tus cambios pendientes fueron guardados.',
        managedSearchPlaceholder: 'Buscar un escalador...',
        themeSearchPlaceholder: 'Buscar un tema...',
        wordThemePlaceholder: 'Elige una ruta',
        emojiGridHint: 'Elige un emoji para la palabra del Explorer.'
    }
};

const ui = {
    en: {
        welcome: 'Welcome, {name}.',
        subtitle: 'Build points, clear themed stages, and keep your route moving toward fluency.',
        points: 'Points', wins: 'Wins', losses: 'Loses', time: 'Time',
        summitChoice: 'Summit Choice', summitTyping: 'Summit Typing', summitMatch: 'Word Match',
        chooseEnglish: 'Choose the English word for "{word}".',
        typeEnglish: 'Type the English word for "{word}".',
        matchPairPrompt: 'Build the best emoji path for "{word}".',
        matchPairHelp: 'Pick one route clue and one final emoji so the center word becomes easy to understand.',
        matchSignalLabel: 'Route clue',
        matchEmojiLabel: 'Final emoji',
        matchSignalStep: '1. Pick the route clue',
        matchEmojiStep: '2. Pick the final emoji',
        matchSelectionIdle: 'Choose both sides to complete the route.',
        matchSelectionSignal: 'Clue selected',
        matchSelectionEmoji: 'Emoji selected',
        hintPrefix: 'Clue', examplePrefix: 'Trail use',
        idleTitle: 'Base camp ready.',
        idleText: 'It is cold at the top, but your next answer can warm the route.',
        correctTitle: 'Clean footing.', wrongTitle: 'Another step is waiting.', timeoutTitle: 'Time froze on the ridge.',
        stageClear: 'Stage clear', stageRetry: 'Stage needs one more pass',
        nextChallenge: 'Next challenge', checkAnswer: 'Check answer', typePlaceholder: 'Type the answer in English',
        stagePoints: 'Stage points', accuracy: 'Accuracy', routeFocus: 'Route focus',
        startStage: 'Start current stage', replay: 'Replay stage', continue: 'Continue climb',
        openLibrary: 'Open library', focusRoute: 'Focus current route', searchThemes: 'Search routes, games or themes',
        searchLibrary: 'Search a term, tip or theme', topRidge: 'Top 20 ridge', quickOptions: 'Quick options',
        darkMode: 'Dark mode', lightMode: 'Light mode', language: 'Language', sound: 'Sound', voice: 'Voice', animations: 'Animations',
        statusOn: 'On', statusOff: 'Off',
        gameMode: 'Game mode',
        play: 'Play', select: 'Select', edit: 'Edit', allThemes: 'All themes', activeClimber: 'Active climber',
        coursePending: 'Course pending', routePending: 'Route pending',
        themeClearedLabel: '{count}/3 cleared',
        openDeckTitle: 'Open {theme} deck',
        hideDeckTitle: 'Hide {theme} deck',
        openDeckText: 'Current route: {theme}. Open the deck when you want the full map.',
        hideDeckText: 'The sidebar already keeps the fast route switcher ready. Close this deck to reduce visual weight.',
        themeStagesTitle: '{theme} stages',
        stageBest: '{value}% best',
        stageClears: '{value} clears',
        youHere: 'You are climbing here', languageHelp: 'Switch the Everest interface between English and Spanish.',
        noLeaderboard: 'Only active climbers appear here for this 1-hour pass.',
        noExplorer: 'Open a route and Everest will surface themed terms here.',
        noThemeResults: 'No routes matched that search.',
        noChallenge: 'Pick a stage and start the climb to receive your first prompt.',
        noUser: 'No active climb pass was found. Everest created a temporary guest ridge.',
        logoutDone: 'Your climb pass was closed. See you on the next ascent.',
        timeoutText: 'The route ran out of time, but you can still climb the next step.',
        rankLine: 'Current ridge rank: #{rank}', rankUnknown: 'Rank will appear after the leaderboard settles.',
        topRoute: 'Current route', stageBadge: 'Stage {stage}', pointsBadge: '{points} clear bonus',
        clearBonus: 'Clear bonus',
        modeBlockTitle: 'Game mode', modeBlockText: 'Keep the original Everest spirit, but choose how you want to answer.',
        animationBlockTitle: 'Dashboard motion', animationBlockText: 'Keep Everest fully animated, or reduce motion when a device needs a lighter experience.',
        themeBlockTitle: 'Summit look', themeBlockText: 'Switch between light and dark atmosphere without losing clarity.',
        audioBlockTitle: 'Climb support', audioBlockText: 'Use sound and voice when you want extra feedback on the route.',
        resultWinText: 'You cleared the stage and pushed your climb forward.',
        resultLoseText: 'The route resisted this time, but the path is clearer now.',
        wordTermPlaceholder: 'glacier',
        wordTypePlaceholder: 'noun',
        wordMeaningPlaceholder: 'glaciar',
        wordExamplePlaceholder: 'The glacier is melting slowly.',
        wordTipPlaceholder: 'Use it for ice landscapes and cold nature topics.'
    },
    es: {
        welcome: 'Bienvenido, {name}.',
        subtitle: 'Acumula puntos, supera etapas tematicas y sigue subiendo hacia la fluidez.',
        points: 'Puntos', wins: 'Victorias', losses: 'Derrotas', time: 'Tiempo',
        summitChoice: 'Respuesta con opciones', summitTyping: 'Respuesta escrita', summitMatch: 'Emparejar palabras',
        chooseEnglish: 'Elige la palabra en ingles para "{word}".',
        typeEnglish: 'Escribe la palabra en ingles para "{word}".',
        matchPairPrompt: 'Construye la mejor ruta de emojis para "{word}".',
        matchPairHelp: 'Elige una pista de ruta y un emoji final para que la palabra del centro sea facil de entender.',
        matchSignalLabel: 'Pista de ruta',
        matchEmojiLabel: 'Emoji final',
        matchSignalStep: '1. Elige la pista de ruta',
        matchEmojiStep: '2. Elige el emoji final',
        matchSelectionIdle: 'Elige ambos lados para completar la ruta.',
        matchSelectionSignal: 'Pista elegida',
        matchSelectionEmoji: 'Emoji elegido',
        hintPrefix: 'Pista', examplePrefix: 'Uso en ruta',
        idleTitle: 'Campamento base listo.',
        idleText: 'Hace frio en la cima, pero tu siguiente respuesta puede calentar la ruta.',
        correctTitle: 'Paso limpio.', wrongTitle: 'Hay otro paso esperando.', timeoutTitle: 'El tiempo se congelo en la cresta.',
        stageClear: 'Etapa completada', stageRetry: 'La etapa necesita otro intento',
        nextChallenge: 'Siguiente desafio', checkAnswer: 'Verificar respuesta', typePlaceholder: 'Escribe la respuesta en ingles',
        stagePoints: 'Puntos de la etapa', accuracy: 'Precisi\u00F3n', routeFocus: 'Meta de la ruta',
        startStage: 'Iniciar etapa actual', replay: 'Repetir etapa', continue: 'Seguir escalando',
        openLibrary: 'Abrir biblioteca', focusRoute: 'Enfocar ruta actual', searchThemes: 'Buscar rutas, juegos o temas',
        searchLibrary: 'Buscar un t\u00E9rmino, pista o tema', topRidge: 'Top 20 de Everest', quickOptions: 'Ajustes r\u00E1pidos',
        darkMode: 'Modo oscuro', lightMode: 'Modo claro', language: 'Idioma', sound: 'Sonido', voice: 'Voz', animations: 'Animaciones',
        statusOn: 'Activado', statusOff: 'Desactivado',
        gameMode: 'Modo de juego',
        play: 'Jugar', select: 'Seleccionar', edit: 'Editar', allThemes: 'Todos los temas', activeClimber: 'Escalador activo',
        coursePending: 'Curso pendiente', routePending: 'Ruta pendiente',
        themeClearedLabel: '{count}/3 completadas',
        openDeckTitle: 'Abrir panel de {theme}',
        hideDeckTitle: 'Ocultar panel de {theme}',
        openDeckText: 'Ruta actual: {theme}. Abre este panel cuando quieras ver el mapa completo.',
        hideDeckText: 'La barra lateral ya deja listo el cambio rapido de ruta. Cierra este panel para reducir carga visual.',
        themeStagesTitle: 'Etapas de {theme}',
        stageBest: '{value}% mejor resultado',
        stageClears: '{value} completadas',
        youHere: 'Est\u00E1s escalando aqu\u00ED', languageHelp: 'Cambia el idioma de la interfaz de Everest entre ingl\u00E9s y espa\u00F1ol.',
        noLeaderboard: 'Solo los escaladores activos aparecen aqui durante este pase de 1 hora.',
        noExplorer: 'Abre una ruta y Everest te mostrar\u00E1 aqu\u00ED vocabulario tem\u00E1tico.',
        noThemeResults: 'Ninguna ruta coincide con esa b\u00FAsqueda.',
        noChallenge: 'Elige una etapa y empieza la subida para recibir tu primer desaf\u00EDo.',
        noUser: 'No se encontr\u00F3 un pase activo. Everest cre\u00F3 una cresta temporal de invitado.',
        logoutDone: 'Tu pase de escalada se cerr\u00F3. Nos vemos en la siguiente ascensi\u00F3n.',
        timeoutText: 'La ruta se qued\u00F3 sin tiempo, pero a\u00FAn puedes subir el siguiente paso.',
        rankLine: 'Puesto actual en la cresta: #{rank}', rankUnknown: 'El puesto aparecer\u00E1 cuando el ranking se estabilice.',
        topRoute: 'Ruta actual', stageBadge: 'Etapa {stage}', pointsBadge: '{points} puntos extra',
        clearBonus: 'Bono por completar',
        modeBlockTitle: 'Modo de juego', modeBlockText: 'Mantiene la esencia original de Everest, pero te permite elegir c\u00F3mo responder.',
        animationBlockTitle: 'Movimiento del panel', animationBlockText: 'Mant\u00E9n Everest con sus animaciones normales o reduce el movimiento si el dispositivo necesita una experiencia m\u00E1s ligera.',
        themeBlockTitle: 'Apariencia', themeBlockText: 'Cambia entre modo claro y modo oscuro sin perder claridad.',
        audioBlockTitle: 'Ayuda de ruta', audioBlockText: 'Activa sonido y voz si quieres m\u00E1s apoyo durante la ruta.',
        resultWinText: 'Superaste la etapa y seguiste avanzando en tu ascenso.',
        resultLoseText: 'Esta vez la ruta se resisti\u00F3, pero ahora el camino est\u00E1 m\u00E1s claro.',
        wordTermPlaceholder: 'glacier',
        wordTypePlaceholder: 'sustantivo',
        wordMeaningPlaceholder: 'glaciar',
        wordExamplePlaceholder: 'The glacier is melting slowly.',
        wordTipPlaceholder: 'Usala para paisajes helados y temas de naturaleza fria.'
    }
};

const state = {
    themes: [], baseLibrary: [], library: [], settings: null, user: null, progress: null,
    activeThemeId: null, activeStageId: 1, searchTerm: '', explorerSearch: '', explorerTheme: 'all',
    stageLive: false, questions: [], questionIndex: 0, currentQuestion: null, questionResolved: false,
    secondsLeft: 15, timerId: null, stageStartedAt: 0, stagePoints: 0, stageCorrect: 0, stageWrong: 0,
    streak: 0, bestStreak: 0, latestAccuracy: 0, matchSelection: { signal: '', emoji: '' }, controlModeUnlocked: sessionStorage.getItem(CONTROL_SESSION_KEY) === '1', controlManagedUserId: '', controlWordDraft: readStorage(STORAGE_KEYS.controlWordDraft, null), controlWordPanelOpen: false, controlEmojiPanelOpen: false, optionPulseKey: '', optionPulseTimer: null,
    sharedLeaderboard: [], firestore: null, firestoreReady: false, firestoreListener: null, firestoreCleanupBusy: false
};

const elements = {
    appShell: document.getElementById('appShell'), sidebar: document.getElementById('sidebar'), sidebarToggle: document.getElementById('sidebarToggle'),
    sidebarBrand: document.querySelector('.sidebar__brand'),
    sidebarSearch: document.getElementById('sidebarSearch'), themeSearchInput: document.getElementById('themeSearchInput'), themeSearchClear: document.getElementById('themeSearchClear'), themeNav: document.getElementById('themeNav'), themeGrid: document.getElementById('themeGrid'),
    stageList: document.getElementById('stageList'), loadingScreen: document.getElementById('loadingScreen'), loadingMessage: document.getElementById('loadingMessage'),
    welcomeTitle: document.getElementById('welcomeTitle'), welcomeSubtitle: document.getElementById('welcomeSubtitle'), sessionCountdown: document.getElementById('sessionCountdown'),
    activeThemeName: document.getElementById('activeThemeName'), activeModeLabel: document.getElementById('activeModeLabel'), profileAvatar: document.getElementById('profileAvatar'),
    profileEmoji: document.getElementById('profileEmoji'), profileName: document.getElementById('profileName'), profileCourse: document.getElementById('profileCourse'),
    profileRankline: document.getElementById('profileRankline'), metaPoints: document.getElementById('metaPoints'), metaWins: document.getElementById('metaWins'),
    metaLosses: document.getElementById('metaLosses'), metaTime: document.getElementById('metaTime'),
    stageSectionTitle: document.getElementById('stageSectionTitle'), stageThemeFocus: document.getElementById('stageThemeFocus'), gameCard: document.getElementById('gameCard'), gameThemeTitle: document.getElementById('gameThemeTitle'),
    gameThemeDescription: document.getElementById('gameThemeDescription'), questionCounter: document.getElementById('questionCounter'), timerBadge: document.getElementById('timerBadge'),
    streakBadge: document.getElementById('streakBadge'), progressBar: document.getElementById('progressBar'), challengeVisual: document.getElementById('challengeVisual'), challengeEmoji: document.getElementById('challengeEmoji'),
    challengeTypeLabel: document.getElementById('challengeTypeLabel'), challengePrompt: document.getElementById('challengePrompt'), challengeHint: document.getElementById('challengeHint'),
    challengeExample: document.getElementById('challengeExample'), gameFeedback: document.getElementById('gameFeedback'), feedbackTitle: document.getElementById('feedbackTitle'),
    feedbackText: document.getElementById('feedbackText'), typingForm: document.getElementById('typingForm'), typingInput: document.getElementById('typingInput'),
    typingSubmitButton: document.getElementById('typingSubmitButton'), choiceGrid: document.getElementById('choiceGrid'), stagePointsLabel: document.getElementById('stagePointsLabel'),
    stageAccuracyLabel: document.getElementById('stageAccuracyLabel'), nextQuestionButton: document.getElementById('nextQuestionButton'), resetStageButton: document.getElementById('resetStageButton'),
    leaderboardPreview: document.getElementById('leaderboardPreview'), leaderboardTableBody: document.getElementById('leaderboardTableBody'), explorerFeatured: document.getElementById('explorerFeatured'),
    explorerGrid: document.getElementById('explorerGrid'), explorerSearchInput: document.getElementById('explorerSearchInput'), explorerSearchClear: document.getElementById('explorerSearchClear'), explorerThemeSelect: document.getElementById('explorerThemeSelect'),
    explorerThemeSelectShell: document.getElementById('explorerThemeSelectShell'), explorerThemeTrigger: document.getElementById('explorerThemeTrigger'),
    explorerThemeTriggerLabel: document.getElementById('explorerThemeTriggerLabel'), explorerThemeDropdown: document.getElementById('explorerThemeDropdown'),
    explorerThemeSearch: document.getElementById('explorerThemeSearch'), explorerThemeOptions: document.getElementById('explorerThemeOptions'),
    quickOptions: document.getElementById('quickOptions'), optionsSections: document.getElementById('optionsSections'), toastStack: document.getElementById('toastStack'),
    sidebarSupportTitle: document.getElementById('sidebarSupportTitle'), sidebarSupportText: document.getElementById('sidebarSupportText'), heroStartButton: document.getElementById('heroStartButton'),
    heroExploreButton: document.getElementById('heroExploreButton'), scrollThemeIntoViewButton: document.getElementById('scrollThemeIntoViewButton'),
    themeDeckToggle: document.getElementById('themeDeckToggle'), themeDeckBody: document.getElementById('themeDeckBody'),
    themeDeckToggleTitle: document.getElementById('themeDeckToggleTitle'), themeDeckToggleText: document.getElementById('themeDeckToggleText'),
    stageToggle: document.getElementById('stageToggle'), stageBody: document.getElementById('stageBody'),
    explorerToggle: document.getElementById('explorerToggle'), explorerBody: document.getElementById('explorerBody'),
    optionsToggle: document.getElementById('optionsToggle'), optionsBody: document.getElementById('optionsBody'),
    openExplorerInlineButton: document.getElementById('openExplorerInlineButton'), openLeaderboardInlineButton: document.getElementById('openLeaderboardInlineButton'),
    themeModeQuickToggle: document.getElementById('themeModeQuickToggle'), leaderboardButton: document.getElementById('leaderboardButton'), explorerButton: document.getElementById('explorerButton'),
    optionsButton: document.getElementById('optionsButton'), logoutButton: document.getElementById('logoutButton'), leaderboardModal: document.getElementById('leaderboardModal'),
    explorerModal: document.getElementById('explorerModal'), optionsModal: document.getElementById('optionsModal'), resultModal: document.getElementById('resultModal'),
    resultIcon: document.getElementById('resultIcon'), resultBadge: document.getElementById('resultBadge'), resultTitle: document.getElementById('resultTitle'),
    resultSubtitle: document.getElementById('resultSubtitle'), resultStats: document.getElementById('resultStats'), resultReplayButton: document.getElementById('resultReplayButton'),
    resultContinueButton: document.getElementById('resultContinueButton')
};

function readStorage(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
        console.error(`Failed to read ${key}`, error);
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Failed to write ${key}`, error);
    }
}

function sortLeaderboardEntries(a, b) {
    return b.points - a.points || b.wins - a.wins || a.losses - b.losses || a.createdAt - b.createdAt;
}

function normalizeLeaderboardEntry(entry = {}) {
    return {
        ...entry,
        points: Number(entry.points || 0),
        wins: Number(entry.wins || 0),
        losses: Number(entry.losses || 0),
        totalPlayMs: Number(entry.totalPlayMs || 0),
        createdAt: Number(entry.createdAt || 0),
        updatedAt: Number(entry.updatedAt || 0),
        expiresAt: Number(entry.expiresAt || 0),
        hiddenFromLeaderboard: Boolean(entry.hiddenFromLeaderboard)
    };
}

function getCurrentUserLeaderboardEntry() {
    if (!state.user || !state.progress) return null;

    return normalizeLeaderboardEntry({
        ...state.user,
        points: state.progress.points,
        wins: state.progress.wins,
        losses: state.progress.losses,
        totalPlayMs: state.progress.totalPlayMs,
        lastPlayedTheme: state.progress.lastPlayedTheme,
        leaderboardVisible: hasRecordedResults({
            points: state.progress.points,
            wins: state.progress.wins,
            losses: state.progress.losses,
            totalPlayMs: state.progress.totalPlayMs
        }),
        updatedAt: Number(state.user.updatedAt || Date.now())
    });
}

function hasRecordedResults(entry = {}) {
    return Number(entry.points || 0) > 0
        || Number(entry.wins || 0) > 0
        || Number(entry.losses || 0) > 0
        || Number(entry.totalPlayMs || 0) > 0;
}

function isLeaderboardVisible(entry = {}) {
    if (typeof entry.leaderboardVisible === 'boolean') {
        return entry.leaderboardVisible;
    }

    return hasRecordedResults(entry);
}

function getSharedLeaderboardCollection() {
    return state.firestore ? state.firestore.collection(FIRESTORE_LEADERBOARD_COLLECTION) : null;
}

function buildSharedLeaderboardPayload(user) {
    const source = normalizeLeaderboardEntry(user);
    return {
        username: source.username || '',
        usernameNormalized: source.usernameNormalized || getUserId(source),
        profileEmoji: source.profileEmoji || '\uD83E\uDDE0',
        profileColor: source.profileColor || '#4b74f0',
        course: source.course || '',
        points: source.points,
        wins: source.wins,
        losses: source.losses,
        totalPlayMs: source.totalPlayMs,
        lastPlayedTheme: source.lastPlayedTheme || null,
        leaderboardVisible: isLeaderboardVisible(source),
        createdAt: source.createdAt || Date.now(),
        expiresAt: source.expiresAt || (Date.now() + SESSION_MS),
        hiddenFromLeaderboard: Boolean(source.hiddenFromLeaderboard),
        updatedAt: Date.now()
    };
}

function syncCurrentUserFromSharedRecord(record) {
    if (!state.user || !record || getUserId(record) !== getUserId(state.user)) return;
    const localCurrent = getCurrentUserLeaderboardEntry();
    if (localCurrent && Number(record.updatedAt || 0) < Number(localCurrent.updatedAt || 0)) {
        return;
    }

    if (record.expiresAt <= Date.now()) {
        localStorage.removeItem(STORAGE_KEYS.activeUser);
        window.location.href = LOGIN_FALLBACK_URL;
        return;
    }

    state.user = { ...state.user, ...record };
    writeStorage(STORAGE_KEYS.activeUser, state.user);

    if (state.progress) {
        state.progress = {
            ...state.progress,
            points: record.points,
            wins: record.wins,
            losses: record.losses,
            totalPlayMs: record.totalPlayMs,
            lastPlayedTheme: record.lastPlayedTheme || state.progress.lastPlayedTheme
        };

        const allProgress = readAllProgress();
        allProgress[getUserId(state.user)] = {
            ...getDefaultProgress(),
            ...(allProgress[getUserId(state.user)] || {}),
            ...state.progress
        };
        writeAllProgress(allProgress);
    }
}

async function cleanupExpiredSharedLeaderboard() {
    if (!state.firestoreReady || state.firestoreCleanupBusy) return;

    const expired = state.sharedLeaderboard.filter((entry) => entry.expiresAt > 0 && entry.expiresAt <= Date.now());
    if (!expired.length) return;

    state.firestoreCleanupBusy = true;
    try {
        await Promise.allSettled(expired.map((entry) => getSharedLeaderboardCollection()?.doc(getUserId(entry)).delete()));
    } catch (error) {
        console.error('Failed to clean expired leaderboard entries', error);
    } finally {
        state.firestoreCleanupBusy = false;
    }
}

function refreshSharedUi() {
    renderLeaderboard();
    renderProfile();
    if (!elements.optionsModal.hidden) {
        refreshManagedUserPanel();
    }
}

function subscribeToSharedLeaderboard() {
    const collection = getSharedLeaderboardCollection();
    if (!collection) return;

    if (typeof state.firestoreListener === 'function') {
        state.firestoreListener();
    }

    state.firestoreListener = collection.onSnapshot((snapshot) => {
        state.sharedLeaderboard = snapshot.docs.map((doc) => normalizeLeaderboardEntry({ id: doc.id, ...doc.data() }));
        const currentRemoteUser = state.sharedLeaderboard.find((entry) => getUserId(entry) === getUserId(state.user));
        if (currentRemoteUser) {
            syncCurrentUserFromSharedRecord(currentRemoteUser);
        }
        void cleanupExpiredSharedLeaderboard();
        refreshSharedUi();
    }, (error) => {
        console.error('Failed to subscribe to shared leaderboard', error);
    });
}

function setupSharedLeaderboard() {
    if (!window.firebase || typeof window.firebase.initializeApp !== 'function' || typeof window.firebase.firestore !== 'function') {
        console.warn('Firebase Firestore is unavailable. Everest will keep using local leaderboard sync.');
        return;
    }

    try {
        if (!window.firebase.apps.length) {
            window.firebase.initializeApp(FIREBASE_CONFIG);
        }
        state.firestore = window.firebase.firestore();
        state.firestoreReady = true;
        subscribeToSharedLeaderboard();
    } catch (error) {
        console.error('Failed to initialize Firebase Firestore', error);
        state.firestoreReady = false;
        state.firestore = null;
    }
}

async function syncSharedLeaderboardUser(user) {
    const collection = getSharedLeaderboardCollection();
    if (!collection || !user) return;

    try {
        await collection.doc(getUserId(user)).set(buildSharedLeaderboardPayload(user), { merge: true });
    } catch (error) {
        console.error('Failed to sync leaderboard user', error);
    }
}

async function expireSharedLeaderboardUser(userId, overrides = {}) {
    const collection = getSharedLeaderboardCollection();
    if (!collection || !userId) return;

    try {
        await collection.doc(userId).set({
            expiresAt: Date.now() - 1000,
            hiddenFromLeaderboard: true,
            updatedAt: Date.now(),
            ...overrides
        }, { merge: true });
    } catch (error) {
        console.error('Failed to expire leaderboard user', error);
    }
}

async function deleteSharedLeaderboardUser(userId) {
    const collection = getSharedLeaderboardCollection();
    if (!collection || !userId) return;

    try {
        await collection.doc(userId).delete();
    } catch (error) {
        console.error('Failed to delete leaderboard user', error);
    }
}

function normalizeWord(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
}

function randomFrom(list) { return list[Math.floor(Math.random() * list.length)]; }
function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function t(key, replacements = {}) {
    const language = state.settings?.language || 'en';
    let text = (ui[language] && ui[language][key]) || ui.en[key] || key;
    Object.entries(replacements).forEach(([token, value]) => { text = text.replace(`{${token}}`, value); });
    return text;
}

function tc(key) {
    const language = state.settings?.language || 'en';
    return (controlUi[language] && controlUi[language][key]) || controlUi.en[key] || key;
}

function getStatusLabel(isActive) {
    return isActive ? t('statusOn') : t('statusOff');
}

function getGameModeLabel(mode = state.settings?.gameMode) {
    if (mode === 'typing') return t('summitTyping');
    if (mode === 'match') return t('summitMatch');
    return t('summitChoice');
}

function getThemeMatchSignalEmoji(themeId = state.activeThemeId) {
    return THEME_MATCH_SIGNAL_EMOJIS[themeId] || '🧭';
}

function getOptionStatusMarkup(label, isActive) {
    return `${label} <span class="toggle-pill__status">${getStatusLabel(isActive)}</span>`;
}

function formatDuration(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatSession(ms) {
    const safe = Math.max(0, ms);
    const minutes = Math.floor(safe / 60000);
    const seconds = Math.floor((safe % 60000) / 1000);
    return `${minutes}m ${String(seconds).padStart(2, '0')}s left`;
}

function getUserId(user) { return user?.usernameNormalized || normalizeWord(user?.username || 'guest'); }
function getDefaultSettings() { return { language: 'en', gameMode: 'multiple', soundOn: true, voiceOn: false, animationsOn: true, themeMode: 'light' }; }
function getDefaultProgress() { return { points: 0, wins: 0, losses: 0, totalPlayMs: 0, lastPlayedTheme: null, stageResults: {} }; }

const THEME_MATCH_SIGNAL_EMOJIS = {
    'basic-communication': '💬',
    'grammar-language': '🧩',
    'human-body-identity': '🧍',
    'personal-social-life': '👥',
    'education-work': '🎓',
    'places-environment': '📍',
    'movement-navigation': '🧭',
    'shopping-daily-life': '🛍️',
    'clothing-style': '👗',
    'food-drinks': '🍽️',
    'nature-weather': '🌦️',
    'culture-leisure': '🎭',
    'tools-objects': '🧰',
    technology: '💻',
    'concepts-academic': '📘'
};

function pruneUsers() {
    const now = Date.now();
    const users = readStorage(STORAGE_KEYS.users, []).filter((user) => user && user.expiresAt > now);
    writeStorage(STORAGE_KEYS.users, users);
    return users;
}

function loadSettings() {
    state.settings = { ...getDefaultSettings(), ...readStorage(STORAGE_KEYS.settings, {}) };
    document.body.dataset.themeMode = state.settings.themeMode;
    document.body.dataset.motionMode = state.settings.animationsOn ? 'full' : 'reduced';
}

function saveSettings() {
    writeStorage(STORAGE_KEYS.settings, state.settings);
    document.body.dataset.themeMode = state.settings.themeMode;
    document.body.dataset.motionMode = state.settings.animationsOn ? 'full' : 'reduced';
}

function loadProgress() {
    const all = readAllProgress();
    state.progress = { ...getDefaultProgress(), ...(all[getUserId(state.user)] || {}) };
}

function saveProgress() {
    const all = readAllProgress();
    all[getUserId(state.user)] = state.progress;
    writeAllProgress(all);
    void syncUserRoster();
}

function syncUserRoster() {
    const users = pruneUsers();
    const merged = {
        ...state.user,
        points: state.progress.points,
        wins: state.progress.wins,
        losses: state.progress.losses,
        totalPlayMs: state.progress.totalPlayMs,
        lastPlayedTheme: state.progress.lastPlayedTheme,
        leaderboardVisible: hasRecordedResults({
            points: state.progress.points,
            wins: state.progress.wins,
            losses: state.progress.losses,
            totalPlayMs: state.progress.totalPlayMs
        }),
        updatedAt: Date.now()
    };
    const index = users.findIndex((entry) => getUserId(entry) === getUserId(state.user));
    if (index >= 0) users[index] = { ...users[index], ...merged }; else users.push(merged);
    writeStorage(STORAGE_KEYS.users, users);
    syncActiveUserRecord(merged);
    return syncSharedLeaderboardUser(merged);
}

function bootstrapUser() {
    pruneUsers();
    const active = readStorage(STORAGE_KEYS.activeUser, null);
    if (!active || active.expiresAt <= Date.now()) {
        if (active) {
            const expiredUserId = getUserId(active);
            const users = pruneUsers().filter((user) => getUserId(user) !== expiredUserId);
            writeStorage(STORAGE_KEYS.users, users);
            const allProgress = readAllProgress();
            delete allProgress[expiredUserId];
            writeAllProgress(allProgress);
            state.sharedLeaderboard = state.sharedLeaderboard.filter((user) => getUserId(user) !== expiredUserId);
            void deleteSharedLeaderboardUser(expiredUserId);
        }
        localStorage.removeItem(STORAGE_KEYS.activeUser);
        window.location.href = LOGIN_FALLBACK_URL;
        return false;
    }

    state.user = active;
    loadProgress();
    void syncUserRoster();
    return true;
}

function readAllProgress() {
    return readStorage(STORAGE_KEYS.progress, {});
}

function writeAllProgress(allProgress) {
    writeStorage(STORAGE_KEYS.progress, allProgress);
}

function syncActiveUserRecord(updatedUser) {
    if (getUserId(updatedUser) !== getUserId(state.user)) return;
    state.user = { ...state.user, ...updatedUser };
    writeStorage(STORAGE_KEYS.activeUser, state.user);
}

function getExplorerWordId(entry) {
    if (!entry) return '';
    if (entry.id) return entry.id;
    return `base:${normalizeWord(entry.theme)}::${normalizeWord(entry.term)}::${normalizeWord(entry.type)}::${normalizeWord(entry.meaning)}`;
}

function buildExplorerWordEntry(payload, existingId = '') {
    const entry = {
        theme: payload.theme,
        term: cleanControlText(payload.term, 80),
        type: cleanControlText(payload.type, 40),
        meaning: cleanControlText(payload.meaning, 140),
        example: cleanControlText(payload.example, 180),
        tip: cleanControlText(payload.tip, 120),
        emoji: cleanControlText(payload.emoji, 8) || '\uD83D\uDCD8'
    };

    if (existingId) {
        entry.id = existingId;
    }

    return entry;
}

function ensureCustomWordIds(customWords = []) {
    let changed = false;
    const normalized = customWords.map((entry) => {
        if (entry && entry.id) return entry;
        changed = true;
        return { ...entry, id: `custom_${Date.now()}_${Math.random().toString(16).slice(2, 10)}` };
    });

    if (changed) {
        writeStorage(STORAGE_KEYS.customWords, normalized);
    }

    return normalized;
}

function refreshLibraryFromStorage() {
    const customWords = ensureCustomWordIds(readStorage(STORAGE_KEYS.customWords, []));
    const wordEdits = readStorage(STORAGE_KEYS.wordEdits, {});
    const hiddenWords = new Set(readStorage(STORAGE_KEYS.hiddenWords, []));

    const decorateEntry = (entry, origin) => {
        if (!entry) return null;
        const id = getExplorerWordId(entry);
        if (hiddenWords.has(id)) return null;
        const patch = wordEdits[id] || {};
        return {
            ...entry,
            ...patch,
            id,
            __origin: origin
        };
    };

    state.library = [
        ...state.baseLibrary.map((entry) => decorateEntry(entry, 'base')).filter(Boolean),
        ...customWords.map((entry) => decorateEntry(entry, 'custom')).filter(Boolean)
    ];
}

function getExplorerWordById(wordId) {
    return state.library.find((entry) => getExplorerWordId(entry) === wordId) || null;
}

function updateExplorerWord(payload) {
    const wordId = String(payload.wordId || '').trim();
    if (!wordId) return false;

    const nextEntry = buildExplorerWordEntry(payload, wordId.startsWith('custom_') ? wordId : '');

    if (wordId.startsWith('custom_')) {
        const customWords = ensureCustomWordIds(readStorage(STORAGE_KEYS.customWords, []));
        const nextWords = customWords.map((entry) => entry.id === wordId ? { ...entry, ...nextEntry, id: wordId } : entry);
        writeStorage(STORAGE_KEYS.customWords, nextWords);
    } else {
        const wordEdits = readStorage(STORAGE_KEYS.wordEdits, {});
        wordEdits[wordId] = nextEntry;
        writeStorage(STORAGE_KEYS.wordEdits, wordEdits);
    }

    refreshLibraryFromStorage();
    return true;
}

function deleteExplorerWord(wordId) {
    const targetId = String(wordId || '').trim();
    if (!targetId) return false;

    if (targetId.startsWith('custom_')) {
        const customWords = ensureCustomWordIds(readStorage(STORAGE_KEYS.customWords, []));
        writeStorage(STORAGE_KEYS.customWords, customWords.filter((entry) => entry.id !== targetId));
    } else {
        const hiddenWords = Array.from(new Set([...(readStorage(STORAGE_KEYS.hiddenWords, [])), targetId]));
        writeStorage(STORAGE_KEYS.hiddenWords, hiddenWords);
    }

    const wordEdits = readStorage(STORAGE_KEYS.wordEdits, {});
    if (wordEdits[targetId]) {
        delete wordEdits[targetId];
        writeStorage(STORAGE_KEYS.wordEdits, wordEdits);
    }

    refreshLibraryFromStorage();
    return true;
}

function getManagedUsers() {
    const allProgress = readAllProgress();
    const mergedUsers = new Map();
    const applyEntry = (entry) => {
        if (!entry) return;
        const normalized = normalizeLeaderboardEntry(entry);
        const id = getUserId(normalized);
        if (!id || normalized.expiresAt <= Date.now()) return;
        const existing = mergedUsers.get(id);
        if (!existing || Number(normalized.updatedAt || 0) >= Number(existing.updatedAt || 0)) {
            mergedUsers.set(id, normalized);
        }
    };

    pruneUsers().forEach((user) => {
        const progress = { ...getDefaultProgress(), ...(allProgress[getUserId(user)] || {}) };
        applyEntry({
            ...user,
            points: Number(user.points ?? progress.points ?? 0),
            wins: Number(user.wins ?? progress.wins ?? 0),
            losses: Number(user.losses ?? progress.losses ?? 0),
            totalPlayMs: Number(user.totalPlayMs ?? progress.totalPlayMs ?? 0),
            hiddenFromLeaderboard: Boolean(user.hiddenFromLeaderboard)
        });
    });

    state.sharedLeaderboard.forEach((user) => applyEntry(user));
    applyEntry(getCurrentUserLeaderboardEntry());

    return Array.from(mergedUsers.values()).sort((a, b) => a.username.localeCompare(b.username));
}

function getManagedUserById(userId) {
    return getManagedUsers().find((user) => getUserId(user) === userId) || null;
}

function cleanControlText(value, maxLength = 140) {
    return String(value || '').replace(/[<>]/g, '').trim().slice(0, maxLength);
}

async function hashText(value) {
    const encoded = new TextEncoder().encode(String(value || ''));
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', encoded);
    return Array.from(new Uint8Array(hashBuffer)).map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function unlockControlMode(rawKey) {
    const hash = await hashText(String(rawKey || '').trim());
    const unlocked = hash === CONTROL_MODE_HASH;
    state.controlModeUnlocked = unlocked;
    if (unlocked) {
        sessionStorage.setItem(CONTROL_SESSION_KEY, '1');
    }
    return unlocked;
}

function removeUserFromRanking(userId) {
    const users = pruneUsers().map((user) => getUserId(user) === userId ? { ...user, hiddenFromLeaderboard: true, updatedAt: Date.now() } : user);
    writeStorage(STORAGE_KEYS.users, users);
    const target = users.find((user) => getUserId(user) === userId) || getManagedUserById(userId);
    if (target) syncActiveUserRecord(target);
    void syncSharedLeaderboardUser(target || { usernameNormalized: userId, hiddenFromLeaderboard: true });
}

function closeManagedSession(userId) {
    const users = pruneUsers().filter((user) => getUserId(user) !== userId);
    writeStorage(STORAGE_KEYS.users, users);
    const allProgress = readAllProgress();
    delete allProgress[userId];
    writeAllProgress(allProgress);

    if (userId === getUserId(state.user)) {
        sessionStorage.removeItem(CONTROL_SESSION_KEY);
        state.controlModeUnlocked = false;
        localStorage.removeItem(STORAGE_KEYS.activeUser);
        state.sharedLeaderboard = state.sharedLeaderboard.filter((user) => getUserId(user) !== userId);
        void deleteSharedLeaderboardUser(userId);
        pushToast(randomFrom(EVEREST_LINES.info), tc('selfClosed'), 'info');
        window.setTimeout(() => { window.location.href = LOGIN_FALLBACK_URL; }, 420);
        return true;
    }

    if (state.controlManagedUserId === userId) {
        state.controlManagedUserId = '';
    }

    state.sharedLeaderboard = state.sharedLeaderboard.filter((user) => getUserId(user) !== userId);
    void deleteSharedLeaderboardUser(userId);
    return false;
}

function applyControlStats(userId, values) {
    const points = Math.max(0, Number(values.points) || 0);
    const wins = Math.max(0, Number(values.wins) || 0);
    const losses = Math.max(0, Number(values.losses) || 0);
    const sessionMinutes = Math.max(1, Number(values.sessionMinutes) || 1);
    const expiresAt = Date.now() + (sessionMinutes * 60000);
    const users = pruneUsers();
    const userIndex = users.findIndex((user) => getUserId(user) === userId);
    const baseUser = userIndex >= 0 ? users[userIndex] : getManagedUserById(userId);
    if (!baseUser) return;

    const nextUser = {
        ...baseUser,
        points,
        wins,
        losses,
        leaderboardVisible: hasRecordedResults({ points, wins, losses, totalPlayMs: Number(baseUser.totalPlayMs || 0) }),
        expiresAt,
        hiddenFromLeaderboard: false,
        updatedAt: Date.now()
    };
    if (userIndex >= 0) {
        users[userIndex] = nextUser;
    } else {
        users.push(nextUser);
    }
    writeStorage(STORAGE_KEYS.users, users);

    const allProgress = readAllProgress();
    const current = { ...getDefaultProgress(), ...(allProgress[userId] || {}) };
    allProgress[userId] = { ...current, points, wins, losses };
    writeAllProgress(allProgress);

    if (userId === getUserId(state.user)) {
        state.progress = { ...state.progress, points, wins, losses };
        state.user = { ...state.user, ...nextUser, expiresAt };
        writeStorage(STORAGE_KEYS.activeUser, state.user);
    }

    void syncSharedLeaderboardUser(nextUser);
}

function addExplorerWord(payload) {
    const entry = buildExplorerWordEntry(payload, `custom_${Date.now()}_${Math.random().toString(16).slice(2, 10)}`);
    const customWords = ensureCustomWordIds(readStorage(STORAGE_KEYS.customWords, []));
    customWords.push(entry);
    writeStorage(STORAGE_KEYS.customWords, customWords);
    refreshLibraryFromStorage();
}

function getLeaderboard() {
    return getManagedUsers()
        .filter((user) => !user.hiddenFromLeaderboard && isLeaderboardVisible(user))
        .sort(sortLeaderboardEntries)
        .slice(0, 20);
}

function getLeaderboardDisplayEntries() {
    return getLeaderboard();
}

function getRankForUser() {
    return getLeaderboard().findIndex((entry) => getUserId(entry) === getUserId(state.user)) + 1;
}

function getTheme(themeId = state.activeThemeId) {
    return state.themes.find((theme) => theme.id === themeId) || null;
}

function getStage(themeId = state.activeThemeId, stageId = state.activeStageId) {
    const theme = getTheme(themeId);
    return theme ? theme.stages.find((stage) => stage.id === stageId) || null : null;
}

function getThemePalette(themeId) {
    const palettes = {
        'basic-communication': { accent: '#4b74f0', soft: '#7fd9f7', strong: '#1c2358', accentRgb: '75, 116, 240', softRgb: '127, 217, 247', strongRgb: '28, 35, 88' },
        'grammar-language': { accent: '#8d63ef', soft: '#c7a9ff', strong: '#34205f', accentRgb: '141, 99, 239', softRgb: '199, 169, 255', strongRgb: '52, 32, 95' },
        'human-body-identity': { accent: '#f06292', soft: '#ffb3c7', strong: '#6d2145', accentRgb: '240, 98, 146', softRgb: '255, 179, 199', strongRgb: '109, 33, 69' },
        'personal-social-life': { accent: '#ff9f43', soft: '#ffd1a6', strong: '#7b4611', accentRgb: '255, 159, 67', softRgb: '255, 209, 166', strongRgb: '123, 70, 17' },
        'education-work': { accent: '#40c057', soft: '#a8f0b3', strong: '#164d2a', accentRgb: '64, 192, 87', softRgb: '168, 240, 179', strongRgb: '22, 77, 42' },
        'places-environment': { accent: '#26a69a', soft: '#8de3d5', strong: '#124d48', accentRgb: '38, 166, 154', softRgb: '141, 227, 213', strongRgb: '18, 77, 72' },
        'movement-navigation': { accent: '#42a5f5', soft: '#9ed8ff', strong: '#173e73', accentRgb: '66, 165, 245', softRgb: '158, 216, 255', strongRgb: '23, 62, 115' },
        'shopping-daily-life': { accent: '#ff7f51', soft: '#ffbea8', strong: '#7a2f18', accentRgb: '255, 127, 81', softRgb: '255, 190, 168', strongRgb: '122, 47, 24' },
        'clothing-style': { accent: '#ec407a', soft: '#ff9dc0', strong: '#6b1b3c', accentRgb: '236, 64, 122', softRgb: '255, 157, 192', strongRgb: '107, 27, 60' },
        'food-drinks': { accent: '#ffb300', soft: '#ffe08a', strong: '#7a5200', accentRgb: '255, 179, 0', softRgb: '255, 224, 138', strongRgb: '122, 82, 0' },
        'nature-weather': { accent: '#43a047', soft: '#a9df9b', strong: '#1f4f23', accentRgb: '67, 160, 71', softRgb: '169, 223, 155', strongRgb: '31, 79, 35' },
        'culture-leisure': { accent: '#7e57c2', soft: '#c5b1ef', strong: '#37225f', accentRgb: '126, 87, 194', softRgb: '197, 177, 239', strongRgb: '55, 34, 95' },
        'tools-objects': { accent: '#78909c', soft: '#b9cad2', strong: '#31424b', accentRgb: '120, 144, 156', softRgb: '185, 202, 210', strongRgb: '49, 66, 75' },
        technology: { accent: '#1e88e5', soft: '#8fcbff', strong: '#103965', accentRgb: '30, 136, 229', softRgb: '143, 203, 255', strongRgb: '16, 57, 101' },
        'concepts-academic': { accent: '#d97706', soft: '#f8be73', strong: '#6c3a05', accentRgb: '217, 119, 6', softRgb: '248, 190, 115', strongRgb: '108, 58, 5' }
    };
    return palettes[themeId] || palettes['basic-communication'];
}

function applyThemePalette() {
    const palette = getThemePalette(state.activeThemeId);
    const root = document.documentElement;
    document.body.dataset.activeTheme = state.activeThemeId || 'basic-communication';
    [
        ['--theme-accent', palette.accent],
        ['--theme-soft', palette.soft],
        ['--theme-strong', palette.strong],
        ['--theme-accent-rgb', palette.accentRgb],
        ['--theme-soft-rgb', palette.softRgb],
        ['--theme-strong-rgb', palette.strongRgb]
    ].forEach(([key, value]) => root.style.setProperty(key, value));
}

function convertTerm(raw) {
    return { en: raw[0], es: raw[1], emoji: raw[2], hint: raw[3] };
}

function buildChoices(answerTerm, pool) {
    const distractors = shuffle(pool.filter((term) => normalizeWord(term.en) !== normalizeWord(answerTerm.en))).slice(0, 3);
    return shuffle([answerTerm, ...distractors]);
}

function buildMatchChoices(answerTerm, pool, themeId) {
    const distractors = shuffle(pool.filter((term) => normalizeWord(term.en) !== normalizeWord(answerTerm.en))).slice(0, 2);
    const emojiChoices = shuffle([answerTerm, ...distractors]).slice(0, 3);
    const signalChoices = shuffle([
        { emoji: getThemeMatchSignalEmoji(themeId), id: themeId },
        ...shuffle(
            Object.entries(THEME_MATCH_SIGNAL_EMOJIS)
                .filter(([id]) => id !== themeId)
                .map(([id, emoji]) => ({ emoji, id }))
        ).slice(0, 2)
    ]);

    return {
        signalChoices,
        emojiChoices
    };
}

function buildQuestions(stage) {
    const theme = getTheme();
    const pool = theme.stages.flatMap((bucket) => bucket.terms.map(convertTerm));
    return shuffle(stage.terms.map(convertTerm)).slice(0, 5).map((term) => {
        if (state.settings.gameMode === 'match') {
            return { term, ...buildMatchChoices(term, pool, theme.id) };
        }
        return { term, options: buildChoices(term, pool) };
    });
}

function updateSidebarSupport() {
    const theme = getTheme();
    if (!theme) return;
    elements.sidebarSupportTitle.textContent = theme.title;
    elements.sidebarSupportText.textContent = theme.summary;
}

function renderSidebar() {
    const filtered = state.themes.filter((theme) => !state.searchTerm || normalizeWord(`${theme.title} ${theme.summary}`).includes(normalizeWord(state.searchTerm)));
    elements.themeNav.innerHTML = state.themes.map((theme) => {
        const visible = filtered.some((item) => item.id === theme.id);
        return `<button class="theme-nav__item ${theme.id === state.activeThemeId ? 'is-active' : ''} ${visible ? '' : 'is-hidden'}" data-theme-id="${theme.id}" type="button" title="${theme.title} - ${theme.summary}"><span class="theme-nav__icon"><img src="${THEME_ICONS[theme.id]}" alt=""></span><span class="theme-nav__copy"><strong>${theme.title}</strong><span>${theme.summary}</span></span></button>`;
    }).join('');
    if (!filtered.length) elements.themeNav.innerHTML += `<div class="theme-nav__item"><span class="theme-nav__copy"><strong>${t('noThemeResults')}</strong></span></div>`;
    elements.themeNav.querySelectorAll('[data-theme-id]').forEach((button) => button.addEventListener('click', () => setActiveTheme(button.dataset.themeId)));
}

function renderThemeGrid() {
    const activeTheme = getTheme();
    const deckCard = getThemeDeckCard();
    const isCollapsed = deckCard?.classList.contains('compact-collapsed');

    elements.themeGrid.innerHTML = state.themes.map((theme) => {
        const progress = state.progress.stageResults[theme.id] || {};
        const cleared = Object.values(progress).filter((item) => item.clears > 0).length;
        return `<button class="theme-card ${theme.id === state.activeThemeId ? 'is-active' : ''}" data-theme-card="${theme.id}" type="button"><div class="theme-card__head"><span class="theme-card__icon"><img src="${THEME_ICONS[theme.id]}" alt=""></span><span class="theme-card__eyebrow">${t('themeClearedLabel', { count: cleared })}</span></div><h4>${theme.title}</h4><p>${theme.summary}</p><div class="theme-card__footer"><span class="theme-card__route">${t('topRoute')}</span><span class="theme-card__stage">${theme.stages[0].name}</span></div></button>`;
    }).join('');

    if (elements.themeDeckToggleTitle) {
        elements.themeDeckToggleTitle.textContent = isCollapsed
            ? t('openDeckTitle', { theme: activeTheme?.title || 'Everest' })
            : t('hideDeckTitle', { theme: activeTheme?.title || 'Everest' });
    }

    if (elements.themeDeckToggleText) {
        elements.themeDeckToggleText.textContent = isCollapsed
            ? t('openDeckText', { theme: activeTheme?.title || 'Everest' })
            : t('hideDeckText');
    }

    elements.themeGrid.querySelectorAll('[data-theme-card]').forEach((button) => button.addEventListener('click', () => setActiveTheme(button.dataset.themeCard)));
}

function renderStageList() {
    const theme = getTheme();
    if (!theme) return;
    const results = state.progress.stageResults[theme.id] || {};
    elements.stageSectionTitle.textContent = t('themeStagesTitle', { theme: theme.title });
    elements.stageThemeFocus.textContent = theme.summary;
    elements.stageList.innerHTML = theme.stages.map((stage) => {
        const stageProgress = results[stage.id] || { attempts: 0, clears: 0, bestAccuracy: 0 };
        const active = stage.id === state.activeStageId;
        return `<article class="stage-item ${active ? 'is-active' : ''}"><div class="stage-item__topline"><h4>${stage.name}</h4><span class="panel-badge stage-item__badge">${t('stageBadge', { stage: stage.id })}</span></div><p>${stage.focus}</p><div class="stage-item__badges"><span class="stage-badge">${t('pointsBadge', { points: stage.points })}</span><span class="stage-badge">${t('stageBest', { value: stageProgress.bestAccuracy || 0 })}</span><span class="stage-badge">${t('stageClears', { value: stageProgress.clears || 0 })}</span></div><div class="stage-item__footer"><button class="surface-button surface-button--ghost" data-select-stage="${stage.id}" type="button">${t('select')}</button><button class="surface-button surface-button--primary" data-play-stage="${stage.id}" type="button">${t('play')}</button></div></article>`;
    }).join('');
    elements.stageList.querySelectorAll('[data-select-stage]').forEach((button) => button.addEventListener('click', () => { state.activeStageId = Number(button.dataset.selectStage); renderStageList(); renderGame(); }));
    elements.stageList.querySelectorAll('[data-play-stage]').forEach((button) => button.addEventListener('click', () => { state.activeStageId = Number(button.dataset.playStage); startStage(); }));
}

function renderHero() {
    const theme = getTheme();
    elements.welcomeTitle.textContent = t('welcome', { name: state.user.username });
    elements.welcomeSubtitle.textContent = t('subtitle');
    elements.activeThemeName.textContent = theme ? theme.title : 'Everest';
    elements.activeModeLabel.textContent = getGameModeLabel();
    elements.heroStartButton.textContent = t('startStage');
    elements.heroExploreButton.textContent = t('openLibrary');
    elements.scrollThemeIntoViewButton.textContent = t('focusRoute');
    const nextThemeLabel = state.settings.themeMode === 'light' ? t('darkMode') : t('lightMode');
    const nextThemeSymbol = state.settings.themeMode === 'light' ? '🌙' : '☀️';
    elements.themeModeQuickToggle.innerHTML = `<span class="mini-theme-toggle__symbol" aria-hidden="true">${nextThemeSymbol}</span>`;
    elements.themeModeQuickToggle.setAttribute('aria-label', nextThemeLabel);
    elements.themeModeQuickToggle.setAttribute('title', nextThemeLabel);
}

function renderProfile() {
    elements.profileEmoji.textContent = state.user.profileEmoji || '\uD83E\uDDE0';
    elements.profileAvatar.style.background = state.user.profileColor || '#4b74f0';
    elements.profileName.textContent = state.user.username;
    elements.profileCourse.textContent = state.user.course || t('coursePending');
    const rank = getRankForUser();
    elements.profileRankline.textContent = rank ? `#${rank}` : '#--';
    elements.profileRankline.className = 'profile-rankline__badge';
    if (rank) {
        elements.profileRankline.classList.add('is-ranked');
        if (rank <= 3) elements.profileRankline.classList.add(`is-top-${rank}`);
    }
    elements.metaPoints.textContent = state.progress.points;
    elements.metaWins.textContent = state.progress.wins;
    elements.metaLosses.textContent = state.progress.losses;
    elements.metaTime.textContent = formatDuration(state.progress.totalPlayMs);
}

function updateCountdown() {
    const remaining = state.user.expiresAt - Date.now();
    if (remaining <= 0) {
        logoutUser(false);
        return;
    }
    elements.sessionCountdown.textContent = formatSession(remaining);
}

function setFeedback(stateName, title, text) {
    elements.gameFeedback.dataset.state = stateName;
    elements.feedbackTitle.textContent = title;
    elements.feedbackText.textContent = text;
}

function getThemeVisualEmoji(theme) {
    if (!theme) return '\uD83E\uDDED';
    if (theme.title.includes('Nature')) return '\u26F0\uFE0F';
    if (theme.title.includes('Food')) return '\uD83C\uDF7D\uFE0F';
    return '\uD83E\uDDED';
}

function renderChallengeVisual(theme, question, matchMode) {
    if (!question) {
        elements.challengeVisual.classList.remove('challenge-visual--match');
        elements.challengeVisual.innerHTML = `<span>${getThemeVisualEmoji(theme)}</span>`;
        return;
    }

    elements.challengeVisual.classList.remove('challenge-visual--match');
    elements.challengeVisual.innerHTML = `<span>${question.term.emoji}</span>`;
}

function resetActiveChallenge() {
    stopTimer();
    state.stageLive = false;
    state.currentQuestion = null;
    state.questions = [];
    state.questionIndex = 0;
    state.stagePoints = 0;
    state.stageCorrect = 0;
    state.stageWrong = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.latestAccuracy = 0;
    state.questionResolved = false;
    state.matchSelection = { signal: '', emoji: '' };
}

function toggleGameModeVisibility() {
    const typingMode = state.settings.gameMode === 'typing';
    elements.typingForm.classList.toggle('is-hidden-for-mode', !typingMode);
    elements.choiceGrid.classList.toggle('is-hidden-for-mode', false);
}

function renderGame() {
    const theme = getTheme();
    const stage = getStage();
    if (!theme || !stage) return;
    const matchMode = state.settings.gameMode === 'match';
    const typingMode = state.settings.gameMode === 'typing';
    state.progress.lastPlayedTheme = theme.id;
    elements.gameCard?.classList.toggle('is-match-mode', matchMode);
    elements.challengeVisual.classList.toggle('is-hidden-for-mode', matchMode);
    elements.gameThemeTitle.textContent = `${theme.title} - ${stage.name}`;
    elements.gameThemeDescription.textContent = stage.focus;
    elements.stagePointsLabel.textContent = `${t('stagePoints')}: ${state.stagePoints}`;
    elements.stageAccuracyLabel.textContent = `${t('accuracy')}: ${state.latestAccuracy}%`;
    elements.typingSubmitButton.textContent = t('checkAnswer');
    elements.typingInput.placeholder = t('typePlaceholder');

    if (!state.stageLive || !state.currentQuestion) {
        renderChallengeVisual(theme, null, false);
        elements.challengeTypeLabel.textContent = t('routeFocus');
        elements.challengePrompt.textContent = stage.focus;
        elements.challengeHint.textContent = t('noChallenge');
        elements.challengeExample.textContent = `${theme.summary} ${randomFrom(EVEREST_LINES.info)}`;
        elements.choiceGrid.innerHTML = '';
        elements.choiceGrid.classList.remove('choice-grid--match');
        elements.typingInput.value = '';
        elements.typingInput.disabled = true;
        elements.typingSubmitButton.disabled = true;
        elements.nextQuestionButton.hidden = true;
        elements.questionCounter.textContent = '0 / 0';
        elements.timerBadge.textContent = '15s';
        elements.streakBadge.textContent = 'Streak 0';
        elements.progressBar.style.width = '0%';
        setFeedback('idle', t('idleTitle'), t('idleText'));
        toggleGameModeVisibility();
        return;
    }

    const question = state.currentQuestion;
    if (!matchMode) {
        renderChallengeVisual(theme, question, false);
    }
    const selectedSignalOption = matchMode ? question.signalChoices.find((option) => option.id === state.matchSelection.signal) : null;
    const selectedEmojiOption = matchMode ? question.emojiChoices.find((option) => normalizeWord(option.en) === state.matchSelection.emoji) : null;
    elements.challengeTypeLabel.textContent = getGameModeLabel();
    elements.challengePrompt.textContent = matchMode
        ? t('matchPairPrompt', { word: question.term.es })
        : (typingMode ? t('typeEnglish', { word: question.term.es }) : t('chooseEnglish', { word: question.term.es }));
    elements.challengeHint.textContent = `${t('hintPrefix')}: ${question.term.hint}`;
    elements.challengeExample.textContent = matchMode
        ? `${t('matchPairHelp')} ${selectedSignalOption || selectedEmojiOption ? `${t('matchSelectionSignal')}: ${selectedSignalOption ? selectedSignalOption.emoji : '—'} · ${t('matchSelectionEmoji')}: ${selectedEmojiOption ? selectedEmojiOption.emoji : '—'}` : t('matchSelectionIdle')}`
        : `${t('examplePrefix')}: ${theme.summary}`;
    elements.questionCounter.textContent = `${state.questionIndex + 1} / ${state.questions.length}`;
    elements.timerBadge.textContent = `${state.secondsLeft}s`;
    elements.streakBadge.textContent = `Streak ${state.streak}`;
    elements.progressBar.style.width = `${(state.questionIndex / state.questions.length) * 100}%`;
    elements.typingInput.disabled = !typingMode || state.questionResolved;
    elements.typingSubmitButton.disabled = !typingMode || state.questionResolved;
    elements.typingInput.value = '';
    elements.nextQuestionButton.hidden = !state.questionResolved;
    toggleGameModeVisibility();

    if (matchMode) {
        elements.choiceGrid.classList.add('choice-grid--match');
        elements.choiceGrid.innerHTML = `
            <div class="match-board">
                <section class="match-lane" aria-label="${t('matchSignalLabel')}">
                    <span class="match-lane__label">${t('matchSignalStep')}</span>
                    <div class="match-column__list">
                        ${question.signalChoices.map((option) => `<button class="choice-button choice-button--match choice-button--signal ${option.id === state.matchSelection.signal ? 'is-selected' : ''}" data-match-side="signal" data-match-value="${option.id}" type="button"><span class="choice-button__emoji">${option.emoji}</span></button>`).join('')}
                    </div>
                </section>
                <section class="match-center" aria-label="${question.term.en}">
                    <span class="match-center__badge">${t('summitMatch')}</span>
                    <strong class="match-center__word">${question.term.en}</strong>
                    <span class="match-center__meaning">${question.term.es}</span>
                    <div class="match-center__emoji">${question.term.emoji}</div>
                    <div class="match-center__status">
                        <span class="match-center__status-pill ${selectedSignalOption ? 'is-filled' : ''}">${selectedSignalOption ? `${selectedSignalOption.emoji} ${t('matchSelectionSignal')}` : t('matchSignalLabel')}</span>
                        <span class="match-center__status-pill ${selectedEmojiOption ? 'is-filled' : ''}">${selectedEmojiOption ? `${selectedEmojiOption.emoji} ${t('matchSelectionEmoji')}` : t('matchEmojiLabel')}</span>
                    </div>
                </section>
                <section class="match-lane" aria-label="${t('matchEmojiLabel')}">
                    <span class="match-lane__label">${t('matchEmojiStep')}</span>
                    <div class="match-column__list">
                        ${question.emojiChoices.map((option) => `<button class="choice-button choice-button--match ${normalizeWord(option.en) === state.matchSelection.emoji ? 'is-selected' : ''}" data-match-side="emoji" data-match-value="${option.en}" type="button"><span class="choice-button__emoji">${option.emoji}</span><span class="choice-button__text">${option.en}</span></button>`).join('')}
                    </div>
                </section>
            </div>
        `;
        elements.choiceGrid.querySelectorAll('[data-match-side]').forEach((button) => button.addEventListener('click', () => handleMatchChoice(button.dataset.matchSide, button.dataset.matchValue)));
    } else if (!typingMode) {
        elements.choiceGrid.classList.remove('choice-grid--match');
        elements.choiceGrid.innerHTML = question.options.map((option) => `<button class="choice-button" data-choice="${option.en}" type="button">${option.en}</button>`).join('');
        elements.choiceGrid.querySelectorAll('[data-choice]').forEach((button) => button.addEventListener('click', () => submitAnswer(button.dataset.choice)));
    } else {
        elements.choiceGrid.classList.remove('choice-grid--match');
        elements.choiceGrid.innerHTML = '';
        setTimeout(() => elements.typingInput.focus(), 30);
    }
}

function startTimer() {
    clearInterval(state.timerId);
    state.timerId = window.setInterval(() => {
        state.secondsLeft -= 1;
        elements.timerBadge.textContent = `${state.secondsLeft}s`;
        if (state.secondsLeft <= 0) {
            clearInterval(state.timerId);
            resolveAnswer(null, true);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(state.timerId);
    state.timerId = null;
}

function maybeSpeakPrompt() {
    if (!state.settings.voiceOn || !window.speechSynthesis || !state.currentQuestion) return;
    const utteranceText = state.settings.gameMode === 'match'
        ? `Match the route clue and emoji for ${state.currentQuestion.term.en}`
        : `Find the English word for ${state.currentQuestion.term.es}`;
    const utterance = new SpeechSynthesisUtterance(utteranceText);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

function playTone(type) {
    if (!state.settings.soundOn) return;
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    const context = new Context();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.type = 'sine';
    oscillator.frequency.value = type === 'success' ? 660 : 220;
    gainNode.gain.setValueAtTime(0.001, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.22);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.22);
}

function startStage() {
    const stage = getStage();
    if (!stage) return;
    state.stageLive = true;
    state.questions = buildQuestions(stage);
    state.questionIndex = 0;
    state.stageStartedAt = Date.now();
    state.stagePoints = 0;
    state.stageCorrect = 0;
    state.stageWrong = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.latestAccuracy = 0;
    state.questionResolved = false;
    loadQuestion();
    pushToast(randomFrom(EVEREST_LINES.info), `${stage.name} is open. ${stage.focus}`, 'info');
    document.getElementById('gameCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function loadQuestion() {
    state.currentQuestion = state.questions[state.questionIndex] || null;
    state.questionResolved = false;
    state.secondsLeft = 15;
    state.matchSelection = { signal: '', emoji: '' };
    renderGame();
    if (state.currentQuestion) {
        startTimer();
        maybeSpeakPrompt();
    }
}

function handleMatchChoice(side, value) {
    if (state.questionResolved || !state.currentQuestion || state.settings.gameMode !== 'match') return;

    if (side === 'signal') {
        state.matchSelection.signal = String(value || '');
    }

    if (side === 'emoji') {
        state.matchSelection.emoji = normalizeWord(value);
    }

    renderGame();

    if (!state.matchSelection.signal || !state.matchSelection.emoji) return;

    const matchedSignal = state.matchSelection.signal === state.activeThemeId;
    const matchedEmoji = state.matchSelection.emoji === normalizeWord(state.currentQuestion.term.en);
    const matchedTargetPair = matchedSignal && matchedEmoji;

    resolveAnswer(matchedTargetPair ? state.currentQuestion.term.en : `${state.matchSelection.signal} :: ${state.matchSelection.emoji}`, false);
}

function submitAnswer(answer) {
    if (state.questionResolved || !state.currentQuestion) return;
    resolveAnswer(answer, false);
}

function resolveAnswer(answer, timedOut) {
    if (state.questionResolved || !state.currentQuestion) return;
    stopTimer();
    state.questionResolved = true;
    const correct = !timedOut && normalizeWord(answer) === normalizeWord(state.currentQuestion.term.en);

    if (correct) {
        const earned = 90 + Math.min((state.streak + 1) * 10, 50);
        state.stageCorrect += 1;
        state.streak += 1;
        state.bestStreak = Math.max(state.bestStreak, state.streak);
        state.stagePoints += earned;
        playTone('success');
        setFeedback('correct', t('correctTitle'), randomFrom(EVEREST_LINES.success));
        pushToast(randomFrom(EVEREST_LINES.success), `${state.currentQuestion.term.en} +${earned} pts`, 'success');
    } else {
        state.stageWrong += 1;
        state.streak = 0;
        playTone('error');
        setFeedback('incorrect', timedOut ? t('timeoutTitle') : t('wrongTitle'), timedOut ? t('timeoutText') : `${randomFrom(EVEREST_LINES.error)} ${state.currentQuestion.term.en}.`);
        pushToast(randomFrom(EVEREST_LINES.error), timedOut ? t('timeoutText') : `${state.currentQuestion.term.en} was the safe step.`, 'danger');
    }

    state.latestAccuracy = Math.round((state.stageCorrect / (state.stageCorrect + state.stageWrong)) * 100);
    elements.stagePointsLabel.textContent = `${t('stagePoints')}: ${state.stagePoints}`;
    elements.stageAccuracyLabel.textContent = `${t('accuracy')}: ${state.latestAccuracy}%`;
    elements.nextQuestionButton.hidden = false;
    elements.typingInput.disabled = true;
    elements.typingSubmitButton.disabled = true;

    if (state.settings.gameMode === 'multiple') {
        elements.choiceGrid.querySelectorAll('[data-choice]').forEach((button) => {
            button.disabled = true;
            const value = button.dataset.choice;
            if (normalizeWord(value) === normalizeWord(state.currentQuestion.term.en)) {
                button.classList.add('is-correct');
            } else if (!correct && normalizeWord(value) === normalizeWord(answer)) {
                button.classList.add('is-wrong');
            }
        });
    } else if (state.settings.gameMode === 'match') {
        elements.choiceGrid.querySelectorAll('[data-match-side]').forEach((button) => {
            button.disabled = true;
            const side = button.dataset.matchSide;
            const value = button.dataset.matchValue || '';
            const normalizedValue = side === 'signal' ? value : normalizeWord(value);
            const targetValue = side === 'signal' ? state.activeThemeId : normalizeWord(state.currentQuestion.term.en);
            const selectedValue = side === 'signal' ? state.matchSelection.signal : state.matchSelection.emoji;

            if (normalizedValue === targetValue) {
                button.classList.add('is-correct');
            } else if (!correct && normalizedValue === selectedValue) {
                button.classList.add('is-wrong');
            }
        });
    }
}

function advanceQuestion() {
    if (!state.stageLive) return;
    if (state.questionIndex >= state.questions.length - 1) {
        finishStage();
    } else {
        state.questionIndex += 1;
        loadQuestion();
    }
}

function finishStage() {
    stopTimer();
    state.stageLive = false;
    const stage = getStage();
    const theme = getTheme();
    const accuracy = Math.round((state.stageCorrect / state.questions.length) * 100);
    const win = accuracy >= 80;
    const clearBonus = win ? stage.points : 0;
    const totalEarned = state.stagePoints + clearBonus;
    state.progress.points += totalEarned;
    state.progress.totalPlayMs += Date.now() - state.stageStartedAt;
    state.progress[win ? 'wins' : 'losses'] += 1;
    state.progress.lastPlayedTheme = theme.id;
    if (!state.progress.stageResults[theme.id]) state.progress.stageResults[theme.id] = {};
    const existing = state.progress.stageResults[theme.id][stage.id] || { attempts: 0, clears: 0, bestAccuracy: 0 };
    state.progress.stageResults[theme.id][stage.id] = {
        attempts: existing.attempts + 1,
        clears: existing.clears + (win ? 1 : 0),
        bestAccuracy: Math.max(existing.bestAccuracy, accuracy)
    };
    saveProgress();
    renderAll();
    openResultModal(win, accuracy, totalEarned, clearBonus);
}

function openResultModal(win, accuracy, totalEarned, clearBonus) {
    elements.resultIcon.textContent = win ? '\u26F0\uFE0F' : '\uD83E\uDDD7';
    elements.resultBadge.textContent = win ? t('stageClear') : t('stageRetry');
    elements.resultTitle.textContent = win ? getStage().name : `${getStage().name} again`;
    elements.resultSubtitle.textContent = win ? t('resultWinText') : t('resultLoseText');
    elements.resultStats.innerHTML = `<div class="result-stat"><span>${t('accuracy')}</span><strong>${accuracy}%</strong></div><div class="result-stat"><span>${t('points')}</span><strong>${totalEarned}</strong></div><div class="result-stat"><span>${t('wins')}</span><strong>${state.stageCorrect}/${state.questions.length}</strong></div><div class="result-stat"><span>${t('clearBonus')}</span><strong>${clearBonus}</strong></div>`;
    openModal('resultModal');
}

function renderLeaderboard() {
    const leaderboard = getLeaderboardDisplayEntries();
    if (!leaderboard.length) {
        elements.leaderboardPreview.innerHTML = `<div class="leaderboard-preview__row"><div><strong>${t('noLeaderboard')}</strong></div></div>`;
        elements.leaderboardTableBody.innerHTML = '';
        return;
    }

    const previewAwards = ['🥇', '🥈', '🥉'];
    elements.leaderboardPreview.innerHTML = leaderboard.slice(0, 7).map((entry, index) => {
        const award = previewAwards[index] || '';
        return `<div class="leaderboard-preview__row is-top-${index + 1}">
            <div class="leaderboard-preview__motion">
                <div class="leaderboard-preview__rank-block">
                    <span class="leaderboard-preview__rank" aria-label="Rank ${index + 1}">${index + 1}</span>
                </div>
                <div class="leaderboard-preview__copy">
                    <strong>${entry.profileEmoji || '\uD83E\uDDE0'} ${entry.username}</strong>
                    <div class="leaderboard-preview__stats">
                        <span class="leaderboard-preview__stat leaderboard-preview__stat--points"><b>${entry.points}</b> Points</span>
                        <span class="leaderboard-preview__stat leaderboard-preview__stat--wins"><b>${entry.wins}</b> Wins</span>
                    </div>
                </div>
                <div class="leaderboard-preview__side">
                    ${award ? `<span class="leaderboard-preview__medal" aria-hidden="true"><span class="leaderboard-preview__medal-glyph">${award}</span></span>` : ''}
                </div>
            </div>
        </div>`;
    }).join('');
    elements.leaderboardTableBody.innerHTML = leaderboard.map((entry, index) => `<tr class="leaderboard-row is-top-${index + 1}"><td class="leaderboard-rank-cell"><div class="leaderboard-rank-wrap"><span class="leaderboard-rank" aria-label="Rank ${index + 1}">${index + 1}</span></div></td><td class="leaderboard-profile-cell"><div class="leaderboard-profile"><span class="leaderboard-avatar" style="background:${entry.profileColor || '#4b74f0'}">${entry.profileEmoji || '\uD83E\uDDE0'}</span><div class="leaderboard-profile__copy"><strong>${entry.username}</strong></div></div></td><td class="leaderboard-course-cell">${entry.course || 'Route pending'}</td><td class="leaderboard-metric-cell leaderboard-metric-cell--points">${entry.points}</td><td class="leaderboard-metric-cell leaderboard-metric-cell--wins">${entry.wins}</td><td class="leaderboard-metric-cell leaderboard-metric-cell--losses">${entry.losses}</td><td class="leaderboard-time-cell">${formatDuration(entry.totalPlayMs)}</td></tr>`).join('');
}

function renderExplorerThemeSelect() {
    const countForTheme = (themeId) => state.library.filter((entry) => entry.theme === themeId).length;
    const options = [
        { id: 'all', title: t('allThemes'), meta: `${state.library.length} terms`, search: `${t('allThemes')} all explorer` },
        ...state.themes.map((theme) => ({ id: theme.id, title: theme.title, meta: `${countForTheme(theme.id)} terms`, search: `${theme.title} ${theme.summary}` }))
    ];

    elements.explorerThemeSelect.value = state.explorerTheme;
    if (elements.explorerThemeTriggerLabel) {
        const selected = options.find((option) => option.id === state.explorerTheme);
        elements.explorerThemeTriggerLabel.textContent = selected ? selected.title : t('allThemes');
    }

    if (elements.explorerThemeOptions) {
        elements.explorerThemeOptions.innerHTML = options.map((option) => `<button type="button" class="course-option explorer-theme-option ${option.id === state.explorerTheme ? 'active' : ''}" data-value="${option.id}" data-search="${option.search.toLowerCase()}"><span class="course-option-main">${option.title}</span><span class="course-option-alt">${option.meta}</span></button>`).join('');
        elements.explorerThemeOptions.querySelectorAll('[data-value]').forEach((button) => button.addEventListener('click', () => selectExplorerTheme(button.dataset.value)));
    }
}

function setExplorerThemeDropdownState(isOpen) {
    if (!elements.explorerThemeSelectShell || !elements.explorerThemeTrigger || !elements.explorerThemeDropdown) return;

    if (isOpen) {
        elements.explorerThemeDropdown.hidden = false;
        elements.explorerThemeTrigger.setAttribute('aria-expanded', 'true');
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                elements.explorerThemeSelectShell.classList.add('open');
            });
        });
        if (elements.explorerThemeSearch) {
            window.requestAnimationFrame(() => elements.explorerThemeSearch.focus());
        }
        return;
    }

    elements.explorerThemeSelectShell.classList.remove('open');
    elements.explorerThemeTrigger.setAttribute('aria-expanded', 'false');

    window.setTimeout(() => {
        if (!elements.explorerThemeSelectShell.classList.contains('open')) {
            elements.explorerThemeDropdown.hidden = true;
        }
    }, 240);
}

function filterExplorerThemeOptions(query) {
    if (!elements.explorerThemeOptions) return;
    const normalizedQuery = query.trim().toLowerCase();
    elements.explorerThemeOptions.querySelectorAll('.explorer-theme-option').forEach((option) => {
        const haystack = (option.dataset.search || option.dataset.value || '').toLowerCase();
        option.classList.toggle('hidden', !haystack.includes(normalizedQuery));
    });
}

function selectExplorerTheme(value) {
    state.explorerTheme = value;
    elements.explorerThemeSelect.value = value;
    if (elements.explorerThemeSearch) {
        elements.explorerThemeSearch.value = '';
        filterExplorerThemeOptions('');
    }
    setExplorerThemeDropdownState(false);
    renderExplorerThemeSelect();
    renderExplorer();
}

function setupExplorerThemeSelect() {
    if (!elements.explorerThemeSelectShell || !elements.explorerThemeTrigger || !elements.explorerThemeDropdown) return;

    elements.explorerThemeTrigger.addEventListener('click', () => {
        const willOpen = elements.explorerThemeDropdown.hidden;
        setExplorerThemeDropdownState(willOpen);
    });

    elements.explorerThemeSearch?.addEventListener('input', () => {
        filterExplorerThemeOptions(elements.explorerThemeSearch.value);
    });

    document.addEventListener('click', (event) => {
        if (!elements.explorerThemeSelectShell.contains(event.target)) {
            setExplorerThemeDropdownState(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setExplorerThemeDropdownState(false);
        }
    });
}


function getDefaultControlWordDraft() {
    return {
        wordId: '',
        theme: state.activeThemeId || state.themes[0]?.id || '',
        term: '',
        type: '',
        meaning: '',
        example: '',
        tip: '',
        emoji: '\uD83D\uDCD8'
    };
}

function getControlWordDraft() {
    return {
        ...getDefaultControlWordDraft(),
        ...(state.controlWordDraft || {})
    };
}

function saveControlWordDraft(draft = {}) {
    state.controlWordDraft = {
        ...getControlWordDraft(),
        ...draft
    };
    writeStorage(STORAGE_KEYS.controlWordDraft, state.controlWordDraft);
}

function clearControlWordDraft() {
    state.controlWordDraft = getDefaultControlWordDraft();
    localStorage.removeItem(STORAGE_KEYS.controlWordDraft);
}

function getControlWordPayloadFromInputs() {
    return {
        wordId: document.getElementById('controlWordPickerInput')?.value || '',
        theme: document.getElementById('controlWordThemeInput')?.value || '',
        term: (document.getElementById('controlWordTermInput')?.value || '').trim(),
        type: (document.getElementById('controlWordTypeInput')?.value || '').trim(),
        meaning: (document.getElementById('controlWordMeaningInput')?.value || '').trim(),
        example: (document.getElementById('controlWordExampleInput')?.value || '').trim(),
        tip: (document.getElementById('controlWordTipInput')?.value || '').trim(),
        emoji: (document.getElementById('controlWordEmojiInput')?.value || '\uD83D\uDCD8').trim()
    };
}

function persistControlModeChanges({ lockMode = false } = {}) {
    const selectedUserId = document.getElementById('controlManagedUserSelect')?.value || state.controlManagedUserId;
    if (selectedUserId) {
        applyControlStats(selectedUserId, {
            points: document.getElementById('controlPointsInput')?.value,
            wins: document.getElementById('controlWinsInput')?.value,
            losses: document.getElementById('controlLossesInput')?.value,
            sessionMinutes: document.getElementById('controlSessionMinutesInput')?.value
        });
    }

    const payload = getControlWordPayloadFromInputs();
    const hasWordContent = [payload.theme, payload.term, payload.type, payload.meaning, payload.example, payload.tip, payload.emoji].some((value) => `${value || ''}`.trim());
    const wordComplete = !!(payload.theme && payload.term && payload.type && payload.meaning && payload.example && payload.tip);
    let wordAction = '';

    if (wordComplete) {
        if (payload.wordId) {
            updateExplorerWord(payload);
            wordAction = 'updated';
        } else {
            addExplorerWord(payload);
            wordAction = 'added';
        }
        clearControlWordDraft();
    } else if (hasWordContent || payload.wordId) {
        saveControlWordDraft(payload);
    } else {
        clearControlWordDraft();
    }

    if (lockMode) {
        state.controlModeUnlocked = false;
        sessionStorage.removeItem(CONTROL_SESSION_KEY);
    }

    return { wordAction };
}

function createControlSelectMarkup({ inputId, shellId, triggerId, labelId, dropdownId, searchId, optionsId, value, placeholder, searchPlaceholder, options }) {
    const selected = options.find((option) => option.value === value);
    const selectedLabel = selected ? selected.main : placeholder;

    return `<input id="${inputId}" type="hidden" value="${value || ''}"><div class="course-select control-select" id="${shellId}"><button type="button" class="course-select-trigger control-select-trigger" id="${triggerId}" aria-expanded="false" aria-controls="${dropdownId}"><span class="course-trigger-label" id="${labelId}">${selectedLabel}</span><span class="course-trigger-icon" aria-hidden="true"><svg viewBox="0 0 24 24" class="course-trigger-svg"><path d="M7 10l5 5 5-5"></path></svg></span></button><div class="course-dropdown control-select-dropdown" id="${dropdownId}" hidden><div class="course-search-wrap"><input type="text" class="course-search" id="${searchId}" placeholder="${searchPlaceholder}" autocomplete="off"></div><div class="course-options control-select-options" id="${optionsId}" role="listbox">${options.map((option) => `<button type="button" class="course-option control-select-option ${option.value === value ? 'active' : ''}" data-value="${option.value}" data-search="${option.search.toLowerCase()}"><span class="course-option-main">${option.main}</span><span class="course-option-alt">${option.alt}</span></button>`).join('')}</div></div></div>`;
}

function setControlSelectDropdownState(shell, trigger, dropdown, isOpen, searchInput) {
    if (!shell || !trigger || !dropdown) return;

    if (isOpen) {
        dropdown.hidden = false;
        trigger.setAttribute('aria-expanded', 'true');
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => shell.classList.add('open'));
        });
        if (searchInput) {
            window.requestAnimationFrame(() => searchInput.focus());
        }
        return;
    }

    shell.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    window.setTimeout(() => {
        if (!shell.classList.contains('open')) {
            dropdown.hidden = true;
        }
    }, 240);
}

function filterControlSelectOptions(optionsRoot, query) {
    if (!optionsRoot) return;
    const normalizedQuery = query.trim().toLowerCase();
    optionsRoot.querySelectorAll('[data-value]').forEach((option) => {
        const haystack = (option.dataset.search || option.dataset.value || '').toLowerCase();
        option.classList.toggle('hidden', !haystack.includes(normalizedQuery));
    });
}

function setupControlSelect({ shellId, inputId, triggerId, labelId, dropdownId, searchId, optionsId, onSelect }) {
    const shell = document.getElementById(shellId);
    const hiddenInput = document.getElementById(inputId);
    const trigger = document.getElementById(triggerId);
    const label = document.getElementById(labelId);
    const dropdown = document.getElementById(dropdownId);
    const searchInput = document.getElementById(searchId);
    const optionsRoot = document.getElementById(optionsId);

    if (!shell || !hiddenInput || !trigger || !label || !dropdown || !optionsRoot) return;

    trigger.addEventListener('click', () => {
        const willOpen = dropdown.hidden;
        setControlSelectDropdownState(shell, trigger, dropdown, willOpen, searchInput);
    });

    searchInput?.addEventListener('input', () => {
        filterControlSelectOptions(optionsRoot, searchInput.value);
    });

    optionsRoot.querySelectorAll('[data-value]').forEach((button) => {
        button.addEventListener('click', () => {
            hiddenInput.value = button.dataset.value || '';
            label.textContent = button.querySelector('.course-option-main')?.textContent || hiddenInput.value;
            if (searchInput) {
                searchInput.value = '';
                filterControlSelectOptions(optionsRoot, '');
            }
            setControlSelectDropdownState(shell, trigger, dropdown, false, searchInput);
            onSelect?.(hiddenInput.value);
        });
    });

    shell.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setControlSelectDropdownState(shell, trigger, dropdown, false, searchInput);
            trigger.focus();
        }
    });

    shell.addEventListener('focusout', (event) => {
        if (!shell.contains(event.relatedTarget)) {
            setControlSelectDropdownState(shell, trigger, dropdown, false, searchInput);
        }
    });
}

function syncSearchClearButton(input, button) {
    if (!input || !button) return;
    button.hidden = !input.value.trim();
}

function setupSearchClearButton(input, button) {
    if (!input || !button) return;

    syncSearchClearButton(input, button);

    input.addEventListener('input', () => {
        syncSearchClearButton(input, button);
    });

    button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        input.value = '';
        input.dispatchEvent(new Event('input', { bubbles: true }));
        syncSearchClearButton(input, button);
        input.focus();
    });
}

function renderExplorer() {
    const theme = getTheme();
    const featured = state.library.filter((entry) => entry.theme === theme.id).slice(0, 3);
    elements.explorerFeatured.innerHTML = featured.length ? featured.map((entry) => `<div class="explorer-featured__card"><span class="explorer-featured__emoji">${entry.emoji}</span><div><strong>${entry.term}</strong><p>${entry.meaning}</p></div></div>`).join('') : `<div class="explorer-featured__card"><div><strong>${t('noExplorer')}</strong></div></div>`;
    const filtered = state.library.filter((entry) => (state.explorerTheme === 'all' || entry.theme === state.explorerTheme) && (!state.explorerSearch || normalizeWord(`${entry.term} ${entry.meaning} ${entry.tip} ${entry.example}`).includes(normalizeWord(state.explorerSearch))));
    elements.explorerGrid.innerHTML = filtered.map((entry) => `<article class="explorer-entry"><span class="explorer-entry__emoji">${entry.emoji}</span><div class="explorer-entry__copy"><strong>${entry.term}</strong><p>${entry.meaning}</p><p>${entry.example}</p><div class="explorer-entry__meta"><span class="explorer-entry__chip">${entry.type}</span><span class="explorer-entry__chip">${entry.theme.replace(/-/g, ' ')}</span><span class="explorer-entry__chip">${entry.tip}</span></div></div></article>`).join('');
}

function renderQuickOptions() {
    const items = [
        { label: t('gameMode'), value: getGameModeLabel() },
        { label: t('language'), value: state.settings.language.toUpperCase() },
        { label: t('animations'), value: state.settings.animationsOn ? t('statusOn') : t('statusOff') },
        { label: t('sound'), value: state.settings.soundOn ? t('statusOn') : t('statusOff') },
        { label: t('voice'), value: state.settings.voiceOn ? t('statusOn') : t('statusOff') }
    ];
    elements.quickOptions.innerHTML = items.map((item) => `<button class="quick-option" type="button" data-open-options="true"><div class="quick-option__copy"><strong>${item.label}</strong><span class="quick-option__value">${item.value}</span></div><span class="quick-option__pill">${t('edit')}</span></button>`).join('');
    elements.quickOptions.querySelectorAll('[data-open-options]').forEach((button) => button.addEventListener('click', () => openModal('optionsModal')));
}


function renderOptionsModal() {
    const blocks = [
        { title: t('modeBlockTitle'), text: t('modeBlockText'), buttons: [{ value: 'multiple', label: t('summitChoice'), active: state.settings.gameMode === 'multiple', action: 'mode' }, { value: 'typing', label: t('summitTyping'), active: state.settings.gameMode === 'typing', action: 'mode' }, { value: 'match', label: t('summitMatch'), active: state.settings.gameMode === 'match', action: 'mode' }] },
        { title: t('language'), text: t('languageHelp'), buttons: [{ value: 'en', label: 'English', active: state.settings.language === 'en', action: 'language' }, { value: 'es', label: 'Espa\u00F1ol', active: state.settings.language === 'es', action: 'language' }] },
        { title: t('animationBlockTitle'), text: t('animationBlockText'), buttons: [{ value: 'on', label: getOptionStatusMarkup(t('animations'), true), active: state.settings.animationsOn, action: 'motion' }, { value: 'off', label: getOptionStatusMarkup(t('animations'), false), active: !state.settings.animationsOn, action: 'motion' }] },
        { title: t('themeBlockTitle'), text: t('themeBlockText'), buttons: [{ value: 'light', label: t('lightMode'), active: state.settings.themeMode === 'light', action: 'theme' }, { value: 'dark', label: t('darkMode'), active: state.settings.themeMode === 'dark', action: 'theme' }] },
        { title: t('audioBlockTitle'), text: t('audioBlockText'), buttons: [{ value: 'sound', label: getOptionStatusMarkup(t('sound'), state.settings.soundOn), active: state.settings.soundOn, action: 'sound' }, { value: 'voice', label: getOptionStatusMarkup(t('voice'), state.settings.voiceOn), active: state.settings.voiceOn, action: 'voice' }] }
    ];

    const managedUsers = getManagedUsers();
    if (!state.controlManagedUserId || !managedUsers.some((user) => getUserId(user) === state.controlManagedUserId)) {
        state.controlManagedUserId = managedUsers[0] ? getUserId(managedUsers[0]) : getUserId(state.user);
    }

    const managedUser = getManagedUserById(state.controlManagedUserId) || state.user;
    const currentMinutes = Math.max(1, Math.ceil(Math.max(0, (managedUser.expiresAt || Date.now()) - Date.now()) / 60000));
    const draft = getControlWordDraft();
    const blockHtml = blocks.map((block) => `<article class="option-block"><h4>${block.title}</h4><p>${block.text}</p><div class="option-block__actions">${block.buttons.map((button) => {
        const pulseKey = `${button.action}:${button.value}`;
        return `<button class="toggle-pill ${button.active ? 'is-active' : ''} ${state.optionPulseKey === pulseKey ? 'is-pulsing' : ''}" type="button" data-option-action="${button.action}" data-option-value="${button.value}">${button.label}</button>`;
    }).join('')}</div></article>`).join('');

    const managedUserSelect = createControlSelectMarkup({
        inputId: 'controlManagedUserSelect',
        shellId: 'controlManagedUserShell',
        triggerId: 'controlManagedUserTrigger',
        labelId: 'controlManagedUserTriggerLabel',
        dropdownId: 'controlManagedUserDropdown',
        searchId: 'controlManagedUserSearch',
        optionsId: 'controlManagedUserOptions',
        value: state.controlManagedUserId,
        placeholder: tc('userSelect'),
        searchPlaceholder: tc('managedSearchPlaceholder'),
        options: managedUsers.map((user) => ({
            value: getUserId(user),
            main: `${user.profileEmoji || '\uD83E\uDDE0'} ${user.username}`,
            alt: user.course || t('routePending'),
            search: `${user.username} ${user.course || t('routePending')}`
        }))
    });

    const wordPickerSelect = createControlSelectMarkup({
        inputId: 'controlWordPickerInput',
        shellId: 'controlWordPickerShell',
        triggerId: 'controlWordPickerTrigger',
        labelId: 'controlWordPickerTriggerLabel',
        dropdownId: 'controlWordPickerDropdown',
        searchId: 'controlWordPickerSearch',
        optionsId: 'controlWordPickerOptions',
        value: draft.wordId,
        placeholder: tc('wordPickerPlaceholder'),
        searchPlaceholder: tc('wordPickerSearch'),
        options: state.library.slice().sort((a, b) => a.term.localeCompare(b.term)).map((entry) => ({
            value: getExplorerWordId(entry),
            main: `${entry.emoji || '\uD83D\uDCD8'} ${entry.term}`,
            alt: getTheme(entry.theme)?.title || entry.theme,
            search: `${entry.term} ${entry.meaning} ${entry.example} ${entry.tip} ${getTheme(entry.theme)?.title || entry.theme}`
        }))
    });

    const wordThemeSelect = createControlSelectMarkup({
        inputId: 'controlWordThemeInput',
        shellId: 'controlWordThemeShell',
        triggerId: 'controlWordThemeTrigger',
        labelId: 'controlWordThemeTriggerLabel',
        dropdownId: 'controlWordThemeDropdown',
        searchId: 'controlWordThemeSearch',
        optionsId: 'controlWordThemeOptions',
        value: draft.theme,
        placeholder: tc('wordThemePlaceholder'),
        searchPlaceholder: tc('themeSearchPlaceholder'),
        options: state.themes.map((theme) => ({
            value: theme.id,
            main: theme.title,
            alt: theme.id === state.activeThemeId ? tc('currentStageTag') : '',
            search: `${theme.title} ${theme.summary}`
        }))
    });

    const emojiGrid = CONTROL_FORGE_EMOJI_CATEGORIES.map((category, index) => `<details class="control-emoji-category" ${index === 0 ? 'open' : ''}><summary class="control-emoji-category__summary"><span>${category.title}</span><strong>${category.emojis.length}</strong></summary><div class="control-emoji-grid">${category.emojis.map((emoji) => `<button class="control-emoji-choice ${emoji === draft.emoji ? 'is-selected' : ''}" type="button" data-control-emoji="${emoji}" aria-label="${emoji}">${emoji}</button>`).join('')}</div></details>`).join('');

    const saveButtonLabel = draft.wordId ? tc('saveWord') : tc('addWord');
    const deleteButtonDisabled = draft.wordId ? '' : ' disabled';
    const buildControlStepperField = (id, label, min, value) => `<label class="custom-field"><span>${label}</span><div class="control-stepper"><input id="${id}" type="number" min="${min}" value="${value}"><div class="control-stepper__buttons"><button class="control-stepper__button control-stepper__button--up" type="button" data-stepper-target="${id}" data-stepper-direction="up" aria-label="Increase ${label}"><span aria-hidden="true"></span></button><button class="control-stepper__button control-stepper__button--down" type="button" data-stepper-target="${id}" data-stepper-direction="down" aria-label="Decrease ${label}"><span aria-hidden="true"></span></button></div></div></label>`;

    const controlHtml = !state.controlModeUnlocked
        ? `<article class="option-block option-block--control"><div class="control-heading"><div><h4>${tc('title')}</h4><p>${tc('subtitle')}</p></div><span class="control-note">${tc('lockedHint')}</span></div><div class="control-key-row"><label class="custom-field custom-field--full"><span>${tc('unlockLabel')}</span><input id="controlKeyInput" type="password" placeholder="${tc('unlockPlaceholder')}" autocomplete="off"></label><button class="surface-button surface-button--primary" id="controlUnlockButton" type="button">${tc('unlockButton')}</button></div></article>`
        : `<article class="option-block option-block--control"><div class="control-heading"><div><h4>${tc('title')}</h4><p>${tc('subtitle')}</p></div><div class="control-heading__actions"><span class="control-badge">${tc('unlockedBadge')}</span><button class="surface-button surface-button--ghost control-lock-button control-button--danger" id="controlDeactivateButton" type="button">${tc('deactivateButton')}</button></div></div><div class="control-section"><button class="panel-toggle panel-toggle--soft is-open" id="controlUserToggle" type="button" aria-expanded="true"><span class="panel-toggle__copy"><strong>${tc('managedUser')}</strong><span>${tc('managedUserText')}</span></span><span class="panel-toggle__icon" aria-hidden="true"></span></button><div class="panel-collapsible" id="controlUserBody"><div class="control-grid"><label class="custom-field custom-field--full"><span>${tc('managedUser')}</span>${managedUserSelect}</label>${buildControlStepperField('controlPointsInput', t('points'), 0, Number(managedUser.points || 0))}${buildControlStepperField('controlWinsInput', t('wins'), 0, Number(managedUser.wins || 0))}${buildControlStepperField('controlLossesInput', t('losses'), 0, Number(managedUser.losses || 0))}${buildControlStepperField('controlSessionMinutesInput', tc('sessionMinutes'), 1, currentMinutes)}</div><div class="control-actions"><button class="surface-button surface-button--ghost control-button--danger" id="controlRemoveRankingButton" type="button">${tc('removeRanking')}</button><button class="surface-button surface-button--ghost control-button--danger" id="controlCloseSessionButton" type="button">${tc('closeSession')}</button><button class="surface-button surface-button--primary" id="controlApplyStatsButton" type="button">${tc('applyStats')}</button></div></div></div><div class="control-section"><button class="panel-toggle panel-toggle--soft ${state.controlWordPanelOpen ? 'is-open' : ''}" id="controlWordToggle" type="button" aria-expanded="${state.controlWordPanelOpen ? 'true' : 'false'}"><span class="panel-toggle__copy"><strong>${tc('explorerTools')}</strong><span>${tc('explorerToolsText')}</span></span><span class="panel-toggle__icon" aria-hidden="true"></span></button><div class="panel-collapsible ${state.controlWordPanelOpen ? '' : 'panel-collapsible--collapsed'}" id="controlWordBody"><div class="control-grid"><label class="custom-field custom-field--full"><span>${tc('wordPicker')}</span>${wordPickerSelect}</label><div class="control-helper custom-field--full">${tc('wordPickerText')}</div><label class="custom-field custom-field--full"><span>${tc('wordTheme')}</span>${wordThemeSelect}</label><label class="custom-field custom-field--full"><span>${tc('wordEmoji')}</span><input id="controlWordEmojiInput" type="hidden" value="${draft.emoji}"><details class="control-emoji-master ${state.controlEmojiPanelOpen ? 'is-open' : ''}" id="controlEmojiMaster" ${state.controlEmojiPanelOpen ? 'open' : ''}><summary class="control-emoji-master__summary"><span class="control-emoji-master__copy"><strong>${tc('wordEmoji')}</strong><span>${tc('emojiGridHint')}</span></span><strong class="control-emoji-master__preview" id="controlWordEmojiPreview">${draft.emoji}</strong><span class="control-emoji-master__arrow" aria-hidden="true"></span></summary><div class="control-emoji-picker"><div class="control-emoji-groups">${emojiGrid}</div></div></details></label><label class="custom-field"><span>${tc('wordTerm')}</span><input id="controlWordTermInput" type="text" maxlength="80" placeholder="${t('wordTermPlaceholder')}" value="${draft.term || ''}"></label><label class="custom-field"><span>${tc('wordType')}</span><input id="controlWordTypeInput" type="text" maxlength="40" placeholder="${t('wordTypePlaceholder')}" value="${draft.type || ''}"></label><label class="custom-field custom-field--full"><span>${tc('wordMeaning')}</span><input id="controlWordMeaningInput" type="text" maxlength="140" placeholder="${t('wordMeaningPlaceholder')}" value="${draft.meaning || ''}"></label><label class="custom-field custom-field--full"><span>${tc('wordExample')}</span><input id="controlWordExampleInput" type="text" maxlength="180" placeholder="${t('wordExamplePlaceholder')}" value="${draft.example || ''}"></label><label class="custom-field custom-field--full"><span>${tc('wordTip')}</span><input id="controlWordTipInput" type="text" maxlength="120" placeholder="${t('wordTipPlaceholder')}" value="${draft.tip || ''}"></label></div><div class="control-actions"><button class="surface-button surface-button--ghost" id="controlClearWordButton" type="button">${tc('clearWord')}</button><button class="surface-button surface-button--ghost control-button--danger" id="controlDeleteWordButton" type="button"${deleteButtonDisabled}>${tc('deleteWord')}</button><button class="surface-button surface-button--primary" id="controlSaveWordButton" type="button">${saveButtonLabel}</button></div></div></div></article>`;

    elements.optionsSections.innerHTML = `${blockHtml}${controlHtml}`;
    elements.optionsSections.querySelectorAll('[data-option-action]').forEach((button) => button.addEventListener('click', () => handleOptionChange(button.dataset.optionAction, button.dataset.optionValue)));

    const unlockButton = document.getElementById('controlUnlockButton');
    const keyInput = document.getElementById('controlKeyInput');
    if (unlockButton && keyInput) {
        unlockButton.addEventListener('click', async () => {
            const unlocked = await unlockControlMode(keyInput.value);
            if (!unlocked) {
                pushToast(randomFrom(EVEREST_LINES.error), tc('unlockFail'), 'danger');
                keyInput.focus();
                keyInput.select();
                return;
            }
            pushToast(randomFrom(EVEREST_LINES.success), tc('unlockSuccess'), 'success');
            renderOptionsModal();
        });
        keyInput.addEventListener('keydown', async (event) => {
            if (event.key !== 'Enter') return;
            event.preventDefault();
            unlockButton.click();
        });
    }

    const removeRankingButton = document.getElementById('controlRemoveRankingButton');
    const closeSessionButton = document.getElementById('controlCloseSessionButton');
    const applyStatsButton = document.getElementById('controlApplyStatsButton');
    const saveWordButton = document.getElementById('controlSaveWordButton');
    const clearWordButton = document.getElementById('controlClearWordButton');
    const deleteWordButton = document.getElementById('controlDeleteWordButton');
    const deactivateButton = document.getElementById('controlDeactivateButton');
    const emojiPreview = document.getElementById('controlWordEmojiPreview');

    setupControlSelect({
        shellId: 'controlManagedUserShell',
        inputId: 'controlManagedUserSelect',
        triggerId: 'controlManagedUserTrigger',
        labelId: 'controlManagedUserTriggerLabel',
        dropdownId: 'controlManagedUserDropdown',
        searchId: 'controlManagedUserSearch',
        optionsId: 'controlManagedUserOptions',
        onSelect: (value) => {
            persistControlModeChanges();
            state.controlManagedUserId = value;
            renderOptionsModal();
        }
    });

    setupControlSelect({
        shellId: 'controlWordPickerShell',
        inputId: 'controlWordPickerInput',
        triggerId: 'controlWordPickerTrigger',
        labelId: 'controlWordPickerTriggerLabel',
        dropdownId: 'controlWordPickerDropdown',
        searchId: 'controlWordPickerSearch',
        optionsId: 'controlWordPickerOptions',
        onSelect: (value) => {
            const entry = getExplorerWordById(value);
            if (!entry) {
                clearControlWordDraft();
                state.controlWordPanelOpen = true;
                renderOptionsModal();
                return;
            }
            saveControlWordDraft({
                wordId: getExplorerWordId(entry),
                theme: entry.theme,
                term: entry.term,
                type: entry.type,
                meaning: entry.meaning,
                example: entry.example,
                tip: entry.tip,
                emoji: entry.emoji || '\uD83D\uDCD8'
            });
            state.controlWordPanelOpen = true;
            pushToast(randomFrom(EVEREST_LINES.info), tc('wordLoaded'), 'info');
            renderOptionsModal();
        }
    });

    setupControlSelect({
        shellId: 'controlWordThemeShell',
        inputId: 'controlWordThemeInput',
        triggerId: 'controlWordThemeTrigger',
        labelId: 'controlWordThemeTriggerLabel',
        dropdownId: 'controlWordThemeDropdown',
        searchId: 'controlWordThemeSearch',
        optionsId: 'controlWordThemeOptions',
        onSelect: (value) => {
            saveControlWordDraft({ ...getControlWordPayloadFromInputs(), theme: value });
        }
    });

    document.querySelectorAll('[data-control-emoji]').forEach((button) => {
        button.addEventListener('click', () => {
            const emoji = button.dataset.controlEmoji || '\uD83D\uDCD8';
            const input = document.getElementById('controlWordEmojiInput');
            if (input) input.value = emoji;
            if (emojiPreview) emojiPreview.textContent = emoji;
            document.querySelectorAll('[data-control-emoji]').forEach((choice) => choice.classList.toggle('is-selected', choice === button));
            saveControlWordDraft({ ...getControlWordPayloadFromInputs(), emoji });
        });
    });

    document.querySelectorAll('[data-stepper-target]').forEach((button) => {
        button.addEventListener('click', () => {
            const target = document.getElementById(button.dataset.stepperTarget || '');
            if (!target) return;
            if (button.dataset.stepperDirection === 'down') {
                target.stepDown();
            } else {
                target.stepUp();
            }
            target.dispatchEvent(new Event('input', { bubbles: true }));
            target.dispatchEvent(new Event('change', { bubbles: true }));
            target.focus();
        });
    });

    ['controlWordTermInput', 'controlWordTypeInput', 'controlWordMeaningInput', 'controlWordExampleInput', 'controlWordTipInput'].forEach((id) => {
        document.getElementById(id)?.addEventListener('input', () => {
            saveControlWordDraft(getControlWordPayloadFromInputs());
        });
    });

    removeRankingButton?.addEventListener('click', () => {
        if (!state.controlManagedUserId) {
            pushToast(randomFrom(EVEREST_LINES.error), tc('noManagedUser'), 'danger');
            return;
        }
        removeUserFromRanking(state.controlManagedUserId);
        pushToast(randomFrom(EVEREST_LINES.info), tc('userRemoved'), 'info');
        renderAll();
    });

    closeSessionButton?.addEventListener('click', () => {
        if (!state.controlManagedUserId) {
            pushToast(randomFrom(EVEREST_LINES.error), tc('noManagedUser'), 'danger');
            return;
        }
        const closedSelf = closeManagedSession(state.controlManagedUserId);
        if (closedSelf) return;
        pushToast(randomFrom(EVEREST_LINES.info), tc('sessionClosed'), 'info');
        bootstrapUser();
        renderAll();
    });

    applyStatsButton?.addEventListener('click', () => {
        if (!state.controlManagedUserId) {
            pushToast(randomFrom(EVEREST_LINES.error), tc('noManagedUser'), 'danger');
            return;
        }
        applyControlStats(state.controlManagedUserId, {
            points: document.getElementById('controlPointsInput')?.value,
            wins: document.getElementById('controlWinsInput')?.value,
            losses: document.getElementById('controlLossesInput')?.value,
            sessionMinutes: document.getElementById('controlSessionMinutesInput')?.value
        });
        pushToast(randomFrom(EVEREST_LINES.success), tc('statsApplied'), 'success');
        renderAll();
    });

    document.getElementById('controlUserToggle')?.addEventListener('click', () => togglePanel(document.getElementById('controlUserToggle'), document.getElementById('controlUserBody')));
    document.getElementById('controlWordToggle')?.addEventListener('click', () => {
        state.controlWordPanelOpen = !state.controlWordPanelOpen;
        togglePanel(document.getElementById('controlWordToggle'), document.getElementById('controlWordBody'));
    });

    saveWordButton?.addEventListener('click', () => {
        const payload = getControlWordPayloadFromInputs();
        if (!payload.theme || !payload.term || !payload.type || !payload.meaning || !payload.example || !payload.tip) {
            pushToast(randomFrom(EVEREST_LINES.error), tc('wordIncomplete'), 'danger');
            return;
        }

        if (payload.wordId) {
            updateExplorerWord(payload);
            pushToast(randomFrom(EVEREST_LINES.success), tc('wordUpdated'), 'success');
        } else {
            addExplorerWord(payload);
            pushToast(randomFrom(EVEREST_LINES.success), tc('wordAdded'), 'success');
        }

        clearControlWordDraft();
        renderAll();
        document.getElementById('controlWordTermInput')?.focus();
    });

    clearWordButton?.addEventListener('click', () => {
        clearControlWordDraft();
        renderOptionsModal();
        document.getElementById('controlWordTermInput')?.focus();
    });

    deleteWordButton?.addEventListener('click', () => {
        const payload = getControlWordPayloadFromInputs();
        if (!payload.wordId) {
            pushToast(randomFrom(EVEREST_LINES.error), tc('wordNeedSelection'), 'danger');
            return;
        }
        deleteExplorerWord(payload.wordId);
        clearControlWordDraft();
        pushToast(randomFrom(EVEREST_LINES.info), tc('wordDeleted'), 'info');
        renderAll();
    });

    document.getElementById('controlEmojiMaster')?.addEventListener('toggle', (event) => {
        state.controlEmojiPanelOpen = event.currentTarget.open;
    });

    deactivateButton?.addEventListener('click', () => {
        const { wordAction } = persistControlModeChanges({ lockMode: true });
        if (wordAction === 'added') {
            pushToast(randomFrom(EVEREST_LINES.success), tc('wordAdded'), 'success');
        } else if (wordAction === 'updated') {
            pushToast(randomFrom(EVEREST_LINES.success), tc('wordUpdated'), 'success');
        }
        pushToast(randomFrom(EVEREST_LINES.info), tc('deactivateSuccess'), 'info');
        renderAll();
    });
}

function clearOptionPulse() {
    if (state.optionPulseTimer) {
        window.clearTimeout(state.optionPulseTimer);
        state.optionPulseTimer = null;
    }
    if (!state.optionPulseKey) return;
    state.optionPulseKey = '';
    if (elements.optionsModal && !elements.optionsModal.hidden) {
        renderOptionsModal();
    }
}

function handleOptionChange
(action, value) {
    state.optionPulseKey = `${action}:${value}`;
    if (state.optionPulseTimer) {
        window.clearTimeout(state.optionPulseTimer);
    }
    if (action === 'mode') {
        if (state.settings.gameMode !== value) {
            state.settings.gameMode = value;
            resetActiveChallenge();
        }
    }
    if (action === 'language') state.settings.language = value;
    if (action === 'motion') state.settings.animationsOn = value === 'on';
    if (action === 'theme') state.settings.themeMode = value;
    if (action === 'sound') state.settings.soundOn = !state.settings.soundOn;
    if (action === 'voice') state.settings.voiceOn = !state.settings.voiceOn;
    saveSettings();
    renderAll();
    state.optionPulseTimer = window.setTimeout(clearOptionPulse, 280);
}

function openModal(id) {
    if (!elements[id]) return;
    elements[id].hidden = false;
    elements[id].classList.remove('is-closing');
    elements[id].classList.add('is-opening');
    window.setTimeout(() => elements[id]?.classList.remove('is-opening'), 260);
}

function closeModal(id) {
    if (!elements[id] || elements[id].hidden) return;
    elements[id].classList.remove('is-opening');
    elements[id].classList.add('is-closing');
    window.setTimeout(() => {
        if (!elements[id]) return;
        elements[id].hidden = true;
        elements[id].classList.remove('is-closing');
    }, 220);
}

function pushToast(title, text, kind = 'info') {
    const toast = document.createElement('article');
    toast.className = `toast ${kind === 'success' ? 'is-success' : kind === 'danger' ? 'is-danger' : ''}`;
    toast.innerHTML = `<strong>${title}</strong><span>${text}</span>`;
    elements.toastStack.appendChild(toast);
    window.setTimeout(() => {
        toast.classList.add('is-exiting');
        window.setTimeout(() => toast.remove(), 220);
    }, 2980);
}

function setActiveTheme(themeId) {
    state.activeThemeId = themeId;
    state.progress.lastPlayedTheme = themeId;
    saveProgress();
    state.activeStageId = 1;
    resetActiveChallenge();
    applyThemePalette();
    renderAll();
    document.querySelector('.stage-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderAll() {
    applyThemePalette();
    elements.themeSearchInput.placeholder = t('searchThemes');
    elements.explorerSearchInput.placeholder = t('searchLibrary');
    renderHero();
    renderProfile();
    renderSidebar();
    renderThemeGrid();
    renderStageList();
    renderGame();
    renderLeaderboard();
    renderExplorerThemeSelect();
    renderExplorer();
    renderQuickOptions();
    renderOptionsModal();
    updateSidebarSupport();
}

function loadData() {
    return Promise.all([
        fetch('words_by_level.json').then((response) => response.json()),
        fetch('words.json').then((response) => response.json())
    ]).then(([themeData, libraryData]) => {
        state.themes = themeData.themes;
        state.baseLibrary = libraryData.entries;
        refreshLibraryFromStorage();
        const defaultThemeId = state.themes.some((theme) => theme.id === 'basic-communication')
            ? 'basic-communication'
            : state.themes[0].id;
        const persistedThemeId = state.progress.lastPlayedTheme;
        state.activeThemeId = state.themes.some((theme) => theme.id === persistedThemeId)
            ? persistedThemeId
            : defaultThemeId;
        state.progress.lastPlayedTheme = state.activeThemeId;
        saveProgress();
    });
}

function logoutUser(shouldRedirect) {
    const userId = getUserId(state.user);
    const users = pruneUsers().filter((user) => getUserId(user) !== userId);
    writeStorage(STORAGE_KEYS.users, users);

    const allProgress = readAllProgress();
    delete allProgress[userId];
    writeAllProgress(allProgress);

    state.sharedLeaderboard = state.sharedLeaderboard.filter((user) => getUserId(user) !== userId);
    void deleteSharedLeaderboardUser(userId);
    localStorage.removeItem(STORAGE_KEYS.activeUser);
    pushToast(randomFrom(EVEREST_LINES.info), t('logoutDone'), 'info');
    if (shouldRedirect) {
        window.setTimeout(() => {
            window.location.href = LOGIN_FALLBACK_URL;
        }, 380);
    }
}

function bindEvents() {
    if (elements.sidebarBrand) {
        elements.sidebarBrand.setAttribute('role', 'button');
        elements.sidebarBrand.setAttribute('tabindex', '0');
        elements.sidebarBrand.setAttribute('title', 'Refresh Everest');
        elements.sidebarBrand.addEventListener('click', () => window.location.reload());
        elements.sidebarBrand.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            window.location.reload();
        });
    }

    elements.sidebarToggle.addEventListener('click', () => {
        if (window.innerWidth <= 1080) {
            elements.appShell.classList.toggle('sidebar-open');
        } else {
            elements.appShell.classList.toggle('sidebar-collapsed');
        }
    });

    elements.sidebarSearch?.addEventListener('click', () => ensureSidebarSearchFocus());

    elements.themeSearchInput.placeholder = t('searchThemes');
    elements.explorerSearchInput.placeholder = t('searchLibrary');

    elements.themeSearchInput.addEventListener('input', (event) => {
        state.searchTerm = event.target.value;
        renderSidebar();
    });

    elements.heroStartButton.addEventListener('click', startStage);
    elements.heroExploreButton.addEventListener('click', () => openModal('explorerModal'));
    elements.scrollThemeIntoViewButton.addEventListener('click', () => {
        document.querySelector(`[data-theme-card="${state.activeThemeId}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    elements.themeDeckToggle?.addEventListener('click', () => {
        const deckCard = getThemeDeckCard();
        if (!deckCard) return;
        const isCollapsed = deckCard.classList.contains('compact-collapsed');
        setThemeDeckCollapsed(!isCollapsed);
    });
    elements.stageToggle?.addEventListener('click', () => togglePanel(elements.stageToggle, elements.stageBody));
    elements.explorerToggle?.addEventListener('click', () => togglePanel(elements.explorerToggle, elements.explorerBody));
    elements.optionsToggle?.addEventListener('click', () => togglePanel(elements.optionsToggle, elements.optionsBody));
    elements.themeModeQuickToggle.addEventListener('click', () => {
        state.settings.themeMode = state.settings.themeMode === 'light' ? 'dark' : 'light';
        saveSettings();
        renderAll();
    });

    elements.openExplorerInlineButton.addEventListener('click', () => openModal('explorerModal'));
    elements.explorerButton.addEventListener('click', () => openModal('explorerModal'));
    elements.openLeaderboardInlineButton.addEventListener('click', () => openModal('leaderboardModal'));
    elements.leaderboardButton.addEventListener('click', () => openModal('leaderboardModal'));
    elements.optionsButton.addEventListener('click', () => openModal('optionsModal'));
    elements.logoutButton.addEventListener('click', () => logoutUser(true));

    elements.explorerSearchInput.addEventListener('input', (event) => {
        state.explorerSearch = event.target.value;
        renderExplorer();
    });
    elements.typingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        submitAnswer(elements.typingInput.value.trim());
    });

    elements.nextQuestionButton.addEventListener('click', advanceQuestion);
    elements.resetStageButton.addEventListener('click', () => {
        resetActiveChallenge();
        renderGame();
    });

    elements.resultReplayButton.addEventListener('click', () => {
        closeModal('resultModal');
        startStage();
    });
    elements.resultContinueButton.addEventListener('click', () => {
        closeModal('resultModal');
        const theme = getTheme();
        const nextStage = theme.stages.find((stage) => stage.id === state.activeStageId + 1);
        if (nextStage) state.activeStageId = nextStage.id;
        state.currentQuestion = null;
        state.questions = [];
        renderAll();
    });

    document.querySelectorAll('[data-close-modal]').forEach((button) => {
        button.addEventListener('click', () => closeModal(button.dataset.closeModal));
    });

    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 1080 && !elements.sidebar.contains(event.target) && !elements.sidebarToggle.contains(event.target)) {
            elements.appShell.classList.remove('sidebar-open');
        }
    });

    window.addEventListener('resize', () => syncThemeDeckState());

    window.addEventListener('storage', (event) => {
        if (event.key === STORAGE_KEYS.customWords) {
            refreshLibraryFromStorage();
            renderAll();
            return;
        }

        if ([STORAGE_KEYS.users, STORAGE_KEYS.progress, STORAGE_KEYS.activeUser].includes(event.key)) {
            bootstrapUser();
            renderAll();
        }
    });
}

function updateRecurringUi() {
    updateCountdown();
    renderLeaderboard();
    renderProfile();
    void cleanupExpiredSharedLeaderboard();
}

function refreshManagedUserPanel() {
    if (elements.optionsModal.hidden || !state.controlModeUnlocked) return;

    const managedUsers = getManagedUsers();
    const hiddenInput = document.getElementById('controlManagedUserSelect');
    const triggerLabel = document.getElementById('controlManagedUserTriggerLabel');
    const optionsRoot = document.getElementById('controlManagedUserOptions');
    const pointsInput = document.getElementById('controlPointsInput');
    const winsInput = document.getElementById('controlWinsInput');
    const lossesInput = document.getElementById('controlLossesInput');
    const sessionMinutesInput = document.getElementById('controlSessionMinutesInput');

    if (!hiddenInput || !triggerLabel || !optionsRoot || !pointsInput || !winsInput || !lossesInput || !sessionMinutesInput) {
        return;
    }

    if (!state.controlManagedUserId || !managedUsers.some((user) => getUserId(user) === state.controlManagedUserId)) {
        state.controlManagedUserId = managedUsers[0] ? getUserId(managedUsers[0]) : '';
    }

    const selectedUser = getManagedUserById(state.controlManagedUserId);
    hiddenInput.value = state.controlManagedUserId || '';
    triggerLabel.textContent = selectedUser ? `${selectedUser.profileEmoji || '\uD83E\uDDE0'} ${selectedUser.username}` : tc('userSelect');

    const searchInput = document.getElementById('controlManagedUserSearch');
    const normalizedQuery = (searchInput?.value || '').trim().toLowerCase();
    optionsRoot.innerHTML = managedUsers.map((user) => {
        const value = getUserId(user);
        const search = `${user.username} ${user.course || t('routePending')}`.toLowerCase();
        const hidden = normalizedQuery && !search.includes(normalizedQuery);
        return `<button type="button" class="course-option control-select-option ${value === state.controlManagedUserId ? 'active' : ''} ${hidden ? 'hidden' : ''}" data-value="${value}" data-search="${search}"><span class="course-option-main">${user.profileEmoji || '\uD83E\uDDE0'} ${user.username}</span><span class="course-option-alt">${user.course || t('routePending')}</span></button>`;
    }).join('');

    optionsRoot.querySelectorAll('[data-value]').forEach((button) => {
        button.addEventListener('click', () => {
            persistControlModeChanges();
            state.controlManagedUserId = button.dataset.value || '';
            renderOptionsModal();
        });
    });

    if (selectedUser) {
        pointsInput.value = Number(selectedUser.points || 0);
        winsInput.value = Number(selectedUser.wins || 0);
        lossesInput.value = Number(selectedUser.losses || 0);
        sessionMinutesInput.value = Math.max(1, Math.ceil(Math.max(0, (selectedUser.expiresAt || Date.now()) - Date.now()) / 60000));
    }
}

function getThemeDeckCard() {
    return elements.themeDeckBody?.closest('.theme-overview-card') || null;
}

function setThemeDeckCollapsed(shouldCollapse) {
    const deckCard = getThemeDeckCard();
    if (!deckCard || !elements.themeDeckToggle) return;

    deckCard.classList.toggle('compact-collapsed', shouldCollapse);
    deckCard.classList.toggle('compact-open', !shouldCollapse);
    elements.themeDeckToggle.setAttribute('aria-expanded', shouldCollapse ? 'false' : 'true');
    renderThemeGrid();
}

function syncThemeDeckState(force = false) {
    const deckCard = getThemeDeckCard();
    if (!deckCard || !elements.themeDeckToggle) return;

    if (force || (!deckCard.classList.contains('compact-collapsed') && !deckCard.classList.contains('compact-open'))) {
        setThemeDeckCollapsed(true);
    }
}

function togglePanel(button, body, shouldCollapse) {
    if (!button || !body) return;
    const collapsed = shouldCollapse ?? !body.classList.contains('panel-collapsible--collapsed');
    body.classList.toggle('panel-collapsible--collapsed', collapsed);
    button.classList.toggle('is-open', !collapsed);
    button.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
}

function ensureSidebarSearchFocus() {
    if (window.innerWidth <= 1080) {
        elements.appShell.classList.add('sidebar-open');
    } else {
        elements.appShell.classList.remove('sidebar-collapsed');
    }
    window.requestAnimationFrame(() => {
        elements.themeSearchInput?.focus();
        elements.themeSearchInput?.select();
    });
}

function hideLoader() {
    elements.loadingScreen.classList.add('is-hidden');
}

function init() {
    loadSettings();
    if (!bootstrapUser()) {
        return;
    }
    setupSharedLeaderboard();
    loadData()
        .then(() => {
            bindEvents();
            setupExplorerThemeSelect();
            setupSearchClearButton(elements.themeSearchInput, elements.themeSearchClear);
            setupSearchClearButton(elements.explorerSearchInput, elements.explorerSearchClear);
            syncThemeDeckState(true);
            togglePanel(elements.stageToggle, elements.stageBody, false);
            togglePanel(elements.explorerToggle, elements.explorerBody, true);
            togglePanel(elements.optionsToggle, elements.optionsBody, true);
            renderAll();
            updateCountdown();
            if (readStorage(STORAGE_KEYS.activeUser, null)?.username === 'Guest Climber') {
                pushToast(randomFrom(EVEREST_LINES.info), t('noUser'), 'info');
            }
            window.setTimeout(hideLoader, 780);
            window.setInterval(updateRecurringUi, 1000);
        })
        .catch((error) => {
            console.error(error);
            elements.loadingMessage.textContent = 'The ridge hit a little ice. Refresh the page and Everest will rebuild the route.';
        });
}

init();


















