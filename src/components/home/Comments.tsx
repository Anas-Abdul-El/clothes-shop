import { Star } from "lucide-react";

const comments = [
    {
        id: 1,
        name: 'John Doe',
        comment: "Absolutely love the quality and elegance of every piece. The Ramadan collection was stunning and the delivery was fast!",
        location: 'New York, USA',
        rating: 5,
    },
    {
        id: 2,
        name: 'Jane Smith',
        comment: "Finally found a boutique that understands modest fashion without compromising on style. The sets are my favorite!",
        location: 'Los Angeles, USA',
        rating: 4,
    },
    {
        id: 3,
        name: 'Bob Johnson',
        comment: "The fabric quality is exceptional. I ordered via WhatsApp and the process was so smooth. Will definitely order again.",
        location: 'Chicago, USA',
        rating: 4,
    },
];

function Comments() {

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<Star key={i} size={16} className="text-yellow-500" />);
        }
        return stars;
    }

    const nameRender = (fullName: string) => {
        let name = ""
        const nameParts = fullName.split(" ");
        if (nameParts.length > 1) {
            name = nameParts[0] + " " + nameParts[1][0] + "."
        } else {
            name = fullName
        }
        return name
    }

    return (
        <div className=' w-full px-20 md:px-40 mt-40'>
            <div className=' container text-center '>
                <p className='text-gray-500 tracking-[0.3rem] uppercase text-xs'>what they say</p>
                <h2 className='text-5xl capitalize font-serif font-light mt-5'>our happy customers</h2>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 mb-40'>
                {
                    comments.map(comment => (
                        <div key={comment.id} className='border border-gray-300 p-6 rounded-lg relative'>
                            <div className="w-full flex gap-1 mb-3">
                                {
                                    renderStars(comment.rating)
                                }
                            </div>
                            <p className=" my-4 text-sm min-h-20">"{comment.comment}"</p>
                            <span className="border h-px w-5/6 absolute"></span>
                            <div className="mt-10">
                                <h3 className="text-sm mb-1">{nameRender(comment.name)}</h3>
                                <p className="text-gray-500 text-xs">{comment.location}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments