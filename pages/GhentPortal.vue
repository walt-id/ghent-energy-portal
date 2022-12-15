<template>
<section class="py-5 text-center container">
  <div>
    <h1>Welcome to Ghent Portal</h1>
    <p>
      <table class="table">
              <tbody>
                <tr v-for="(value, key) in citizen" :key="key">
                  <th scope="row">{{$t("GHENT_PORTAL.CITIZEN." + key)}}</th>
                  <td>{{value}}</td>
                </tr>
              </tbody>
            </table>
    </p>
    <div>
      <button @click="goToWallet('x-device', 'ProofOfResidence')" class="btn btn-primary py-2 px-5">Issue <b>Proof of residence</b> credential</button>
    </div>
    <b-modal id="qr-modal" :static="true" centered>
      <div><b>{{$t('SCAN_TO_ISSUE')}}:</b></div>
      <div class="text-center" :v-show="qr-code-visible">
        <canvas :id="'qr-code'" />
        <div class="py-2"><b>{{$t('ISSUE_TO')}}:</b></div>
        <div class="text-center small">
          <a :href="walletUrl"><i class="bi bi-app-indicator px-2"></i>{{$t('WALLET_APP')}}</a><br/>
          <a @click="goToWallet('walt.id', 'ProofOfResidence')" href="#"><span><i class="bi bi-box-arrow-up-right px-2"></i>{{$t("GHENT_PORTAL.WEB_WALLET")}}</span></a>
        </div>
      </div>
    </b-modal>
  </div>
</section>
</template>
	
<script>
import QRious from "qrious"
export default {
  name: 'GhentPortal',
  middleware: [ 'portal-login', 'auth' ],
  data() { return {
    walletUrl: null
  }},
	async asyncData ({ $axios, query, $auth }) {
    console.log($auth.user.id)
    const citizen = await $axios.$get("/ghent/portal/citizen/"+$auth.user.id)
    return { citizen }
  },
  computed: {
    personalID() {
      return this.citizen.personalIdentifier
    }
  },
  methods: {
    async goToWallet (walletId, type) {
      this.btnLoading = true;
      console.log("Citizen data:", this.citizen)
      const params = { "walletId": walletId, "isPreAuthorized": true, "userPin": null }
      if(walletId != "x-device") {
        window.location = `/ghent/portal/issue/${this.personalID}/${type}?${Object.keys(params)
          .filter(k => params[k] != null)
          .map(k => `${k}=${params[k]}`).join("&")}`
      } else {
        this.btnLoading = false;
        this.$bvModal.show("qr-modal")
        this.walletUrl = await this.$axios.$get(`/ghent/portal/issue/${this.personalID}/${type}`, { params: params })
        new QRious({
        element: document.getElementById('qr-code'),
          value: this.walletUrl,
          size: 300
        })
      }
    },
  }
}
</script>
	
<style scoped>
	
</style>