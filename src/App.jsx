import {Loader} from "lucide-react"

import Footer from "./components/Footer";  //MARKDOWN
import NavBar from "./components/NavBar";  //MARKDOWN

const App = () => {

    const appname = "Footer Data"  //MARKDOWN

    const data = {  //MARKDOWN
        Appname: "M<MM",  //MARKDOWN
        Appdata: "INc"//  MARKDOWN
    }

    return(
        <>
        <div className="h-screen flex justify-center items-center bg-black">
            <div className="h-3/6 w-[30%] flex justify-center items-center bg-[#9a091f] rounded-md shadow-2xl">
            <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
                <input type="text" name="" id="" placeholder="Enter Your Name" className="p-3 bg-black w-full text-[#d7354d] font-bold outline-none active: outline-none focus: border-b-4 hover:border-red-600"/>
                <input type="email" name="" id="" placeholder="Enter Your Email" className="p-3 bg-black w-full text-[#d7354d] font-bold outline-none active: outline-none focus: border-b-4 hover:border-red-600"/>
                <input type="number" name="" id="" placeholder="Enter Your Number" className="p-3 bg-black w-full text-[#d7354d] font-bold outline-none active: outline-none focus: border-b-4 hover:border-red-600"/>
                <input type="password" name="" id="" placeholder="Enter Your Password" className="p-3 bg-black w-full text-[#d7354d] font-bold outline-none active: outline-none focus: border-b-4 hover:border-red-600"/>
                <button type="submit" className="w-full bg-black text-white font-bold"><Loader className="animate-spin"/>Register</button>
            </form>
            </div>
        </div>

        <div className="h-screen w-screen flex flex-col justify-start items-center">  //MARKDOWN
            <NavBar data={data} />  //MARKDOWN
            <Footer appdata={appname} />  //MARKDOWN
        </div>  //MARKDOWN
        
        </>
    )
}

export default App;

{/*

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
    const appname = "Footer Data"

    const data = {
        Appname: "M<MM",
        Appdata: "INc"
    }

    return (
        <>
        <div className="h-screen w-screen flex flex-col justify-start items-center">
            <NavBar data={data} />
            <Footer appdata={appname} />
        </div>
        </>
    )
}

export default App;

*/}