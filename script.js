var add_modal = document.getElementById('add_Modal');
var add_btn = document.getElementById('add_btn');
var add_close = document.getElementsByClassName('add_close')[0];
var add_saveBtn = document.getElementById('add_saveBtn');
var add_todoInput_title = document.getElementById('add_todoInput_title');
var add_todoInput_content = document.getElementById('add_todoInput_content');
var todo_list = document.querySelector('.todo_list');
var todoArray = [];

var list_Modal = document.getElementById('list_Modal');
var list_title = document.querySelector('.list_title');
var list_content = document.querySelector('.list_content');
var list_close = document.getElementsByClassName('list_close')[0];
var list_deleteBtn = document.getElementById('list_deleteBtn');

add_btn.addEventListener('click', function () {
  add_modal.style.display = 'block';
});

add_close.addEventListener('click', function () {
  add_modal.style.display = 'none';
});

add_saveBtn.addEventListener('click', function () {
  var todoTitle = add_todoInput_title.value;
  var todoContent = add_todoInput_content.value;
  if (todoTitle.trim() != '' && todoContent.trim() != '') {
    addTodoList(todoTitle, todoContent);
    add_todoInput_title.value = '';
    add_todoInput_content.value = '';
    add_modal.style.display = 'none';
  }
});

function addTodoList(todoTitle, todoContent) {
  var li = document.createElement('li');
  li.innerHTML = todoTitle;

  li.addEventListener('click', function () {
    list_Modal.style.display = 'block';
    list_title.innerHTML = todoTitle;
    list_content.innerHTML = todoContent;
  });

  todoArray.push({ li: li, title: todoTitle, content: todoContent });
  renderTodoList();
}

function renderTodoList() {
  todo_list.innerHTML = '';
  for (var i = 0; i < todoArray.length; i++) {
    todo_list.appendChild(todoArray[i].li);
  }
}

list_close.addEventListener('click', function () {
  list_Modal.style.display = 'none';
});

list_deleteBtn.addEventListener('click', function () {
  todoArray = todoArray.filter((todo) => todo.title !== list_title.innerHTML);
  list_Modal.style.display = 'none';
  renderTodoList();
});