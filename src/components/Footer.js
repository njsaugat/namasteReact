import React from 'react';

const Footer = (props) => {
    console.log(props)
    console.log(props.children)
    console.log(props.link)
    return (
        <div>
            Footer
            {props.children}
        </div>
    )
}

export default Footer;
