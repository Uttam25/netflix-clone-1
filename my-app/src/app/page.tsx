
import Accordion from '@/components/Accordion'
import styles from './page.module.css'
import Header from '@/components/Header'
import Section from '@/components/HomeSec'
import Section2 from '@/components/Section2'
import Section3 from  '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Footer from '@/components/Footer'

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
        <Accordion sections={undefined} /><hr/>
        <Footer />
      </div>
    </main>
  )
}
