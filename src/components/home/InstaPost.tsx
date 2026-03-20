import getPosts from "../../../server/getPosts"
import ErrorInFetching from "../global/Error-in-fetching"
import Post from "./Post"


const posts = await getPosts()

function InstaPost() {

    return (
        <div className='min-h-screen w-full md:px-20 lg:px-40 pb-10 bg-[#F3E9E1]'>
            <div className=' container text-center mt-40'>
                <p className='text-gray-500 tracking-[0.3rem] uppercase text-xs'>follow us on instagram</p>
                <h2 className='text-5xl capitalize font-serif font-light mt-5'>our latest posts</h2>
            </div>
            {
                ("error" in posts) ? (
                    <ErrorInFetching error={posts.error} />
                ) : (
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-auto w-fit p-10">
                        {
                            posts.map(post => <Post posts={post} key={post.id} />)
                        }
                    </div>
                )
            }
        </div>
    )
}

export default InstaPost