'use client'
import styles from '../Button/index.module.css'

import {useCallback, useMemo, useState} from 'react'
import {usePathname, useRouter} from 'next/navigation'

export default function Randomiser({ links }) {
    const router = useRouter();
    const currentLink = usePathname();
    const [lastLink, setLastLink] = useState(null);
    const activeLinks = useMemo(() => {
      return links
        .filter(link => currentLink !== link)
        .filter(link => lastLink !== link);
    }, [links, currentLink, lastLink]);
    const onRandomise = useCallback(() => {
      const link = activeLinks[randomIndexOf(activeLinks)];
      router.push(link);
      setLastLink(link);
    }, [router, activeLinks, setLastLink]);
    return <a className={`${styles.button} ${styles.buttonSecondary}`} style={{cursor:"pointer"}} onClick={onRandomise}>Randomiser</a>
}

function randomIndexOf(links) {
  return Math.floor(Math.random() * links.length);
}
