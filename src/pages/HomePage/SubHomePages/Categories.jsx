import "./Categories.css"
const Categories = () => {
    return (
        <>
            <section className="categories-section-box">
                <h1>Categories</h1>
                <div className="categories-box">

                    <div className="categories-burger-box categories">
                        <img src="/burger.png" alt="" />
                        <h3>Burgers</h3>
                    </div>

                    <div className="categories-pasta-box categories">
                        <img src="/pizza.png" alt="" />
                        <h3>Pizzas</h3>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Categories