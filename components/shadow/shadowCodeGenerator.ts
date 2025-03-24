// components/shadow/shadowCodeGenerator.ts
import { ShadowProperties, IntegrationType } from './types';

export const generateShadowCode = (
    props: ShadowProperties,
    integrationType: IntegrationType
): string => {
    // Calculer la valeur de l'ombre
    const boxShadowValue = `${props.inset ? 'inset ' : ''}${props.horizontalOffset}px ${props.verticalOffset}px ${props.blur}px ${props.spread}px ${props.color}${Math.round(props.opacity) < 100 ? Math.round(props.opacity) : ''}`;

    switch (integrationType) {
        case 'css':
            return `.shadow-box {
  box-shadow: ${boxShadowValue};
  border-radius: ${props.borderRadius}px;
  width: ${props.width}px;
  height: ${props.height}px;
  background-color: ${props.bgColor};
}`;
        case 'jsx':
            return `const shadowBoxStyle = {
  boxShadow: "${boxShadowValue}",
  borderRadius: "${props.borderRadius}px",
  width: "${props.width}px",
  height: "${props.height}px",
  backgroundColor: "${props.bgColor}"
};

const ShadowBox = () => {
  return (
    <div style={shadowBoxStyle}>
      Your content here
    </div>
  );
};`;
        case 'tsx':
            return `const shadowBoxStyle: React.CSSProperties = {
  boxShadow: "${boxShadowValue}",
  borderRadius: "${props.borderRadius}px",
  width: "${props.width}px",
  height: "${props.height}px",
  backgroundColor: "${props.bgColor}"
};

const ShadowBox: React.FC = () => {
  return (
    <div style={shadowBoxStyle}>
      Your content here
    </div>
  );
};`;
        case 'tailwind':
            return `// You'll need to configure these custom values in tailwind.config.js
// then use the generated classes

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'custom': '${boxShadowValue}',
      },
      borderRadius: {
        'custom': '${props.borderRadius}px',
      },
      width: {
        'custom': '${props.width}px',
      },
      height: {
        'custom': '${props.height}px',
      },
    },
  },
  // ...
}

// In your JSX
<div className="shadow-custom rounded-custom w-custom h-custom bg-[${props.bgColor}]">
  Your content here
</div>`;
        case 'styledComponents':
            return `import styled from 'styled-components';

const ShadowBox = styled.div\`
  box-shadow: ${boxShadowValue};
  border-radius: ${props.borderRadius}px;
  width: ${props.width}px;
  height: ${props.height}px;
  background-color: ${props.bgColor};
\`;

const MyComponent = () => {
  return (
    <ShadowBox>
      Your content here
    </ShadowBox>
  );
};`;
        case 'emotion':
            return `/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const shadowBoxStyle = css\`
  box-shadow: ${boxShadowValue};
  border-radius: ${props.borderRadius}px;
  width: ${props.width}px;
  height: ${props.height}px;
  background-color: ${props.bgColor};
\`;

const ShadowBox = () => {
  return (
    <div css={shadowBoxStyle}>
      Your content here
    </div>
  );
};`;
        default:
            return '';
    }
};