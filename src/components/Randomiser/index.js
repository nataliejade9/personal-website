'use client'

import Button from '../Button'
import styles from '../Button/index.module.css'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

export default function Randomiser({ links }) {
    const router = useRouter();
    const randomIndex = Math.floor(Math.random() * links.length);
    const onRandomise = useCallback(() => router.push(links[randomIndex]), [links, randomIndex]);
    return <a className={`${styles.button} ${styles.buttonSecondary}`} style={{cursor:"pointer"}} onClick={onRandomise}>Randomiser</a>
}