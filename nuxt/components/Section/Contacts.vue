<template>
  <div class="grid grid-cols-2 gap-5" v-if="renderCondition">
    <CardContact
      :link="getLink(contact)"
      :name="contact.name"
      :logo="contact.logo.asset._ref"
      :contact="contact.contact"
      v-for="contact in contacts"
      :key="contact._id"
    />
  </div>
</template>

<script setup lang="ts">
const query: string = groq`*[_type == "contact"]
{ _id, logo, name, contact, link }`

const { data } = useSanityQuery<Contact[]>(query)
const contacts = data.value
const renderCondition: boolean = contacts !== null && contacts.length > 0

const getLink = (contact: Contact): string => {
  if (contact.link === null) return `mailto:${contact.contact}`
  return contact.link
}
</script>
