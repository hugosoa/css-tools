// components/shadow/index.ts
// Ce fichier facilite l'importation des composants

export * from './types';
// Utilisez des exports nommés au lieu de export * si nécessaire
export { RangeControl } from '../common/RangeControl';
export { ColorControl } from './ColorControl';
export { CheckboxControl } from './CheckboxControl';
export { ShadowPreview } from './ShadowPreview';
export { CodeOutput } from './CodeOutput';
export { PresetSelector } from './PresetSelector';
export { ShadowControls } from './ShadowControls';
export { generateShadowCode } from './shadowCodeGenerator';
export { default as ShadowSimulator } from './ShadowSimulator';