// components/shadow/ShadowControls.tsx
import React from 'react';
import { RangeControl } from '../common/RangeControl';
import { CheckboxControl } from './CheckboxControl';
import { ColorControl } from '.';

type ShadowControlsProps = {
    horizontalOffset: number;
    setHorizontalOffset: (value: number) => void;
    verticalOffset: number;
    setVerticalOffset: (value: number) => void;
    blur: number;
    setBlur: (value: number) => void;
    spread: number;
    setSpread: (value: number) => void;
    opacity: number;
    setOpacity: (value: number) => void;
    color: string;
    setColor: (value: string) => void;
    inset: boolean;
    setInset: (value: boolean) => void;
    borderRadius: number;
    setBorderRadius: (value: number) => void;
    width: number;
    setWidth: (value: number) => void;
    height: number;
    setHeight: (value: number) => void;
    bgColor: string;
    setBgColor: (value: string) => void;
};

export const ShadowControls: React.FC<ShadowControlsProps> = (props) => {
    // Préfixe unique pour les IDs des contrôles
    const getControlId = (name: string) => `shadow-control-${name}`;

    return (
        <div className="p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">
                Shadow Properties
            </h2>

            <div className="space-y-5">
                <RangeControl
                    id={getControlId('h-offset')}
                    label="Horizontal Offset"
                    value={props.horizontalOffset}
                    onChange={props.setHorizontalOffset}
                    min={-50}
                    max={50}
                />

                <RangeControl
                    id={getControlId('v-offset')}
                    label="Vertical Offset"
                    value={props.verticalOffset}
                    onChange={props.setVerticalOffset}
                    min={-50}
                    max={50}
                />

                <RangeControl
                    id={getControlId('blur')}
                    label="Blur"
                    value={props.blur}
                    onChange={props.setBlur}
                    min={0}
                    max={100}
                />

                <RangeControl
                    id={getControlId('spread')}
                    label="Spread"
                    value={props.spread}
                    onChange={props.setSpread}
                    min={-50}
                    max={50}
                />

                <RangeControl
                    id={getControlId('opacity')}
                    label="Opacity"
                    value={props.opacity}
                    onChange={props.setOpacity}
                    min={0}
                    max={100}
                    unit="%"
                />

                <ColorControl
                    id={getControlId('color')}
                    label="Color"
                    value={props.color}
                    onChange={props.setColor}
                />

                <CheckboxControl
                    id={getControlId('inset')}
                    label="Inset Shadow"
                    checked={props.inset}
                    onChange={props.setInset}
                />
            </div>

            <h2 className="text-lg font-semibold my-6 text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">
                Other Properties
            </h2>

            <div className="space-y-5">
                <RangeControl
                    id={getControlId('radius')}
                    label="Border Radius"
                    value={props.borderRadius}
                    onChange={props.setBorderRadius}
                    min={0}
                    max={100}
                />

                <RangeControl
                    id={getControlId('width')}
                    label="Width"
                    value={props.width}
                    onChange={props.setWidth}
                    min={50}
                    max={400}
                />

                <RangeControl
                    id={getControlId('height')}
                    label="Height"
                    value={props.height}
                    onChange={props.setHeight}
                    min={50}
                    max={400}
                />

                <ColorControl
                    id={getControlId('bg-color')}
                    label="Background Color"
                    value={props.bgColor}
                    onChange={props.setBgColor}
                />
            </div>
        </div>
    );
};