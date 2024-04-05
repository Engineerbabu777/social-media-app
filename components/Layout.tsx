
import NavigationCard from '@/components/NavigationCard';
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import Login from './Login';


type Props ={
    children:React.ReactNode;
}

export default function Layout({children}:Props) {


  
  const router = useRouter();
  const session= useSession();

  
  
  if(!session){
    return <Login />
  }


    return(<>
    
    {/* MAIN-PAGE!! */}
    <main className="flex mt-4 max-w-4xl mx-auto gap-6">

      {/* LEFT!! */}
      <section className="w-3/12">
        <NavigationCard />
      </section>


      {/* RIGHT!! */}
      <section className="w-9/12">
        {children}
      </section>


    </main>


    </>)
}