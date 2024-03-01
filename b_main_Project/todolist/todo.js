const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event) {
        if(event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)
const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <li>
        ${item}
        <i class="fas fa-times"></i>
        <i class="fa-solid fa-note-sticky fa-bounce fa-sm" style="color: #99ff00;"></i>
        </li>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener("click",
    function() {
        listItem.remove()
    })
    toDoBox.appendChild(listItem)
}

