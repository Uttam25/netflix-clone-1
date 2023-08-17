import styles from './header.module.css'
import React from 'react'
import Image from 'next/image'
import Lang from './Lang'
import Button from './Button'

 const  Header=()=> {
    return (
        <div className={styles.header}>
            <nav className={styles.nav}>
                <Image
                    src="/logo.svg"
                    alt="Netflix Logo"
                    className={styles.netflixLogo}
                    width={250}
                    height={100} />
            <div className={styles.hRight}>
                <Lang/>
                <Button title="Sign in" className={styles.signIn}/>
            </div>
            </nav>
        </div>
    )
}

export default Header