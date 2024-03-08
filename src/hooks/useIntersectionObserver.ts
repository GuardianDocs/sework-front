import { useCallback, useEffect, useState } from 'react';

type useIntersectionObserverTypes = {
  freezeOnceVisible?: boolean;
} & IntersectionObserverInit;

export const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: useIntersectionObserverTypes) => {
  const [ref, setRef] = useState<HTMLElement | null | undefined>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(!!ref);

  const isVisible = isIntersecting;
  const frozen = isIntersecting && freezeOnceVisible;

  const onIntersect = useCallback(([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      setIsIntersecting(true);
      observer.observe(entry.target);
    } else {
      setIsIntersecting(false);
    }
  }, []);

  useEffect(() => {
    if (frozen || !ref) return;

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });
    observer.observe(ref);

    return () => observer.disconnect();
  }, [isVisible, ref]);

  return { setRef, isVisible };
};
