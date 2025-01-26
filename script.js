function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    return date.getDay();
}

function getAkanName(gender, dayOfWeek) {
    const akanNamesMale = [
        "Kwasi", "Kwabena", "Kwaku", "Kwado", "Kofi", "Kwame", "Kwasi"
    ];
    const akanNamesFemale = [
        "Akosua", "Abena", "Akua", "Adwoa", "Afia", "Ama", "Akosua"
    ];

    if (gender === "male") {
        return akanNamesMale[dayOfWeek];
    } else if (gender === "female") {
        return akanNamesFemale[dayOfWeek];
    } else {
        return "Invalid gender";
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const birthdate = document.getElementById("Day").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!birthdate || !gender) {
        alert("Please enter both your birthdate and gender.");
        return;
    }

    const dayOfWeek = getDayOfWeek(birthdate);
    
    const akanName = getAkanName(gender, dayOfWeek);
    
    document.getElementById("result").textContent = `Your Akan name is: ${akanName}`;
}

document.getElementById("form").addEventListener("submit", handleSubmit);