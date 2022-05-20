import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {  white } from './colors';
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
		color: ${white};

		& h1 {
			font-weight: 
		}

		a {
			text-decoration: none;
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
