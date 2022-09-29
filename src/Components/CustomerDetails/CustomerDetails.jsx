import React from 'react';
import "./CustomerDetails.css";
import { Button, TextField, Checkbox, FormControl, FormControlLabel, FormLabel,Radio,RadioGroup, } from "@mui/material";
import UserService from '../../Services/UserService';

const userservice = new UserService();

function CustomerDetails(props) {

    const [address, setAddress] = React.useState({
       
        Address: '',
        City: '',
        Landmark: '',
        State: '',
        PinCode: '',
        address_type: ''
    })

    const changeState = (event) => {
        setAddress(previousValue => {
            return { ...previousValue, [event.target.name]: event.target.value }

        })
    }

    const next = () => {
        let data = {
           "address": address.Address,
            "city": address.City,
            "state": address.State,
            "landmark": address.Landmark,
            "pincode": address.PinCode,
            "address_type": address.address_type,
        }
        console.log("Customer is calling");
        console.log(data);
        userservice.address(data).then((response) => {

            console.log(response);


        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        
        <div className='adress'>
                    <div className='addressbuttons'>
                        <span>Customer Details</span>
                        <button className='addaddressbutton'>Add New Address</button>
                    </div>

                    
                    <div className='inputaddress'>
                        <div className='fullnameAndMobile'>
                            <TextField className='textfields'
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                                id="outlined-basic" label="Full Name" size='small' variant="outlined" onChange={(e) => changeState(e)} />

                            <TextField className='textfields' id="outlined-basic" label="Mobile" size='small' variant="outlined" onChange={(e) => changeState(e)} />
                        </div>
                        <div className='field'>
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Address"
                                name = "Address"
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '475px' }}
                                
                                size='small'
                                variant="outlined" 
                                onChange={(e) => changeState(e)}
                            />

                        </div>
                        <TextField
                            id="outlined-basic"
                            label="City"
                            name= "City"
                            className='textfields'
                            style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                            size='small'
                            variant="outlined"
                            onChange={(e) => changeState(e)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Landmark"
                            name= "Landmark"

                            className='textfields'
                            size='small'
                            variant="outlined"
                            onChange={(e) => changeState(e)}
                        />
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="State"
                                name = "State"
                                className='textfields'
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                                size='small'
                                variant="outlined"
                                onChange={(e) => changeState(e)}
                            />

                            <TextField
                                id="outlined-basic"
                                label="PinCode"
                                name = "PinCode"
                                className='textfields'
                                size='small'
                                variant="outlined"
                                onChange={(e) => changeState(e)}
                            />
                        </div>
                        </div>
                        <div className='addresstypefield'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">AddressType</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"

                                >
                                    <FormControlLabel onChange={(e) => changeState(e)}  className='radiofont' name="address_type" value="Home" control={<Radio />} label="Home" />
                                    <FormControlLabel  onChange={(e) => changeState(e)} className='radiofont'  name="address_type"  value="Work" control={<Radio />} label="Work" />
                                    <FormControlLabel onChange={(e) => changeState(e)}  className='radiofont' name="address_type" value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className="continuebutton" >
                            <Button  onClick={next} style={{
                                width: '150px',
                                height: '35px',
                                backgroundColor: '#3371B5',
                                color: '#FFFFFF',
                                fontSize: '13px',
                                textTransform: 'none'
                            }}>CONTINUE</Button>
                        </div>

                    </div>
                </div>
                
                );
            }
export default CustomerDetails;