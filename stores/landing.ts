import { defineStore } from 'pinia'

export const useLandingStore = defineStore('landing', () => {
  const grid = ref<boolean>(false)
  const contactsOpen = ref<boolean>(false)

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

  return {
    grid,
    displayCards,
    displayGrid,
    contactsOpen,
    openContacts,
    closeContacts,
  }
})
