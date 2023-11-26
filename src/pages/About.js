import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{my:15,textAlign:'center',p:2,"& h4":{fontWeight:"bold",my:2,fontSize:"2rem"},"& p":{textAlign:'center'},"@media (max-width:600px)":{my:0},"& h4":{fontSize:"2rem"}}}>
                <Typography variant='h4'>Welcom to My Restaurant</Typography>
                <p>
                Lorem ipsum dolor sit amet consecteaspernatur quo quae totam possimus animi laboriosam asperiores beatae quod accusantium voluptatibus autem doloremque vitae assumenda ipsa. Quam vero repellendus delectus vitae pariatur deleniti neque, possimus incidunt eveniet eius corporis sapiente laboriosam sit id! Rem, illum amet nulla officia suscipit optio iusto cupiditate a. Laboriosam animi neque qui. Obcaecati ipsam earum deserunt quidem aliquid non perferendis sapiente eum. Numquam voluptas et corrupti veniam fugiat quasi modi, consequuntur odit fugit consequatur quidem eaque laudantium exercitationem quaerat, explicabo est maxime eos quas iusto dolor! Voluptas, ipsa.
                </p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi eligendi, sit nobis quam suscipit tenetur aspernatur quo quae totam possimus animi laboriosam asperiores beatae quod accusantium voluptatibus autem doloremque vitae assumenda ipsa. Quam vero repellendus delectus vitae pariatur deleniti neque, possimus incidunt eveniet eius corporis sapiente laboriosam sit id! Rem, illum amet nulla officia suscipit optio iusto cupiditate a. Laboriosam animi neque qui. Obcaecati ipsam earum deserunt quidem aliquid non perferendis sapiente eum. Numquam voluptas et corrupti veniam fugiat quasi modi, consequuntur odit fugit consequatur quidem eaque laudantium exercitationem quaerat, explicabo est maxime eos quas iusto dolor! Voluptas, ipsa.</p>
            </Box>
            {/* <h1>About page</h1> */}
        </Layout>
    )
}

export default About
