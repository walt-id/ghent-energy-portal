<template>
  <div class="max-w-2xl px-8 mx-auto">
    <div class="bg-white bg-opacity-90 py-8 px-4 rounded">
      <ul class="flex flex-col max-w-lg mx-auto py-8">
        <li
          class="
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
              Find VIDwallet in GooglePlay just clicking on VIDwallet icon. The
              application is available for Android in the Play Store and for iOS
              in the App Store.
            </p>
            <div class="flex space-x-2 ml-auto justify-end">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.validatedid.wallet"
              >
                <img src="../assets/img/appstore.png" class="h-8" />
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/es/app/vidwallet/id1554340592"
              >
                <img
                  src="../assets/img/appstore-ios.png"
                  class="h-8"
                  target="_blank"
                />
              </a>
            </div>
          </div>
        </li>
        <li
          class="
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
              Request your VerifiableID at BOSA
            </h2>
            <p class="mb-4">
              BOSA can issue you your VerifiableID.
            </p>
            <a
              href="https://bosa.walt-test.cloud/GhentSignup"
              class="
                my-2
                rounded
                px-4
                py-2
                hover:text-gray-700
                bg-gray-300
                text-gray-600
                rounded
              "
              target="_blank"
              >Request</a
            >
          </div>
        </li>
        <li
          class="
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
            <h2 class="text-lg font-semibold mb-2">
              Request your Verifiable Credentials at the Federal Portal
            </h2>
            <p class="mb-4">
              BOSA lets you obtain verifiable credentials from federal government services. You
              can authenticate with your VerifiableID.
            </p>
            <a
              href="https://bosa.walt-test.cloud/GhentPortal"
              class="
                my-2
                rounded
                px-4
                py-2
                hover:text-gray-700
                bg-gray-300
                text-gray-600
                rounded
              "
              target="_blank"
              >Request</a
            >
          </div>
        </li>
        <li
          class="
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
          <div class="text-4xl font-bold text-gray-500">4</div>
          <div>
            <h2 class="text-lg font-semibold mb-2">
              Request your OCMWConfirmationDebtMediation at Social Welfare
            </h2>
            <p class="mb-4">
              At Social Welfare you can obtain your OCMWConfirmationDebtMediation verifiable
              credential. You can authenticate with your VerifiableID.
            </p>
            <a
              href="#"
              class="
                my-2
                rounded
                px-4
                py-2
                hover:text-gray-700
                bg-gray-300
                text-gray-600
                rounded
              "
              target="_blank"
              >Request</a
            >
          </div>
        </li>
        <li
          class="
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
          <div class="text-4xl font-bold text-gray-500">6</div>
          <div>
            <h2 class="text-lg font-semibold mb-2">Request your Energy Loan</h2>
            <p class="mb-4">
              Present the required verifiable credentials to us to obtain your Energy Loan approval.
            </p>
            <nuxt-link
              to="/EnergyLoan"
              class="
                my-2
                rounded
                px-4
                py-2
                hover:text-gray-700
                bg-gray-300
                text-gray-600
                rounded
              "
              >Request</nuxt-link
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Energielening",
};
</script>

<style scoped>
</style>
