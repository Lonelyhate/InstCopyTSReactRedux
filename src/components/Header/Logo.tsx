import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    img: string;
    heightLogo: string;
    widthLogo: string;
    alt: string;
}

const Logo: FC<LogoProps> = ({ img, alt, widthLogo, heightLogo }) => {
    
    return (
        <div className="logo">
            <Link to="/">
                <img style={{ width: widthLogo, height: heightLogo }} className="logo__img" src={img} alt={alt} />
            </Link>
        </div>
    );
};

export default Logo;
