// Question 1

const cat = {
        complain: function() {
            console.log("Meow!");
        }
    };

cat.complain();

// Question 2, 3 and 4

const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading"
heading.style.fontSize = "2em"
heading.innerHTML += "<h4>Subheading</h4>";

// Question 5

const paragraph = document.querySelectorAll("p");

for(var i = 0; i < paragraph.length; i++){
    console.log(paragraph[i])
    paragraph[i].style.color = "red";
}

// Question 6

resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "Yellow";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function listOfCats(list) {

    for(let i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
}

listOfCats();

// Question 8

function createCats(cats) {
    
    let html = "";
    
    for(let i = 0; i < cats.length; i++) {

       
        let age = "Age unknown";

        if (cats[i].age) {
            age = cats[i].age
        }

        html += `<div class="many cats"> 
                    <h5> ${cats[i].name}</h5>
                    <p>${age}</p>
                    </div>`;
    }
    return html;
}

const newHTML = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;