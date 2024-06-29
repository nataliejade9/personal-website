'use client'

import Link from 'next/link';
import styles from './index.module.css'
import Button from '../Button';
import { useCallback, useState } from 'react';

const ContactButton = () => {
    const [clickState, setClickState] = useState(false)
    const onClick = useCallback (()=> {
        setClickState(true)
    }, [])
    if (clickState) {
        return <Button type="secondary" label="natalie@superwatermelon.com"/>
    }
    else {
        return <Button type="primary" label="Let's Chat" href="mailto:natalie@superwatermelon.com?subject=Hello Natalie, I've been sent from your website" onClick={onClick}/>
    }
    
}


export default ContactButton;