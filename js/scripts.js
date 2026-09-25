/*
  Name: Sangye Tengkhar
  Date: 09.25.2026
  CSC 372-01

  This is the external JavaScript file for the Campus Event Guide home page.
  It adds a "Save Event" button to each event card, toggles a saved state
  when clicked, and dynamically maintains a saved events summary list at
  the bottom of the page.
*/

document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');
  const eventCards = document.querySelectorAll('.event-card');

  // ----- Build the saved events summary section -----
  const summarySection = document.createElement('section');
  summarySection.className = 'saved-events-section';
  summarySection.id = 'saved-events';

  const summaryHeading = document.createElement('h2');
  summaryHeading.textContent = 'Saved Events';
  summarySection.appendChild(summaryHeading);

  const emptyMessage = document.createElement('p');
  emptyMessage.className = 'empty-message';
  emptyMessage.textContent = 'No events saved yet. Click the "Save Event" button on any event card to add it to your list.';
  summarySection.appendChild(emptyMessage);

  const savedList = document.createElement('ul');
  savedList.className = 'saved-events-list';
  savedList.id = 'saved-events-list';
  summarySection.appendChild(savedList);

  main.appendChild(summarySection);

  // ----- Add a Save Event button to each event card -----
  eventCards.forEach(function (card) {
    const cardBody = card.querySelector('.card-body');

    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.className = 'save-button';
    saveButton.textContent = 'Save Event';

    cardBody.appendChild(saveButton);

    saveButton.addEventListener('click', function () {
      const isSaved = card.classList.contains('saved');

      if (isSaved) {
        card.classList.remove('saved');
        saveButton.textContent = 'Save Event';
      } else {
        card.classList.add('saved');
        saveButton.textContent = 'Remove Event';
      }

      renderSavedEvents();
    });
  });

  // ----- Render the summary list from saved cards -----
  function renderSavedEvents() {
    // Clear existing list items
    while (savedList.firstChild) {
      savedList.removeChild(savedList.firstChild);
    }

    const savedCards = document.querySelectorAll('.event-card.saved');

    if (savedCards.length === 0) {
      emptyMessage.style.display = 'block';
      savedList.style.display = 'none';
      return;
    }

    emptyMessage.style.display = 'none';
    savedList.style.display = 'grid';

    savedCards.forEach(function (card) {
      const name = card.querySelector('h3').textContent;
      const dateText = card.querySelector('time').textContent;
      const location = card.querySelector('.location').textContent;

      const listItem = document.createElement('li');
      listItem.className = 'saved-event-item';

      const nameEl = document.createElement('strong');
      nameEl.textContent = name;
      listItem.appendChild(nameEl);

      const detailsEl = document.createElement('p');
      detailsEl.className = 'saved-event-details';
      detailsEl.textContent = dateText + ' · ' + location;
      listItem.appendChild(detailsEl);

      savedList.appendChild(listItem);
    });
  }

  // Initialize the summary so the empty message shows on page load
  renderSavedEvents();
});