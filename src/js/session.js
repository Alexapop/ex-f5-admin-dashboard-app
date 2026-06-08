
export function isLoggedIn(){
    return localStorage.getItem('isLoggedIn')==='true'
}

export function saveSession(){
    localStorage.setItem('isLoggedIn','true')
}

export function removeSession(){
    localStorage.removeItem('isLoggedIn')
}
