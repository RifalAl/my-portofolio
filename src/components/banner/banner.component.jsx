import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./banner.styles.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";

const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toDisplay = ["Frontend Developer", "Web Designer", "Project Manager"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNumber % toDisplay.length;
    let fullText = toDisplay[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(200)
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligns-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome To My Portofolio</span>
            <h1>
              {`Hi I'am Rifal`}{" "}
              <span className="wrap">
                <br />{text}
              </span>
            </h1>
            <p>
              Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia
              in, elementum id enim. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus. Curabitur non nulla sit amet
              nisl tempus convallis quis ac lectus.
            </p>
            <button onClick={() => console.log("Lets Connect")}>
              Lets Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
