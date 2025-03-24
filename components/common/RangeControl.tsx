// components/shadow/RangeControl.tsx
import React from 'react';

type RangeControlProps = {
    id: string;
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    unit?: string;
};

export const RangeControl: React.FC<RangeControlProps> = ({
    id,
    label,
    value,
    onChange,
    min,
    max,
    unit = 'px'
}) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between mb-1">
                <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                </label>
                <span className="text-sm text-gray-500 dark:text-gray-400">{value}{unit}</span>
            </div>
            <input
                id={id}
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className="w-full h-2 rounded-md appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700"
                style={{ accentColor: '#6b7280' }}
            />
        </div>
    );
};