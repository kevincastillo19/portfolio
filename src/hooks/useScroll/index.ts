import { useState, useEffect, useRef, RefObject } from 'react'

export default function useScroll() {
    
    const scrollTo = (section: RefObject<HTMLHeadingElement>) => {
        const scrollArgs: ScrollIntoViewOptions = {
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
        }
        section.current?.scrollIntoView(scrollArgs)
    }

    return { scrollTo }
}
