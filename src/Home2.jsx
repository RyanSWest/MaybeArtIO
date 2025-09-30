import React, { useState } from 'react';
// import './LandingPage.css';
import Car from './Carousel';
import Hero from './Hero';
import Count from './Count.jsx';
import { 
  Container, 
  Navbar, 
  Nav, 
  Button, 
  Row, 
  Col, 
  Card, 
  Badge 
} from 'react-bootstrap';
import{Link} from 'react-router-dom';

export default function MaybeArtLanding() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '🎨',
      title: 'Maybe Art',
      description: 'Where Creativity turns into Currency.'
    },
    {
      icon: '🛡️',
      title: 'Bank-Level Security',
      description: 'Military-grade encryption and compliance with international security standards for asset protection.'
    },
    {
      icon: '📊',
      title: 'Market Analytics',
      description: 'Advanced analytics and reporting tools to track performance and optimize your digital asset portfolio.'
    },
    {
      icon: '🏢',
      title: 'Enterprise Solutions',
      description: 'Scalable blockchain infrastructure designed for businesses and institutional clients worldwide.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Professional Artists' },
    { number: '200K+', label: 'Digital Assets' },
    { number: '$5M+', label: 'Transaction Volume' },
    { number: '99.9%', label: 'Platform Uptime' }
  ];

  return (
    <div className="maybeArt-landing">
      {/* Navigation */}
      <Navbar expand="lg" variant="dark" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand className="fw-bold fs-3">
            Maybe<span className="text-primary">Art</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/whitepaper">Docs</Nav.Link>
            </Nav>
            
            <div className="d-flex gap-2">
              <Link to ='/login'> 

                            <Button variant="outline-light" size="sm">Sign In</Button>

              </Link>

              <Link to='/register'> 
                             <Button variant="primary" size="sm">Get Started</Button>

              </Link>
             </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}

 
      <section className="hero-section">
        <Container>
       
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h1 className="hero-title">
               Maybe Art
                
               </h1>
               <Row className = 'cyberpunk-pulse-border'> 


                   <h2 className ='cyberpunk-text-h2'> Where Creativity  
                    <h3>
                                                       <span className='terminal-text'> becomes Currency</span>

                       </h3>
 
               </h2>
               
              
               </Row>
              
                                                <p className="cyberpunk-text"> MAYBEART is a cryptocurrency on the Solana blockchain, backed by art. We empower artists and collectors through a marketplace where creators can sell their works, share royalties, and collaborate with a community that fuels innovation and growth.</p>

                                <p className='terminal-text'> MAYBEART is a cryptocurrency on the Solana blockchain, backed by art. We empower artists and collectors through a marketplace where creators can sell their works, share royalties, and collaborate with a community that fuels innovation and growth.</p>

              <Count/>
              <Car/>
              
              <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
                <Button variant="primary" size="lg" className="px-4 py-3">
                  Start Creating →
                </Button>
                <Button variant="outline-light" size="lg" className="px-4 py-3">
                  ▶ Platform Demo
                </Button>
              </div>

              {/* Stats */}
              <Row className="g-4 stats-section mt-5">
                {stats.map((stat, index) => (
                  <Col xs={6} md={3} key={index}>
                    <Card className="bg-dark border-secondary h-100 stats-card">
                      <Card.Body className="text-center py-4">
                        <h3 className="text-primary fw-bold mb-2">{stat.number}</h3>
                        <Card.Text className="text-muted mb-0">{stat.label}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-4 fw-bold mb-4">
                Enterprise-Grade <span className="text-primary">Solutions</span>
              </h2>
              <p className="lead fs-5">
                Built for professionals who demand reliability, security, and scalability 
                in their digital asset operations.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index}>
                <Card 
                  className={`h-100 feature-card ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon mb-3" style={{ fontSize: '3rem' }}>
                      {feature.icon}
                    </div>
                    <Card.Title className="h5">{feature.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Value Proposition */}
      <section className="value-section py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">
                Why Leading Organizations Choose MaybeArt
              </h2>
              
              <div className="d-flex align-items-start mb-4">
                <Badge bg="primary" className="me-3 mt-1" style={{ minWidth: '8px', height: '8px' }}></Badge>
                <div>
                  <h5 className="fw-semibold mb-2">Institutional Security</h5>
                  <p className="text-muted">
                    Bank-level security protocols and compliance with global regulatory standards.
                  </p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <Badge bg="primary" className="me-3 mt-1" style={{ minWidth: '8px', height: '8px' }}></Badge>
                <div>
                  <h5 className="fw-semibold mb-2">Scalable Infrastructure</h5>
                  <p className="text-muted">
                    High-performance blockchain technology that scales with your business needs.
                  </p>
                </div>
              </div>
              
              <div className="d-flex align-items-start">
                <Badge bg="primary" className="me-3 mt-1" style={{ minWidth: '8px', height: '8px' }}></Badge>
                <div>
                  <h5 className="fw-semibold mb-2">24/7 Enterprise Support</h5>
                  <p className="text-muted">
                    Dedicated support team with guaranteed response times for mission-critical operations.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <Card className="bg-dark border-secondary cta-card">
                <Card.Body className="p-5">
                  <Card.Title className="h2 mb-4">Ready to Get Started?</Card.Title>
                  <Card.Text className="mb-4 fs-6">
                    Join thousands of professionals creating and managing digital assets on our platform.
                  </Card.Text>
                  
                  <div className="d-grid gap-3">
                    <Button variant="primary" size="lg">Schedule a Demo</Button>
                    <Button variant="outline-light" size="lg">Contact Sales</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="mb-4" style={{ fontSize: '4rem' }}>🏢</div>
              <h2 className="display-4 fw-bold mb-4">Transform Your Digital Strategy</h2>
              <p className="lead mb-4 fs-5">
                Join industry leaders who trust MaybeArt for their digital asset management and NFT creation needs.
              </p>

              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
                <Button variant="primary" size="lg" className="px-5 py-3">
                  Get Started Today →
                </Button>
                <small className="text-muted">
                  No setup fees • Enterprise support included
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-section py-5">
        <Container>
          <Row className="g-4">
            <Col md={3}>
              <h5 className="fw-bold mb-3">
                Maybe<span className="text-primary">Art</span>
              </h5>
              <p className="text-muted">
                Professional digital asset platform for modern enterprises.
              </p>
            </Col>
            
            <Col md={3}>
              <h6 className="fw-semibold mb-3">Platform</h6>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-muted p-0 mb-2">NFT Creation</Nav.Link>
                <Nav.Link href="#" className="text-muted p-0 mb-2">Asset Management</Nav.Link>
                <Nav.Link href="#" className="text-muted p-0 mb-2">Analytics</Nav.Link>
                <Nav.Link href="#" className="text-muted p-0 mb-2">API Access</Nav.Link>
              </Nav>
            </Col>
            
            <Col md={3}>
              <h6 className="fw-semibold mb-3">Enterprise</h6>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-muted p-0 mb-2">Solutions</Nav.Link>
                <Nav.Link href="#" className="text-muted p-0 mb-2">Security</Nav.Link>
                <Nav.Link href="#" className="text-muted p-0 mb-2">Compliance</Nav.Link>
                <Nav.Link href="#" className="text-muted p-0 mb-2">White Paper</Nav.Link>
              </Nav>
            </Col>
            
            <Col md={3}>
              <h6 className="fw-semibold mb-3">Support</h6>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-muted p-0 mb-2">Documentation</Nav.Link>
                <Nav.Link href="#" className="text-muted p-0 mb-2">Contact Support</Nav.Link>
                <Nav.Link href="#" className="text-muted p-0 mb-2">Service Status</Nav.Link>
                <Nav.Link href="#" className="text-muted p-0 mb-2">Terms of Service</Nav.Link>
              </Nav>
            </Col>
          </Row>
          
          <hr className="my-5 border-secondary" />
          
          <Row>
            <Col className="text-center">
              <p className="text-muted mb-0">
                &copy; 2025 MaybeArt. All rights reserved. Enterprise digital asset platform.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}