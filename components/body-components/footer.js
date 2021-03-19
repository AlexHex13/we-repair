import React from "react";


function Footer() {
    return (
        <div className="footer">
            <p> &copy; {new Date().getFullYear()} Copyright: <a href="/"> We-Repair.ru </a></p>
        </div>
    )
}

export default Footer;