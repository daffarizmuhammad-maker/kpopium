// ✨ PENTING: GANTI NAMA-NAMA DI BAWAH INI DENGAN BIAS KAMU ✨
// Pastikan huruf kapitalnya sesuai dengan data di bawah ya!
let favorites = ["Minji", "Hanni", "Danielle", "Haerin", "Hyein",  "Giselle", "Asa", "Carmen", "Stella", "Kya"]; 

let currentView = 'home'; 
let currentFavFilter = 'all'; 

const groupColors = {
    "newjeans": "#60a5fa",       
    "aespa": "#c084fc",          
    "babymonster": "#f87171",    
    "Hearts2Hearts": "#ff7eb3",  
    "KiiiKiii": "#34d399"        
};

let isLightMode = localStorage.getItem('theme') === 'light';
if (isLightMode) {
    document.body.classList.add('light-mode');
    document.getElementById('themeToggle').innerText = '🌙 Gelap';
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    document.getElementById('themeToggle').innerText = isLight ? '🌙 Gelap' : '☀️ Terang';
}

const members = [
// NewJeans
{name:"Minji", group:"newjeans", img:"https://i.pinimg.com/736x/93/b3/12/93b3125beaaff50d8277f47ef9c57411.jpg", position:"Vocalist, Dancer", zodiac:"Taurus ♉", desc:"Minji tidak menyukai Mint Choco. Suka beres-beres dan membaca buku."},
{name:"Hanni", group:"newjeans", img:"https://i.pinimg.com/1200x/c2/c1/54/c2c1548f12c761f2e8c814c9f0e7694e.jpg", position:"Vocalist, Dancer", zodiac:"Libra ♎", desc:"Mahir berbicara dalam 3 bahasa, (English, Korea and Vietnamese). Hanni juga menyukai pizza dan hobby memotret awan."},
{name:"Danielle", group:"newjeans", img:"https://i.pinimg.com/736x/e6/a9/6c/e6a96c629b4c91e7bd86c28f6fc14129.jpg", position:"Vocalist, Dancer", zodiac:"Aries ♈", desc:"Sangat ekspresif dan sering dijuluki 'sunshine' oleh Bunnies."},
{name:"Haerin", group:"newjeans", img:"https://i.pinimg.com/736x/a1/f7/7b/a1f77b1895ec4f3d09adc6021f5c5053.jpg", position:"Vocalist, Dancer", zodiac:"Taurus ♉", desc:"Punya mata kucing yang ikonik dan kepribadian 4D yang unik."},
{name:"Hyein", group:"newjeans", img:"https://i.pinimg.com/1200x/a3/48/fa/a348fa6ace23c332345977923803370b.jpg", position:"Vocalist, Dancer, Maknae", zodiac:"Taurus ♉", desc:"Pecinta Harry Potter dan member termuda yang sangat multitalenta."},

// aespa
{name:"Karina", group:"aespa", img:"https://i.pinimg.com/736x/c1/07/6d/c1076dd0710c244657237500bda9acee.jpg", position:"Leader, Main Dancer, Lead Rapper", zodiac:"Aries ♈", desc:"Punya visual seperti AI dari game dan jago banget main PUBG."},
{name:"Giselle", group:"aespa", img:"https://i.pinimg.com/736x/1f/7d/ec/1f7dece945d75e9b44ad28951c83f93c.jpg", position:"Main Rapper, Sub Vocalist", zodiac:"Scorpio ♏", desc:"Bisa bicara 3 bahasa dan punya vibes 'hot girl' yang kuat."},
{name:"Winter", group:"aespa", img:"https://i.pinimg.com/736x/91/5d/7c/915d7c49467fa2838564269393288e78.jpg", position:"Lead Vocalist, Lead Dancer", zodiac:"Capricorn ♑", desc:"Suaranya sangat stabil saat live dan sangat suka makanan manis."},
{name:"Ningning", group:"aespa", img:"https://i.pinimg.com/736x/8a/aa/58/8aaa58fdd0135e0773f7b349b198a00f.jpg", position:"Main Vocalist, Maknae", zodiac:"Scorpio ♏", desc:"Punya vokal power yang luar biasa dan hobi menggambar."},

// BABYMONSTER
{name:"Ahyeon", group:"babymonster", img:"https://i.pinimg.com/1200x/5c/e6/5a/5ce65a55a0fd145e3632d3794105b941.jpg", position:"Lead Vocal, Lead Rapper, Center", zodiac:"Aries ♈", desc:"All-rounder berbakat yang viral karena cover lagu 'Dangerously'."},
{name:"Ruka", group:"babymonster", img:"https://i.pinimg.com/736x/c8/62/65/c862652b783505840a017a17b840ee10.jpg", position:"Main Dancer, Lead Rapper", zodiac:"Pisces ♓", desc:"Member tertua di grup dan jago banget nge-dance hip-hop."},
{name:"Pharita", group:"babymonster", img:"https://i.pinimg.com/1200x/35/1a/dc/351adc1a44d15f2e694f836cc0dfe63b.jpg", position:"Lead Vocalist", zodiac:"Virgo ♍", desc:"Punya proporsi tubuh seperti model dan suara khas Disney Princess."},
{name:"Rami", group:"babymonster", img:"https://i.pinimg.com/736x/7f/5e/82/7f5e8238a959342910d3a9aaf0246427.jpg", position:"Main Vocalist, Lead Dancer", zodiac:"Libra ♎", desc:"Punya jangkauan vokal dan teknik menyanyi yang luar biasa."},
{name:"Rora", group:"babymonster", img:"https://i.pinimg.com/736x/1d/80/59/1d8059dcbb54ef193eacfb89ee416973.jpg", position:"Lead Vocalist, Visual", zodiac:"Leo ♌", desc:"Punya aura elegan dan sebelumnya adalah member grup cilik U.SSO Girl."},
{name:"Asa", group:"babymonster", img:"https://i.pinimg.com/736x/05/26/14/052614ea26aefe760b52fb00f8bab6d8.jpg", position:"Main Rapper, Main Dancer", zodiac:"Aries ♈", desc:"Ace yang bisa nulis lirik rap sendiri dan sangat perfeksionis."},
{name:"Chiquita", group:"babymonster", img:"https://i.pinimg.com/1200x/af/05/78/af0578f83f446b8646c238a7db52afaa.jpg", position:"Lead Vocalist, Maknae", zodiac:"Aquarius ♒", desc:"Trainee paling singkat tapi punya bakat bintang yang sangat natural."},

// Hearts2Hearts 
{name:"Jiwoo", group:"Hearts2Hearts", img:"https://i.pinimg.com/736x/b3/1f/dd/b31fdde7d506ce445878190a6e092ed9.jpg", position:"Main Vocalist", zodiac:"Gemini ♊", desc:"Suka banget minum boba tiap habis selesai latihan koreografi."},
{name:"Carmen", group:"Hearts2Hearts", img:"https://i.pinimg.com/736x/27/32/dd/2732dd462e99e68b03d88f08a38d0165.jpg", position:"Main Dancer", zodiac:"Leo ♌", desc:"Selalu jadi moodmaker di grup dan jago masak nasi goreng."},
{name:"A-na", group:"Hearts2Hearts", img:"https://i.pinimg.com/736x/a8/00/64/a80064744496560908776a3a354f5946.jpg", position:"Lead Rapper", zodiac:"Virgo ♍", desc:"Kelihatan dingin di luar tapi sebenarnya paling cengeng kalau nonton film sedih."},
{name:"Ian", group:"Hearts2Hearts", img:"https://i.pinimg.com/736x/1b/53/d1/1b53d138e730d0ec43735de3bfc79de2.jpg", position:"Lead Dancer, Visual", zodiac:"Libra ♎", desc:"Sangat fotogenik dan kolektor kamera analog antik."},
{name:"Stella", group:"Hearts2Hearts", img:"https://i.pinimg.com/736x/82/49/40/824940162ab18edd9012a39edd3725d9.jpg", position:"Sub Vocalist", zodiac:"Pisces ♓", desc:"Suka dengerin lagu klasik sebelum tidur biar rileks."},
{name:"Juun", group:"Hearts2Hearts", img:"https://i.pinimg.com/736x/1b/f9/d3/1bf9d39e65c110fc4a6b91df32366166.jpg", position:"Lead Vocalist", zodiac:"Taurus ♉", desc:"Punya koleksi lebih dari 50 topi beanie di lemarinya."},
{name:"Yuha", group:"Hearts2Hearts", img:"https://i.pinimg.com/1200x/cc/8e/93/cc8e93974e6497322dc6216df001d260.jpg", position:"Main Rapper", zodiac:"Scorpio ♏", desc:"Jago main drum dan sering aransemen ulang lagu grup."},
{name:"Ye-on", group:"Hearts2Hearts", img:"https://i.pinimg.com/736x/2c/e4/f3/2ce4f3fa2fb7cada05ab40695b8d0e08.jpg", position:"Maknae, Lead Dancer", zodiac:"Sagittarius ♐", desc:"Paling usil dan sering gangguin unnie-unnie nya pas lagi tidur."},

// KiiiKiii 
{name:"Jiyu", group:"KiiiKiii", img:"https://i.pinimg.com/736x/ea/b3/98/eab398d10b11958014cadceb5282ee4e.jpg", position:"Leader, Main Vocal", zodiac:"Capricorn ♑", desc:"Sangat perfeksionis tapi diam-diam suka ngemil cokelat malam-malam."},
{name:"Haum", group:"KiiiKiii", img:"https://i.pinimg.com/736x/81/77/1b/81771b1bd8568b5fb8d01facb733ff4a.jpg", position:"Main Dancer, Center", zodiac:"Aquarius ♒", desc:"Pernah menang kejuaraan street dance sebelum debut."},
{name:"Leesol", group:"KiiiKiii", img:"https://i.pinimg.com/1200x/03/b9/64/03b964a1ef7bbe177b00bad990829d85.jpg", position:"Lead Rapper, Visual", zodiac:"Cancer ♋", desc:"Hobi banget fotografi dan sering jadi fotografer dadakan buat grup."},
{name:"Sui", group:"KiiiKiii", img:"https://i.pinimg.com/1200x/e9/ce/ea/e9ceea32ecc249a3f4ec5622f89c1786.jpg", position:"Lead Vocalist", zodiac:"Libra ♎", desc:"Punya suara yang sangat lembut bak madu dan jago main gitar akustik."},
{name:"Kya", group:"KiiiKiii", img:"https://i.pinimg.com/736x/e7/19/2c/e7192cbd84e9cd3252e3c20acef2b061.jpg", position:"Maknae, Main Rapper", zodiac:"Aries ♈", desc:"Walau termuda, auranya paling karismatik saat di atas panggung."}
];

