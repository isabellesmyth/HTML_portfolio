
export default function NavBar(page){
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

