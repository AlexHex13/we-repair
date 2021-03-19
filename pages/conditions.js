import React from "react";
import Header from "../components/nav";
import Footer from "../components/body-components/footer";
import {Image} from "react-bootstrap";
import one from "../components/images-and-icons/0.png";
import two from "../components/images-and-icons/2.png";
import three from "../components/images-and-icons/3.png";


function Conditions() {
    return (
        <>
            <Header/>
            <div className='conditions'>
                <p><h2>Условия работы</h2></p>
                <div id="conditions">
                    <div>
                        <div id="square"></div>

                        <div id="conditions-text">
                            <p><h3>Бесплатная доставка курьером</h3></p>
                            Ремонт техники всегда проходит по слаженной схеме. <br/> Потенциальный клиент изучает
                            предоставленную<br/>
                            информацию и убеждается в том, что сотрудничество<br/> обещает быть успешным. Затем
                            проводится
                            бесплатная<br/> диагностика, после которой становится возможным <br/>быстрый ремонт.
                        </div>
      <div id="square"></div>

                        <div id="conditions-text">
                            <p><h3>Бесплатная диагностика</h3></p>
                            Ремонт техники всегда проходит по слаженной схеме. <br/> Потенциальный клиент изучает
                            предоставленную<br/>
                            информацию и убеждается в том, что сотрудничество<br/> обещает быть успешным. Затем
                            проводится
                            бесплатная<br/> диагностика, после которой становится возможным <br/>быстрый ремонт.
                        </div>
                        <div id="square"></div>

                        <div id="conditions-text">
                            <p><h3>Условие 3</h3></p>
                            Ремонт техники всегда проходит по слаженной схеме. <br/> Потенциальный клиент изучает
                            предоставленную<br/>
                            информацию и убеждается в том, что сотрудничество<br/> обещает быть успешным. Затем
                            проводится
                            бесплатная<br/> диагностика, после которой становится возможным <br/>быстрый ремонт.
                        </div>
                        <div id="square"></div>
                    </div>
                    <div>
                        <div className="images">
                            <div id="square"></div>

                            <Image src={one} width="512px" height="342px"/>
                            <div id="square"></div>

                            <Image src={two} width="512px" height="342px"/>
                            <div id="square"></div>

                            <Image src={three} width="512px" height="342px"/>
                            <div id="square"></div>

                        </div>
                    </div>
                </div>

            </div>
            <Header/>
            <Footer/>
        </>

    )

}

export default Conditions;