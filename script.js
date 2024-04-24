const start = document.querySelector(".start-button");

const startButton = document.querySelector(".start-button .mulai");

const undangButtonInBox = document.querySelector(".undang-inbox");
const undangButton = document.querySelector(".undang");
const kotakUndang = document.querySelector(".invite-box");

const banyu = document.querySelector(".banyu");
const keysha = document.querySelector(".keysha");
const ezar = document.querySelector(".ezar");
const luthfiyah = document.querySelector(".luthfiyah");
const zahara = document.querySelector(".zahara");
const checkBanyu = document.querySelector("#banyu");
const checkKeysha = document.querySelector("#keysha");
const checkEzar = document.querySelector("#ezar");

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const audio = document.querySelector("audio");
const bday = document.querySelector("#bday");

const kartuUcapan = document.querySelector(".kartu-ucapan");
const kartuUcapanContainer = document.querySelector(".kartu-ucapan .container");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    checkboxes[0].checked
      ? banyu.classList.add("visible")
      : banyu.classList.remove("visible");
    checkboxes[1].checked
      ? keysha.classList.add("visible")
      : keysha.classList.remove("visible");
    checkboxes[2].checked
      ? ezar.classList.add("visible")
      : ezar.classList.remove("visible");
    checkboxes[3].checked
      ? luthfiyah.classList.add("visible")
      : luthfiyah.classList.remove("visible");
  });
});

