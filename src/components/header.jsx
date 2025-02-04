import { NavLink } from "react-router-dom";

const Header = () => {
    const productList = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Products",
            url: "/products"
        },
        {
            name: "Contact",
            url: "/contact"
        },
      
    ];

    return (
        <>
            <nav>
                <ul>
                    {
                        productList.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.url}>{item.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
};

export default Header;
