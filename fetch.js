const fetchData = async () => {
  try {
    const response = await fetch('https://www.coursehubiitg.in/api/codingweek/contributions');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const renderDataList = (data) => {
  const dataList = document.getElementById('data-list');

  // Clear any existing list items
  dataList.innerHTML = '';

  data.forEach((item) => {
    const listItem = document.createElement('li');

    // Create elements for name, points, and avatar
    const nameElement = document.createElement('h2');
    nameElement.textContent = item.name;

    const pointsElement = document.createElement('p');
    pointsElement.textContent = `Points: ${item.points}`;

    const avatarElement = document.createElement('img');
    avatarElement.src = item.avatar;
    avatarElement.alt = `${item.name}'s Avatar`;

    // Append name, points, and avatar to the list item
    listItem.appendChild(nameElement);
    listItem.appendChild(pointsElement);
    listItem.appendChild(avatarElement);

    dataList.appendChild(listItem);
  });
};

fetchData()
  .then((data) => renderDataList(data))
  .catch((error) => console.error(error));
