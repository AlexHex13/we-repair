import React from "react";
import smarts from "../images-and-icons/smarts.png";
import {Image} from "react-bootstrap";
import laptop from "../images-and-icons/labtop.png";
import tv from "../images-and-icons/tv.png";
import tablet from "../images-and-icons/tablet.png";
import photo from "../images-and-icons/phototwo.png";
import compImg from "../images-and-icons/comp-img.png";
import projector from "../images-and-icons/projector.png";
import monitor from "../images-and-icons/monitor.png";
import coffeemach from "../images-and-icons/cof-mach.png";
import mono from "../images-and-icons/mono.png";


function RemontBlock() {
    return (
        <div className="remont-block">
           <div id="remont-block">
               <p><h3>Ремонтируем</h3></p>
           </div>
            <div className="square">
                <div className="square-one">
                    <div>
                        <Image src={smarts} height="250px"/>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div>
                        <p><b> Смартфоны </b></p>
                        <p>Более 300 брендов, <br/> срочный ремонт <br/> от 30 минут.</p>
                    </div>
                </div>
                &nbsp;
                &nbsp;
                <div className="square-two">
                    <div id="image-technic">
                        <div id="image-technic-one">
                            <div>
                                <Image src={laptop} width="140px" height="120px"/>
                                <p>Ноутбуки</p>
                            </div>
                            <div>
                                <Image src={tv} width="150px" height="120px"/>
                                <p>Телевизоры </p>
                            </div>
                        </div>
                        <div id="image-technic-two">
                            <div>
                                <Image src={tablet} width="150px" height="120px"/>
                                <p>Планшеты</p>
                            </div>
                            <div>
                                <Image src={photo} width="140px" height="130px"/>
                                <p>Фотоаппараты</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="square">
                <div className="square-two">
                    <div id="image-technic">
                        <div id="image-technic-one">
                            <div>
                                <Image src={mono} width="140px" height="120px"/>
                                <p>Моноблоки</p>
                            </div>
                            <div>
                                <Image src={monitor} width="150px" height="120px"/>
                                <p>Мониторы </p>
                            </div>
                        </div>
                        <div id="image-technic-two">
                            <div>
                                <Image src={projector} width="150px" height="120px"/>
                                <p>Проекторы</p>
                            </div>
                            <div>
                                <Image src={coffeemach} width="140px" height="130px"/>
                                <p>Кофемашины</p>
                            </div>
                        </div>
                    </div>
                </div>
                &nbsp;
                &nbsp;
                <div className="square-one">
                    <div>
                        <Image src={compImg} height="250px"/>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div>
                        <p><b> Компьютеры </b></p>
                        <p>Срочный ремонт неисправностей <br/>
                            любой сложности.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RemontBlock