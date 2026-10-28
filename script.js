/* ==========================================================
   Gullu Rahimova, portfolio script
   1. Settings   2. Static texts   3. Content data
   4. Rendering  5. Language switch   6. Start
   ========================================================== */


/* 1. Settings: change to 'az' to open the page in Azerbaijani first */
const DEFAULT_LANG = 'en';


/* 2. Azerbaijani versions of the texts written in index.html.
   Keys match the data-i attributes. English lives in the HTML itself. */
const AZ = {
  name: 'Güllü Rəhimova',
  n1: 'Fənlər', n2: 'Yanaşma', n3: 'Təcrübə', n4: 'Əlaqə',
  role: 'Ofis proqramları və informasiya texnologiyaları üzrə müəllim',
  lead: 'Ofis proqramları və İT fənlərini praktiki, tələbəyönümlü yanaşma ilə tədris edirəm. 2022-ci ildən bəri universitetdə, akademiyalarda və məktəbdə 600-dən çox tələbəyə dərs demişəm, hər dərsi öyrənənin səviyyəsinə və tempinə uyğun qururam.',
  b1: 'Mənə yazın', b2: 'LinkedIn profilim',
  nowh: 'Hazırda dərs deyirəm',
  h1s: 'Nə tədris edirəm',
  s1s: 'Fənni seçin, tələbələrin nə öyrəndiyini və harada tədris etdiyimi görün.',
  learn: 'Tələbələr nə öyrənir', taught: '',
  h2s: 'Necə dərs keçirəm', s2s: 'Hər kursu necə planlaşdırıb apardığım.',
  h3s: 'Təcrübə', s3s: 'Universitet, akademiya və məktəbdə tədris və qiymətləndirmə işi.',
  h4s: 'Bacarıq və alətlər',
  hedu: 'Təhsil', hcert: 'Sertifikatlar', hlang: 'Dillər',
  fh: 'İT və ya ofis bacarıqları üzrə müəllim axtarırsınız?'
};


/* 3. Content data. Each text is [English, Azerbaijani]; a plain string is used in both languages. */

/* Hero card: where she teaches now */
const NOW = [
  { n: ['Odlar Yurdu University', 'Odlar Yurdu Universiteti'], d: ['IT subjects', 'İT fənləri'] },
  { n: 'Div Academy', d: ['Office applications in the “Gələcəyi yanlar” and “Start” projects', 'Ofis proqramları, “Gələcəyi yanlar” və “Start” layihələri çərçivəsində'] },
  { n: 'DevHub Academy' }
];

