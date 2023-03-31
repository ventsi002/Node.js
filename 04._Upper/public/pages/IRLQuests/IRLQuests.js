
function fetchQuest(activityQuestString = "") {

    fetch("https://www.boredapi.com/api/activity" + activityQuestString)
        .then(response => response.json())
        .then(result => {
            const questDiv = document.getElementById("quest");
            questDiv.innerText = result.activity
        });
}
fetchQuest();

function getNewQuest() {
    const dropdown = document.getElementById("activity-dropdown");
    fetchQuest(`?type=${dropdown.value}`);
}

document.getElementById("fetch-new-quest-btn").addEventListener("click", getNewQuest);