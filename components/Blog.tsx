import { blogPosts } from "@/data";
import Image from "next/image";


type ImageProps = {
    url: string;
    id: number
}

type PostType = {
    title: string;
    date: string;
    images: ImageProps[];
    content: string;
    id: number;
}

const blog = blogPosts

export const Blog = () => {
  return (
    <div className="flex flex-col w-full">
        {blog.map((post) => (
            <div className="mb-5 border-b-2" key={post.id}>
                <Post post={post} />
            </div>
        ))}
    </div>
  )
}

const Post = ({post}:{post:PostType}) => {
    return (
        <div className="w-full flex flex-col relative min-h-[50vh] text-white-100 mb-5">
            <h1 className="font-bold text-lg lg:text-3xl">{post.title}</h1>
            <span className="flex space-x-2 mt-2">
            <p className="font-bold text-lg lg:text-xl">Dato:</p>
            <span className="text-lg lg:text-xl">{post.date}</span>
            </span>
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {post.images.map((img) => (
                    <Image 
                    key={img.id}
                    src={img.url}  
                    width={500}
                    height={500}
                    alt={post.title} />
                ))}
            </div>
            
            <p className="text-lg lg:text-xl">{post.content}</p>
        </div>
    )
}
