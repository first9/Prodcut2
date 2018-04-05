import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css';
import './css/etalage.css';
import './css/megamenu.css';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header" id="home">
          <ul className="header-in">
            <li><a href="account.html">MY ACCOUNT</a> </li>
            <li><a href="wishlist.html">D WISHLIST</a></li>
            <li><a href="contact.html"> CONTACT US</a></li>
          </ul>
          <div className="clearfix"> </div>
        </div>
        <div className="header-top">
          <div className="logo">
            <a href="index.html"><img src="./images/logo.png" alt /></a>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="header-bottom">
          <div className="top-nav">
            <ul className="megamenu skyblue">
              <li className="active grid"><a href="index.html">Products</a>
                <div className="megapanel">
                  <div className="row">
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Accessories</a></li>
                          <li><a href="store.html">Bags</a></li>
                          <li><a href="store.html">Caps &amp; Hats</a></li>
                          <li><a href="store.html">Hoodies &amp; Sweatshirts</a></li>
                          <li><a href="store.html">Jackets &amp; Coats</a></li>
                          <li><a href="store.html">Jeans</a></li>
                          <li><a href="store.html">Jewellery</a></li>
                          <li><a href="store.html">Jumpers &amp; Cardigans</a></li>
                          <li><a href="store.html">Leather Jackets</a></li>
                          <li><a href="store.html">Long Sleeve T-Shirts</a></li>
                          <li><a href="store.html">Loungewear</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Shirts</a></li>
                          <li><a href="store.html">Shoes, Boots &amp; Trainers</a></li>
                          <li><a href="store.html">Shorts</a></li>
                          <li><a href="store.html">Suits &amp; Blazers</a></li>
                          <li><a href="store.html">Sunglasses</a></li>
                          <li><a href="store.html">Sweatpants</a></li>
                          <li><a href="store.html">Swimwear</a></li>
                          <li><a href="store.html">Trousers &amp; Chinos</a></li>
                          <li><a href="store.html">T-Shirts</a></li>
                          <li><a href="store.html">Underwear &amp; Socks</a></li>
                          <li><a href="store.html">Vests</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Popular Brands</h4>
                        <ul>
                          <li><a href="store.html">Levis</a></li>
                          <li><a href="store.html">Persol</a></li>
                          <li><a href="store.html">Nike</a></li>
                          <li><a href="store.html">Edwin</a></li>
                          <li><a href="store.html">New Balance</a></li>
                          <li><a href="store.html">Jack &amp; Jones</a></li>
                          <li><a href="store.html">Paul Smith</a></li>
                          <li><a href="store.html">Ray-Ban</a></li>
                          <li><a href="store.html">Wood Wood</a></li>
                        </ul>	
                      </div>												
                    </div>
                  </div>
                </div>
              </li>
              <li><a className="pink" href="404.html">ideas</a></li>
              <li className="grid"><a href="#">Brands</a>
                <div className="megapanel">
                  <div className="row">
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Accessories</a></li>
                          <li><a href="store.html">Bags</a></li>
                          <li><a href="store.html">Caps &amp; Hats</a></li>
                          <li><a href="store.html">Hoodies &amp; Sweatshirts</a></li>
                          <li><a href="store.html">Jackets &amp; Coats</a></li>
                          <li><a href="store.html">Jeans</a></li>
                          <li><a href="store.html">Jewellery</a></li>
                          <li><a href="store.html">Jumpers &amp; Cardigans</a></li>
                          <li><a href="store.html">Leather Jackets</a></li>
                          <li><a href="store.html">Long Sleeve T-Shirts</a></li>
                          <li><a href="store.html">Loungewear</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Shirts</a></li>
                          <li><a href="store.html">Shoes, Boots &amp; Trainers</a></li>
                          <li><a href="store.html">Shorts</a></li>
                          <li><a href="store.html">Suits &amp; Blazers</a></li>
                          <li><a href="store.html">Sunglasses</a></li>
                          <li><a href="store.html">Sweatpants</a></li>
                          <li><a href="store.html">Swimwear</a></li>
                          <li><a href="store.html">Trousers &amp; Chinos</a></li>
                          <li><a href="store.html">T-Shirts</a></li>
                          <li><a href="store.html">Underwear &amp; Socks</a></li>
                          <li><a href="store.html">Vests</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Popular Brands</h4>
                        <ul>
                          <li><a href="store.html">Levis</a></li>
                          <li><a href="store.html">Persol</a></li>
                          <li><a href="store.html">Nike</a></li>
                          <li><a href="store.html">Edwin</a></li>
                          <li><a href="store.html">New Balance</a></li>
                          <li><a href="store.html">Jack &amp; Jones</a></li>
                          <li><a href="store.html">Paul Smith</a></li>
                          <li><a href="store.html">Ray-Ban</a></li>
                          <li><a href="store.html">Wood Wood</a></li>
                        </ul>	
                      </div>												
                    </div>
                  </div>
                </div>
              </li>
              <li><a className="pink" href="gifts.html">gifts</a></li>
              <li className="grid"><a href="#">stores</a>
                <div className="megapanel">
                  <div className="row">
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Accessories</a></li>
                          <li><a href="store.html">Bags</a></li>
                          <li><a href="store.html">Caps &amp; Hats</a></li>
                          <li><a href="store.html">Hoodies &amp; Sweatshirts</a></li>
                          <li><a href="store.html">Jackets &amp; Coats</a></li>
                          <li><a href="store.html">Jeans</a></li>
                          <li><a href="store.html">Jewellery</a></li>
                          <li><a href="store.html">Jumpers &amp; Cardigans</a></li>
                          <li><a href="store.html">Leather Jackets</a></li>
                          <li><a href="store.html">Long Sleeve T-Shirts</a></li>
                          <li><a href="store.html">Loungewear</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <ul>
                          <li><a href="store.html">Shirts</a></li>
                          <li><a href="store.html">Shoes, Boots &amp; Trainers</a></li>
                          <li><a href="store.html">Shorts</a></li>
                          <li><a href="store.html">Suits &amp; Blazers</a></li>
                          <li><a href="store.html">Sunglasses</a></li>
                          <li><a href="store.html">Sweatpants</a></li>
                          <li><a href="store.html">Swimwear</a></li>
                          <li><a href="store.html">Trousers &amp; Chinos</a></li>
                          <li><a href="store.html">T-Shirts</a></li>
                          <li><a href="store.html">Underwear &amp; Socks</a></li>
                          <li><a href="store.html">Vests</a></li>
                        </ul>	
                      </div>							
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Popular Brands</h4>
                        <ul>
                          <li><a href="store.html">Levis</a></li>
                          <li><a href="store.html">Persol</a></li>
                          <li><a href="store.html">Nike</a></li>
                          <li><a href="store.html">Edwin</a></li>
                          <li><a href="store.html">New Balance</a></li>
                          <li><a href="store.html">Jack &amp; Jones</a></li>
                          <li><a href="store.html">Paul Smith</a></li>
                          <li><a href="store.html">Ray-Ban</a></li>
                          <li><a href="store.html">Wood Wood</a></li>
                        </ul>	
                      </div>												
                    </div>
                  </div>
                </div>
              </li>
            </ul> 
          </div>
          <div className="cart icon1 sub-icon1">
            <h6>Shopping Cart:
              <span className="item">3 items</span>
              <span className="rate">70$</span>
              <li><a href="#" className="round"> </a>
                <ul className="sub-icon1 list">
                  <h3>Recently added items(3)</h3>
                  <div className="shopping_cart">
                    <div className="cart_box">
                      <div className="message">
                        <div className="alert-close"> </div> 
                        <div className="list_img"><img src="./images/si.jpg" className="img-responsive" alt /></div>
                        <div className="list_desc"><h4><a href="#">velit esse molestie</a></h4>
                          <a href="#" className="offer">1 offer applied</a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                    <div className="cart_box">
                      <div className="message1">
                        <div className="alert-close1"> </div> 
                        <div className="list_img"><img src="./images/si1.jpg" className="img-responsive" alt /></div>
                        <div className="list_desc"><h4><a href="#">velit esse molestie</a></h4>
                          <a href="#" className="offer">1 offer applied</a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                    <div className="cart_box">
                      <div className="message2">
                        <div className="alert-close2"> </div> 
                        <div className="list_img"><img src="./images/si.jpg" className="img-responsive" alt /></div>
                        <div className="list_desc"><h4><a href="#">velit esse molestie</a></h4>
                          <a href="#" className="offer">1 offer applied</a>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                  <div className="check_button"><a href="cart.html">View Cart</a></div>
                  <div className="clearfix" />
                </ul>
              </li>
            </h6>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="page">
          <h6><a href="#">Page Title</a><b>|</b>Page description The quick, brown <span className="for">fox jumps over a lazy dog. DJs flock by when TV ax quiz prog.</span></h6>
        </div>
        <div className="content">
          <div className="col-md-9">
            <div className="shoe">
              <img className="img-responsive" src="images/banner.jpg" alt />
              <div className="shop">
                <h4>SHOP <span>WOMEN</span></h4>
                <p>SHOES FALL 2014</p>
              </div>
            </div>
            <div className="content-bottom">
              <h3>Featured products</h3>
              <div className="bottom-grid">
                <div className="col-md-4 shirt">
                  <div className="bottom-grid-top">
                    <a href="single.html"><img className="img-responsive" src="images/sh.png" alt />
                      <div className="five">
                        <h6>-50%</h6>
                      </div>
                      <div className="pre">
                        <p>Pure Slim Xe</p>
                        <span>$60.00</span>
                        <div className="clearfix"> </div>
                      </div></a>
                  </div>
                </div>
                <div className="col-md-4 shirt">
                  <div className="bottom-grid-top">
                    <a href="single.html"><img className="img-responsive" src="images/sh2.png" alt />
                      <div className="five">
                        <h6 className="one">-50%</h6>
                      </div>
                      <div className="pre">
                        <p>Pure Slim Xe</p>
                        <span>$60.00</span>
                        <div className="clearfix"> </div>
                      </div></a>
                  </div>
                </div>
                <div className="col-md-4 shirt">
                  <div className="bottom-grid-top">
                    <a href="single.html"><img className="img-responsive" src="images/sh1.png" alt />
                      <div className="five">
                        <h6 className="one1">-50%</h6>
                      </div>
                      <div className="pre">
                        <p>Pure Slim Xe</p>
                        <span>$60.00</span>
                        <div className="clearfix"> </div>
                      </div></a>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="bottom-grid">
                <div className="col-md-4 shirt">
                  <div className="bottom-grid-top">
                    <a href="single.html"><img className="img-responsive" src="images/sh2.png" alt />
                      <div className="five">
                        <h6 className="one">-50%</h6>
                      </div>
                      <div className="pre">
                        <p>Pure Slim Xe</p>
                        <span>$60.00</span>
                        <div className="clearfix"> </div>
                      </div></a>
                  </div>
                </div>
                <div className="col-md-4 shirt">
                  <div className="bottom-grid-top">
                    <a href="single.html"><img className="img-responsive" src="images/sh3.png" alt />
                      <div className="five">
                        <h6 className="one1">-50%</h6>
                      </div>
                      <div className="pre">
                        <p>Pure Slim Xe</p>
                        <span>$60.00</span>
                        <div className="clearfix"> </div>
                      </div></a>
                  </div>
                </div>
                <div className="col-md-4 shirt">
                  <div className="bottom-grid-top">
                    <a href="single.html"><img className="img-responsive" src="images/sh4.png" alt />
                      <div className="five">
                        <h6>-50%</h6>
                      </div>
                      <div className="pre">
                        <p>Pure Slim Xe</p>
                        <span>$60.00</span>
                        <div className="clearfix"> </div>
                      </div></a>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="bottom-grid">
                <div className="col-md-4 shirt">
                  <div className="bottom-grid-top">
                    <a href="single.html"><img className="img-responsive" src="images/sh5.png" alt />
                      <div className="five">
                        <h6 className="one1">-50%</h6>
                      </div>
                      <div className="pre">
                        <p>Pure Slim Xe</p>
                        <span>$60.00</span>
                        <div className="clearfix"> </div>
                      </div></a>
                  </div>
                </div>
                <div className="col-md-4 shirt">
                  <div className="bottom-grid-top">
                    <a href="single.html"><img className="img-responsive" src="images/sh.png" alt />
                      <div className="five">
                        <h6>-50%</h6>
                      </div>
                      <div className="pre">
                        <p>Pure Slim Xe</p>
                        <span>$60.00</span>
                        <div className="clearfix"> </div>
                      </div></a>
                  </div>
                </div>
                <div className="col-md-4 shirt">
                  <div className="bottom-grid-top">
                    <a href="single.html"><img className="img-responsive" src="images/sh2.png" alt />
                      <div className="five">
                        <h6 className="one">-50%</h6>
                      </div>
                      <div className="pre">
                        <p>Pure Slim Xe</p>
                        <span>$60.00</span>
                        <div className="clearfix"> </div>
                      </div></a>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <ul className="start">
              <li><span>1</span></li>
              <li className="arrow"><a href="#">2</a></li>
              <li className="arrow"><a href="#">3</a></li>
              <li className="arrow"><a href="#">4</a></li>
              <li className="arrow"><a href="#">5</a></li>
              <li className="arrow"><a href="#">6</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-md">
            <div className=" possible-about">
              <h4>Sort Products</h4>
              <div className="tab1">
                <ul className="place">
                  <li className="sort">Sort by <span>price</span></li>
                  <li className="by"><img src="./images/do.png" alt /></li>
                  <div className="clearfix"> </div>
                </ul>
                <div className="single-bottom">
                  <a href="#">
                    <input id="brand" defaultValue type="checkbox" />
                    <label htmlFor="brand"><span /><b>Rs.3000-Rs.4000</b></label>
                  </a>
                  <a href="#">
                    <input id="brand1" defaultValue type="checkbox" />
                    <label htmlFor="brand1"><span /> <b>Rs.3000-Rs.2000</b></label>
                  </a>
                  <a href="#">
                    <input id="brand2" defaultValue type="checkbox" />
                    <label htmlFor="brand2"><span /> <b>Rs.2000-Rs.1000</b></label>
                  </a>
                  <a href="#">
                    <input id="brand3" defaultValue type="checkbox" />
                    <label htmlFor="brand3"><span /> <b>Rs.1000-Rs.500</b></label>
                  </a>
                  <a href="#">
                    <input id="brand4" defaultValue type="checkbox" />
                    <label htmlFor="brand4"><span /><b>Rs.500-below</b></label>
                  </a>
                </div>
              </div>
              <div className="tab2">
                <ul className="place">
                  <li className="sort">Sort by <span>brands</span></li>
                  <li className="by"><img src="./images/do.png" alt /></li>
                  <div className="clearfix"> </div>
                </ul>
                <div className="single-bottom">
                  <a href="#">
                    <input id="nike" defaultValue type="checkbox" />
                    <label htmlFor="nike"><span /><b>Nike</b></label>
                  </a>
                  <a href="#">
                    <input id="nike1" defaultValue type="checkbox" />
                    <label htmlFor="nike1"><span /> <b>Reebok</b></label>
                  </a>
                  <a href="#">
                    <input id="nike2" defaultValue type="checkbox" />
                    <label htmlFor="nike2"><span /><b> Fila</b></label>
                  </a>
                  <a href="#">
                    <input id="nike3" defaultValue type="checkbox" />
                    <label htmlFor="nike3"><span /> <b>Puma</b></label>
                  </a>
                  <a href="#">
                    <input id="nike4" defaultValue type="checkbox" />
                    <label htmlFor="nike4"><span /><b>Sparx</b></label>
                  </a>
                </div>
              </div>
              <div className="tab3">
                <ul className="place">
                  <li className="sort">Sort by <span>colour</span> </li>
                  <li className="by"><img src="./images/do.png" alt /></li>
                  <div className="clearfix"> </div>
                </ul>
                <ul className="w_nav2">
                  <li><a className="color1" href="#" /></li>
                  <li><a className="color2" href="#" /></li>
                  <li><a className="color3" href="#" /></li>
                  <li><a className="color4" href="#" /></li>
                  <li><a className="color5" href="#" /></li>
                  <li><a className="color6" href="#" /></li>
                  <li><a className="color7" href="#" /></li>
                  <li><a className="color8" href="#" /></li>
                  <li><a className="color9" href="#" /></li>
                  <li><a className="color10" href="#" /></li>
                  <li><a className="color12" href="#" /></li>
                  <li><a className="color13" href="#" /></li>
                  <li><a className="color14" href="#" /></li>
                  <li><a className="color15" href="#" /></li>
                  <li><a className="color5" href="#" /></li>
                  <li><a className="color6" href="#" /></li>
                  <li><a className="color7" href="#" /></li>
                  <li><a className="color8" href="#" /></li>
                  <li><a className="color9" href="#" /></li>
                  <li><a className="color10" href="#" /></li>
                </ul>
              </div>
              <div className="tab4">
                <ul className="place">
                  <li className="sort">Sort by <span>discount</span> </li>
                  <li className="by"><img src="./images/do.png" alt /></li>
                  <div className="clearfix"> </div>
                </ul>
                <div className="single-bottom">
                  <a href="#">
                    <input id="up" defaultValue type="checkbox" />
                    <label htmlFor="up"><span /><b>Upto 10%</b></label>
                  </a>
                  <a href="#">
                    <input id="up1" defaultValue type="checkbox" />
                    <label htmlFor="up1"><span /> <b>10%-20%</b></label>
                  </a>
                  <a href="#">
                    <input id="up2" defaultValue type="checkbox" />
                    <label htmlFor="up2"><span /> <b>20%-30%</b></label>
                  </a>
                  <a href="#">
                    <input id="up3" defaultValue type="checkbox" />
                    <label htmlFor="up3"><span /> <b>30%-40%</b></label>
                  </a>
                  <a href="#">
                    <input id="up4" defaultValue type="checkbox" />
                    <label htmlFor="up4"><span /><b>40%-50%</b></label>
                  </a>
                </div>
              </div>
              <div className="tab5">
                <ul className="place">
                  <li className="sort">Sort by <span>rating</span> </li>
                  <li className="by"><img src="./images/do.png" alt /></li>
                  <div className="clearfix"> </div>
                </ul>
                <div className="star-at">
                  <div className="two">
                    <a href="#"> <i /></a>	
                    <a href="#"> <i /></a>
                    <a href="#"> <i /></a>
                    <a href="#"> <i /></a>
                    <a href="#"> <i /></a>
                  </div>
                  <div className="two">
                    <a href="#"> <i /></a>	
                    <a href="#"> <i /></a>
                    <a href="#"> <i /></a>
                    <a href="#"> <i /></a>
                  </div>
                  <div className="two">
                    <a href="#"> <i /></a>	
                    <a href="#"> <i /></a>
                    <a href="#"> <i /></a>
                  </div>
                  <div className="two">
                    <a href="#"> <i /></a>	
                    <a href="#"> <i /></a>
                  </div>
                </div>
              </div>                      
            </div>
            <div className="content-bottom-grid">
              <h3>Best Sellers</h3>
              <div className="latest-grid">
                <div className="news">
                  <a href="single.html"><img className="img-responsive" src="images/si.jpg" title="name" alt /></a>
                </div>
                <div className="news-in">
                  <h6><a href="single.html">Product name here</a></h6>
                  <p>Description Lorem ipsum </p>
                  <ul>
                    <li>Price: <span>$110</span> </li><b>|</b>
                    <li>Country: <span>US</span></li>
                  </ul>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="latest-grid">
                <div className="news">
                  <a href="single.html"><img className="img-responsive" src="images/si1.jpg" title="name" alt /></a>
                </div>
                <div className="news-in">
                  <h6><a href="single.html">Product name here</a></h6>
                  <p>Description Lorem ipsum </p>
                  <ul>
                    <li>Price: <span>$110</span> </li><b>|</b>
                    <li>Country: <span>US</span></li>
                  </ul>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="latest-grid">
                <div className="news">
                  <a href="single.html"><img className="img-responsive" src="images/si.jpg" title="name" alt /></a>
                </div>
                <div className="news-in">
                  <h6><a href="single.html">Product name here</a></h6>
                  <p>Description Lorem ipsum</p>
                  <ul>
                    <li>Price: <span>$110</span> </li><b>|</b>
                    <li>Country: <span>US</span></li>
                  </ul>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="latest-grid">
                <div className="news">
                  <a href="single.html"><img className="img-responsive" src="images/si1.jpg" title="name" alt /></a>
                </div>
                <div className="news-in">
                  <h6><a href="single.html">Product name here</a></h6>
                  <p>Description Lorem ipsum </p>
                  <ul>
                    <li>Price: <span>$110</span> </li><b>|</b>
                    <li>Country: <span>US</span></li>
                  </ul>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>                    
            <div className="money">
              <h3>Payment Options</h3>
              <ul className="money-in">
                <li><a href="single.html"><img className="img-responsive" src="images/p1.png" title="name" alt /></a></li>
                <li><a href="single.html"><img className="img-responsive" src="images/p2.png" title="name" alt /></a></li>
                <li><a href="single.html"><img className="img-responsive" src="images/p3.png" title="name" alt /></a></li>
                <li><a href="single.html"><img className="img-responsive" src="images/p4.png" title="name" alt /></a></li>
                <li><a href="single.html"><img className="img-responsive" src="images/p5.png" title="name" alt /></a></li>
                <li><a href="single.html"><img className="img-responsive" src="images/p6.png" title="name" alt /></a></li>
                <li><a href="single.html"><img className="img-responsive" src="images/p1.png" title="name" alt /></a></li>
                <li><a href="single.html"><img className="img-responsive" src="images/p4.png" title="name" alt /></a></li>
                <li><a href="single.html"><img className="img-responsive" src="images/p2.png" title="name" alt /></a></li>
              </ul>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>            
        <div className="footer">
          <p className="footer-class">© 2015 / </p>
          <a href="#home" className="scroll to-Top">  GO TO TOP!</a>
          <div className="clearfix"> </div>
        </div>	 	
      </div>
    );
  }
}

export default App;
