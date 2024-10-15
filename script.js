let fields = [
    null, null, null,
    null, null, null,
    null, null, null
];

let currentPlayer = 'X'; // Start with X

function init() {
    render();
}

function render() {
    const content = document.getElementById('content');

    // Create the grid dynamically
    let grid = '<div class="tic-tac-toe">';

    for (let i = 0; i < fields.length; i++) {
        // Create a row break after every third element
        if (i % 3 === 0 && i !== 0) {
            grid += '</div><div class="row">';
        } else if (i === 0) {
            grid += '<div class="row">';
        }

        grid += `
            <div class="cell" onclick="handleClick(${i})">
                ${fields[i] ? fields[i] : ''}
            </div>
        `;
    }

    grid += '</div></div>'; // Close the row and container

    content.innerHTML = grid;
}

function handleClick(index) {
    // Check if the field is empty before placing a move
    if (!fields[index]) {
        fields[index] = currentPlayer; // Set the current player's symbol (X or O)
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
        render(); // Re-render the grid
    }
}
