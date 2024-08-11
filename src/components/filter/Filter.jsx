import React, { useState } from 'react';
import Modal from '../modal/Modal';

import './Filter.css';


const Filter = ({ people }) => {

    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [person, setPerson] = useState([]);

    const categories = ['All', 'blue', 'red', 'brown', 'yellow', 'orange'];

    // Фильтрация персонажей по выбранному цвету глаз


    const filtered = selectedCategory === 'All'
        ? people
        : people.filter(person => person.eye_color === selectedCategory);


    const genderColor = (gender) => {
        if (gender === 'male') {
            return <p className='genderColorMale'>{gender}</p>
        } else if (gender === 'female') {
            return <p className='genderColorFamale'>{gender}</p>
        } else if (gender === 'hermaphrodite') {
            return <p className='genderColorHermaph'>{gender}</p>
        }
    };

    const personMass = (mass) => {
        if (mass === 'unknown') {
            return null;
        } else if (mass !== 'unknown') {
            return (
                <>
                    <p className='personMass'>{mass}</p>
                    <p>mass</p>
                </>
            );
        }
    }

    const personHeight = (height) => {
        if (height === 'unknown') {
            return null;
        } else if (height !== 'unknown') {
            return (
                <>
                    <p className='personHeight'>{height}</p>
                    <p>height</p>
                </>
            );
        }
    }

    const personBirthYear = (birth_year) => {
        if (birth_year === 'unknown') {
            return null;
        } else if (birth_year !== 'unknown') {
            return <p className='personBirth'>{birth_year}</p>;
        }
    }
    return (
        <>
            <div className='containerSwapi'>
                <Modal
                    isOpen={modalInfoIsOpen}
                    onClose={() => setModalInfoOpen(false)}
                    infoPerson={person}
                    personHeight={personHeight}
                    personMass={personMass}
                    genderColor={genderColor}
                    personBirthYear={personBirthYear}
                >
                </Modal >


                <div className='charactersList'>
                    <h2 className="title-1">{filtered.length} Characters</h2>

                    <div className='filter_text'>
                        <label htmlFor="eye-color-select">Eye color:</label>
                        <select className='menuSelect'
                            id="eye-color-select"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            onclick={filtered}
                        >
                            {categories.map(category => (
                                <option key={category} value={category} className='selector'
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    onclick={filtered}
                                >
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="projects">


                        {filtered.map(person => (
                            <div key={person.id} className='project'
                                onClick={() => [setModalInfoOpen(true), setPerson(person)]}
                            >

                                <div className='project_text' onChange={(e) =>
                                    setPerson(e.data.person)}>
                                    <h2 className='personName'>{person.name}</h2>
                                    <div className='height_mass'>
                                        <div className='highHeight'>
                                            {personHeight(person.height)}
                                        </div>

                                        <div className='highMass'>
                                            {personMass(person.mass)}
                                        </div>
                                    </div>

                                    <div className='personColorLine'>
                                        {personBirthYear(person.birth_year)}
                                        <p> {genderColor(person.gender)}</p>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>


            </div >
        </>

    );
}

export default Filter;