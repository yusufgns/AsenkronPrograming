const todos = [
    {titel: "Todo 1", description: "puresol bug temizliği"},
    {titel: "Todo 2", description: "dökümantasyon okuma vakti"},
    {titel: "Todo 3", description: "dinlenme vakti"}
];

let todoListElement = document.getElementById("todoList")

function todoList() {
    setTimeout(() => {
        let todoItems = "";
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

function newTodo(todo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            todos.push(todo)
            const e = false;
    
            if(!e) {
                resolve();
            } else {
                reject('Hata tespit edildi!');
            }
        }, 2000);
    });
}


newTodo({
    titel: "Todo 4", 
    description: "Ailen ile vakit geçir"
}).then(Response => { //resolve() ile değer dönmediğinden dolayı isim önemsiz
    todoList();
    //yeni liste verisini console.log içerisinde yazdırmak
    //[yukarıdan resolve()'yi -> resolve(todos) yapalım]

    //console.log("Yeni Liste", response);
    //todoList();
}).catch(e => {
    console.log(e);
})

//todoList(); //çağırırsak y sürede fonksiyon gelir ve x süre içerisinde new listi eklenir.


//PROMISE ALL
const p1 = Promise.resolve("P1")
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => { //setTimeout(resolve, 2000, "Deneme")
        resolve("Deneme")
    }, 2000);
});
const p3 = 1452658
const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

Promise.all([p1,p2,p3,p4]).then(Promises => {
    console.log("promises", Promises);
});