/* Subject explorer: n = tab name, i = intro, t = what students learn, at = where it is taught */
const SUBJECTS = [
  {
    n: ['Office applications', 'Ofis proqramları'],
    i: ['Hands-on work in the programs students need every day, with a special focus on Excel.', 'Tələbələrin hər gün lazım olan proqramlarında praktiki iş, xüsusilə Excel-ə diqqət.'],
    t: [['Word documents', 'Word sənədləri'], ['Excel spreadsheets', 'Excel cədvəlləri'], ['PowerPoint presentations', 'PowerPoint təqdimatları'], ['Outlook and e-mail etiquette', 'Outlook və e-poçt etikası']],
    at: ['Odlar Yurdu University, Div Academy, British Academy, IT Brains Academy, DevHub Academy', 'Odlar Yurdu Universiteti, Div Academy, British Academy, İT Brains Academy, DevHub Academy ']
  },
  {
    n: ['IT fundamentals and programming', 'İT əsasları və proqramlaşdırma'],
    i: ['Safe, confident everyday work with computers and operating systems, plus university courses in applied and system programming.', 'Kompüterlər və əməliyyat sistemləri ilə təhlükəsiz və inamlı gündəlik iş, həmçinin tətbiqi və sistem proqramlaşdırma üzrə universitet kursları.'],
    t: [
      ['Internet security', 'İnternet təhlükəsizliyi'],
      ['Managing data', 'Verilənlərin idarə olunması'],
      ['Installing, configuring and managing software on Windows, Linux and macOS', 'Windows, Linux və macOS-da proqramların quraşdırılması, konfiqurasiyası və idarə edilməsi'],
      ['Solving software problems: error messages, incompatibility, licensing', 'Proqram problemlərinin həlli: səhv mesajları, uyğunsuzluq, lisenziya'],
      ['Applied programming', 'Tətbiqi proqramlaşdırma'],
      ['System programming', 'Sistem proqramlaşdırma']
    ],
    at: ['Odlar Yurdu University', 'Odlar Yurdu Universiteti']
  },
  {
    n: ['Data and analytics', 'Data və analitika'],
    i: ['Data analysis tools I have studied and now teach at the university.', 'Öyrəndiyim və hazırda universitetdə tədris etdiyim data analiz alətləri.'],
    t: ['Python', 'SQL', 'Power BI', 'Tableau'],
    at: ['Odlar Yurdu University', 'Odlar Yurdu Universiteti']
  },
  {
    n: ['Graphics and presentation', 'Qrafika və təqdimat'],
    i: ['Visual tools for designing materials and presenting ideas. My own toolkit includes Adobe Illustrator, CorelDraw and Canva.', 'Materiallar hazırlamaq və ideyaları təqdim etmək üçün vizual alətlər. Öz alətlərim arasında Adobe Illustrator, CorelDraw və Canva var.'],
    t: [['Graphic editors', 'Qrafik redaktorlar'], ['Presentation programs', 'Təqdimat proqramları']],
    at: ''
  },
  {
    n: ['Assessment and test design', 'Qiymətləndirmə və test tərtibi'],
    i: ['Clear ways to measure what students have learned.', 'Tələbələrin öyrəndiklərini ölçmək üçün aydın üsullar.'],
    t: [['Short quizzes', 'Qısa quizlər'], ['Midterm and final exams', 'Ara və yekun imtahanlar'], ['Project work', 'Layihə işləri'], ['Question banks for informatics', 'İnformatika üzrə baza suallar']],
    at: ['Odlar Yurdu University, Eduventure', 'Odlar Yurdu Universiteti, Eduventure']
  }
];

/* Approach: four steps */
const STEPS = [
  { h: ['Assess', 'Səviyyəni ölçürəm'], p: ['I get to know each student’s level and individual traits before planning.', 'Planlaşdırmazdan əvvəl hər tələbənin səviyyəsini və fərdi xüsusiyyətlərini tanıyıram.'] },
  { h: ['Plan', 'Plan qururam'], p: ['I prepare materials that fit the level and write individual learning plans.', 'Səviyyəyə uyğun materiallar və fərdi təlim planları hazırlayıram.'] },
  { h: ['Practice', 'Praktika edirik'], p: ['Practical tasks, interactive methods and modern online platforms keep lessons motivating.', 'Praktiki tapşırıqlar, interaktiv metodlar və müasir onlayn platformalar dərsi motivasiyaedici edir.'] },
  { h: ['Track', 'İnkişafı izləyirəm'], p: ['I follow each student’s pace of progress and keep the teaching focused on results.', 'Hər tələbənin inkişaf sürətini izləyir və tədrisi nəticəyönümlü saxlayıram.'] }
];

