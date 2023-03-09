import Image from "next/image";
import Link from "next/link";
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <>
            <div className={styles.footerflex}>
                <div className={styles.footerimg}>
                    <Image
                        src="/formula-1-logo.png"
                        alt="f1-logo"
                        width={280}
                        height={100}
                    />
                </div>
                <div className={styles.footerlist}>
                    <ul>
                        <li>
                            <Image
                                src="/github.png"
                                alt="github-icon"
                                width={512}
                                height={512}
                                />
                        </li>
                        <li>
                            <Image
                                src="/youtube.png"
                                alt="youtube-icon"
                                width={512}
                                height={512}
                                />
                        </li>
                        <li>
                            <Image
                                src="/twitter.png"
                                alt="twitter-icon"
                                width={512}
                                height={512}
                                />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}