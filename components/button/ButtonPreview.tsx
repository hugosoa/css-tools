// components/button/ButtonPreview.tsx
import React from 'react';

type ButtonPreviewProps = {
    buttonStyle: React.CSSProperties;
    hoverStyle: React.CSSProperties;
    text: string;
};

export const ButtonPreview: React.FC<ButtonPreviewProps> = ({ buttonStyle, hoverStyle, text }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const combinedStyle = {
        ...buttonStyle,
        ...(isHovered ? hoverStyle : {})
    };

    return (
        <div className="p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Preview</h2>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg h-80 flex items-center justify-center">
                <button
                    style={combinedStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {text}
                </button>
            </div>
        </div>
    );
};