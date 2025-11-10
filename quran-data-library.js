// quran-data-library.js
const getQuranData = async () => {
  try {
    const response = await fetch("https://api.alquran.cloud/v1/quran/quran-uthmani
");
    const data = await response.json();
    return data.data.surahs; // يحتوي على 114 سورة
  } catch (error) {
    console.error("❌ فشل تحميل بيانات القرآن:", error);
    return [];
  }
};
