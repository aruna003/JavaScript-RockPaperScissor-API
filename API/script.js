const URL = "https://cat-fact.herokuapp.com/facts"

let promise = fetch(URL);
console.log(promise);

const btn = document.querySelector("#btn");
// calling any API to get data is a async work by utself
text_box= document.querySelector("#response")

const getFacts = async() => {
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);   //json format
// response is also an object

// pass the first promise to get the second promise through json()

    let data = await response.json();
    console.log("data after .json()......")
    console.log(data);
    console.log ("first element of data,",data[0])
    text_box.innerText = data[0].text
}   

btn.addEventListener("click",getFacts)


