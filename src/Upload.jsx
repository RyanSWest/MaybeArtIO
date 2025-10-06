import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner, Image } from 'react-bootstrap';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [uploadType, setUploadType] = useState('file');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [pics, setPics] = useState([]);
  const [preview, setPreview] = useState(null);

  const API_URL = 'https://daring-vitality-production-a0f4.up.railway.app';
 
    const getUsers ='https://squi-d-lite-production.up.railway.app/api/users'

    const getEmBoys =async ()=> {

      const res = await axios.get(`${getUsers}`)
      .then((res)=> {

             console.log('THE BOYS',res.data)


      })
     }
     
    const getEmGallery = async ()=> {
      const res = await axios.get(`${API_URL}/api/gallery/all`)

      .then((res) =>{
        console.log("GALLERY MOGO", res.data)
      })
    }

   getEmGallery()
    getEmBoys()
  // Fetch gallery
  const getterGo = async () => {
    if (userEmail.length > 0) {
      try {
        const res = await axios.get(`${API_URL}/api/gallery/${userEmail}`);
        console.log("REZZ", res.data);
        setPics(res.data.gallery);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    }
  };

  // Fetch gallery when userEmail changes
  useEffect(() => {
    getterGo();
  }, [userEmail]);

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
        // File upload
        if (!selectedFile) {
          setMessage('Please select a file');
          setMessageType('danger');
          setLoading(false);
          return;
        }

        const formData = new FormData();
        formData.append('art', selectedFile);
        formData.append('email', userEmail);

        if (title) formData.append('title', title);
        if (description) formData.append('description', description);

        const response = await axios.post(`${API_URL}/api/gallery/upload`, formData);

        setMessage('File uploaded successfully!');
        setMessageType('success');
        setSelectedFile(null);
        setTitle('');
        setDescription('');
        
        // ✅ FIX: Refresh gallery after file upload
        await getterGo();
        
      } else {
        // URL upload
        if (!imageUrl) {
          setMessage('Please enter an image URL');
          setMessageType('danger');
          setLoading(false);
          return;
        }

        const response = await axios.post(`${API_URL}/api/gallery/upload`, {
          email: userEmail,
          url: imageUrl,
          title: title || 'URL Upload',
          description: description
        });

        setMessage('URL added successfully!');
        setMessageType('success');
        setImageUrl('');
        setTitle('');
        setDescription('');
        
        // ✅ Refresh gallery after URL upload
        await getterGo();
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage(error.response?.data?.message || 'Upload failed');
      setMessageType('danger');
    }

    setLoading(false);
  };

  return (
    <Container className="mt-4" style={{ paddingTop: '6rem' }}>
      <h1>Gallery for: {userEmail}</h1>
      
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
                        Uploaded: {new Date(item.createdAt).toLocaleDateString()}
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
                  <Form.Label>User Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </Form.Group>

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
                      inlineF
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
                    <Form.Text className="text-muted">
                      Enter a direct link to an image
                    </Form.Text>
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
                  disabled={loading || !userEmail}
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageUpload;