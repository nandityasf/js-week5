function openTab(tabName) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}
//OOP
class Pendaftar {
    constructor(nama, umur, uangSaku) {
      this.nama = nama;
      this.umur = umur;
      this.uangSaku = uangSaku;
    }
  }

  const pendaftarList = [];

  function validateForm() {
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSaku = parseInt(document.getElementById('uangSaku').value);

    if (nama.length < 10 || umur < 25 || uangSaku < 100000 || uangSaku > 100000000) {
      alert('mohon isi form dengan sesuai');
      return;
    }

    const pendaftar = new Pendaftar(nama, umur, uangSaku);
    pendaftarList.push(pendaftar);

    document.getElementById('nama').value = '';
    document.getElementById('umur').value = '';
    document.getElementById('uangSaku').value = '';

    updateListAndResume();
  }

  function updateListAndResume() {
    const pendaftarTable = document.getElementById('pendaftarTable');
    const pendaftarData = document.getElementById('pendaftarData');
    const averageUmur = document.getElementById('averageUmur');
    const averageUangSaku = document.getElementById('averageUangSaku');

    pendaftarData.innerHTML = '';

    let totalUmur = 0;
    let totalUangSaku = 0;

    for (const pendaftar of pendaftarList) {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${pendaftar.nama}</td><td>${pendaftar.umur}</td><td>${pendaftar.uangSaku}</td>`;
      pendaftarData.appendChild(row);

      totalUmur += pendaftar.umur;
      totalUangSaku += pendaftar.uangSaku;
    }

    const averageUmurValue = pendaftarList.length > 0 ? totalUmur / pendaftarList.length : 0;
    const averageUangSakuValue = pendaftarList.length > 0 ? totalUangSaku / pendaftarList.length : 0;

    averageUmur.textContent = averageUmurValue.toFixed(0);
    averageUangSaku.textContent = averageUangSakuValue.toFixed(0);
  }

  // tab aktif
  const tabs = document.querySelectorAll('.tabs li a');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const tabContentId = tab.getAttribute('href').replace('#', '');
      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(content => content.classList.add('hidden'));
      document.getElementById(tabContentId).classList.remove('hidden');
    });
  });
