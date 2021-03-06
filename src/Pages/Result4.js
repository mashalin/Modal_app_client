import { Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import axios from "axios";
import { saveAs } from "file-saver";
import { useMediaQuery } from "react-responsive";

const Result4 = observer(() => {
  const mobile = useMediaQuery({ query: "(max-width: 1200px)" });

  const { col4 } = useContext(Context);

  const localData = JSON.parse(localStorage.getItem("data4"));

  let data;

  useEffect(() => {
    data = {
      c1: col4.cols4.c1 || localData.c1,
      c2: col4.cols4.c2 || localData.c2,
      c3: col4.cols4.c3 || localData.c3,
      c4: col4.cols4.c4 || localData.c4,
      c5: col4.cols4.c5 || localData.c5,
      res: col4.result4 || localData.res,
      word: col4.word4 || localData.word,
    };
  }, []);

  function createPdf() {
    axios
      .post(process.env.REACT_APP_HOST + "/create-pdf4", data)
      .then(() =>
        axios.get(process.env.REACT_APP_HOST + "/table4", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `table4.pdf`);
      });
  }

  return (
    <Container>
      <div className="divCol">
        {mobile ? (
          <>
            <Row style={{ marginTop: "0.75rem" }}>
              <Col className="colR">Самопроиз­вольный выкидыш</Col>
              <Col className="colR2">{col4.cols4.c1 || localData.c1}</Col>
            </Row>
            <Row>
              <Col className="colR">Неразви­вающаяся беремен­ность</Col>
              <Col className="colR2">{col4.cols4.c2 || localData.c2}</Col>
            </Row>
            <Row>
              <Col className="colR">
                Хроническая фетоплацен­тарная недостаточ­ность
              </Col>
              <Col className="colR2">{col4.cols4.c3 || localData.c3}</Col>
            </Row>
            <Row>
              <Col className="colR">
                Изменение в плаценте воспалительного характера
              </Col>
              <Col className="colR2">{col4.cols4.c4 || localData.c4}</Col>
            </Row>
            <Row>
              <Col className="colR">Дыхательная недостаточность III ст.</Col>
              <Col className="colR2">{col4.cols4.c5 || localData.c5}</Col>
            </Row>
            <Row>
              <Col className="colR">p-вероятность</Col>
              <Col className="colR2">{col4.result4 || localData.res}</Col>
            </Row>
            <Row>
              <Col className="colR">Вероятность развития пневмонии</Col>
              <Col className="colR2">{col4.word4 || localData.word}</Col>
            </Row>
          </>
        ) : (
          <>
            <Row style={{ marginTop: "0.75rem" }}>
              <Col className="colR">Самопроиз­вольный выкидыш</Col>
              <Col className="colR">Неразви­вающаяся беремен­ность</Col>
              <Col className="colR">
                Хроническая фетоплацен­тарная недостаточ­ность
              </Col>
              <Col className="colR">
                Изменение в плаценте воспалительного характера
              </Col>
              <Col className="colR">Дыхательная недостаточность III ст.</Col>
              <Col className="colR">p-вероятность</Col>
              <Col className="colR">Вероятность развития пневмонии</Col>
            </Row>
            <Row>
              <Col className="colR2">{col4.cols4.c1 || localData.c1}</Col>
              <Col className="colR2">{col4.cols4.c2 || localData.c2}</Col>
              <Col className="colR2">{col4.cols4.c3 || localData.c3}</Col>
              <Col className="colR2">{col4.cols4.c4 || localData.c4}</Col>
              <Col className="colR2">{col4.cols4.c5 || localData.c5}</Col>
              <Col className="colR2">{col4.result4 || localData.res}</Col>
              <Col className="colR2">{col4.word4 || localData.word}</Col>
            </Row>
          </>
        )}
        <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          <Button
            onClick={createPdf}
            className="colLink"
            variant="outline-danger"
          >
            Скачать файл
          </Button>
        </div>
      </div>
    </Container>
  );
});

export default Result4;
