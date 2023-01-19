/*const data = //DB
data.frorEach() */

async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(response);
    data.forEach(data => {
        console.log("data", data);
    });
}

fetchPosts();