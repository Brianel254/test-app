'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Input } from '@/components/ui/input'
import blogData from '../blog.json'
import Hero1 from '@/components/Hero1'


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [searchTerm, setSearchTerm] = useState('')
  const post = blogData.posts.find(p => p.id === params.slug)
  const recentPosts = blogData.posts.slice(0, 5)

  if (!post) {
    return <div>Post not found</div>
  }

  const filteredPosts = blogData.posts.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero1 
        title={post.title}
        description= {post.author}
      />
      <main className="flex-grow">
        <section className="py-4 bg-white">

        </section>
        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="prose px-5 max-w-3xl">
              <p>{post.content}</p>
            </div>
          </article>
          <aside className="lg:w-1/3 mt-2" >
            <div className="sticky top-4">
              <Input
                type="search"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
              />
              {searchTerm && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
                  <ul>
                    {filteredPosts.map(p => (
                      <li key={p.id} className="mb-2">
                        <Link href={`/blog-2/${p.id}`} className="text-blue-600 hover:underline">
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">Recent Posts</h3>
              <ul>
                {recentPosts.map(p => (
                  <li key={p.id} className="mb-2">
                    <Link href={`/blog-2/${p.id}`} className="text-blue-600 hover:underline">
                      {p.title}
                    </Link>
                    <p className="text-sm text-gray-500">by {p.author}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}