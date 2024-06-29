'use client'

import Link from 'next/link';
import styles from './index.module.css'
import Button from '../Button';
import { useCallback, useState } from 'react';

const ContactButton = () => {
    const [clickState, setClickState] = useState(false)
    const [messageState, setMessageState] = useState(false)
    const onClick = useCallback (()=> {
        setClickState(true)
        writeClipboardText("natalie@superwatermelon.com").then(()=> {
            setMessageState(true)
        })
    }, [])
    if (clickState) {
        return (
            <div className={styles.contactContainer}>
                <Button type="secondary" label="natalie@superwatermelon.com"/>
                {messageState && (
                    <div className={styles.copied}>Copied!</div>
                )}
            </div>
        )
        
    }
    else {
        return <Button type="primary" label="Let's Chat" href="mailto:natalie@superwatermelon.com?subject=Hello Natalie, I've been sent from your website" onClick={onClick}/>
    } 
}

async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }
  


export default ContactButton;