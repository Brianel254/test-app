import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogHero from '@/components/BlogHero'
import BlogGrid2 from '@/components/BlogGrid2'
import blogData from './blog.json'

export default function Blog2Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <BlogHero />
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <BlogGrid2 posts={blogData.posts} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}