import blackLoader from 'assets/img/loader_black.gif';
import whiteLoader from 'assets/img/loader_white.gif';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import React from 'react';

export interface LoaderProps {
    size?: 'small' | 'middle' | 'large';
    isWhite?: boolean;
}

export const Loader = ({ size = 'small', isWhite = false }: LoaderProps) => {
    const loaderSize = size === 'small' ? '15px' : size === 'middle' ? '30px' : '45px';
    return (
        <Section alignCenter justifyCenter>
            <CustomImg alt="Loader" height={loaderSize} src={isWhite ? whiteLoader : blackLoader} width={loaderSize} />
        </Section>
    );
};

//<div>loading...</div>;

// export const Loader = () => (
//     <svg height="38" viewBox="0 0 38 38" width="38" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//             <linearGradient id="a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
//                 <stop offset="0%" stop-color="#9D9D9D" stop-opacity="0" />
//                 <stop offset="63.146%" stop-color="#9D9D9D" stop-opacity=".631" />
//                 <stop offset="100%" stop-color="#9D9D9D" />
//             </linearGradient>
//         </defs>
//         <g fill="none" fill-rule="evenodd">
//             <g transform="translate(1 1)">
//                 <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
//                     <animateTransform
//                         attributeName="transform"
//                         dur="0.9s"
//                         from="0 18 18"
//                         repeatCount="indefinite"
//                         to="360 18 18"
//                         type="rotate"
//                     />
//                 </path>
//                 <circle cx="36" cy="18" fill="#9D9D9D" r="1">
//                     <animateTransform
//                         attributeName="transform"
//                         dur="0.9s"
//                         from="0 18 18"
//                         repeatCount="indefinite"
//                         to="360 18 18"
//                         type="rotate"
//                     />
//                 </circle>
//             </g>
//         </g>
//     </svg>
// );
