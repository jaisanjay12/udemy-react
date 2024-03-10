import img from "../assets/images/saleimg.jpeg"
function Saleimage(){
    return(<div className="sale-image">
    <img src={img} alt="Saleimage"></img>
    <div class="sale-image__offer">
        <h2>Udemy Flash Sale! 24 hours to save.</h2>
        <p>Get the top Courses for just 499.just one day to save but a lifetime to learn</p>
    </div>

</div>)
}
export default Saleimage