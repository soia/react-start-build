import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import style from './some-view.module.scss';

import noImage from '../images/noImage.png';

const SomeView = ({ training }) => {
    const { t } = useTranslation();

    return (
        <div className={style.wrappper}>
            <div className={style.somePage}>{t('test.somepage')}</div>
            {training.map(item => {
                const { id, number, description, img } = item;
                return (
                    <div className={style.wrappper__item} key={id}>
                        <img src={img || noImage} alt={id} />
                        <p>{number}</p>
                        <div>{description}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default SomeView;

SomeView.defaultProps = {
    training: []
};

SomeView.propTypes = {
    training: PropTypes.instanceOf(Array)
};
