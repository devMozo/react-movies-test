import React from 'react';
import './HandlerLoaders.scss';

const HandlerLoaders = ({ loading, error, onTryAgain, children }) => {
    return (
        <section className="HandlerLoaders">
            {loading && <div className="HandlerLoaders__loader"></div>}
            {!loading && error && (
                <React.Fragment>
                    <p className="HandlerLoaders__error-msg"> We had some connection issues with the API :( </p>
                    <button className="HandlerLoaders__button" onClick={onTryAgain}>
                        {' '}
                        Try Again{' '}
                    </button>
                </React.Fragment>
            )}
            {!loading && !error && children}
        </section>
    );
};

export default React.memo(HandlerLoaders);
