document.addEventListener('mousemove', function(event) {
    const cursor = document.querySelector('.cursor');

    // Get the width and height of the circle
    const radius = cursor.offsetWidth / 2;

    // Set the position of the cursor based on the mouse's position
    cursor.style.left = `${event.clientX - radius}px`;
    cursor.style.top = `${event.clientY - radius}px`;
});

/*
function updateText(text){

let delay = 200;
  let h1 = document.getElementById("animated");

      h1.innerHTML = h1.innerHTML
        .split("")
        .map(letter => {
          console.log(letter);
          return `<span>` + letter + `</span>`;
        })
        .join("");

      Array.from(h1.children).forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("wavy");
        }, index * 60 + delay);
      });

}

updateText(document.getElementById("animated"));*/