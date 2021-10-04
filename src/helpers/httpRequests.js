// import PropTypes from 'prop-types';

export const httpRequests = (method = 'GET', endpoint, data) => {
    const request = `http://localhost:4000/api/${endpoint}`

    switch (method) {
        case 'GET':
            return fetch(request);
        
        case 'POST':
            return fetch(request, {
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

        case 'PUT':
        return fetch(request, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        default:
            break;
    }
};

// Endpoints.propTypes = {};

// export default Endpoints;