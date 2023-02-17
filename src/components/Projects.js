import { Col, Container,Tab, Row, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {
 const projects = [
    {
        title:"Business Starttup",
        description:"Design & Development",
        imgUrl:projImg1,
    },
    {
        title:"Business Starttup",
        description:"Design & Development",
        imgUrl:projImg2,
    },
    {
        title:"Business Starttup",
        description:"Design & Development",
        imgUrl:projImg3,
    },
    {
        title:"Business Starttup",
        description:"Design & Development",
        imgUrl:projImg1,
    },
    {
        title:"Business Starttup",
        description:"Design & Development",
        imgUrl:projImg2,
    },
    {
        title:"Business Starttup",
        description:"Design & Development",
        imgUrl:projImg3,
    },
 ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the project and typesetting industry. lorem ipsum is awesome</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link> 
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Container>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {projects.map((project,index) => {
                                    return( 
                                    <ProjectCard 
                                    key={index}
                                    {...project}/>
                                    )
                                })
                                }
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>

                    </Tab.Container>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="sharp"></img>
        </section>
    )

}