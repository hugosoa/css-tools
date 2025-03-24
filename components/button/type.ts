// components/button/types.ts

// Types for integration formats
export type IntegrationType = 'css' | 'jsx' | 'tsx' | 'tailwind' | 'styledComponents' | 'emotion';

// Type for button presets
export type ButtonPreset = {
    name: string;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    fontSize: number;
    fontWeight: string;
    width: number;
    height: number;
    padding: [number, number]; // [paddingY, paddingX]
    hoverEffect: boolean;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    hoverBorderColor?: string;
    shadowType?: string;
    transition?: string;
};

// Type for button properties
export type ButtonProperties = {
    text: string;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    fontSize: number;
    fontWeight: string;
    width: number;
    height: number;
    paddingY: number;
    paddingX: number;
    letterSpacing: number;
    hoverEffect: boolean;
    hoverBackgroundColor: string;
    hoverTextColor: string;
    hoverBorderColor: string;
    shadowType: string;
    transition: string;
};