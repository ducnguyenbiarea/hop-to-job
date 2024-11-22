import Header from "../components/Header"
import {Box, Typography, Button, styled} from '@mui/material'
import { routePath } from "../routes/route"
import { useNavigate } from "react-router-dom"

const Component = styled(Box)({
    marginTop: 60, 
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    margin: '0 100px',
    '& > div': {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > div > p': {
            fontSize: 56,
            lineHeight: 1.25,
            letterSpacing: -1
        },
        '& > div > button': {
            width: 220,
            height: 60,
            background: 'rgb(37, 87, 167)',
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 700, 
            marginTop: 48
        }
    }
})
const Home = () => {
    const navigate = useNavigate();
    const animatedImage = "data:image/jpeg;base64,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"
    return (
        <div>
            <Header/>
            <Component>
                <Box>
                    <Typography>Let's make your next great hire.<br/>Fast.</Typography>
                    <Button variant="contained" onClick={() => navigate(routePath.create)}>Post a job</Button>
                </Box>
                <Box>
                    <img src={animatedImage} alt="home" style={{width: 600}}/>
                </Box>
            </Component>
        </div>
    )
}
 export default Home