function Header({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <header className="flex justify-center flex-col gap-3 mb-4 w-90">
            <h1 className="text-white text-3xl font-medium flex justify-center">{title}</h1>
            <span className=" text-center text-gray-600 text-base font-normal flex justify-center items-center">
                {subtitle}
            </span>
        </header>
    );
}
export default Header;
