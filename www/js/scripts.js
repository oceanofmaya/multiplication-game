var dKm = (function() {
    var numberCorrect = 0;
    var numberWrong = 0;
    var multiplicationNumber1 = 0;
    var multiplicationNumber2 = 0;
    var multiplicationFactor = 20;

    return {
        generateNewNumbers: function () {
            multiplicationNumber1 = Math.floor((Math.random() * multiplicationFactor) + 1);
            multiplicationNumber2 = Math.floor((Math.random() * multiplicationFactor) + 1);

            document.getElementById("multiplicationNumber1").innerHTML = multiplicationNumber1;
            document.getElementById("multiplicationNumber2").innerHTML = multiplicationNumber2;
        },

        validateMultilplication: function () {
            let answer = multiplicationNumber1 * multiplicationNumber2;
            let userAnswer = document.getElementById("multiplicationAnswer").value;

            if (answer == userAnswer) {
                changeAnswerMessageAndUpdateCount("Correct! Good job.", true);
                nextQuestionAfterDelay(3000);
            }
            else {
                changeAnswerMessageAndUpdateCount("Wrong! Try again.", false);
            }
        },

        changeMultiplacationFactor: function () {
            multiplicationFactor = document.getElementById("multiplicationFactor").value;
            dKm.generateNewNumbers();
        },

        refreshCount: function () {
            document.getElementById("countCorrect").innerHTML = numberCorrect;
            document.getElementById("countWrong").innerHTML = numberWrong;
        },

        skipQuestion: function () {
            dKm.clearAnswer();
            dKm.generateNewNumbers();
        },

        clearAnswer: function () {
            document.getElementById("multiplicationAnswer").value = "";
            document.getElementById("answerMessage").innerHTML = "";
        }
    };

    function changeAnswerMessageAndUpdateCount(answerMessage, isSuccess) {
        let answerMessageElement = document.getElementById("answerMessage");
        if (isSuccess) {
            answerMessageElement.classList.remove("fail");
            answerMessageElement.classList.add("success");
        } else {
            answerMessageElement.classList.remove("success");
            answerMessageElement.classList.add("fail");
        }

        answerMessageElement.innerHTML = answerMessage;
        updateCount(isSuccess);
    }

    function updateCount(isSuccess) {
        if (isSuccess) {
            numberCorrect++;
        } else {
            numberWrong++;
        }
        dKm.refreshCount();
    }

    function nextQuestionAfterDelay(delay) {
        if (delay == null || delay == undefined) {
            delay = 3000; //default
        }

        setTimeout(function () { dKm.clearAnswer(); dKm.generateNewNumbers(); }, delay);
    }
})(); 