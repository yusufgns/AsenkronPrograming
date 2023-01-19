const todos = [
    {titel: "Todo 1", description: "puresol bug temizliği"},
    {titel: "Todo 2", description: "dökümantasyon okuma vakti"},
    {titel: "Todo 3", description: "dinlenme vakti"}
]

let todoListElement = document.getElementById("todoList")

function todoList() {
    setTimeout(() => {
        let todoItems = ""
        todos.forEach(item =>{
            todoItems += `
            <li>
                <b>${item.titel}</b>
                <p>${item.description}</p>
            </li>
            `
        })

        todoListElement.innerHTML = todoItems;
    }, 1000);
}

function newTodo(todo, callback) { //parametre olarak callback kullanıyoruz
    setTimeout(() => {
        todos.push(todo)
        callback(); //callback fonksiyonunu çağırıyoruz ve bu sayede
        //newTodo todoList'e gittiğinden dolayı 2. defa çalışması halinde
        //yeni titel da eklenmiş oluyor
    }, 1500)
}

newTodo({
    titel: "Todo 4", description: "Ailen ile vakit geçir"
}, todoList) //todoList fonksiyonuna gidiceğini söylüyoruz
//todoListi çağırmıyoruz ve bunun için () kullanılmıyor.

todoList(); //todolist() çağırılmazsa fonksiyon dögü sonrasında tüm işlemi ekrana yansıtır
