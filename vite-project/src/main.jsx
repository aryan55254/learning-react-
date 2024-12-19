import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*const reactelement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: '_blank'
  },
  children: 'Click me to visit Google'
};*/
/*const Anotherelement = 
(<a href="https://google.com" target='_blank'>visit google.com</a>);
function Myapp(){
  return (
    <div>
      <h1>
        custom react app
        </h1>
        </div>
  );
};*/
const Atreactelement = React.createElement(
  'a',{
    href:'https://google.com',target:"_blank"},
    'click to visit google'
  
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
);
