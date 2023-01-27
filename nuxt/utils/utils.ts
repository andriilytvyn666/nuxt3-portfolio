export const getLocalizedString = (
  locale: string,
  string: localeString
): string => {
  console.log(locale === 'en' ? string.en : string.uk)
  return locale === 'en' ? string.en : string.uk
}
