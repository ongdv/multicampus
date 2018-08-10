import React, { Component } from 'react';
import styled from 'styled-components'

class Footer extends Component {
    render() {
        const FooterBox = styled.div`
            position: absolute;
            right:0; bottom:0; left:0;
            padding:1rem;
            background-color: ${
                (props) => {
                    if(props.theme === "basic") return 'skyblue';
                    return '#cdcdcd';
                }
            };
            text-align: center;
        `;
        return (
            <div>
                <FooterBox theme="basic">React stlyed-component test</FooterBox>
            </div>
        );
    }
}

export default Footer;