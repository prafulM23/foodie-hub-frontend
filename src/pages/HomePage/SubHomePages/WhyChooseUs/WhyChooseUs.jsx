import "./WhyChooseUs.css"
const WhyChooseUs = () => {
    return (
        <>
            <section className="whychoose-section-box">
                <h1>Why Choose Us</h1>
                <p>We provide the best food experience for our customers</p>
                <div className="whychoose-field-box">
                    <div className="whychoose-card">
                        <h3> <img src="/logo/delivery.svg" alt="" />Fast Delivery</h3>
                        <p>Get your favorite food delivered hot and fresh in minutes.</p>
                    </div>

                    <div className="whychoose-card">
                        <h3><img src="/logo/price.svg" alt="" /> Affordable Prices</h3>
                        <p>Enjoy delicious meals at pocket-friendly prices.</p>
                    </div>

                    <div className="whychoose-card">
                        <h3><img src="/logo/quality.svg" alt="" /> Quality Food</h3>
                        <p>We serve freshly prepared food with the best ingredients.</p>
                    </div>

                    <div className="whychoose-card">
                        <h3><img src="/logo/safe.svg" alt="" /> Safe & Hygienic</h3>
                        <p>Our food is prepared in a clean and hygienic environment.</p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default WhyChooseUs