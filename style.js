
function clear() {
    document.getElementById("namei").value = "";
    document.getElementById("phonei").value = "";
    document.getElementById("elenwani").value = "";
    document.getElementById("heighti").value = "";
    document.getElementById("widthi").value = "";
}

let content = [
    {
        "id": 0,
        "name": "محمد شعبان السعييد خضر  ",
        "phone": "01014115733",
        "elenwan": "افلاقه البلد",
        "hight": "180",
        "width": "85"
    },
    {
        "id": 0,
        "name": "محمد شعبان السعييد خضر  ",
        "phone": "01014115733",
        "elenwan": "افلاقه البلد",
        "hight": "180",
        "width": "85"
    }, {
        "id": 0,
        "name": "محمد شعبان السعييد خضر  ",
        "phone": "01014115733",
        "elenwan": "افلاقه البلد",
        "hight": "180",
        "width": "85"
    },
]
let ard = JSON.parse(localStorage.getItem("content"))
content = ard ?? []

function addd() {
    document.getElementById("content").innerHTML = ""
    let index = 1
    for (task of content) {
        let contents =
            `   <tr >
                    <td>${task.width}</td>
                    <td>${task.hight}</td>
                    <td>${task.elenwan}</td>
                    <td>${task.phone}</td>
                    <td>${task.name}</td>
                    <td>${index}</td>
                </tr>
            `

        document.getElementById('content').innerHTML += contents
        index++
    }
}
// save()
addd()
document.getElementById("addButton").addEventListener("click", function () {

    // let ide = index
    let namei = document.getElementById("namei").value
    let phonei = document.getElementById("phonei").value
    let elenwani = document.getElementById("elenwani").value
    let heighti = document.getElementById("heighti").value
    let widthi = document.getElementById("widthi").value
    let taskobj = {
        // "id": ide,
        "name": namei,
        "phone": phonei,
        "elenwan": elenwani,
        "hight": heighti,
        "width": widthi
    }

    content.push(taskobj)


    save()
    addd()
    clear()

})
document.getElementById("dlete").addEventListener("click", function () {
    let id = document.getElementById("idi").value - 1

    if (id !== -1) {
        content.splice(id, 1)
        save()
        addd()
    }
})
document.getElementById("edit").addEventListener("click", function () {
    let id = document.getElementById("idi").value - 1
    let task = content[id]
    document.getElementById("namei").value = task.name
    document.getElementById("phonei").value = task.phone
    document.getElementById("elenwani").value = task.elenwan
    document.getElementById("heighti").value = task.hight
    document.getElementById("widthi").value = task.width
    content.splice(id, 1)
    save()
    addd()
})
function save() {
    let tasksstring = JSON.stringify(content)
    localStorage.setItem("content", tasksstring)
}


function searchProduct(searchTerm) {
    console.log(searchTerm);
    var newProductsList = [];

    for (var i = 0; i < content.length; i++) {
        if (content[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
            newProductsList.push(content[i]);
            console.log("founded", content[i]);
        }
    }

    content = newProductsList; // تحديث content
    addd();
}
    
// مثال على كيفية استدعاء searchProduct
document.getElementById("ser").addEventListener("click", function () {
    let searchTerm = document.getElementById("serbtn").value; // افترض أن لديك حقل إدخال باسم searchInput
    searchProduct(searchTerm);
    addd();
});
