import React from "react";
import {Button, Col, Form, Image} from "react-bootstrap";
import headImg from "../images-and-icons/head-img.png";

function Banner() {
    return (
        <div className="banner">

            <div className="inner">
                <div className="form-block">
                    <div id="form-block-text">
                        <p id="sale-text">
                            Скидки 15% на все виды ремонта <br/>
                            до конца июля
                        </p>
                        <p>
                            Текст акции может быть здесь под заголовком <br/>
                            и над красивой большой кнопкой
                        </p>
                        <div id="form-call">
                            <Form.Row className="form-controls">
                                <Form.Control id="form-control" type="text" placeholder="Ваше имя"/>
                                &nbsp;
                                <Form.Control id="form-control" type="number" placeholder="Номер телефона"/>
                                &nbsp;
                                <Button variant="warning">Обратный звонок</Button>
                            </Form.Row>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Связаться с Вами по SMS?"/>
                                <Form.Text className="text-muted">
                                    Нажимая кнопку “Оставить заявку”, я даю согласие на обработку персональных данных.
                                </Form.Text>
                            </Form.Group>
                        </div>
                    </div>
                    &nbsp;

                    <div className="head-img">
                            <Image src={headImg} width="375em" height="320em"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;