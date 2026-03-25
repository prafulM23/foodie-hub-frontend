import { Star } from "lucide-react"
import "./FoodList.css"
const FoodList = () => {
    return (
        <>
            <section className="foodlist-navbar-box">

                <h2>Choose Your Favorite Meal</h2>
                <select>
                    <option value="/"> Rating</option>
                    <option value="/2.4">2.4</option>
                    <option value="/2.5">2.5</option>
                    <option value="/3.5">3.5</option>
                </select>

            </section>
            <section className="foodlist-box">
                <div className="food-grid-box" >

                    <div className="food-grid-box1">
                        <div className="food-img-box">
                            <img src="/vegburger1.jpg" alt="" />
                        </div>
                        <div className="food-text-box1">
                            <h1>Crispy Veg Burger</h1>
                            <p>Crispy Hot & Testy Veg Burger</p>
                        </div>
                        <div className="food-price-btn-box">
                            <p> 250/-</p>
                            <button>+ADD</button>
                        </div>
                    </div>


                    <div className="food-grid-box1">
                        <div className="food-img-box">
                            <img src="/vegburger2.jpg" alt="" />
                        </div>
                        <div className="food-text-box1">
                            <h1>Crispy Veg Burger</h1>
                            <p>Crispy Hot & Testy Veg Burger</p>
                        </div>
                        <div className="food-price-btn-box">
                            <p> 250/-</p>
                            <button>+ADD</button>
                        </div>
                    </div>


                    <div className="food-grid-box1">
                        <div className="food-img-box">
                            <img src="/veggleburger2.jpg" alt="" />
                        </div>
                        <div className="food-text-box1">
                            <h1>Crispy Veg Burger</h1>
                            <p>Crispy Hot & Testy Veg Burger</p>
                        </div>
                        <div className="food-price-btn-box">
                            <p> 250/-</p>
                            <button>+ADD</button>
                        </div>
                    </div>


                    <div className="food-grid-box1">
                        <div className="food-img-box">
                            <img src="/spicypaneer.jpg" alt="" />
                        </div>
                        <div className="food-text-box1">
                            <h1>Crispy Veg Burger</h1>
                            <p>Crispy Hot & Testy Veg Burger</p>
                        </div>
                        <div className="food-price-btn-box">
                            <p> 250/-</p>
                            <button>+ADD</button>
                        </div>
                    </div>


                    <div className="food-grid-box1">
                        <div className="food-img-box">
                            <img src="/spicychicken.jpg" alt="" />
                        </div>
                        <div className="food-text-box1">
                            <h1>Crispy Veg Burger</h1>
                            <p>Crispy Hot & Testy Veg Burger</p>
                        </div>
                        <div className="food-price-btn-box">
                            <p> 250/-</p>
                            <button>+ADD</button>
                        </div>
                    </div>



                    <div className="food-grid-box1">
                        <div className="food-img-box">
                            <img src="/pannerveg3.jpg" alt="" />
                        </div>
                        <div className="food-text-box1">
                            <h1>Crispy Veg Burger</h1>
                            <p>Crispy Hot & Testy Veg Burger</p>
                        </div>
                        <div className="food-price-btn-box">
                            <p> 250/-</p>
                            <button>+ADD</button>
                        </div>
                    </div>


                    <div className="food-grid-box1">
                        <div className="food-img-box">
                            <img src="/mealschiken2.jpg" alt="" />
                        </div>
                        <div className="food-text-box1">
                            <h1>Crispy Veg Burger</h1>
                            <p>Crispy Hot & Testy Veg Burger</p>
                        </div>
                        <div className="food-price-btn-box">
                            <p> 250/-</p>
                            <button>+ADD</button>
                        </div>
                    </div>


                    <div className="food-grid-box1">
                        <div className="food-img-box">
                            <img src="/mealschicken3.jpg" alt="" />
                        </div>
                        <div className="food-text-box1">
                            <h1>Crispy Veg Burger</h1>
                            <p>Crispy Hot & Testy Veg Burger</p>
                        </div>
                        <div className="food-price-btn-box">
                            <p> 250/-</p>
                            <button>+ADD</button>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}


export default FoodList


