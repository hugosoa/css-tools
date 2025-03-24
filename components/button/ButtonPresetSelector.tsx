// components/button/ButtonPresetSelector.tsx
import React from 'react';
import { ButtonPreset } from './types';

type ButtonPresetSelectorProps = {
    presets: ButtonPreset[];
    onApplyPreset: (preset: ButtonPreset) => void;
};

export const ButtonPresetSelector: React.FC<ButtonPresetSelectorProps> = ({ presets, onApplyPreset }) => {
    return (
        <div className="mb-6 p-5 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Button Presets</h2>
            <div className="flex flex-wrap gap-2">
                {presets.map((preset, index) => (
                    <button
                        key={index}
                        onClick={() => onApplyPreset(preset)}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                        style={{
                            backgroundColor: preset.backgroundColor,
                            color: preset.textColor,
                            borderColor: preset.borderColor,
                            borderWidth: `${preset.borderWidth}px`,
                            borderRadius: `${preset.borderRadius}px`,
                            fontWeight: preset.fontWeight
                        }}
                    >
                        {preset.name}
                    </button>
                ))}
            </div>
        </div>
    );
};