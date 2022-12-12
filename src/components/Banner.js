import { useState, useEffect } from "react";

import { Container, Row, Col} from "react-bootstrap";

import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/coder.svg";
export const Banner = () => {

  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Software Developer", "GIS Technician", "Data Analyst" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() =>{
      tick();
    }, delta)

    return () => {clearInterval(ticker);}
  }, [text])

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText =toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);

    }else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(350);
    }
  }
  return(
    <section className="banner" id="home">
      <Container>
        <Row className="allign-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Mihajlo Micic </span>
            <h1>{" "}<span classname ="wrap">{text}</span></h1>
            <p>Hello, I am Mihajlo, 3rd year student at the University of Waterloo.
              I am a software developer with a passion for GIS and data analysis, and this is my portfolio.<br></br><br></br>
              P.S. I am currently looking for a co-op position for the Summer 2023 term.
            </p>
            {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}