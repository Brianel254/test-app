'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface RecentPost {
  id: number
  title: { rendered: string }
  date: string
  slug: string
}

export default function BlogSidebar() {
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchRecentPosts()
  }, [])

  const fetchRecentPosts = async () => {
    try {
      const response = await fetch('https://jimmysinsuranceagency.com/wp-json/wp/v2/posts?per_page=5')
      if (!response.ok) {
        throw new Error('Failed to fetch recent posts')
      }
      const data = await response.json()
      setRecentPosts(data)
    } catch (error) {
      console.error('Error fetching recent posts:', error)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchTerm)
  }

  return (
    <aside className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Search</h2>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="search"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" className="bg-green-500 text-white hover:bg-green-600">
            Search
          </Button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} className="text-green-500 hover:underline">
                {post.title.rendered}
              </Link>
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}