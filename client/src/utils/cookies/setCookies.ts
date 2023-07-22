export function setCookie(cname: string, cvalue: string, hours: number) {
  const d = new Date()
  d.setTime(d.getTime() + hours * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}
