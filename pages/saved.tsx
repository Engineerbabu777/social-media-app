
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';



export default function saved({}) {

    return(<Layout>

        <h1 className="text-6xl text-gray-300 mb-4">Your Saved Posts</h1>

        <PostCard />
        
        <PostCard />

        <PostCard />

        <PostCard />
     
    </Layout>);
}