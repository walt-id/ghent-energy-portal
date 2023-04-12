<template>
<div class="bg-white bg-opacity-90 py-8 px-4 rounded">
  <div class="max-w-3xl mx-auto py-12 bg-white px-8 rounded">
    <h1 class="text-2xl font-bold mb-4">Welcome {{ citizen.firstName }}!</h1>
    <p>In order to enroll as a student, you need to present your <b>NEOM ID</b> and the <b>diploma from your EU home university</b>.</p>
    <div class="table">
      <div class="table-cell bg-white bg-opacity-90 py-8 px-4 rounded">
        <div class="flex space-x-4 my-2 shadow px-4 py-4 hover:bg-gray-100 hover:text-gray-700 bg-white text-gray-600 rounded table">
          <div class="table-cell align-middle">
            <h2 class="text-lg font-semibold mb-2">NEOM ID</h2>
          </div>
          <div class="table-cell align-middle">
            <div class="mx-5">
              <i class="bi bi-check-square" style="font-size: 60px; color: green;"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="table-cell bg-white bg-opacity-90 py-8 px-4 rounded">
        <div class="flex space-x-4 my-2 shadow px-4 py-4 hover:bg-gray-100 hover:text-gray-700 bg-white text-gray-600 rounded table">
          <div class="table-cell align-middle">
            <h2 class="text-lg font-semibold mb-2">EU University diploma</h2>
          </div>
          <div class="table-cell align-middle">
            <div class="mx-5">
              <i v-if="citizen.euDiploma" class="bi bi-check-square" style="font-size: 60px; color: green;"></i>
              <i v-else class="bi bi-x-square" style="font-size: 60px; color: red;"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="citizen && !citizen.euDiploma">
      <div class="text-center"><h2 class="text-lg font-semibold mb-4 mt-2">Scan with your wallet, to present your university diploma:</h2></div>
      <div class="text-center" :v-show="qr-code-visible">
        <canvas class="mx-auto" :id="'qr-code'" />
        <div class="py-2"><h2 class="text-lg font-semibold mb-4 mt-2">Present with:</h2></div>
        <div class="text-center small">
          <a :href="diplomaPresentationRequestInfo.url"><i class="bi bi-app-indicator px-2"></i>{{$t('WALLET_APP')}}</a><br/>
          <a href="#" @click="shareDiploma()"><span><i class="bi bi-box-arrow-up-right px-2"></i>{{$t("GHENT_PORTAL.WEB_WALLET")}}</span></a>
        </div>
      </div>
    </div>

    <div v-if="citizen && citizen.euDiploma">
      <div class="text-center"><h2 class="text-lg font-semibold mb-4 mt-2">Scan with your wallet, to claim your student enrollment credential:</h2></div>
      <div class="text-center" :v-show="qr-code-visible">
        <canvas class="mx-auto" :id="'qr-code'" />
        <div class="py-2"><h2 class="text-lg font-semibold mb-4 mt-2">{{$t('ISSUE_TO')}}:</h2></div>
        <div class="text-center small">
          <a :href="walletUrl"><i class="bi bi-app-indicator px-2"></i>{{$t('WALLET_APP')}}</a><br/>
          <a href="#" @click="goToWalletUrl('walt.id')"><span><i class="bi bi-box-arrow-up-right px-2"></i>{{$t("GHENT_PORTAL.WEB_WALLET")}}</span></a>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button style="background-color: #c01010" class="text-white px-4 py-2 inline-block font-semibold rounded mt-6 text-lg" @click="logout"><i class="bi bi-box-arrow-right"></i> Exit</button>
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
    walletUrl: null,
    diplomaPresentationRequestInfo: null
  }},
	async asyncData ({ $axios, query, $auth }) {
    let walletUrl = null
    let diplomaPresentationRequestInfo = null
    const citizen = await $axios.$get("/student/portal/citizen")
    if(citizen.euDiploma) {
      const params = { "walletId": "x-device", "isPreAuthorized": true, "userPin": null }
      walletUrl = await $axios.$get(`/student/portal/issue/${citizen.personalIdentifier}/StudentEnrollment`, { params: params })
    } else {
      diplomaPresentationRequestInfo = await $axios.$get(`/student/portal/shareDiploma/xdevice?webUrl=${window.location.origin}`)
      walletUrl = diplomaPresentationRequestInfo.url
    }
    return { citizen, walletUrl, diplomaPresentationRequestInfo }
  },
  computed: {
    personalID() {
      return this.citizen.personalIdentifier
    },
    webUrl() {
      return window.location.origin
    },
  },
  methods: {
    async goToWalletUrl (walletId) {
      const params = { "walletId": walletId, "isPreAuthorized": true, "userPin": null }
      const walletUrl = await this.$axios.$get(`/student/portal/issue/${this.personalID}/StudentEnrollment?${Object.keys(params)
          .filter(k => params[k] != null)
          .map(k => `${k}=${params[k]}`).join("&")}`)
      window.open(walletUrl)
    },
    logout() {
      this.$auth.logout()
    },
    async shareDiploma() {
      const walletUrl = await this.$axios.$get(`/student/portal/shareDiploma?webUrl=${this.webUrl}&walletId=eudi-wallet`)
      console.log(walletUrl)
      window.location = walletUrl
    }
  },
  mounted() {
    new QRious({
        element: document.getElementById('qr-code'),
          value: this.walletUrl,
          size: 300
        })
    if(!this.citizen.euDiploma) {
      setInterval(async () => {
        const verificationResult = await this.$axios.$get("/student/portal/shareDiploma/isVerified?state="+this.diplomaPresentationRequestInfo.requestId)
        console.log("Verification result", verificationResult)
        if(verificationResult.verified) {
          window.location = verificationResult.url
        }
      }, 2000);
    }
  }
}
</script>

<style scoped>

</style>
