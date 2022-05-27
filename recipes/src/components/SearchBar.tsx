import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const SearchBar: React.FC = () => {
    const [show, toggleShow] = useState(true);

    return (
        <>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </>
    );
};

export default SearchBar;