

import styles from './page.module.css'
import Header from '@/components/Header'
import Section from '@/components/HomeSec'
import Section2 from '@/components/Section2'
import Section3 from  '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Footer from '@/components/Footer'
import {MyComponent} from '@/components/Section6'
import Button from '@/components/Button'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.home}>
        <Header/>
        <Section/>
      </div><hr/> 
      <div>
        <Section2 /><hr/>
        <Section3 /><hr/>
        <Section4 /><hr/>
        <Section5 /><hr/>
        <div className={styles.AccordionPage}>
          <h1 className={styles.topic}>Frequently Asked Questions</h1>
        <MyComponent />
        
        <>
        <div className={styles.faqBottom}>
        <div className={styles.emailSignup}>
                <p className={styles.p}>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="emailInput">
                    <input type="text" placeholder='Email Address' className={styles.email}/>
                    <Button title="Get Started" className={styles.emailButton}/>
                </div>
            </div>
        </div>
        </>
        </div><hr/>
        <Footer />
      </div>
    </main>
  )
}
