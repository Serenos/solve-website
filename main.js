// Demo clips. `real` is the wall-clock duration of the logged run.
const CLIPS = [
  { id: 'rocket', cat: 'draw', big: true, title: 'Copy a rocket with three markers', meta: '125 keyposes · 29 calls · 8.5 min', text: 'Given a reference image, the agent copies the rocket as straight strokes with matching colors, switching between red, black and blue markers.' },
  { id: 'castle', cat: 'build', title: 'Rebuild a castle after one demo', meta: '40 keyposes · 10.2 min', text: 'A person builds the castle once in front of the robot. The parts are scattered and the agent rebuilds it.' },
  { id: 'feed_cat', cat: 'home', title: 'Pour cat food into the bowl', meta: '21 keyposes · 3.7 min', text: 'Pick up the cup and pour the kibble into the bowl without spilling.' },
  { id: 'nvidia_logo', cat: 'draw', title: 'Copy a logo in two colors', meta: 'two runs · 19.7 min', text: 'Green emblem with the green marker, lettering with the black one. Finished over two runs: the first drew the emblem, the second added the lettering.' },
  { id: 'fold_cloth', cat: 'home', title: 'Fold a shirt', meta: '26 keyposes · 3.5 min', text: 'A closed gripper does not prove a grasp on thin cloth, so the agent checks each grasp in the images after lifting.' },
  { id: 'portrait', cat: 'draw', title: 'Copy a portrait', meta: '305 keyposes · 15 calls · 10.1 min', text: 'Given a reference image and a marker, the agent copies the portrait as straight strokes, up to 30 keyposes per call.' },
  { id: 'stack_cups', cat: 'home', title: 'Nest the cups', meta: '19 keyposes · 7.2 min', text: 'Nest the paper cups into one stack.' },
  { id: 'tidy_table', cat: 'home', big: true, title: 'Tidy the table into a four-level stack', meta: '23 keyposes · 28 calls · 5.2 min', text: 'A long-horizon tidy-up: the objects on the table end up stacked in order on the plate.' },
  { id: 'voyager', cat: 'draw', title: 'Sketch a building', meta: '30 calls · 14.9 min', text: 'Copy a line drawing of a building and the lettering under it.' },
  { id: 'hearts', cat: 'draw', title: 'Add hearts around the portrait', meta: '12 calls · 5.2 min', text: 'An open-ended request: draw hearts on both sides of the finished portrait without touching its lines.' },
  { id: 'bike', cat: 'draw', title: 'A pelican riding a bicycle', meta: '26 calls · 10.8 min', text: 'Copy the reference drawing with three markers and return the pens.' },
  { id: 'house', cat: 'draw', title: 'Draw a house', meta: '45 keyposes · 4.1 min', text: 'Pick up a marker, draw a simple house with straight strokes, return the pen.' },
];
const KEYS = [
  { id: 'kb_fib_loop', title: 'Fibonacci, with a loop', code: 'a,b=0,1\nfor i in[0]*10:print(a);a,b=b,a+b', meta: '25 calls · 8.9 min' },
  { id: 'kb_fibonacci', title: 'Fibonacci, shortest form', code: "print('0 1 1 2 3 5 8 13 21 34')", meta: '24 calls · 9.2 min' },
  { id: 'kb_print_hello', title: 'Hello world, then F5', code: 'print("hello world")', meta: '43 calls · 12.2 min' },
  { id: 'kb_hello', title: 'Plain typing', code: 'hello world!', meta: '44 calls · 13.4 min' },
];
const CAMS = [
  { id: 'cam_gomoku_end', tag: 'Interactive', title: 'Gomoku endgame', meta: '51 keyposes · 7.8 min', text: 'Starting from a mid-game position, the agent plays on against a person and wins.' },
  { id: 'cam_cup_pyramid', tag: 'One demo', title: 'Cup pyramid after one demo', meta: '40 keyposes · 7.1 min', text: 'A person builds a 3-2-1 pyramid once and scatters the cups. The agent rebuilds it.' },
  { id: 'cam_block_build', tag: 'Open-ended', title: 'Free-form block building', meta: '58 keyposes · 9.0 min', text: 'Build something of your own choosing from the blocks on the table.' },
  { id: 'cam_shell', tag: 'Memory', title: 'Shell game', meta: '12 keyposes · 3.8 min', text: 'Remember which cup hides the object, then lift the right one.' },
  { id: 'cam_insert', tag: 'Precision', title: 'Peg-in-hole, 1 mm clearance', meta: '12 keyposes · 6.8 min', text: 'Seat the two-peg workpiece upright in its socket.' },
  { id: 'cam_apples', tag: 'Long-horizon', title: 'Apples to the plate', meta: '13 keyposes · 1.9 min', text: 'Move both apples onto the plate.' },
  { id: 'cam_fold', tag: 'Deformable', title: 'Fold a shirt, in real time', meta: '26 keyposes · 3.5 min', text: 'Fold both sleeves in, then fold the lower half up. The agent checks each grasp on the cloth in the images after lifting.' },
  { id: 'cam_gomoku_full', tag: 'Interactive', x: 48, title: 'A full Gomoku game against a person', meta: '98 keyposes · 12.4 min', text: 'The agent draws its move, watches the person reply, and repeats. It wins after eight human moves.' },
];
const DOJO = [
  { id: 'dojo_tictactoe', tag: 'Game', title: 'Tic-tac-toe against an opponent', meta: '20 calls', text: 'Play as the first player: place a piece, wait for the opponent arm to reply, and continue until the board is full.' },
  { id: 'dojo_xylophone', tag: 'Tool use', title: 'Play the xylophone', meta: '18 calls', text: 'Pick up the mallet and strike every key from left to right.' },
  { id: 'dojo_kong', tag: 'Game', title: 'Declare a kong in mahjong', meta: '27 calls', text: 'Wait for the opponent to discard a tile, then declare a kong with the matching tiles.' },
  { id: 'dojo_tower', tag: 'Two arms', title: 'Build a tower from boards and blocks', meta: '38 calls', text: 'Both arms carry each board together and set it on the block supports.' },
  { id: 'dojo_pour', tag: 'Language', title: 'Pour three bottles into three bowls', meta: '24 calls', text: 'Red bottle into the brown bowl, violet into the black, turquoise into the white, as the instruction says.' },
  { id: 'dojo_classify', tag: 'Sorting', title: 'Sort objects into three baskets', meta: '39 calls', text: 'Sort the objects on the table by category into the three baskets.' },
];
const LAB = [
  { id: 'lab_toys', tag: 'Clutter', x: 6, title: 'Clean up the smaller toys', meta: '42 calls · 86 s', text: 'Put all the smaller toys in the bin and leave the birdhouse on the table.' },
  { id: 'lab_dishes', tag: 'Semantics', x: 6, title: 'Dishware into the grey bin', meta: '44 calls · 88 s', text: 'Only the dishware goes in the bin. The cubes, the banana and the bottle stay.' },
  { id: 'lab_tools', tag: 'Negation', x: 5, title: 'Non-hammer tools into the right bin', meta: '31 calls · 66 s', text: 'Put the tools that are not hammers in the bin on the right side.' },
  { id: 'lab_spoons', tag: 'Color', x: 4, title: 'Green spoons into the pot', meta: '39 calls · 58 s', text: 'Put the green spoons in the pot and leave the others.' },
  { id: 'lab_blocks', tag: 'Ordering', x: 2, title: 'Stack blocks in a given order', meta: '28 calls · 28 s', text: 'From bottom to top: red, blue, green, yellow.' },
  { id: 'lab_mugs', tag: 'Reorient', x: 6, title: 'Stand every mug upright', meta: '90 calls · 77 s', text: 'Reorient all the mugs so that the opening faces up.' },
];
const TWIN = [
  { id: 'twin_mug', tag: 'Reorient', title: 'Hang a mug on the rack', meta: '45 calls', text: 'Pick the mug with the left arm, set it down turned, then hang it on the rack with the right arm.' },
  { id: 'twin_blocks3', tag: 'Ordering', title: 'Stack three blocks', meta: '25 calls', text: 'Blue on green on red, on a table full of distractors.' },
  { id: 'twin_cabinet', tag: 'Two arms', title: 'Open the drawer, put the cards in', meta: '16 calls', text: 'One arm pulls out the drawer while the other sets the pack of playing cards into it.' },
  { id: 'twin_hammer', tag: 'Tool use', title: 'Strike the block with a hammer', meta: '29 calls', text: 'Grab the hammer and hit the block.' },
  { id: 'twin_rgb', tag: 'Ordering', title: 'Line up blocks: red, green, blue', meta: '11 calls', text: 'Arrange the three blocks in a row from left to right in the given color order.' },
  { id: 'twin_bowls', tag: 'Stacking', title: 'Nest three bowls', meta: '16 calls', text: 'Stack the three bowls into one.' },
  { id: 'twin_dump', tag: 'Pouring', title: 'Empty the table bin', meta: '19 calls', text: 'Pick up the small table-top trash bin and pour it into the big bin.' },
  { id: 'twin_fan', tag: 'Orientation', title: 'Place the fan facing the robot', meta: '15 calls', text: 'Set the fan on the mat so that it faces the robot.' },
];
const CAT = { draw: 'Drawing', play: 'Interactive', build: 'Building', home: 'Household' };
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ── demo grid
$('#grid').innerHTML = CLIPS.map(c => `
  <article class="card${c.big ? ' big' : ''}" data-cat="${c.cat}" data-id="${c.id}" data-text="${esc(c.title + '. ' + c.text)}" tabindex="0">
    <video muted loop playsinline preload="none" poster="assets/poster/${c.id}.jpg" data-src="assets/video/${c.id}.mp4"></video>
    <span class="chip">${CAT[c.cat]}</span>
    <div class="cap"><h4>${esc(c.title)}</h4><p class="mono">${esc(c.meta)}</p><p class="more">${esc(c.text)}</p></div>
  </article>`).join('');
