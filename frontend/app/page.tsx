import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import hero from '../components/images/hero_image 1.png';
import clock from '../components/images/Screenshot 2024-06-21 055608.png';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className=" bg-black flex justify-center items-center flex-col pt-40 ">
        <div className=" md:w-5/12 w-5/6 text-center"><h1 className="text-4xl  text-headingGray font-bold">Information you need during on-call emergencies</h1>
        <div className="mt-4    text-customGray">Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens</div>
        </div>
        <Link href='/' className=" mt-10 rounded-md bg-white font-bold pt-2 pb-2 pr-3 pl-3 text-black">Get Started &gt;</Link>

        <div className=" md:w-9/12 w-5/6 mt-16" ><Image alt="s" src={hero} /></div>

{/*  */}
        <div className="md:w-9/12 w-5/6 text-customGray  mt-36"> 
        <h1 className="text-4xl text-center text-headingGray mb-3 md:p-5 p-2 font-bold">Quick solutions, less stress</h1>
        <div className="flex md:flex-row flex-col">
            <div className=" md:ml-6 ml-2 md:w-1/3  mt-10">
            <Image alt="s" className="rounded" src={clock} width={50}  />
            <h2 className=" mt-7 mb-7 text-2xl ">Fix emergencies fast</h2>
            <div className=" text-sm"> Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbook</div>
            </div>
            <div className="md:ml-6 ml-2 md:w-1/3 mt-10">
            <Image alt="s" className="rounded" src={clock} width={50}  />
            <h2 className=" mt-7 mb-7 text-2xl ">Fix emergencies fast</h2>
            <div className=" text-sm"> Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbook</div>
            </div>
            <div className=" md:ml-6 ml-2 md:w-1/3 mt-10">
            <Image alt="s" className="rounded" src={clock} width={50}  />
            <h2 className=" mt-7 mb-7 text-2xl ">Fix emergencies fast</h2>
            <div className=" text-sm"> Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbook</div>
            </div>
        </div>
        </div>
        {/*  */}
        <div className=" md:w-5/12 w-5/6 mt-20 text-center"><h1 className="text-4xl  text-headingGray font-bold">Instant setup, no custom code</h1>
        <div className="mt-4    text-customGray">Invite the bot, pick a channel, and you're set—no custom code needed, and no vendor lock-in</div>
        <Image alt="s" className="mt-6" src={hero} />
        </div>
        {/*  */}
        <div className="h-20"> </div>

      </div>
    </div>
  );
}
