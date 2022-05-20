import React, { useState } from 'react';
import GlobalStyledLayout from '../../../../shared/ui/styles';
import { useDetectMobile } from '../../../infrastructure/hooks/useDetectMobile';
import { LogoComponent } from '../../components/logoComponent';
import MenuComponent from '../../components/menuComponent';
import { HomePageContainer } from './styles';

export type HomePageComponentProps = {};

export default function HomePageComponent() {
    const { isMobile } = useDetectMobile();
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <GlobalStyledLayout>
            <HomePageContainer>
                <MenuComponent setInteracted={setToggle} />
                <LogoComponent toggle={toggle} />
            </HomePageContainer>
        </GlobalStyledLayout>
    );
}
