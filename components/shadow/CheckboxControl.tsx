// components/shadow/CheckboxControl.tsx
import React from 'react';

type CheckboxControlProps = {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
};

export const CheckboxControl: React.FC<CheckboxControlProps> = ({
    id,
    label,
    checked,
    onChange
}) => {
    return (
        <div className="flex items-center py-2">
            <div className="flex items-center h-6">
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 focus:ring-gray-400"
                />
            </div>
            <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>
        </div>
    );
};