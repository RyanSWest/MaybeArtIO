import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useUser } from './util/UserContextProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadType, setUploadType] = useState('file');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [pics, setPics] = useState([]);

  const user= useUser();
  const navigate = useNavigate();
  const location = useLocation();
  

  const logout = async () => {
  try {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      const response = await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      
      const data = await response.json();
      console.log('Logout response:', data);
    }
  } catch (err) {
    console.error('Logout error:', err);
  } finally {
    sessionStorage.removeItem('authToken');
    
  }
};
  const API_URL = 'https://squi-d-lite-production.up.railway.app';

  // Fetch user's gallery
  const fetchUserGallery = async (email) => {
    if (!email) return;
    try {
      const res = await axios.get(`${API_URL}/api/gallery/${email}`);
      console.log("Gallery fetched:", res.data);
      setPics(res.data.gallery || []);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };
  

  const handleLogout = async () => {
    await logout();
    // Optionally redirect to login page
    // navigate('/login');
  };


  // Load gallery when user is authenticated
  useEffect(() => {
    if (user.isAuthenticated && user.user?.email) {
      fetchUserGallery(user.user.email);
    }
  }, [user.isAuthenticated, user.user?.email]);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (uploadType === 'file') {
        if (!selectedFile) {
          setMessage('Please select a file');
          setMessageType('danger');
          setLoading(false);
          return;
        }

        const formData = new FormData();
        formData.append('art', selectedFile);
        formData.append('email', user.user.email);
        if (title) formData.append('title', title);
        if (description) formData.append('description', description);

        await axios.post(`${API_URL}/api/gallery/upload`, formData);

        setMessage('File uploaded successfully!');
        setMessageType('success');
        setSelectedFile(null);
        setTitle('');
        setDescription('');
        
        // Refresh gallery
        await fetchUserGallery(user.user.email);

      } else {
        if (!imageUrl) {
          setMessage('Please enter an image URL');
          setMessageType('danger');
          setLoading(false);
          return;
        }

        await axios.post(`${API_URL}/api/gallery/upload`, {
          email: user.user.email,
          url: imageUrl,
          title: title || 'URL Upload',
          description: description
        });

        setMessage('URL added successfully!');
        setMessageType('success');
        setImageUrl('');
        setTitle('');
        setDescription('');
        
        // Refresh gallery
        await fetchUserGallery(user.user.email);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage(error.response?.data?.message || 'Upload failed');
      setMessageType('danger');
    }

    setLoading(false);
  };

  // Not logged in
  if (!user.isAuthenticated) {
    return (
      <Container className="mt-4" style={{ paddingTop: '4vh' }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="text-center">
              <Card.Body className="p-5">
                <h2 className="mb-4">Login Required</h2>
                <p className="mb-4">You must be logged in to upload and view your gallery.</p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/login', { state: { from: location } })}
                  className="w-100"
                >
                  Go to Login
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  // Logged in
  return (
    <Container className="mt-4" style={{ paddingTop: '4vh' }}>
      <h1>Gallery for: {user.user?.email}</h1>

      <Row>
        <Col>
          <h3>Your Uploads</h3>
          {pics.length === 0 ? (
            <p>No uploads yet. Upload your first artwork!</p>
          ) : (
            <Row>
              {pics.map((item, index) => (
                <Col md={4} key={item.id || index} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={item.type === 'file'
                        ? `${API_URL}/api/gallery/image/${item.id}`
                        : item.url
                      }
                      alt={item.title || 'Art'}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{item.title || 'Untitled'}</Card.Title>
                      <Card.Text>{item.description || 'No description'}</Card.Text>
                      <small className="text-muted">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card>
            <Card.Header>
              <h3>Upload Art to Gallery</h3>
            </Card.Header>
            <Card.Body>
              {message && (
                <Alert variant={messageType} dismissible onClose={() => setMessage('')}>
                  {message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Type</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="File Upload"
                      name="uploadType"
                      id="file-upload"
                      checked={uploadType === 'file'}
                      onChange={() => setUploadType('file')}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Image URL"
                      name="uploadType"
                      id="url-upload"
                      checked={uploadType === 'url'}
                      onChange={() => setUploadType('url')}
                    />
                  </div>
                </Form.Group>

                {uploadType === 'file' ? (
                  <Form.Group className="mb-3">
                    <Form.Label>Select Image File</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      key={uploadType}
                    />
                    {selectedFile && (
                      <Form.Text className="text-muted">
                        Selected: {selectedFile.name}
                      </Form.Text>
                    )}
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Title (Optional)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a title for your art"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description (Optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Describe your artwork..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  className="w-100"
                >
                  {loading ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" className="me-2" />
                      Uploading...
                    </>
                  ) : (
                    `Upload ${uploadType === 'file' ? 'File' : 'URL'}`
                  )}
                </Button>
              </Form>
              
 
    <Button onClick={handleLogout} 
                      variant="primary"
                       className="w-100"
                       color='primary'

    
    >
      Logout
    </Button>
 
 
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Upload;