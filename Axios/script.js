// console.log(axios);

const getData = async () => {
  try {
    const reponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        headers: {
            "Content-Type" : "aplication/json",
            custom: "header"
        },
      }
    );
    console.log(reponse);

    return reponse.data;
  } catch (e) {
    console.log(e);
  }
};

const container = document.querySelector("#user-container");
const printData = async () => {
  const data = await getData();

  console.log(data);
  data.forEach((user) => {
    const div = document.createElement("div");
    const nameElement = document.createElement("h2");
    nameElement.textContent = user.name;
    div.appendChild(nameElement);
    const emailElement = document.createElement("p");
    emailElement.textContent = user.email;
    div.appendChild(emailElement);

    container.appendChild(div);
  });
};
printData();
