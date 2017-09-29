export default class LocalStorage {
  setItem (key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }
  getItem (key) {
    return JSON.parse(localStorage.getItem(key))
  }
}
