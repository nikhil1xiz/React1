import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
    return (
        <>
            <h1>Custom App!</h1>

        </>
    );
}

const element = React.createElement(
    'a',
    { href: "https://yandex.ru", target: '_blank' },
    'Click me'
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MyApp />
        <App/>
        {element}
    </StrictMode>,
);
