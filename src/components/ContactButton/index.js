'use client'

import Link from 'next/link';
import styles from './index.module.css'
import Button from '../Button';
import { useCallback } from 'react';

const ContactButton = () => {
    const onClick = useCallback (()=> {console.log("clicked")}, [])
    return <Button type="primary" label="Let's Chat" href="mailto:natalie@superwatermelon.com?subject=Hello Natalie, I've been sent from your website" onClick={onClick}/>
}

export default ContactButton;