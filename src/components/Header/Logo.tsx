import React, { FC } from 'react';

interface LogoProps {
    img: string;
    height: string;
    width: string;
    alt: string;
}

const Logo: FC<LogoProps> = ({ img, height, width, alt }) => {
    return (
        <div className="logo">
            <img style={{ height, width }} className="logo__img" src={img} alt={alt} />
        </div>
    );
};

export default Logo;
