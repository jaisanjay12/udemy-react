import img1 from "../assets/images/c1.jpg"
import img2 from "../assets/images/c2.jpg"
import img3 from "../assets/images/c3.jpg"
import img4 from "../assets/images/c4.jpg"

function Popular(){
    return(<div className="popular">
    <h1 className="popular__title">Most Popular</h1>
    <p className="popular__subtitle">Pick the best fit</p>
    <div className="popular__container">
        <div className="course-card">
            <img src={img1} alt="img1"></img>
            <h3> Python  Materclass</h3>
            <p>Col Steele</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>449 <del>2500</del></p>
        </div>
        <div className="course-card">
            <img src={img2} alt="img2"></img>
            <h3>Web Development 2024</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>1200 <del>3000</del></p>
        </div>
        <div className="course-card">
            <img src={img3} alt="img3"></img>
            <h3>Master UI/UX Design</h3>
            <p>Col Steele</p>
            <p>3.9⭐⭐⭐</p>
            <p>800 <del>2000</del></p>
        </div>
        <div className="course-card">
            <img src={img4} alt="img4"></img>
            <h3>Basic to Advanced Java</h3>
            <p>Col Steele</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>1999 <del>4500</del></p>
        </div>
        <div className="course-card">
            <img src={img3} alt="img5"></img>
            <h3>Master UI/UX Design</h3>
            <p>Col Steele</p>
            <p>3.9⭐⭐⭐</p>
            <p>800 <del>2000</del></p>
        </div>
        <div className="course-card">
            <img src={img4} alt="img6"></img>
            <h3>Basic to Advanced Java</h3>
            <p>Col Steele</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>1999 <del>4500</del></p>
        </div>
        <div className="course-card">
            <img src={img1} alt="img7"></img>
            <h3> Python  Materclass</h3>
            <p>Col Steele</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>449 <del>2500</del></p>
        </div>
        <div className="course-card">
            <img src={img2} alt="img8"></img>
            <h3>Web Development 2024</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>1200 <del>3000</del></p>
        </div>
    </div>
</div>)
}
export default Popular