$('#phones').innerHTML = KEYS.map(c => `
  <article class="phone" data-id="${c.id}" data-text="${esc(c.title)}" tabindex="0">
    <div class="screen"><video muted loop playsinline preload="none" poster="assets/poster/${c.id}.jpg" data-src="assets/video/${c.id}.mp4"></video></div>
    <h4>${esc(c.title)}</h4><pre>${esc(c.code)}</pre><p class="mono">${esc(c.meta)}</p>
  </article>`).join('');

const camCard = c => `
  <article class="card" data-id="${c.id}" data-text="${esc(c.title + '. ' + c.text)}" tabindex="0">
    <video muted loop playsinline preload="none" poster="assets/poster/${c.id}.jpg" data-src="assets/video/${c.id}.mp4"></video>
    <span class="chip">${c.tag}</span>${FF[c.id] ? '<span class="chip speed" data-ff></span>' : c.x ? `<span class="chip speed">${c.x}×</span>` : ''}
    <div class="cap"><h4>${esc(c.title)}</h4><p class="mono">${esc(c.meta)}</p><p class="more">${esc(c.text)}</p></div>
  </article>`;
$('#cams').innerHTML = CAMS.map(camCard).join('');
$('#dojo').innerHTML = DOJO.map(camCard).join('');
$('#lab').innerHTML = LAB.map(camCard).join('');
$('#twin').innerHTML = TWIN.map(camCard).join('');