/* Experience, newest first. r = role, o = organization, d = dates, b = bullet points (optional) */
const JOBS = [
  {
    r: ['Instructor', 'Müəllim'], o: 'DevHub Academy',
    d: ['Aug 2026 – present', 'Avq 2026 – hazırda']
  },
  {
    r: ['IT Instructor', 'İnformasiya Texnologiyaları üzrə müəllim'],
    o: ['Odlar Yurdu University, Baku', 'Odlar Yurdu Universiteti, Bakı'],
    d: ['Nov 2025 – present', 'Noy 2025 – hazırda'],
    b: [
      ['Teach Office Applications, IT Fundamentals, Applied Programming, System Programming and other IT subjects.', '“Ofis proqramları”, “İnformasiya Texnologiyalarının Əsasları”, “Tətbiqi proqramlaşdırma”, “Sistem proqramlaşdırma” və digər İT fənlərini tədris edirəm.'],
      ['Prepare and grade short quizzes, midterms, project work and final exams.', 'Qısa quizlər, ara imtahan, layihə işləri və yekun imtahan sənədlərini hazırlayır və yoxlayıram.'],
      ['Use modern technologies and give practical tasks in Word, Excel, PowerPoint, internet security, e-mail etiquette and data management.', 'Müasir texnologiyalardan istifadə edir, Word, Excel, PowerPoint, internet təhlükəsizliyi, e-poçt etikası və verilənlərin idarə olunması üzrə praktiki tapşırıqlar verirəm.']
    ]
  },
  {
    r: ['Office Applications Instructor', 'Ofis proqramları üzrə müəllim'], o: 'Div Academy',
    d: ['Nov 2025 – present', 'Noy 2025 – hazırda'],
    b: [['Teach office applications within the “Gələcəyi yanlar” and “Start” projects.', '“Gələcəyi yanlar” və “Start” layihələri çərçivəsində ofis proqramlarını tədris edirəm.']]
  },
  {
    r: ['Office Applications Instructor', 'Ofis proqramları üzrə müəllim'], o: 'British Academy MMC',
    d: ['May 2025 – Sep 2025', 'May 2025 – Sen 2025'],
    b: [
      ['Led lectures and practical sessions on computer programs: Microsoft Office, graphic editors and presentation software.', 'Kompüter proqramları üzrə mühazirə və praktiki məşğələlər keçmişəm: Microsoft Office, qrafik redaktorlar və təqdimat proqramları.'],
      ['Taught installing, configuring and managing software on Windows, Linux and macOS.', 'Windows, Linux və macOS-da proqramların quraşdırılması, konfiqurasiyası və idarə edilməsini öyrətmişəm.'],
      ['Prepared and graded tests, assignments, project work and exams.', 'Testlər, tapşırıqlar, layihə işləri və imtahan materialları hazırlayıb yoxlamışam.'],
      ['Solved students’ software problems (error messages, incompatibility, licensing) and gave technical support.', 'Tələbələrin proqram problemlərini (səhv mesajları, uyğunsuzluq, lisenziya) həll edib texniki dəstək göstərmişəm.']
    ]
  },
  {
    r: ['Expert Teacher (Test Developer)', 'Ekspert müəllim (test tərtibçi)'],
    o: ['Eduventure MMC, Baku', 'Eduventure MMC, Bakı'],
    d: ['Feb 2025 – Jun 2026', 'Fev 2025 – İyn 2026'],
    b: [['Created base questions for the informatics subject.', 'İnformatika fənni üzrə baza suallar yaratmışam.']]
  },
  {
    r: ['Instructor', 'Müəllim'], o: 'İT Brains Academy MMC',
    d: ['Aug 2023 – Jan 2026', 'Avq 2023 – Yan 2026']
  },
  {
    r: ['Informatics Teacher', 'İnformatika müəllimi'],
    o: ['Lachin School No. 19, Eastern Zangezur Education Department', '19 nömrəli Laçın məktəbi, Şərqi Zəngəzur Təhsil İdarəsi'],
    d: ['Sep 2022 – Jun 2023', 'Sen 2022 – İyn 2023']
  }
];

/* Skills: groups of chips */
const SKILLS = [
  { h: ['Teaching', 'Tədris'], c: [['Assessment methods', 'Qiymətləndirmə metodları'], ['Written and spoken communication', 'Yazılı və şifahi kommunikasiya'], ['Creativity and motivation', 'Yaradıcılıq və motivasiya'], ['Organization', 'Təşkilatçılıq'], ['Initiative', 'İnisiativ'], ['Patience and adaptability', 'Səbr və uyğunlaşma']] },
  { h: ['Office and systems', 'Ofis və sistemlər'], c: ['MS Windows 7/10/11', ['MS Office, especially Excel', 'MS Office, xüsusən Excel']] },
  { h: ['Data', 'Data'], c: ['Python', 'SQL', 'Power BI', 'Tableau'] },
  { h: ['Design', 'Dizayn'], c: ['Adobe Illustrator', 'CorelDraw', 'Canva'] }
];

