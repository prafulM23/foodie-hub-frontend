import "./Hero.css"
const Hero = () => {
    return (
        <>
            <div className="hero-box">

                <div className="hero-benner-text-box">
                    <p className="hero-tagline">🔥 Fresh & Delicious</p>

                    <h1>
                        Hot & Tasty <span>Burgers</span> <br />
                        With Creamy <span>Pasta</span>
                    </h1>

                    <p className="hero-description">
                        Enjoy the best handmade burgers and creamy pasta
                        delivered hot and fresh at your doorstep.
                    </p>

                    <div className="hero-btns">
                        <button className="order-btn">Order Now</button>
                    </div>
                </div>

                <div className="hero-benner-img-box">
                    <img src="/Bennerbgimg.png" alt="" />
                </div>

            </div>

        </>
    )
}

export default Hero