// ── play clips only while they are on screen
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const vio = new IntersectionObserver(es => es.forEach(e => {
  const v = e.target;
  if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; if (!reduce) v.play().catch(() => {}); }
  else v.pause();
}), { threshold: 0.35 });
$$('video[data-src]').forEach(v => vio.observe(v));

// ── filters
$$('.filters button').forEach(b => b.onclick = () => {
  $$('.filters button').forEach(x => x.classList.toggle('on', x === b));
  const f = b.dataset.f;
  $('#grid').classList.toggle('filtered', f !== 'all');
  $$('#grid .card').forEach(c => c.hidden = f !== 'all' && c.dataset.cat !== f);
});

// ── lightbox
const box = $('#box'), bv = $('video', box);
const open = el => { bv.dataset.id = el.dataset.id; bv.src = `assets/video/${el.dataset.id}.mp4`; $('p', box).textContent = el.dataset.text; box.showModal(); bv.play().catch(() => {}); };
$$('.card, .phone').forEach(el => { el.onclick = () => open(el); el.onkeydown = e => { if (e.key === 'Enter') open(el); }; });
const close = () => { bv.pause(); box.close(); };
$('.x', box).onclick = close;
box.onclick = e => { if (e.target === box) close(); };
box.addEventListener('close', () => bv.pause());

// ── speed badge: real time while the robot moves, fast-forward while the model thinks
const FFWD = '<svg viewBox="0 0 20 12" aria-hidden="true"><path d="M1 1l8 5-8 5zM10 1l8 5-8 5z"/></svg>Thinking 10×';
const badges = $$('.chip[data-ff]').map(b => ({ b, v: $('video', b.parentElement), ff: FF[b.parentElement.dataset.id] }));
const boxBadge = $('.chip', box);
const paint = (b, ff, t) => {
  const on = ff.some(r => t >= r[0] && t < r[1]);
  if (b._on !== on) { b._on = on; b.classList.toggle('ff', on); b.innerHTML = on ? FFWD : 'Real time 1×'; }
};
(function tick() {
  badges.forEach(x => paint(x.b, x.ff, x.v.currentTime));
  const ff = box.open && FF[bv.dataset.id];
  boxBadge.hidden = !ff;
  if (ff) paint(boxBadge, ff, bv.currentTime);
  requestAnimationFrame(tick);
})();

// ── dense dots along the step-wise curve
const curve = $('#curve'), L = curve.getTotalLength(), N = 44;
$('#densedots').innerHTML = Array.from({ length: N }, (_, i) => { const p = curve.getPointAtLength(L * i / (N - 1)); return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.2" style="--i:${i}"/>`; }).join('');

// ── reveal on scroll, bars
$$('.bar').forEach(b => { const v = +b.dataset.v; b.style.setProperty('--w', v / +b.parentElement.dataset.max * 100 + '%'); b.insertAdjacentHTML('beforeend', `<i><b>${v.toFixed(1)}</b></i>`); });
const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }), { threshold: 0.2 });
$$('.lede, .head, .typing-head, .more-head, .sim-head, .idea-copy, .tracks, .loop li, .pillars article, .code, .chart, .real, .limits, .bib').forEach(el => { el.classList.add('rv'); rio.observe(el); });

// ── nav, placeholders, copy
addEventListener('scroll', () => $('#nav').classList.toggle('solid', scrollY > innerHeight * 0.6), { passive: true });
$$('[data-soon]').forEach(a => a.onclick = e => { e.preventDefault(); a.classList.add('soon'); a.textContent = 'Coming soon'; });
$('#copy').onclick = async () => { try { await navigator.clipboard.writeText($('#bibtex').textContent); $('#copy').textContent = 'Copied'; setTimeout(() => $('#copy').textContent = 'Copy', 1500); } catch { } };
