'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogSidebar from '@/components/BlogSidebar'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  title: { rendered: string }
  date: string
  content: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
    }>
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPost()
  }, [slug])

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://jimmysinsuranceagency.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      if (!response.ok) {
        throw new Error('Failed to fetch post')
      }
      const data = await response.json()
      if (data.length > 0) {
        setPost(data[0])
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching post:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-16">Loading...</div>
  }

  if (!post) {
    return <div className="text-center py-16">Post not found</div>
  }

  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <Link href="/blog" passHref>
                <Button variant="outline" className="mb-8">
                  Back to Blog
                </Button>
              </Link>
              <article className="prose prose-lg max-w-none">
                <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>
                <p className="text-green-500 text-sm mb-6">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                {post._embedded && post._embedded['wp:featuredmedia'] && (
                  <img
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover mb-8 rounded-lg"
                  />
                )}
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              </article>
            </div>
            <div className="lg:w-1/3">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}