function openModal(name) {
    const m = members.find(x => x.name === name);
    if(!m) return;
    
    document.getElementById('modal-img').src = m.img;
    document.getElementById('modal-name').innerText = m.name;
    document.getElementById('modal-group').innerText = m.group.toUpperCase();
    
    const color = groupColors[m.group] || 'var(--accent)';
    document.getElementById('modal-name').style.color = color;
    document.getElementById('modal-img').style.borderColor = color;
    document.getElementById('modal-img').style.boxShadow = `0 0 20px ${color}80`; 
    
    document.getElementById('modal-desc').innerHTML = `
        <p style="margin-bottom: 8px;">🌟 Posisi: ${m.position}</p>
        <p style="margin-bottom: 12px;">💫 Zodiak: ${m.zodiac}</p>
        <div style="border-top: 1px dashed rgba(255,255,255,0.3); padding-top: 12px;">
            <i>"${m.desc}"</i>
        </div>
    `;
    
    document.getElementById('idolModal').classList.add('active');
}

function closeModal(e, force = false) {
    if (force || e.target.id === 'idolModal') {
        document.getElementById('idolModal').classList.remove('active');
    }
}

function renderHome(){
 document.querySelectorAll('#main-view .grid').forEach(g=>g.innerHTML="");
 members.forEach(m=>{
  const isFav = favorites.includes(m.name);
  const card=`<div class="card">
   <div class="heart" onclick="toggleFav(event, '${m.name}')">${isFav?'💖':'🤍'}</div>
   <img src="${m.img}" loading="lazy" onclick="openModal('${m.name}')">
   <h3 onclick="openModal('${m.name}')">${m.name}</h3>
  </div>`;
  const container = document.getElementById(m.group);
  if(container) container.innerHTML+=card;
 });
}

