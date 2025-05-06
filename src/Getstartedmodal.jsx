import React from "react"
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    const [ videolink , setVideolink ] = React.useState("https://www.youtube.com/embed/U0PNg8pBqsc")
    const englishlink = "https://www.youtube.com/embed/U0PNg8pBqsc"
    const yorubalink = "https://www.youtube.com/embed/4sZXWZxrd2Q"
    const hausalink = "https://www.youtube.com/embed/2UPy2Wsatq8"
    const igbolink = "https://www.youtube.com/embed/E1bwYXOGt1M"
    const pidginlink = "https://www.youtube.com/embed/X8cElIfNGtQ"
return(
     <Modal
      {...props}
      size="l"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     <div className="modal-body-div">
        <Modal.Header closeButton>
            <h3> Get started with Kadick Moni</h3>
        </Modal.Header>
        <Modal.Body >
            <div className="video-div">
                <iframe width="100%" height="300" frameBorder="0" src={videolink} loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen title="KADICK SKITS"></iframe>
            </div>
            <div className="language-div">
                <p>Select language:</p>
                <div className="language-buttons">
                    <button onClick={() => setVideolink( englishlink )} style={{ backgroundColor: videolink === englishlink ? "#EC3338" : "#EC33380D" }}>English</button>
                    <button onClick={() => setVideolink( yorubalink )} style={{ backgroundColor: videolink === yorubalink ? "#EC3338" : "#EC33380D" }}>Yoruba</button>
                    <button  onClick={() => setVideolink(hausalink)} style={{ backgroundColor: videolink === hausalink ? "#EC3338" : "#EC33380D" }}>Hausa</button>
                    <button onClick={() => setVideolink(igbolink)} style={{ backgroundColor: videolink === igbolink ? "#EC3338" : "#EC33380D" }}>Igbo</button>
                    <button onClick={() => setVideolink(pidginlink)} style={{ backgroundColor: videolink === pidginlink ? "#EC3338" : "#EC33380D" }}>Pidgin</button>
            </div> 
        </div>
      </Modal.Body>
     </div>
    </Modal>
  );
}

function Getstartedmodal() {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


export default Getstartedmodal


