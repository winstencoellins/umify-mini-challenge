import { Navbar } from "flowbite-react"

export default function Navigation () {
    return (
        <div className="inter w-11/12 mx-auto py-5">
           <Navbar >
                <Navbar.Brand>
                    <a href="/" className="self-center whitespace-nowrap text-xl font-semibold">
                    ScrapeBook
                    </a>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <a href="/" className="cursor-pointer hover:bg-slate-700 duration-200 mr-3 bg-slate-900 px-4 py-2 text-white rounded-full">
                    Get Started
                    </a>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <a href="#features" className="px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">Features</a>
                    <a href="#reviews" className="px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">Reviews</a>
                    <a href="#faqs" className="px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">FAQs</a>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}