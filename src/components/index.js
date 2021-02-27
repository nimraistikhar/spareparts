import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import { IoIosArrowForward } from 'react-icons/io'
import Image1 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-2.jpg'
import Image2 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-3.jpg'
import Image3 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-4.jpg'
import Image4 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-5.jpg'
import Image5 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-6.jpg'
import Image6 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-7.jpg'
import Image7 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-8.jpg'
import Image8 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-9.jpg'
// import Image9 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-10.jpg'
// import Image10 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-11.jpg'
// import Image11 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-12.jpg'
// import Image12 from '../img/p1evc3va20bghq8h1mpr1kmd119f4-13.jpg'

const HomeStyle = styled.div`
    .home {
        color: #4d4d4d;
        width: 90%;
        margin: 0 9rem;
        margin-top: 3rem;
        height: 150vh;
        display: flex;
        flex-direction: column;
        justify-content: start;
        @media (max-width: 1199px) {
            width: 95%;
            margin: 0 7rem;
            margin-top: 3rem;
        }
        @media (max-width: 1063px) {
            width: 100%;
            margin: 0 5rem;
            margin-top: 3rem;
        }
        @media (max-width: 991px) {
            margin: 0 4rem;
            margin-top: 2rem;
        }
        @media (max-width: 874px) {
            margin: 0 2.5rem;
        }
        @media (max-width: 625px) {
            margin: 0 1.3rem;
        }
        @media (max-width: 600px) {
            margin: 0 1.5rem;
            height: 180vh;
        }
        @media (max-width: 400px) {
            margin: 0 1rem;
        }
        @media (max-width: 328px) {
            margin: 0;
        }
        h3 {
            color: #4d4d4d;
            font-size: 3.7rem;
            font-weight: 500;
            font-family: 'Oswald', sans-serif;
            @media (max-width: 991px) {
                font-size: 3rem;
            }
            @media (max-width: 600px) {
                display: none;
            }
        }
        .home-page {
            display: flex;
            flex-direction: row;
            margin-top: 1rem;
            .sidebar {
                @media (max-width: 786px) {
                    display: none;
                }
                h6 {
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: .95rem;
                    color: #595959;
                }
                ul {
                    margin-top: 1rem;
                    margin-right: 2.5rem;
                    li {
                        color: #666666;
                        font-size: .85rem;
                        font-weight: 400;
                        margin-right: -2rem;
                        width: 100%;
                        padding: .4rem .5rem .4rem 0;
                        cursor: pointer;
                        @media (max-width: 991px) {
                            font-size: .7rem;
                        }
                        :not(:last-child) {
                            border-bottom: 1px solid #ccc;
                        }
                    }
                    .li {
                        display: flex;
                        justify-content: space-between;
                        span {
                            font-weight: 600;
                        }
                    }
                }
            }
            .container {
                display: flex;
                flex-direction: column;
                @media (max-width: 786px) {
                    width: 90%;
                }
                @media (max-width: 704px) {
                    width: 88%;
                }
                @media (max-width: 625px) {
                    width: 90%;
                }
                @media (max-width: 600px) {
                    width: 100%;
                }
                .image-side {
                    display: flex;
                    @media (max-width: 600px) {
                        flex-direction: column;
                        justify-content: center;
                    }
                    .image-container {
                        display: flex;
                        width: 100%;
                        height: 25vh;
                        @media (max-width: 874px) {
                            height: 22vh;
                        }
                        @media (max-width: 600px) {
                            width: 100%;
                            height: 40vh;
                        }
                       .image-content {
                           border: 1px solid #ccc;
                           width: 50%;
                           height: 100%;
                           display: flex;
                           flex-direction: column;
                           padding: .1rem;
                           @media (max-width: 600px) {
                                border: none;
                                width: 100%;
                                height: auto;
                                margin-bottom: 1rem;
                                padding: 0;
                            }
                           figure {
                               margin: 0 .9rem;
                               position: relative;
                                img {
                                    object-fit: contain;
                                    height: 19vh;
                                    width: 13vw;
                                    @media (max-width: 991px) {
                                        height: 15vh;
                                    }
                                    @media (max-width: 874px) {
                                        height: 13vh;
                                    }
                                    @media (max-width: 600px) {
                                        height: 21vh;
                                        width: 33vw;
                                        object-fit: fill;
                                    }
                                    @media (max-width: 416px) {
                                        height: 18vh;
                                    }
                                    @media (max-width: 350px) {
                                        height: 20vh;
                                        width: 30vw;
                                    }
                                    @media (max-width: 302px) {
                                        height: 19vh;
                                        width: 28vw;
                                    }
                                    @media (max-width: 290px) {
                                        height: 15vh;
                                        width: 25vw;
                                    }
                                    .image {
                                        opacity: 1;
                                        display: block;
                                        width: 100%;
                                        height: auto;
                                        transition: .5s ease;
                                        backface-visibility: hidden;
                                    }
                                }
                                h6 {
                                    font-size: .7rem;
                                    font-weight: 700;
                                    padding-left: 1rem;
                                    @media (max-width: 600px) {
                                        font-size: .8rem;
                                        font-weight: 800;
                                    }
                                    @media (max-width: 290px) {
                                        font-weight: 500;
                                    }
                                    @media (max-width: 266px) {
                                        font-size: .55rem;
                                    }
                                 }
                                .middle {
                                    transition: .5s ease;
                                    opacity: 0;
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                    -ms-transform: translate(-50%, -50%);
                                    text-align: center;
                                    @media (max-width: 600px) {
                                        left: 40%;
                                    }
                                    .text {
                                      background-color: #fff;
                                      text-transform: uppercase;
                                      color: #800000;
                                      border: 2px solid #800000;
                                      font-weight: 500;
                                      font-size: 1.4rem;
                                      font-family: 'Oswald', sans-serif;
                                      padding: 3px 35px;
                                      cursor: pointer;
                                      @media (max-width: 991px) {
                                          font-size: 1rem;
                                      }
                                      @media (max-width: 874px) {
                                          font-size: .9rem;
                                          padding: 6px 35px;
                                      }
                                      @media (max-width: 676px) {
                                          padding: 6px 25px;
                                      }
                                      @media (max-width: 600px) {
                                          padding: 10px 40px;
                                      }
                                      @media (max-width: 462px) {
                                          padding: 5px 30px;
                                      }
                                      @media (max-width: 321px) {
                                          padding: 4px 25px;
                                      }
                                      @media (max-width: 270px) {
                                          padding: 3px 20px;
                                      }
                                      @media (max-width: 236px) {
                                          padding: 3px 18px;
                                      }
                                      @media (max-width: 224px) {
                                          padding: 3px 15px;
                                      }
                                    }
                                }
                                :hover .middle {
                                    opacity: 0.9;
                                }
                           }
                       } 
                    }
                }
            }
        }
    }
`