function setFavFilter(group) {
    currentFavFilter = group;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('filter-' + group).classList.add('active');
    renderFavorites();
}

function renderFavorites() {
  const container = document.getElementById('favorites-container');
  container.innerHTML = "";
  
  if (favorites.length === 0) {
      container.innerHTML = "<p style='grid-column: 1 / -1; font-size: 1.2em; color: #a1a1aa;'>Belum ada idol favorit.</p>";
      return;
  }

  const favMembers = members.filter(m => 
      favorites.includes(m.name) && 
      (currentFavFilter === 'all' || m.group === currentFavFilter)
  );
  
  if (favMembers.length === 0) {
      container.innerHTML = `<p style='grid-column: 1 / -1; font-size: 1.2em; color: #a1a1aa;'>Belum ada bias dari grup ini.</p>`;
      return;
  }

  favMembers.forEach(m=>{
    const card=`<div class="card">
     <div class="heart" onclick="toggleFav(event, '${m.name}')">💖</div>
     <img src="${m.img}" loading="lazy" onclick="openModal('${m.name}')">
     <h3 onclick="openModal('${m.name}')">${m.name}</h3>
     <p style="margin: 5px 0 0 0; font-size: 0.85em; color: var(--accent); text-transform: uppercase;">${m.group}</p>
    </div>`;
    container.innerHTML += card;
  });
}

