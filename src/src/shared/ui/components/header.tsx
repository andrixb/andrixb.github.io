import React from 'react';

import { Title, Link, Meta } from 'react-head';

export interface MainAppHeaderComponentProps {
    title?: string;
    description?: string;
    favico?: string;
}

export function MainAppHeaderComponent(props: MainAppHeaderComponentProps) {
    const { title, description, favico } = { ...props };
    return (
        <>
            <Title>{title}</Title>
            <Meta name="description" content={description} />
            <Link rel="icon" href={favico} />
        </>
    );
}
