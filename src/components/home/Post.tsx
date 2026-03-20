import Image from 'next/image';
import { Instagram } from 'lucide-react';

type Post = {
    id: string;
    imageUrl: string;
    link: string;
    createdAt: Date;
}

function Post({
    posts
}: {
    posts: Post
}) {

    const { imageUrl, link } = posts

    return (
        <div className='rounded-xl group overflow-hidden cursor-pointer relative'>
            <Image
                src={imageUrl}
                alt="Post image"
                width={400}
                height={400}
                className='rounded-xl group-hover:scale-110 transition-transform duration-500 group-hover:brightness-75 '
            />
            <Instagram
                color='white'
                size={32}
                className='relative -top-1/2 left-[calc(50%-16px)] opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
        </div>
    )
}

export default Post