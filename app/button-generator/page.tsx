// app/button-generator/page.tsx
import ButtonGenerator from '@/components/button/ButtonGenerator';
import React from 'react';

export default function ButtonGeneratorPage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <ButtonGenerator />
        </main>
    );
}