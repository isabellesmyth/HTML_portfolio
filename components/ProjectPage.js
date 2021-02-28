
import {Tags,ProjectMaterials, ProjectItems} from './Projects.js';

export default function ProjectPage(project){

    document.querySelector('.container').innerHTML = `
  <section>
  <br />
  <body>
    <nav>
      <ul>
        <li><a href="index.html">Go Back</a></li>
        </ul>
      </nav>
      <h1 class= "text-indigo-600">${project.title}</h1>
      <br />
      ${Tags(project.tags)}
      <br />

      <img src = "${project.teaser}" width="140" height="128" >
    <br />
      <p>${project.description} </p>
      <br />
      ${ProjectMaterials(project.materials)}
      </body>
      </section>
  `;    
}

export function handleProjectFilter(data){
    var filtered = data.projects;
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
      let value = event.target.value;
      if (value === 'all'){
         var filtered = data.projects;
      }
      else { 
        var filtered = data.projects.filter(p=>{
        for (var t in p.tags){
          let tg = p.tags[t].tag;
          if (value.toLowerCase() === tg.toLowerCase()){
            return true;
          }
        }
        });
      }
        document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
     
  
    }));    
}