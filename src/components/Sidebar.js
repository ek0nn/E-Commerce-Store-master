import React  from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="breadcrumb mb-0 py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-8">
                    <p className="text-center mb-0">
                        <Link to="/" className="text-dark">
                            Home
                        </Link>{" "}
                    </p>
                </div>

            </div>

        </div>

        </div>
    )
  }
  
  export default Sidebar