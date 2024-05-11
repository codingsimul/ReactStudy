import Header from "./header";
import Mycard from "./mycard";
import {Link} from "react-router-dom";
function homework(){
    return(
        <div>
            <Header></Header>
            <Link to="/homework">홈페이지</Link>
            <Mycard></Mycard>
        </div>
    )
}
export default homework;