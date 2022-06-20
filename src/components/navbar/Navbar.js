function Navbar() {
    return (
        <nav className="navbar bg-light" style={{ minHeight: '10vh' }}>
            <div className="container-fluid">
                <div className="navbar-brand">Navbar</div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar