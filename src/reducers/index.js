import { UPDATE_PROFILE } from '../action'

currentProfile = {
  name: '',
  lastname: '',
  birth: '',
  weight: '',
  belt: '',
  stripe: ''
}

// try {
//   const result = await axios.get(
//     'https://floating-hamlet-32385.herokuapp.com/profile'
//     // 'http://localhost:3002/profile'
//   )

//   for (let key in result.data) this.setState({ [key]: result.data[key] })
// } catch (e) {
//   console.log('Error Profile component ', e)
// }

function updateProfile(profile = currentProfile, action, payload) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return profile.map
  }
}
