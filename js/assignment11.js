
const activityButton = document.querySelector('.activity');

activityButton.addEventListener('click', getActivity);

const endpoint = 'https://www.boredapi.com/api/activity';

async function getActivity() {
    let text = await fetch(endpoint);
       let response = await text.text();
       let json_response = JSON.parse(response);

       console.log(json_response['activity']);

        displayActivity(json_response['activity'])
}

function displayActivity(x){

    document.getElementById('js-activity-text').textContent = x;
}

function update() {
    var element = document.getElementById("myprogressBar");   
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++; 
        element.style.width = width + '%'; 
      }
    }
  }

  getActivity();