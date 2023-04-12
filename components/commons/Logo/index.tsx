import React, { AnchorHTMLAttributes } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import LogoIcon from 'public/logo.svg';
import cn from 'classnames';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {

}

const Logo: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <Link className={cn(styles.logo, className)}
              href={'/'}
              {...props}
        >
            <h1 title={'Markdown'}>
                <LogoIcon />
            </h1>
        </Link>
    );
};

export default Logo;
