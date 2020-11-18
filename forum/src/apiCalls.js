const root_url = "https://lab.willandskill.eu";
const get_posts_url = `${root_url}/api/v1/forum/posts/`;
const auth_url = `${root_url}/api/v1/auth/api-token-auth/`;
const register_url = `${root_url}/api/v1/auth/users/`
const get_countries_url  = `${root_url}/api/v1/countries/`
const params_url = `${root_url}/api/v1/forum/`

//Login
export function authenticateUser(){
    const payload = {
        email: "pelle@willandskill.se",
        password: "pellesvanslos"
    }
    return fetch(auth_url,{
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        const {token} = data;
        localStorage.setItem("token", token)
    })
}

//getPosts
export function fetchPosts(){
   return fetch(get_posts_url, {
     headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${ localStorage.getItem("token")}`,
     }
 })
}

//register
export function registerUser(payload){
    return fetch(register_url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json"
        }
    })
}

//getCountries
export function fetchCountries(){
    return fetch(get_countries_url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ localStorage.getItem("token")}`,
        }
    })
}

export async function fetchPostDetails(id){
    return await fetch(`${params_url}${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ localStorage.getItem("token")}`,
        }
    })
}