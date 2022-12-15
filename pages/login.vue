<template>
<section class="py-5 text-center container">
  <div>
    <div><b>Scan to present VerifiableId with your wallet:</b></div>
    <div class="text-center">
      <canvas :id="'qr-code'" />
      <div class="py-2"><b>Present with:</b></div>
      <div class="text-center small">
        <a :href="xDeviceInfo.url"><i class="bi bi-app-indicator px-2"></i>{{$t('WALLET_APP')}}</a><br/>
        <a  :href="'/ghent/portal/authorize?webUrl='+webUrl"><span><i class="bi bi-box-arrow-up-right px-2"></i>{{$t("GHENT_PORTAL.WEB_WALLET")}}</span></a>
      </div>
    </div>
  </div>
</section>
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
        size: 300
      })
    setInterval(() => {
      const verificationResult = this.$axios.$get("/ghent/portal/authorize/isVerified?state="+this.xDeviceInfo.state)
      if(verificationResult.verified) {
        this.$router.replace(verificationResult.url)
      }
    }, 2000);
  }
}
</script>
	
<style scoped>
	
</style>