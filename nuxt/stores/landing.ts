import { defineStore } from 'pinia'

export const useLandingStore = defineStore('landing', () => {
  const grid = ref<boolean>(false)
  const contactsOpen = ref<boolean>(false)
  const name = ref<string>('name')

  const about = ref<About>({
    _id: 'stub',
    description: { en: 'stub', uk: 'stub' },
    location: { en: 'stub', uk: 'stub' },
    name: { en: 'stub', uk: 'stub' },
    cvEn: {
      asset: {
        _ref: 'stub',
      },
    },
    cvUk: {
      asset: {
        _ref: 'stub',
      },
    },
    photo: {
      asset: {
        _ref: 'stub',
      },
    },
    locationFlag: {
      asset: {
        _ref: 'stub',
      },
    },
    dreyfus: {
      asset: {
        _ref: 'stub',
      },
    },
  })

  const getAbout = computed(() => about)

  const fetchAbout = async () => {
    const query: string = groq`*[_type == "about"][0]
    {_id, photo, name, location, locationFlag, description, dreyfus, cvEn, cvUk }`

    const { data } = await useSanityQuery<About>(query)
    about.value = data.value!
  }

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
    about,
    getAbout,
    fetchAbout,
  }
})
