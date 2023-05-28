let style = document.createElement("style");
style.innerHTML = `

div#container {
    display: grid;
    text-align: center;
    gap: 0.5rem;
    width:50%;
    margin-left:auto;
    margin-right:auto;
    margin-top:2em;
    box-shadow: 13px 12px 3px 2px green;
    padding: 22px;
    border:1px solid green;
}

h4 {
    text-align: center;
    font-size: 4rem;
    font-family: monospace;
}


h7 {
    font-size: 2rem;
    display: grid;
    justify-content: center;
    font-family: monospace;
    margin-top: -5rem;
}


form#form {
    display: grid;
    text-align: center;
    gap: 0.51rem;
}

div#formC {
    display: flex;
    justify-content: center;
    gap:18px;
}

input#userInput {
    width: 4%;
}

button {
    width: 22%;
}

button {
    width: 22%;
    font-family: monospace;
    padding: 7px;
    border-radius: 30px;
    border: none;
    box-shadow: 2px 2px 3px 1px;
    background: transparent;
}

p#passWord {
    border: none;
    background: #00000012;
    color: black;
    font-size: 22px;
    padding: 15px;
    border-radius: 3px;
}

`
document.head.append(style)


let h4 = document.createElement("h4");
h4.innerHTML = "Random Password Generator"
document.body.append(h4)

let h7 = document.createElement("h7");
h7.innerHTML = "(Only Javascript)"
document.body.append(h7)

let container = document.createElement("div");
container.setAttribute("id","container")
document.body.append(container)


let p = document.createElement("p");
p.setAttribute("id","passWord");
container.appendChild(p)



let form = document.createElement("form");
form.setAttribute("method","post")
form.setAttribute("id","form")
container.appendChild(form)

let formC = document.createElement("div");
formC.setAttribute("id","formC")
form.appendChild(formC)


let label = document.createElement("label");
label.setAttribute("id","label");
label.innerHTML ="Enter Pass Length";
formC.appendChild(label);

let input = document.createElement("input");
input.setAttribute("id","userInput");
formC.appendChild(input)

let btnC = document.createElement("div");
btnC.setAttribute("id","formC")
form.appendChild(btnC)


let wkBtn = document.createElement("button");
wkBtn.innerHTML = "Generate Weak Passord";
btnC.appendChild(wkBtn)

let strBtn = document.createElement("button");
strBtn.innerHTML = "Generate Strong Password"
btnC.appendChild(strBtn)



class Password{
    constructor(){
        console.log("My Construtor is running")
        
    }

    passKeyHolder = (size)=>{
     let pass =""
      if(size <= 10){
    pass =  WeakPassword(size);
      
      }else{
    pass = StrongPassword(size)
        
      } 
      return pass;         
    }

}


let WeakPassword = (size) =>{
    let char = MultipleChar();
    let num = MultiNumber();
    let c =char.toLocaleString().replace(/\,/g,"") +  num.toLocaleString().replace(/\,/g,""); 
    return c.slice(0,size)
}

let StrongPassword = (size) =>{
    let char = MultipleChar();
    let symb = MultiSymbol();
    let num = MultiNumber();
    let c =char.toLocaleString().replace(/\,/g,"") + symb.toLocaleString().replace(/\,/g,"") + num.toLocaleString().replace(/\,/g,""); 
    return c.slice(0,size)
}

let MultipleChar = () =>{
    let char = 'abcdefghijklmnopqrstuvwxyz';
    let character = "" 
    let arr  = []
    for(let a in char){
     character = char[Math.floor(Math.random() *  char.length) ]
     arr.push(character)
    }
    return arr.splice(0,5);
}

let MultiSymbol = ()=>{
    let symbl = '~!@#$%^&*()_+=|,.'
    let symbol =""
    let arr  = [] 
    for(let a in symbl){
        symbol = symbl[Math.floor(Math.random() * symbl.length)]
        arr.push(symbol)
    }
    return arr.splice(0,9);
}


let MultiNumber = () =>{
    let number = '1234567890'
    let num ="" 
    let arr  = [] 
    for(let a in number){
        num = number[Math.floor(Math.random() * number.length)]
        arr.push(num)
    }
    return arr.splice(0,11);
}


wkBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let value = Number.parseInt(input.value);  
    if(value > 4 && value <= 10){
        let a = new Password()
        let passMatch = a.passKeyHolder(value)
        p.innerHTML = passMatch;
        p.style.color="black";       
    }else if(value <= 4){
        p.style.color = "red";
        p.innerHTML = "Password Length must be greater then 4";
    }    
    else{
        p.style.color = "red";
        p.innerHTML = "Entered Length must be less then 10";
    }
    input.value =""
})



strBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let value = Number.parseInt(input.value);
    if(value > 10 && value <= 25){
        let a = new Password()
        let passMatch = a.passKeyHolder(value)
        p.innerHTML = passMatch;
        p.style.color="black";  
    }else if(value > 25){
        p.style.color = "red";
        p.innerHTML = "Entered Length must be less then 25";       
    }
    else if(value < 10){
        p.style.color = "red";
        p.innerHTML = "Entered Length must be Greater then 10";
    }
    input.value =""
})