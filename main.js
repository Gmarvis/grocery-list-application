let form = document.querySelector('#myList')
let itermComtainer = document.getElementById('iterm-comtainer')



form.addEventListener('submit', (e)=>{
    e.preventDefault()

    // prevent empty list submition
    let listIterm = document.getElementById('listIterm').value

    if (listIterm ===""){
    return alert("Plaese enter iterm name...")
    }


    // create a an html element li for new list iterms

    let newIterms = document.createElement('li')
    newIterms.innerText=listIterm
    itermComtainer.appendChild(newIterms)
    // create a span to carry our buttons

    let actionBnt = document.createElement('span')
    newIterms.appendChild(actionBnt)

// edit button
        let editBtn = document.createElement('button')
        editBtn.innerHTML=`<i class="fa-sharp fa-solid fa-pen-to-square"></i>`
        actionBnt.appendChild(editBtn)

    // iterms delete btn
    let dlBtn = document.createElement('button')
    dlBtn.innerHTML=`<i class="fa-solid fa-trash"></i>`
    actionBnt.appendChild(dlBtn)

    // adding function to the delete button 
    dlBtn.addEventListener('click', ()=>{
        newIterms.remove()
    })

    // add the edit iterms function

    editBtn.addEventListener('click',()=>{
        newIterms.prefix(2)
    })



    // console.log(newIterms).value
    console.log(listIterm)

})