/* Education, certificates, languages: h = title, p = lines under it */
const EDU = [
  { h: ['Master’s degree, Management Information Systems', 'Magistr, İdarəetmə İnformasiya Sistemləri'], p: [['Odlar Yurdu University, Baku', 'Odlar Yurdu Universiteti, Bakı'], ['Sep 2020 – Jun 2022', 'Sen 2020 – İyn 2022']] },
  { h: ['Bachelor’s degree, Informatics Teaching', 'Bakalavr, İnformatika müəllimliyi'], p: [['Ganja State University, Ganja', 'Gəncə Dövlət Universiteti, Gəncə'], ['Sep 2016 – Jun 2020', 'Sen 2016 – İyn 2020']] }
];
const CERTS = [
  { h: ['Civil Service, Category BB', 'Dövlət Qulluğu, BB kateqoriyası'], p: [] },
  { h: ['Data Analytics', 'Data Analitika'], p: ['İT Brains Academy'] }
];
const LANGS = [
  { h: ['Azerbaijani', 'Azərbaycan dili'], p: [['Native', 'Ana dili']] },
  { h: ['English', 'İngilis dili'], p: ['A2'] },
  { h: ['Russian', 'Rus dili'], p: ['A2'] }
];


/* Helpers and state */
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

let lang = 'en';
let current = 0;

/* Pick the text for the current language */
const tx = value => Array.isArray(value) ? (value[lang === 'az' ? 1 : 0] ?? value[0]) : value;


/* 4. Rendering */
function renderNow() {
  $('#now').innerHTML = NOW.map(item =>
    `<li><strong>${tx(item.n)}</strong>${item.d ? `<span>${tx(item.d)}</span>` : ''}</li>`
  ).join('');
}

/* Subject tabs are created once so keyboard focus is not lost when they update */
const tabs = SUBJECTS.map((subject, i) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.onclick = () => { current = i; renderSubjects(); };
  $('#tabs').append(button);
  return button;
});

function renderSubjects() {
  tabs.forEach((button, i) => {
    button.textContent = tx(SUBJECTS[i].n);
    button.setAttribute('aria-pressed', i === current);
  });
  const subject = SUBJECTS[current];
  $('#si').textContent = tx(subject.i);
  $('#st').innerHTML = subject.t.map(topic => `<li>${tx(topic)}</li>`).join('');
  $('#sw').textContent = tx(subject.at);
}

function renderSteps() {
  $('#steps').innerHTML = STEPS.map(step => `<li><h3>${tx(step.h)}</h3><p>${tx(step.p)}</p></li>`).join('');
}

function renderJobs() {
  $('#jobs').innerHTML = JOBS.map(job => `
    <li>
      <h3>${tx(job.r)}</h3>
      <p class="where">${tx(job.o)}</p>
      <p class="when">${tx(job.d)}</p>
      ${job.b ? `<ul>${job.b.map(point => `<li>${tx(point)}</li>`).join('')}</ul>` : ''}
    </li>`).join('');
}

function renderSkills() {
  $('#skills').innerHTML = SKILLS.map(group => `
    <div>
      <h3>${tx(group.h)}</h3>
      <ul class="chips">${group.c.map(chip => `<li>${tx(chip)}</li>`).join('')}</ul>
    </div>`).join('');
}

function renderList(target, items) {
  $(target).innerHTML = items.map(item => `
    <div class="item">
      <h3>${tx(item.h)}</h3>
      ${item.p.length ? `<p>${item.p.map(tx).join('<br>')}</p>` : ''}
    </div>`).join('');
}

function renderAll() {
  renderNow();
  renderSubjects();
  renderSteps();
  renderJobs();
  renderSkills();
  renderList('#edu', EDU);
  renderList('#cert', CERTS);
  renderList('#lang', LANGS);
}


/* 5. Language switch: English is read from the page once, Azerbaijani comes from AZ */
const texts = $$('[data-i]');
texts.forEach(node => { node.dataset.en = node.innerHTML; });

function setLang(next) {
  lang = next;
  document.documentElement.lang = next;

  texts.forEach(node => {
    node.innerHTML = next === 'az' ? (AZ[node.dataset.i] ?? node.dataset.en) : node.dataset.en;
  });
  $$('.pill button[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', button.dataset.lang === next);
  });

  try { localStorage.setItem('lang', next); } catch (error) { /* storage can be unavailable */ }
  renderAll();
}

$$('.pill button[data-lang]').forEach(button => {
  button.onclick = () => setLang(button.dataset.lang);
});


/* 6. Start with the saved language, or the default one */
let saved = DEFAULT_LANG;
try { saved = localStorage.getItem('lang') || DEFAULT_LANG; } catch (error) { /* ignore */ }
setLang(saved === 'az' ? 'az' : 'en');
