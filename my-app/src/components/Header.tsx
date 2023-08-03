import styles from './header.module.css'
import React from 'react'
import Image from 'next/image'
import Lang from './Lang'
import Button from './Button'

 const  Header=()=> {
    return (
        <div>
            <nav>
                <Image
                    src="/logo.svg"
                    alt="Netflix Logo"
                    className={styles.netflixLogo}
                    width={200}
                    height={100} />
                <Lang/>
                
                   {/* <button className={styles.button}>
                    <Button title="Sign in" className='sign-button' />
                </button> */}
                <Button title="Sign in" className={styles.signIn}/>
                
            </nav>
        </div>
    )
}

export default Header