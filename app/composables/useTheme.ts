import { computed } from 'vue'

export const useTheme = () => {
  // Use Nuxt's useCookie to persist the theme across requests.
  // Using a cookie allows Nuxt SSR to inject the correct CSS class ('dark')
  // on the server before sending the HTML, preventing flash of unstyled content.
  const themeSetting = useCookie<'light' | 'dark'>('app-theme', {
    default: () => 'light', // Default theme is light
    path: '/',
    sameSite: 'lax'
  })

  const toggleTheme = () => {
    themeSetting.value = themeSetting.value === 'dark' ? 'light' : 'dark'
  }

  const isDark = computed(() => themeSetting.value === 'dark')

  return {
    theme: themeSetting,
    isDark,
    toggleTheme
  }
}
