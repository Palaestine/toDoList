const   inputBox = document.getElementById("input-box") ,
        listContainer = document.getElementById("list-container") ,
        add = document.getElementById("add") ;

/********************************************************************************************** */
        add.addEventListener("click" , ()=>{

            if( inputBox.value === "")
            {
                alert("You Must Right SomeThing!");
            }
            else
            {
                let li = document.createElement("li");
                li.innerHTML = inputBox.value;
                listContainer.appendChild(li);

                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }

            inputBox.value = "";
            saveData();
        });

/************************************************************************************************ */

        listContainer.addEventListener("click" , (e)=>{

            if(e.target.tagName === "LI")
            {
                e.target.classList.toggle("checked");
                saveData();
            }
            else if(e.target.tagName === "SPAN")
            {
                e.target.parentElement.remove();
                saveData();
            }


        } , false);

/***************************************************************************************************** */

function saveData(){

    localStorage.setItem("data" , listContainer.innerHTML);
};

function showData(){

    listContainer.innerHTML = localStorage.getItem("data");
};
showData();