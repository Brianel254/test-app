'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

interface Article {
  id: number
  title: { rendered: string }
  date: string
  content: { rendered: string }
}

interface BlogViewProps {
  article: Article
  onClose: () => void
}

export default function BlogView({ article, onClose }: BlogViewProps) {
  const [fullContent, setFullContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFullContent()
  }, [])

  const fetchFullContent = async () => {
    try {
      const response = await fetch(`https://jimmysinsuranceagency.com/wp-json/wp/v2/posts/${article.id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch full article content')
      }
      const data = await response.json()
      setFullContent(data.content.rendered)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching full article content:', error)
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Button
        onClick={onClose}
        variant="outline"
        className="mb-8 flex items-center"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
      </Button>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title.rendered}</h1>
        <p className="text-green-500 text-sm mb-6">
          {new Date(article.date).toLocaleDateString()}
        </p>
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: fullContent }} />
        )}
      </article>
    </div>
  )
}