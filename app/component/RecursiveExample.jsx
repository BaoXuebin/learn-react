import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const PEEPS = [
    { id: '0', name: 'Bao', friends: ['1', '2', '3'] },
    { id: '1', name: 'Li', friends: ['0'] },
    { id: '2', name: 'Wang', friends: ['0', '3'] },
    { id: '3', name: 'Zhang', friends: ['0', '2'] }
];

const find = id => PEEPS.find(p => p.id === id);

const Person = ({ match }) => {
    const person = find(match.params.id);
    return (
        <div>
            <h3>{person.name}&apos;s friends: </h3>
            <ul>
                {
                    person.friends.map(id => (
                        <li key={id}>
                            <Link to={`${match.url}/${id}`}>
                                {find(id).name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Route path={`${match.url}/:id`} component={Person} />
        </div>
    );
};
const propTypes = { match: PropTypes.object.isRequired };
Person.propTypes = propTypes;

const RecursiveExample = () => (
    <Router>
        <Person match={{ params: { id: '0' }, url: '' }} />
    </Router>
);

export default RecursiveExample;
