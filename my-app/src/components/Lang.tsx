'use client'
import * as React from 'react';
import styles from '@/app/page.module.css'
import Image from 'next/image'


const Lang= () => {

 const [value, setValue] = React.useState('English');

 const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
 };
 return (
 <div className='lang-select'>
     <Image
        src="/globe.svg"
        alt="globe Logo"
        className={styles.globeLogo}
        width={200}
        height={100} 
     />
        <Lang/>
    <label>

        <select value={value} onChange={handleChange}>
            <option lang='en' value="English" className={styles.eng} >English</option>
            <option lang='hi' value="Hindi" className={styles.eng}>Hindi</option>
        </select>
    </label>
   </div>

 );

};

export default Lang;