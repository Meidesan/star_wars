import React, { useState, useEffect, useRef } from 'react';
import Filter from '../filter/Filter';

import '../../styles/main.css';
import './swapi.css';


export default function SWAPI() {

    const [people, setPeople] = useState([]);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loader = useRef(null);

    useEffect(() => {
        fetchPeople(page);
    }, [page]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) observer.observe(loader.current);

        return () => {
            if (loader.current) observer.unobserve(loader.current);
        };
    }, [loader, loading]);

    const fetchPeople = async (page) => {

        let url = `https://swapi.dev/api/people/?page=${page}`;

        try {
            if (people.length === 82) {
                setLoading(false);
            } else {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();
                setPeople([...people, ...data.results]);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Infinite scroll
    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
            setPage((prev) => prev + 1);
        }
    };

    return (
        <>
            <div className='containerSwapi'>
                <Filter
                    people={people}
                />

                <div className='highLoader'>
                    <div ref={loader} className='loader'>
                        {loading && <span>Loading...</span>}
                    </div>
                </div>
            </div>

        </>
    )
}
