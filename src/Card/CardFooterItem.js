import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('card__footer__item', className);

    return (
        <section className={classes} {...attributes}>
            {children}
        </section>
    );
}

Item.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Item;