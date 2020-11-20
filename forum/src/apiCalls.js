const root_url = 'https://lab.willandskill.eu';
const posts_url = `${root_url}/api/v1/forum/posts/`;
const auth_url = `${root_url}/api/v1/auth/api-token-auth/`;
const register_url = `${root_url}/api/v1/auth/users/`
const get_countries_url  = `${root_url}/api/v1/countries/`
const params_url = `${root_url}/api/v1/forum/`
const me_url = `${root_url}/api/v1/me/`
const get_categories_url = `${root_url}/api/v1/forum/categories/`

//Login
export function authenticateUser(payload){
    return fetch(auth_url,{
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json'
        }
    })
}

//getPosts
export function fetchPosts(){
   return fetch(posts_url, {
     headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${ localStorage.getItem('token')}`
     }
 })
}

//register
export function registerUser(payload){
    return fetch(register_url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json'
        }
    })
}

//getCountries
export function fetchCountries(){
    return fetch(get_countries_url, {
        headers: {
            'Content-Type': 'application/json',
            //Authorization: `Bearer ${ localStorage.getItem('token')}`
        }
    })
}

//getPostDetails
export function fetchPostDetails(id){
    return fetch(`${params_url}${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ localStorage.getItem('token')}`
        }
    })
}

export function fetchPostReplies(id){
    return fetch(`${params_url}/api/v1/forum/posts/${id}/replies`, {
        header: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ localStorage.getItem('token')}`
        }
    })
}

//fetchMe
export function fetchMe(){
    return fetch(me_url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ localStorage.getItem('token')}`
        }
    })
}

export function fetchCategories(){
    return fetch(get_categories_url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ localStorage.getItem('token')}`
        }
        })
}

//createPost 
export function createPost(payload){
    return fetch(posts_url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ localStorage.getItem('token')}`
        }
    })
}

//createReply
export function createReply(payload){
    return fetch(posts_url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ localStorage.getItem('token')}`
        }
    })
}