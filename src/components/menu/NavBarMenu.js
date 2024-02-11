const NavBarMenu = () => {
    let menuItmes = ["Home", "Services", "Case History", "Blog", "Testimonials", "Contact Us"];
    return (
        <>
            {/* The top bar menu to be shown from medium and above sized screens */}
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

export default NavBarMenu;