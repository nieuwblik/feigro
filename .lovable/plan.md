

# Plan: Wachtwoordbeveiliging voor de Website

## Overzicht
Een eenvoudige wachtwoordbeveiliging toevoegen zodat bezoekers eerst het wachtwoord moeten invoeren voordat ze de site kunnen bekijken. Het wachtwoord wordt opgeslagen in `localStorage` zodat bezoekers niet elke keer opnieuw hoeven in te loggen.

## Hoe het werkt

```text
+----------------------------------+
|  Bezoeker komt op site           |
+----------------------------------+
            |
            v
+----------------------------------+
|  Is wachtwoord al ingevoerd?     |
|  (check localStorage)            |
+----------------------------------+
     |                    |
    JA                   NEE
     |                    |
     v                    v
+----------------------------------+
|  Toon website          |  Toon wachtwoord-scherm  |
+----------------------------------+
                          |
                          v
                 +------------------+
                 | Wachtwoord juist?|
                 +------------------+
                   |            |
                  JA          NEE
                   |            |
                   v            v
              Opslaan in    Toon foutmelding
              localStorage
```

## Implementatie

### Nieuw Component: PasswordGate
**Bestand:** `src/components/PasswordGate.tsx`

Een component dat:
- Controleert of het wachtwoord al is ingevoerd (via `localStorage`)
- Een login-scherm toont met Feigro branding als het wachtwoord nog niet is ingevoerd
- De kinderen (de hele site) rendert als het wachtwoord correct is
- Een professioneel ogend login-scherm met het Feigro logo

**Design van het wachtwoord-scherm:**
- Zwarte achtergrond (past bij Feigro branding)
- Feigro logo gecentreerd
- Wachtwoord invoerveld
- "Toegang" knop in brand-green
- Foutmelding bij verkeerd wachtwoord

### App.tsx Aanpassen
**Bestand:** `src/App.tsx`

De hele app wrappen in de `PasswordGate` component:

```tsx
const App = () => (
  <PasswordGate>
    <QueryClientProvider client={queryClient}>
      {/* ... rest van de app */}
    </QueryClientProvider>
  </PasswordGate>
);
```

## Technische Details

### localStorage Key
- Key: `feigro_site_access`
- Value: `true` (als wachtwoord correct is ingevoerd)

### Wachtwoord
- Het wachtwoord `Feigro123!` wordt opgeslagen als constante in de component
- Bij correcte invoer wordt toegang verleend en opgeslagen in localStorage

### UI Elementen
- Input type `password` voor het wachtwoord
- Enter-toets support om in te loggen
- Foutmelding animatie bij verkeerd wachtwoord
- Feigro branding consistent met de rest van de site

## Voordelen van deze aanpak

| Voordeel | Uitleg |
|----------|--------|
| **Eenvoudig** | Geen backend authenticatie nodig |
| **Snel** | Wachtwoord wordt onthouden in browser |
| **Consistent** | Past bij de Feigro huisstijl |
| **Tijdelijk** | Makkelijk te verwijderen als de site live mag |

## Bestanden

| Bestand | Actie |
|---------|-------|
| `src/components/PasswordGate.tsx` | Nieuw - Wachtwoord component |
| `src/App.tsx` | Wijzigen - PasswordGate wrappen |

## Later Verwijderen

Wanneer de site openbaar mag, hoef je alleen maar:
1. De `<PasswordGate>` wrapper uit `App.tsx` te verwijderen
2. Het bestand `src/components/PasswordGate.tsx` te verwijderen

