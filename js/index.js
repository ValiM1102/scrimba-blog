let postsArray = []
const titleInput = document.getElementById('title')
const bodyInput = document.getElementById('post-body')
const form = document.getElementById('post')


function renderPosts () {
    let html = ''
    for(let post of postsArray){
    html += `<h1> ${post.title} </h1>
                <p> ${post.body} <p>
                <div class="bar"></div>
    `
    document.querySelector('#content').innerHTML = html
}}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    }) 



form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: title,
        body:postBody
    }

    const options = {method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                            'Content-Type': 'application/json'
    }}

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
        })


    form.reset()
})