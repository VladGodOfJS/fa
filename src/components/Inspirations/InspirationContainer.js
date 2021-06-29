import { connect } from "react-redux";
import Inspirations from "./Inspirations";

let mapStateToProps=(state)=>{
    return{
        slides:state.sliderPage.slides
    }
}
export default connect(mapStateToProps)(Inspirations)