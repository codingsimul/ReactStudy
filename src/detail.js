import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios'; 
import Card from 'react-bootstrap/Card';
import React from 'react';

function Detail(){
    const {id} = useParams(); 
    const [image, setImage]= React.useState("");

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response=>{
            setImage(response.data);
        })
        .catch(error=> console.error('Error loading the image: ',error));
    },[id]);

    return(
        <div>
            <Card style={{width:'18rem', margin:'auto'}}>
                <Card.Body>
                    <Card.Img variant="top" src={image.url}/>
                    <Card.Text>
                        {image.title}
                        <br></br>
                        {image.id}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Detail;