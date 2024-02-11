import SideDrawerMenu from "./menu/SideDrawerMenu";
import NavBarMenu from "./menu/NavBarMenu";
const MenuItemComponent = (props) => {
    return (
        <>
            <SideDrawerMenu show={props.show} />
            <NavBarMenu />
        </>
    )
}

export default MenuItemComponent;