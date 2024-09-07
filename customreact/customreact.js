const mainContainer = document.querySelector('#root')

const reactElement = {
    type: 'a',
    props: {
        href:"https://yandex.ru",
        target:'_blank'
    },
    children: 'Click me to open a secret search engine'
}

function customRender(reactElement, mainContainer) {
//     const domElement = document.createElement(reactElement.type)
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)
//     domElement.innerHTML = reactElement.children
//     mainContainer.appendChild(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children')continue;
        domElement.setAttribute(prop, reactElement.props);
    }
    mainContainer.appendChild(domElement);
}

customRender(reactElement, mainContainer)