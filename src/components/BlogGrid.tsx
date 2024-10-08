'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: { rendered: string }
  date: string
  excerpt: { rendered: string }
  slug: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
    }>
  }
}

export default function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://jimmysinsuranceagency.com/wp-json/wp/v2/posts?_embed&page=${page}&per_page=6`)
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(prevPosts => [...prevPosts, ...data])
      setLoading(false)
      setPage(prevPage => prevPage + 1)
      setHasMore(data.length === 6)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setLoading(false)
      setHasMore(false)
    }
  }

  const truncateExcerpt = (excerpt: string, wordCount: number) => {
    const words = excerpt.split(' ')
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...'
    }
    return excerpt
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title.rendered}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                {post._embedded && post._embedded['wp:featuredmedia'] && (
                  <img
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                )}
                <div
                  className="text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{ __html: truncateExcerpt(post.excerpt.rendered, 20) }}
                />
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-50"
                  >
                    Read
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-12">
            <Button
              onClick={fetchPosts}
              className="bg-green-500 text-white hover:bg-green-600"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}