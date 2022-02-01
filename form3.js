let students = [];

function display(superarray) {
    let tabledata = "";

    superarray.forEach(function(student, index) {
        let currentrow = `<tr> 
        <td>${index+1}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.email}</td>
        <td>${student.city}</td>
        <td>${student.cr}</td>
        <td>${student.category}</td>
        <td><button onclick='deletestudent(${index})'>delete</button>
        </td>
        </tr>`;
        tabledata += currentrow;

    });
    document.getElementsByClassName('tdata')[0].innerHTML = tabledata;
    //document.getElementById('tdata').innerHTML=tabledata;
}
display(students);

function addstudents(event) {
    event.preventDefault();
    let student = {};
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    var course = document.getElementById('degree');
    var cr = course.options[course.selectedIndex].value;
    var cat = document.getElementsByName('cat');
    for (var i = 0; i < cat.length; i++) {
        if (cat[i].checked) {
            var category = cat[i].value;
        }
    }
    console.log(cr);
    console.log(category);
    student.name = name;
    student.age = Number(age);
    student.email = email;
    student.city = city;
    student.cr = cr;
    student.category = category;
    students.push(student);
    console.log(students);
    display(students);

    // document.getElementById('name').value = "";
    // document.getElementById('age').value = "";
    // document.getElementById('email').value = "";
    // document.getElementById('city').value = "";
    // document.getElementById('city').value = "";
    // document.getElementById('city').value = "";
}

function deletestudent(index) {
    students.splice(index, 1);
    display(students);
}