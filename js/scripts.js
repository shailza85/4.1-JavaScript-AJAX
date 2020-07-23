/**
 * AJAX examples
 */

 //Retrieving an external resoursec(JSON live data)

 fetch("http://api.open-notify.org/astros.json") //Sends the request...
 //we can use .then() to parse the response.
 .then(response=>{
     if (response.status >=200 && response.status<=299) // 200range status/response codes are success.
     {
     return response.json(); //convert to JSON and send to next step(.then())
     }
     else { //if another range throw an error if its unsuccessfull.
         throw Error(response.statusText); // display a formal error message reporting
     }
 })
    //data has been formatted, lets'have look inside
    .then (data=> {
     console.log(data); //output data to console

//output the people
const people=data.people; //This is an array of people.
//prepare for HTML list.
const peopleUL=document.createElement("UL");

//Let's loop though array
for (const person of people)
{ //Prepare an LI for this person
const personLI=document.createElement("LI");
//Add some text content(using template literal to inject our values)
personLI.textContent=`${person.name} is currently aboard ${person.craft}.`;
//Add this LI to UL.
peopleUL.appendChild(personLI);
}
//Add UL to Body of webpage
document.body.appendChild(peopleUL);
 });
