const NavBar = ({data})=> {
    console.log(data)
    return (
        <div className="w-full h-[3vh] grad-blue-bg text-white flex justify-center">
            {data.Appname}
        </div>
    )
}

export default NavBar;
