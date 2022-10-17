export default function Footer () {
    return (
        <div className="inter pt-20 pb-10 text-center">
            <a href="/" className="text-4xl font-semibold mb-5">ScrapeBook</a>
            <div className="w-8/12 mx-auto md:w-4/12 grid grid-cols-3 gap-x-10 mb-5">
                <a href="#features" className="py-2 px-2 hover:bg-slate-100 duration-200 text-slate-500 rounded-lg">Features</a>
                <a href="#reviews" className="px-2 py-2 hover:bg-slate-100 duration-200 text-slate-500 rounded-lg">Reviews</a>
                <a href="#faqs" className="px-2 py-2 hover:bg-slate-100 duration-200 text-slate-500 rounded-lg">FAQs</a>
            </div>
            <hr />
            <p className="md:text-left w-10/12 mx-auto pt-10 text-slate-500 text-center">Copyright <span>&copy;</span> 2022 ScrapeBook. All rights reserved.</p>
        </div>
    )
}