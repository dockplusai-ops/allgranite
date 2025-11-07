import React, { useEffect, useRef, useState } from 'react'

const LazySection = ({ render, fallbackHeight = '320px', rootMargin = '0px 0px 200px 0px' }) => {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={containerRef} className="w-full">
      {isVisible ? (
        typeof render === 'function' ? render() : null
      ) : (
        <div style={{ minHeight: fallbackHeight }} className="w-full bg-cream/30 animate-pulse" aria-hidden="true" />
      )}
    </div>
  )
}

export default LazySection
