


let data = null;
fetch('assets/data.json').then(response => {

  return response.json();
}).then(_data => {
  data = _data;
  console.log(_data);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const page = urlParams.get("project");
  console.log(page);
  
  if (page == null){
    renderMainPage(data);
    addInteractions(data); }
    
    
  else {
    renderProjectPage(data,page);
  }
 
});

 
function renderMainPage(data){
  document.querySelector('.container').innerHTML = `
    ${renderNavbar(data)}
    ${renderAbout(data.about)}
    ${renderNews(data.news)}
    ${renderProjects(data.projects)}
    
    
  `;
 
  
}


function addInteractions(data){
  var filtered = data.projects;
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(cond=>cond.addEventListener('change', function(event){
    let value = event.target.value;
    if (value === 'all'){
       var filtered = data.projects;
    }
    else { 
      var filtered = data.projects.filter(p=>{
      for (t in p.tags){
        let tg = p.tags[t].tag;
        if (value.toLowerCase() === tg.toLowerCase()){
          return true;
        }
      }
      });
    }
      document.querySelector('.project-list').innerHTML = renderProjectItems(filtered);
   

  }));
  

  var x = document.querySelector('.search input[name="news"]').addEventListener('input', (event)=>{
   const keyword = event.target.value;
   const filtered = data.news.filter(n=>{
    return n.title.toLowerCase().includes(keyword.toLowerCase())});
    document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
  });
  
  

}

function renderProjectPage(data, project){
  var proj;
  for (x in data.projects){
    console.log(data.projects[x]);
    if (data.projects[x].id == project){
       proj = data.projects[x];
    }
  }
  console.log(proj);
  document.querySelector('.container').innerHTML = `
  <section>
  <br />
  <body>
    <nav>
      <ul>
        <li><a href="index.html">Go Back</a></li>
        </ul>
      </nav>
      <h1 class= "text-indigo-600">${proj.title}</h1>
      <br />
      ${renderTags(proj.tags)}
      <br />

      <img src = "${proj.teaser}" width="140" height="128" >
    <br />
      <p>${proj.description} </p>
      <br />
      ${renderProjectMaterials(proj.materials)}
      </body>
      </section>
  `;
}

function renderProjectMaterials(materials){
  return materials.map(d=>
    `
    <a href="${d.path}
      ">${d.label}</a>
    
    </br >
    `).join('');
  
 


}
function renderNavbar(page){

  const items = ["About", "News", "Projects"] ;
  return `
  <nav>
  <ul>
  ${page==='project'? (
    `<nav>
    <ul>
    <li>
        <a href=".">Go Back</a>
    </li>
    </ul>
    </nav>
    `
  ):(
    items.map(d=>
    `
    <li>
        <a href="#${d}">${d.toUpperCase()}</a>
    </li>
 
    `).join('')
  )}
  </ul>
  </nav>`;
  }
  

function renderAbout(about){ 
  
  return `
  <section id="About">
  <br />
  <h1 class="animate__animated animate__fadeInLeft"> ${about.name} </h1>
  <div class="row">
    <div class="col-6">
      <img src= "${about.photo}" id="me" alt="Picture of Me">
      <br />
      ${about.email}
      <br />
    </div>
    <div class="col-6">
      <p>
        ${about.description}
      </p>
    </div>
  </div>

  <div>
    <a href="${about.linkedin}
    "><i class="fab fa-linkedin"></i></a>
    |
    <a href="${about.github}">
      <i class="fab fa-github"></i>
    </a>
    </ul>
  </div>
  </section>`;

 }
 function renderProjects(projects){
   
  return `
  <section id="Projects">
      <h1 class="title">Projects</h1>
      
      <div class="filter">
      <label>
        <input type="radio" name="filter" value="all" checked>
        All
      </label>
      <label>
        <input type="radio" name="filter" value="coursework">
        Coursework
      </label>
      <label>
      <input type="radio" name="filter" value="iOS">
      iOS
    </label>
  
    </div>
      <!-- we will add a filter interface here in the next lab -->
      <div class="project-list">
      ${renderProjectItems(projects)}
      </div>
  </section>`;
}




function renderTags(tags){
  
  return tags.map(d=>`
  <span id="${d.category}">
    ${d.tag}
    </span>
  `).join('');
}



function renderProjectItems(projects){
	return projects.map(d=>`
	  <div class="row">
      <div class="col-6">
        <div class="project-title">
          <a href="?project=${d.id}"><strong>${d.title}</strong></a>
        </div>
        <div class="project-authors">
          ${d.authors}<br>
        </div>
        <div class="tag">
        ${renderTags(d.tags)}
        </div>
			<div class="col-6">
        <img src="${d.teaser}" width="100%">
      </div>
		</div>
	`).join('');
}

function renderNews(news){
  return `
  <section id="News">
  <h1>News</h1>
  <div class="search">
    <input type="search" name='news' placeholder="Search News...">
  </div>
  <div class="row news-list">
      ${renderNewsItems(news.slice(0, 2))}
     
    </div>

</section>
  `;
}

function renderNewsItems(news){

  return news.map(d=>
    `<div class="col-8">
    ${d.title}
    </div>
    <div class="col-4">
    ${d.date}
    </div>

    `).join('');
}


