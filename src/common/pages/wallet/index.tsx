import { FC } from 'react';
import styles from './index.module.css';
import { Card } from '../../components/card';
import { useAppSelector } from '../../store';
import { FaRubleSign } from 'react-icons/fa';
import ton from '../../../../public/assets/images/ton.svg';
import cny from '../../../../public/assets/images/cny.svg';
import usdt from '../../../../public/assets/images/usdt.svg';
import { useTranslation } from 'react-i18next';
import { convert, formatNumber, getTotalBalance } from './helper.ts';
import { useSetPage } from '../../hooks/use-set-page.hook.ts';
import { AddMoneyPage } from '../add-money-page';

export const Wallet: FC = () => {
    const { t } = useTranslation();
    const balanceAccount = useAppSelector((state) => state.user.balanceAccount)!;
    const currencyPrice = useAppSelector((state) => state.app.settings?.currencyPrice)!;
    const setPage = useSetPage();

    const onMoneyPage = () => {
        setPage(<AddMoneyPage />);
    };

    return (
        <div className={styles.background}>
            <div className={styles.div01}>
                {formatNumber(getTotalBalance(balanceAccount, t('t11'), currencyPrice), t('t10'))}
            </div>
            <Card>
                <div className={styles.div0}>
                    <div className={styles.div1}>
                        <div className={styles.div2} style={{ backgroundColor: '#800000' }}>
                            <FaRubleSign className={styles.div3} />
                        </div>
                        <div className={styles.div4}>
                            <div className={styles.div5}>
                                <div className={styles.div6}>{t('t8')}</div>
                                <div className={`${styles.div6} ${styles.div8}`}>
                                    {formatNumber(balanceAccount.rub, t('t10'))}
                                </div>
                            </div>
                            <div className={styles.div5}>
                                <div className={styles.div7}>
                                    {formatNumber(convert(1, 'rub', t('t11'), currencyPrice), t('t10'))}
                                </div>
                                <div className={`${styles.div7} ${styles.div8}`}>
                                    {formatNumber(
                                        convert(balanceAccount.rub, 'rub', t('t11'), currencyPrice),
                                        t('t10'),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.div2} style={{ backgroundColor: 'red' }}>
                            <img src={cny} className={styles.div3} alt={'icon'} />
                        </div>
                        <div className={styles.div4}>
                            <div className={styles.div5}>
                                <div className={styles.div6}>{t('t9')}</div>
                                <div className={`${styles.div6} ${styles.div8}`}>
                                    {formatNumber(balanceAccount.cny, t('t10'))}
                                </div>
                            </div>
                            <div className={styles.div5}>
                                <div className={styles.div7}>
                                    {formatNumber(convert(1, 'cny', t('t11'), currencyPrice), t('t10'))}
                                </div>
                                <div className={`${styles.div7} ${styles.div8}`}>
                                    {formatNumber(
                                        convert(balanceAccount.cny, 'cny', t('t11'), currencyPrice),
                                        t('t10'),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.div2} style={{ backgroundColor: 'var(--color-5)' }}>
                            <img src={ton} className={styles.div3} alt={'icon'} />
                        </div>
                        <div className={styles.div4}>
                            <div className={styles.div5}>
                                <div className={styles.div6}>TON</div>
                                <div className={`${styles.div6} ${styles.div8}`}>
                                    {formatNumber(balanceAccount.ton, t('t10'))}
                                </div>
                            </div>
                            <div className={styles.div5}>
                                <div className={styles.div7}>
                                    {formatNumber(convert(1, 'the-open-network', t('t11'), currencyPrice), t('t10'))}
                                </div>
                                <div className={`${styles.div7} ${styles.div8}`}>
                                    {formatNumber(
                                        convert(balanceAccount.ton, 'the-open-network', t('t11'), currencyPrice),
                                        t('t10'),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.div2} style={{ backgroundColor: '#00b386' }}>
                            <img src={usdt} className={styles.div3} alt={'icon'} />
                        </div>
                        <div className={styles.div4}>
                            <div className={styles.div5}>
                                <div className={styles.div6}>USDT (TON)</div>
                                <div className={`${styles.div6} ${styles.div8}`}>
                                    {formatNumber(balanceAccount.tonUsdt, t('t10'))}
                                </div>
                            </div>
                            <div className={styles.div5}>
                                <div className={styles.div7}>
                                    {formatNumber(convert(1, 'usd', t('t11'), currencyPrice), t('t10'))}
                                </div>
                                <div className={`${styles.div7} ${styles.div8}`}>
                                    {formatNumber(
                                        convert(balanceAccount.tonUsdt, 'usd', t('t11'), currencyPrice),
                                        t('t10'),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card onClick={onMoneyPage}>
                <div className={styles.div20}>{t('t12')}</div>
            </Card>
        </div>
    );
};
