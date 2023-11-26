import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
                <Typography>Contact My Restaurant</Typography>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit rerum incidunt iusto esse impedit, quae sapiente ducimus earum ipsam necessitatibus facilis! Totam quibusdam doloribus eaque reiciendis soluta rerum minus in?
                </p>
            </Box>
            <Box sx={{m:3,width:"600px",ml:10,"@media(max-width:600px)":{width:"300px"}}}>
                <TableContainer component={Paper}>
                    <Table aria-label='contact table'>
                        <TableHead>
                            <TableRw>
                                <TableCell sx={{bgcolor:"black",color:"white"}}align='center'>Contact Details</TableCell>
                            </TableRw>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />1234567890(tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <MailIcon sx={{ color: "skyblue", pt: 1 }} />help@myrest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} />Contact Us
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact