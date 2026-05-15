

const stepData = [
    {description: "Fold and unfold your paper in half horizontally and vertically", img: "assets/step-1.png"},
    {description: "Fold your paper diagonally , unfold it and fold it again in the oposite direction", img: "assets/step-2.png"},
    {description: "Connect the corners to the inside", img: "assets/step-3.png"},
    {description: "Fold and unfold the sides to the center", img: "assets/step-4.png"},
    {description: "Bring the sides to the top", img: "assets/step-5.png"},
    {description: "Repeat steps 4 and 5 on the other side", img: "assets/step-6.png"},
    {description: "Fold the bottom corners to the top", img: "assets/step-7.png"},
    {description: "Fold the sides into the middle", img: "assets/step-8.png"},
    {description: "Connect the oposit cornes horizontally", img: "assets/step-9.png"},
    {description: "Fold one bottom corner up", img: "assets/step-10.png"},
    {description: "Fold the outher corners of that", img: "assets/step-11.png"},
    {description: "Repeat steps from 8 to 11 on the other side", img: "assets/step-12.png"},
    {description: "Move the tips just a little to the outside", img: "assets/step-13.png"},
    {description: "Fold the front tip a bit to make a head", img: "assets/step-14.png"},
    {description: "fold the wings outwards", img: "assets/step-15.png"},
    {description: "You've made it!", img: "assets/step-16.png"}
]

const container = document.getElementById('steps')

stepData.forEach(data => {
    const card = document.createElement('div')
    card.className = 'step'

    const img = document.createElement('img')
    img.src = data.img 
    img.alt = data.title 

    const content = document.createElement('div')
    content.className = 'step-content'

    const desc = document.createElement('p')
    desc.textContent = data.description

    content.appendChild(desc);
    card.appendChild(img);
    card.appendChild(content);
    container.appendChild(card);
})