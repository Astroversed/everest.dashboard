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
        allManagedUsers: 'All active climbers',
        selectedUsersCount: '{count} climbers selected',
        selectedUsersEmpty: 'No climbers selected',
        selectedUsersLabel: 'Selected climbers',
        usersRemoved: 'The selected climbers were removed from the live ranking.',
        sessionsClosed: 'The selected sessions were closed successfully.',
        statsAppliedMany: 'The selected climbers were updated successfully.',
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
        title: 'Modo de control',
        subtitle: 'Activa las herramientas de administraci\u00F3n de Everest solo para esta sesi\u00F3n del panel.',
        unlockLabel: 'Clave de control',
        unlockPlaceholder: 'Introduce la clave de control',
        unlockButton: 'Desbloquear modo de control',
        unlockedBadge: 'Modo de control activo',
        lockedHint: 'Este acceso solo se habilita desde el \u00FAltimo bloque de opciones.',
        managedUser: 'Usuario administrado',
        managedUserText: 'Elige el escalador que quieres gestionar.',
        allManagedUsers: 'Todos los escaladores activos',
        selectedUsersCount: '{count} escaladores seleccionados',
        selectedUsersEmpty: 'Ningún escalador seleccionado',
        selectedUsersLabel: 'Escaladores seleccionados',
        usersRemoved: 'Los escaladores seleccionados fueron retirados de la tabla en vivo.',
        sessionsClosed: 'Las sesiones seleccionadas se cerraron correctamente.',
        statsAppliedMany: 'Los escaladores seleccionados fueron actualizados correctamente.',
        userSelect: 'Selecciona un escalador',
        rankTools: 'Acciones sobre ranking y sesi\u00F3n',
        rankToolsText: 'Quita a un escalador de la tabla o cierra su sesi\u00F3n por completo.',
        removeRanking: 'Eliminar del ranking',
        closeSession: 'Cerrar sesi\u00F3n',
        statTools: 'Puntos, victorias, derrotas y tiempo de sesi\u00F3n',
        statToolsText: 'Ajusta los valores guardados y los minutos restantes de la sesi\u00F3n.',
        sessionMinutes: 'Minutos restantes',
        applyStats: 'Aplicar cambios',
        explorerTools: 'Editor de palabras del Explorer',
        explorerToolsText: 'Crea, edita o elimina palabras del aprendizaje natural directamente desde el Explorer.',
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
        unlockSuccess: 'Modo de control activado. Ya puedes administrar Everest.',
        unlockFail: 'Esa clave no pudo activar el modo de control.',
        userRemoved: 'El escalador fue retirado de la tabla en vivo.',
        sessionClosed: 'La sesi\u00F3n seleccionada se cerr\u00F3 correctamente.',
        statsApplied: 'Los datos del usuario y su tiempo de sesi\u00F3n fueron actualizados.',
        wordAdded: 'La nueva palabra del Explorer se agreg\u00F3 a la ruta.',
        wordUpdated: 'La palabra del Explorer fue actualizada correctamente.',
        wordDeleted: 'La palabra del Explorer fue eliminada de la ruta.',
        wordLoaded: 'La palabra del Explorer ya est\u00E1 lista en el editor.',
        noManagedUser: 'Elige un escalador antes de usar el modo de control.',
        selfClosed: 'Tu sesi\u00F3n fue cerrada desde el modo de control.',
        wordIncomplete: 'Completa todos los campos del Explorer antes de guardar la palabra.',
        wordNeedSelection: 'Elige primero una palabra existente del Explorer antes de intentar eliminarla.',
        currentStageTag: 'Ruta activa',
        deactivateButton: 'Desactivar modo de control',
        deactivateSuccess: 'El modo de control se cerr\u00F3 y tus cambios pendientes quedaron guardados.',
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
        summitChoice: 'Summit Choice', summitTyping: 'Summit Typing', summitMatch: 'Word Match', summitContext: 'Context Trail',
        chooseEnglish: 'Choose the English word for "{word}".',
        typeEnglish: 'Type the English word for "{word}".',
        matchPairPrompt: 'Choose the emoji that best represents "{word}".',
        matchPairHelp: 'Read the word card on the left, then choose the emoji path on the right that matches it best.',
        matchSignalLabel: 'Word card',
        matchEmojiLabel: 'Emoji route',
        challengeWord: 'Target word',
        matchSignalStep: 'Word focus',
        matchEmojiStep: 'Choose the best emoji',
        matchSelectionIdle: 'Choose one emoji route to answer.',
        matchSelectionSignal: 'Card ready',
        matchSelectionEmoji: 'Meaning selected',
        matchSignalPending: 'Word ready',
        matchMeaningPending: 'Emoji pending',
        contextPrompt: 'Complete the trail sentence with the word that fits best.',
        contextHelp: 'Read the sentence, follow the clue, and choose the English word that completes the context.',
        contextBadge: 'Context sentence',
        contextBlank: 'Missing word',
        contextChoiceStep: 'Choose the best word',
        contextClueLabel: 'Trail clue',
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
        darkMode: 'Dark mode', lightMode: 'Light mode', language: 'Language', sound: 'Sound', voice: 'Voice', animations: 'Animations', options: 'Options', logout: 'Logout',
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
        wordTipPlaceholder: 'Use it for ice landscapes and cold nature topics.',
        themeChallenge: 'Theme challenge',
        appTitle: 'Everest - Climb to Fluency',
        brandSubtitle: 'Climb to Fluency',
        loadingPreparing: 'Preparing the ridge. Your climb is almost ready.',
        routesLabel: 'Routes',
        themeMountainMap: 'Theme mountain map',
        everestNote: 'Everest note',
        summitDashboard: 'Summit dashboard',
        currentAscent: 'Current ascent',
        sessionLabel: 'Session',
        activeRouteLabel: 'Active route',
        climberProfile: 'Climber profile',
        ridgeRankLabel: 'Ridge rank',
        top20Pending: 'Top 20 ridge pending',
        stageRoutes: 'Stage routes',
        stageRouteBoard: 'Stage route board',
        stageRouteBoardText: 'Open the route list, choose one stage, then jump into the challenge.',
        stageStep1: '1. Select a stage',
        stageStep2: '2. Press play',
        stageStep3: '3. Climb for points',
        themeDeck: 'Theme deck',
        chooseRouteDeck: 'Choose the route you want to climb',
        deckGuide1: 'Use the sidebar for fast switching',
        deckGuide2: 'Open this deck only when you want the full route map',
        ridgeBoard: 'Ridge board',
        liveLeaderboard: 'Live leaderboard',
        openTop20: 'Open top 20',
        exploreNatively: 'Explore natively',
        englishExplorer: 'English explorer',
        explorerPreview: 'Explorer preview',
        explorerPreviewText: 'Keep this folded and open the full library from the header when you need depth.',
        climbControls: 'Climb controls',
        controlsPreview: 'Controls preview',
        controlsPreviewText: 'Use the header button for the full options panel or unfold this quick control strip.',
        leaderboardModalTitle: 'Everest leaderboard',
        leaderboardModalText: 'Watch the summit shift in real time as climbers earn points, wins and time.',
        rankHeader: 'Rank',
        courseHeader: 'Course',
        profileNameHeader: 'Profile & Name',
        nativeLearning: 'Native learning',
        explorerModalTitle: 'Everest English explorer',
        explorerModalText: 'Explore themed words, meanings and examples before jumping back into the climb.',
        searchThemePlaceholder: 'Search a theme...',
        explorerThemeList: 'Explorer theme list',
        summitControls: 'Summit controls',
        summitControlsText: 'Shape the route, language, atmosphere and advanced control tools from one clear command point.',
        closeLeaderboard: 'Close leaderboard',
        closeExplorer: 'Close explorer',
        closeOptions: 'Close options',
        clearThemeSearch: 'Clear theme search',
        clearExplorerSearch: 'Clear explorer search',
        toggleSidebar: 'Toggle sidebar',
        refreshEverest: 'Refresh Everest'
    },
    es: {
        welcome: 'Bienvenido, {name}.',
        subtitle: 'Suma puntos, supera etapas tem\u00E1ticas y sigue avanzando hacia la fluidez.',
        points: 'Puntos', wins: 'Victorias', losses: 'Derrotas', time: 'Tiempo',
        summitChoice: 'Respuesta de opci\u00F3n m\u00FAltiple', summitTyping: 'Respuesta escrita', summitMatch: 'Emparejar palabras', summitContext: 'Completar contexto',
        chooseEnglish: 'Elige la palabra en ingl\u00E9s para "{word}".',
        typeEnglish: 'Escribe la palabra en ingl\u00E9s para "{word}".',
        matchPairPrompt: 'Elige el emoji que mejor representa "{word}".',
        matchPairHelp: 'Lee la tarjeta de la palabra a la izquierda y luego elige, a la derecha, la ruta de emoji que mejor la representa.',
        matchSignalLabel: 'Tarjeta de palabra',
        matchEmojiLabel: 'Ruta de emoji',
        challengeWord: 'Palabra objetivo',
        matchSignalStep: 'Palabra guía',
        matchEmojiStep: 'Elige el mejor emoji',
        matchSelectionIdle: 'Elige una sola ruta de emoji para responder.',
        matchSelectionSignal: 'Tarjeta lista',
        matchSelectionEmoji: 'Emoji elegido',
        matchSignalPending: 'Palabra lista',
        matchMeaningPending: 'Emoji pendiente',
        contextPrompt: 'Completa la oraci\u00F3n de la ruta con la palabra que mejor encaja.',
        contextHelp: 'Lee la oraci\u00F3n, sigue la pista y elige la palabra en ingl\u00E9s que completa mejor el contexto.',
        contextBadge: 'Oraci\u00F3n en contexto',
        contextBlank: 'Palabra faltante',
        contextChoiceStep: 'Elige la mejor palabra',
        contextClueLabel: 'Pista de ruta',
        hintPrefix: 'Pista', examplePrefix: 'Uso en ruta',
        idleTitle: 'Campamento base listo.',
        idleText: 'Hace fr\u00EDo en la cima, pero tu siguiente respuesta puede calentar la ruta.',
        correctTitle: 'Paso limpio.', wrongTitle: 'Hay otro paso esperando.', timeoutTitle: 'El tiempo se acab\u00F3.',
        stageClear: 'Etapa completada', stageRetry: 'La etapa necesita un intento m\u00E1s',
        nextChallenge: 'Siguiente desaf\u00EDo', checkAnswer: 'Verificar respuesta', typePlaceholder: 'Escribe la respuesta en ingl\u00E9s',
        stagePoints: 'Puntos de la etapa', accuracy: 'Precisi\u00F3n', routeFocus: 'Objetivo de la ruta',
        startStage: 'Iniciar etapa actual', replay: 'Repetir etapa', continue: 'Seguir la escalada',
        openLibrary: 'Abrir biblioteca', focusRoute: 'Ir a la ruta activa', searchThemes: 'Buscar rutas, modos o temas',
        searchLibrary: 'Buscar un t\u00E9rmino, pista o tema', topRidge: 'Top 20', quickOptions: 'Ajustes r\u00E1pidos',
        darkMode: 'Modo oscuro', lightMode: 'Modo claro', language: 'Idioma', sound: 'Sonido', voice: 'Voz', animations: 'Animaciones', options: 'Opciones', logout: 'Cerrar sesión',
        statusOn: 'Activado', statusOff: 'Desactivado',
        gameMode: 'Modo de juego',
        play: 'Jugar', select: 'Seleccionar', edit: 'Editar', allThemes: 'Todos los temas', activeClimber: 'Escalador activo',
        coursePending: 'Curso pendiente', routePending: 'Ruta pendiente',
        themeClearedLabel: '{count}/3 superadas',
        openDeckTitle: 'Abrir panel de {theme}',
        hideDeckTitle: 'Ocultar panel de {theme}',
        openDeckText: 'Ruta actual: {theme}. Abre este panel cuando quieras ver el mapa completo.',
        hideDeckText: 'La barra lateral ya te deja cambiar de ruta r\u00E1pidamente. Cierra este panel para aligerar la vista.',
        themeStagesTitle: 'Etapas de {theme}',
        stageBest: '{value}% mejor marca',
        stageClears: '{value} completadas',
        youHere: 'Est\u00E1s escalando aqu\u00ED', languageHelp: 'Cambia el idioma de la interfaz de Everest entre ingl\u00E9s y espa\u00F1ol.',
        noLeaderboard: 'Aqu\u00ED solo aparecen los escaladores que siguen activos durante este pase de 1 hora.',
        noExplorer: 'Abre una ruta y Everest te mostrar\u00E1 aqu\u00ED vocabulario relacionado con ese tema.',
        noThemeResults: 'Ninguna ruta coincide con esa b\u00FAsqueda.',
        noChallenge: 'Elige una etapa y empieza la subida para recibir tu primer desaf\u00EDo.',
        noUser: 'No se encontr\u00F3 una sesi\u00F3n activa. Everest abri\u00F3 un acceso temporal de invitado.',
        logoutDone: 'Tu pase de escalada se cerr\u00F3. Nos vemos en la pr\u00F3xima subida.',
        timeoutText: 'La ruta se qued\u00F3 sin tiempo, pero a\u00FAn puedes subir el siguiente paso.',
        rankLine: 'Posici\u00F3n actual: #{rank}', rankUnknown: 'La posici\u00F3n aparecer\u00E1 cuando la tabla se actualice.',
        topRoute: 'Ruta actual', stageBadge: 'Etapa {stage}', pointsBadge: '{points} puntos extra',
        clearBonus: 'Bono por completar',
        modeBlockTitle: 'Modo de juego', modeBlockText: 'Conserva la esencia de Everest, pero te deja elegir c\u00F3mo quieres responder.',
        animationBlockTitle: 'Animaciones del panel', animationBlockText: 'Mant\u00E9n las animaciones normales de Everest o reduce el movimiento si el dispositivo necesita una experiencia m\u00E1s ligera.',
        themeBlockTitle: 'Apariencia', themeBlockText: 'Cambia entre el modo claro y el modo oscuro sin perder claridad.',
        audioBlockTitle: 'Apoyo durante la ruta', audioBlockText: 'Activa sonido y voz si quieres una ayuda extra durante la ruta.',
        resultWinText: 'Superaste la etapa y seguiste avanzando en tu ascenso.',
        resultLoseText: 'Esta vez la ruta se resisti\u00F3, pero ahora el camino est\u00E1 m\u00E1s claro.',
        wordTermPlaceholder: 'glacier',
        wordTypePlaceholder: 'sustantivo',
        wordMeaningPlaceholder: 'glaciar',
        wordExamplePlaceholder: 'The glacier is melting slowly.',
        wordTipPlaceholder: '\u00DAsala para paisajes helados y temas de naturaleza fr\u00EDa.',
        themeChallenge: 'Desafío temático',
        appTitle: 'Everest - Escala hacia la fluidez',
        brandSubtitle: 'Escala hacia la fluidez',
        loadingPreparing: 'Preparando Everest. Tu ascenso casi est\u00E1 listo.',
        routesLabel: 'Rutas',
        themeMountainMap: 'Mapa de temas',
        everestNote: 'Nota de Everest',
        summitDashboard: 'Panel principal',
        currentAscent: 'Ascenso actual',
        sessionLabel: 'Sesi\u00F3n',
        activeRouteLabel: 'Ruta activa',
        climberProfile: 'Perfil del escalador',
        ridgeRankLabel: 'Posici\u00F3n actual',
        top20Pending: 'A\u00FAn sin puesto en el Top 20',
        stageRoutes: 'Rutas de etapa',
        stageRouteBoard: 'Panel de etapas',
        stageRouteBoardText: 'Abre la lista, elige una etapa y entra directo al desaf\u00EDo.',
        stageStep1: '1. Elige una etapa',
        stageStep2: '2. Pulsa jugar',
        stageStep3: '3. Escala por puntos',
        themeDeck: 'Panel de temas',
        chooseRouteDeck: 'Elige la ruta que quieres escalar',
        deckGuide1: 'Usa la barra lateral para cambiar r\u00E1pido',
        deckGuide2: 'Abre este panel solo cuando quieras el mapa completo',
        ridgeBoard: 'Tabla de posiciones',
        liveLeaderboard: 'Clasificaci\u00F3n en vivo',
        openTop20: 'Abrir top 20',
        exploreNatively: 'Aprende de forma natural',
        englishExplorer: 'Explorador de ingl\u00E9s',
        explorerPreview: 'Vista previa del explorador',
        explorerPreviewText: 'Mantenlo cerrado y abre la biblioteca completa desde el encabezado cuando necesites m\u00E1s profundidad.',
        climbControls: 'Controles de escalada',
        controlsPreview: 'Vista previa de controles',
        controlsPreviewText: 'Usa el bot\u00F3n del encabezado para abrir el panel completo o despliega esta vista r\u00E1pida.',
        leaderboardModalTitle: 'Clasificaci\u00F3n de Everest',
        leaderboardModalText: 'Observa c\u00F3mo cambia la tabla en tiempo real mientras los escaladores suman puntos, victorias y tiempo.',
        rankHeader: 'Rango',
        courseHeader: 'Curso',
        profileNameHeader: 'Perfil y nombre',
        nativeLearning: 'Aprendizaje nativo',
        explorerModalTitle: 'Explorador de ingl\u00E9s Everest',
        explorerModalText: 'Explora palabras, significados y ejemplos tem\u00E1ticos antes de volver al ascenso.',
        searchThemePlaceholder: 'Buscar un tema...',
        explorerThemeList: 'Lista de temas del explorador',
        summitControls: 'Controles de Everest',
        summitControlsText: 'Ajusta la ruta, el idioma, la apariencia y las herramientas avanzadas desde un solo panel claro.',
        closeLeaderboard: 'Cerrar tabla',
        closeExplorer: 'Cerrar explorador',
        closeOptions: 'Cerrar opciones',
        clearThemeSearch: 'Borrar b\u00FAsqueda de rutas',
        clearExplorerSearch: 'Borrar b\u00FAsqueda del explorador',
        toggleSidebar: 'Alternar barra lateral',
        refreshEverest: 'Recargar Everest'
    }
};

