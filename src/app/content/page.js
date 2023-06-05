import Head from "next/head";
import Link from "next/link";
import createClient from 'src/lib/supabase-server';
import { redirect } from 'next/navigation';
import {move_page} from "src/app/content/movePage";




export default async function Home() {
  
const supabase = createClient();



const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  redirect('/');
}
var data3 = {user_id: user.id, email: user.email}
 try {
     const { data2, error } = await supabase
       .from("users")
       .select("*")
       .eq("user_id", user?.id);

     if (error) throw error;
     data3 = {...data2}
   } catch (error) {
     alert(error.message);
   } finally {
   }
   
   console.log(String(user.email)!="lucas.kloubert5@etu.univ-lorraine.fr")
 

 
 return (
   <div >
     <Head>
       <title>Nextjs x Supabase</title>
       <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/favicon.ico" />
     </Head>

     <div >
       {(
         <div>
           <p >
             Hello <span >{user.email}</span>,
             Welcome to your dashboard
           </p>
           {(String(user.email)!="lucas.kloubert5@etu.univ-lorraine.fr") ? (
             <div >
               <div>No data yet for your account</div>
               Create a New Workout when we'll ad<Link href="/Fl4g_hERe" STYLE="cursor:default">
                 <button STYLE="cursor:default">
                   {" "}
                   d
                 </button>
               </Link> the feature
             </div>
           ) : (
             <div STYLE="margin-top:10%">
              Message for {user.email.split("@")[0].replace(".", " ")}:
               <p >Here is a flag</p>
             </div>
           )}
         </div>
       )}
     </div>
   </div>
 );
}