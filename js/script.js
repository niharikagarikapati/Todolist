const todoText = document.getElementById("todo-text");
const todoul = document.getElementById("todo-ul");
function addTask(){
        if(todoText.value.trim()===''){        
                alert('Add some text');
        }
        else{
                console.log(todoText.value.trim());
        const liTag = document.createElement('li');
        const spanText= document.createElement('span');
        const Textnode = document.createTextNode(todoText. value.trim());
        spanText.appendChild(Textnode);
        spanText.addEventListener('click',(e)=>{
                console.log(e.target);
                e.target.classList.toggle("done");
        });
        const spanclose= document.createElement('span');
        spanclose.innerHTML = '&times';
        spanclose.addEventListener('click',(e)=>{
                console.log(e.target.parentElement);
                const li = e.target.parentElement;
                li.parentElement.removeChild(li);

        });
        liTag.appendChild(spanText);
        liTag.appendChild(spanclose);
        todoul.appendChild(liTag);

        }



}