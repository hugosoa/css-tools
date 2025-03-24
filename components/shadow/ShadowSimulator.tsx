'use client'
// components/shadow/ShadowSimulator.tsx
import React, { useState, useMemo } from 'react';
import { PresetSelector } from './PresetSelector';
import { ShadowControls } from './ShadowControls';
import { ShadowPreview } from './ShadowPreview';
import { CodeOutput } from './CodeOutput';
import { IntegrationType, Preset } from './types';
import { generateShadowCode } from './shadowCodeGenerator';

const ShadowSimulator: React.FC = () => {
    // State pour les propriétés d'ombre
    const [horizontalOffset, setHorizontalOffset] = useState<number>(5);
    const [verticalOffset, setVerticalOffset] = useState<number>(5);
    const [blur, setBlur] = useState<number>(10);
    const [spread, setSpread] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(20);
    const [color, setColor] = useState<string>('#000000');
    const [inset, setInset] = useState<boolean>(false);

    // State pour d'autres propriétés CSS
    const [borderRadius, setBorderRadius] = useState<number>(4);
    const [width, setWidth] = useState<number>(200);
    const [height, setHeight] = useState<number>(200);
    const [bgColor, setBgColor] = useState<string>('#ffffff');

    // State pour le type d'intégration
    const [integrationType, setIntegrationType] = useState<IntegrationType>('css');

    // Styles pour le carré de démonstration
    const boxStyle = useMemo(() => {
        // Calculer le boxShadowValue
        const boxShadowValue = `${inset ? 'inset ' : ''}${horizontalOffset}px ${verticalOffset}px ${blur}px ${spread}px ${color}${Math.round(opacity) < 100 ? Math.round(opacity) : ''}`;

        return {
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${borderRadius}px`,
            boxShadow: boxShadowValue,
            backgroundColor: bgColor,
            margin: '20px auto',
            transition: 'all 0.3s ease'
        };
    }, [horizontalOffset, verticalOffset, blur, spread, opacity, color, inset, borderRadius, width, height, bgColor]);

    // Presets d'ombre
    const presets: Preset[] = [
        { name: 'Material Shadow', h: 0, v: 3, blur: 6, spread: 0, opacity: 20, color: '#000000', inset: false },
        { name: 'Soft Shadow', h: 0, v: 10, blur: 20, spread: 0, opacity: 10, color: '#000000', inset: false },
        { name: 'Hard Shadow', h: 5, v: 5, blur: 0, spread: 0, opacity: 40, color: '#000000', inset: false },
        { name: 'Inner Glow', h: 0, v: 0, blur: 10, spread: 0, opacity: 30, color: '#3b82f6', inset: true },
        { name: 'Neon Effect', h: 0, v: 0, blur: 15, spread: 5, opacity: 70, color: '#ec4899', inset: false }
    ];

    // Fonction pour appliquer un preset
    const applyPreset = (preset: Preset) => {
        setHorizontalOffset(preset.h);
        setVerticalOffset(preset.v);
        setBlur(preset.blur);
        setSpread(preset.spread);
        setOpacity(preset.opacity);
        setColor(preset.color);
        setInset(preset.inset);
    };

    // Génération du code avec useMemo pour éviter des recalculs inutiles
    const generatedCode = useMemo(() => {
        return generateShadowCode(
            {
                horizontalOffset,
                verticalOffset,
                blur,
                spread,
                opacity,
                color,
                inset,
                borderRadius,
                width,
                height,
                bgColor
            },
            integrationType
        );
    }, [
        horizontalOffset,
        verticalOffset,
        blur,
        spread,
        opacity,
        color,
        inset,
        borderRadius,
        width,
        height,
        bgColor,
        integrationType
    ]);

    return (
        <div className="w-full max-w-5xl mx-auto p-6 font-sans">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Box Shadow Tool</h1>
            </div>

            {/* Presets */}
            <PresetSelector presets={presets} onApplyPreset={applyPreset} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Control panel */}
                <ShadowControls
                    horizontalOffset={horizontalOffset}
                    setHorizontalOffset={setHorizontalOffset}
                    verticalOffset={verticalOffset}
                    setVerticalOffset={setVerticalOffset}
                    blur={blur}
                    setBlur={setBlur}
                    spread={spread}
                    setSpread={setSpread}
                    opacity={opacity}
                    setOpacity={setOpacity}
                    color={color}
                    setColor={setColor}
                    inset={inset}
                    setInset={setInset}
                    borderRadius={borderRadius}
                    setBorderRadius={setBorderRadius}
                    width={width}
                    setWidth={setWidth}
                    height={height}
                    setHeight={setHeight}
                    bgColor={bgColor}
                    setBgColor={setBgColor}
                />

                {/* Preview and code area */}
                <div className="space-y-6">
                    {/* Preview */}
                    <ShadowPreview boxStyle={boxStyle} />

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

export default ShadowSimulator;