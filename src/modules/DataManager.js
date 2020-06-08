const remoteURL = "http://localhost:5002"

export default {
  get(section, id) {
    return fetch(`${remoteURL}/${section}/${id}`).then(result => result.json())
  },
  getAll(section) {
    return fetch(`${remoteURL}/${section}`).then(result => result.json())
  }
}