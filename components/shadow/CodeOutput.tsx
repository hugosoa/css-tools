// components/shadow/CodeOutput.tsx
import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { IntegrationType } from './types';

type CodeOutputProps = {
    generatedCode: string;
    integrationType: IntegrationType;
    setIntegrationType: (type: IntegrationType) => void;
};

export const CodeOutput: React.FC<CodeOutputProps> = ({
    generatedCode,
    integrationType,
    setIntegrationType
}) => {
    const [copied, setCopied] = useState<boolean>(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedCode)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Error while copying:', err);
            });
    };

    const integrationOptions = [
        { value: 'css', label: 'CSS' },
        { value: 'jsx', label: 'React JSX' },
        { value: 'tsx', label: 'React TSX' },
        { value: 'tailwind', label: 'Tailwind CSS' },
        { value: 'styledComponents', label: 'Styled Components' },
        { value: 'emotion', label: 'Emotion CSS' }
    ];

    return (
        <div className="p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">Generated Code</h2>

            {/* Integration format tabs */}
            <div className="mb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex flex-wrap -mb-px">
                    {integrationOptions.map((option) => (
                        <button
                            key={option.value}
                            className={`inline-block py-2 px-4 text-sm font-medium focus:outline-none ${integrationType === option.value
                                ? 'text-gray-900 dark:text-gray-50 border-b-2 border-gray-900 dark:border-gray-50'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700'
                                }`}
                            onClick={() => setIntegrationType(option.value as IntegrationType)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Generated code */}
            <div className="relative">
                <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 p-1.5 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 text-xs"
                    title={copied ? "Copied!" : "Copy to clipboard"}
                >
                    <Copy />
                </button>
                <pre className="text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-x-auto text-gray-900 dark:text-gray-50">
                    <code>{generatedCode}</code>
                </pre>
                {copied && (
                    <div className="absolute top-2 right-10 bg-gray-800 text-white px-2 py-1 rounded text-xs">
                        Copied!
                    </div>
                )}
            </div>
        </div>
    );
};