function fetchApi() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(resp => resp.json())
    .then(data => {
        const list = document.getElementById("fill_list");

        data.map((item) => {
            const li = document.createElement("li");

            li.setAttribute('id',item.id)
            li.innerHTML = `<strong>${item.title.toUpperCase()}</strong>`;
            list.appendChild(li)
        });
    })
}
