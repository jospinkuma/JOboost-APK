# 🚀 JOboost APK - GitHub Actions Build

[![Build JOboost APK](https://github.com/TON_USERNAME/JOboost-APK/workflows/Build%20JOboost%20APK/badge.svg)](https://github.com/TON_USERNAME/JOboost-APK/actions)

> **APK Android pour JOboost** - Compilé automatiquement avec GitHub Actions

## 📱 À propos

JOboost est une plateforme d'affiliation et monétisation transformée en **application native Android** avec:

- ✅ Interface responsive chargée depuis le serveur PHP
- ✅ Support hors-ligne avec gestion des erreurs
- ✅ Compilation automatique via GitHub Actions
- ✅ Partage facile via WhatsApp, email, Google Drive

## 🎯 Démarrage rapide

### 1️⃣ Télécharger l'APK

Deux options:

**Option A: Depuis GitHub Releases**
```
https://github.com/TON_USERNAME/JOboost-APK/releases
```

**Option B: Depuis les Artifacts**
- Go: Actions → Workflow récent → Artifacts
- Télécharger `JOboost-APK.zip`
- Extraire les fichiers `.apk`

### 2️⃣ Installer sur Android

```powershell
# Avec adb (si installé)
adb install -r app-debug.apk
adb shell am start -n com.joboost.app/.MainActivity

# Ou: Manuel
# 1. Envoyer app-debug.apk vers le téléphone
# 2. Ouvrir avec "Gestionnaire de fichiers"
# 3. Taper sur "Installer"
# 4. Lancer JOboost
```

### 3️⃣ Utiliser l'app

L'app charge automatiquement le dashboard JOboost depuis:
```
http://192.168.149.247/JOboost_1.1.2
```

> ⚠️ **Important**: Le téléphone doit être connecté au **même WiFi** que le serveur!

---

## 🔧 Configuration

### Changer l'adresse serveur

Éditer: `www/js/app.js` ligne 6

```javascript
const CONFIG = {
    SERVER_URL: 'http://VOTRE_IP/JOboost_1.1.2',
    TIMEOUT: 10000,
    DEBUG: true
};
```

Remplacer `VOTRE_IP` par votre IP locale (ex: `192.168.1.100`)

### Obtenir votre IP locale

```powershell
ipconfig | findstr "Adresse IPv4"
```

---

## 📦 Fichiers Inclus

```
JOboost_APK/
├── www/                              # Code web (HTML/JS/CSS)
│   ├── index.html                   # Point d'entrée
│   ├── js/app.js                    # Logique Cordova
│   └── css/style.css                # Styles
├── res/                              # Ressources (icons, splash)
├── config.xml                        # Configuration Cordova
├── package.json                      # NPM scripts
├── .github/workflows/                # CI/CD GitHub Actions
│   └── build-apk.yml               # Workflow de build
└── README.md                         # Ce fichier
```

---

## 🔄 Workflow CI/CD

Chaque fois que tu `push` sur GitHub:

```
Push → GitHub Actions → Build Android → APK compilé → Artifacts
```

### Déclencher manuellement

1. Go: GitHub → Actions
2. Cliquer "Build JOboost APK"
3. Cliquer "Run workflow"

---

## 🛠️ Développement local

### Prérequis

- Node.js 14+
- Java JDK 11+
- Android SDK
- Cordova CLI

### Installation

```powershell
# Installer Cordova globalement
npm install -g cordova

# Dans le dossier du projet
npm install

# Ajouter plateforme Android
cordova platform add android

# Compiler
npm run build

# Tester
npm run run
```

### Scripts disponibles

```powershell
npm run build              # Debug APK
npm run build:release      # Release APK (signé)
npm run run               # Installer et lancer sur device
npm run clean             # Nettoyer les builds
npm run requirements      # Vérifier prérequis
```

---

## 📱 Tester l'APK

### Sur téléphone réel

```powershell
# Brancher en USB + activer Developer Mode + USB Debugging
cordova run android --device
```

### Sur émulateur Android

```powershell
# Lancer Android Emulator depuis Android Studio
cordova run android
```

---

## 🐛 Dépannage

| Problème | Solution |
|----------|----------|
| L'app ne charge pas | Vérifier l'IP dans app.js + WiFi sur même réseau |
| Erreur "connexion refusée" | Vérifier que XAMPP est en cours d'exécution |
| Erreur de compilation | Voir les logs GitHub Actions |
| Mode hors ligne | L'app affiche un message + bouton Réessayer |

---

## 🎁 Partager l'APK

### Via WhatsApp

```
1. Télécharger app-debug.apk
2. Envoyer comme fichier
3. Destinataire l'installe directement
```

### Via Google Drive

```
1. Upload app-debug.apk sur Drive
2. Cliquer droit → Changer les permissions → Partage public
3. Partager le lien
```

### Via GitHub Releases

```
1. Créer une Release sur GitHub
2. Uploader les APK
3. Partager le lien de Release
```

---

## 🔐 Version Release (Signé)

Pour Google Play Store ou distribution professionnelle:

```powershell
# L'APK signé se trouve à:
platforms/android/app/build/outputs/apk/release/app-release.apk

# Tester localement:
adb install -r app-release.apk
```

---

## 📚 Documentation

- [`GITHUB_ACTIONS_GUIDE.md`](./GITHUB_ACTIONS_GUIDE.md) - Guide complet GitHub Actions
- [`APK_BUILD_GUIDE.md`](./APK_BUILD_GUIDE.md) - Options de compilation
- [`QUICKSTART.md`](./QUICKSTART.md) - Démarrage rapide
- [Docs Cordova](https://cordova.apache.org/)
- [Android Developer](https://developer.android.com/)

---

## 🤝 Contribution

Des améliorations à proposer?

1. Fork le repo
2. Créer une branche (`git checkout -b feature/xyz`)
3. Commit (`git commit -m "Add xyz"`)
4. Push (`git push origin feature/xyz`)
5. Ouvrir une Pull Request

---

## 📄 Licence

MIT License - Libre d'utilisation

---

## ✨ Crédits

Créé avec ❤️ pour JOboost

---

## 🚀 PROCHAINES ÉTAPES

- [ ] Créer un compte GitHub
- [ ] Créer un repository public
- [ ] Pousser ce code
- [ ] Vérifier que le workflow s'exécute
- [ ] Télécharger l'APK
- [ ] Tester sur téléphone
- [ ] Partager sur WhatsApp! 🎉

---

**Questions?** Ouvre une [Issue](https://github.com/TON_USERNAME/JOboost-APK/issues) ou contacte-moi!

