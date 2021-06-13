import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Tooltip } from 'antd';
import styles from '../../../styles/SwitchLanguageButton.module.scss';
import 'antd/es/tooltip/style/index.css';

function SwitchLanguageButton() {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <Link href="/" locale={router.locale === 'en' ? 'vi' : 'en'}>
      <Tooltip className="tooltip" placement="right" title={t('switch-lang')}>
        <button className={styles.single} type="button">
          <Image className={styles.flag} src={router.locale === 'vi' ? '/images/english.png' : '/images/vietnamese.png'} width={45} height={45} layout="intrinsic" />
        </button>
      </Tooltip>
    </Link>
  );
}

export default SwitchLanguageButton;
