import React from 'react';
import style from './field.module.scss';

const Field = props => {
    // eslint-disable-next-line react/prop-types
    const { id, labelText, type, placeholder, value, onChange, name, maxLength, error, inputStyle, labelStyle } = props;

    return (
        <div className={style.inputWrapper}>
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label className={labelStyle} htmlFor={id}>
                {labelText}
            </label>
            <input
                id={id}
                type={type}
                className={inputStyle}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                maxLength={maxLength}
                autoComplete="new-password"
            />
            {error ? <div className={style.inputWrapper__invalid}>{error}</div> : null}
        </div>
    );
};

export default Field;
