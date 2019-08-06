export function UPDATE_NAME(newName) {
  console.log('Dans update name')
  alert('Dans update name')
  return {
    type: 'UPDATE_NAME',
    payload: newName
  }
}

export function UPDATE_LASTNAME(newLastname) {
  return {
    type: 'UPDATE_LASTNAME',
    payload: newLastname
  }
}

export function UPDATE_BIRTH(newBirth) {
  return {
    type: 'UPDATE_BIRTH',
    payload: newBirth
  }
}

export function UPDATE_WEIGHT(newWeight) {
  return {
    type: 'UPDATE_WEIGHT',
    payload: newWeight
  }
}

export function UPDATE_BELT(newBelt) {
  return {
    type: 'UPDATE_BELT',
    payload: newBelt
  }
}

export function UPDATE_STRIPE(newStripe) {
  return {
    type: 'UPDATE_STRIPE',
    payload: newStripe
  }
}
