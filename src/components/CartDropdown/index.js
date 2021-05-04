import React from 'react';

import CustomButton from '../CustomButton';

import './styles.scss';

export default function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    );
}