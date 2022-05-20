import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { black, white } from './colors';
import { fontFaceImport } from './typography';

type LayoutProps = {
    children?: any;
};

export const GlobalStyle = createGlobalStyle`
	${fontFaceImport}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	  }
	
	body {
		font-family: 'Open Sans', sans-serif;
		color: ${(props) => (props.theme === white ? white : black)};

		& h1 {
			font-weight: 
		}
	}
`;

export default function GlobalStyledLayout({ children }: LayoutProps) {
    return (
        <>
            <GlobalStyle theme="purple" />
            {children}
        </>
    );
}
