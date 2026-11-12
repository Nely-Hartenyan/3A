function Header ({cartLength}){
    return (
        <header className="bg-black shadow-sm text-white h-[56px] ">
            <div className="flex justify-between items-center pt-[14px]">
                <h2 className="px-4 text-[20px]">TechShop</h2>
                <div className="flex mr-5">
                    <nav className="flex gap-5 px-8">
                        <a href='#'>Home</a>
                        <a href='#'>About</a>
                    </nav>
                    <p>Cart: {cartLength}</p>
                </div>
            </div>
        </header>
    )
}

export default Header