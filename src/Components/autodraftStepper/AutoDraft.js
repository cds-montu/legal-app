




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
    </div>
  )}
  const [file, setFile] = React.useState(null);  
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };
  const [draftInstructions, setDraftInstructions] = React.useState('');

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