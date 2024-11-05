import React from 'react';
import classes from './route.module.scss';
import classNames from 'classnames';
export default function Client() {
    return (
        <div>
            <div className={classes['hero-image']}>
                <div className={classes['image-box']}>
                    <img
                        src="https://static.wixstatic.com/media/11062b_5d0df61ab000432d9ebcccc70a0bfc43~mv2.jpeg/v1/fit/w_640,h_640/Soap Store Customer.jpeg"
                        alt="Delicious Margherita Pizza"
                        className={classes.img}
                    />
                </div>
                <div className={classes['content-box']}>
                    <h1 className={classes.title}>The ReClaim Mission</h1>
                    <p className={classes.description}>
                        We believe in ethical and smart shopping. All of our products are carefully
                        selected to ensure they align with our core values.
                    </p>
                    <div>
                        <button className="button primaryButton">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className={classes.clientsSection}>
                <div className={classes.clientsLogosGrid}>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_5c720747d7354dba80018d7d997449dc.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_2166ae7dd24f43b5b5d81b82723fb514.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_8578952f0104450ab6439b62e80a4e94.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_b38de69a8fef47a4a7b4352eb614e56c.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_6f586dc3ae5c401f94331b8f43d80207.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                    <div className={classes.clientLogoContainer}>
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_933967ebc7324eb1937d9d86b71dc875.svg"
                            alt=""
                            className={classes.clientLogo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
