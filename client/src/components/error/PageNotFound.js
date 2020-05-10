import * as React from "react";
import error404 from './error404.png'
import {Link} from "react-router-dom";
class PageNotFound extends React.Component{
    render(){
        return <div>
            <img src={error404}  />
            <p style={{textAlign:"center"}}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>;
    }
}
export default PageNotFound;