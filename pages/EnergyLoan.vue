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
          <a :href="goToWalletUrl('walt.id')" target="_blank"><span><i class="bi bi-box-arrow-up-right px-2"></i>{{$t("GHENT_PORTAL.WEB_WALLET")}}</span></a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
	
<script>
import QRious from "qrious"
export default {
  name: 'EnergyLoan',
  middleware: [ 'portal-login', 'auth' ],
  data() { return {
    walletUrl: null
  }},
	async asyncData ({ $axios, query, $auth }) {
    //$auth.setUser({id: "0904008084H"})
    console.log($auth.user.id)
    const citizen = await $axios.$get(`/ghent/portal/citizen/${$auth.user.id}`)
    const params = { "walletId": "x-device", "isPreAuthorized": true, "userPin": null }
    const walletUrl = await $axios.$get(`/ghent/portal/issue/${citizen.personalIdentifier}/EnergyLoan`, { params: params })
    return { citizen, walletUrl }
  },
  computed: {
    personalID() {
      return this.citizen.personalIdentifier
    },
  },
  methods: {
    goToWalletUrl (walletId) {
      const params = { "walletId": walletId, "isPreAuthorized": true, "userPin": null }
      return `/ghent/portal/issue/${this.personalID}/EnergyLoan?${Object.keys(params)
          .filter(k => params[k] != null)
          .map(k => `${k}=${params[k]}`).join("&")}`
    },
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