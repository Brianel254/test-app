'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Heart, Share2, Bookmark } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  image: string
}

interface BlogGrid2Props {
  posts: BlogPost[]
}

export default function BlogGrid2({ posts }: BlogGrid2Props) {
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({})
  const [bookmarks, setBookmarks] = useState<{ [key: string]: boolean }>({})

  const handleLike = (id: string) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleBookmark = (id: string) => {
    setBookmarks(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleShare = (title: string, id: string) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: `/blog-2/${id}`
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert(`Share this link: ${window.location.origin}/blog-2/${id}`)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
            <Link href={`/blog-2/${post.id}`}>
              <Button className="w-full mb-4 bg-green-500 hover:bg-green-600">Read More</Button>
            </Link>
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(post.id)}
                className={likes[post.id] ? 'text-red-500' : ''}
              >
                <Heart className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare(post.title, post.id)}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleBookmark(post.id)}
                className={bookmarks[post.id] ? 'text-blue-500' : ''}
              >
                <Bookmark className="mr-2 h-4 w-4" />
                Bookmark
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}