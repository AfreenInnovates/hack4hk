import React, { useState } from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Chip, Stack, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface Request {
  id: string;
  licenseNumber: string;
  name: string;
  website: string;
  feature: string;
  registrationLink: string;
  verificationWebsite: string;
  featuredLinks: string[];
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2',
    },
    secondary: {
      main: '#50E3C2',
    },
    error: {
      main: '#FF6F61',
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

const Requests: React.FC = () => {
  const [requests] = useState<Request[]>([
    {
      id: 'ORG-A001',
      licenseNumber: 'LIC-123456',
      name: 'Organization A',
      website: 'https://org-a.com',
      feature: 'Education',
      registrationLink: 'https://org-a.com/registration',
      verificationWebsite: 'https://reg-verification.com/org-a',
      featuredLinks: ['https://news-site.com/org-a-feature', 'https://blog.com/org-a-interview'],
    },
    {
      id: 'ORG-B002',
      licenseNumber: 'LIC-789012',
      name: 'Organization B',
      website: 'https://org-b.com',
      feature: 'Health',
      registrationLink: 'https://org-b.com/registration',
      verificationWebsite: 'https://reg-verification.com/org-b',
      featuredLinks: ['https://media-site.com/org-b-health-feature'],
    },
    {
      id: 'ORG-C003',
      licenseNumber: 'LIC-345678',
      name: 'Organization C',
      website: 'https://org-c.com',
      feature: 'Environment',
      registrationLink: 'https://org-c.com/registration',
      verificationWebsite: 'https://reg-verification.com/org-c',
      featuredLinks: ['https://environment-site.com/org-c-feature'],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [rejectionReason, setRejectionReason] = useState<string>('');
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleApprove = (request: Request) => {
    console.log('Approved:', request.name);
  };

  const handleDecline = (request: Request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setRejectionReason('');
  };

  const handleSubmitRejection = () => {
    console.log('Rejection reason for', selectedRequest?.name, ':', rejectionReason);
    setIsModalOpen(false);
    setRejectionReason('');
  };

  const handleViewRequest = () => {
    // Navigate to /admin/requests/:organizationid
    navigate(`/admin/requests/:organizationid`);
  };

  const handleViewModalClose = () => {
    setViewModalOpen(false);
    setSelectedRequest(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
          p: 4,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: '#000000', // Black color
            fontWeight: 'bold', // Bold text
            fontFamily: "'Montserrat', 'Roboto', 'Arial', sans-serif", // Custom font family
            mb: 4,
          }}
        >
          Organization Requests
        </Typography>

        <Grid container spacing={4}>
          {requests.map((request, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={4}
                sx={{
                  'borderRadius': '15px',
                  'background': theme.palette.background.paper,
                  'padding': 2,
                  'boxShadow': '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s ease-in-out',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: '#000000', // Black color
                      fontWeight: 'bold', // Bold text
                    }}
                  >
                    {request.name}
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <strong>ID:</strong> {request.id}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>License Number:</strong> {request.licenseNumber}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Website:</strong>{' '}
                    <a href={request.website} target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.secondary.main }}>
                      {request.website}
                    </a>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Feature:</strong> {request.feature}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Registration Link:</strong>{' '}
                    <a href={request.registrationLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                      {request.registrationLink}
                    </a>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Verification:</strong>{' '}
                    <a href={request.verificationWebsite} target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.secondary.main }}>
                      Verify Registration
                    </a>
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
                    {request.featuredLinks.map((link, idx) => (
                      <Chip key={idx} label={`Feature ${idx + 1}`} component="a" href={link} target="_blank" clickable color="secondary" variant="outlined" />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  <Button
                    variant="contained"
                    sx={{
                      'backgroundColor': '#4CAF50', // Green shade for Approve button
                      'borderRadius': '15px',
                      'px': 3,
                      '&:hover': {
                        backgroundColor: '#388E3C', // Darker green on hover
                      },
                    }}
                    onClick={() => handleApprove(request)}
                  >
                    Approve
                  </Button>
                  <Button variant="contained" color="error" sx={{ borderRadius: '15px', px: 3 }} onClick={() => handleDecline(request)}>
                    Decline
                  </Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '15px', px: 3 }} onClick={() => handleViewRequest(request)}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View Modal */}
        <Dialog open={viewModalOpen} onClose={handleViewModalClose}>
          <DialogTitle>Request Details for {selectedRequest?.name}</DialogTitle>
          <DialogContent>
            <Typography variant="body2">
              <strong>ID:</strong> {selectedRequest?.id}
            </Typography>
            <Typography variant="body2">
              <strong>License Number:</strong> {selectedRequest?.licenseNumber}
            </Typography>
            <Typography variant="body2">
              <strong>Website:</strong>{' '}
              <a href={selectedRequest?.website} target="_blank" rel="noopener noreferrer">
                {selectedRequest?.website}
              </a>
            </Typography>
            <Typography variant="body2">
              <strong>Feature:</strong> {selectedRequest?.feature}
            </Typography>
            <Typography variant="body2">
              <strong>Registration Link:</strong>{' '}
              <a href={selectedRequest?.registrationLink} target="_blank" rel="noopener noreferrer">
                {selectedRequest?.registrationLink}
              </a>
            </Typography>
            <Typography variant="body2">
              <strong>Verification:</strong>{' '}
              <a href={selectedRequest?.verificationWebsite} target="_blank" rel="noopener noreferrer">
                Verify Registration
              </a>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleViewModalClose} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {/* Decline Modal */}
        <Dialog open={isModalOpen} onClose={handleModalClose}>
          <DialogTitle>Rejection Reason</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="textSecondary">
              Why are you rejecting the request for <strong>{selectedRequest?.name}</strong>?
            </Typography>
            <TextField autoFocus margin="dense" id="rejectionReason" label="Rejection Reason" type="text" fullWidth multiline rows={4} value={rejectionReason} onChange={(e) => setRejectionReason(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmitRejection} color="error">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default Requests;
