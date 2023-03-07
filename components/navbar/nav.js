import Image from "next/image";
import Link from "next/link";
import styles from './navbar.module.scss';

export default function Navbar() {
    return (
        <>
            <div className={styles.navbarflex}>
                <div className={styles.navbarimg}>
                    <Image
                        src="/formula-1-logo-7.png"
                        alt="f1-logo"
                        width={280}
                        height={70}
                    />
                </div>
                <div className={styles.navbarlist}>
                    <ul>
                        <li><Link href={'/schedule'}>Schedule</Link></li>
                        <li>Standings</li>
                        <li>Teams</li>
                    </ul>
                </div>
            </div>
        </>
    );
}