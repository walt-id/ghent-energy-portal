export default async function (context) {
  if(context.route.query.otp != null) {
      console.log('Getting login token for one-time password ...', context.route.query.otp)
      const loginResponse = await context.$auth.loginWith('local', {
        data: {
            otp: context.route.query.otp
          }
        })
        console.log("Logged in", loginResponse)
        await context.$auth.setUser(loginResponse.data)
        context.redirect({ query: {} })
  }
}