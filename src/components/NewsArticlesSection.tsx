'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

interface Article {
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

export default function NewsArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://jimmysinsuranceagency.com/wp-json/wp/v2/posts?_embed&per_page=3')
      if (!response.ok) {
        throw new Error('Failed to fetch articles')
      }
      const data = await response.json()
      setArticles(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching articles:', error)
      setLoading(false)
    }
  }

  const truncateExcerpt = (excerpt: string, wordCount: number) => {
    const words = excerpt.split(' ')
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...'
    }
    return excerpt
  }

  if (loading) {
    return <div className="text-center py-16">Loading...</div>
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest updates from Jimmy's Insurance Agency and the insurance industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{article.title.rendered}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                {article._embedded && article._embedded['wp:featuredmedia'] && (
                  <Image
                    src={article._embedded['wp:featuredmedia'][0].source_url}
                    alt={article.title.rendered}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                )}
                <p className="text-green-500 text-sm mb-3">
                  {new Date(article.date).toLocaleDateString()}
                </p>
                <div
                  className="text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{ __html: truncateExcerpt(article.excerpt.rendered, 20) }}
                />
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${article.slug}`} passHref>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-50"
                  >
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}