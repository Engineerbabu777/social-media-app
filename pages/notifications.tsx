import Avatar from "@/components/Avatar";
import Card from "@/components/Cart";
import Layout from "@/components/Layout";
import Link from "next/link";



export default function Page({}) {



    return(<>
     <Layout>

      <h1 className="text-6xl text-gray-300 mb-4">Notifications</h1>

      <Card noPadding>
        <div className="">

            <div className="flex gap-2 items-center py-2 border-b border-gray-100 px-1">
                <Avatar />
                <p className="">
                  <Link href={'/profile'} className="hover:underline font-semibold">Elin Parkour</Link> Liked your <Link href={"/"} className="text-[#2190FA] hover:underline">post</Link>
                </p>
            </div>

            <div className="flex gap-2 items-center py-2 border-b border-gray-100 px-1">
                <Avatar />
                <p className="">
                  <Link href={'/profile'} className="hover:underline font-semibold">Elin Parkour</Link> Liked your <Link href={"/"} className="text-[#2190FA] hover:underline">post</Link>
                </p>
            </div>

        </div>

      </Card>

      

      



     </Layout>
    </>)
}