function Index() {
    return (
        <HomeStyle>
            <Navbar />
            <div className="home">
                <h3>Spare Parts</h3>
                <div className="home-page">
                    <div className="sidebar">
                        <h6>Filter parts</h6>
                        <ul>
                            <li>Option With Wrapping Line</li>
                            <li className="li"><span>Active/Hover</span><span><IoIosArrowForward/></span></li>
                            <li>Filter Option</li>
                            <li>Long Filter Option</li>
                            <li>Filter Option</li>
                            <li>Filter Option</li>
                            <li>Filter Option</li>
                            <li>Show All</li>
                        </ul>
                    </div>
                    <div className="container">
                        <div className="image-side">
                            <div className="image-container">
                                <div className="image-content">
                                    <figure>
                                        <img src={Image1} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <figure>
                                        <img src={Image2} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <div className="image-container">
                                <div className="image-content">
                                    <figure>
                                        <img src={Image3} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <figure>
                                        <img src={Image4} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="image-side">
                            <div className="image-container">
                                <div className="image-content">
                                    <figure>
                                        <img src={Image5} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <figure>
                                        <img src={Image6} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <div className="image-container">
                                <div className="image-content">
                                    <figure>
                                        <img src={Image7} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <figure>
                                        <img src={Image8} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="image-side">
                            <div className="image-container">
                                <div className="image-content">
                                    <figure>
                                        <img src={Image1} alt="Image 1" className="image" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <figure>
                                        <img src={Image1} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <div className="image-container">
                                <div className="image-content">
                                    <figure>
                                        <img src={Image1} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="image-content">
                                    <figure>
                                        <img src={Image1} alt="Image 1" />
                                        <h6>Product Name</h6>
                                        <div className="middle">
                                            <div className="text">View</div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeStyle>
    )
}

export default Index
