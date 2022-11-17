import { EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'
/**
 *
 * @use when you need to support RTL by MUI & Emotion
 *
 */
export default function createEmotionCache (): EmotionCache {
  return createCache({ key: 'css', prepend: true })
}
