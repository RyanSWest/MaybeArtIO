import { useState } from 'react'
  import Hero from './Hero.jsx'
// import './App.css'
import Car from './Carousel.jsx'
import Count from './Count.jsx';
 import Header from './Header.jsx';
 import './new.css';
 import {Link} from 'react-router-dom';
 import{Navbar,Nav, NavDropdown, Dropdown, Container} from 'react-bootstrap';
 
function Home() {
 
  return (
    <>
      <div className='body'>
         
          <header id="header">
    <nav className="navbar navbar-expand-lg padding-small px-lg-4">
      <div className="container-fluid ">

        <div className="main-logo">
          <a href="index.html">
            <img src="./images/Token.png" alt="logo/"/>
          </a>
        </div>

        <button className="navbar-toggler mb-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <iconify-icon icon="system-uicons:menu-hamburger" className="hamburger-menu"></iconify-icon>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body ">
            <div className="main-menu text-center d-lg-flex align-items-center">
              <ul className="menu-list list-unstyled d-lg-flex m-0">
                <li className="menu-item">
                  <a href="#" className="item-anchor active" data-effect="Home">Home</a>
                </li>
                <li className="menu-item">
                  <a href="marketplace.html" className="item-anchor" data-effect="Blogs">Marketplace</a>
                </li>
                <li className="menu-item">
                  <a href="creators.html" className="item-anchor" data-effect="Shop">Creators</a>
                </li>
                <li className="menu-item">
                  <a href="collection.html" className="item-anchor" data-effect="Blogs">Collection</a>
                </li>
                <li className="menu-item dropdown">
                  <a className="item-anchor dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false" >Pages</a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a href="about.html" className="dropdown-item fw-light">About <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="blog.html" className="dropdown-item fw-light">Blog <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="blog-single.html" className="dropdown-item fw-light">Blog-Single <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="marketplace.html" className="dropdown-item fw-light">Marketplace <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="item-detail.html" className="dropdown-item fw-light">Item Details
                        <span className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="collection.html" className="dropdown-item fw-light">Collection <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="create-item.html" className="dropdown-item fw-light">Create Item <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="creators.html" className="dropdown-item fw-light">Creators <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="profile.html" className="dropdown-item fw-light">Author/Profile <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="edit-profile.html" className="dropdown-item fw-light">Edit Profile <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="wallet.html" className="dropdown-item fw-light">Wallet <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="contact.html" className="dropdown-item fw-light">Contact <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="faq.html" className="dropdown-item fw-light">FAQs <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="signin.html" className="dropdown-item fw-light">Sign-up <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="login.html" className="dropdown-item fw-light">Log-in <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="comingsoon.html" className="dropdown-item fw-light">Coming Soon <span
                          className="badge bg-secondary">Pro</span></a></li>
                    <li><a href="error.html" className="dropdown-item fw-light">Error <span
                          className="badge bg-secondary">Pro</span></a></li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <a href="https://templatesjungle.gumroad.com/l/nft-marketplace-free-bootstrap-template"
                    className="item-anchor" target="_blank"> <b>GETPRO</b> </a>
                </li>
              </ul>
            </div>
            <div className="btn-wrap d-flex my-4 my-lg-0 ">
              <a href="login.html" className="btn btn-linear btn-medium">Log in</a>
              <a href="signin.html" className="btn btn-outline-linear btn-medium m-0">Sign up</a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  </header> 
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container className ='bg-gradient'>
        <Navbar.Brand href="#home">Maybe-Art</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  <Header/>
  <Navbar> 


  </Navbar>
   <div id="billboard" className="bg--dark">
    <div className="main-wrapper">
      <div className="row d-flex flex-wrap align-items-center">
        <div className="col-md-7 col-sm-8">
          <div className="banner-content content-light m-0 mt-5 mt-md-0">
            <h1 className="banner-title m-0">Maybe Art Token.</h1>
            <h1 className='fontie'>Turning Creativity <span className ='fontie2'>into Currency </span>  </h1>
            <p className="cyberpunk-text">                 MAYBEART is a cryptocurrency on the Solana blockchain, backed by art, blending the worlds of blockchain and creativity. Our community empowers musicians, visual artists, collectors, and fans by providing a marketplace where creators can showcase and sell their works. Beyond traditional sales, artists can also offer fractional ownership of their music royalties, publishing rights, or artworks, giving supporters a direct stake in their success. Through grants, community-driven initiatives, and innovative token-powered projects, MAYBEART fosters a collaborative space where art and technology thrive together.
.</p>
            <div className="btn-wrap d-flex flex-wrap">
              <a href="#" className="btn btn-linear btn-medium mt-3">Get Started</a>
              <a href="#" className="btn btn-outline-linear btn-medium mt-3">Create NFTs</a>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-8">
          <div className="image-holder">
            <img src="./images/Token.png" alt="banner"
            
            className="rounded-circle"
            
            />
          </div>
        </div>
      </div>
    </div>
  </div>

    <section id="association-with" className="padding-large pt-5 pattern-blur">
    <div className="pattern-overlay left-side-pattern">
      <img src="./images/pattern-blur-left.png"/>
    </div>
    <div className="container">
      <div className="row justify-content-between">
        <img src="./images/association-brand1.png" alt="brand" className="col-md-2 img-fluid"/>
        <img src="./images/association-brand2.png" alt="brand" className="col-md-2 img-fluid"/>
        <img src="./images/association-brand3.png" alt="brand" className="col-md-2 img-fluid"/>
        <img src="./images/association-brand4.png" alt="brand" className="col-md-2 img-fluid"/>
        <img src="./images/association-brand5.png" alt="brand" className="col-md-2 img-fluid"/>
      </div>
    </div>
  </section>




  

   <section id="subscribe" className=" pattern-circle">
    <div className="pattern-overlay">
      <img src="./images/pattern-overlay.png" alt="pattern-overlay"/>
    </div>
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-center">
        <div className="col-md-6">
          <div className="image-holder">
            {/* <img src="images/single-image.jpg" alt="single image" className="banner-image"/> */}
            <Car/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="subscribe-content">
            <div className="subscribe-header">
              <Count/>
              <h3 className="subscribe-title light">Countdown to Oct 30th Auction</h3>
              <p> New Unrealeased material from John Butler and More .</p>
            </div>
            <form id="form" className="d-flex justify-content-between bg-blue-trans rounded-3">
              <input type="text" name="email" placeholder="Write your email here"
                className="btn-rounded w-100 content-dim-light align-self-center bg-transparent border-0"/>
              <button className="btn btn-linear btn-medium rounded-0">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>


    <section id="nft-collection" className="padding-large">
    <div className="container">
      <div className="row overflow-hidden">
        <div className="section-header align-center">
          <h2 className="section-title light">NFTs collections</h2>
          <p>Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.</p>
        </div>
        <div className="product-content">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-item bg-blue-trans border-rounded-pill">
                <div className="product-detail text-center">
                  <div className="clients-detail">
                    <img src="./images/blog1.jpg" alt="clients" className="circle-shape"/>
                  </div>
                  <h3 className="block-title">Broken Collection</h3>
                  <div className="btn-card">
                    <a href="#" className="view-btn">View Collection</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-item bg-blue-trans border-rounded-pill">
                <div className="product-detail text-center">
                  <div className="clients-detail">
                    <img src="./images/blog2.jpg" alt="clients" className="circle-shape"/>
                  </div>
                  <h3 className="block-title">Broken Collection</h3>
                  <div className="btn-card">
                    <a href="#" className="view-btn">View Collection</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-item bg-blue-trans border-rounded-pill">
                <div className="product-detail text-center">
                  <div className="clients-detail">
                    <img src="./images/blog3.jpg" alt="clients" className="circle-shape"/>
                  </div>
                  <h3 className="block-title">Broken Collection</h3>
                  <div className="btn-card">
                    <a href="#" className="view-btn">View Collection</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-item bg-blue-trans border-rounded-pill">
                <div className="product-detail text-center">
                  <div className="clients-detail">
                    <img src="./images/blog4.jpg" alt="clients" className="circle-shape"/>
                  </div>
                  <h3 className="block-title">Broken Collection</h3>
                  <div className="btn-card">
                    <a href="#" className="view-btn">View Collection</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



    <section id="blog" className="padding-large">
    <div className="container">
      <div className="row overflow-hidden">
        <div className="section-header d-md-flex justify-content-between ">
          <h2 className="section-title light">Our Latest Blog</h2>
          <div>
            <a href="#" className="btn btn-linear btn-medium">Read our blogs</a>
          </div>
        </div>
        <div className="product-content">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-item bg-blue-trans p-3 rounded-1 mb-3 ">
                <div className="product-detail">
                  <div className="clients-detail">
                    <a href="blog-single.html"> <img src="./images/nft-item1.jpg" alt="clients"/> </a>
                  </div>
                  <div className="btn-card">
                    <a href="blog-single.html" className="view-btn">Art</a>
                  </div>
                  <a href="blog-single.html">
                    <h3 className="block-title">Best NFTs arts collections from best artists </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-item bg-blue-trans p-3 rounded-1 mb-3 ">
                <div className="product-detail">
                  <div className="clients-detail">
                    <a href="blog-single.html"> <img src="./images/nft-item2.jpg" alt="clients"/> </a>
                  </div>
                  <div className="btn-card">
                    <a href="blog-single.html" className="view-btn">Design</a>
                  </div>
                  <a href="blog-single.html">
                    <h3 className="block-title">Best NFTs arts collections from best artists </h3>
                  </a>

                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-item bg-blue-trans p-3 rounded-1 mb-3 ">
                <div className="product-detail">
                  <div className="clients-detail">
                    <a href="blog-single.html"> <img src="./images/nft-item3.jpg" alt="clients"/> </a>
                  </div>
                  <div className="btn-card">
                    <a href="blog-single.html" className="view-btn">NFTs</a>
                  </div>
                  <a href="blog-single.html">
                    <h3 className="block-title">Best NFTs arts collections from best artists </h3>
                  </a>

                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-item bg-blue-trans p-3 rounded-1 mb-3 ">
                <div className="product-detail">
                  <div className="clients-detail">
                    <a href="blog-single.html"> <img src="./images/nft-item4.jpg" alt="clients"/> </a>
                  </div>
                  <div className="btn-card">
                    <a href="blog-single.html" className="view-btn">Arts</a>
                  </div>
                  <a href="blog-single.html">
                    <h3 className="block-title">Best NFTs arts collections from best artists </h3>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<footer id="footer" className="padding-large pattern-blur">
    <div className="pattern-overlay pattern-blur-footer right-side-pattern">
      <img src="./images/footer-pattern.png"/>
    </div>
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-between">
        <div className="col-lg-4 col-md-6">
          <div className="footer-item item-001">
            <img src="./images/main-logo.png" alt="logo"/>
            <p>Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue. Posuere ac in in
              nisl sed augue.</p>
            <div className="social-media">
              <ul className="d-flex list-unstyled">
                <li className="bg-blue-trans border-rounded-circle">
                  <a href="#">
                    <i className="icon icon-facebook"></i>
                  </a>
                </li>
                <li className="bg-blue-trans border-rounded-circle">
                  <a href="#">
                    <i className="icon icon-twitter"></i>
                  </a>
                </li>
                <li className="bg-blue-trans border-rounded-circle">
                  <a href="#">
                    <i className="icon icon-instagram"></i>
                  </a>
                </li>
                <li className="bg-blue-trans border-rounded-circle">
                  <a href="#">
                    <i className="icon icon-youtube"></i>
                  </a>
                </li>
                <li className="bg-blue-trans border-rounded-circle">
                  <a href="#">
                    <i className="icon icon-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <div className="footer-item item-002 content-light">
            <h4>Marketplace</h4>
            <ul className="footer-menu list-unstyled">
              <li>
                <a href="#">NFTs</a>
              </li>
              <li>
                <a href="#">Art</a>
              </li>
              <li>
                <a href="#">Collectibles</a>
              </li>
              <li>
                <a href="#">Virtual world</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <div className="footer-item item-003 content-light">
            <h4>Info</h4>
            <ul className="footer-menu list-unstyled">
              <li>
                <a href="#">Activity</a>
              </li>
              <li>
                <a href="#">Stats</a>
              </li>
              <li>
                <a href="#">Rankings</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <div className="footer-item item-004 content-light">
            <h4>Company</h4>
            <ul className="footer-menu list-unstyled">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Top Creators</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <div className="footer-item item-005 content-light">
            <h4>Resources</h4>
            <ul className="footer-menu list-unstyled">
              <li>
                <a href="#">Info</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">Associated</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
   
      </div>
       
    </>
  )
}

export default Home
