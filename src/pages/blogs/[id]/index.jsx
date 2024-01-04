// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { BlogView } from '@/views';


const BlogPage = () => {
  return (
    <MainLayout
      pageTitle='Canales GNSS' 
    >
      <BlogView />
    </MainLayout>
  );
}

export default BlogPage;
