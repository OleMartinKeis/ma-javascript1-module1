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
heading.innerHTML += "<h4>subheading</h4>";

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

