// components/button/buttonCodeGenerator.ts
import { ButtonProperties, IntegrationType } from './types';

export const generateButtonCode = (
    props: ButtonProperties,
    integrationType: IntegrationType
): string => {
    // Calculer les valeurs CSS de base
    const buttonStyles = `
  background-color: ${props.backgroundColor};
  color: ${props.textColor};
  border: ${props.borderWidth}px solid ${props.borderColor};
  border-radius: ${props.borderRadius}px;
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};
  width: ${props.width === 0 ? 'auto' : `${props.width}px`};
  height: ${props.height === 0 ? 'auto' : `${props.height}px`};
  padding: ${props.paddingY}px ${props.paddingX}px;
  letter-spacing: ${props.letterSpacing}px;
  transition: ${props.transition};`;

    // Calculer les styles au survol
    const hoverStyles = props.hoverEffect ? `
  &:hover {
    background-color: ${props.hoverBackgroundColor};
    color: ${props.hoverTextColor};
    border-color: ${props.hoverBorderColor};
  }` : '';

    // Ombre selon le type sélectionné
    let shadowStyle = '';
    switch (props.shadowType) {
        case 'none':
            shadowStyle = '';
            break;
        case 'subtle':
            shadowStyle = 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);';
            break;
        case 'medium':
            shadowStyle = 'box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);';
            break;
        case 'strong':
            shadowStyle = 'box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);';
            break;
        case 'inset':
            shadowStyle = 'box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);';
            break;
    }

    switch (integrationType) {
        case 'css':
            return `.custom-button {${buttonStyles}
  ${shadowStyle}
  cursor: pointer;
}

.custom-button:hover {
  background-color: ${props.hoverEffect ? props.hoverBackgroundColor : props.backgroundColor};
  color: ${props.hoverEffect ? props.hoverTextColor : props.textColor};
  border-color: ${props.hoverEffect ? props.hoverBorderColor : props.borderColor};
}`;

        case 'jsx':
            return `const buttonStyle = {
  backgroundColor: "${props.backgroundColor}",
  color: "${props.textColor}",
  border: "${props.borderWidth}px solid ${props.borderColor}",
  borderRadius: "${props.borderRadius}px",
  fontSize: "${props.fontSize}px",
  fontWeight: "${props.fontWeight}",
  width: "${props.width === 0 ? 'auto' : `${props.width}px`}",
  height: "${props.height === 0 ? 'auto' : `${props.height}px`}",
  padding: "${props.paddingY}px ${props.paddingX}px",
  letterSpacing: "${props.letterSpacing}px",
  transition: "${props.transition}",
  ${shadowStyle ? `boxShadow: "${shadowStyle.replace('box-shadow: ', '').replace(';', '')}"` : ''}
  cursor: "pointer",
};

const hoverStyle = ${props.hoverEffect ? `{
  backgroundColor: "${props.hoverBackgroundColor}",
  color: "${props.hoverTextColor}",
  borderColor: "${props.hoverBorderColor}",
}` : '{}'};

const Button = () => {
  const [isHover, setIsHover] = React.useState(false);
  
  return (
    <button
      style={{...buttonStyle, ...(isHover ? hoverStyle : {})}}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      ${props.text}
    </button>
  );
};`;

        case 'tsx':
            return `import React, { useState } from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "${props.backgroundColor}",
    color: "${props.textColor}",
    border: "${props.borderWidth}px solid ${props.borderColor}",
    borderRadius: "${props.borderRadius}px",
    fontSize: "${props.fontSize}px",
    fontWeight: "${props.fontWeight}",
    width: "${props.width === 0 ? 'auto' : `${props.width}px`}",
    height: "${props.height === 0 ? 'auto' : `${props.height}px`}",
    padding: "${props.paddingY}px ${props.paddingX}px",
    letterSpacing: "${props.letterSpacing}px",
    transition: "${props.transition}",
    ${shadowStyle ? `boxShadow: "${shadowStyle.replace('box-shadow: ', '').replace(';', '')}"` : ''}
    cursor: "pointer",
    ...(isHover && {
      backgroundColor: "${props.hoverBackgroundColor}",
      color: "${props.hoverTextColor}",
      borderColor: "${props.hoverBorderColor}",
    }),
  };
  
  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      ${props.text || 'children'}
    </button>
  );
};

export default Button;`;

        case 'tailwind':
            // Convertir les valeurs personnalisées en classes Tailwind (simplifié)
            return `// Cette implémentation est simplifiée - certaines propriétés
// nécessiteraient une configuration personnalisée dans tailwind.config.js

const Button = () => {
  return (
    <button
      className="
        bg-[${props.backgroundColor}]
        text-[${props.textColor}]
        border-[${props.borderWidth}px]
        border-[${props.borderColor}]
        rounded-[${props.borderRadius}px]
        text-[${props.fontSize}px]
        font-[${props.fontWeight}]
        ${props.width === 0 ? '' : `w-[${props.width}px]`}
        ${props.height === 0 ? '' : `h-[${props.height}px]`}
        py-[${props.paddingY}px]
        px-[${props.paddingX}px]
        tracking-[${props.letterSpacing}px]
        cursor-pointer
        transition
        ${props.shadowType === 'subtle' ? 'shadow-sm' :
                    props.shadowType === 'medium' ? 'shadow-md' :
                        props.shadowType === 'strong' ? 'shadow-lg' :
                            props.shadowType === 'inset' ? 'shadow-inner' : ''}
        ${props.hoverEffect ? `
        hover:bg-[${props.hoverBackgroundColor}]
        hover:text-[${props.hoverTextColor}]
        hover:border-[${props.hoverBorderColor}]
        ` : ''}
      "
    >
      ${props.text}
    </button>
  );
};`;

        case 'styledComponents':
            return `import styled from 'styled-components';

const StyledButton = styled.button\`
  ${buttonStyles}
  ${shadowStyle}
  cursor: pointer;
  
  ${hoverStyles}
\`;

const Button = () => {
  return <StyledButton>${props.text}</StyledButton>;
};

export default Button;`;

        case 'emotion':
            return `/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyles = css\`
  ${buttonStyles}
  ${shadowStyle}
  cursor: pointer;
  
  ${hoverStyles}
\`;

const Button = () => {
  return <button css={buttonStyles}>${props.text}</button>;
};

export default Button;`;

        default:
            return '';
    }
};