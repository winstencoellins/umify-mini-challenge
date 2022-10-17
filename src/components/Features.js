import Highlighter from "./logo/Highlighter"
import Manage from "./logo/Manage"
import Robot from "./logo/Robot"

export default function Features () {
    let features = [
        {featureName: 'Highlighting', desc: 'Adding important information as fast as moving the mouse through texts or paragraphs.', icon: <Highlighter />},
        {featureName: 'Easy Management', desc: 'Easily manage or plan your trip with our friendly User Interface.', icon: <Manage /> },
        {featureName: 'Automation', desc: 'You do not need to manually collate main information from the website.', icon: <Robot />}
    ]

    return (
        <div id="features" className="py-20 bg-gradient-to-l from-slate-700 to-slate-900">
            <div className="mx-10 md:text-center mb-20">
                <h3 className="lexend font-display text-3xl tracking-tight text-white sm:text-4xl max-w-2xl mx-auto">Simplifying trip planning experience.</h3>
                <p className="inter mt-4 text-lg tracking-tight text-slate-200 max-w-2xl mx-auto">Because we value your time, we want to make everything simple and fast for your trip planning without wasting too much time with web scraping technology.</p>
            </div>

            <div className="md:grid md:grid-cols-3 md:gap-x-20 mx-10 md:w-8/12 md:mx-auto">
                {
                    features.map((f) => (
                        <div className="mb-10 mx-auto max-w-2xl">
                            <div className="text-slate-200 mb-2">{f.icon}</div>
                            <h4 className="lexend font-medium text-xl mb-2 text-white">{f.featureName}</h4>
                            <p className="inter text-slate-400">{f.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}