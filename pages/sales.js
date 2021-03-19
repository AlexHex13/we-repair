import React from "react";
import {Button, Image} from "react-bootstrap";
import headImg from "../components/images-and-icons/head-img.png";
import Header from "../components/nav";
import Footer from "../components/body-components/footer";


function Sale() {
    return (
        <>
            <Header/>
            <div className="sales">
                <p><h2>Акции</h2></p>
                <div>
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
                        </div>
                        &nbsp;
                        <div className="head-img">
                            <Image src={headImg} width="375em" height="320em"/>
                        </div>
                        <p>
                            Ремонт техники всегда проходит по слаженной схеме. Потенциальный клиент изучает
                            предоставленную
                            информацию и убеждается в том, что сотрудничество обещает быть успешным. Затем проводится
                            бесплатная диагностика, после которой становится возможным быстрый ремонт.
                            В обязательном порядке применяются качественные запчасти, которые придают оптимальную
                            надежность
                            используемой продукции.
                        </p>
                        <Button variant="warning">Оставить заявку</Button>
                    </div>
                </div>
                <div className="margin">

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
                        </div>
                        &nbsp;
                        <div className="head-img">
                            <Image src={headImg} width="375em" height="320em"/>
                        </div>
                        <p>
                            Ремонт техники всегда проходит по слаженной схеме. Потенциальный клиент изучает
                            предоставленную
                            информацию и убеждается в том, что сотрудничество обещает быть успешным. Затем проводится
                            бесплатная диагностика, после которой становится возможным быстрый ремонт.
                            В обязательном порядке применяются качественные запчасти, которые придают оптимальную
                            надежность
                            используемой продукции.
                        </p>
                        <Button variant="warning">Оставить заявку</Button>
                    </div>
                </div>
                <div className="margin">

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

                        </div>
                        &nbsp;
                        <div className="head-img">
                            <Image src={headImg} width="375em" height="320em"/>
                        </div>
                        <p>
                            Ремонт техники всегда проходит по слаженной схеме. Потенциальный клиент изучает
                            предоставленную
                            информацию и убеждается в том, что сотрудничество обещает быть успешным. Затем проводится
                            бесплатная диагностика, после которой становится возможным быстрый ремонт.
                            В обязательном порядке применяются качественные запчасти, которые придают оптимальную
                            надежность
                            используемой продукции.
                        </p>
                        <Button variant="warning">Оставить заявку</Button>
                    </div>
                </div>
            </div>
            <div className="margin">
                <Header/>
                <Footer/>
            </div>
        </>
    )
}


export default Sale;