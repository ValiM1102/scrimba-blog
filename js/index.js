fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(response => response.json())
    .then(data => {
        const postsArray = data.slice(0, 5)
        let html = ""
        for(let post of postsArray){
            html += `
            <h1> ${post.title} </h1>
            <p> ${post.body} <p>
            <div class="bar"></div>
            `
        }
        document.querySelector('#content').innerHTML = html
    }) 



document.getElementById('post').addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const postBody = document.getElementById('post-body').value
    const data = {
        title: title,
        body:postBody
    }
    document.getElementById('post-body').value = ''
    document.getElementById('title').value = ''
})