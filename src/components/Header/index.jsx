import logo from "img/logo/logo.png"

export function Header() {
    return (
        <header className="header" >
            <div className="container">
                <a href="/" className="header__logo">
                    <img src={logo} alt="logo" />
                    <strong>
                        Online Store
                    </strong>
                </a>
            </div>
        </header>
    )
}