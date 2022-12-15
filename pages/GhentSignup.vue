<template>
  <div>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-normal">
            {{$t('GHENT_PORTAL.SIGNUP.CLAIM_VERIFIABLE_ID')}}
          </h1>
          <div v-if="!citizenData">
            <span>{{$t("GHENT_PORTAL.SIGNUP.ENTER_PERSONAL_ID")}}</span>
            <input type="text" class="form-control border-primary mb-2 w-50 mx-auto" :placeholder="$t('GHENT_PORTAL.CITIZEN.personalIdentifier')" aria-label="PersonalID" v-model="personalID" />
            <button @click="initCitizenSignup" class="btn btn-primary py-2 px-5" :disabled="!personalID">{{$t("CONFIRM")}}</button>
          </div>
          <div v-if="citizenData">
            <b>{{$t("GHENT_PORTAL.SIGNUP.CITIZEN_DATA")}}:</b>
            <table class="table">
              <tbody>
                <tr v-for="(value, key) in citizenData" :key="key">
                  <th scope="row">{{$t("GHENT_PORTAL.CITIZEN." + key)}}</th>
                  <td>{{value}}</td>
                </tr>
              </tbody>
            </table>
            <b-check v-if="sessionId == null" v-model="preAuthorized" class="mb-2">Pre-authorized</b-check>
            <b-check v-if="sessionId == null" v-model="userPinRequired" class="mb-2">Requires user PIN</b-check>
            <input :disabled="!userPinRequired" v-if="userPinRequired" type="password" class="form-control border-primary mb-2 w-50 mx-auto" placeholder="PIN" aria-label="PIN" v-model="userPin" autocomplete="new-password">
            <button @click="goToWallet('x-device')" class="btn btn-primary py-2 px-5" :disabled="!canSubmit">{{$t('START_ISSUANCE')}}</button>
          </div>
        </div>
        <div class="mt-2" v-if="errorMsg">
          <span class="text-danger">{{errorMsg}}</span>
        </div>
        <b-modal id="qr-modal" :static="true" centered>
          <div><b>{{$t('SCAN_TO_ISSUE')}}:</b></div>
          <div class="text-center" :v-show="qr-code-visible">
            <canvas :id="'qr-code'" />
            <div class="py-2"><b>{{$t('ISSUE_TO')}}:</b></div>
            <div class="text-center small">
              <a :href="walletUrl" :disabled="!canSubmit"><i class="bi bi-app-indicator px-2"></i>{{$t('WALLET_APP')}}</a><br/>
              <a @click="goToWallet('walt.id')" href="#" :disabled="!canSubmit"><img v-if="btnLoading" src="loader.gif" width="20px"/><span v-else><i class="bi bi-box-arrow-up-right px-2"></i>{{$t("GHENT_PORTAL.WEB_WALLET")}}</span></a>
            </div>
          </div>
        </b-modal>
      </div>
    </section>
  </div>
</template>

<script>
import CredentialEditor from '../components/CredentialEditor.vue'
import QRious from "qrious"
export default {
  components: { CredentialEditor },
  data () {
    return {
      personalID: null,
      citizenData: null,
      btnLoading: false,
      qrCodeVisible: false,
      walletUrl: "",
      preAuthorized: true,
      userPinRequired: false,
      userPin: null,
      errorMsg: null
    }
  },
  computed: {
    canSubmit() {
      return this.citizenData != null && !this.btnLoading && (!this.userPinRequired || this.userPin != null)
    }
  },
  async asyncData ({ $axios, query }) {
  },
  methods: {
    async goToWallet (walletId) {
      this.btnLoading = true;
      console.log("Citizen data:", this.citizenData)
      const params = { "walletId": walletId, "isPreAuthorized": this.preAuthorized, "userPin": this.userPin }
      if(walletId != "x-device") {
        window.location = `/ghent/signup/issue/${this.personalID}?${Object.keys(params)
          .filter(k => params[k] != null)
          .map(k => `${k}=${params[k]}`).join("&")}`
      } else {
        this.btnLoading = false;
        this.$bvModal.show("qr-modal")
        this.walletUrl = await this.$axios.$get(`/ghent/signup/issue/${this.personalID}`, { params: params })
        new QRious({
        element: document.getElementById('qr-code'),
          value: this.walletUrl,
          size: 300
        })
      }
    },
    async setErrorMsg(errorMsg) {
      this.errorMsg = errorMsg
      setTimeout(() => {
        this.errorMsg = null
      }, 2000)
    },
    async initCitizenSignup() {
      this.citizenData = await this.$axios.$get(`/ghent/signup/${this.personalID}`).catch(reason => {
        this.setErrorMsg("Personal identifier invalid")
      })
    }
  }
}
</script>

<style scoped>
label{
  font-size: 20px;
  margin-top: -3px;
  font-weight: 600;
}
button._view-btn{
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}
.left-inner-addon {
    position: relative;
}
.left-inner-addon input {
    padding-left: 35px !important;
}
.left-inner-addon i {
    position: absolute;
    padding: 17px 15px;
    pointer-events: none;
}
.right-inner-addon {
    position: relative;
}
.right-inner-addon input {
    padding-right: 35px !important;
}
.right-inner-addon i {
    position: absolute;
    right: 0px;
    padding: 17px 15px;
    pointer-events: none;
}
.left-and-right-inner-addon {
    position: relative;
}
.left-and-right-inner-addon input {
    padding-right: 35px !important;
    padding-left: 35px !important;
}
.left-and-right-inner-addon i.right {
    position: absolute;
    right: 0px;
    padding: 17px 15px;
    pointer-events: none;
}
.right-inner-addon-b {
    position: relative;
}
.right-inner-addon-b input {
    padding-right: 35px !important;
}
.right-inner-addon-b i {
    position: absolute;
    right: 0px;
    padding: 17px 15px;
    pointer-events: none;
}
._forms input {
    width: 100%;
		padding: 1em !important;
		margin: 0em !important;
		box-sizing: border-box;
}
._edit-btn button{
  background-color: transparent;
  border: none;
}
._cbtn{
  width: 165px;
  height: 45px
}
._cbtn img{
  margin-top: -3px
}
.qr-url-pre {
  padding-bottom: 0.5em;
}
@media only screen and (max-width: 600px) {
  label{
  font-size: 14px;
  margin-top: -3px;
  font-weight: 600;
}
button._view-btn{
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 13px;
  font-weight: 600;
}
}
</style>