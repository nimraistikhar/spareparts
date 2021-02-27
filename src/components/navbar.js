import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiX } from "react-icons/fi";
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdSearch } from 'react-icons/md'
import './css/navbar.css'

const StyledNav = styled.nav`
    .main-nav {
       height: 5vh;
       width: 100%;
       background: linear-gradient(42deg, #cc0000 35%, #800000 35.5%);
       clip-path: polygon(4% 0, 96% 0, 93% 100%, 7% 100%);
       @media (max-width: 767px) {
           clip-path: none;
           background: red;
       }
       nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        color: #fff;
        height: 4.5vh;
        @media (max-width: 962px) {
            width: 90%;
            margin: 0 auto;
        }
        h6 {
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: .3px;
            word-spacing: 1px;
            @media (max-width: 846px) {
                font-size: .6rem;
                letter-spacing: .1px;
            }
            span {
                font-weight: bold;
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
            color: #fff;
            @media (max-width: 1118px) {
                width: 100%;
            }
            @media (max-width: 767px) {
                justify-content: center;
            }
            li {
                list-style: none;
                font-size: .6rem;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: .8px;
                margin: 0 .5rem;
                @media (max-width: 1134px) {
                    margin: 0 .7rem;
                }
                @media (max-width: 1029px) {
                    font-size: .55rem;
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
        main {
        display: flex;
        justify-content: space-between;
        width: 30%;
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
           p {
               text-transform: uppercase;
               font-size: .7rem;
               line-height: 5px;
               padding-top: 5px;
               cursor: pointer;
               @media (max-width: 1047px) {
                    font-size: .6rem;
                }
                @media (max-width: 847px) {
                    font-size: .55rem;
                }
                @media (max-width: 767px) {
                    font-size: .6rem;
                    height: 6vh;
                    line-height: 10px;
                }
               .span {
                   font-weight: bold;
                   font-size: 1.2rem;
                   font-family: 'Oswald', sans-serif;
                   @media (max-width: 1047px) {
                       font-size: 1rem;
                   }
                   @media (max-width: 847px) {
                        font-size: .95rem;
                    }
                    @media (max-width: 767px) {
                        font-size: .9rem;

                    }
                   span {
                       font-size: 1.5rem;
                       margin-left: .2rem;
                       @media (max-width: 1047px) {
                           margin: 0;
                           font-size: 1.3rem;
                       }
                       @media (max-width: 847px) {
                           font-size: 1rem;
                       }
                   }
               }
           } 
        }
        div {
            display: flex;
            flex-direction: column;
            @media (max-width: 767px) {
                display: none;
            }
            p {
                text-transform: uppercase;
                font-size: .7rem;
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
                @media (max-width: 847px) {
                    font-size: .9rem;
                }
            }
        }
    }
    nav {
        text-transform: uppercase;
        font-size: .7rem;
        background-color: #ffdd00;
        padding: .6rem;
        margin: 1rem 0;
        border: 1px solid #cccccc;
        @media (max-width: 767px) {
            margin: 0;
            border: none;
        }
        p {
            color: #464646;
            width: 75%;
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
                                <li className="close" onClick={this.menuToggle}><FiX /></li>
                                <li>about</li>
                                <li>how to buy</li>
                                <li>order a catalog</li>
                                <li>contact</li>
                                <li>view order (35)</li>
                            </ul>
                            <div className="menu" onClick={this.menuToggle}><GiHamburgerMenu /></div>
                        </div>
                    </nav>
                </div>

                <div className="logoStyle">
                    <div>
                    <h3><span>Logo</span></h3>
                    <main>
                        <p>Find by <br></br> <span className="span">Brand<span><IoMdArrowDropdown /></span></span></p>
                        <p>Find by <br></br> <span className="span">Part type<span><IoMdArrowDropdown /></span></span></p>
                        <p><br></br> <span className="span">Search<span><MdSearch /></span></span></p>
                    </main>
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
