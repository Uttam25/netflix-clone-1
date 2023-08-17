import React from 'react'
import styles from './AlertPopUp.module.css'
const AlertPopUp = () => {
  return (
    <div className={styles.container}>
        <h1>Open Pick an app?</h1>
        <p>https://www.netflix.com wants to open this application.</p>
        <label>
            <input type="checkbox" id="myCheckbox"/>Always allow www.netflix.com to open links of this type in associated app.
        </label>
        <div>
            <button className={styles.left}>open pick an app</button>
            <button className={styles.right}>cancel</button>
        </div>
    </div>
  )
}

export default AlertPopUp