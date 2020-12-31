export class SessionIdStorage {
  
  constructor(prefix, name) {
    if (!prefix || !name) {
      throw new Error('Invalid params. Required name and prefix')
    }

    this.sessionId = null
    this.key = `${prefix}${name}`
  }

  generateSessionId() {
    this.sessionId = new Date().getTime()
    return this.saveSession()
  }

  saveSession() {
    localStorage.setItem(this.key, this.sessionId)
    return this.sessionId
  }

  resetSession() {
    localStorage.removeItem(this.key)
    return this.sessionId
  }

  restoreSession() {
    const sessionId = localStorage.getItem(this.key)

    if (sessionId) {
      this.sessionId = sessionId
    } else {
      this.generateSessionId()
    }

    return sessionId
  }
}