function createHeartBurst(x, y) {
    const particleCount = 8;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'burst-heart';
        particle.innerText = '💖';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 30; 
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 600);
    }
}

// Fitur simpan data dimatikan, klik hanya memunculkan efek love saja!
function toggleFav(e, name){
 e.stopPropagation(); 

 const x = e.clientX || e.touches[0].clientX;
 const y = e.clientY || e.touches[0].clientY;
 createHeartBurst(x, y);
}

function showHome() {
    currentView = 'home';
    const mainView = document.getElementById('main-view');
    const favView = document.getElementById('fav-view');
    
    mainView.classList.remove('hidden');
    favView.classList.add('hidden');
    
    mainView.classList.remove('fade-in');
    void mainView.offsetWidth; 
    mainView.classList.add('fade-in');

    document.getElementById('groupNav').style.display = 'inline-flex';
    document.getElementById('bg-hearts').classList.remove('show-hearts');
    
    document.getElementById('navHome').classList.add('active');
    document.getElementById('navFav').classList.remove('active');
    
    renderHome();
}

function showFavorites() {
    currentView = 'favorites';
    const mainView = document.getElementById('main-view');
    const favView = document.getElementById('fav-view');
    
    mainView.classList.add('hidden');
    favView.classList.remove('hidden');
    
    favView.classList.remove('fade-in');
    void favView.offsetWidth; 
    favView.classList.add('fade-in');

    document.getElementById('groupNav').style.display = 'none'; 
    document.getElementById('bg-hearts').classList.add('show-hearts'); 
    
    document.getElementById('navHome').classList.remove('active');
    document.getElementById('navFav').classList.add('active');
    
    renderFavorites();
}

/* =========================================
   LOGIKA MINI PLAYER & CUSTOM SELECT BARU 
   ========================================= */