startButton.addEventListener("click", () => {
  start.style.display = "none";
  audio.muted = true;

  setTimeout(() => {
    if (
      checkboxes[0].checked &&
      checkboxes[1].checked &&
      checkboxes[2].checked &&
      checkboxes[3].checked
    ) {
      bday.play();
      banyu.classList.add("banyu-keysha-ezar-luthfiyah");
      keysha.classList.add("banyu-keysha-ezar-luthfiyah");
      ezar.classList.add("banyu-keysha-ezar-luthfiyah");
      zahara.classList.add("banyu-keysha-ezar-luthfiyah");
      luthfiyah.classList.add("banyu-keysha-ezar-luthfiyah");
      setTimeout(() => {
        kartuUcapan.style.display = "block";
        const h1 = document.createElement("h1");
        h1.textContent = "Happy Ending";
        kartuUcapanContainer.append(h1);
        const p = document.createElement("p");
        p.textContent =
          "selamat ulang tahun Zahara! Terima kasih sudah mengundang teman-temanmu ini yang waduh sekali kelakuannya. Semoga Zahara panjang umur, sehat selalu, dilancarkan rezekinya, bahagia dan sukses selalu. Aamiin...";
        kartuUcapanContainer.append(p);
        const btn = document.createElement("button");
        btn.textContent = "Kembali";
        kartuUcapanContainer.append(btn);
        btn.addEventListener("click", () => {
          window.location.reload();
        });
      }, 5000);
    } else if (
      (checkboxes[0].checked &&
        checkboxes[1].checked &&
        checkboxes[2].checked) ||
      (checkboxes[1].checked &&
        checkboxes[2].checked &&
        checkboxes[3].checked) ||
      (checkboxes[0].checked && checkboxes[2].checked && checkboxes[3].checked)
    ) {
      bday.play();
      banyu.classList.add("banyu-keysha-ezar-luthfiyah");
      keysha.classList.add("banyu-keysha-ezar-luthfiyah");
      ezar.classList.add("banyu-keysha-ezar-luthfiyah");
      zahara.classList.add("banyu-keysha-ezar-luthfiyah");
      luthfiyah.classList.add("banyu-keysha-ezar-luthfiyah");
      setTimeout(() => {
        kartuUcapan.style.display = "block";
        const h1 = document.createElement("h1");
        h1.textContent = "Why Ending";
        kartuUcapanContainer.append(h1);
        const p = document.createElement("p");
        p.textContent =
          "Teman-temanmu senang sekali karena mereka diundang ke ulang tahunnya Zahara. Tapi, salah satu temanmu yang tidak diundang sedang menangis di rumahnya karena tak diundang.";
        kartuUcapanContainer.append(p);
        const btn = document.createElement("button");
        btn.textContent = "Kembali";
        kartuUcapanContainer.append(btn);
        btn.addEventListener("click", () => {
          window.location.reload();
        });
      }, 5000);
    } else if (
      (checkboxes[0].checked && checkboxes[1].checked) ||
      (checkboxes[0].checked && checkboxes[2].checked) ||
      (checkboxes[0].checked && checkboxes[3].checked) ||
      (checkboxes[1].checked && checkboxes[2].checked) ||
      (checkboxes[1].checked && checkboxes[3].checked) ||
      (checkboxes[2].checked && checkboxes[3].checked)
    ) {
      bday.play();
      banyu.classList.add("banyu-keysha-ezar-luthfiyah");
      keysha.classList.add("banyu-keysha-ezar-luthfiyah");
      ezar.classList.add("banyu-keysha-ezar-luthfiyah");
      zahara.classList.add("banyu-keysha-ezar-luthfiyah");
      luthfiyah.classList.add("banyu-keysha-ezar-luthfiyah");
      setTimeout(() => {
        kartuUcapan.style.display = "block";
        const h1 = document.createElement("h1");
        h1.textContent = "Why!!! Ending";
        kartuUcapanContainer.append(h1);
        const p = document.createElement("p");
        p.textContent =
          "2 temanmu senang sekali karena mereka diundang ke ulang tahunnya Zahara. Tapi, 2 temanmu yang lain sedang membicarakan kejelekanmu karena mereka tak diundang oleh Zahara.";
        kartuUcapanContainer.append(p);
        const btn = document.createElement("button");
        btn.textContent = "Kembali";
        kartuUcapanContainer.append(btn);
        btn.addEventListener("click", () => {
          window.location.reload();
        });
      }, 5000);
    } else if (checkboxes[0].checked) {
      setTimeout(() => {
        kartuUcapan.style.display = "block";
        const h1 = document.createElement("h1");
        h1.textContent = "Awkward Ending";
        kartuUcapanContainer.append(h1);
        const p = document.createElement("p");
        p.textContent =
          "Banyu merasa senang diundang oleh Zahara. Tetapi karena mereka berdua sama-sama pendiam, suasananya menjadi cangung dan mereka berdua tidak tahu mau membicarakan apa. Ezar dan Keysha sedang bertarung di WWE. Luthfiyah sedang menonton anime.";
        kartuUcapanContainer.append(p);
        const btn = document.createElement("button");
        btn.textContent = "Kembali";
        kartuUcapanContainer.append(btn);
        btn.addEventListener("click", () => {
          window.location.reload();
        });
      }, 5000);
    } else if (checkboxes[1].checked) {
      bday.play();
      keysha.classList.add("banyu-keysha-ezar-luthfiyah");
      zahara.classList.add("banyu-keysha-ezar-luthfiyah");
      setTimeout(() => {
        kartuUcapan.style.display = "block";
        const h1 = document.createElement("h1");
        h1.textContent = "Paskibra Ending";
        kartuUcapanContainer.append(h1);
        const p = document.createElement("p");
        p.textContent =
          "Keysha merasa senang diundang oleh Zahara. Zahara bertanya sedikit tentang paskibra kepada Keysha. Tetapi lama-kelamaan Keysha malah melatih Zahara cara menjadi paskibra di taman. Zahara pun pingsan. Ezar sedang berenang. Banyu sedang nolep. Luthfiyah sedang menonton anime.";
        kartuUcapanContainer.append(p);
        const btn = document.createElement("button");
        btn.textContent = "Kembali";
        kartuUcapanContainer.append(btn);
        btn.addEventListener("click", () => {
          window.location.reload();
        });
      }, 5000);
    } else if (checkboxes[2].checked) {
      setTimeout(() => {
        const cry = document.getElementById("cry");
        const laugh = document.getElementById("laugh");
        cry.play();
        laugh.play();
        kartuUcapan.style.display = "block";
        const h1 = document.createElement("h1");
        h1.textContent = "Bully Ending";
        kartuUcapanContainer.append(h1);
        const p = document.createElement("p");
        p.textContent =
          "Ezar merasa senang diundang oleh Zahara. Tiba-tiba ezar terpikirkan rencana jahat untuk membully Zahara. Zahara pun menangis dan mengadu mamah Uus. Banyu sedang nolep. Luthfiyah sedang menonton anime. Keysha sedang latihan paskibra.";
        kartuUcapanContainer.append(p);
        const btn = document.createElement("button");
        btn.textContent = "Kembali";
        kartuUcapanContainer.append(btn);
        btn.addEventListener("click", () => {
          window.location.reload();
        });
      }, 5000);
    } else if (checkboxes[3].checked) {
      bday.play();
      zahara.classList.add("banyu-keysha-ezar-luthfiyah");
      luthfiyah.classList.add("banyu-keysha-ezar-luthfiyah");
      setTimeout(() => {
        kartuUcapan.style.display = "block";
        const h1 = document.createElement("h1");
        h1.textContent = "Nobar Ending";
        kartuUcapanContainer.append(h1);
        const p = document.createElement("p");
        p.textContent =
          "Luthfiyah merasa senang diundang oleh Zahara. Tiba-tiba Luthfiyah mengajak Zahara untuk menonton anime bareng. Zahara pun mengiyakan. Banyu sedang nolep. Ezar sedang berenang. Keysha sedang latihan paskibra.";
        kartuUcapanContainer.append(p);
        const btn = document.createElement("button");
        btn.textContent = "Kembali";
        kartuUcapanContainer.append(btn);
        btn.addEventListener("click", () => {
          window.location.reload();
        });
      }, 5000);
    }
  }, 2000);
});

undangButton.addEventListener("click", () => {
  kotakUndang.classList.toggle("kotak-undang-active");
});
undangButtonInBox.addEventListener("click", () => {
  kotakUndang.classList.toggle("kotak-undang-active");
});
