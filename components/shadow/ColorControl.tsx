// components/shadow/ColorControl.tsx
import React from 'react';

type ColorControlProps = {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
};

export const ColorControl: React.FC<ColorControlProps> = ({
    id,
    label,
    value,
    onChange
}) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center mb-1">
                <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                </label>
                <span className="text-sm text-gray-500 dark:text-gray-400">{value}</span>
            </div>
            <div className="flex gap-2">
                <div
                    className="relative w-12 h-8 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden"
                    style={{ background: value }}
                >
                    <input
                        id={id}
                        type="color"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="text-sm py-1 px-2 border border-gray-300 dark:border-gray-700 rounded-md flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
            </div>
        </div>
    );
};