import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from "react";
import axios from "axios";
import {Col,Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom"; 
import detail from "./detail";

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

    const handleDelete =(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response)=>{
            setImage(images.filter(image=>image.id!==id));
        })
        .catch(error=> console.error('Error deleting the image:', error));
    }

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
                                <Button variant="info" onClick={()=>navi(`/image/${image.id}`)}>
                                    상세페이지로
                                </Button>
                                <Button variant="danger" onClick={()=>{handleDelete(image.id)}}>
                                    삭제
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