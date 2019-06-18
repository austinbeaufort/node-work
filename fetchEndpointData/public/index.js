import s from './library/dom';


// s.append('h2', 'hi', 'body')

fetch('http://localhost:5000/api/people')
    .then(res => res.json())
    .then(people => {
        people.forEach(person => {
            s.append('h2', person.name, 'body', 'name');
            document.querySelector('.name').classList.add('name')
        })
    })
