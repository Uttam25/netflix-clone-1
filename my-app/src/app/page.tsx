
import styles from './page.module.css'
import Header from '@/components/Header'
import Section from '@/components/HomeSec'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.home}>
        <Header/>
        <Section/>
      </div>
    </main>
  )
}