const player = document.getElementById('audioPlayer');
const select = document.getElementById('songSelect');
const cover = document.getElementById('cover');
const vinyl = document.querySelector('.vinyl');
const bgBlur = document.getElementById('bg-blur');
const miniPlayerBox = document.getElementById('miniPlayer');
const toggleBtn = document.getElementById('togglePlayerBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volumeSlider');
const visualizer = document.getElementById('visualizer');

const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationTimeEl = document.getElementById('durationTime');
const dynamicBg = document.getElementById('miniPlayerDynamicBg');

// Custom Select Elements
const customSelectWrapper = document.getElementById('customSelectWrapper');
const customSelectTrigger = document.getElementById('customSelectTrigger');
const customOptionsContainer = document.getElementById('customOptionsContainer');
const selectedSongText = document.getElementById('selectedSongText');

// Generate Custom Options dari tag select asli
function buildCustomSelect() {
    let optionsHTML = '';
    Array.from(select.options).forEach((opt, index) => {
        if(opt.value === "") return; // lewati opsi placeholder kosong
        optionsHTML += `
            <div class="custom-option" data-index="${index}">
                <img src="${opt.getAttribute('data-cover')}" alt="cover">
                <span>${opt.text}</span>
            </div>
        `;
    });
    customOptionsContainer.innerHTML = optionsHTML;
}
buildCustomSelect();

// Logika Buka/Tutup Custom Dropdown
customSelectTrigger.addEventListener('click', (e) => {
    e.stopPropagation(); // Mencegah trigger fungsi drag
    customSelectWrapper.classList.toggle('open');
});

// Tutup dropdown kalau klik di luar
document.addEventListener('click', (e) => {
    if (!customSelectWrapper.contains(e.target)) {
        customSelectWrapper.classList.remove('open');
    }
});

// Logika saat list lagu dipilih
customOptionsContainer.addEventListener('click', (e) => {
    const optionItem = e.target.closest('.custom-option');
    if(optionItem) {
        const index = optionItem.getAttribute('data-index');
        select.selectedIndex = index;
        customSelectWrapper.classList.remove('open');
        loadSongData(true);
    }
});


function formatTime(seconds) {
    if(isNaN(seconds)) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
}

toggleBtn.addEventListener('click', () => {
  miniPlayerBox.classList.toggle('minimized');
  if (miniPlayerBox.classList.contains('minimized')) {
    toggleBtn.innerText = '🔼';
    customSelectWrapper.classList.remove('open'); // tutup dropdown kalau diminimize
  } else {
    toggleBtn.innerText = '🔽';
  }
});

function loadSongData(isAutoPlay = true) {
  const selected = select.options[select.selectedIndex];
  
  progressBar.value = 0;
  currentTimeEl.innerText = "00:00";
  durationTimeEl.innerText = "00:00";
  
  if(select.value !== ""){
    player.src = select.value;
    const coverUrl = selected.getAttribute('data-cover');
    const dominantColor = selected.getAttribute('data-color');
    
    document.documentElement.style.setProperty('--dynamic-color', dominantColor);
    
    cover.src = coverUrl;
    bgBlur.style.backgroundImage = `url(${coverUrl})`;
    bgBlur.style.opacity = "1";
    miniPlayerBox.style.boxShadow = `0 15px 40px ${dominantColor}66`;
    
    dynamicBg.style.backgroundImage = `url(${coverUrl})`;
    dynamicBg.style.opacity = "1"; 
    
    // Update Custom Select UI (Teks dan Highlight)
    selectedSongText.innerText = selected.text;
    document.querySelectorAll('.custom-option').forEach(el => el.classList.remove('selected'));
    const selectedCustomOption = document.querySelector(`.custom-option[data-index="${select.selectedIndex}"]`);
    if(selectedCustomOption) selectedCustomOption.classList.add('selected');

    if(isAutoPlay) {
       player.play().catch(()=>{ console.log("Tekan play manual jika autoplay diblokir browser"); });
    }
  } else {
    // Keadaan Default (Saat lagu dimatikan)
    cover.src = "image_0.png"; // Kembalikan ke kaset default
    bgBlur.style.opacity = "0";
    document.documentElement.style.setProperty('--dynamic-color', 'var(--accent)');
    dynamicBg.style.backgroundImage = "";
    dynamicBg.style.opacity = "0"; 
    miniPlayerBox.style.boxShadow = "0 20px 40px rgba(0,0,0,0.6)";
    
    selectedSongText.innerText = "Pilih Lagu... 🎶";
    document.querySelectorAll('.custom-option').forEach(el => el.classList.remove('selected'));

    player.pause();
    player.src = "";
  }
}

