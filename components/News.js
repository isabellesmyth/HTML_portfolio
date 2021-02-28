export default function News(news){
    return `
    <section id="News">
    <h1>News</h1>
    <div class="search">
      <input type="search" name='news' placeholder="Search News...">
    </div>
    <div class="row news-list">
        ${NewsItems(news.slice(0, 2))}
       
      </div>
  
  </section>
    `;
}

export function NewsItems(news){

  return news.map(d=>
    `<div class="col-8">
    ${d.title}
    </div>
    <div class="col-4">
    ${d.date}
    </div>

    `).join('');

}

export function handleNewsFilter(news){
    var x = document.querySelector('.search input[name="news"]').addEventListener('input', (event)=>{
        const keyword = event.target.value;
        const filtered = data.news.filter(n=>{
         return n.title.toLowerCase().includes(keyword.toLowerCase())});
         document.querySelector('.news-list').innerHTML = NewsItems(filtered);
       });
       

}