
import MaterialIcon from './MaterialIcon.js';
export default function renderProjects(projects){
    console.log(projects);
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
      ${ProjectItems(projects)}
      </div>
  </section>`;
}

export function ProjectItems(projects){
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
      ${Tags(d.tags)}
      </div>
          <div class="col-6">
      <img src="${d.teaser}" width="100%">
    </div>
      </div>
  `).join('');
}

export function Tags(tags){
    console.log("aaa");
    console.log(tags);
  return tags.map(d=>`
    <span id="${d.category}">
        ${d.tag}
        </span>
    `).join('');
}
      
export function ProjectMaterials(materials){
    return materials.map(d=>
        `
        <a href="${d.path}
          ">${d.label}</a>
        
        </br >
        `).join('');    

}


