// components/shadow/types.ts

// Types for integration formats
export type IntegrationType = 'css' | 'jsx' | 'tsx' | 'tailwind' | 'styledComponents' | 'emotion';

// Type for shadow presets
export type Preset = {
    name: string;
    h: number;
    v: number;
    blur: number;
    spread: number;
    opacity: number;
    color: string;
    inset: boolean;
};

// Type for shadow properties
export type ShadowProperties = {
    horizontalOffset: number;
    verticalOffset: number;
    blur: number;
    spread: number;
    opacity: number;
    color: string;
    inset: boolean;
    borderRadius: number;
    width: number;
    height: number;
    bgColor: string;
};