export default function Faq () {
    let faqs = [
        {question:'What is Lorem Ipsum?', ans:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        {question:'Where does it come from?', ans:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
        {question:'Why do we use it?', ans:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        {question:'Where can I get some?', ans:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.'},
        {question:'The standard Lorem Ipsum passage, used since the 1500s', ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {question:'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC', ans:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
        {question:'1914 translation by H. Rackham', ans:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'},
    ]
    return (
        <div id="faqs" className="py-20">
            <div className="w-10/12 mx-auto">
                <h3 className="lexend font-display text-3xl tracking-tight text-slate-900 mb-5">Frequently asked questions</h3>
                <p className="inter mb-10">If you have anything else you want to ask, <a className="underline" href="mailto:example@gmail.com">reach out to us</a>.</p>
            </div>

            <div className="inter md:grid md:grid-rows-3 md:grid-flow-col md:gap-x-5 w-10/12 mx-auto">
                {
                    faqs.map((faq) => (
                        <div>
                            <h5 className="font-bold text-lg mb-5">{faq.question}</h5>
                            <p className="text-sm text-slate-500 mb-5">{faq.ans}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}