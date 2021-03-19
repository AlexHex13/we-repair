import React from "react";
import {Button, FormControl, InputGroup, NavbarBrand} from "react-bootstrap";


function LevelOne() {
    return (
        <div id="level-one">
            <NavbarBrand><b id="company">Company</b></NavbarBrand>
            <div id="input-search">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>

            <div id="number-search">
                <div id="in-number">
                    <b>(+8 999 098 98 98)</b>
                </div>
                <div id="time-work">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                    &nbsp;
                    Режим работы 9:00 - 21:00
                </div>
            </div>
            <div id="button-call">
                <Button variant="warning">Обратный звонок</Button>
            </div>

        </div>
    )
}


export default LevelOne