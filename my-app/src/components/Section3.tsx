import React from 'react'
// import Image from 'next/image'
import styles from './Section2.module.css'
import Image from 'next/image'
 

const Section3 = () => {
  return (
    <div className={styles.container2}>
        <div className={styles.right}>
        <Image
            src="/Section3.png"
            alt="carousel Logo"
            className={styles.Card2Logo}
            width={600}
            height={450} 
            />
        </div>
        <div className={styles.left}>
            <h1>Download your shows to watch offline</h1>
            <p>Save your favourites easily and always have something to watch.</p>
        </div>
        
    </div>
  )
}

export default Section3


