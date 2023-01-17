<template>
<div class="max-w-4xl px-8 mx-auto text-gray-700">
  <div class="fixed inset-0 -z-10 bg-image">
  </div>
  <div class="flex h-16 items-center mt-8 mb-4">
    <img class="object-contain h-16" src="../assets/img/logo.png" />
    <h1 class="text-4xl font-bold">Citizen Energy Portal</h1>
  </div>
  <nav class="mb-4">
    <ul class="flex space-x-4 text-semibold">
      <li class="underline bg-white bg-opacity-95 px-4 py-2">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="underline bg-white bg-opacity-95 px-4 py-2">
        <nuxt-link to="/Energielening">Energielening aanvragen</nuxt-link>
      </li>
    </ul>
  </nav>
  <Nuxt class="h-100" />
</div>
</template>
<script>
export default {
  name: "default",
  computed: {
    availableLocales () {
      console.log("locales", this.$i18n.locales)
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
<style>
.bg-image {
  background-image: url(../assets/img/bg.jpg);
  background-size: cover;
}
</style>