const state = {
    themes: [], baseLibrary: [], library: [], settings: null, user: null, progress: null,
    activeThemeId: null, activeStageId: 1, searchTerm: '', explorerSearch: '', explorerTheme: 'all',
    stageLive: false, questions: [], questionIndex: 0, currentQuestion: null, questionResolved: false,
    secondsLeft: 15, timerId: null, stageStartedAt: 0, stagePoints: 0, stageCorrect: 0, stageWrong: 0,
    streak: 0, bestStreak: 0, latestAccuracy: 0, matchSelection: { signal: '', emoji: '' }, lastResolvedAnswer: '', controlModeUnlocked: sessionStorage.getItem(CONTROL_SESSION_KEY) === '1', controlManagedUserId: '', controlManagedUserIds: [], controlManageAllUsers: false, controlManagedSelectionTouched: false, controlWordDraft: readStorage(STORAGE_KEYS.controlWordDraft, null), controlWordPanelOpen: false, controlEmojiPanelOpen: false, optionPulseKey: '', optionPulseTimer: null,
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

function repairPotentialMojibake(value) {
    const text = String(value || '');
    if (!text || !/[ÃÂâð]/.test(text)) return text;

    try {
        const bytes = Uint8Array.from(Array.from(text), (character) => character.charCodeAt(0) & 0xff);
        const decoded = new TextDecoder('utf-8').decode(bytes);
        return decoded && !decoded.includes('\uFFFD') ? decoded : text;
    } catch (error) {
        return text;
    }
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

function tg(key, replacements = {}) {
    let text = ui.en[key] || key;
    Object.entries(replacements).forEach(([token, value]) => { text = text.replace(`{${token}}`, value); });
    return text;
}

function tc(key, replacements = {}) {
    const language = state.settings?.language || 'en';
    let text = (controlUi[language] && controlUi[language][key]) || controlUi.en[key] || key;
    Object.entries(replacements).forEach(([token, value]) => { text = text.replace(`{${token}}`, value); });
    return text;
}

function getStatusLabel(isActive) {
    return isActive ? t('statusOn') : t('statusOff');
}

function getGameModeLabel(mode = state.settings?.gameMode) {
    if (mode === 'typing') return t('summitTyping');
    if (mode === 'match') return t('summitMatch');
    if (mode === 'context') return t('summitContext');
    return t('summitChoice');
}

function getGameModeLabelEnglish(mode = state.settings?.gameMode) {
    if (mode === 'typing') return tg('summitTyping');
    if (mode === 'match') return tg('summitMatch');
    if (mode === 'context') return tg('summitContext');
    return tg('summitChoice');
}

function getThemeMatchSignalEmoji(themeId = state.activeThemeId) {
    return THEME_MATCH_SIGNAL_EMOJIS[themeId] || '\uD83E\uDDED';
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
    'basic-communication': '\uD83D\uDCAC',
    'grammar-language': '\uD83E\uDDE9',
    'human-body-identity': '\uD83E\uDDD1',
    'personal-social-life': '\uD83D\uDC65',
    'education-work': '\uD83C\uDF93',
    'places-environment': '\uD83D\uDCCD',
    'movement-navigation': '\uD83E\uDDED',
    'shopping-daily-life': '\uD83D\uDECD\uFE0F',
    'clothing-style': '\uD83D\uDC57',
    'food-drinks': '\uD83C\uDF7D\uFE0F',
    'nature-weather': '\uD83C\uDF26\uFE0F',
    'culture-leisure': '\uD83C\uDFAD',
    'tools-objects': '\uD83E\uDDF0',
    technology: '\uD83D\uDCBB',
    'concepts-academic': '\uD83D\uDCD8'
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
        const mergedEntry = {
            ...entry,
            ...patch
        };
        return {
            ...mergedEntry,
            theme: repairPotentialMojibake(mergedEntry.theme),
            term: repairPotentialMojibake(mergedEntry.term),
            type: repairPotentialMojibake(mergedEntry.type),
            meaning: repairPotentialMojibake(mergedEntry.meaning),
            example: repairPotentialMojibake(mergedEntry.example),
            tip: repairPotentialMojibake(mergedEntry.tip),
            emoji: repairPotentialMojibake(mergedEntry.emoji),
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

function syncControlManagedSelectionState() {
    const managedUsers = getManagedUsers();
    const validIds = new Set(managedUsers.map((user) => getUserId(user)));
    state.controlManagedUserIds = Array.from(new Set((state.controlManagedUserIds || []).filter((userId) => validIds.has(userId))));
    if (state.controlManageAllUsers && !managedUsers.length) {
        state.controlManageAllUsers = false;
    }
    state.controlManagedUserId = state.controlManagedUserIds[0] || '';
    return managedUsers;
}

function getControlTargetUserIds() {
    const managedUsers = syncControlManagedSelectionState();
    if (state.controlManageAllUsers) {
        return managedUsers.map((user) => getUserId(user));
    }
    return [...state.controlManagedUserIds];
}

function getControlSelectedUsers() {
    const targetIds = new Set(getControlTargetUserIds());
    return getManagedUsers().filter((user) => targetIds.has(getUserId(user)));
}

function getControlManagedReferenceUser() {
    const selectedUsers = getControlSelectedUsers();
    if (selectedUsers.length) return selectedUsers[0];
    return state.user || getManagedUsers()[0] || null;
}

function getControlManagedSelectionLabel() {
    const managedUsers = syncControlManagedSelectionState();
    if (state.controlManageAllUsers && managedUsers.length) {
        return tc('allManagedUsers');
    }
    if (state.controlManagedUserIds.length === 1) {
        const selectedUser = getManagedUserById(state.controlManagedUserIds[0]);
        return selectedUser ? `${selectedUser.profileEmoji || '\uD83E\uDDE0'} ${selectedUser.username}` : tc('userSelect');
    }
    if (state.controlManagedUserIds.length > 1) {
        return tc('selectedUsersCount', { count: state.controlManagedUserIds.length });
    }
    return tc('userSelect');
}

function setControlManagedSelection(userIds = [], { selectAll = false, touched = true } = {}) {
    state.controlManageAllUsers = selectAll;
    state.controlManagedUserIds = Array.from(new Set((userIds || []).filter(Boolean)));
    state.controlManagedSelectionTouched = touched || state.controlManagedSelectionTouched;
    syncControlManagedSelectionState();
}

function toggleControlManagedUser(userId) {
    const currentIds = new Set(state.controlManagedUserIds || []);
    if (currentIds.has(userId)) {
        currentIds.delete(userId);
    } else {
        currentIds.add(userId);
    }
    setControlManagedSelection(Array.from(currentIds), { selectAll: false, touched: true });
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

async function closeManagedSession(userId) {
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
        await deleteSharedLeaderboardUser(userId);
        pushToast(randomFrom(EVEREST_LINES.info), tc('selfClosed'), 'info');
        window.setTimeout(() => { window.location.href = LOGIN_FALLBACK_URL; }, 420);
        return true;
    }

    state.controlManagedUserIds = (state.controlManagedUserIds || []).filter((id) => id !== userId);
    if (state.controlManagedUserId === userId) {
        state.controlManagedUserId = state.controlManagedUserIds[0] || '';
    }

    state.sharedLeaderboard = state.sharedLeaderboard.filter((user) => getUserId(user) !== userId);
    await deleteSharedLeaderboardUser(userId);
    if (!state.controlManagedUserIds.length) {
        state.controlManageAllUsers = false;
    }
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

const THEME_UI_ES = {
    'basic-communication': {
        title: 'Comunicación básica',
        summary: 'Saludos, respuestas rápidas y comienzos sociales con seguridad.',
        stages: {
            1: { name: 'Hablar en ruta', focus: 'Saludos y cortesía básica' },
            2: { name: 'Respuestas rápidas', focus: 'Respuestas breves y palabras de apoyo' },
            3: { name: 'Chispa social', focus: 'Amistad, expresión oral y escucha' }
        }
    },
    'grammar-language': {
        title: 'Gramática y lenguaje',
        summary: 'Acciones, descripciones y conectores para expresar ideas con lógica.',
        stages: {
            1: { name: 'Acciones clave', focus: 'Verbos esenciales' },
            2: { name: 'Describe el panorama', focus: 'Adjetivos y cualidades' },
            3: { name: 'Pasos lógicos', focus: 'Conectar ideas' }
        }
    },
    'human-body-identity': {
        title: 'Cuerpo humano e identidad',
        summary: 'Partes del cuerpo, emociones e identidad personal.',
        stages: {
            1: { name: 'Bases del cuerpo', focus: 'Vocabulario visible del cuerpo' },
            2: { name: 'Clima emocional', focus: 'Emociones y estados' },
            3: { name: 'Quién eres', focus: 'Vocabulario de identidad' }
        }
    },
    'personal-social-life': {
        title: 'Vida personal y social',
        summary: 'Rutina del hogar, celebraciones y conexiones del día a día.',
        stages: {
            1: { name: 'Ritmo del hogar', focus: 'Objetos de la vida cotidiana' },
            2: { name: 'Momentos sociales', focus: 'Personas y eventos' },
            3: { name: 'Rutina diaria', focus: 'Rutina y entorno cercano' }
        }
    },
    'education-work': {
        title: 'Educación y trabajo',
        summary: 'Herramientas de estudio, profesiones y crecimiento de habilidades.',
        stages: {
            1: { name: 'Base del aula', focus: 'Fundamentos escolares' },
            2: { name: 'Camino profesional', focus: 'Trabajos comunes' },
            3: { name: 'Cima de habilidades', focus: 'Proyectos y crecimiento' }
        }
    },
    'places-environment': {
        title: 'Lugares y entorno',
        summary: 'Lugares familiares, paisajes y el mundo que te rodea.',
        stages: {
            1: { name: 'Lugares cercanos', focus: 'Sitios que visitas con frecuencia' },
            2: { name: 'Ruta del paisaje', focus: 'Naturaleza a tu alrededor' },
            3: { name: 'Visión del mundo', focus: 'Asentamientos y rutas' }
        }
    },
    'movement-navigation': {
        title: 'Movimiento y orientación',
        summary: 'Movimiento, transporte y control del recorrido.',
        stages: {
            1: { name: 'Muévete ya', focus: 'Palabras básicas de movimiento' },
            2: { name: 'Línea de transporte', focus: 'Vehículos y viajes' },
            3: { name: 'Sentido de ruta', focus: 'Dirección y herramientas de viaje' }
        }
    },
    'shopping-daily-life': {
        title: 'Compras y vida diaria',
        summary: 'Objetos útiles, palabras de mercado y necesidades cotidianas.',
        stages: {
            1: { name: 'Kit útil', focus: 'Objetos del día a día' },
            2: { name: 'Palabras de mercado', focus: 'Comprar y pagar' },
            3: { name: 'Estante diario', focus: 'Necesidades cotidianas' }
        }
    },
    'clothing-style': {
        title: 'Ropa y estilo',
        summary: 'Prendas, accesorios e identidad visual.',
        stages: {
            1: { name: 'Base del clóset', focus: 'Prendas principales' },
            2: { name: 'Notas de estilo', focus: 'Cualidades visuales' },
            3: { name: 'Toque final', focus: 'Accesorios y acabado del atuendo' }
        }
    },
    'food-drinks': {
        title: 'Comida y bebidas',
        summary: 'Alimentos diarios, comidas favoritas y vocabulario de cocina.',
        stages: {
            1: { name: 'Base de cocina', focus: 'Palabras simples de comida' },
            2: { name: 'Comidas favoritas', focus: 'Platos comunes' },
            3: { name: 'Cima del menú', focus: 'Cocina e ideas de menú' }
        }
    },
    'nature-weather': {
        title: 'Naturaleza y clima',
        summary: 'Cielo, animales y escenas de la tierra.',
        stages: {
            1: { name: 'Señales del cielo', focus: 'Clima básico' },
            2: { name: 'Amigos salvajes', focus: 'Animales y criaturas' },
            3: { name: 'Escala terrestre', focus: 'Terreno y cambios estacionales' }
        }
    },
    'culture-leisure': {
        title: 'Cultura y ocio',
        summary: 'Diversión, deportes y expresión creativa.',
        stages: {
            1: { name: 'Tiempo libre', focus: 'Inicio del ocio' },
            2: { name: 'Pulso deportivo', focus: 'Juego y competencia' },
            3: { name: 'Cima creativa', focus: 'Presentaciones y eventos' }
        }
    },
    'tools-objects': {
        title: 'Herramientas y objetos',
        summary: 'Herramientas útiles, objetos del hogar y palabras de materiales.',
        stages: {
            1: { name: 'Básicos útiles', focus: 'Objetos simples' },
            2: { name: 'Banco de herramientas', focus: 'Herramientas prácticas' },
            3: { name: 'Laboratorio de materiales', focus: 'Lenguaje de objetos' }
        }
    },
    technology: {
        title: 'Tecnología',
        summary: 'Dispositivos, herramientas digitales y vocabulario orientado al futuro.',
        stages: {
            1: { name: 'Base de dispositivos', focus: 'Hardware moderno' },
            2: { name: 'Ruta digital', focus: 'Palabras del mundo en línea' },
            3: { name: 'Laboratorio del futuro', focus: 'Conceptos avanzados de tecnología' }
        }
    },
    'concepts-academic': {
        title: 'Conceptos y academia',
        summary: 'Cualidades, comparaciones y vocabulario de razonamiento.',
        stages: {
            1: { name: 'Tamaño y tiempo', focus: 'Comparaciones esenciales' },
            2: { name: 'Indicadores de calidad', focus: 'Ideas descriptivas' },
            3: { name: 'Ruta de la razón', focus: 'Lógica y relación' }
        }
    }
};

function localizeTheme(theme) {
    if (!theme || state.settings?.language !== 'es') return theme;
    const locale = THEME_UI_ES[theme.id];
    if (!locale) return theme;
    return {
        ...theme,
        title: locale.title || theme.title,
        summary: locale.summary || theme.summary,
        stages: theme.stages.map((stage) => {
            const stageLocale = locale.stages?.[stage.id];
            return stageLocale ? { ...stage, name: stageLocale.name, focus: stageLocale.focus } : stage;
        })
    };
}

function localizeStage(themeId, stage) {
    if (!stage || state.settings?.language !== 'es') return stage;
    const stageLocale = THEME_UI_ES[themeId]?.stages?.[stage.id];
    return stageLocale ? { ...stage, name: stageLocale.name, focus: stageLocale.focus } : stage;
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
    return { en: repairPotentialMojibake(raw[0]), es: repairPotentialMojibake(raw[1]), emoji: repairPotentialMojibake(raw[2]), hint: repairPotentialMojibake(raw[3]) };
}

function buildChoices(answerTerm, pool) {
    const distractors = shuffle(pool.filter((term) => normalizeWord(term.en) !== normalizeWord(answerTerm.en))).slice(0, 3);
    return shuffle([answerTerm, ...distractors]);
}

function buildMatchChoices(answerTerm, pool, themeId) {
    const distractors = shuffle(pool.filter((term) => normalizeWord(term.en) !== normalizeWord(answerTerm.en))).slice(0, 3);
    const emojiChoices = shuffle([answerTerm, ...distractors]).slice(0, 4).map((term, index) => ({
        ...term,
        laneLabel: `${index + 1}`
    }));

    return {
        emojiChoices,
        themeId
    };
}

const CONTEXT_TRAIL_TEMPLATES = {
    'basic-communication': [
        'The silence breaks at base camp, and ____ is the first word that feels natural to say.',
        'A quick reply keeps the conversation warm, so ____ fits this moment best.',
        'The social trail starts smoothly when ____ lands in the sentence at the right time.'
    ],
    'grammar-language': [
        'The structure sounds precise only when ____ settles into the sentence.',
        'This language pattern stops wobbling once ____ takes the missing place.',
        'To keep the grammar trail firm and clear, ____ is the word that belongs here.'
    ],
    'human-body-identity': [
        'The description sharpens when ____ fills the missing part of the identity clue.',
        'This body-and-self trail makes sense only after ____ completes the line.',
        'To describe the person clearly and naturally, ____ belongs in the blank.'
    ],
    'personal-social-life': [
        'The personal scene becomes clear when ____ steps into the blank at the right moment.',
        'This social route sounds more real and human with ____ in the sentence.',
        'To make this everyday relationship clue feel complete, the missing word is ____.'
    ],
    'education-work': [
        'The classroom and work trail both point to ____ as the word that completes this line.',
        'This task becomes easier to understand once ____ is placed in the sentence.',
        'To keep the study route focused and accurate, ____ fits the blank best.'
    ],
    'places-environment': [
        'The scene around the route comes into focus when ____ completes the sentence.',
        'This place clue feels grounded and specific once ____ takes the empty spot.',
        'To describe the environment with the right sense of place, choose ____.'
    ],
    'movement-navigation': [
        'The route keeps moving in the right direction only when ____ fills the gap.',
        'This navigation clue becomes clear and usable once ____ completes the line.',
        'To guide the next step without losing the trail, the missing word is ____.'
    ],
    'shopping-daily-life': [
        'The daily routine sounds complete and familiar when ____ slips into the sentence.',
        'This errand-and-home clue works naturally only after ____ fills the blank.',
        'To make this everyday trail feel real and useful, the best word is ____.'
    ],
    'clothing-style': [
        'The outfit finally makes sense when ____ takes the missing place in the line.',
        'This style clue feels complete and wearable once ____ appears in the sentence.',
        'To finish the clothing route with the right detail, choose ____.'
    ],
    'food-drinks': [
        'The table scene becomes vivid and familiar when ____ fills the blank.',
        'This meal clue tastes right only after ____ completes the sentence.',
        'To finish this food-and-drink route naturally, the best word is ____.'
    ],
    'nature-weather': [
        'The weather scene opens clearly once ____ settles into the sentence.',
        'This nature trail feels alive and precise when ____ completes the context.',
        'To describe the sky, climate, or landscape naturally, the missing word is ____.'
    ],
    'culture-leisure': [
        'The free-time plan feels more vivid when ____ takes its place in the sentence.',
        'This culture-and-leisure clue sounds right only after ____ fills the gap.',
        'To complete the fun side of the route with the right word, choose ____.'
    ],
    'tools-objects': [
        'The practical task becomes clearer once ____ completes the missing part.',
        'This object clue locks into place naturally when ____ fills the sentence.',
        'To make this tools route feel useful and concrete, the best word is ____.'
    ],
    technology: [
        'The digital scene becomes sharper and more exact when ____ fills the blank.',
        'This tech clue works properly only after ____ completes the sentence.',
        'To keep the technology route precise and modern, the missing word is ____.'
    ],
    'concepts-academic': [
        'The academic idea sounds more precise when ____ takes the missing space.',
        'This concept trail becomes clearer and more exact after ____ completes the line.',
        'To finish the study thought with the right concept, choose ____.'
    ]
};

const CONTEXT_TRAIL_CLUE_TEMPLATES = {
    'basic-communication': [
        'Think about a word you would use to open, answer, repeat, or keep a conversation moving: {hint}.',
        'The route clue points to something spoken naturally between people: {hint}.'
    ],
    'grammar-language': [
        'Focus on the word that keeps the sentence accurate and well formed: {hint}.',
        'This clue is about language structure and correctness more than speed: {hint}.'
    ],
    'human-body-identity': [
        'Picture a detail that helps describe the body, identity, or personal appearance: {hint}.',
        'The answer should fit something connected to how a person looks or is described: {hint}.'
    ],
    'personal-social-life': [
        'Follow the clue toward relationships, feelings, routines, or personal moments: {hint}.',
        'This word belongs in a scene that feels social, close, and part of everyday life: {hint}.'
    ],
    'education-work': [
        'Stay near study, class, effort, or work life while reading this clue: {hint}.',
        'The blank needs a word that would sound natural in school or on a task route: {hint}.'
    ],
    'places-environment': [
        'Look for a word that helps place the scene around you more clearly: {hint}.',
        'This clue points to location, surroundings, or the environment itself: {hint}.'
    ],
    'movement-navigation': [
        'The answer should feel like a step, direction, or movement across the route: {hint}.',
        'Think of motion, travel, or guidance while following this clue: {hint}.'
    ],
    'shopping-daily-life': [
        'Stay with errands, home actions, or ordinary routine while following the clue: {hint}.',
        'This word belongs in a moment that feels practical, daily, and familiar: {hint}.'
    ],
    'clothing-style': [
        'The clue points to something worn, styled, or chosen as part of an outfit: {hint}.',
        'Look for the word that would complete a clothing or appearance scene naturally: {hint}.'
    ],
    'food-drinks': [
        'Think about meals, taste, drinks, or something you would find at the table: {hint}.',
        'The route clue belongs to food, drink, or the act of eating: {hint}.'
    ],
    'nature-weather': [
        'Keep the sky, climate, land, or natural scene in mind here: {hint}.',
        'The blank should point to something you would notice outdoors in nature or weather: {hint}.'
    ],
    'culture-leisure': [
        'Follow the clue toward fun, hobbies, culture, or time off the serious trail: {hint}.',
        'This word should feel at home in leisure, entertainment, or creative moments: {hint}.'
    ],
    'tools-objects': [
        'Think of something practical you could hold, use, or rely on: {hint}.',
        'The clue leads to an object or tool with a clear, useful purpose: {hint}.'
    ],
    technology: [
        'Stay close to screens, systems, devices, or the digital world: {hint}.',
        'The answer belongs to a modern, connected, or technology-driven scene: {hint}.'
    ],
    'concepts-academic': [
        'This clue points to an idea, concept, or study term rather than a simple object: {hint}.',
        'Think of a word you would meet in learning, theory, or academic discussion: {hint}.'
    ]
};

function buildContextSentence(themeId, term) {
    const templates = CONTEXT_TRAIL_TEMPLATES[themeId] || CONTEXT_TRAIL_TEMPLATES['basic-communication'];
    const sentence = randomFrom(templates);
    return {
        sentence,
        solvedSentence: sentence.replace('____', term.en)
    };
}

function buildContextClue(themeId, term) {
    const templates = CONTEXT_TRAIL_CLUE_TEMPLATES[themeId] || CONTEXT_TRAIL_CLUE_TEMPLATES['basic-communication'];
    return randomFrom(templates).replace('{hint}', term.hint);
}

function buildContextQuestion(answerTerm, pool, themeId) {
    const distractors = shuffle(pool.filter((term) => normalizeWord(term.en) !== normalizeWord(answerTerm.en))).slice(0, 3);
    const options = shuffle([answerTerm, ...distractors]);
    return {
        options,
        themeId,
        contextClue: buildContextClue(themeId, answerTerm),
        ...buildContextSentence(themeId, answerTerm)
    };
}

function buildQuestions(stage) {
    const theme = getTheme();
    const pool = theme.stages.flatMap((bucket) => bucket.terms.map(convertTerm));
    return shuffle(stage.terms.map(convertTerm)).slice(0, 5).map((term) => {
        if (state.settings.gameMode === 'match') {
            return { term, ...buildMatchChoices(term, pool, theme.id) };
        }
        if (state.settings.gameMode === 'context') {
            return { term, ...buildContextQuestion(term, pool, theme.id) };
        }
        return { term, options: buildChoices(term, pool) };
    });
}

function updateSidebarSupport() {
    const theme = localizeTheme(getTheme());
    if (!theme) return;
    elements.sidebarSupportTitle.textContent = theme.title;
    elements.sidebarSupportText.textContent = theme.summary;
}

function applyStaticTranslations() {
    document.title = t('appTitle');
    document.querySelectorAll('.loading-screen__brand span, .sidebar__brand span').forEach((node) => {
        node.textContent = t('brandSubtitle');
    });
    elements.loadingMessage.textContent = t('loadingPreparing');
    elements.sidebarSearch.querySelector('input')?.setAttribute('placeholder', t('searchThemes'));
    elements.themeSearchClear?.setAttribute('aria-label', t('clearThemeSearch'));
    document.querySelector('.sidebar-section__head .sidebar-section__eyebrow')?.replaceChildren(t('routesLabel'));
    document.querySelector('.sidebar-section__head strong')?.replaceChildren(t('themeMountainMap'));
    document.querySelector('.support-card__badge')?.replaceChildren(t('everestNote'));
    document.querySelector('.topbar__eyebrow')?.replaceChildren(t('summitDashboard'));
    elements.sidebarToggle?.setAttribute('aria-label', t('toggleSidebar'));
    elements.sidebarBrand?.setAttribute('title', t('refreshEverest'));
    elements.optionsButton?.setAttribute('title', t('options'));
    elements.leaderboardButton?.setAttribute('title', t('leaderboardModalTitle'));
    elements.explorerButton?.setAttribute('title', t('englishExplorer'));
    elements.logoutButton?.setAttribute('title', t('logout'));
    document.querySelector('.hero-card .panel-badge')?.replaceChildren(t('currentAscent'));
    document.querySelector('.hero-card__status .status-pill:nth-child(1) span')?.replaceChildren(t('sessionLabel'));
    document.querySelector('.hero-card__status .status-pill:nth-child(2) span')?.replaceChildren(t('activeRouteLabel'));
    document.querySelector('.hero-card__status .status-pill:nth-child(3) span')?.replaceChildren(t('gameMode'));
    document.querySelector('.profile-card .panel-badge')?.replaceChildren(t('climberProfile'));
    document.querySelector('.profile-rankline__label')?.replaceChildren(t('ridgeRankLabel'));
    if (!getRankForUser()) elements.profileRankline.textContent = t('top20Pending');
    document.querySelector('.profile-meta .meta-chip:nth-child(1) span')?.replaceChildren(t('points'));
    document.querySelector('.profile-meta .meta-chip:nth-child(2) span')?.replaceChildren(t('wins'));
    document.querySelector('.profile-meta .meta-chip:nth-child(3) span')?.replaceChildren(t('losses'));
    document.querySelector('.profile-meta .meta-chip:nth-child(4) span')?.replaceChildren(t('time'));
    document.querySelector('.stage-card .panel-badge')?.replaceChildren(t('stageRoutes'));
    document.querySelector('.game-card .panel-badge')?.replaceChildren(t('themeChallenge'));
    document.querySelector('#stageToggle strong')?.replaceChildren(t('stageRouteBoard'));
    document.querySelector('#stageToggle .panel-toggle__copy span')?.replaceChildren(t('stageRouteBoardText'));
    const stageGuideSteps = document.querySelectorAll('.stage-card .section-guide .section-guide__step');
    if (stageGuideSteps[0]) stageGuideSteps[0].textContent = t('stageStep1');
    if (stageGuideSteps[1]) stageGuideSteps[1].textContent = t('stageStep2');
    if (stageGuideSteps[2]) stageGuideSteps[2].textContent = t('stageStep3');
    document.querySelector('.theme-overview-card .panel-badge')?.replaceChildren(t('themeDeck'));
    document.querySelector('.theme-overview-card .section-head h3')?.replaceChildren(t('chooseRouteDeck'));
    const deckGuideSteps = document.querySelectorAll('.theme-overview-card .section-guide__step');
    if (deckGuideSteps[0]) deckGuideSteps[0].textContent = t('deckGuide1');
    if (deckGuideSteps[1]) deckGuideSteps[1].textContent = t('deckGuide2');
    document.querySelector('.ridge-card .panel-badge')?.replaceChildren(t('ridgeBoard'));
    document.querySelector('.ridge-card .section-head h3')?.replaceChildren(t('liveLeaderboard'));
    document.querySelector('#openLeaderboardInlineButton')?.replaceChildren(t('openTop20'));
    document.querySelector('.explorer-card .panel-badge')?.replaceChildren(t('exploreNatively'));
    document.querySelector('.explorer-card .section-head h3')?.replaceChildren(t('englishExplorer'));
    document.querySelector('#openExplorerInlineButton')?.replaceChildren(t('openLibrary'));
    document.querySelector('#explorerToggle strong')?.replaceChildren(t('explorerPreview'));
    document.querySelector('#explorerToggle .panel-toggle__copy span')?.replaceChildren(t('explorerPreviewText'));
    document.querySelector('.options-card .panel-badge')?.replaceChildren(t('climbControls'));
    document.querySelector('.options-card .section-head h3')?.replaceChildren(t('quickOptions'));
    document.querySelector('#optionsToggle strong')?.replaceChildren(t('controlsPreview'));
    document.querySelector('#optionsToggle .panel-toggle__copy span')?.replaceChildren(t('controlsPreviewText'));
    document.querySelector('#leaderboardModal .panel-badge')?.replaceChildren(t('topRidge'));
    document.querySelector('#leaderboardModal h3')?.replaceChildren(t('leaderboardModalTitle'));
    document.querySelector('#leaderboardModal p')?.replaceChildren(t('leaderboardModalText'));
    document.querySelector('#leaderboardModal [data-close-modal="leaderboardModal"]')?.setAttribute('aria-label', t('closeLeaderboard'));
    const leaderboardHeaders = document.querySelectorAll('.leaderboard-table thead th');
    if (leaderboardHeaders[0]) leaderboardHeaders[0].textContent = t('rankHeader');
    if (leaderboardHeaders[1]) leaderboardHeaders[1].textContent = t('profileNameHeader');
    if (leaderboardHeaders[2]) leaderboardHeaders[2].textContent = t('courseHeader');
    if (leaderboardHeaders[3]) leaderboardHeaders[3].textContent = t('points');
    if (leaderboardHeaders[4]) leaderboardHeaders[4].textContent = t('wins');
    if (leaderboardHeaders[5]) leaderboardHeaders[5].textContent = t('losses');
    if (leaderboardHeaders[6]) leaderboardHeaders[6].textContent = t('time');
    document.querySelector('#explorerModal .panel-badge')?.replaceChildren(t('nativeLearning'));
    document.querySelector('#explorerModal h3')?.replaceChildren(t('explorerModalTitle'));
    document.querySelector('#explorerModal p')?.replaceChildren(t('explorerModalText'));
    document.querySelector('#explorerModal [data-close-modal="explorerModal"]')?.setAttribute('aria-label', t('closeExplorer'));
    elements.explorerSearchClear?.setAttribute('aria-label', t('clearExplorerSearch'));
    document.querySelector('#explorerThemeSearch')?.setAttribute('placeholder', t('searchThemePlaceholder'));
    document.querySelector('#explorerThemeOptions')?.setAttribute('aria-label', t('explorerThemeList'));
    document.querySelector('#optionsModal .panel-badge')?.replaceChildren(t('options'));
    document.querySelector('#optionsModal h3')?.replaceChildren(t('summitControls'));
    document.querySelector('#optionsModal p')?.replaceChildren(t('summitControlsText'));
    document.querySelector('#optionsModal [data-close-modal="optionsModal"]')?.setAttribute('aria-label', t('closeOptions'));
}

function renderSidebar() {
    const localizedThemes = state.themes.map((theme) => localizeTheme(theme));
    const filtered = localizedThemes.filter((theme) => !state.searchTerm || normalizeWord(`${theme.title} ${theme.summary}`).includes(normalizeWord(state.searchTerm)));
    elements.themeNav.innerHTML = localizedThemes.map((theme) => {
        const visible = filtered.some((item) => item.id === theme.id);
        return `<button class="theme-nav__item ${theme.id === state.activeThemeId ? 'is-active' : ''} ${visible ? '' : 'is-hidden'}" data-theme-id="${theme.id}" type="button" title="${theme.title} - ${theme.summary}"><span class="theme-nav__icon"><img src="${THEME_ICONS[theme.id]}" alt=""></span><span class="theme-nav__copy"><strong>${theme.title}</strong><span>${theme.summary}</span></span></button>`;
    }).join('');
    if (!filtered.length) elements.themeNav.innerHTML += `<div class="theme-nav__item"><span class="theme-nav__copy"><strong>${t('noThemeResults')}</strong></span></div>`;
    elements.themeNav.querySelectorAll('[data-theme-id]').forEach((button) => button.addEventListener('click', () => setActiveTheme(button.dataset.themeId)));
}

function renderThemeGrid() {
    const activeTheme = localizeTheme(getTheme());
    const deckCard = getThemeDeckCard();
    const isCollapsed = deckCard?.classList.contains('compact-collapsed');

    elements.themeGrid.innerHTML = state.themes.map((rawTheme) => {
        const theme = localizeTheme(rawTheme);
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
    const theme = localizeTheme(getTheme());
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
    const theme = localizeTheme(getTheme());
    elements.welcomeTitle.textContent = t('welcome', { name: state.user.username });
    elements.welcomeSubtitle.textContent = t('subtitle');
    elements.activeThemeName.textContent = theme ? theme.title : 'Everest';
    elements.activeModeLabel.textContent = getGameModeLabel();
    elements.heroStartButton.textContent = t('startStage');
    elements.heroExploreButton.textContent = t('openLibrary');
    elements.scrollThemeIntoViewButton.textContent = t('focusRoute');
    const nextThemeLabel = state.settings.themeMode === 'light' ? t('darkMode') : t('lightMode');
    const nextThemeSymbol = state.settings.themeMode === 'light' ? '\uD83C\uDF19' : '\u2600\uFE0F';
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
    if (theme.id === 'nature-weather') return '\u26F0\uFE0F';
    if (theme.id === 'food-drinks') return '\uD83C\uDF7D\uFE0F';
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
    state.lastResolvedAnswer = '';
}

function toggleGameModeVisibility() {
    const typingMode = state.settings.gameMode === 'typing';
    elements.typingForm.classList.toggle('is-hidden-for-mode', !typingMode);
    elements.choiceGrid.classList.toggle('is-hidden-for-mode', false);
}

function renderGame() {
    const theme = localizeTheme(getTheme());
    const stage = localizeStage(state.activeThemeId, getStage());
    if (!theme || !stage) return;
    const matchMode = state.settings.gameMode === 'match';
    const contextMode = state.settings.gameMode === 'context';
    const typingMode = state.settings.gameMode === 'typing';
    const gameText = t;
    state.progress.lastPlayedTheme = theme.id;
    elements.gameCard?.classList.toggle('is-match-mode', matchMode);
    elements.gameCard?.classList.toggle('is-context-mode', contextMode);
    elements.challengeVisual.classList.toggle('is-hidden-for-mode', matchMode);
    elements.gameThemeTitle.textContent = `${theme.title} - ${stage.name}`;
    elements.gameThemeDescription.textContent = stage.focus;
    elements.stagePointsLabel.textContent = `${gameText('stagePoints')}: ${state.stagePoints}`;
    elements.stageAccuracyLabel.textContent = `${gameText('accuracy')}: ${state.latestAccuracy}%`;
    elements.typingSubmitButton.textContent = gameText('checkAnswer');
    elements.typingInput.placeholder = gameText('typePlaceholder');
    elements.nextQuestionButton.textContent = gameText('nextChallenge');
    elements.resetStageButton.textContent = gameText('replay');

    if (!state.stageLive || !state.currentQuestion) {
        renderChallengeVisual(theme, null, false);
        elements.challengeTypeLabel.textContent = gameText('routeFocus');
        elements.challengePrompt.textContent = stage.focus;
        elements.challengeHint.textContent = gameText('noChallenge');
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
        setFeedback('idle', gameText('idleTitle'), gameText('idleText'));
        toggleGameModeVisibility();
        return;
    }

    const question = state.currentQuestion;
    const resolvedNormalized = normalizeWord(state.lastResolvedAnswer || '');
    const targetNormalized = normalizeWord(question.term.en);
    const contextAnsweredCorrect = contextMode && state.questionResolved && resolvedNormalized === targetNormalized;
    const contextAnsweredWrong = contextMode && state.questionResolved && resolvedNormalized !== targetNormalized;
    const contextSentenceHtml = contextMode
        ? question.sentence.replace(
            '____',
            contextAnsweredCorrect
                ? `<span class="context-card__solved">${question.term.en}</span>`
                : `<span class="context-card__blank ${contextAnsweredWrong ? 'is-wrong' : ''}">${gameText('contextBlank')}</span>`
        )
        : '';
    if (!matchMode) {
        renderChallengeVisual(theme, question, false);
    }
    const selectedEmojiOption = matchMode ? question.emojiChoices.find((option) => normalizeWord(option.en) === state.matchSelection.emoji) : null;
    elements.challengeTypeLabel.textContent = getGameModeLabel();
    elements.challengePrompt.textContent = matchMode
        ? gameText('matchPairPrompt', { word: question.term.en })
        : (contextMode ? gameText('contextPrompt') : (typingMode ? gameText('typeEnglish', { word: question.term.es }) : gameText('chooseEnglish', { word: question.term.es })));
    elements.challengeHint.textContent = matchMode
        ? `${gameText('hintPrefix')}: ${question.term.es} · ${question.term.hint}`
        : (contextMode ? `${gameText('contextClueLabel')}: ${question.contextClue}` : `${gameText('hintPrefix')}: ${question.term.hint}`);
    elements.challengeExample.textContent = matchMode
        ? `${gameText('matchPairHelp')} ${selectedEmojiOption ? `${gameText('matchSelectionEmoji')}: ${selectedEmojiOption.emoji} ${selectedEmojiOption.es}` : gameText('matchSelectionIdle')}`
        : (contextMode ? gameText('contextHelp') : `${gameText('examplePrefix')}: ${theme.summary}`);
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
            <div class="match-summit">
                <div class="match-summit__intro">
                    <span class="match-summit__eyebrow">${gameText('summitMatch')}</span>
                    <p class="match-summit__guide">${gameText('matchPairHelp')}</p>
                </div>
                <div class="match-board">
                    <section class="match-center match-center--left" aria-label="${question.term.en}">
                        <div class="match-center__pulse"></div>
                        <span class="match-center__badge">${gameText('summitMatch')}</span>
                        <span class="match-center__mini">${gameText('matchSelectionIdle')}</span>
                        <div class="match-center__core">
                            <span class="match-center__word-label">${gameText('challengeWord')}</span>
                            <strong class="match-center__word">${question.term.en}</strong>
                            <span class="match-center__meaning">${question.term.es}</span>
                            <span class="match-center__hint-line">${question.term.hint}</span>
                        </div>
                        <div class="match-center__status">
                            <span class="match-center__status-pill is-filled">${getThemeMatchSignalEmoji(question.themeId)} ${localizeTheme(getTheme(question.themeId))?.title || gameText('matchSignalLabel')}</span>
                            <span class="match-center__status-pill ${selectedEmojiOption ? 'is-filled' : ''}">${selectedEmojiOption ? `${selectedEmojiOption.emoji} ${selectedEmojiOption.es}` : gameText('matchMeaningPending')}</span>
                        </div>
                    </section>
                    <section class="match-lane match-lane--emoji" aria-label="${gameText('matchEmojiLabel')}">
                        <span class="match-lane__label">${gameText('matchEmojiStep')}</span>
                        <div class="match-column__list">
                            ${question.emojiChoices.map((option) => `<button class="choice-button choice-button--match ${normalizeWord(option.en) === state.matchSelection.emoji ? 'is-selected' : ''}" data-match-side="emoji" data-match-value="${option.en}" type="button" style="display:grid !important;grid-template-columns:auto minmax(0,1fr) !important;align-items:center !important;column-gap:1.04rem !important;padding:.7rem .84rem !important;"><span class="choice-button__media" style="display:grid !important;justify-items:center !important;align-content:center !important;gap:.1rem !important;"><span class="choice-button__kicker" style="display:inline-flex !important;align-items:center !important;justify-content:center !important;min-width:2rem !important;min-height:1.18rem !important;padding:0 .35rem !important;">${option.laneLabel}</span><span class="choice-button__emoji" style="font-size:1.58rem !important;line-height:1 !important;">${option.emoji}</span></span><span class="choice-button__copy" style="display:flex !important;flex-direction:column !important;justify-content:center !important;align-items:flex-start !important;min-width:0 !important;"><span class="choice-button__title" style="display:block !important;font-size:1.3rem !important;line-height:1.14 !important;font-weight:800 !important;">${option.es}</span><span class="choice-button__detail" style="display:block !important;margin-top:.08rem !important;font-size:.82rem !important;line-height:1.16 !important;font-weight:700 !important;">${option.hint}</span></span></button>`).join('')}
                        </div>
                    </section>
                </div>
            </div>
        `;
        elements.choiceGrid.querySelectorAll('[data-match-side]').forEach((button) => button.addEventListener('click', () => handleMatchChoice(button.dataset.matchSide, button.dataset.matchValue)));
    } else if (contextMode) {
        elements.choiceGrid.classList.remove('choice-grid--match');
        elements.choiceGrid.classList.add('choice-grid--context');
        elements.choiceGrid.innerHTML = `
            <div class="context-trail">
                <section class="context-card" aria-label="${gameText('summitContext')}">
                    <span class="context-card__badge">${gameText('contextBadge')}</span>
                    <div class="context-card__sentence">
                        ${contextSentenceHtml}
                    </div>
                    <div class="context-card__meta">
                        <span class="context-card__hint">${question.contextClue}</span>
                    </div>
                </section>
                <section class="context-options" aria-label="${gameText('contextChoiceStep')}">
                    <span class="context-options__label">${gameText('contextChoiceStep')}</span>
                    <div class="context-options__grid">
                        ${question.options.map((option, index) => `<button class="choice-button choice-button--context" data-choice="${option.en}" type="button"><span class="choice-button__kicker">${index + 1}</span><span class="choice-button__copy"><span class="choice-button__title">${option.en}</span><span class="choice-button__detail">${option.es}</span></span></button>`).join('')}
                    </div>
                </section>
            </div>
        `;
        elements.choiceGrid.querySelectorAll('[data-choice]').forEach((button) => button.addEventListener('click', () => submitAnswer(button.dataset.choice)));
    } else if (!typingMode) {
        elements.choiceGrid.classList.remove('choice-grid--match');
        elements.choiceGrid.classList.remove('choice-grid--context');
        elements.choiceGrid.innerHTML = question.options.map((option) => `<button class="choice-button" data-choice="${option.en}" type="button">${option.en}</button>`).join('');
        elements.choiceGrid.querySelectorAll('[data-choice]').forEach((button) => button.addEventListener('click', () => submitAnswer(button.dataset.choice)));
    } else {
        elements.choiceGrid.classList.remove('choice-grid--match');
        elements.choiceGrid.classList.remove('choice-grid--context');
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
        : state.settings.gameMode === 'context'
            ? `Choose the word that completes the sentence for ${state.currentQuestion.term.en}`
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
    state.lastResolvedAnswer = '';
    renderGame();
    if (state.currentQuestion) {
        startTimer();
        maybeSpeakPrompt();
    }
}

function handleMatchChoice(side, value) {
    if (state.questionResolved || !state.currentQuestion || state.settings.gameMode !== 'match') return;

    if (side === 'emoji') {
        state.matchSelection.emoji = normalizeWord(value);
    }

    renderGame();

    if (!state.matchSelection.emoji) return;

    const matchedEmoji = state.matchSelection.emoji === normalizeWord(state.currentQuestion.term.en);
    resolveAnswer(matchedEmoji ? state.currentQuestion.term.en : state.matchSelection.emoji, false);
}

function submitAnswer(answer) {
    if (state.questionResolved || !state.currentQuestion) return;
    resolveAnswer(answer, false);
}

function applyMatchResultState(button, resultType) {
    if (!button) return;

    const darkMode = document.body?.dataset.themeMode === 'dark';
    const kicker = button.querySelector('.choice-button__kicker');
    const title = button.querySelector('.choice-button__title');
    const detail = button.querySelector('.choice-button__detail');
    const emoji = button.querySelector('.choice-button__emoji');

    button.classList.remove('is-selected');
    button.style.setProperty('transform', 'translateY(-3px) scale(1.01)', 'important');

    if (resultType === 'correct') {
        button.classList.add('is-correct');
        button.classList.remove('is-wrong');
        button.style.setProperty('background', darkMode
            ? 'linear-gradient(180deg, rgba(23, 61, 39, 0.99), rgba(15, 46, 30, 0.99))'
            : 'linear-gradient(180deg, rgba(231, 255, 238, 0.99), rgba(205, 245, 216, 0.97))', 'important');
        button.style.setProperty('border-color', darkMode ? 'rgba(108, 216, 140, 0.4)' : 'rgba(61, 168, 92, 0.52)', 'important');
        button.style.setProperty('box-shadow', darkMode ? '0 18px 32px rgba(23, 61, 39, 0.34)' : '0 18px 32px rgba(61, 168, 92, 0.2)', 'important');
        button.style.setProperty('color', darkMode ? '#dcffe5' : '#1d5b2d', 'important');
        if (kicker) {
            kicker.style.setProperty('background', darkMode ? 'rgba(108, 216, 140, 0.16)' : 'rgba(61, 168, 92, 0.14)', 'important');
            kicker.style.setProperty('color', darkMode ? '#d5ffdf' : '#23723a', 'important');
        }
        [title, detail, emoji].forEach((node) => node?.style.setProperty('color', darkMode ? '#e7ffed' : '#1f5f31', 'important'));
        return;
    }

    if (resultType === 'wrong') {
        button.classList.add('is-wrong');
        button.classList.remove('is-correct');
        button.style.setProperty('background', darkMode
            ? 'linear-gradient(180deg, rgba(76, 29, 33, 0.99), rgba(54, 18, 21, 0.99))'
            : 'linear-gradient(180deg, rgba(255, 240, 240, 0.99), rgba(255, 220, 220, 0.97))', 'important');
        button.style.setProperty('border-color', darkMode ? 'rgba(255, 132, 132, 0.36)' : 'rgba(214, 74, 74, 0.48)', 'important');
        button.style.setProperty('box-shadow', darkMode ? '0 18px 32px rgba(76, 29, 33, 0.3)' : '0 18px 32px rgba(214, 74, 74, 0.18)', 'important');
        button.style.setProperty('color', darkMode ? '#ffe1e1' : '#7a2020', 'important');
        if (kicker) {
            kicker.style.setProperty('background', darkMode ? 'rgba(255, 132, 132, 0.14)' : 'rgba(214, 74, 74, 0.14)', 'important');
            kicker.style.setProperty('color', darkMode ? '#ffe1e1' : '#992f2f', 'important');
        }
        [title, detail, emoji].forEach((node) => node?.style.setProperty('color', darkMode ? '#ffe8e8' : '#7a2424', 'important'));
    }
}

function resolveAnswer(answer, timedOut) {
    if (state.questionResolved || !state.currentQuestion) return;
    stopTimer();
    state.questionResolved = true;
    state.lastResolvedAnswer = answer ? normalizeWord(answer) : '';
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
    elements.stagePointsLabel.textContent = `${tg('stagePoints')}: ${state.stagePoints}`;
    elements.stageAccuracyLabel.textContent = `${tg('accuracy')}: ${state.latestAccuracy}%`;
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
            const normalizedValue = normalizeWord(value);
            const targetValue = normalizeWord(state.currentQuestion.term.en);
            const selectedValue = state.matchSelection.emoji;

            if (side === 'emoji' && normalizedValue === targetValue) {
                applyMatchResultState(button, 'correct');
            } else if (side === 'emoji' && !correct && normalizedValue === selectedValue) {
                applyMatchResultState(button, 'wrong');
            }
        });
    } else if (state.settings.gameMode === 'context') {
        const sentence = elements.choiceGrid.querySelector('.context-card__sentence');
        const blankMarkup = correct
            ? `<span class="context-card__solved">${state.currentQuestion.term.en}</span>`
            : `<span class="context-card__blank is-wrong">${tg('contextBlank')}</span>`;
        if (sentence) {
            sentence.innerHTML = state.currentQuestion.sentence.replace('____', blankMarkup);
        }

        elements.choiceGrid.querySelectorAll('[data-choice]').forEach((button) => {
            button.disabled = true;
            const value = button.dataset.choice;
            if (normalizeWord(value) === normalizeWord(state.currentQuestion.term.en)) {
                button.classList.add('is-correct');
            } else if (!correct && normalizeWord(value) === normalizeWord(answer)) {
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

    const previewAwards = ['\uD83E\uDD47', '\uD83E\uDD48', '\uD83E\uDD49'];
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
    const localizedThemes = state.themes.map((theme) => localizeTheme(theme));
    const options = [
        { id: 'all', title: t('allThemes'), meta: `${state.library.length} terms`, search: `${t('allThemes')} all explorer` },
        ...localizedThemes.map((theme) => ({ id: theme.id, title: theme.title, meta: `${countForTheme(theme.id)} terms`, search: `${theme.title} ${theme.summary}` }))
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
    const selectedUserIds = getControlTargetUserIds();
    if (selectedUserIds.length) {
        selectedUserIds.forEach((userId) => applyControlStats(userId, {
            points: document.getElementById('controlPointsInput')?.value,
            wins: document.getElementById('controlWinsInput')?.value,
            losses: document.getElementById('controlLossesInput')?.value,
            sessionMinutes: document.getElementById('controlSessionMinutesInput')?.value
        }));
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
        { title: t('modeBlockTitle'), text: t('modeBlockText'), buttons: [{ value: 'multiple', label: t('summitChoice'), active: state.settings.gameMode === 'multiple', action: 'mode' }, { value: 'typing', label: t('summitTyping'), active: state.settings.gameMode === 'typing', action: 'mode' }, { value: 'match', label: t('summitMatch'), active: state.settings.gameMode === 'match', action: 'mode' }, { value: 'context', label: t('summitContext'), active: state.settings.gameMode === 'context', action: 'mode' }] },
        { title: t('language'), text: t('languageHelp'), buttons: [{ value: 'en', label: 'English', active: state.settings.language === 'en', action: 'language' }, { value: 'es', label: 'Espa\u00F1ol', active: state.settings.language === 'es', action: 'language' }] },
        { title: t('animationBlockTitle'), text: t('animationBlockText'), buttons: [{ value: 'on', label: getOptionStatusMarkup(t('animations'), true), active: state.settings.animationsOn, action: 'motion' }, { value: 'off', label: getOptionStatusMarkup(t('animations'), false), active: !state.settings.animationsOn, action: 'motion' }] },
        { title: t('themeBlockTitle'), text: t('themeBlockText'), buttons: [{ value: 'light', label: t('lightMode'), active: state.settings.themeMode === 'light', action: 'theme' }, { value: 'dark', label: t('darkMode'), active: state.settings.themeMode === 'dark', action: 'theme' }] },
        { title: t('audioBlockTitle'), text: t('audioBlockText'), buttons: [{ value: 'sound', label: getOptionStatusMarkup(t('sound'), state.settings.soundOn), active: state.settings.soundOn, action: 'sound' }, { value: 'voice', label: getOptionStatusMarkup(t('voice'), state.settings.voiceOn), active: state.settings.voiceOn, action: 'voice' }] }
    ];

    const managedUsers = syncControlManagedSelectionState();
    if (!state.controlManagedSelectionTouched && !state.controlManageAllUsers && !state.controlManagedUserIds.length && managedUsers[0]) {
        setControlManagedSelection([getUserId(managedUsers[0])], { touched: false });
    }

    const managedUser = getControlManagedReferenceUser() || state.user;
    const currentMinutes = Math.max(1, Math.ceil(Math.max(0, (managedUser.expiresAt || Date.now()) - Date.now()) / 60000));
    const draft = getControlWordDraft();
    const selectedUsers = getControlSelectedUsers();
    const managedSelectionTags = state.controlManageAllUsers
        ? `<button type="button" class="control-selection-tag control-selection-tag--all" data-control-remove-all="true">${tc('allManagedUsers')}</button>`
        : (selectedUsers.length
            ? selectedUsers.map((user) => `<button type="button" class="control-selection-tag" data-control-remove-user="${getUserId(user)}">${user.profileEmoji || '\uD83E\uDDE0'} ${user.username}</button>`).join('')
            : `<span class="control-selection-empty">${tc('selectedUsersEmpty')}</span>`);
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
        value: state.controlManageAllUsers ? '__all__' : (state.controlManagedUserIds[0] || ''),
        placeholder: tc('userSelect'),
        searchPlaceholder: tc('managedSearchPlaceholder'),
        options: [
            {
                value: '__all__',
                main: tc('allManagedUsers'),
                alt: `${managedUsers.length} ${t('activeClimber').toLowerCase()}`,
                search: `${tc('allManagedUsers')} ${managedUsers.map((user) => `${user.username} ${user.course || ''}`).join(' ')}`
            },
            ...managedUsers.map((user) => ({
                value: getUserId(user),
                main: `${user.profileEmoji || '\uD83E\uDDE0'} ${user.username}`,
                alt: user.course || t('routePending'),
                search: `${user.username} ${user.course || t('routePending')}`
            }))
        ]
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
            alt: localizeTheme(getTheme(entry.theme))?.title || entry.theme,
            search: `${entry.term} ${entry.meaning} ${entry.example} ${entry.tip} ${localizeTheme(getTheme(entry.theme))?.title || entry.theme}`
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
        options: state.themes.map((theme) => localizeTheme(theme)).map((theme) => ({
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
        : `<article class="option-block option-block--control"><div class="control-heading"><div><h4>${tc('title')}</h4><p>${tc('subtitle')}</p></div><div class="control-heading__actions"><span class="control-badge">${tc('unlockedBadge')}</span><button class="surface-button surface-button--ghost control-lock-button control-button--danger" id="controlDeactivateButton" type="button">${tc('deactivateButton')}</button></div></div><div class="control-section"><button class="panel-toggle panel-toggle--soft is-open" id="controlUserToggle" type="button" aria-expanded="true"><span class="panel-toggle__copy"><strong>${tc('managedUser')}</strong><span>${tc('managedUserText')}</span></span><span class="panel-toggle__icon" aria-hidden="true"></span></button><div class="panel-collapsible" id="controlUserBody"><div class="control-grid"><label class="custom-field custom-field--full"><span>${tc('managedUser')}</span>${managedUserSelect}<div class="control-selection-summary"><span class="control-selection-summary__label">${tc('selectedUsersLabel')}</span><div class="control-selection-tags" id="controlManagedUserTags">${managedSelectionTags}</div></div></label>${buildControlStepperField('controlPointsInput', t('points'), 0, Number(managedUser.points || 0))}${buildControlStepperField('controlWinsInput', t('wins'), 0, Number(managedUser.wins || 0))}${buildControlStepperField('controlLossesInput', t('losses'), 0, Number(managedUser.losses || 0))}${buildControlStepperField('controlSessionMinutesInput', tc('sessionMinutes'), 1, currentMinutes)}</div><div class="control-actions"><button class="surface-button surface-button--ghost control-button--danger" id="controlRemoveRankingButton" type="button">${tc('removeRanking')}</button><button class="surface-button surface-button--ghost control-button--danger" id="controlCloseSessionButton" type="button">${tc('closeSession')}</button><button class="surface-button surface-button--primary" id="controlApplyStatsButton" type="button">${tc('applyStats')}</button></div></div></div><div class="control-section"><button class="panel-toggle panel-toggle--soft ${state.controlWordPanelOpen ? 'is-open' : ''}" id="controlWordToggle" type="button" aria-expanded="${state.controlWordPanelOpen ? 'true' : 'false'}"><span class="panel-toggle__copy"><strong>${tc('explorerTools')}</strong><span>${tc('explorerToolsText')}</span></span><span class="panel-toggle__icon" aria-hidden="true"></span></button><div class="panel-collapsible ${state.controlWordPanelOpen ? '' : 'panel-collapsible--collapsed'}" id="controlWordBody"><div class="control-grid"><label class="custom-field custom-field--full"><span>${tc('wordPicker')}</span>${wordPickerSelect}</label><div class="control-helper custom-field--full">${tc('wordPickerText')}</div><label class="custom-field custom-field--full"><span>${tc('wordTheme')}</span>${wordThemeSelect}</label><label class="custom-field custom-field--full"><span>${tc('wordEmoji')}</span><input id="controlWordEmojiInput" type="hidden" value="${draft.emoji}"><details class="control-emoji-master ${state.controlEmojiPanelOpen ? 'is-open' : ''}" id="controlEmojiMaster" ${state.controlEmojiPanelOpen ? 'open' : ''}><summary class="control-emoji-master__summary"><span class="control-emoji-master__copy"><strong>${tc('wordEmoji')}</strong><span>${tc('emojiGridHint')}</span></span><strong class="control-emoji-master__preview" id="controlWordEmojiPreview">${draft.emoji}</strong><span class="control-emoji-master__arrow" aria-hidden="true"></span></summary><div class="control-emoji-picker"><div class="control-emoji-groups">${emojiGrid}</div></div></details></label><label class="custom-field"><span>${tc('wordTerm')}</span><input id="controlWordTermInput" type="text" maxlength="80" placeholder="${t('wordTermPlaceholder')}" value="${draft.term || ''}"></label><label class="custom-field"><span>${tc('wordType')}</span><input id="controlWordTypeInput" type="text" maxlength="40" placeholder="${t('wordTypePlaceholder')}" value="${draft.type || ''}"></label><label class="custom-field custom-field--full"><span>${tc('wordMeaning')}</span><input id="controlWordMeaningInput" type="text" maxlength="140" placeholder="${t('wordMeaningPlaceholder')}" value="${draft.meaning || ''}"></label><label class="custom-field custom-field--full"><span>${tc('wordExample')}</span><input id="controlWordExampleInput" type="text" maxlength="180" placeholder="${t('wordExamplePlaceholder')}" value="${draft.example || ''}"></label><label class="custom-field custom-field--full"><span>${tc('wordTip')}</span><input id="controlWordTipInput" type="text" maxlength="120" placeholder="${t('wordTipPlaceholder')}" value="${draft.tip || ''}"></label></div><div class="control-actions"><button class="surface-button surface-button--ghost" id="controlClearWordButton" type="button">${tc('clearWord')}</button><button class="surface-button surface-button--ghost control-button--danger" id="controlDeleteWordButton" type="button"${deleteButtonDisabled}>${tc('deleteWord')}</button><button class="surface-button surface-button--primary" id="controlSaveWordButton" type="button">${saveButtonLabel}</button></div></div></div></article>`;

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

    setupManagedUserMultiSelect();
    refreshManagedUserPanel();

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
        const targetIds = getControlTargetUserIds();
        if (!targetIds.length) {
            pushToast(randomFrom(EVEREST_LINES.error), tc('noManagedUser'), 'danger');
            return;
        }
        targetIds.forEach((userId) => removeUserFromRanking(userId));
        pushToast(randomFrom(EVEREST_LINES.info), targetIds.length > 1 ? tc('usersRemoved') : tc('userRemoved'), 'info');
        renderAll();
    });

    closeSessionButton?.addEventListener('click', async () => {
        const targetIds = getControlTargetUserIds();
        if (!targetIds.length) {
            pushToast(randomFrom(EVEREST_LINES.error), tc('noManagedUser'), 'danger');
            return;
        }
        const selfId = getUserId(state.user);
        const sortedIds = targetIds.slice().sort((a, b) => (a === selfId ? 1 : 0) - (b === selfId ? 1 : 0));
        let closedSelf = false;
        for (const userId of sortedIds) {
            closedSelf = (await closeManagedSession(userId)) || closedSelf;
        }
        if (closedSelf) return;
        pushToast(randomFrom(EVEREST_LINES.info), targetIds.length > 1 ? tc('sessionsClosed') : tc('sessionClosed'), 'info');
        bootstrapUser();
        renderAll();
    });

    applyStatsButton?.addEventListener('click', () => {
        const targetIds = getControlTargetUserIds();
        if (!targetIds.length) {
            pushToast(randomFrom(EVEREST_LINES.error), tc('noManagedUser'), 'danger');
            return;
        }
        targetIds.forEach((userId) => applyControlStats(userId, {
            points: document.getElementById('controlPointsInput')?.value,
            wins: document.getElementById('controlWinsInput')?.value,
            losses: document.getElementById('controlLossesInput')?.value,
            sessionMinutes: document.getElementById('controlSessionMinutesInput')?.value
        }));
        pushToast(randomFrom(EVEREST_LINES.success), targetIds.length > 1 ? tc('statsAppliedMany') : tc('statsApplied'), 'success');
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
    applyStaticTranslations();
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

function setupManagedUserMultiSelect() {
    const shell = document.getElementById('controlManagedUserShell');
    const hiddenInput = document.getElementById('controlManagedUserSelect');
    const trigger = document.getElementById('controlManagedUserTrigger');
    const dropdown = document.getElementById('controlManagedUserDropdown');
    const searchInput = document.getElementById('controlManagedUserSearch');
    const optionsRoot = document.getElementById('controlManagedUserOptions');
    const tagsRoot = document.getElementById('controlManagedUserTags');

    if (!shell || !hiddenInput || !trigger || !dropdown || !optionsRoot || !tagsRoot) return;

    trigger.addEventListener('click', () => {
        const willOpen = dropdown.hidden;
        setControlSelectDropdownState(shell, trigger, dropdown, willOpen, searchInput);
    });

    searchInput?.addEventListener('input', () => {
        filterControlSelectOptions(optionsRoot, searchInput.value);
    });

    optionsRoot.addEventListener('click', (event) => {
        const button = event.target.closest('[data-value]');
        if (!button) return;
        const value = button.dataset.value || '';
        persistControlModeChanges();
        if (value === '__all__') {
            setControlManagedSelection([], { selectAll: !state.controlManageAllUsers, touched: true });
        } else if (state.controlManageAllUsers) {
            setControlManagedSelection([value], { selectAll: false, touched: true });
        } else {
            toggleControlManagedUser(value);
        }
        refreshManagedUserPanel();
    });

    tagsRoot.addEventListener('click', (event) => {
        const removeAllButton = event.target.closest('[data-control-remove-all]');
        if (removeAllButton) {
            event.preventDefault();
            setControlManagedSelection([], { selectAll: false, touched: true });
            refreshManagedUserPanel();
            return;
        }
        const removeUserButton = event.target.closest('[data-control-remove-user]');
        if (!removeUserButton) return;
        event.preventDefault();
        toggleControlManagedUser(removeUserButton.dataset.controlRemoveUser || '');
        refreshManagedUserPanel();
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

function refreshManagedUserPanel() {
    if (elements.optionsModal.hidden || !state.controlModeUnlocked) return;

    const managedUsers = syncControlManagedSelectionState();
    const hiddenInput = document.getElementById('controlManagedUserSelect');
    const triggerLabel = document.getElementById('controlManagedUserTriggerLabel');
    const optionsRoot = document.getElementById('controlManagedUserOptions');
    const tagsRoot = document.getElementById('controlManagedUserTags');
    const pointsInput = document.getElementById('controlPointsInput');
    const winsInput = document.getElementById('controlWinsInput');
    const lossesInput = document.getElementById('controlLossesInput');
    const sessionMinutesInput = document.getElementById('controlSessionMinutesInput');

    if (!hiddenInput || !triggerLabel || !optionsRoot || !tagsRoot || !pointsInput || !winsInput || !lossesInput || !sessionMinutesInput) {
        return;
    }

    const selectedUsers = getControlSelectedUsers();
    const selectedIds = new Set(state.controlManagedUserIds || []);
    const referenceUser = getControlManagedReferenceUser();
    hiddenInput.value = state.controlManageAllUsers ? '__all__' : state.controlManagedUserIds.join(',');
    triggerLabel.textContent = getControlManagedSelectionLabel();

    const searchInput = document.getElementById('controlManagedUserSearch');
    const normalizedQuery = (searchInput?.value || '').trim().toLowerCase();
    const options = [
        {
            value: '__all__',
            main: tc('allManagedUsers'),
            alt: `${managedUsers.length} ${t('activeClimber').toLowerCase()}`,
            search: `${tc('allManagedUsers')} ${managedUsers.map((user) => `${user.username} ${user.course || ''}`).join(' ')}`
        },
        ...managedUsers.map((user) => ({
            value: getUserId(user),
            main: `${user.profileEmoji || '\uD83E\uDDE0'} ${user.username}`,
            alt: user.course || t('routePending'),
            search: `${user.username} ${user.course || t('routePending')}`
        }))
    ];
    optionsRoot.innerHTML = options.map((option) => {
        const hidden = normalizedQuery && !option.search.toLowerCase().includes(normalizedQuery);
        const active = option.value === '__all__' ? state.controlManageAllUsers : selectedIds.has(option.value);
        return `<button type="button" class="course-option control-select-option ${active ? 'active' : ''} ${hidden ? 'hidden' : ''}" data-value="${option.value}" data-search="${option.search.toLowerCase()}"><span class="course-option-main">${option.main}</span><span class="course-option-alt">${option.alt}</span></button>`;
    }).join('');

    tagsRoot.innerHTML = state.controlManageAllUsers
        ? `<button type="button" class="control-selection-tag control-selection-tag--all" data-control-remove-all="true">${tc('allManagedUsers')}</button>`
        : (selectedUsers.length
            ? selectedUsers.map((user) => `<button type="button" class="control-selection-tag" data-control-remove-user="${getUserId(user)}">${user.profileEmoji || '\uD83E\uDDE0'} ${user.username}</button>`).join('')
            : `<span class="control-selection-empty">${tc('selectedUsersEmpty')}</span>`);

    if (referenceUser) {
        pointsInput.value = Number(referenceUser.points || 0);
        winsInput.value = Number(referenceUser.wins || 0);
        lossesInput.value = Number(referenceUser.losses || 0);
        sessionMinutesInput.value = Math.max(1, Math.ceil(Math.max(0, (referenceUser.expiresAt || Date.now()) - Date.now()) / 60000));
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


















