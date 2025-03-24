// components/button/ButtonControls.tsx
import React from 'react';
import { RangeControl } from '../common/RangeControl';
import { CheckboxControl } from '../shadow/CheckboxControl';
import { ColorControl } from '../shadow/ColorControl';

type ButtonControlsProps = {
    text: string;
    setText: (value: string) => void;
    backgroundColor: string;
    setBackgroundColor: (value: string) => void;
    textColor: string;
    setTextColor: (value: string) => void;
    borderColor: string;
    setBorderColor: (value: string) => void;
    borderWidth: number;
    setBorderWidth: (value: number) => void;
    borderRadius: number;
    setBorderRadius: (value: number) => void;
    fontSize: number;
    setFontSize: (value: number) => void;
    fontWeight: string;
    setFontWeight: (value: string) => void;
    width: number;
    setWidth: (value: number) => void;
    height: number;
    setHeight: (value: number) => void;
    paddingY: number;
    setPaddingY: (value: number) => void;
    paddingX: number;
    setPaddingX: (value: number) => void;
    letterSpacing: number;
    setLetterSpacing: (value: number) => void;
    hoverEffect: boolean;
    setHoverEffect: (value: boolean) => void;
    hoverBackgroundColor: string;
    setHoverBackgroundColor: (value: string) => void;
    hoverTextColor: string;
    setHoverTextColor: (value: string) => void;
    hoverBorderColor: string;
    setHoverBorderColor: (value: string) => void;
    shadowType: string;
    setShadowType: (value: string) => void;
    transition: string;
    setTransition: (value: string) => void;
};

export const ButtonControls: React.FC<ButtonControlsProps> = (props) => {
    // Préfixe unique pour les IDs des contrôles
    const getControlId = (name: string) => `button-control-${name}`;

    const fontWeightOptions = [
        { value: 'normal', label: 'Normal' },
        { value: 'bold', label: 'Bold' },
        { value: '100', label: 'Thin (100)' },
        { value: '200', label: 'Extra Light (200)' },
        { value: '300', label: 'Light (300)' },
        { value: '400', label: 'Regular (400)' },
        { value: '500', label: 'Medium (500)' },
        { value: '600', label: 'Semi Bold (600)' },
        { value: '700', label: 'Bold (700)' },
        { value: '800', label: 'Extra Bold (800)' },
        { value: '900', label: 'Black (900)' }
    ];

    const shadowTypeOptions = [
        { value: 'none', label: 'None' },
        { value: 'subtle', label: 'Subtle' },
        { value: 'medium', label: 'Medium' },
        { value: 'strong', label: 'Strong' },
        { value: 'inset', label: 'Inset' }
    ];

    const transitionOptions = [
        { value: 'all 0.3s ease', label: 'Smooth (0.3s)' },
        { value: 'all 0.15s ease', label: 'Fast (0.15s)' },
        { value: 'all 0.5s ease', label: 'Slow (0.5s)' },
        { value: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', label: 'Material' },
        { value: 'all 0.3s ease-in-out', label: 'Ease In-Out' },
        { value: 'none', label: 'None' }
    ];

    return (
        <div className="p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">
                Button Properties
            </h2>

            <div className="space-y-5">
                {/* Texte du bouton */}
                <div className="space-y-2">
                    <label
                        htmlFor={getControlId('text')}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Button Text
                    </label>
                    <input
                        id={getControlId('text')}
                        type="text"
                        value={props.text}
                        onChange={(e) => props.setText(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50"
                    />
                </div>

                <h3 className="text-md font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-1">
                    Colors & Style
                </h3>

                <ColorControl
                    id={getControlId('bg-color')}
                    label="Background Color"
                    value={props.backgroundColor}
                    onChange={props.setBackgroundColor}
                />

                <ColorControl
                    id={getControlId('text-color')}
                    label="Text Color"
                    value={props.textColor}
                    onChange={props.setTextColor}
                />

                <ColorControl
                    id={getControlId('border-color')}
                    label="Border Color"
                    value={props.borderColor}
                    onChange={props.setBorderColor}
                />

                <RangeControl
                    id={getControlId('border-width')}
                    label="Border Width"
                    value={props.borderWidth}
                    onChange={props.setBorderWidth}
                    min={0}
                    max={10}
                />

                <RangeControl
                    id={getControlId('border-radius')}
                    label="Border Radius"
                    value={props.borderRadius}
                    onChange={props.setBorderRadius}
                    min={0}
                    max={50}
                />

                <h3 className="text-md font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-1">
                    Typography
                </h3>

                <RangeControl
                    id={getControlId('font-size')}
                    label="Font Size"
                    value={props.fontSize}
                    onChange={props.setFontSize}
                    min={8}
                    max={32}
                />

                <div className="space-y-2">
                    <label
                        htmlFor={getControlId('font-weight')}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Font Weight
                    </label>
                    <select
                        id={getControlId('font-weight')}
                        value={props.fontWeight}
                        onChange={(e) => props.setFontWeight(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50"
                    >
                        {fontWeightOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <RangeControl
                    id={getControlId('letter-spacing')}
                    label="Letter Spacing"
                    value={props.letterSpacing}
                    onChange={props.setLetterSpacing}
                    min={-2}
                    max={10}
                    step={0.1}
                />

                <h3 className="text-md font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-1">
                    Size & Spacing
                </h3>

                <RangeControl
                    id={getControlId('width')}
                    label="Width (0 for auto)"
                    value={props.width}
                    onChange={props.setWidth}
                    min={0}
                    max={300}
                />

                <RangeControl
                    id={getControlId('height')}
                    label="Height (0 for auto)"
                    value={props.height}
                    onChange={props.setHeight}
                    min={0}
                    max={200}
                />

                <RangeControl
                    id={getControlId('padding-y')}
                    label="Padding Y"
                    value={props.paddingY}
                    onChange={props.setPaddingY}
                    min={0}
                    max={32}
                />

                <RangeControl
                    id={getControlId('padding-x')}
                    label="Padding X"
                    value={props.paddingX}
                    onChange={props.setPaddingX}
                    min={0}
                    max={64}
                />

                <h3 className="text-md font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-1">
                    Effects
                </h3>

                <div className="space-y-2">
                    <label
                        htmlFor={getControlId('shadow-type')}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Shadow Type
                    </label>
                    <select
                        id={getControlId('shadow-type')}
                        value={props.shadowType}
                        onChange={(e) => props.setShadowType(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50"
                    >
                        {shadowTypeOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor={getControlId('transition')}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Transition
                    </label>
                    <select
                        id={getControlId('transition')}
                        value={props.transition}
                        onChange={(e) => props.setTransition(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50"
                    >
                        {transitionOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <h3 className="text-md font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-1">
                    Hover Effects
                </h3>

                <CheckboxControl
                    id={getControlId('hover-effect')}
                    label="Enable Hover Effect"
                    checked={props.hoverEffect}
                    onChange={props.setHoverEffect}
                />

                {props.hoverEffect && (
                    <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-5 mt-4">
                        <ColorControl
                            id={getControlId('hover-bg-color')}
                            label="Hover Background Color"
                            value={props.hoverBackgroundColor}
                            onChange={props.setHoverBackgroundColor}
                        />

                        <ColorControl
                            id={getControlId('hover-text-color')}
                            label="Hover Text Color"
                            value={props.hoverTextColor}
                            onChange={props.setHoverTextColor}
                        />

                        <ColorControl
                            id={getControlId('hover-border-color')}
                            label="Hover Border Color"
                            value={props.hoverBorderColor}
                            onChange={props.setHoverBorderColor}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};