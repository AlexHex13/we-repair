import React from "react";
import Banner from "./banner";
import Icons from "./icons";
import PopularModels from "./popular-models";
import RemontBlock from "./remont-block";
import Calculate from "./calculate-the-cost";
import ServiceCenterBlock from "./service-center-block";
import Header from "../nav";
import Footer from "./footer";


function Body() {

    return (
        <div>
            <Banner/>
            <Icons/>
            <PopularModels/>
            <RemontBlock/>
            <Calculate/>
            <ServiceCenterBlock/>
            <Icons/>
            <Header/>
            <Footer/>
        </div>
    )
}

export default Body;