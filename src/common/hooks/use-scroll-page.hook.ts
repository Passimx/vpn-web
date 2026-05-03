import styles from '../components/pages/index.module.css';

export const useScrollPage = () => {
    return () => {
        const element = document.getElementById(styles.background)!;
        element.scrollTo({ left: element.scrollLeft - element.clientWidth + 8, behavior: 'smooth' });
    };
};
