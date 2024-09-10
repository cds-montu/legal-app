import React from 'react';
import { Box, Button, Stepper, Step, StepLabel, Typography, TextField, Paper, Alert } from '@mui/material';

const steps = ['Upload Files', 'Add Instructions', 'Review Document'];

export default function AutoDraft() {
  const [file, setFile] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0); // Step 3 (Review Document)
  const [draftInstructions, setDraftInstructions] = React.useState('');

  const handleNext = () => {
    if (activeStep === 2) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(file)
  const handleBack = () => {
   
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Paper elevation={3} style={{ padding: '30px', maxWidth: '700px', margin: 'auto', marginTop: '50px' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        AutoDraft
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Intelligent drafting tool to streamline document creation and customization
      </Typography>

      <Stepper style={{ color: '#212121', marginBottom: '20px' }} activeStep={activeStep} alternativeLabel >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && (
        <div className="file-upload-section">
          <label htmlFor="file-upload" className="file-upload-label">Choose File</label>
          <div className="file-input-wrapper">
            <input
              id="file-upload"
              type="file"
              onChange={handleFileUpload}
              className="file-upload-input"
              accept=".docx"
            />

            <div className="file-drag-drop-area">
              {file ? file.name : "Drag and drop files here, or click to select files"}
            </div>
          </div>
          {/* <Alert severity="info" style={{ marginBottom: '20px' }}>
          Upload a single Word file (.docx)
        </Alert> */}
        </div>
      )}
      {activeStep === 1 && (
        <div>
          <Typography variant="h6" >
            Add Drafting Instructions
          </Typography>
          <TextField
            label="Add Drafting Instructions"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={draftInstructions}
            onChange={(e) => setDraftInstructions(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          <Alert severity="info" style={{ marginBottom: '20px' }}>
            Please provide all details. Be as detailed as possible.
          </Alert>
        </div>
      )}
      {activeStep === 2 && (
        <div>
          <Alert severity="success" style={{ marginBottom: '20px' }}>
            Document drafted successfully. You can now download it.
          </Alert>

          <Typography variant="h5" gutterBottom>
            Reviewed Document:
          </Typography>
          <Typography gutterBottom>
            Your document has been reviewed. You can now download or preview it.
          </Typography>

          <Box display="flex" justifyContent="space-between" style={{ marginBottom: '20px' }}>
            <Button variant="contained" style={{width :'48%'}} >Preview Document</Button>
            <Button variant="contained" style={{width :'48%'}}  color="primary" >Download Document</Button>
          </Box>

          <Alert severity="info" style={{ marginTop: '20px' }}>
            Download and review the document (Changes are redlined).
          </Alert>
        </div>
      )}
      <br />
      <Box display="flex" justifyContent="space-between">
        {activeStep !== 0 ? <Button variant="contained"  onClick={handleBack} >
          Back
        </Button> : <Button  >
          
        </Button>
        } 
        {activeStep === 2 ?
          <Button variant="contained"  onClick={handleReset} >
            Reset
          </Button> :
          <Button variant="contained"  onClick={handleNext} disabled={file ===null}>
            Next
          </Button>
        }
      </Box>

      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '30px' }}>
        AI can make mistakes. Check important information.
      </Typography>
    </Paper>
  );
}
