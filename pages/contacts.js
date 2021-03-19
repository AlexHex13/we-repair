import React from "react";
import Header from "../components/nav";
import Footer from "../components/body-components/footer";
import map from "../components/images-and-icons/map.png";
import {Button, Form, Image} from "react-bootstrap";

function Contacts() {
    return (
        <>
            <Header/>
            <div className="contacts">
                <div>
                    <p><h2>Контакты</h2></p>
                    <div id="call">
                        <h3>Позвоните нам</h3>
                        <p>(+8 999 098 98 98)</p>
                    </div>
                </div>
                <div id="block">
                    <br/>
                    <p><h3>Работаем без перерывов и выходных</h3></p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-clock" viewBox="0 0 16 16">
                            <path
                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        &nbsp;
                        9:00 - 21:00
                    </p>
                </div>

            </div>
            <div className="contacts">
                <div>
                    <div id="call">
                        <h3>Ждем вас по адресу</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        &nbsp;
                        <p>Мучной переулок, 32134 Садовая улица название</p>
                    </div>
                </div>
                <div>
                    <p><h3>Напишите нам</h3></p>
                    <p>
                        Оставьте заявку и мы перезвоним
                    </p>
                </div>
            </div>

            <div className="contacts">
                <div>
                    <div id="call">
                        <Image src={map} width="518" height="254"/>
                    </div>
                </div>
                <div>
                    <Form.Row className="form-controls">
                        <Form.Control id="form-control" type="text" placeholder="Ваше имя"/>
                        &nbsp;
                        <Form.Control id="form-control" type="number" placeholder="Номер телефона"/>
                        &nbsp;
                        <Form.Control id="form-control-comment" type="text" placeholder="Ваш комментарий"/>
                    </Form.Row>
                    <br/>
                    <Button variant="warning">Обратный звонок</Button>

                </div>

            </div>
            <div id="footer">
                <Header/>
                <Footer/>
            </div>

        </>
    )
}

export default Contacts;