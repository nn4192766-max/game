function displaySurah(index) {
  if (index < 0 || index >= allSurahs.length) return;

  const surah = allSurahs[index];
  currentSurahTitle.textContent = surah.name;
  currentSurahDetails.textContent = `عدد الآيات: ${surah.ayahs.length}`;
  quranAyaatContainer.innerHTML = '';

  // إضافة البسملة لكل السور ما عدا التوبة
  if (surah.number !== 9) {
    const bismillah = document.createElement('p');
    bismillah.classList.add('bismillah');
    bismillah.textContent = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
    quranAyaatContainer.appendChild(bismillah);
  }

  // عرض الآيات
  surah.ayahs.forEach(aya => {
    const ayaItem = document.createElement('div');
    ayaItem.classList.add('aya-item');
    ayaItem.innerHTML = `
      <span class="aya-text">${aya.text}</span>
      <span class="aya-number">﴿${aya.numberInSurah}﴾</span>
    `;
    quranAyaatContainer.appendChild(ayaItem);
  });

  // تحديث التنقل
  prevSurahBtn.disabled = index === 0;
  nextSurahBtn.disabled = index === allSurahs.length - 1;
  quranAyaatContainer.scrollTo({ top: 0, behavior: 'smooth' });
}
