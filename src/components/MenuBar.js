const MenuBar = () => {

    let menuItmes = ["Home", "Services", "Case History", "Blog", "Testimonials", "Contact Us"];
    return (
        <>
            <div className="box-border border-#00a79d border-2 w-1/2 h-screen md:hidden shadow-2xl shadow-cyan-700">
                {menuItmes.map((menuItem) => {
                    return <div className="box-border border-2 py-4 border-t-0 border-r-0 border-l-0 text-center text-lg">{menuItem}</div>
                })}
            </div>
            <div className="hidden md:block box-border border-#00a79d border-2 w-full">
                <div className="flex flex-row justify-evenly">
                    {menuItmes.map((menuItem) => {
                        return <div>{menuItem}</div>
                    })}
                </div>
            </div>
        </>
    )
}

export default MenuBar;