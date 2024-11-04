import cx from 'classnames';
import styles from './hero.module.scss';

export interface HeroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Hero = ({ className }: HeroProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <div className={styles['hero-image']}>
                <div className={styles['content-box']}>
                    <h1 className={styles.title}>NOMAD 13EAU DE PARFUM</h1>
                    <p className={styles.description}>Discover the original fragrance</p>
                    <div className={styles.div1}>
                        <button className={styles['explore-button']}>Explore</button>
                    </div>
                </div>
                <div className={styles['image-box']}>
                    <img
                        src="https://static.wixstatic.com/media/84770f_e9c16251453b45e785c4c7d16f27b2c7~mv2.jpg/v1/fill/w_1728,h_1896,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/new%20welcome.jpg"
                        alt="Delicious Margherita Pizza"
                        className={styles.img}
                    />
                </div>
            </div>
        </div>
    );
};
