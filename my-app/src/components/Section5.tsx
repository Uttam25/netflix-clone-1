import React from 'react'
// import Image from 'next/image'
import styles from './Section2.module.css'
import Image from 'next/image'
 

const Section5 = () => {
  return (
    <div className={styles.container2}>
        <div className={styles.right}>
        <Image
            src="/section5.png"
            alt="carousel Logo"
            className={styles.Card2Logo}
            width={600}
            height={450} 
            />
        </div>
        <div className={styles.left}>
            <h1>Create profiles for kids</h1>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
    </div>
  )
}

export default Section5


