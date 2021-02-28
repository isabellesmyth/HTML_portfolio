
export default function About(about){

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