import React from 'react'
import styles from './Footer.module.css'
import AlertPopUP from './AlertPopUp'
import Link from 'next/link'
import Lang from './Lang'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footer}>
            <div>
                <p className={styles.pass}>Questions? Call 
                <Link href="/AlertPopUP">
                    000-800-919-1694
                    </Link>
               </p>
            </div>
        <div className={styles.info}>
            <p className={styles.pl}><Link href="#"> FAQ</Link></p>
            <p className={styles.pl}><Link href="#"> Media Centre</Link></p>
            <p className={styles.pl}><Link href="#"> Ways to Watch</Link></p>
            <p className={styles.pl}><Link href="#"> Cookie Preferences</Link></p>
            <p className={styles.pl}><Link href="#"> Speed Test</Link></p>                       
            <p className={styles.pl}><Link href="#"> Help Centre</Link></p>
            <p className={styles.pl}><Link href="#"> Investor Relations</Link></p>
            <p className={styles.pl}><Link href="#"> Terms of Use</Link></p>
            <p className={styles.pl}><Link href="#"> Legal Notices</Link></p>
            <p className={styles.pl}><Link href="#"> Corporate Information</Link></p>
            <p className={styles.pl}><Link href="#"> Terms of Use</Link></p>
            <p className={styles.pl}><Link href="#"> Account</Link></p>
            <p className={styles.pl}><Link href="#"> Jobs</Link></p>
            <p className={styles.pl}><Link href="#"> Privacy</Link></p>
            <p className={styles.pl}><Link href="#"> Contact Us</Link></p>
        </div>
        <Lang/>
        <p className={styles.cn}>Netflix India</p>
        </div>
    </div>
  )
}

export default Footer