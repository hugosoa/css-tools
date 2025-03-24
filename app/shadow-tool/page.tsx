// app/shadow-tool/page.tsx
'use client'

import { ShadowSimulator } from '@/components/shadow';

export default function ShadowToolPage() {
    return (
        <main className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Box Shadow Tool</h1>
            <ShadowSimulator />
        </main>
    );
}