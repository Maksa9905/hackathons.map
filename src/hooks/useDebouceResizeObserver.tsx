import { useCallback, useEffect, useRef } from 'react'

export const useDebouncedResizeObserver = (
  callback: (entries: ResizeObserverEntry[]) => void,
  delay = 300,
) => {
  const observerRef = useRef<HTMLDivElement | null>(null)
  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const debouncedCallback = useCallback(
    (entries: ResizeObserverEntry[]) => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
      debounceTimeoutRef.current = setTimeout(() => {
        callback(entries)
      }, delay)
    },
    [callback, delay],
  )

  useEffect(() => {
    if (!observerRef.current) return

    const observer = new ResizeObserver(debouncedCallback)
    observer.observe(observerRef.current)

    return () => {
      observer.disconnect()
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
    }
  }, [debouncedCallback])

  return observerRef
}
