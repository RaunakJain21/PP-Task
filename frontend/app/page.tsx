import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import hero from '../components/images/hero_image 1.png';
import clock from '../components/images/Screenshot 2024-06-21 055608.png';
import logo from '../components/images/Logo.png'
import frame2 from '../components/images/Screenshot 2024-06-22 142608.png';
import frame3 from '../components/images/Screenshot 2024-06-22 142201.png';

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <hr className="mt-0"></hr> */}
      <div className=" bg-white dark:bg-black w-full  flex justify-center items-center flex-col pt-40 ">
        <div className=" md:w-5/12 w-5/6 text-center"><h1 className="text-4xl  dark:text-headingGray text-black font-bold">Information you need during on-call emergencies</h1>
        <div className="mt-4    dark:text-customGray text-gray-900">Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens</div>
        </div>
        <Link href='/' className=" mt-10 rounded-md dark:bg-white  bg-slate-950 hover:bg-slate-700 font-bold pt-2 pb-2 pr-3 pl-3 text-white dark:text-black">Get Started &gt;</Link>

        <div className=" md:w-9/12 w-5/6 mt-16" ><Image alt="s" src={hero} /></div>

{/*  */}
        <div className="md:w-9/12 w-5/6 text-gray-900 dark:text-customGray  mt-36"> 
        <h1 className="text-4xl text-center text-black dark:text-headingGray mb-3 md:p-5 p-2 font-bold">Quick solutions, less stress</h1>
        <div className="flex md:flex-row flex-col">
            <div className=" md:ml-6 ml-2 md:w-1/3  mt-10">
            <Image alt="s" className="rounded" src={clock} width={50}  />
            <h2 className=" mt-7 mb-7 text-2xl ">Fix emergencies fast</h2>
            <div className=" text-sm"> Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbook</div>
            </div>
            <div className="md:ml-6 ml-2 md:w-1/3 mt-10">
            <Image alt="s" className="rounded " src={frame2} width={50}  />
            <h2 className=" mt-7 mb-7 text-2xl ">Universally compatible</h2>
            <div className=" text-sm"> Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system</div>
            </div>
            <div className=" md:ml-6 ml-2 md:w-1/3 mt-10">
            <Image alt="s" className="rounded" src={frame3} width={50}  />
            <h2 className=" mt-7 mb-7 text-2xl ">Secure for your org </h2>
            <div className=" text-sm"> We keep your data safe by taking top security measures</div>
            </div>
        </div>
        </div>
        {/*  */}
        <div className=" md:w-5/12 w-5/6 mt-20 text-center"><h1 className="text-4xl text-black dark:text-headingGray font-bold">Instant setup, no custom code</h1>
        <div className="mt-4  dark:text-customGray">Invite the bot, pick a channel, and you're set—no custom code needed, and no vendor lock-in</div>
        <Image alt="s" className="mt-6" src={hero} />
        </div>
        {/*  */}
        {/* <div className="h-20"> </div> */}
        <div className="mt-20 md:w-5/12 w-5/6 text-center"><h1 className="text-4xl  dark:text-headingGray text-black font-bold">Get in touch</h1>
        <div className="mt-4    dark:text-customGray text-gray-900">Request a demo, or hop on a call</div>
        </div>
        <Link href='/' className=" mt-5 rounded-md dark:bg-white  bg-slate-950 hover:bg-slate-700 font-bold pt-2 pb-2 pr-3 pl-3 text-white dark:text-black">Get Started &gt;</Link>

{/* footer */}
{/* <hr></hr> */}
<div className=" box-border border-t-2  border-gray-700 flex flex-row justify-between w-full mt-20 text-black dark:text-white">

      <div className="flex flex-row md:ml-20 ml-3">
         <div className='w-6 mt-2 '>
          <Image alt="Logo" className='' src={logo} />
        </div>
        <h1 className='p-2 ml-1 md:text-lg text-base mr-4 md:block hidden'>Programming Pathshala</h1>
        <h1 className='p-2 ml-1 md:text-lg text-base mr-4 md:hidden block'>PPA</h1>
      </div>
      <div className="flex flex-row mr-20 ">
        <h1 className="p-2"><Link href=''>contact us</Link></h1>
        <h1 className="p-2 ml-5 mr-10"><Link href=''>terms of services</Link></h1>
      </div>
</div>
      </div>
    </>
  );
}
