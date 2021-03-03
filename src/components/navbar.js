import React, { Component } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiX } from "react-icons/fi";
import { IoMdArrowDropdown } from 'react-icons/io';
import './css/navbar.css'

const StyledNav = styled.nav`
    .main-nav {
        font-family: 'Prompt', sans-serif;
       height: 4vh;
       width: 100%;
       background: linear-gradient(42deg, #cc0000 38%, #800000 38.5%);
       clip-path: polygon(4% 0, 96% 0, 93% 100%, 7% 100%);
       @media (max-width: 767px) {
           clip-path: none;
           background: #800000;
       }
       nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 0 auto;
        width: 80%;
        color: #ee768f;
        height: 4vh;
        @media (max-width: 1368px) {
            width: 90%;
        }
        @media (max-width: 1150px) {
            width: 85%;
        }
        @media (max-width: 962px) {
            width: 90%;
            margin: 0 auto;
        }
        h6 {
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: .2px;
            font-family: 'Prompt', sans-serif;
            font-size: .8rem;
            @media (max-width: 1368px) {
                font-size: .75rem;
            }
            @media (max-width: 1094px) {
                font-size: .65rem;
            }
            @media (max-width: 1029px) {
                font-size: .6rem;
            }
            @media (max-width: 846px) {
                font-size: .6rem;
                letter-spacing: .1px;
            }
            span {
                font-weight: 800;
                color: #fff;
                font-size: .8rem;
                @media (max-width: 1368px) {
                    font-size: .75rem;
                }
                @media (max-width: 1094px) {
                    font-size: .65rem;
                }
                @media (max-width: 1029px) {
                    font-size: .6rem;
                }
            }
            @media (max-width: 767px) {
                visibility: hidden;
            }
        }
        ul {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            @media (max-width: 1118px) {
                width: 100%;
            }
            @media (max-width: 767px) {
                justify-content: center;
            }
            li {
                list-style: none;
                font-size: .8rem;
                text-transform: uppercase;
                letter-spacing: 1px;
                :not(:last-of-type) {
                    padding: 0 .8rem;
                }
                font-family: 'Prompt', sans-serif;
                @media (max-width: 1368px) {
                    font-size: .75rem;
                }
                @media (max-width: 1150px) {
                    font-size: .7rem;
                    margin: 0 .1rem;
                }
                @media (max-width: 1094px) {
                    font-size: .65rem;
                }
                @media (max-width: 1029px) {
                    font-size: .6rem;
                }
                @media (max-width: 846px) {
                    font-size: .5rem;
                    letter-spacing: .5px;
                }
                @media (max-width: 767px) {
                    font-size: .8rem;
                    font-weight: 400;
                    justify-content: center;
                }
            }
         }
       }
    }
    .logoStyle {
        margin: 1rem 0;
    @media (max-width: 767px) {
        margin-top: -2.3rem;
    }
    div {
        color: #800000;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        @media (max-width: 767px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #cc0000;
        }
        h3 {
            text-transform: uppercase;
            font-size: 1.7rem;
            background-color: #800000;
            color: #fff;
            padding: .3rem 2.5rem;
            border-radius: 5px;
            @media (max-width: 1047px) {
                font-size: 1.3rem;
            }
            @media (max-width: 767px) {
                width: 100%;
                border-radius: 0;
                text-align: center;
                padding: 1rem;
                border-bottom: 1px solid #999999;
            }
            span {
                @media (max-width: 767px) {
                    color: #800000;
                    background-color: #fff;
                    padding: .5rem 2.5rem;
                    margin: 1rem;
                    border-radius: 3px;
                }
                @media (max-width: 492px) {
                    padding: .4rem 2rem;
                }
                @media (max-width: 408px) {
                    padding: .4rem 1.5rem;
                }
                @media (max-width: 350px) {
                    padding: .3rem 1.4rem;
                }
                @media (max-width: 307px) {
                    padding: .3rem 1.2rem;
                }
            }
        }
        .find {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 32%;
            margin: 0 -4rem;
            @media (max-width: 1300px) {
                margin: 0 -3rem;
            }
            @media (max-width: 1227px) {
                margin: 0 -2rem;
            }
            @media (max-width: 1178px) {
            width: 35%;
            }
            @media (max-width: 1047px) {
                margin-top: .1rem;
                padding-top: .1rem;
            }
            @media (max-width: 767px) {
                width: 60%;
                color: #fff;
                margin: 1rem;
            }
            @media (max-width: 530px) {
                width: 80%;
            }
            @media (max-width: 430px) {
                width: 90%;
            }
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                align-items: flex-start;
                @media (max-width: 767px) {
                    color: #fff;
                    height: 6vh;
                }
                p {
                    font-family: 'Prompt', sans-serif;
                    text-transform: uppercase;
                    font-size: .82rem;
                    cursor: pointer;
                    @media (max-width: 1047px) {
                        font-size: .6rem;
                    }
                    @media (max-width: 847px) {
                        font-size: .55rem;
                    }
                    @media (max-width: 767px) {
                        font-size: .7rem;
                    }
                    @media (max-width: 600px) {
                        font-size: .7rem;
                    }
                    @media (max-width: 311px) {
                        font-size: .5rem;
                    }
                }
                span {
                    font-weight: bold;
                    font-size: 1.2rem;
                    text-transform: uppercase;
                    margin-top: -1.1rem;
                    font-family: 'Oswald', sans-serif;
                    @media (max-width: 1047px) {
                        font-size: 1rem;
                    }
                    @media (max-width: 847px) {
                        font-size: .95rem;  
                    }
                    @media (max-width: 767px) {
                        font-size: 1rem;
                        margin-top: -.3rem;
                    }
                    @media (max-width: 600px) {
                        font-size: 1.1rem;
                    }
                    @media (max-width: 311px) {
                        font-size: .8rem;
                    }
                    span {
                        font-size: 1.7rem;
                        @media (max-width: 1047px) {
                            font-size: 1.5rem;
                        }
                        @media (max-width: 906px) {
                            align-self: center;
                        }
                        @media (max-width: 767px) {
                            font-size: 1.2rem;
                        }
                    }
                }
            }
        }
        div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            @media (max-width: 767px) {
                display: none;
            }
            p {
                letter-spacing: .5px;
                text-transform: uppercase;
                font-size: .75rem;
                @media (max-width: 1047px) {
                    font-size: .6rem;
                }
                @media (max-width: 847px) {
                    font-size: .5rem;
                }
            }
            span {
                font-family: 'Oswald', sans-serif;
                font-weight: bold;
                font-size: 1.3rem;
                margin-top: -.5rem;
                @media (max-width: 847px) {
                    font-size: 1rem;
                    margin-top: -.2rem;
                }
            }
        }
    }
    nav {
        text-transform: uppercase;
        font-size: .77rem;
        background-color: #ffdd00;
        padding: .5rem;
        margin: 1rem 0;
        border: 1px solid #cccccc;
        @media (max-width: 767px) {
            margin: 0;
            border: none;
        }
        p {
            color: #464646;
            width: 72.5%;
            margin: 0 auto;
            font-weight: 400;
            word-spacing: 5px;
            letter-spacing: .4px;
            @media (max-width: 537px) {
                font-size: .8rem;
                width: 80%;
            }
            @media (max-width: 466px) {
                width: 90%;
            }
        }
    }
    }
`

