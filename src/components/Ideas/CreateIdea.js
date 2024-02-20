import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import './CreateIdea.css'
import { apiKey } from '../../utils/apikey';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

function capitalizeFirstLetters(str) {
    return str.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

const CreateIdea = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState(null); // For PDF upload

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
        case 'title':
            setTitle(value);
            break;
        case 'description':
            setDescription(value);
            break;
        default:
            break;
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const removeFile = () => {
        if(selectedFile !== null && selectedFile){
            setSelectedFile(null);
            alert('file removed')
        }
    }

    const clearForm = () => {
        setDescription('');
        setTitle('');
        setSelectedFile(null);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(description==='' || title===''){
            alert('Empty Title or Date ');
            return;
        }
        
        // sending data to server
        const body = {
            title: capitalizeFirstLetters(title),
            description,
        }
        try {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            const response = await axios.post(``, body, config);
            alert('event created successfully');
            console.log(response);
            clearForm();

        } catch (error) {
            alert(error)
            console.log(error)
        }

    };
    return (
        <div className='event-form-maincontainer'>
            <Typography variant="h5" gutterBottom>
                Tell us a bit about your idea, our team will reach you after evaluating it 
            </Typography>
            <div>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Title"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={title} 
                        onChange={handleInputChange}
                    />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="Description"
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                            value={description} onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <p style={{ margin:'2rem 0 0 0' }}>Upload relevant file that visually represent the idea</p>
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} onChange={handleFileChange}>
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        <IconButton disabled={selectedFile===null || selectedFile===undefined?(true):(false)} color="secondary" aria-label="delete" onClick={removeFile}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>

                    <Grid item xs={12} sm={6}></Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                                required
                                id="description"
                                name="description"
                                label="References (separate by comma)"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                                value={description} onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12} sm={6}></Grid>
                    
                </Grid>
            </div>
            <div className='.event-form-submitcontainer' style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:'1rem' }}>
                <Button className='event-form-submit' variant="contained" size='lg' endIcon={<SaveIcon />} onClick={handleSubmit}>
                        SAVE
                </Button>
                <Button className='event-form-clear' variant='outlined' style={{ borderColor:'red', color:'red' }} endIcon={<DeleteIcon />} onClick={clearForm}>Clear</Button>
            </div>
        </div>
    )
}

export default CreateIdea