import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import './CreateActivity.css'
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

const CreateActivity = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState({
        default: true,
        address_line_1:'',
        address_line_2:'',
        district:'',
        state:'',
        country:'',
        pin:'',
        landmark:'',
    });
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
        setDate('');
        setTime('');
        setDescription('');
        setTitle('');
        setSelectedFile(null);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(date==='' || title===''){
            alert('Empty Title or Date ');
            return;
        }
        
        // sending data to server
        const body = {
            date,
            time:time+':00',
            title: capitalizeFirstLetters(title),
            description,
        }
        try {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            const response = await axios.post(`${apiKey}activities/events/`, body, config);
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
            <Typography variant="h4" className='event-form-header' gutterBottom>
                Add Event Details
            </Typography>
            <div>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Event Title"
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
                            label="Event Description"
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                            value={description} onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker label="Event Date" name="date" onChange={e=>setDate(e.format('YYYY-MM-DD'))} />
                    </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DemoContainer components={['TimePicker']}>
                                <TimePicker name="time" label="Event Time" onChange={e=>setTime(e.format('hh:mm'))} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControlLabel control={<Checkbox
                            {...label}
                            defaultChecked
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />} label="Default Address (Tezpur University)" />
                        <Button variant='outlined' style={{ margin:'1rem 0' }}>Create New Address</Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} onChange={handleFileChange}>
                            Upload file
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        <IconButton disabled={selectedFile===null || selectedFile===undefined?(true):(false)} color="secondary" aria-label="delete" onClick={removeFile}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                    
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

export default CreateActivity