export class Nav extends Component {
    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        return (
            <>
            <StyledNav className="nav" role="navigation">
                <div className="main-nav">
                    <nav>
                        <h6><span>Free Shipping</span> on orders of $50 or more</h6>
                        <div className="nav-element">
                            <ul className={toggle ? "toggle" : ""}>
                                <li className="close" style={{fontSize:'1.8rem',padding:'0',margin:'0', overflow: 'hidden'}} onClick={this.menuToggle}><FiX /></li>
                                <li>about</li>
                                <li>how to buy</li>
                                <li>order a catalog</li>
                                <li>contact</li>
                                <li>view order (35)</li>
                            </ul>
                            <div className="menu" style={{fontSize:'1.8rem',padding:'0',margin:'0', overflow: 'hidden'}} onClick={this.menuToggle}><GiHamburgerMenu /></div>
                        </div>
                    </nav>
                </div>

                <div className="logoStyle">
                    <div>
                    <h3><span>Logo</span></h3>
                    <div className="find">
                        <div><p>Find by</p> <span className="span">Brand<span><IoMdArrowDropdown /></span></span></div>
                        <div><p>Find by</p> <span className="span">Part type<span><IoMdArrowDropdown /></span></span></div>
                        <div><p><br></br></p> <span className="span">Search<span><IoMdArrowDropdown /></span></span></div>
                    </div>
                    <div>
                        <p>give us a call</p>
                        <span>(800) 555-1212</span>
                    </div>
                    </div>
                    <nav><p>home / parent category / child category / spare parts</p></nav>
                </div>
            </StyledNav>
            </>
        )
    }
}

export default Nav