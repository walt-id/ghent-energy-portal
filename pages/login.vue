<template>
<div class="max-w-4xl px-8 mx-auto text-gray-700">
  <div class="bg-white bg-opacity-90 py-8 px-4 rounded">
    <div class="max-w-3xl mx-auto py-12 bg-white px-8 rounded">
      <div class="text-center"><h2 class="text-lg font-semibold mb-4 mt-2">Scan with your wallet, to present the required credentials:</h2></div>
      <canvas class="mx-auto" :id="'qr-code'" />
      <div class="mx-auto text-center"><h2 class="text-lg font-semibold mb-4 mt-2">Present with:</h2></div>
      <div class="text-center small mx-auto">
        <a :href="xDeviceInfo.url"><i class="bi bi-app-indicator px-2"></i>{{$t('WALLET_APP')}}</a><br/>
        <a  :href="'/ghent/portal/authorize?webUrl='+webUrl"><span><i class="bi bi-box-arrow-up-right px-2"></i>{{$t("GHENT_PORTAL.WEB_WALLET")}}</span></a>
      </div>
    </div>
  </div>
</div>
</template>
	
<script>
import QRious from "qrious"
export default {
  data() {
    return {
     
    }
  },
  computed: {
    webUrl() {
      return window.location.origin
    }
  },
  async asyncData ({ $axios, query }) {
    const xDeviceInfo = await $axios.$get("/ghent/portal/authorize/xdevice")
    return { xDeviceInfo }
  },
	mounted() {
    console.log(this.xDeviceInfo)
    new QRious({
        element: document.getElementById('qr-code'),
        value: this.xDeviceInfo.url,
        size: 400
      })
    setInterval(async () => {
      const verificationResult = await this.$axios.$get("/ghent/portal/authorize/isVerified?state="+this.xDeviceInfo.state)
      console.log("Verification result", verificationResult)
      if(verificationResult.verified) {
        window.location = verificationResult.url
      }
    }, 2000);
  }
}
</script>
	
<style scoped>
	
</style>