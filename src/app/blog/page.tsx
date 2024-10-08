import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogHero from '@/components/BlogHero'
import BlogGrid from '@/components/BlogGrid'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  )
}