playPauseBtn.addEventListener('click', () => {
    if (player.src && player.src !== window.location.href) {
        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    } else {
        alert("Pilih lagu dari menu terlebih dahulu! 🎶");
        customSelectWrapper.classList.add('open');
    }
});

// Fitur Tombol Previous
prevBtn.addEventListener('click', () => {
    if(select.options.length <= 1) return;
    let nextIndex = select.selectedIndex - 1;
    if (nextIndex < 1) nextIndex = select.options.length - 1; 
    select.selectedIndex = nextIndex;
    loadSongData(true);
});

// Fitur Tombol Next
nextBtn.addEventListener('click', () => {
    if(select.options.length <= 1) return;
    let nextIndex = select.selectedIndex + 1;
    if (nextIndex >= select.options.length) nextIndex = 1; 
    select.selectedIndex = nextIndex;
    loadSongData(true);
});


player.addEventListener('play', () => {
    vinyl.style.animationPlayState = "running";
    playPauseBtn.innerText = '⏸️'; 
    visualizer.classList.add('active'); 
});

player.addEventListener('pause', () => {
    vinyl.style.animationPlayState = "paused";
    playPauseBtn.innerText = '▶️'; 
    visualizer.classList.remove('active'); 
});

player.addEventListener('timeupdate', () => {
    if (!isNaN(player.duration)) {
        progressBar.value = player.currentTime;
        currentTimeEl.innerText = formatTime(player.currentTime);
    }
});

player.addEventListener('loadedmetadata', () => {
    progressBar.max = player.duration;
    durationTimeEl.innerText = formatTime(player.duration);
});

progressBar.addEventListener('input', () => {
    if (player.src) {
        player.currentTime = progressBar.value;
    }
});

volumeSlider.addEventListener('input', (e) => {
    player.volume = e.target.value;
});

player.addEventListener('ended', function() {
    nextBtn.click(); // Langsung mainkan lagu selanjutnya otomatis
});

/* Drag Player Logic */
let isDragging = false;
let currentX; let currentY; let initialX; let initialY;
let xOffset = 0; let yOffset = 0;

miniPlayerBox.addEventListener("touchstart", dragStart, { passive: false });
document.addEventListener("touchend", dragEnd, { passive: false });
document.addEventListener("touchmove", drag, { passive: false });

miniPlayerBox.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragEnd);
document.addEventListener("mousemove", drag);

function dragStart(e) {
  const targetTag = e.target.tagName.toLowerCase();
  
  // Cegah drag kalau yang diklik adalah tombol, slider, atau area custom dropdown
  if (['button', 'input', 'span', 'img'].includes(targetTag) || 
      e.target.closest('button') || 
      e.target.closest('.custom-select-wrapper')) {
      return; 
  }
  
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }
  isDragging = true;
}

function dragEnd(e) {
  initialX = currentX; initialY = currentY;
  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault(); 
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }
    xOffset = currentX; yOffset = currentY;
    miniPlayerBox.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
  }
}

setInterval(() => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const symbols = ['⭐', '🎵', '✨', '🎶', '🤍'];
    particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (Math.random() * 5 + 5) + "s";
    particle.style.fontSize = (Math.random() * 15 + 15) + "px";
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 10000);
}, 400); 

renderHome();