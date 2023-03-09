import Image from "next/image";
import styles from './mainbody.module.scss';

export default function MainBody() {
    return (
        <>
            <div className={styles.mainbodyflex}>
                <div className={styles.topleft}>
                    <h1>Latest Results</h1>
                    <Image
                        src="/test1.png"
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>
                <div className={styles.topright}>
                <h1>Next Race</h1>
                    <Image
                        src="/Bahrain_Circuit.png"
                        alt=""
                        width={1920}
                        height={1080}
                    />

                </div>
                <div className={styles.bottomleft}>
                    {/* <Image
                        src="/test2.png"
                        alt=""
                        width={500}
                        height={500}
                    /> */}
                    <h1>Driver Standings</h1>
                    <table className={styles.driverTable}>
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
                    </table>
                </div>
                <div className={styles.bottomright}>
                <h1>News</h1>
                    <Image
                        src="/test3.png"
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </>
    );
}