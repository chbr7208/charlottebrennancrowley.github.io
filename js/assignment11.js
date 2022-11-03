
const nameButton = document.querySelector('.fake-name');



const endpoint = 'api.namefake.com';

async function getName() {
    let text = await fetch(endpoint);
       let response = await text.text();
       let json_response = JSON.parse(response);

       console.log(json_response['name']);

        displayName(json_response['name'])
}

function displayName(x){

    document.getElementById('js-fake-name-text').textContent = x;
}

getName();