function customrender(reactelement, container) {
    // Create a new DOM element based on the type property of the reactelement
    const domelement = document.createElement(reactelement.type);

    // Set innerHTML to the children property of the reactelement
    domelement.innerHTML = reactelement.children;
        domelement.setAttribute('href', reactelement.props.href);
        domelement.setAttribute('target', reactelement.props.target);
    container.appendChild(domelement);
}

// Define the reactelement object
const reactelement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

// Get the container where the element will be rendered
const maincontainer = document.getElementById("root");

// Call customrender with correct arguments
customrender(reactelement, maincontainer);
