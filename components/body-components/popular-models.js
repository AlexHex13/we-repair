import React from "react";
import computer from "../images-and-icons/comp.png";
import {Button, Form, Image} from "react-bootstrap";


function PopularModels (){
    return (
        <div className="popular-models">
            <p>Популярные модели</p>
            <div id="cards-of-models">
                <div id="card-of-model">
                    <Image src={computer} width="120" height="90"/>
                    <p>Samsung NP305U1A</p>
                    <li>Ремонт от 30 мин.</li>
                    <li>от 750 руб.</li>
                    <Button id='button' variant="warning" size="sm" >Оставить заявку</Button>
                </div>
                <div id="card-of-model">
                    <Image src={computer} width="120" height="90"/>
                    <p>Samsung NP305U1A</p>
                    <li>Ремонт от 30 мин.</li>
                    <li>от 750 руб.</li>
                    <Button id='button' variant="warning" size="sm">Оставить заявку</Button>
                </div>
                <div id="card-of-model">
                    <Image src={computer} width="120" height="90"/>
                    <p>Samsung NP305U1A</p>
                    <li>Ремонт от 30 мин.</li>
                    <li>от 750 руб.</li>
                    <Button id='button' variant="warning" size="sm">Оставить заявку</Button>
                </div>
                <div id="card-of-model">
                    <Image src={computer} width="120" height="90"/>
                    <p>Samsung NP305U1A</p>
                    <li>Ремонт от 30 мин.</li>
                    <li>от 750 руб.</li>
                    <Button id='button' variant="warning" size="sm">Оставить заявку</Button>
                </div>
                <div id="card-of-model">
                    <Image src={computer} width="120" height="90"/>
                    <p>Samsung NP305U1A</p>
                    <li>Ремонт от 30 мин.</li>
                    <li>от 750 руб.</li>
                    <Button id='button' variant="warning" size="sm">Оставить заявку</Button>
                </div>
            </div>
        </div>
    )
}


export default PopularModels;