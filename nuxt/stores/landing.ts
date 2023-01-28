import { defineStore } from 'pinia'

export const useLandingStore = defineStore('landing', () => {
  const grid = ref<boolean>(false)
  const contactsOpen = ref<boolean>(false)
  const name = ref<string>('name')

  const openContacts = () => {
    contactsOpen.value = true
  }

  const closeContacts = () => {
    contactsOpen.value = false
  }

  const displayGrid = () => {
    grid.value = true
  }
  const displayCards = () => {
    grid.value = false
  }

  const setName = (value: string) => {
    name.value = value
  }

  return {
    grid,
    displayCards,
    displayGrid,
    contactsOpen,
    openContacts,
    closeContacts,
    name,
    setName,
  }
})
