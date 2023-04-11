<template>
  <div class="max-w-2xl px-8 mx-auto">
    <div class="bg-white bg-opacity-90 py-8 px-4 rounded">
      <ul class="flex flex-col max-w-lg mx-auto py-8">
        <li class="
            flex
            space-x-4
            my-2
            shadow
            px-4
            py-4
            hover:bg-gray-100 hover:text-gray-700
            bg-white
            text-gray-600
            rounded
          "
        >
          <div class="text-4xl font-bold text-gray-500">1</div>
          <div>
            <h2 class="text-lg font-semibold mb-2">Install your wallet</h2>
            <p class="mb-2">
              Install a SSI wallet or use the EUDI web wallet. Wallets are available for both Android in the Google Play
              Store, and iOS in the Apple AppStore. </p>
            <div class="flex space-x-2 ml-auto justify-end">
              <a href="https://play.google.com/store/apps/details?id=com.validatedid.wallet" target="_blank"
              > <img class="h-8" src="../assets/img/appstore.png"/> </a> <a
              href="https://apps.apple.com/es/app/vidwallet/id1554340592" target="_blank"
            > <img class="h-8" src="../assets/img/appstore-ios.png" target="_blank"
            /> </a>
            </div>
          </div>
        </li>
        <li class="
            flex
            space-x-4
            my-2
            shadow
            px-4
            py-4
            hover:bg-gray-100 hover:text-gray-700
            bg-white
            text-gray-600
            rounded
          "
        >
          <div class="text-4xl font-bold text-gray-500">2</div>
          <div>
            <h2 class="text-lg font-semibold mb-2">
              Request your StudentId and Diploma credential from your home university</h2>
              <p>Go to the portal of your EU university to obtain the StudentId and Diploma credentials into your EUDI wallet</p>
          </div>
        </li>
        <li class="
            flex
            space-x-4
            my-2
            shadow
            px-4
            py-4
            hover:bg-gray-100 hover:text-gray-700
            bg-white
            text-gray-600
            rounded
          "
        >
          <div class="text-4xl font-bold text-gray-500">3</div>
          <div>
            <h2 class="text-lg font-semibold mb-2">Apply for EU Student Enrollment</h2>
            <p class="mb-4">
              Present the required Verifiable Credentials to us to obtain your student enrollment approval.</p>
            <nuxt-link class="
                my-2
                rounded
                px-4
                py-2
                hover:text-gray-700
                bg-gray-300
                text-gray-600
                rounded
              " to="/StudentEnrollment"
            >Apply
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Enrollment',
}
</script>

<style scoped></style>
