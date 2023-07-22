import { useRef, useEffect } from 'react'

export function usePrevious<Type>(state: Type): Type | undefined {
  const ref = useRef<Type | undefined>()

  useEffect((): void => {
    ref.current = state
  }, [state])

  return ref.current
}
