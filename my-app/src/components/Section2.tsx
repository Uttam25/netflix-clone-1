import React from 'react'
import styles from './Section2.module.css'
import Image from 'next/image'
 

const Section2 = () => {
  return (
    <div className={styles.container2}>
        <div className={styles.left}>
            <h1>Enjoy on your TV</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className={styles.right}>
        <Image
            src="/section2.png"
            alt="carousel Logo"
            className={styles.Card2Logo}
            width={600}
            height={450} 
            />
        </div>
    </div>
  )
}

export default Section2


