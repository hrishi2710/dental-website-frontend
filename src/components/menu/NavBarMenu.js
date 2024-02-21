const NavBarMenu = () => {
    let menuItmes = ["Home", "Services", "Case History", "Blog", "Testimonials", "Contact Us"];
    return (
        <>
            {/* The top bar menu to be shown from medium and above sized screens */}
            <div className="hidden md:block box-border border-teal-400 border-1 w-4/5">
                <div className="flex flex-row justify-between">
                    {menuItmes.map((menuItem) => {
                        return <div key={menuItem}>{menuItem}</div>
                    })}
                </div>
            </div>
        </>
    )
}

export default NavBarMenu;