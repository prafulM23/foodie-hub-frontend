import "./Home.css"
import Categories from "./SubHomePages/Categories/Categories"
import Foods from "./SubHomePages/Foods/Food"
import Hero from "./SubHomePages/Hero/Hero"
import WhyChooseUs from "./SubHomePages/WhyChooseUs/WhyChooseUs"
const Home = () => {
    return (
        <>
            <Hero />
            {/* <Categories /> */}
            <Foods />
            <WhyChooseUs />
        </>
    )
}

export default Home