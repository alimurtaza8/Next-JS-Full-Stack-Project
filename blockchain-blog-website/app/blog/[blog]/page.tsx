// import ReportsSection from '@/components/ServicePage'; 
import FeaturedPosts from "@/components/FeaturedPosts";



export default function BlogsLandingsPage() { 
  return <FeaturedPosts />;
}

// Optional but recommended: Add metadata for SEO
export function generateMetadata({ params }: { params: { blog: string } }) {
  const blogTypes: { [key: string]: string } = {
    defi: "Blog for defi",
    zk: "Blog for zk",
    layer: "Blog for layer 2 protocols",
    smart: "Blog for smart contracts",
  };

  return {
    title: blogTypes[params.blog] || "Blockchain Blogs",
    description: `Detailed vehicle intelligence and history reporting for ${params.blog}s`
  };
}