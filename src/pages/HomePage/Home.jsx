import "./Home.css"
import Categories from "./SubHomePages/Categories"
import Foods from "./SubHomePages/Foods/Food"
import Hero from "./SubHomePages/Hero"
const Home = () => {
    return (
        <>
            <Hero />
            {/* <Categories /> */}
            <Foods />
        </>
    )
}

export default Home