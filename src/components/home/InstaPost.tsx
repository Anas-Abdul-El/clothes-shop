import Post from "./Post"

const posts = [
    {
        id: 1,
        image: "/images/products/product-1.jpg",
        link: "#"
    },
    {
        id: 2,
        image: "/images/products/product-2.jpg",
        link: "#"
    },
    {
        id: 3,
        image: "/images/products/product-3.jpg",
        link: "#"
    },
    {
        id: 4,
        image: "/images/products/product-4.jpg",
        link: "#"
    },
    {
        id: 5,
        image: "/images/products/product-5.jpg",
        link: "#"
    }
]

function InstaPost() {
    return (
        <div className='min-h-screen w-full md:px-40 mb-10 bg-[#F3E9E1]'>
            <div className=' container text-center mt-40'>
                <p className='text-gray-500 tracking-[0.3rem] uppercase text-xs'>follow us on instagram</p>
                <h2 className='text-5xl capitalize font-serif font-light mt-5'>our latest posts</h2>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-auto w-fit">
                {
                    posts.map(post => <Post posts={post} key={post.id} />)
                }
            </div>
        </div>
    )
}

export default InstaPost