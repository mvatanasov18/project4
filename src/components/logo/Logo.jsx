import styles from './Logo.module.scss';
import React from 'react';
import classNames from 'classnames';

export default function Logo({type}){
return (
<img
 className={classNames(styles['logo-container'])}
 src={ type === 'default' ? "/images/logo.svg" : "/images/logo-muted.svg"}
  alt="logo-image"/>)
}

Logo.defaultProps = {
    type: 'default'
}