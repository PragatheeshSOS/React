const App = () => {
    return(
        <>
        <div className="h-screen flex justify-center items-center bg-black">
            <div className="h-3/6 w-[30%] flex justify-center items-center bg-[#9a091f] rounded-md shadow-2xl">
            <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
                <input type="text" name="" id="" placeholder="Enter Your Name" className="p-3 bg-black w-full text-[#d7354d] font-bold outline-none active: outline-none focus: border-b-4 hover:border-red-600"/>
                <input type="email" name="" id="" placeholder="Enter Your Email" className="p-3 bg-black w-full text-[#d7354d] font-bold outline-none active: outline-none focus: border-b-4 hover:border-red-600"/>
            </form>
            </div>
        </div>
        </>
    )
}

export default App;
