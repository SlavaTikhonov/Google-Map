import React from 'react';
import './Loader.scss';

export const Loader = () => {
    return (
        <div className={'lds-wrapper'}>
            <div className={'lds-ellipsis'}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
};





