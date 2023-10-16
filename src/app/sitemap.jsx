export default async function (){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    const posts = data.map(post=>({
        url: `http://localhost:3000/posts/${post.id}`,
        lastModified: new Date().toISOString()
    }))

    const routes = ['', '/about', '/dashboard', '/profile'].map(route=>({
        url: `http://localhost:3000${route}`,
        lastModified: new Date().toISOString()
    }))

    return [...routes,...posts]
}