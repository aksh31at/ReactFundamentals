const element= React.createElement("h1",{id:"first", style:{backgroundColor:"pink"}},"Hello Akshat");
const element2= React.createElement("h2",{id:"second"},"Maza aaya")
const multielement= React.createElement('div', {}, {element, element2});
const Reactroot= ReactDOM.createRoot(document.getElementById('root'));


Reactroot.render(multielement);
// Reactroot.render(element2);