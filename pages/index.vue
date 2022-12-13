<template>
  <div>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-normal">
            {{$t('GHENT_PORTAL.WELCOME')}}
          </h1>
          <p class="lead text-muted fw-normal mb-4">
            {{$t('GHENT_PORTAL.CHOOSE_ACTION')}}
          </p>
          <div>
            <div>
              <div class="my-2"><nuxt-link to="GhentSignup" class="btn btn-primary py-2 px-5">Get your VerifiableId credential</nuxt-link></div>
              <div class="my-2"><button class="btn btn-primary py-2 px-5">Sign in to Energy Portal</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>