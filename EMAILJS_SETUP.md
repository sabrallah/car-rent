# Configuration EmailJS - Guide Complet

## Étape 1: Créer un compte EmailJS

1. Allez sur **https://www.emailjs.com/**
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Confirmez votre email

## Étape 2: Configurer un Service Email

1. Dans le dashboard, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email (Gmail recommandé):
   - Gmail
   - Outlook
   - Yahoo
   - Ou autre
4. Suivez les instructions pour connecter votre email
5. **Notez le Service ID** (ex: service_abc123)

## Étape 3: Créer un Template Email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template:

```
Subject: Nouvelle Réservation - {{car_name}}

Bonjour,

Vous avez reçu une nouvelle demande de réservation:

INFORMATIONS VOITURE:
- Modèle: {{car_name}}
- Catégorie: {{car_category}}
- Prix: ${{car_price}}/jour

INFORMATIONS CLIENT:
- Nom: {{customer_name}}
- Email: {{customer_email}}
- Téléphone: {{customer_phone}}

DÉTAILS RÉSERVATION:
- Lieu de prise en charge: {{pickup_location}}
- Date de prise en charge: {{pickup_date}}
- Date de retour: {{return_date}}

Cordialement,
DriveNow System
```

4. **Notez le Template ID** (ex: template_xyz789)

## Étape 4: Obtenir votre Public Key

1. Allez dans **"Account"** > **"General"**
2. Trouvez votre **Public Key** (ex: abc123XYZ)

## Étape 5: Configurer le code

Ouvrez le fichier: `src/components/BookingModal.jsx`

Remplacez les lignes 25-27 avec vos vraies valeurs:

```javascript
const serviceId = 'service_abc123';      // Votre Service ID
const templateId = 'template_xyz789';    // Votre Template ID
const publicKey = 'abc123XYZ';           // Votre Public Key
```

Et ligne 41, remplacez avec votre vrai email:
```javascript
to_email: 'votre-email@example.com',     // Votre email
```

## Étape 6: Tester

1. Lancez votre application: `npm run dev`
2. Cliquez sur "Book Now" sur une voiture
3. Remplissez le formulaire
4. Cliquez sur "Confirm Booking"
5. Vérifiez votre boîte email!

## Limites du plan gratuit

- ✅ 200 emails par mois
- ✅ 2 services email
- ✅ Templates illimités
- ✅ Support de base

## Dépannage

**Erreur "Failed to send email":**
- Vérifiez que vos IDs sont corrects
- Vérifiez que votre service email est bien connecté
- Vérifiez que le template existe

**Email non reçu:**
- Vérifiez vos spams
- Vérifiez que l'email dans `to_email` est correct
- Attendez quelques minutes (peut prendre 1-2 min)

## Support

Documentation officielle: https://www.emailjs.com/docs/
