// 2.1. Отображание текста о загрузке данных

const localData = localStorage.getItem('users');

if (localData === null) {
  setTimeout(() => {
    fetch('users.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Error loading data");
        }
        return response.json();
      })
      .then(usersData => {
        localStorage.setItem('users', JSON.stringify(usersData));

        const loadingBlock = document.getElementById("loading");
        loadingBlock.remove();

        renderUsersCards(usersData)
      })
      .catch(error => {
        const loadingBlock = document.getElementById("loading")
        loadingBlock.textContent = "Ошибка при загрузке данных"
      });
  }, 2000);
} else {
  const loadingBlock = document.getElementById("loading");
  loadingBlock.remove();

  const parsedData = JSON.parse(localData);
  renderUsersCards(parsedData);
}

// 2.2. Функция отрисовки карточек

function renderUsersCards(users) {
  const userContainer = document.getElementById("users-container");

  users.forEach(user => {
    const usersCardHtml = `<div id="${user.id}">
      <p>${user.name}</p>
      <p>${user.surname}</p>
      <p>${user.email}</p>
      <p>${user.age}</p>
    </div>`;

    userContainer.insertAdjacentHTML('beforeend', usersCardHtml);
  });
}

// 2.4. Кнопки управления пользователями

const deleteAllBtn = document.getElementById("delete-all-btn");

deleteAllBtn.addEventListener('click', () => {
  const userContainer = document.getElementById("users-container");
  userContainer.innerHTML = "";

  localStorage.removeItem('users');
});

const deleteOneBtn = document.getElementById("delete-one-btn");

deleteOneBtn.addEventListener('click', () => {
  const idToDelete = prompt("Какую карточку удалить? (Введи id карточки)");

  const card = document.getElementById(idToDelete);
  card.remove();

  const currentUsers = JSON.parse(localStorage.getItem('users'));
  const filteredUsers = currentUsers.filter(user => {
    return user.id !== Number(idToDelete);
  });
  localStorage.setItem('users', JSON.stringify(filteredUsers));
});

const getAllBtn = document.getElementById("get-all-btn");

getAllBtn.addEventListener('click', () => {
  const currentStorageUsers = JSON.parse(localStorage.getItem('users'));

  if (currentStorageUsers !== null && currentStorageUsers.length === 4) {
    return alert("Все пользователи уже отображены!");
  } else {
  fetch('users.json')
    .then(response => {
      return response.json();
    })
    .then(usersData => {
      localStorage.setItem('users', JSON.stringify(usersData));
      
      const userContainer = document.getElementById("users-container");
      userContainer.innerHTML = "";

      renderUsersCards(usersData);
    });
  }
});