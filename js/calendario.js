/* Tela de agendamento do profissional */
document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    
    const modal = document.getElementById('modal');
    const span = document.getElementsByClassName('close')[0];
    const saveBtn = document.getElementById('save-btn');
    const timeSlotsContainer = document.getElementById('time-slots');
    let selectedDay = null;

    // Generate calendar days
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = i;
        day.addEventListener('click', () => {
            selectedDay = day;
            showModal();
        });
        calendar.appendChild(day);
    }

    // Generate time slots for the modal
    for (let hour = 9; hour < 18; hour++) {
        const slot = document.createElement('div');
        slot.className = 'time-slot';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `time-${hour}`;
        const label = document.createElement('label');
        label.htmlFor = `time-${hour}`;
        label.textContent = `${hour}:00 - ${hour + 1}:00`;
        slot.appendChild(checkbox);
        slot.appendChild(label);
        timeSlotsContainer.appendChild(slot);
    }

    // Show modal
    function showModal() {
        modal.style.display = 'block';
        loadSelectedTimes();
    }

    // Close modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Save selected times and close modal
    saveBtn.onclick = function() {
        saveSelectedTimes();
        modal.style.display = 'none';
    }

    // Load selected times for the selected day
    function loadSelectedTimes() {
        const times = JSON.parse(selectedDay.getAttribute('data-times') || '{}');
        document.querySelectorAll('.time-slot input').forEach(input => {
            input.checked = times[input.id] || false;
        });
    }

    // Save selected times for the selected day
    function saveSelectedTimes() {
        const times = {};
        document.querySelectorAll('.time-slot input').forEach(input => {
            times[input.id] = input.checked;
        });
        selectedDay.setAttribute('data-times', JSON.stringify(times));
        updateDayAvailability();
    }

    // Update day availability based on selected times
    function updateDayAvailability() {
        const times = JSON.parse(selectedDay.getAttribute('data-times'));
        const available = Object.values(times).includes(true);
        if (available) {
            selectedDay.classList.add('available');
        } else {
            selectedDay.classList.remove('available');
        }
    }
});
