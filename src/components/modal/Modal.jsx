
import './Modal.css';
import { ReactComponent as IconClose } from "../../img/closeButton.svg";
import imageModal from '../../img/female.png';
import image from '../../img/male.png';
import image2 from '../../img/na.png';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children, infoPerson, personHeight, personMass, genderColor, personBirthYear }) => {

    useEffect(() => {
        personHeight();
    }, [personHeight]);

    useEffect(() => {
        personMass();
    }, [personMass]);

    useEffect(() => {
        genderColor();
    }, [genderColor]);

    useEffect(() => {
        personBirthYear();
    }, [personBirthYear]);

    function genderType(gender) {
        if (gender === 'female') {
            return <img src={imageModal} alt='icon female' />
        } if (gender === 'male') {
            return <img src={image} alt='icon male' />
        } else return <img src={image2} alt='icon n/a' />

    };




    const onWrapperClick = (event) => {
        if (event.target.classList.contains('modal-wrapper')) onClose()
    }
    return (
        <>
            {isOpen && (
                <div>
                    <div className="modal">
                        <div className="modal-wrapper" onClick={onWrapperClick}>
                            <div className="modal-content">

                                <div className='modal-left-contetn'>
                                    {genderType(infoPerson.gender)}

                                    <div className='colorLine'>
                                        <p className='personBirth'>{infoPerson.birth_year}</p>
                                        <p> {genderColor(infoPerson.gender)}</p>
                                    </div>


                                </div>

                                <div className="modal-contenv-text" >
                                    <div className='project_text' >
                                        <h1 className='modalName'>{infoPerson.name}</h1>
                                        <div className='modalOther'>

                                            <p>Hair color: {infoPerson.hair_color}</p>
                                            <p>Skin color: {infoPerson.skin_color}  </p>
                                            <p>Eye color: {infoPerson.eye_color}</p>
                                            <div className='height_mass'>
                                                <div className='highHeight'>
                                                    {personHeight(infoPerson.height)}
                                                </div>

                                                <div className='highMass'>
                                                    {personMass(infoPerson.mass)}
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>

                                <button className="modal-close-button"
                                    onClick={onClose}>
                                    <IconClose />
                                </button>
                                {children}
                            </div>
                        </div >
                    </div >
                </div >
            )}
        </>
    )
}


export default Modal;
