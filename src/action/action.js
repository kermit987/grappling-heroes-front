export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export function updateProfile(newProfile) {
  return { type: UPDATE_PROFILE, newProfile };
}
