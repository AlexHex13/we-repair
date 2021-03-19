import React from "react";
import {Button, Col, Form, Image} from "react-bootstrap";
import video from "../images-and-icons/video.png";
import time from "../images-and-icons/time-icon.png";
import money from "../images-and-icons/money-icon.png";
import car from "../images-and-icons/car-icon.png";

function Calculate() {

    return (
        <>
            <div className="calculate-block">
                <p><h3>Рассчитать стоимость ремонта </h3></p>
                <p>Узнайте стоимость ремонта в три клика!</p>
                <div className="calc-cost-repair">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control id='form-state' size="sm" as="select">
                            <option>Смартфон</option>
                            <option>Ноутбук</option>
                            <option>Моноблок</option>
                            <option>Компьютер</option>
                        </Form.Control>

                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control id='form-state' size="sm" as="select">
                            <option>Поломка</option>
                            {/*<option>Ноутбук</option>*/}
                            {/*<option>Моноблок</option>*/}
                            {/*<option>Компьютер</option>*/}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="warning">Расчитать стоимость</Button>
                </div>
            </div>
            <div className="bst-work">
                <div className="bst-text">
                    <p><h3><b>Работаем лучше всех. <br/>
                        Только посмотрите!</b></h3></p>
                    <p>
                        Наш сервисный центр в Санкт-Петербурге <br/>
                        занимаетсяяя проведением качественного <br/>
                        также также тако ремонта, а также
                    </p>
                    <Button variant="warning">Оставить заявку</Button>
                </div>
                <div>
                    <Image src={video} width="400px" height="400px"/>
                </div>
            </div>
            <div className="good-job">
                <p id = "good-job"><h3><b>Уже 15 лет делаем добро!</b></h3></p>
                <div className="block-wrap">
                    <div className="good-block">
                        <div className="img-good-block">
                            <Image src={time} width="85px" height="85px"/>
                        </div>
                        <p className="good-block-text">
                            Lorem ipsum dolor sit amet, <br/>
                            consectetuer adipiscing.
                        </p>
                        <hr className="hr-line"/>
                    </div>
                    <div className="good-block">
                        <div className="img-good-block">
                            <Image src={money} width="85px" height="85px"/>
                        </div>
                        <p className="good-block-text">
                            Lorem ipsum dolor sit amet, <br/>
                            consectetuer adipiscing.
                        </p>
                        <hr className="hr-line"/>
                    </div>
                    <div className="good-block">
                        <div className="img-good-block">
                            <Image src={car} width="85px" height="85px"/>
                        </div>
                        <p className="good-block-text">
                            Lorem ipsum dolor sit amet, <br/>
                            consectetuer adipiscing.
                        </p>
                        <hr className="hr-line"/>
                    </div>
                </div>
                &nbsp;
                &nbsp;
                <div className="block-wrap">
                    <div className="good-block">
                        <div className="img-good-block">
                            <Image src={time} width="85px" height="85px"/>
                        </div>
                        <p className="good-block-text">
                            Lorem ipsum dolor sit amet, <br/>
                            consectetuer adipiscing.
                        </p>
                        <hr className="hr-line"/>
                    </div>
                    <div className="good-block">
                        <div className="img-good-block">
                            <Image src={money} width="85px" height="85px"/>
                        </div>
                        <p className="good-block-text">
                            Lorem ipsum dolor sit amet, <br/>
                            consectetuer adipiscing.
                        </p>
                        <hr className="hr-line"/>
                    </div>
                    <div className="good-block">
                        <div className="img-good-block">
                            <Image src={car} width="85px" height="85px"/>
                        </div>
                        <p className="good-block-text">
                            Lorem ipsum dolor sit amet, <br/>
                            consectetuer adipiscing.
                        </p>
                        <hr className="hr-line"/>
                    </div>
                </div>

            </div>
        </>
    )

}


export default Calculate;