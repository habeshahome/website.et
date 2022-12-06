import { useInView } from 'react-intersection-observer'

export const { ref } = useInView({
  triggerOnce: true,
  rootMargin: '-100px 0',
  onChange: (inView) => {
    if (inView) {
      // Fire a tracking event to your tracking service of choice.
      // dataLayer.push('Section shown') // Here's a GTM dataLayer push
    }
  }
})
