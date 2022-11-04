
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

getActivity();