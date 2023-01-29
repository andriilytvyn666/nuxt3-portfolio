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
