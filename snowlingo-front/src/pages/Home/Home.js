import { Container, Divider, Link } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import snow from './snowlingo.svg';



export default function Home() {

    return (
        <Container>
            <img width='400' height='200' src={snow} alt="logo" />
            <h2>Great Advanture!</h2>
            <Divider>
                
            </Divider>
            <h2>Contact us!</h2>
        </Container>
    );
    

}