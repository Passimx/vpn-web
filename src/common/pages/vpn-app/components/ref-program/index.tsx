import { FC, useEffect, useState } from 'react';
import styles from './index.module.css';
import { PageTitle } from '../../../../components/page-title';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../../components/card';
import { useShortText } from '../../../../hooks/use-short-text.hook.ts';
import { RotateLoading } from '../../../../components/rotate-loading';
import { getRefRating } from '../../../../api/users';
import { RatingUserType } from '../../../../types/api/rating.ts';
import { CopyText } from '../../../../components/copy-text';
import { useAppSelector } from '../../../../store';

export const RefProgram: FC = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<RatingUserType>();
    const shortText = useShortText;
    const userId = useAppSelector((state) => state.user.id);

    useEffect(() => {
        const getRating = async () => {
            const result = await getRefRating();
            if (!result.success) return;

            setData(result.data);
        };

        getRating();
    }, []);

    return (
        <div className={styles.background}>
            <PageTitle title={t('ref_program')} />
            <Card>
                <div>{t('t7')}</div>
            </Card>
            {data?.users?.length ? (
                <div className={styles.div0}>
                    <div className={styles.div1}>
                        <div className={styles.div2}>{t('t4')}</div>
                        <Card>
                            <div className={styles.div4}>
                                {data.users.map(({ id, allCount, activeCount }) => (
                                    <div
                                        key={id}
                                        className={styles.div5}
                                        style={data.me.id === id ? { backgroundColor: 'silver' } : {}}
                                    >
                                        <div className={styles.div6}>{shortText(id)}</div>
                                        <div className={styles.div7}>
                                            <div></div>
                                            <div className={`${styles.div8} ${styles.div11}`}>{activeCount}</div>
                                            <div className={`${styles.div8} ${styles.div12}`}>{allCount}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.div2}>{t('t6')}</div>
                        <Card className={styles.div11}>
                            <div className={styles.div3}>{data.me.activeCount}</div>
                        </Card>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.div2}>{t('t3')}</div>
                        <Card className={styles.div12}>
                            <div className={styles.div3}>{data.me.allCount}</div>
                        </Card>
                    </div>
                </div>
            ) : (
                <RotateLoading />
            )}
            <div className={styles.div1}>
                <div className={styles.div2}>{t('t5')}</div>
                <Card>
                    <CopyText text={`https://t.me/passimx_vpn_bot?start=${userId}`} />
                </Card>
            </div>
        </div>
    );
};
