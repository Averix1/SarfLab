let kelimeler = [];

// JSON yükleme
fetch("data/kelimeler.json")
  .then(res => res.json())
  .then(data => {
      kelimeler = data;

      document.getElementById("searchInput").addEventListener("input", function() {
          let q = this.value.trim();
          if (q === "") {
              document.getElementById("wordBox").innerHTML = "";
              return;
          }
          let filtered = kelimeler.filter(k => k.kelime.includes(q));
          display(filtered);
      });
  })
  .catch(err => console.error("JSON yüklenirken hata:", err));

function display(list) {
    let area = document.getElementById("wordBox");
    area.innerHTML = "";

    list.forEach(w => {
        area.innerHTML += `
        <div class="card">
            <h2>${w.kelime}</h2>
            <div class="table">
                <div class="box"><div class="box-title">Türkçe</div>${w.turkce}</div>
                <div class="box"><div class="box-title">Mâzî</div>${w.mazi}</div>
                <div class="box"><div class="box-title">Muzâri</div>${w.muzari}</div>
                <div class="box"><div class="box-title">Masdar</div>${w.masdar}</div>
                <div class="box"><div class="box-title">Emir</div>${w.emir}</div>
                <div class="box"><div class="box-title">İsm-i Fâil</div>${w.fail}</div>
                <div class="box"><div class="box-title">İsm-i Mef'ûl</div>${w.meful}</div>
            </div>
        </div>
        `;
    });
}

// ===== Splash Animasyonu =====
window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    const sarf = document.getElementById("sarf");
    const emsile = document.getElementById("emsile");

    setTimeout(() => {
        sarf.style.transform = "translateX(-10px)"; // Telefon ekranına göre az kaydırdım
        sarf.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        emsile.style.opacity = 1;
    }, 1500);

    setTimeout(() => {
        splash.classList.add("fade-out");
        setTimeout(() => splash.style.display = "none", 800);
    }, 3500);
});
