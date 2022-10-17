import ReviewCard from "./ReviewCard"

export default function Reviews () {
    let reviewers = [
        {review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: 'John Doe'},
        {review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', name: 'Steve Rogers'},
        {review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: 'Tony Stark'},
    ]

    return (
        <div id="reviews" className="py-20">
            <div className="text-center mb-10">
                <h1 className="lexend font-display text-3xl tracking-tight sm:text-4xl max-w-2xl mx-auto">Loved by travellers worldwide.</h1>
                <p className="inter mt-4 text-lg tracking-tight max-w-2xl mx-auto">Our software has helped travellers all over the world in managing their trips.</p>
            </div>

            <div className="w-8/12 md:w-10/12 mx-auto md:grid md:grid-cols-3 md:gap-x-20">         
                {
                    reviewers.map((r) => (
                        <ReviewCard review={r.review} name={r.name} />
                    ))
                }
            </div>
        </div>
    )
}