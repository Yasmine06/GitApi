

function fetchData()
{
    var inputVal=document.getElementById("myInput").value;
fetch("https://api.github.com/users/"+inputVal+"/repos").then(response=>
{
    console.log(response);
    if(!response.ok)
    {
        throw Error("Error!");
    }
return response.json();
})
.then(name=>
{
console.log(name);
const html=name.map(user =>
    {
        return `<h2>Repository Name:</h2> ${user.name}`;
    })
   document.querySelector("#app").insertAdjacentHTML("AfterEnd",html);
}).catch(error =>
    {
        console.log(error);
    })
}

