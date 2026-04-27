
// const getPost =async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }


// const getPost = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         return res.json();
//     }
//     catch(e){
//         throw new Error('Failed to fetch posts...')
//     }
// }


const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();

    if(!res.ok) {
        throw new Error('Failed to fetch posts')
    }
}



const PostsPage = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    const posts = await getPost();

    return (
        <div>
            <h2>Posts are coming soon: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;