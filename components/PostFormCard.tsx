import { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import Card from "./Cart";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { UserContext } from "@/context/userContext";
export default function PostFormCard({onPost}:any) {
	const supabase = useSupabaseClient();
	const session = useSession();

	const [content, setContent] = useState("");

    const {profile} = useContext(UserContext)


    if (!profile){
        return "waiting for profile...";
    }

    const handleClickCreate = async() => {
        console.log({
            author: session.user.id,
            content,
        })
        supabase.from("posts").insert({
            author: session.user.id,
            content,
        }).then((res:any) => {
            console.log(res)
            if(!res.err){
                setContent("");
                onPost()
            }
        })
    }

	return (
		<Card>
			{/* TOP!! */}
			<div className="flex gap-2">
				<div className="">
					<Avatar url={profile?.avatar} />
				</div>
				<textarea
					className="grow p-3 outline-none border-[#2191FA] border rounded-md"
					placeholder={`What's in your mind ${
						profile?.name?.split(" ")[0] || "anonymous"
					}?`}
					value={content}
					onChange={(e: any) => setContent(e.target.value)}
				/>
			</div>

			<div className="flex gap-3 mt-2 items-center">
				<div className="">
					<button type="button" className="flex items-center">
						<span className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								/>
							</svg>
						</span>
						People
					</button>
				</div>

				<div className="">
					<button type="button" className="flex items-center">
						<span className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
						</span>
						Check in
					</button>
				</div>

				<div className="">
					<button type="button" className="flex items-center">
						<span className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
								/>
							</svg>
						</span>
						Mood
					</button>
				</div>

				<div className="ml-auto">
					<button
						type="button"
						className="bg-[#2191FA] text-white px-4 py-1 rounded-md"
                        onClick={handleClickCreate}
					>
						Share
					</button>
				</div>
			</div>
		</Card>
	);
}
