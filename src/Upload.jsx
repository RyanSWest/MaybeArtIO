import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useUser } from './util/UserContextProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadType, setUploadType] = useState('file');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [pics, setPics] = useState([]);

  const { user, isAuthenticated } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const API_URL = 'https://squi-d-lite-production.up.railway.app'
  

  const logout = async () => {
    try {
      const token = sessionStorage.getItem('authToken');
      if (token) {
        await fetch(`${API_URL}/api/auth/logout`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      sessionStorage.removeItem('authToken');
      navigate('/new')
    }
  };

  const fetchUserGallery = async (email) => {
    if (!email) return;
    try {
      const res = await axios.get(`${API_URL}/api/gallery/${email}`);
      setPics(res.data.gallery || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user?.email) {
      fetchUserGallery(user.email);
    }
  }, [isAuthenticated, user?.email]);

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
        if (!selectedFile) throw new Error('Please select a file');
        const formData = new FormData();
        formData.append('art', selectedFile);
        formData.append('email', user.email);
        if (title) formData.append('title', title);
        if (description) formData.append('description', description);

        await axios.post(`${API_URL}/api/gallery/upload`, formData);

        setMessage('File uploaded successfully!');
        setMessageType('success');
        setSelectedFile(null);
        setTitle('');
        setDescription('');
        await fetchUserGallery(user.email);

      } else {
        if (!imageUrl) throw new Error('Please enter an image URL');

        await axios.post(`${API_URL}/api/gallery/upload`, {
          email: user.email,
          url: imageUrl,
          title: title || 'URL Upload',
          description
        });

        setMessage('URL added successfully!');
        setMessageType('success');
        setImageUrl('');
        setTitle('');
        setDescription('');
        await fetchUserGallery(user.email);
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || err.message || 'Upload failed');
      setMessageType('danger');
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Card className="text-center p-4 neon-card">
          <h2 className="neon-title">Login Required</h2>
          <p>You must be logged in to upload and view your gallery.</p>
          <Button
            variant="primary"
            size="lg"
            className="neon-button w-100 mt-3"
            onClick={() => navigate('/login', { state: { from: location } })}
          >
            Go to Login
          </Button>
        </Card>
      </Container>
    );
  }

  return (
    <Container fluid style={{ padding: '2rem', background: 'dark)', minHeight: '100vh' }}>
      <h1 className="neon-title mb-4">Gallery for: {user?.email}</h1>

      <Row className="mb-4">
        {pics.length === 0 ? (
          <Col><p className="text-dark">No uploads yet. Upload your first artwork!</p></Col>
        ) : (
          pics.map((item, idx) => (
            <Col md={4} key={item.id || idx} className="mb-4">
              <Card className="login">
                <Card.Img
                  variant="top"
                  src={item.type === 'file' ? `${API_URL}/api/gallery/image/${item.id}` : item.url}
                  alt={item.title || 'Art'}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="text-light">{item.title || 'Untitled'}</Card.Title>
                  <Card.Text className="text-light">{item.description || 'No description'}</Card.Text>
                  <small className="text-muted">{new Date(item.createdAt).toLocaleDateString()}</small>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      <Card className="neon-card p-3">
        {message && (
          <Alert variant={messageType} dismissible onClose={() => setMessage('')} className="neon-alert">
            {message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Upload Type</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="File Upload"
                name="uploadType"
                checked={uploadType === 'file'}
                onChange={() => setUploadType('file')}
              />
              <Form.Check
                inline
                type="radio"
                label="Image URL"
                name="uploadType"
                checked={uploadType === 'url'}
                onChange={() => setUploadType('url')}
              />
            </div>
          </Form.Group>

          {uploadType === 'file' ? (
            <Form.Group className="mb-3">
              <Form.Label className="text-light">Select Image File</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleFileSelect} key={uploadType} />
              {selectedFile && <Form.Text className="text-light">Selected: {selectedFile.name}</Form.Text>}
            </Form.Group>
          ) : (
            <Form.Group className="mb-3">
              <Form.Label className="text-light">Image URL</Form.Label>
              <Form.Control type="url" placeholder="https://example.com/image.jpg" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label className="text-light">Title (Optional)</Form.Label>
            <Form.Control type="text" placeholder="Enter a title for your art" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-light">Description (Optional)</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe your artwork..." value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Button type="submit" disabled={loading} className="neon-button w-100 mb-2">
            {loading ? (<><Spinner as="span" animation="border" size="sm" className="me-2" />Uploading...</>) : `Upload ${uploadType === 'file' ? 'File' : 'URL'}`}
          </Button>

          <Button onClick={logout} className="neon-button w-100" variant="danger">Logout</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Upload;
