import Nav from "./Navigation";

function Header() {
    return (
        <>
            <header className="bg-neutral text-neutral-content p-3">
                <div className="container mx-auto">
                    <h1 className="text-3xl text-neutral text-center font-bold rounded-full bg-white">Veysel Arslan</h1>
                    <Nav />
                </div>
            </header>
        </>
    )
}

export default Header;