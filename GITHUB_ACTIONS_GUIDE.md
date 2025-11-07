# 🚀 Compiler l'APK avec GitHub Actions

## 📋 ÉTAPES (5 min)

### 1. Créer un compte GitHub
- Go: https://github.com/signup
- Créer un compte gratuit

### 2. Créer un repository

**Option A: Depuis GitHub Web UI**
- Cliquer "New repository"
- Nom: `JOboost-APK` (ou autre)
- Description: "APK Build pour JOboost"
- ✅ Public (gratuit)
- Cliquer "Create repository"

**Option B: Depuis la ligne de commande**
```powershell
cd c:\xampp\htdocs\JOboost_APK

git config --global user.email "ton.email@example.com"
git config --global user.name "Ton Nom"

git add .
git commit -m "Initial commit: JOboost APK project"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/JOboost-APK.git
git push -u origin main
```

**Remplacer:**
- `ton.email@example.com` → ton vrai email
- `Ton Nom` → ton nom
- `TON_USERNAME` → ton username GitHub

### 3. Vérifier que le workflow s'exécute

- Go: https://github.com/TON_USERNAME/JOboost-APK
- Cliquer "Actions"
- Tu devrais voir "Build JOboost APK" en cours

### 4. Attendre la compilation

**Temps estimé: 10-15 minutes**

La première compilation est plus lente (téléchargement des outils Android).

### 5. Télécharger l'APK

Une fois compilée:
- Go: "Actions"
- Cliquer le workflow "Build JOboost APK" (✅ vert)
- Section "Artifacts"
- Télécharger `JOboost-APK`
- Extraire le ZIP
- Tu auras:
  - `app-debug.apk` (pour tester)
  - `app-release.apk` (pour production)

---

## 🔄 WORKFLOW FUTUR

À chaque fois que tu `push` du code vers GitHub:

```powershell
git add .
git commit -m "Update APK"
git push
```

→ GitHub Actions compilera automatiquement l'APK en 10-15 min
→ L'APK sera disponible dans "Artifacts"

---

## 📱 INSTALLER L'APK SUR TON TÉLÉPHONE

### Via fichier APK:

1. Télécharger `app-debug.apk` depuis GitHub
2. Envoyer vers ton téléphone (WhatsApp, email, etc.)
3. Ouvrir avec "Gestionnaire de fichiers"
4. Installer
5. Lancer l'app ✅

### Via `adb` (si tu as Android SDK):

```powershell
adb install -r app-debug.apk
adb shell am start -n com.joboost.app/.MainActivity
```

---

## 🐛 DÉPANNAGE

### Le workflow échoue?

1. **Vérifier les logs:**
   - Go: GitHub → Actions → Workflow → Logs
   - Chercher l'erreur

2. **Erreurs courantes:**
   - `cordova: command not found` → npm install -g cordova
   - `Java not found` → Les runners GitHub ont Java inclus
   - `Android SDK not found` → Le setup-android@v2 l'installe

3. **Relancer la compilation:**
   - Cliquer "Re-run jobs" dans GitHub Actions

---

## 💡 TIPS

✅ **Garder le config.xml à jour** avec l'IP correcte
✅ **Pousser régulièrement** sur GitHub (chaque changement)
✅ **Vérifier les artifacts** après chaque build
✅ **Tester l'APK** sur un téléphone avant de partager

---

## 📦 PARTAGER L'APK

Une fois compilée, tu peux partager:

1. **Direct APK:**
   - Télécharger depuis GitHub
   - Envoyer sur WhatsApp, email, Drive

2. **Lien GitHub Release:**
   - Créer une Release sur GitHub
   - Partager le lien

3. **Google Play Store (bonus):**
   - Upload `app-release.apk` signé
   - Gratuit après 25$ une fois

---

## 🎯 COMMANDES CLÉS

```powershell
# Initialiser git (déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Message"

# Pousser vers GitHub
git push origin main

# Vérifier l'état
git status
git log --oneline
```

---

## ❓ QUESTIONS?

Dis-moi si tu:
- Bloque quelque part
- Veux comprendre le workflow
- Veux compiler localement à la place
- Veux ajouter des features à l'APK

Je suis là! 🚀

