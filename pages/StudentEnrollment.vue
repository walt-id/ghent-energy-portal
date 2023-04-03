<template>
<div class="bg-white bg-opacity-90 py-8 px-4 rounded">
  <div class="max-w-3xl mx-auto py-12 bg-white px-8 rounded">
    <h1 class="text-2xl font-bold mb-4">Welcome {{ citizen.firstName }}!</h1>

    <div>
      <div class="text-center"><h2 class="text-lg font-semibold mb-4 mt-2">Scan with your wallet, to claim your energy loan:</h2></div>
      <div class="text-center" :v-show="qr-code-visible">
        <canvas class="mx-auto" :id="'qr-code'" />
        <div class="py-2"><h2 class="text-lg font-semibold mb-4 mt-2">{{$t('ISSUE_TO')}}:</h2></div>
        <div class="text-center small">
          <a :href="walletUrl"><i class="bi bi-app-indicator px-2"></i>{{$t('WALLET_APP')}}</a><br/>
          <a href="#" @click="goToWalletUrl('walt.id')"><span><i class="bi bi-box-arrow-up-right px-2"></i>{{$t("GHENT_PORTAL.WEB_WALLET")}}</span></a>
        </div>
        <button style="background-color: #c01010" class="text-white px-4 py-2 inline-block font-semibold rounded mt-6 text-lg" @click="logout"><i class="bi bi-box-arrow-right"></i> Exit</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import QRious from "qrious"
export default {
  name: 'StudentEnrollment',
  middleware: [ 'portal-login', 'auth' ],
  data() { return {
    walletUrl: null
  }},
	async asyncData ({ $axios, query, $auth }) {
    const citizen = await $axios.$get("/neom/portal/citizen")
    const params = { "walletId": "x-device", "isPreAuthorized": true, "userPin": null }
    const walletUrl = await $axios.$get(`/neom/portal/issue/${citizen.personalIdentifier}/StudentEnrollment`, { params: params })
    return { citizen, walletUrl }
  },
  computed: {
    personalID() {
      return this.citizen.personalIdentifier
    },
  },
  methods: {
    async goToWalletUrl (walletId) {
      const params = { "walletId": walletId, "isPreAuthorized": true, "userPin": null }
      const walletUrl = await this.$axios.$get(`/neom/portal/issue/${this.personalID}/StudentEnrollment?${Object.keys(params)
          .filter(k => params[k] != null)
          .map(k => `${k}=${params[k]}`).join("&")}`)
      window.open(walletUrl)
    },
    logout() {
      this.$auth.logout()
    }
  },
  mounted() {
    new QRious({
        element: document.getElementById('qr-code'),
          value: this.walletUrl,
          size: 300
        })
  }
}
</script>

<style scoped>

</style>
