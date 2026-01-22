import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from '@mui/material';

import Reveal from './Reveal';

function Contact() {
  return (
    <Reveal id="contact">
      <div
        className="d-flex justify-content-center py-5 section-gap"
        style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}
      >

        <Card sx={{ maxWidth: 500 }}>
          <CardContent>

            <Typography variant="h5" gutterBottom sx={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
              📬 Messenger’s Gate
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Leave a message to begin the next chapter.
            </Typography>

            <TextField
              fullWidth
              label="Name"
              margin="normal"
              sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
            />

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              margin="normal"
              sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, background: 'linear-gradient(45deg, var(--primary-color), #007bff)' }}
            >
              Send Message
            </Button>

          </CardContent>
        </Card>
      </div>
    </Reveal>
  );
}

export default Contact;
