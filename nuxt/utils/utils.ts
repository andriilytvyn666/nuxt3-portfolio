export const getLocalizedString = (
  locale: string,
  string: localeString
): string => {
  return locale === 'en' ? string.en : string.uk
}

export const copyToClipboard = (text: string): void => {
  if (process.client) {
    navigator.clipboard.writeText(text)
  }
}

export const getLocalizedFile = (locale: string, about: About): string => {
  if (locale === 'uk') return about.cvUk.asset._ref
  return about.cvEn.asset._ref
}
