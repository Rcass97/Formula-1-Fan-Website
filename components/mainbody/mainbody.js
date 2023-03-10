import Image from "next/image";
import styles from './mainbody.module.scss';

export default function MainBody() {
    return (
        <>
            <div className={styles.mainbodyflex}>
                <div className={styles.topleft}>
                    <div className={styles.driverCard}>
                        <Image
                            src="/Driver Headshots/RB_Perez.png"
                            alt=""
                            width={500}
                            height={500}

                        />
                        <div>
                            <p>Sergio</p>
                            <h2><b>Perez</b></h2>
                        </div>
                    </div>
                    <div className={styles.driverCard}>
                        <Image
                            src="/Driver Headshots/RB_Verstappen.png"
                            alt=""
                            width={500}
                            height={500}

                        />
                        <div>
                            <p>Max</p>
                            <h2><b>Verstappen</b></h2>
                        </div>
                    </div>
                    <div className={styles.driverCard}>
                        <Image
                            src="/Driver Headshots/AM_Alonso.png"
                            alt=""
                            width={500}
                            height={500}

                        />
                        <div>
                            <p>Fernando</p>
                            <h2><b>Alsonso</b></h2>
                        </div>
                    </div>
                </div>
                <div className={styles.topright}>
                    <h1>Next Race</h1>
                    <Image
                        src="/Bahrain_Circuit.png"
                        alt=""
                        width={1920}
                        height={1080}
                    />
                    <h1>Bahrain International Grand Prix</h1>

                </div>
                <div className={styles.bottomleft}>
                    <h1>Driver Standings</h1>
                    <table className={styles.driverTable}>
                        <tbody>
                            <tr>
                                <th>Driver</th>
                                <th>Team</th>
                                <th>Points</th>
                            </tr>
                            <tr>
                                <td>Max Verstappen</td>
                                <td>Red Bull Racing</td>
                                <td>25pts</td>
                            </tr>
                            <tr>
                                <td>Sergio Perez</td>
                                <td>Red Bull Racing</td>
                                <td>18pts</td>
                            </tr>
                            <tr>
                                <td>Fernando Alonso</td>
                                <td>Aston Martin Racing</td>
                                <td>15pts</td>
                            </tr>
                            <tr>
                                <td>Carlos Sainz</td>
                                <td>Ferrari</td>
                                <td>12pts</td>
                            </tr>
                            <tr>
                                <td>Lewis Hamilton</td>
                                <td>Mercedes</td>
                                <td>10pts</td>
                            </tr>
                            <tr>
                                <td>Lance Stroll</td>
                                <td>Aston Martin Racing</td>
                                <td>8pts</td>
                            </tr>
                            <tr>
                                <td>George Russell</td>
                                <td>Mercedes</td>
                                <td>6pts</td>
                            </tr>
                            <tr>
                                <td>Valterri Bottas</td>
                                <td>Alfa Romeo</td>
                                <td>4pts</td>
                            </tr>
                            <tr>
                                <td>Pierre Gasly</td>
                                <td>Alpine Racing Team</td>
                                <td>2pts</td>
                            </tr>
                            <tr>
                                <td>Alexander Albon</td>
                                <td>Williams Racing Team</td>
                                <td>1pts</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.bottomright}>
                    <div className={styles.newsItem}>
                        <Image
                            src="/News/Screenshot_1.png"
                            alt=""
                            width={500}
                            height={500}

                        />
                        <div className={styles.cardInfo}>
                            <p>Verstappen hopes Alonso can join the F1 title fight as he says race wins are ‘definitely on the table’ for Aston Martin</p>
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <Image
                            src="/News/Screenshot_2.png"
                            alt=""
                            width={500}
                            height={500}

                        />
                        <div className={styles.cardInfo}>
                            <p>Magnussen ‘pleasantly surprised’ with Haas despite finishing 13th in Bahrain</p>
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <Image
                            src="/News/Screenshot_3.png"
                            alt=""
                            width={500}
                            height={500}

                        />
                        <div className={styles.cardInfo}>
                            <p>‘This is just the beginning’ – Alonso warns there is ‘more to come’ from himself and Aston Martin after Bahrain podium</p>
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <Image
                            src="/News/Screenshot_4.png"
                            alt=""
                            width={500}
                            height={500}

                        />
                        <div className={styles.cardInfo}>
                            <p>HINCH’S HEROES: Who starred under the lights at the 2023 season opener in Bahrain?</p>
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <Image
                            src="/News/Screenshot_5.png"
                            alt=""
                            width={500}
                            height={500}

                        />
                        <div className={styles.cardInfo}>
                            <p>Alfa Romeo's Zhou pleased with the 'potential in the car' despite 'unlucky' P16 finish in Bahrain</p>
                        </div>
                    </div>
                    <div className={styles.newsItem}>
                        <Image
                            src="/News/Screenshot_6.png"
                            alt=""
                            width={500}
                            height={500}

                        />
                        <div className={styles.cardInfo}>
                            <p>PALMER: A win for Alonso in 2023? I wouldn’t bet against it after his Bahrain masterclass</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}