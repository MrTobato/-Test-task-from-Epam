/*async function getRequest() {

let response = await fetch("http://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture");
let json = await response.json();
};

/*if (response.ok) { 
 let json = await response.json();
} else {
  alert("Ошибка HTTP: " + response.status);
};*/

async function getRequest() {
    let data = [];

    let parametr = fetch("http://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture").then(
        successResponse => {
            if (successResponse.status != 200) {
                return null;
            } else {
                return successResponse.json();
            }
        },
            _failResponse => {
            return null;
        }
    );
    data.push(parametr);

    let results = await Promise.all(data);

    return results;
}