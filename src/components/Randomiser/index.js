'use client'

import Button from '../Button'
import styles from '../Button/index.module.css'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

export default function Randomiser() {
    const router = useRouter();
    const randomiserLinks = [
        "/project-one",
        "/project-two",
        "/project-three",
        "/project-four"
    ]
    const randomIndex = Math.floor(Math.random() * randomiserLinks.length);
    const onRandomise = useCallback(() => router.push("/project-two"), [randomiserLinks, randomIndex]);
    return <a className={`${styles.button} ${styles.buttonSecondary}`} style={{cursor:"pointer"}} onClick={onRandomise}>Randomiser</a>
}