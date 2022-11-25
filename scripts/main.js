const result__block = document.getElementById("result");

submit__form.addEventListener("click", sendDataToServer);

function sendDataToServer() {
  const firstName = document.getElementById("text__input").value;
  const serverUrl = "https://api.genderize.io";
  const url = `${serverUrl}?name=${firstName}`;
  fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      if (json.gender == null) {
        return (
          (result__block.querySelector("p").innerHTML =
            "Error: Gender cannot be determined"),
          (document.getElementById("result").style.backgroundColor =
            "rgb(240, 128, 128)")
        );
      } else {
        return (
          (result__block.querySelector(
            "p"
          ).innerHTML = `${firstName} is ${json.gender}`),
          (document.getElementById("result").style.backgroundColor =
            "rgb(176, 196, 222)")
        );
      }
    })
    .catch(errorTreatment);
}

function errorTreatment(error) {
  return (
    (result__block.querySelector("p").innerHTML = `Error: ${error.message}`),
    (document.getElementById("result").style.backgroundColor =
      "rgb(240, 128, 128)")
  );
}
