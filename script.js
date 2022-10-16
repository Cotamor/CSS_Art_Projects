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
  { name: 'bouncing_ball' },
  { name: 'thermometer' },
  { name: 'sunset_beach' },
  { name: 'pineapple' },
  { name: 'pulse' },
  { name: 'battery_element' },
  { name: 'fan' },
  { name: 'rocket_and_moon' },
  { name: 'coffee_maker' },
  { name: 'independence_day' },
  { name: 'submarine' },
  { name: 'sleeping_cat' },
  { name: 'witch' },
  { name: 'birthday_card_3d' },
  { name: 'diya_candle' },
  { name: 'coder_kitty' },
  { name: 'sprite_sheet' },
  { name: 'cat_on_the_windowsill' },
  { name: '3d_cards' },
  { name: 'bee' },
  { name: 'waves' },
  { name: 'tea_cup' },
  { name: 'cat_and_mouse' },
  { name: 'sleepy_owl' },
  { name: 'popsicles' },
  { name: 'pencile' },
  { name: 'paint_roller' },
  { name: 'neumorphic_loader' },
  { name: 'frog' },
  { name: 'day_night_animation' },
  { name: 'moon' },
  { name: 'baby_chick' },
  { name: 'harry_potter' },
  { name: 'dragon' },
  { name: 'ticktock' },
  { name: 'rabbit' },
  { name: 'astronaut' },
  { name: 'black_sheep' },
  { name: 'sleepy_cloud' },
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
