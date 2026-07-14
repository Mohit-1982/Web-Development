const mainContainer = document.getElementById('root');

function customeReact(reactElement, container) {
    // const ele = document.createElement(reactElement.type);

    // ele.textContent = reactElement.children;
    // ele.setAttribute('href', reactElement.props.href);
    // ele.setAttribute('target', reactElement.props.target);

    // container.appendChild(ele);

    const ele = document.createElement(reactElement.type);
    ele.textContent = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;

        ele.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(ele);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click this to visit google'
};

customeReact(reactElement, mainContainer);