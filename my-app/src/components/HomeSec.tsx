import React from 'react'
import styles from './HomeSec.module.css'
import Button from './Button'

const Section = () => {
  return (
    <>
        <section className={styles.section}>
            <h1 className={styles.h1}>Unlimited Movies,TV Shows and more</h1>
            <p className={styles.p}>Watch anywhere. Cancel anytime.</p>
            <div className={styles.emailSignup}>
                <p className={styles.p}>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="emailInput">
                    <input type="text" placeholder='Email Address' className={styles.email}/>
                    <Button title="Get Started" className={styles.emailButton}/>
                </div>
            </div>
        </section>
        <section className=''></section>
    </>
  )
}

export default Section