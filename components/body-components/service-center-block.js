import React from "react";
import one from "../images-and-icons/0.png";
import two from "../images-and-icons/2.png";
import three from "../images-and-icons/3.png";
import {Button, Image} from "react-bootstrap";
import images from "../images-and-icons/images-work.png";
import notebook from "../images-and-icons/notebookbig.png";

function ServiceCenterBlock() {
    return (
        <>
            <div className="service-center-block">
                <p id='service-center-block'><h3><b>Самый лучший в мире сервисный центр</b></h3></p>
                <div className="content">
                    <div className="big-text">
                        Ремонт техники всегда проходит по слаженной схеме. <br/> Потенциальный клиент изучает
                        предоставленную<br/>
                        информацию и убеждается в том, что сотрудничество<br/> обещает быть успешным. Затем проводится
                        бесплатная<br/>
                        диагностика, после которой становится возможным<br/> быстрый ремонт.<br/>
                        <br/>
                        <br/>
                        <br/>
                        В обязательном порядке применяются качественные <br/>запчасти, которые придают оптимальную
                        надежность<br/>
                        используемой продукции. Такая слаженная схема <br/>гарантирует то, что сервисный центр может
                        оказать<br/> помощь в
                        устранении любых неисправностей,<br/> имеющих отношение к планшетам, компьютерам или<br/> другой
                        технике.<br/>
                        <br/>
                        <br/>
                        <br/>
                        Мастера нашего сервисного центра проводят<br/> обслуживание и ремонт смартфонов,
                        планшетов,<br/> ноутбуков,
                        мобильной техники, персональных <br/>компьютеров независимо от бренда. В нашу компанию <br/>часто
                        обращаются
                        клиенты, которым требуется ремонт<br/> компьютерной техники.<br/>
                        Мы предлагаем не только проведение ремонта, но и <br/>огромный выбор оригинальных запчастей.

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Благодаря<br/>
                        наличию собственного склада есть возможность<br/> выбора наиболее редкой детали для замены
                        по<br/> доступной
                        стоимости.<br/>
                        Мастера нашего сервисного центра проводят<br/> обслуживание и ремонт смартфонов,
                        планшетов,<br/> ноутбуков,
                        мобильной техники, персональных<br/> компьютеров независимо от бренда.
                    </div>
                    <div className="images">
                        <Image src={one} width="512px" height="342px"/>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Image src={two} width="512px" height="342px"/>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Image src={three} width="512px" height="342px"/>
                    </div>
                </div>
            </div>
            <div className="image-remont">
                <div id='image-remont'>
                    <p><h3>Работаем лучше всех. Только посмотрите!</h3></p>
                    <p>Наш сервисный центр в Санкт-Петербурге занимается проведением <br/> качественного ремонта, а
                        также
                        восстановлением программного <br/> обеспечения планшетов и компьютеров, ноутбуков
                        и <br/> нетбуков,
                        айфонов и
                        остальных переносных устройств. </p>
                    <Button variant="warning">Оставить заявку</Button>
                </div>
            </div>
            <div id="images-work">
                <Image src={images}/>
            </div>
            <div className="reclam-block">
                <p><h3>Самый лучший в мире сервисный центр!</h3></p>
                <div id="reclam-block">
                    <div>
                        <Image src={notebook} width="975px" height="1025px"/>
                    </div>
                    <div>
                        Ремонт техники всегда проходит по слаженной схеме. <br/> Потенциальный клиент изучает
                        предоставленную<br/>
                        информацию и убеждается в том, что сотрудничество<br/> обещает быть успешным. Затем проводится
                        бесплатная<br/>
                        диагностика, после которой становится возможным<br/> быстрый ремонт.
                        В обязательном порядке применяются <br/>качественные запчасти, которые придают оптимальную
                        <br/>надежность
                        используемой продукции. Такая слаженная схема<br/> гарантирует то, что сервисный центр может
                        оказать<br/>
                        помощь в устранении любых неисправностей,<br/> имеющих отношение к планшетам, компьютерам
                        или<br/> другой
                        технике. Мастера нашего сервисного центра<br/> проводят обслуживание и ремонт смартфонов, <br/>планшетов,
                        ноутбуков, мобильной техники, <br/>персональных компьютеров независимо от бренда.<br/>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ServiceCenterBlock;