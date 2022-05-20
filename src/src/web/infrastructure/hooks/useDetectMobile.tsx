import React, { useEffect, useState } from 'react';
import detectMobileHelper from '../helpers/detectMobileHelper';

export type useDetectMobileProps = {

}

export const useDetectMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    
    useEffect(() => { 
        const detecteValue = detectMobileHelper();
        setIsMobile(detecteValue);
    }, []);

    return { isMobile };
}
