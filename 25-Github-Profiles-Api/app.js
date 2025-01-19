//base url
const APIurl = "https://api.github.com/users/";

const form = document.querySelector("form");
const search= document.querySelector(".search");

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const user = search.value;
  if(user){
    getUser(user);
    setTimeout(()=>{
      search.value="";
    },2000)
  }

})



//
async function getUser(username){
try{
  const {data}= await axios.get(APIurl + username)
  createCard(data);
  getRepos(username);
  console.log(data);
}
catch(err){
  createEmpty("User does not exist!");
  console.log(err)
}
}


//
async function getRepos(username){
  try{
    const {data}= await axios.get(APIurl + username+'/repos?sorted=created');
    console.log(data);
    createRepos(data);
  }
  catch(err){
    createEmpty("Problem fetching Repos!");
    console.log(err)
  }
  }
  
//
function createRepos(repos){
  const reposContainer=document.querySelector(".bottom-container-repos");

  repos.slice(1,10).forEach(repo => {
    const elem = document.createElement("div");
    elem.classList.add("repo");
    elem.innerHTML=`
    <a href=${repo.html_url} target="_blank">${repo.name}</a>
    `
    reposContainer.appendChild(elem);
  });

}


// card.innerHTML(createTestimonial(user));


//function to create a card
  //function for creating a testimonial card for each user
  function createCard(user) {
    const card = document.querySelector(".card");
    // const panel = document.createElement("div");
    card.innerHTML = `
        <div class="top-container">
        <div class="person-image">
            <img src="${user.avatar_url}" alt="profile picture of ${user.login}">
         
        </div>
        <div class="right-container">
        <h3 class="person-name">${user.name}</h3>
        <h3 class ="person-profile">${user.login}</h3>
        <p class="person-testimonial">${user.bio}</p>
        <div class="add-info">
          <h5 class="followers"> ${user.followers} Followers</h5>
          <h5 class ="following"> ${user.following} Following</h5>
          <h5 class = "repos">${user.public_repos} Repositories</h5>
        </div>
        </div>
        </div>
        <div class ="bottom-container-repos">

        </div>
      
        `;
    // return panel;
  }

  function createEmpty(message){
    const card = document.querySelector(".card");
    card.innerHTML=`
    <h2 class="empty">${message}</h2>
    `
  }