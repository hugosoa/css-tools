'use client'
// components/button/ButtonGenerator.tsx
import React, { useState, useMemo } from 'react';
import { ButtonPresetSelector } from './ButtonPresetSelector';
import { ButtonControls } from './ButtonControls';
import { ButtonPreview } from './ButtonPreview';
import { CodeOutput } from '../shadow/CodeOutput';
import { ButtonPreset, IntegrationType } from './types';
import { generateButtonCode } from './ButtonCodeGenerator';

const ButtonGenerator: React.FC = () => {
    // État pour le texte du bouton
    const [text, setText] = useState<string>('Button');

    // État pour les couleurs de base
    const [backgroundColor, setBackgroundColor] = useState<string>('#3b82f6');
    const [textColor, setTextColor] = useState<string>('#ffffff');
    const [borderColor, setBorderColor] = useState<string>('#3b82f6');

    // État pour les bordures
    const [borderWidth, setBorderWidth] = useState<number>(1);
    const [borderRadius, setBorderRadius] = useState<number>(6);

    // État pour la typographie
    const [fontSize, setFontSize] = useState<number>(16);
    const [fontWeight, setFontWeight] = useState<string>('500');
    const [letterSpacing, setLetterSpacing] = useState<number>(0);

    // État pour les dimensions
    const [width, setWidth] = useState<number>(0); // 0 = auto
    const [height, setHeight] = useState<number>(0); // 0 = auto
    const [paddingY, setPaddingY] = useState<number>(8);
    const [paddingX, setPaddingX] = useState<number>(16);

    // État pour les effets au survol
    const [hoverEffect, setHoverEffect] = useState<boolean>(true);
    const [hoverBackgroundColor, setHoverBackgroundColor] = useState<string>('#2563eb');
    const [hoverTextColor, setHoverTextColor] = useState<string>('#ffffff');
    const [hoverBorderColor, setHoverBorderColor] = useState<string>('#2563eb');

    // État pour les effets additionnels
    const [shadowType, setShadowType] = useState<string>('subtle');
    const [transition, setTransition] = useState<string>('all 0.3s ease');

    // État pour le type d'intégration
    const [integrationType, setIntegrationType] = useState<IntegrationType>('css');

    // Styles pour le bouton de démonstration
    const buttonStyle = useMemo(() => {
        // Calculer les styles de base du bouton
        let shadowStyle = '';
        switch (shadowType) {
            case 'subtle':
                shadowStyle = '0 2px 4px rgba(0, 0, 0, 0.1)';
                break;
            case 'medium':
                shadowStyle = '0 4px 8px rgba(0, 0, 0, 0.15)';
                break;
            case 'strong':
                shadowStyle = '0 6px 12px rgba(0, 0, 0, 0.2)';
                break;
            case 'inset':
                shadowStyle = 'inset 0 2px 4px rgba(0, 0, 0, 0.1)';
                break;
            default:
                shadowStyle = 'none';
        }

        return {
            backgroundColor,
            color: textColor,
            border: `${borderWidth}px solid ${borderColor}`,
            borderRadius: `${borderRadius}px`,
            fontSize: `${fontSize}px`,
            fontWeight,
            width: width === 0 ? 'auto' : `${width}px`,
            height: height === 0 ? 'auto' : `${height}px`,
            padding: `${paddingY}px ${paddingX}px`,
            letterSpacing: `${letterSpacing}px`,
            boxShadow: shadowStyle,
            cursor: 'pointer',
            transition
        };
    }, [
        backgroundColor,
        textColor,
        borderColor,
        borderWidth,
        borderRadius,
        fontSize,
        fontWeight,
        width,
        height,
        paddingY,
        paddingX,
        letterSpacing,
        shadowType,
        transition
    ]);

    // Styles pour l'état au survol
    const hoverStyles = useMemo(() => {
        return hoverEffect ? {
            backgroundColor: hoverBackgroundColor,
            color: hoverTextColor,
            borderColor: hoverBorderColor
        } : {};
    }, [hoverEffect, hoverBackgroundColor, hoverTextColor, hoverBorderColor]);

    // Présets de boutons
    const buttonPresets: ButtonPreset[] = [
        {
            name: 'Primary',
            backgroundColor: '#3b82f6',
            textColor: '#ffffff',
            borderColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 6,
            fontSize: 16,
            fontWeight: '500',
            width: 0,
            height: 0,
            padding: [8, 16],
            hoverEffect: true,
            hoverBackgroundColor: '#2563eb',
            hoverTextColor: '#ffffff',
            hoverBorderColor: '#2563eb',
            shadowType: 'subtle',
            transition: 'all 0.3s ease'
        },
        {
            name: 'Secondary',
            backgroundColor: '#f3f4f6',
            textColor: '#111827',
            borderColor: '#d1d5db',
            borderWidth: 1,
            borderRadius: 6,
            fontSize: 16,
            fontWeight: '500',
            width: 0,
            height: 0,
            padding: [8, 16],
            hoverEffect: true,
            hoverBackgroundColor: '#e5e7eb',
            hoverTextColor: '#111827',
            hoverBorderColor: '#9ca3af',
            shadowType: 'none',
            transition: 'all 0.3s ease'
        },
        {
            name: 'Ghost',
            backgroundColor: 'transparent',
            textColor: '#3b82f6',
            borderColor: 'transparent',
            borderWidth: 1,
            borderRadius: 6,
            fontSize: 16,
            fontWeight: '500',
            width: 0,
            height: 0,
            padding: [8, 16],
            hoverEffect: true,
            hoverBackgroundColor: 'rgba(59, 130, 246, 0.1)',
            hoverTextColor: '#2563eb',
            hoverBorderColor: 'transparent',
            shadowType: 'none',
            transition: 'all 0.3s ease'
        },
        {
            name: 'Outline',
            backgroundColor: 'transparent',
            textColor: '#3b82f6',
            borderColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 6,
            fontSize: 16,
            fontWeight: '500',
            width: 0,
            height: 0,
            padding: [8, 16],
            hoverEffect: true,
            hoverBackgroundColor: '#3b82f6',
            hoverTextColor: '#ffffff',
            hoverBorderColor: '#3b82f6',
            shadowType: 'none',
            transition: 'all 0.3s ease'
        },
        {
            name: 'Rounded',
            backgroundColor: '#3b82f6',
            textColor: '#ffffff',
            borderColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 30,
            fontSize: 16,
            fontWeight: '500',
            width: 0,
            height: 0,
            padding: [8, 20],
            hoverEffect: true,
            hoverBackgroundColor: '#2563eb',
            hoverTextColor: '#ffffff',
            hoverBorderColor: '#2563eb',
            shadowType: 'medium',
            transition: 'all 0.3s ease'
        },
        {
            name: '3D Button',
            backgroundColor: '#22c55e',
            textColor: '#ffffff',
            borderColor: '#15803d',
            borderWidth: 0,
            borderRadius: 6,
            fontSize: 16,
            fontWeight: '600',
            width: 0,
            height: 0,
            padding: [12, 24],
            hoverEffect: true,
            hoverBackgroundColor: '#16a34a',
            hoverTextColor: '#ffffff',
            hoverBorderColor: '#15803d',
            shadowType: 'strong',
            transition: 'all 0.15s ease'
        }
    ];

    // Fonction pour appliquer un preset
    const applyPreset = (preset: ButtonPreset) => {
        setText(text); // Garde le texte actuel
        setBackgroundColor(preset.backgroundColor);
        setTextColor(preset.textColor);
        setBorderColor(preset.borderColor);
        setBorderWidth(preset.borderWidth);
        setBorderRadius(preset.borderRadius);
        setFontSize(preset.fontSize);
        setFontWeight(preset.fontWeight);
        setWidth(preset.width);
        setHeight(preset.height);
        setPaddingY(preset.padding[0]);
        setPaddingX(preset.padding[1]);
        setHoverEffect(preset.hoverEffect);

        if (preset.hoverEffect) {
            setHoverBackgroundColor(preset.hoverBackgroundColor || preset.backgroundColor);
            setHoverTextColor(preset.hoverTextColor || preset.textColor);
            setHoverBorderColor(preset.hoverBorderColor || preset.borderColor);
        }

        setShadowType(preset.shadowType || 'none');
        setTransition(preset.transition || 'all 0.3s ease');
    };

    // Génération du code avec useMemo pour éviter des recalculs inutiles
    const generatedCode = useMemo(() => {
        return generateButtonCode(
            {
                text,
                backgroundColor,
                textColor,
                borderColor,
                borderWidth,
                borderRadius,
                fontSize,
                fontWeight,
                width,
                height,
                paddingY,
                paddingX,
                letterSpacing,
                hoverEffect,
                hoverBackgroundColor,
                hoverTextColor,
                hoverBorderColor,
                shadowType,
                transition
            },
            integrationType
        );
    }, [
        text,
        backgroundColor,
        textColor,
        borderColor,
        borderWidth,
        borderRadius,
        fontSize,
        fontWeight,
        width,
        height,
        paddingY,
        paddingX,
        letterSpacing,
        hoverEffect,
        hoverBackgroundColor,
        hoverTextColor,
        hoverBorderColor,
        shadowType,
        transition,
        integrationType
    ]);

    return (
        <div className="w-full max-w-5xl mx-auto p-6 font-sans">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Button Generator</h1>
            </div>

            {/* Presets */}
            <ButtonPresetSelector presets={buttonPresets} onApplyPreset={applyPreset} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Control panel */}
                <ButtonControls
                    text={text}
                    setText={setText}
                    backgroundColor={backgroundColor}
                    setBackgroundColor={setBackgroundColor}
                    textColor={textColor}
                    setTextColor={setTextColor}
                    borderColor={borderColor}
                    setBorderColor={setBorderColor}
                    borderWidth={borderWidth}
                    setBorderWidth={setBorderWidth}
                    borderRadius={borderRadius}
                    setBorderRadius={setBorderRadius}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    fontWeight={fontWeight}
                    setFontWeight={setFontWeight}
                    width={width}
                    setWidth={setWidth}
                    height={height}
                    setHeight={setHeight}
                    paddingY={paddingY}
                    setPaddingY={setPaddingY}
                    paddingX={paddingX}
                    setPaddingX={setPaddingX}
                    letterSpacing={letterSpacing}
                    setLetterSpacing={setLetterSpacing}
                    hoverEffect={hoverEffect}
                    setHoverEffect={setHoverEffect}
                    hoverBackgroundColor={hoverBackgroundColor}
                    setHoverBackgroundColor={setHoverBackgroundColor}
                    hoverTextColor={hoverTextColor}
                    setHoverTextColor={setHoverTextColor}
                    hoverBorderColor={hoverBorderColor}
                    setHoverBorderColor={setHoverBorderColor}
                    shadowType={shadowType}
                    setShadowType={setShadowType}
                    transition={transition}
                    setTransition={setTransition}
                />

                {/* Preview and code area */}
                <div className="space-y-6">
                    {/* Preview */}
                    <ButtonPreview
                        buttonStyle={buttonStyle}
                        hoverStyle={hoverStyles}
                        text={text}
                    />

                    {/* Code output */}
                    <CodeOutput
                        generatedCode={generatedCode}
                        integrationType={integrationType}
                        setIntegrationType={setIntegrationType}
                    />
                </div>
            </div>
        </div>
    );
};

export default ButtonGenerator;