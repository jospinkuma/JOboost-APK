# 📱 JOboost APK - Projet Cordova complet

## 🎯 À FAIRE D'ABORD

### 1. Ouvrir ce dossier dans VS Code

```
File → Open Folder → c:\xampp\htdocs\JOboost_APK
```

### 2. Ouvrir le terminal VS Code

```
Ctrl + ` (backtick)
```

### 3. Installer Cordova (une fois)

```powershell
npm install -g cordova
cordova --version
```

### 4. Configurer l'IP du serveur

**Modifier:** `www/js/app.js`

Ligne 6:
```javascript
SERVER_URL: 'http://192.168.x.x/JOboost_1.1.2',
```

Remplacer `192.168.x.x` par ton IP locale:
```powershell
# Terminal Windows
ipconfig
# Trouver "Adresse IPv4"
```

---

## 📁 Structure du projet

```
JOboost_APK/
├── www/                    ← TON CODE WEB
│   ├── index.html         ← Créé ✅
│   ├── js/
│   │   └── app.js         ← Créé ✅
│   ├── css/
│   │   └── style.css      ← Créé ✅
│   └── cordova.js         ← Généré par Cordova
│
├── res/                    ← ICÔNES & SPLASH
│   ├── icon/android/
│   └── screen/android/
│
├── config.xml             ← Créé ✅
├── package.json           ← Créé ✅
├── platforms/             ← Généré par Cordova
└── plugins/               ← Générés automatiquement
```

---

## 🚀 ÉTAPES RAPIDES

### ÉTAPE 1: Initialiser Cordova (UNE SEULE FOIS)

```powershell
# Toujours dans VS Code terminal
# Depuis le dossier JOboost_APK

# Préparer Cordova
cordova prepare android

# Vérifier
cordova requirements
```

**Résultat attendu:** Tous les checkmarks ✓

### ÉTAPE 2: Modifier l'IP du serveur

1. Ouvrir `www/js/app.js`
2. Ligne 6: Remplacer `192.168.x.x` par TON IP
3. Sauvegarder: `Ctrl + S`

### ÉTAPE 3: Compiler l'APK

```powershell
# Compiler
cordova build android

# ✅ Résultat:
# JOboost_APK/platforms/android/app/build/outputs/apk/debug/app-debug.apk
```

**Durée:** ~5-10 minutes (première fois)

### ÉTAPE 4: Tester sur téléphone

```powershell
# Connecter le téléphone en USB
# Activer mode développeur + USB Debugging

# Installer et tester
cordova run android --device
```

**Durée:** ~2 minutes

### ÉTAPE 5: Partager

```
L'APK est dans:
platforms/android/app/build/outputs/apk/debug/app-debug.apk

→ Copier sur serveur/Drive/WhatsApp
```

---

## 💡 COMMANDES UTILES

```powershell
# Compiler DEBUG
cordova build android

# Compiler RELEASE
cordova build android --release

# Lancer sur téléphone
cordova run android --device

# Voir les logs du téléphone
adb logcat

# Lister les appareils connectés
adb devices

# Nettoyer le projet
cordova clean android
cordova clean

# Vérifier les requirements
cordova requirements

# Ajouter un plugin (exemple: géolocalisation)
cordova plugin add cordova-plugin-geolocation
```

---

## 🔍 FICHIERS À PERSONNALISER

### 1. `www/index.html`
- Ajouter ton logo
- Ajouter des styles personnalisés
- Ajouter ton contenu HTML

### 2. `www/js/app.js`
- **Ligne 6:** Changer l'IP du serveur
- Ajouter de la logique personnalisée
- Ajouter des événements

### 3. `config.xml`
- Changer l'ID de l'app: `id="com.example.app"`
- Changer le nom: `<name>MonApp</name>`
- Ajouter tes permissions si besoin

### 4. Ajouter des icônes

**Tailles requises:**
```
ldpi    36x36
mdpi    48x48
hdpi    72x72
xhdpi   96x96
xxhdpi  144x144
xxxhdpi 192x192
```

Placer dans: `res/icon/android/`

---

## 🐛 TROUBLESHOOTING

### "cordova command not found"
```powershell
npm install -g cordova
```

### "Android SDK not found"
```
File → Preferences → Android
```

### "Build failed"
```powershell
cordova clean android
cordova build android
```

### "Cannot connect to device"
```powershell
# Vérifier la connexion
adb devices

# Forcer une reconnexion
adb kill-server
adb start-server
```

### "APK ne se lance pas"
Vérifier:
1. Le serveur XAMPP est actif
2. L'IP est correcte dans `www/js/app.js`
3. Le téléphone est connecté à la même WiFi

---

## ⚡ TIPS PRO

✅ Modifier directement dans VS Code → Recompiler
✅ Utiliser `cordova run` au lieu de `cordova build` pour tester
✅ Ouvrir DevTools Chrome (edge://) sur le téléphone pour déboguer
✅ Minifier CSS/JS pour réduire la taille

---

## 📤 PARTAGER L'APK

### Via WhatsApp:
1. APK dans: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`
2. Copier sur serveur XAMPP
3. Partager le lien
4. Utilisateur clique → Download → Install

### Via Google Drive:
1. Uploader `app-debug.apk`
2. Partage public
3. Copier le lien
4. Envoyer sur WhatsApp

---

## 🎯 PROCHAINES ÉTAPES

- [ ] Configurer l'IP du serveur
- [ ] Compiler l'APK
- [ ] Tester sur téléphone
- [ ] Ajouter icônes personnalisées
- [ ] Publier sur Google Play (optionnel)

---

## 📞 BESOIN D'AIDE?

Consulter les guides dans `c:\xampp\htdocs`:
- `GUIDE_APK_RAPIDE.md` - Étapes rapides
- `GUIDE_APK_CORDOVA.md` - Explication complète
- `APK_INDEX.md` - Navigation des guides

---

**Prêt? Commençons!** 🚀

1. Ouvrir VS Code terminal
2. `npm install -g cordova`
3. Modifier `www/js/app.js` (IP du serveur)
4. `cordova build android`
5. `cordova run android --device`

**Let's Go!** 💪
