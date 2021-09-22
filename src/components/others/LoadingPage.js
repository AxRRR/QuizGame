import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const portalElement = document.getElementById('loadingscreen');

export const LoadingPage = (loading) => {

    console.log(loading)

    return (
        <Fragment>
            <div>
            {ReactDOM.createPortal(<LoadingPortal loading={loading} />, portalElement)}
            
            
            </div>
        </Fragment>
    );
};

const LoadingPortal = (loading) => {
    return (
        <div>
            {loading && <div className="blackscreen">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>}
        </div>
    )
}