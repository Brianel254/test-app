import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogHero from '@/components/BlogHero'
import BlogGrid from '@/components/BlogGrid'

export const metadata = {
  title: "Blog",
  description: "Stay informed with the latest news, tips, and insights about insurance and financial planning.",
}

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