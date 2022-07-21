import React, { useState } from 'react'
import data from './data';
import Lisa from './List';
function Podsetnik() {
    const [people, setPeople] = useState(data)
    return (
        <main>
            <section className='container'>
                <h3>{people.length} birthdays today</h3>
                <Lisa people={people} />

                <button onClick={() => setPeople([])}>clear all</button>
            </section>
        </main>
    )
}

export default Podsetnik