// components/shadow/ShadowPreview.tsx
import React from 'react';

type ShadowPreviewProps = {
    boxStyle: React.CSSProperties;
};

export const ShadowPreview: React.FC<ShadowPreviewProps> = ({ boxStyle }) => {
    return (
        <div className="p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Preview</h2>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg h-80 flex items-center justify-center">
                <div style={boxStyle}></div>
            </div>
        </div>
    );
};