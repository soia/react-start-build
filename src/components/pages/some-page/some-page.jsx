import React from 'react';
import { useTranslation } from 'react-i18next';

import style from './some-page.module.scss';

const SomePage = () => {
    const { t } = useTranslation();

    return <div className={style.somePage}>{t('test.somepage')}</div>;
};

export default SomePage;
