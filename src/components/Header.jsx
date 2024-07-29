import Nav from "./Navigation";

function Header() {
    return (
        <>
            <header className="bg-[#DCA47C] p-3">
                <div className="container mx-auto">
                    <h1 className="text-3xl text-center font-bold rounded-full">Veysel Arslan</h1>
                    <Nav />
                </div>
            </header>
        </>
    )
}

export default Header;