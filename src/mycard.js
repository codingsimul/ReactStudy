import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from "react";
import axios from "axios";
import {Col,Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom"; 

function Mycard(){
    const [images, setImage] = useState([]); 
    const navi = useNavigate();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response =>{
            setImage(response.data); 
        })
        .catch(error =>console.error("Error loading the Images: ",error));
    },[]);
    return(
        <div>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {images.map(image=>(
                    <Col key={image.id}>
                        <Card style={{width:'18rem'}}>
                            <Card.Body>
                                <Card.Img variant='top' src={image.url}/>
                                <Card.Text>{image.title}</Card.Text>
                                <Button variant="primary" onClick={()=>navi('/')}>
                                    홈으로
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default Mycard;