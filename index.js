function addTodo() {
    var input = document.getElementById('todoInput').value.trim();
    if (input === '') return;
    var form = document.getElementById('todoForm');
    var checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('checkbox');
    checkboxDiv.innerHTML = `
        <input type="checkbox" id="${input}" name="${input}" value="${input}" />
        <label for="${input}">${input}</label>
        <button onclick="removeTodo('${input}')">Remove</button>
    `;
    form.appendChild(checkboxDiv);
    document.getElementById('todoInput').value = '';
}

function removeTodo(id) {
    var element = document.getElementById(id);
    element.closest('.checkbox').remove();
}