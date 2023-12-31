'use client'
import * as React from 'react';
import styles from './lang.module.css'
import Image from 'next/image'


const Lang= () => {

 const [value, setValue] = React.useState('English');

 const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
 };
 return (
 <div className='lang-select'>
    
     <label>
     
        <select value={value} onChange={handleChange} className={styles.select}>
        
        <option lang='en' value="English" className={styles.eng} >English</option>
            <option lang='hi' value="Hindi" className={styles.eng}>Hindi</option>
        </select>
    </label>
   </div>

 );

};

export default Lang;