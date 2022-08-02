document.addEventListener("DOMContentLoaded", function (event) {
  generateList();
});

function generateList() {
  const memberList = document.getElementById("membersList");

  while (memberList.firstChild) {
    memberList.removeChild(memberList.firstChild);
  }

  fetch("https://localhost:7073/People")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (const person of data) {
        const memberItem = document.createElement("li");
        var button = document.createElement("button");
        button.innerText = "X";
        button.className = "deleteBtn";

        memberItem.innerText = person.name + " " + person.age;
        memberItem.dataset.id = person.id;
        button.addEventListener("click", () => {
          deleteMember(memberItem.dataset.id);
        });
        //button.onclick = deleteMember(memberItem.dataset.id);
        memberItem.appendChild(button);
        memberList.appendChild(memberItem);
      }
    });
}

function addMember() {
  const name = document.getElementById("name");
  const age = document.getElementById("age");

  if (age.value == "") {
    alert("Please ensure to fill in the age for new members.");
    age.className = "error";
  } else {
    age.className = "";

    if (/e/.test(name.value) || /E/.test(name.value)) {
      data = {
        id: 0,
        name: name.value,
        age: age.value,
      };

      fetch("https://localhost:7073/People", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => {
        name.className = "";
        name.value = "";
        age.value = "";
        generateList();
      });
    } else {
      name.className = "error";
      alert("Name must contain the letter E for this exclusive club.");
    }
  }
}

function deleteMember(id) {
  let idDelete = parseInt(id);
  fetch("https://localhost:7073/People?id=" + idDelete, {
    method: "DELETE",
    headers: { accept: "*/*" },
  }).then(() => {
    generateList();
  });
}
