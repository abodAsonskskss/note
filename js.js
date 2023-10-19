const notesContainer = document.querySelector("#notesContainer");
let button=document.querySelector(".ao")
let content=document.querySelector("textarea")
let title=document.querySelector(".no")
const  paraGraph=document.querySelector(".paraGraph")
let divMistake=document.querySelector("div #noas")
let divWah=document.querySelector(".hello")
let ouput=""
let Viee=document.querySelector(".abod")
let notesLocal=window.localStorage.getItem("notes")
let magicHaHa=document.querySelector("#hello")
let notes = JSON.parse(notesLocal) ?? []
let deatal=document.querySelector(".bea")
let canCal=document.querySelector("#cancel")

for(let i=0;i<notes.length;i++){

    displayNote(notes[i])
}


function storeNote(event){
    event.preventDefault()

    const note = {
        title: title.value,
        content:content.value
    } 
    if(content.value||title.value!==""){
        document.getElementById("hello").style.display="flex"
        magicHaHa.textContent="Note successfully added"
        }    

      
    
    notes.push(note)

    window.localStorage.setItem("notes", JSON.stringify(notes))
    
    displayNote(note);
    title.value=""
    content.value=""
 
   

}

function displayNote(note) {
    const div = document.createElement("div");

    div.innerHTML = `
        <div style="width:220px;height: 126px; background-color: #edefee;" class="divke">
        <h2 style=" padding-left: 20px; padding-top: 20px; margin-block-end: 0px; margin-block-start: 0px;margin-bottom:0.5rem ;" class="h2t">
            ${note.title}
        </h2>
        <p class="para">${note.content}</p>
        <div style="display: flex; justify-content: center;">
        <div style="padding-left: 8px;">
        
        
        <button style="width: 90px; background-color: blue;height:30px; color: white; " class="detail">View Detail</button>
                </div>
                <div style="padding-left: 8px; ">
                <button  style="background-color: red; color: white;" class="bea">Delet Note</button>
                </div>
                </div>
        </div>
    `;
    
    let abps=div.querySelector(".bea")
    abps.addEventListener("click",deleteNote)
    notesContainer.appendChild(div);
    let abodButton=div.querySelector(".detail")
    abodButton.addEventListener("click",viewDeatail)
}

const bea=document.querySelectorAll(".detail")


 button.addEventListener("click",storeNote)
 function viewDeatail(e){
     e.preventDefault()
     document.getElementById("deatal").style.display="flex"
     const noteElem = e.target.parentNode.parentNode.parentNode;
     console.log(noteElem)
     let h2=noteElem.querySelector(".h2t")
    let bsso=h2.textContent
    let pasra=noteElem.querySelector(".para")
      let bos=pasra.textContent
      paraGraph.textContent=bos
      let baos=document.querySelector(".abod")
    baos.textContent=bsso
}

for(let i=0; i<bea.length;i++){

    bea[i].addEventListener("click",viewDeatail)
}
function sayas(s){
    s.preventDefault()
    document.getElementById("deatal").style.display="none"

}
canCal.addEventListener("click",sayas)
let da=document.querySelectorAll(".bea")
let ds=document.querySelectorAll(".divke")
function deleteNote(evt){
    
    evt.preventDefault()
    const noteToBeRemoved = evt.target.parentNode.parentNode.parentNode;
    noteToBeRemoved.parentNode.removeChild(noteToBeRemoved)
    const title = noteToBeRemoved.querySelector('h2').textContent.trim()
  
    let i=0;
    for(; i<notes.length;i++) {
        console.log(notes[i], title);
        if(notes[i].title===title) {
            break;
        }
    }
    
    notes.splice(i, 1)
    
    window.localStorage.setItem("notes", JSON.stringify(notes))
}
