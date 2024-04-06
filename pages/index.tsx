import { Inter } from "next/font/google";
import PostFormCard from "@/components/PostFormCard";
import PostCard from "@/components/PostCard";
import Layout from "@/components/Layout";
import { useCallback, useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "@/context/userContext";

const inter = Inter({ subsets: ["latin"] });

export default function Page({}) {
	const supabase = useSupabaseClient();
	const [posts, setPosts] = useState([]);
	const [profile, setProfile] = useState(null);
	const session = useSession();

	useEffect(() => {
		fetchPosts();
	}, []);

	useEffect(() => {
		supabase
			.from("profiles")
			.select("")
			.eq("id", session?.user.id)
			.then((res: any) => {
				if (res?.data?.length) {
					setProfile(res.data[0]);
				}
				console.log({ session: session?.user.id });
				console.log(res);
			});
	}, [session?.user?.id]);

	const fetchPosts = async () => {
		supabase
			.from("posts")
			.select("id,content,created_at,photos,profiles(name,avatar)")
			.order("created_at", { ascending: false })
			.then((res: any) => {
				setPosts(res.data);
				console.log(res.data);
			});
	};

	return (
		<>
			<Layout>
				<UserContext.Provider value={{ profile }}>
					<PostFormCard onPost={fetchPosts} />

					{posts.map((post: any, ind: number) => {
						return <PostCard {...post} key={ind} />;
					})}
				</UserContext.Provider>
			</Layout>
		</>
	);
}
