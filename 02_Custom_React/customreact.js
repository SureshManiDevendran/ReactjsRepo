function customRender(reactElement,mainContainer){
    // Create Dom Element
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    domElement.innerHTML=reactElement.children
    mainContainer.appendChild(domElement)*/

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children
     for (const prop in reactElement.props) {
        if (prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
     }
     mainContainer.appendChild(domElement)
}


// React Will create element behind the scene ,just for hypothetical :-understanding purpose 
const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.querySelector('#root');

// Method which will add reactElement in root ,i.e maincontainer
// first parameter will be what need to be injected 
// Second parameter will be where need to be injected
customRender(reactElement,mainContainer); 

