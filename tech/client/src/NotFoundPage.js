import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import './Register.css';
import techcarelogo from './images/techcarelogo.png';


const NotFoundPage = () => {

    return (
    <div>
        
        <Box sx={{ flexGrow: 3, flexDirection:'column' }}>
            <Box
        component="img"
        sx={{
          height: 250,
          width: 250,
          maxHeight: { xs: 110, md:250, xl: 250 },
          maxWidth: { xs: 110, md:250, xl: 250 },
        }}
        alt="Tech care logo"
        src={techcarelogo}
      />
            <Grid2 container justifyContent={'center'}>
                <Grid2 mt={5} spacing={15} sx={{mx:'auto',justifyContent:'center'}}>
                    <p className="pagenotfound"> This page does not exist!</p>
                </Grid2>
            </Grid2>
        </Box>            
    </div>

    )
}

export default NotFoundPage;
