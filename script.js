const projects = [
  { name: 'buildings_night_day' },
  { name: 'lovely_dog' },
  { name: 'night_sky' },
  { name: 'panda' },
  { name: 'pingpong' },
  { name: 'sunset' },
  { name: 'flying_bird' },
  { name: 'heartbeat' },
  { name: 'battery' },
  { name: 'progress_bar' },
  { name: 'mail_open' },
  { name: 'santa_claus' },
  { name: 'christmas_bells' },
  { name: 'rainbow_heart' },
  { name: 'hover_spinner' },
  { name: 'folding_loader' },
  { name: 'isometric_stack' },
  { name: 'christmas_wreath' },
]
const list = document.getElementById('list')

projects.forEach(({ name }, idx) => {
  // console.log(name)
  const listItem = document.createElement('li')
  listItem.innerHTML = `
    <a href="./${name}/index.html" >
      <img src="./${name}/desktop-design.png" alt="${name}" />
    </a>
    <div class="content">
      <h3>${idx + 1}. ${formatTitle(name)}</h3>
      <a href="/${name}"><button>View Live</button></a>
    </div>
  `
  list.appendChild(listItem)
})

function formatTitle(title) {
  return title
    .split('_')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}
