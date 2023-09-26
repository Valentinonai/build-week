import { Button } from "react-bootstrap";
import { BsPencil, BsThreeDots } from "react-icons/bs";
import user from "./img/user.png";
import logoCompany from "./img/logoComp.png";
import UserCards from "./UserCards";
import linkedinLogo from "./img/linkedin-logo.png";
import imgVideo1 from "./img/vid1.png";
import imgVideo2 from "./img/vid2.png";
import imgVideo3 from "./img/vid3.png";
import imgPromosso1 from "./img/promosso1.png";
import imgPromosso2 from "./img/promosso2.png";
import imgPromosso3 from "./img/promosso3.png";
import { Link } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <>
      <div className='card-setting p-3 rounded-2'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex flex-column align-items-start'>
            <span>Lingua del profilo</span>
            <p>italiano</p>
          </div>
          <BsPencil />
        </div>

        <hr className='p-0' />

        <div className='d-flex justify-content-between '>
          <div className='d-flex flex-column align-items-start'>
            <span>Public profile & URL</span>
            <p>www.linkedin.com</p>
          </div>
          <BsPencil />
        </div>
      </div>

      <div className='card p-3'>
        <div className='d-flex align-items-center justify-content-end'>
          <span className='me-2'>annuncio</span>
          <BsThreeDots />
        </div>
        <div>
          <span>scopri le ultime offerte di lavoro e notizie</span>
          <div className='d-flex promo-header justify-content-center gap-3 my-2'>
            <img src={user} alt='user img' className='img-fluid object-fit-cover' />
            <img src={logoCompany} alt='company img' className='img-fluid object-fit-cover' />
          </div>
          <p className='mb-2'>Vasil, scopri le opportunità offerte da Wyser</p>
          <Button variant='outline-primary' className='rounded-4 py-1'>
            Segui
          </Button>
        </div>
      </div>

      <div className='card-users p-3 text-start'>
        <p className='mb-2'>Persone che potresti conoscere</p>

        <UserCards />
        <div className='d-flex justify-content-center '>
          <Link to={"/"} className='text-secondary'>
            Mostra tutto
          </Link>
        </div>
      </div>

      <div className='card p-3 text-start'>
        <div className='d-flex align-items-center'>
          <img src={linkedinLogo} alt='linkedin-logo' width={20} />
          <span className='text-secondary ms-1'>LEARNING</span>
        </div>
        <p> Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore.</p>
        <div className='d-flex mt-2 mb-1 video-card'>
          <img src={imgVideo1} className='img-fluid me-1' alt='video' width={100} height={70} />
          <div className='p-1'>Outlook: gestione efficiente della posta</div>
        </div>{" "}
        <div className='d-flex mt-2 video-card'>
          <img src={imgVideo2} className='img-fluid me-1' alt='video' width={100} height={70} />
          <div className='p-1'>Imparare python</div>
        </div>{" "}
        <div className='d-flex mt-2 video-card'>
          <img src={imgVideo3} className='img-fluid me-1' alt='video' width={100} height={70} />
          <div className='p-1'>Formazione esenziale su javascript</div>
        </div>
        <div className='d-flex justify-content-center pt-2'>
          <Link to={"/"} className='text-secondary'>
            Mostra tutto
          </Link>
        </div>
      </div>
      <div className='card  mt-3 p-3 text-start'>
        <div className='d-flex justify-content-between align-items-center'>
          <p>Promosso</p>
          <BsThreeDots />
        </div>
        <div className='d-flex mt-2'>
          <img src={imgPromosso1} className='img-fluid me-1' alt='video' width={70} height={70} />
          <div className='p-1'>
            <Link to={"/"} className='d-block text-black'>
              L'Ai per il business
            </Link>
            <span>sfrutta il potenziale della Generative AI per la tua azienda.</span>
          </div>
        </div>
        <div className='d-flex mt-2'>
          <img src={imgPromosso2} className='img-fluid me-1' alt='video' width={70} height={70} />
          <div className='p-1'>
            <Link to={"/"} className='d-block text-black'>
              Start automating today
            </Link>
            <span>Zapier connects the apps you use every day. Try it free.</span>
          </div>
        </div>
        <div className='d-flex mt-2'>
          <img src={imgPromosso3} className='img-fluid me-1' alt='video' width={70} height={70} />
          <div className='p-1'>
            <Link to={"/"} className='d-block text-black'>
              X500 - Testing Powerhouse
            </Link>
            <span>Time-correlated captures of Bluetooth (BR/EDR/LE) WiFi (5/6/6E) in one box!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
