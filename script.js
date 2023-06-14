
// Example made with bootstrap
// have to use a different one

//made for functionality

//object example
var userData;
var workoutData;

function getUserInfoModal() {
    var userInfo = {
        name: "Blob",
        age: 40,
        height: 72,
        weight: 180,
        date: "",
        email: ""
    };

    userInfo.name = "Name: " + $("#nameInput").val();
    userInfo.age = "Age: " + $("#ageInput").val();
    userInfo.height = "Height: " + $("#heightInput").val();
    userInfo.weight = "Weight: " + $("#weightInput").val();
    userInfo.email = "E-mail: " + $("#emailInput").val();

    const dateInfo = dayjs();
    userInfo.date = "Date joined: " + dateInfo.format('YYYY-MM-DD');

    return userInfo;
}

function getUserWorkoutInfo() {

    var selectedType = $("#typeForm").val();
    var selectedMuscle = $("#muscleForm").val();
    var selectedDifficulty = $("#difficultyForm").val();
    console.log("Selected Type: " + selectedType);
    console.log("Selected Muscle: " + selectedMuscle);
    console.log("Selected Difficulty: " + selectedDifficulty);
    var workoutInfo = {
        type: "",
        muscle: "",
        difficulty: ""
    }
    workoutInfo.type = selectedType;
    workoutInfo.muscle = selectedMuscle;
    workoutInfo.difficulty = selectedDifficulty;

    return workoutInfo;
}

function pageInitialize() {
    $("#infoButtonSubmit").click(function () {
        userData = getUserInfoModal();
        console.log(info);
    });

    $("#confirmButton").click(function () {
        workoutData = getUserWorkoutInfo();
        console.log(workoutData);
    });
}


$(document).ready(pageInitialize());