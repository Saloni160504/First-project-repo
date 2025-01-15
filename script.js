document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventTime = document.getElementById("eventTime").value;
    const eventLocation = document.getElementById("eventLocation").value;

    const newEvent = {
        name: eventName,
        date: eventDate,
        time: eventTime,
        location: eventLocation
    };

    addEventToList(newEvent);

    document.getElementById("eventForm").reset();
});

function addEventToList(event) {
    const eventList = document.getElementById("events");

    const eventItem = document.createElement("li");
    eventItem.classList.add("event-item");

    eventItem.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p><strong>Location:</strong> ${event.location}</p>
    `;

    eventList.appendChild(eventItem);
}
