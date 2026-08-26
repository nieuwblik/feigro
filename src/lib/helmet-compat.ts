// react-helmet-async is een CommonJS-pakket; Vite's SSR-module-runner kan er
// geen named exports uit halen ("Named export 'HelmetProvider' not found").
// Deze shim importeert het pakket als namespace en pakt de CJS-default uit,
// zodat zowel de server (SSR) als de browser dezelfde imports kunnen gebruiken.
import * as helmetNs from 'react-helmet-async';

type HelmetModule = typeof import('react-helmet-async');

const helmet: HelmetModule =
  ((helmetNs as unknown as { default?: HelmetModule }).default ??
    (helmetNs as unknown as HelmetModule));

export const Helmet = helmet.Helmet;
export const HelmetProvider = helmet.HelmetProvider;
