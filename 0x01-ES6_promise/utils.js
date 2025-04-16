export function uploadPhoto(status = 200, body = 'photo-profile-1') {
  return Promise.resolve({ status, body });
}

export function createUser(firstName = 'Guillaume', lastName = 'Salva') {
  return Promise.resolve({ firstName, lastName });
}
