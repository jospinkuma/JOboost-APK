/**
 * JOboost App - Script principal
 * Initialise l'app et charge le contenu depuis le serveur
 */

// Configuration
const CONFIG = {
    // ⚠️ MODIFIER AVEC TON IP LOCALE
    SERVER_URL: 'http://192.168.149.247/JOboost_1.1.2',
    TIMEOUT: 10000,
    DEBUG: true
};

// ================================
// INITIALISATION CORDOVA
// ================================
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    if (CONFIG.DEBUG) {
        console.log('✅ Cordova Ready!');
        console.log('Device:', device.platform, device.version);
    }
    
    loadApp();
}

// ================================
// CHARGER L'APP
// ================================
function loadApp() {
    const appContainer = document.getElementById('app');
    
    // Vérifier la connexion internet
    if (!navigator.onLine) {
        showOfflineMode(appContainer);
        return;
    }
    
    // Charger depuis le serveur
    const url = `${CONFIG.SERVER_URL}/index.php`;
    
    if (CONFIG.DEBUG) {
        console.log('📡 Chargement depuis:', url);
    }
    
    fetch(url, {
        timeout: CONFIG.TIMEOUT
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return response.text();
    })
    .then(html => {
        // Injecter le HTML
        appContainer.innerHTML = html;
        
        // Charger les scripts (optionnel)
        loadScripts();
        
        if (CONFIG.DEBUG) {
            console.log('✅ App chargée avec succès');
        }
    })
    .catch(error => {
        showError(appContainer, error);
        if (CONFIG.DEBUG) {
            console.error('❌ Erreur:', error);
        }
    });
}

// ================================
// CHARGER LES SCRIPTS DYNAMIQUEMENT
// ================================
function loadScripts() {
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
        if (script.src && !script.src.includes('cordova.js') && !script.src.includes('app.js')) {
            const newScript = document.createElement('script');
            newScript.src = script.src;
            newScript.async = false;
            document.body.appendChild(newScript);
        }
    });
}

// ================================
// MODE HORS LIGNE
// ================================
function showOfflineMode(container) {
    container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #666;">
            <i class="fas fa-wifi-slash" style="font-size: 48px; color: #ff6b6b; margin-bottom: 20px;"></i>
            <h2>Mode Hors Ligne</h2>
            <p>Pas de connexion internet détectée</p>
            <p style="font-size: 12px; margin-top: 20px; color: #999;">
                Vérifier votre connexion WiFi ou données mobiles
            </p>
            <button onclick="location.reload()" style="
                margin-top: 20px;
                padding: 10px 20px;
                background: #667eea;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
            ">
                <i class="fas fa-redo"></i> Réessayer
            </button>
        </div>
    `;
}

// ================================
// AFFICHER LES ERREURS
// ================================
function showError(container, error) {
    container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #666;">
            <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: #ff6b6b; margin-bottom: 20px;"></i>
            <h2>Erreur de Chargement</h2>
            <p>${error.message}</p>
            <p style="font-size: 12px; margin-top: 20px; color: #999;">
                Vérifier que:<br>
                1. Le serveur est accessible<br>
                2. L'URL est correcte<br>
                3. Vous êtes connecté à Internet
            </p>
            <button onclick="location.reload()" style="
                margin-top: 20px;
                padding: 10px 20px;
                background: #667eea;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
            ">
                <i class="fas fa-redo"></i> Réessayer
            </button>
        </div>
    `;
}

// ================================
// GESTION DE LA CONNEXION
// ================================
document.addEventListener('online', function() {
    if (CONFIG.DEBUG) console.log('📡 Connexion rétablie');
    loadApp();
});

document.addEventListener('offline', function() {
    if (CONFIG.DEBUG) console.log('📡 Connexion perdue');
});

// ================================
// BACK BUTTON (Android)
// ================================
document.addEventListener('backbutton', function() {
    if (confirm('Quitter l\'app?')) {
        navigator.app.exitApp();
    }
}, false);

// ================================
// PAUSE/RESUME
// ================================
document.addEventListener('pause', function() {
    if (CONFIG.DEBUG) console.log('⏸️ App pausée');
}, false);

document.addEventListener('resume', function() {
    if (CONFIG.DEBUG) console.log('▶️ App reprise');
}, false);

if (CONFIG.DEBUG) {
    console.log('✅ Script app.js chargé');
}
