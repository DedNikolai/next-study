import Navigation from "../Navigation/Navigation";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'Blog', href: '/blog'}
]


const Header = () => {
    return (
        <header>
            <Navigation navLinks={navItems}/>
        </header>
    )
}

export default Header;