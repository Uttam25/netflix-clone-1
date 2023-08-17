import React from 'react'
// import Image from 'next/image'
import styles from './Section2.module.css'
import Image from 'next/image'
 

const Section4 = () => {
  return (
    <div className={styles.container2}>
        <div className={styles.left}>
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className={styles.right}>
        <Image
            src="/section4.png"
            alt="carousel Logo"
            className={styles.Card2Logo}
            width={600}
            height={450} 
            />
        </div>
    </div>
  )
}

export default Section4


