<template>
  <div>
    <div class="bg-white bg-opacity-90 py-8 px-4 rounded">
      <div class="max-w-3xl mx-auto py-12 bg-white px-8 rounded">
        <h1 class="text-2xl font-bold mb-4">Mijn VerbouwLening</h1>
        <h2 class="text-lg font-semibold mb-4 mt-2">
          How to enroll as a student to NEOM? </h2>

        <p>Proceed with the following steps:</p>

        <h3 class="mb-4 font-semibold mt-2">Mandatory Admission requirements</h3>

        <p>
          You have to fulfill <span class="font-bold">all of the below</span> admission requirements. </p>

        <ul>
          <li>
            Level A2 CEFR language skills on application. The certificate must not be older than <span class="font-bold"
          >five years</span> (from the date of the examination) when the application is submitted.
          </li>
          <li>
            fulfill (if subject to) visa requirements
          </li>
          <li>
            Valid passport
          </li>
          <li>
            Valid residence permit (if applicable)
          </li>
          <li>
            duly signed application form
          </li>
          <li>
            supply a valid email-address
          </li>

        </ul>

        <h3 class="mb-4 font-semibold mt-2">Major Admission requirements</h3>

        <p>
          You have to fulfill <span class="font-bold">at least half</span> of the below admission requirements. </p>

        <ul>
          <li>
            Level A2 GERS language skills on application. The certificate must not be older than <span class="font-bold"
          >two years</span> (from the date of the examination) when the application is submitted.
          </li>
          <li>
            Secondary School Leaving Certificate (only accepted with officially legalised copy with official translation
            and of a selected trusted issuer group)
          </li>
          <li>
            Saudi citizenship
          </li>
          <li>
            Selection procedure to Bachelor's programs. There will be either admission or selection procedures or a
            study preparation and reflection phase for self-orientation for all Bachelor's Programs.
          </li>
        </ul>

        <h2 class="text-xl font-semibold mb-4 mt-2">Receive your NEOM ID </h2>

        <p>You can find further details <a href="#">here</a>.</p>

        <ul>
          <li>
            First, proceed by entering your NEOM Student Identification Number.
          </li>

          <li>
            You will be prompted to setup your wallet.
          </li>
          <li>
            You will then receive your Verifiable Student ID in the form of a Verifiable Credential (VC).
          </li>
        </ul>


        <h2 class="text-xl font-semibold mb-4 mt-2">What happens after I apply?</h2>

        <p>
          The uploaded documents will be checked by the responsible officers of the Admissions Office. If documents are
          missing or incorrect, you will be asked to upload them again. You will be notified via your account in the
          online registration. However, you will also be informed by email that you have received a message from the
          Admissions Office. If the documents are not uploaded within the set deadline, admission will be refused. </p>

        <h2 class="text-xl font-semibold mb-4 mt-2">What happens after I have been approved?</h2>

        <p>
          As soon as your application for admission has been approved, you will of course be informed. After that, you
          still have to transfer the study fee in order to complete the admission. You will receive the necessary
          information by email. </p>

        <nuxt-link class="text-white px-4 py-2 inline-block font-semibold rounded mt-6 text-lg"
                   style="background-color: #009de0" to="/Enrollment"
        >Apply for enrollment
        </nuxt-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
nav li {
  list-style-type: none;
}

li {
  list-style-type: square;
  list-style-position: inside;
  margin-top: 1em;
  margin-bottom: 1em;
}

li li {
  list-style-type: circle;
  margin-left: 1em;
}

p {
  margin-bottom: 2em;
}
</style>
