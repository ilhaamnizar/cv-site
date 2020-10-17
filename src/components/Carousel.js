import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import telyu from '../assets/images/telyu.png';
import photo from '../assets/images/photo.png';
import iosbc from '../assets/images/iosbc.png';
import Card from '../components/Card';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'Telkom University',
                    subTitle: 'Now Majoring in Informatics batch 2017',
                    imgSrc: telyu,
                    link: '#',
                    selected: false
                },
                {
                    id:1,
                    title: 'LinkedIn',
                    subTitle: 'full explanation about my profile',
                    imgSrc: photo,
                    link: 'https://www.linkedin.com/in/ilham-n-b96574137',
                    selected: false
                },
                {
                    id:2,
                    title: 'IOSBC',
                    subTitle: 'currently I become a Captain on IOSBC for a period ahead',
                    imgSrc: iosbc,
                    link: 'https://instagram.com/iosbctelkom?igshid=xcubbj9h1bvi',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id,card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}         
                </Row>
            </Container>
        );
    }
}

export default Carousel;