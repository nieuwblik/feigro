
# Plan: Fix Radix UI Select Chrome Translation Error

## Probleem Analyse
De `NotFoundError: Failed to execute 'removeChild' on 'Node'` error wordt veroorzaakt door een bekende bug in Radix UI's Select component wanneer Chrome/Safari paginavertaling actief is.

### Oorzaak
Chrome en Safari's ingebouwde vertaalfuncties modificeren tekst-nodes direct in de DOM. Wanneer de Select waarde verandert, probeert React de DOM te reconciliëren, maar de node-structuur is veranderd door de vertaler, wat de fout veroorzaakt.

Dit is een gedocumenteerde issue: [radix-ui/primitives#2578](https://github.com/radix-ui/primitives/issues/2578)

---

## Oplossing

Pas de `SelectItem` component aan om tekst te wrappen in een `<span>` element. Dit isoleert de tekst-node van andere elementen, waardoor Chrome's vertaling React's reconciliatie niet meer breekt.

### Bestand: `src/components/ui/select.tsx`

**Huidige code (regel 101-121):**
```tsx
const SelectItem = React.forwardRef<...>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ... >
    <span className="...">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 stroke-[3px]" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
```

**Nieuwe code:**
```tsx
const SelectItem = React.forwardRef<...>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ... >
    <span className="...">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 stroke-[3px]" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>
      <span>{children}</span>
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
```

---

## Waarom Dit Werkt

Het wrappen van de tekst in een extra `<span>` creëert een aparte DOM-node structuur:

**Voor de fix:**
```text
ItemText
  └── "Dakpannen" (tekst-node - wordt direct gemodificeerd door vertaler)
```

**Na de fix:**
```text
ItemText
  └── span
        └── "Dakpannen" (tekst-node - geïsoleerd binnen span)
```

De `<span>` wrapper zorgt ervoor dat wanneer de vertaler de tekst modificeert, React de parent-child relatie correct kan behouden tijdens reconciliatie.

---

## Technische Details

- Dit is een globale fix die alle Select dropdowns in de applicatie beschermt
- Geen wijzigingen nodig in individuele formulieren (LekkageForm, Contact, etc.)
- Styling blijft ongewijzigd door de span
- Dezelfde workaround wordt aanbevolen door Radix UI maintainers

---

## Bestanden die worden aangepast

1. `src/components/ui/select.tsx` - Voeg span wrapper toe aan SelectItem children

## Na Implementatie
- Test het lekkageformulier om te verifiëren dat de Select dropdowns correct werken
- Test ook op Chrome met automatische vertaling ingeschakeld indien mogelijk
