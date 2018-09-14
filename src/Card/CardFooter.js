import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Item from './CardFooterItem';

const Footer = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('card__footer', className);

    return (
        <footer className={classes} {...attributes}>
            {children}
        </footer>
    );
}

Footer.Item = Item;

Footer.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Footer;