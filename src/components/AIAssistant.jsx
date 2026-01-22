import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress
} from '@mui/material';
import { useState } from 'react';
import Reveal from './Reveal';

function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAsk = () => {
    setLoading(true);
    setOpen(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Reveal id="ai">
      <div
        className="container py-5 section-gap"
        style={{
          minHeight: '70vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Card className="ai-pulse" sx={{ maxWidth: 500 }}>
          <CardContent>

            <Typography variant="h5" gutterBottom sx={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
              🤖 AI Sanctum
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Ask the Documentation Assistant (UI Simulation)
            </Typography>

            <TextField
              fullWidth
              label="Enter your question"
              variant="outlined"
              margin="normal"
              sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, background: 'linear-gradient(45deg, var(--primary-color), #007bff)' }}
              onClick={handleAsk}
            >
              Ask Assistant
            </Button>

          </CardContent>
        </Card>

        {/* AI Response Dialog */}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle sx={{ color: 'var(--primary-color)' }}>AI Response</DialogTitle>
          <DialogContent>
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px' }}>
                <CircularProgress size={24} />
                <Typography>Analyzing documentation...</Typography>
              </div>
            ) : (
              <Typography sx={{ color: '#e6e6e6' }}>
                This is a simulated response generated using Retrieval-Augmented
                Generation concepts. The assistant retrieves relevant information
                and presents context-aware answers.
              </Typography>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </Reveal>
  );
}

export default AIAssistant;
