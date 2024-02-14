const SideDrawerMenu = (props) => {
    let menuItmes = ["Home", "Services", "Case History", "Blog", "Testimonials", "Contact Us"];
    return (
        <>
            {/* The side drawer to be shown upto medium sized screens */}
            {props.show && <div className="box-border border-#00a79d border-2 w-1/2 h-screen md:hidden shadow-2xl shadow-cyan-700 animate-slide-in-right fixed top-0 right-0 z-10 backdrop-blur-lg" onClick={() => alert('side drawer clicked')}>
                {menuItmes.map((menuItem) => {
                    return <div className="box-border border-2 py-4 border-t-0 border-r-0 border-l-0 text-center text-lg" key={menuItem}>{menuItem}</div>
                })}
            </div>}
        </>
    )
}

export default SideDrawerMenu;