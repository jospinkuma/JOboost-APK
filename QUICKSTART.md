# 📋 SETUP RAPIDE - JOboost APK en VS Code

## ✅ CHECKLIST (5 min)

- [ ] Ouvrir ce dossier dans VS Code
- [ ] Ouvrir terminal VS Code (Ctrl + `)
- [ ] Installer Cordova: `npm install -g cordova`
- [ ] Modifier IP dans `www/js/app.js`
- [ ] Compiler: `cordova build android`
- [ ] Tester: `cordova run android --device`

---

## 🚀 COMMANDES PRINCIPALES

```powershell
# COMPILATION
cordova build android              # Debug
cordova build android --release    # Production

# TESTER
cordova run android --device       # Lancer sur téléphone

# MAINTENANCE
cordova clean android              # Nettoyer
cordova requirements               # Vérifier setup
cordova prepare android            # Préparer
```

---

## 🔧 CONFIGURATION ESSENTIELLE

### Fichier: `www/js/app.js` - Ligne 6

```javascript
SERVER_URL: 'http://192.168.x.x/JOboost_1.1.2',
```

**Remplacer par TON IP:**
```powershell
ipconfig
# Chercher: Adresse IPv4
# Exemple: 192.168.1.100
```

---

## 📱 TESTER

### Téléphone réel:
```powershell
cordova run android --device
```

### Émulateur:
```powershell
# Lancer depuis Android Studio
# Puis:
cordova run android
```

---

## 📁 FICHIERS IMPORTANTS

| Fichier | À modifier? | Objet |
|---------|-------------|-------|
| `www/index.html` | ✏️ Oui | HTML principal |
| `www/js/app.js` | ✏️ Oui (IP!) | Logique app |
| `www/css/style.css` | ✏️ Oui | Styles |
| `config.xml` | ✅ Peut-être | Configuration |
| `package.json` | ❌ Non | Métadonnées |

---

## 🎯 WORKFLOW QUOTIDIEN

```
1. Modifier fichiers www/
   ↓
2. cordova build android
   ↓
3. cordova run android --device
   ↓
4. Tester sur téléphone
   ↓
5. Si OK → Partager app-debug.apk
```

---

## 🐛 ERREURS COURANTES

| Erreur | Solution |
|--------|----------|
| "cordova not found" | `npm install -g cordova` |
| "Build failed" | `cordova clean android` → retry |
| "No device found" | Brancher téléphone en USB + mode dev |
| "Cannot connect to server" | Vérifier IP dans `app.js` |

---

## 📤 PARTAGER L'APK

**Emplacement:** `platforms/android/app/build/outputs/apk/debug/app-debug.apk`

Options:
1. Upload sur Google Drive → partage public
2. Upload sur serveur XAMPP → lien direct
3. Upload sur Dropbox → lien public
4. Envoyer direct sur WhatsApp (si <100MB)

---

## 💡 PRO TIPS

✅ Garder le terminal VS Code ouvert
✅ Recompiler à chaque changement
✅ Tester souvent sur le téléphone
✅ Utiliser `cordova run` (plus rapide)

---

## 📞 DOCUMENTATION

Dossier: `c:\xampp\htdocs`

- `GUIDE_APK_RAPIDE.md` - Pour débuter
- `GUIDE_APK_CORDOVA.md` - Explication complète
- `APK_INDEX.md` - Navigation des guides

---

**DÉMARRER MAINTENANT:**

```
Terminal → npm install -g cordova
Terminal → cordova build android
Terminal → cordova run android --device
```

**LET'S GO! 🚀**
