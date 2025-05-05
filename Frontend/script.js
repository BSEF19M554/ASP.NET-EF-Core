async function getAll() {
  let myObject = await fetch("https://localhost:7186/api/Employees");
  console.log(myObject);
  let myData = await myObject.json();
  console.log(myData);

  data = "<tr> <th>Id</th> <th>Name</th> <th>Email</th> <th>Phone</th> <th>Salary</th> </tr>";
  for (let i = 0; i < myData.length; i++) {
    data = data + "<tr>";
    data = data + "<td>" + myData[i].id + "</td>";
    data = data + "<td>" + myData[i].name + "</td>";
    data = data + "<td>" + myData[i].email + "</td>";
    data = data + "<td>" + myData[i].phone + "</td>";
    data = data + "<td>" + myData[i].salary + "</td>";
    data = data + "</tr>";
  }

  document.getElementById("showAllEmp").innerHTML = data;
  /*.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    console.log('User Data:', userData[0].name);
  })
  .catch(error => {
    console.error('Error:', error);
  });*/
}

async function getEmp() {
  let myId = document.getElementById("EmpID").value;
  let link = "https://localhost:7186/api/Employees/" + myId;

  let myObject = await fetch(link, {
    method: "GET",
  });

  console.log(myObject);
  let myData = await myObject.json();
  console.log(myData);

  data = "<tr> <th>Id</th> <th>Name</th> <th>Email</th> <th>Phone</th> <th>Salary</th> </tr>";
    data = data + "<tr>";
    data = data + "<td>" + myData.id + "</td>";
    data = data + "<td>" + myData.name + "</td>";
    data = data + "<td>" + myData.email + "</td>";
    data = data + "<td>" + myData.phone + "</td>";
    data = data + "<td>" + myData.salary + "</td>";
    data = data + "</tr>";

  document.getElementById("showOneEmp").innerHTML = data;
}

async function addMyEmp() {
  let myName = document.getElementById("addEmpName").value;
  let myEmail = document.getElementById("addEmpEmail").value;
  let myPhone = document.getElementById("addEmpPhone").value;
  let mySalary = document.getElementById("addEmpSalary").value;

  let myObject = await fetch("https://localhost:7186/api/Employees", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: myName, email: myEmail, phone: myPhone, salary: Number(mySalary)})
  });

  console.log(myObject);
  let myData = await myObject.json();
  console.log(myData);
}

async function editMyEmp() {
  let myId = document.getElementById("editEmpId").value;
  let myName = document.getElementById("editEmpName").value;
  let myEmail = document.getElementById("editEmpEmail").value;
  let myPhone = document.getElementById("editEmpPhone").value;
  let mySalary = document.getElementById("editEmpSalary").value;

  let link = "https://localhost:7186/api/Employees/" + myId;

  let myObject = await fetch(link, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: myName, email: myEmail, phone: myPhone, salary: Number(mySalary)})
  });

  console.log(myObject);
  let myData = await myObject.json();
  console.log(myData);
}

async function deleteMyEmp() {
  let myId = document.getElementById("deleteEmpId").value;
  let link = "https://localhost:7186/api/Employees/" + myId;

  let myObject = await fetch(link, {
    method: "DELETE",
  });

  console.log(myObject);
  let myData = await myObject.json();
  console.log(myData);
}