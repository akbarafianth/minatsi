const questions = [

  "Aktivitas yang paling kamu sukai?",
  "Mata kuliah favoritmu?",
  "Saat ada masalah dalam project?",
  "Skill yang paling ingin kamu kuasai?",
  "Kamu lebih nyaman bekerja dengan?",
  "Kegiatan organisasi favorit?",
  "Kamu lebih suka pekerjaan yang?",
  "Saat melihat data besar?",
  "Bagian project IT favorit?",
  "Kamu lebih suka membuat?",
  "Saat presentasi kelompok?",
  "Jika ikut lomba?",
  "Kamu lebih tertarik belajar?",
  "Hal yang paling membuatmu puas?",
  "Kamu lebih suka bekerja?",
  "Ketika perusahaan mengalami penurunan performa?",
  "Role yang paling ingin kamu coba?",
  "Kamu lebih suka memecahkan masalah dengan?",
  "Hal paling penting dalam project?",
  "Karir impianmu lebih dekat dengan?"

];

const options = [

  [
    ["Menganalisis data","analyst"],
    ["Membuat aplikasi","engineer"],
    ["Menyusun strategi bisnis","consultant"]
  ],

  [
    ["Business Intelligence","analyst"],
    ["Pemrograman","engineer"],
    ["Manajemen Bisnis","consultant"]
  ],

  [
    ["Mencari akar masalah","analyst"],
    ["Memperbaiki sistem","engineer"],
    ["Membuat solusi bisnis","consultant"]
  ],

  [
    ["Data Analytics","analyst"],
    ["Artificial Intelligence","engineer"],
    ["Public Speaking","consultant"]
  ],

  [
    ["Data","analyst"],
    ["Teknologi","engineer"],
    ["Diskusi","consultant"]
  ],

  [
    ["Research","analyst"],
    ["Divisi IT","engineer"],
    ["Hubungan eksternal","consultant"]
  ],

  [
    ["Detail dan terstruktur","analyst"],
    ["Teknis dan inovatif","engineer"],
    ["Dinamis dan komunikatif","consultant"]
  ],

  [
    ["Tertarik menganalisis","analyst"],
    ["Ingin membuat sistem","engineer"],
    ["Memikirkan strategi","consultant"]
  ],

  [
    ["Requirement analysis","analyst"],
    ["Development system","engineer"],
    ["Business process","consultant"]
  ],

  [
    ["Dashboard","analyst"],
    ["Website dan aplikasi","engineer"],
    ["Strategi bisnis","consultant"]
  ],

  [
    ["Menyiapkan data","analyst"],
    ["Demo aplikasi","engineer"],
    ["Menjadi presenter","consultant"]
  ],

  [
    ["Data competition","analyst"],
    ["Hackathon","engineer"],
    ["Business case","consultant"]
  ],

  [
    ["Visualisasi data","analyst"],
    ["Framework terbaru","engineer"],
    ["Strategi perusahaan","consultant"]
  ],

  [
    ["Menemukan insight","analyst"],
    ["Membuat sistem berjalan","engineer"],
    ["Membantu client","consultant"]
  ],

  [
    ["Individu fokus","analyst"],
    ["Tim developer","engineer"],
    ["Bertemu banyak orang","consultant"]
  ],

  [
    ["Menganalisis data penjualan","analyst"],
    ["Membangun sistem baru","engineer"],
    ["Membuat strategi bisnis","consultant"]
  ],

  [
    ["Data Analyst","analyst"],
    ["Software Engineer","engineer"],
    ["Business Consultant","consultant"]
  ],

  [
    ["Data dan statistik","analyst"],
    ["Teknologi","engineer"],
    ["Diskusi dan komunikasi","consultant"]
  ],

  [
    ["Akurasi data","analyst"],
    ["Performa sistem","engineer"],
    ["Kepuasan client","consultant"]
  ],

  [
    ["Analis perusahaan","analyst"],
    ["Engineer teknologi","engineer"],
    ["Konsultan bisnis","consultant"]
  ]

];

const form = document.getElementById("careerForm");

questions.forEach((question,index)=>{

  let html = `
    <div class="question-box">

      <h3>${index+1}. ${question}</h3>
  `;

  options[index].forEach(option=>{

    html += `
      <label class="option">

        <input type="radio"
        name="q${index+1}"
        value="${option[1]}">

        <span>${option[0]}</span>

      </label>
    `;

  });

  html += `</div>`;

  form.innerHTML += html;

});

let chart;

function showResult(){

  let analyst = 0;
  let engineer = 0;
  let consultant = 0;

  for(let i=1;i<=questions.length;i++){

    const selected =
    document.querySelector(`input[name="q${i}"]:checked`);

    if(!selected){

      alert("Harap jawab semua pertanyaan!");
      return;

    }

    if(selected.value === "analyst"){
      analyst++;
    }

    else if(selected.value === "engineer"){
      engineer++;
    }

    else{
      consultant++;
    }

  }

  document.getElementById("loadingBox")
  .style.display = "block";

  setTimeout(()=>{

    document.getElementById("loadingBox")
    .style.display = "none";

    document.getElementById("resultBox")
    .style.display = "block";

    const total = questions.length;

    const analystPercent =
    Math.round((analyst/total)*100);

    const engineerPercent =
    Math.round((engineer/total)*100);

    const consultantPercent =
    Math.round((consultant/total)*100);

    let result = "";
    let desc = "";
    let careers = [];
    let strengths = [];
    let skills = [];

    if(analyst >= engineer && analyst >= consultant){

      result = "ANALYST";

      desc =
      "Kamu memiliki kemampuan analitis yang kuat dan senang mencari insight dari data.";

      careers = [
        "Data Analyst",
        "Business Analyst",
        "System Analyst",
        "Software Analyst"
      ];

      strengths = [
        "Critical Thinking",
        "Analytical Skill",
        "Detail Oriented",
        "Problem Solving"
      ];

      skills = [
        "SQL",
        "Python",
        "Power BI",
        "Data Visualization"
      ];

    }

    else if(engineer >= analyst && engineer >= consultant){

      result = "ENGINEER";

      desc =
      "Kamu tertarik dengan teknologi, coding, dan pengembangan sistem.";

      careers = [
        "Software Engineer",
        "AI Engineer",
        "Backend Developer",
        "Machine Learning Engineer"
      ];

      strengths = [
        "Logical Thinking",
        "Tech Oriented",
        "Fast Learner",
        "Innovation"
      ];

      skills = [
        "JavaScript",
        "React",
        "Node JS",
        "Machine Learning"
      ];

    }

    else{

      result = "CONSULTANT";

      desc =
      "Kamu unggul dalam komunikasi, strategi bisnis, dan problem solving.";

      careers = [
        "Business Consultant",
        "IT Consultant",
        "Management Consultant",
        "Business Process Consultant"
      ];

      strengths = [
        "Leadership",
        "Communication",
        "Strategic Thinking",
        "Presentation Skill"
      ];

      skills = [
        "Business Analysis",
        "Communication Skill",
        "Project Management",
        "BPMN"
      ];

    }

    // OUTPUT
    document.getElementById("careerBadge")
    .innerText = result;

    document.getElementById("careerDescription")
    .innerText = desc;

    document.getElementById("careerList")
    .innerHTML =
    careers.map(career=>
      `<div class="career-item">${career}</div>`
    ).join("");

    document.getElementById("strengthList")
    .innerHTML =
    strengths.map(item=>
      `<li>${item}</li>`
    ).join("");

    document.getElementById("skillList")
    .innerHTML =
    skills.map(item=>
      `<li>${item}</li>`
    ).join("");

    // CHART
    if(chart){
      chart.destroy();
    }

    const ctx =
    document.getElementById("interestChart");

    chart = new Chart(ctx, {

      type:'radar',

      data:{

        labels:[
          'Analyst',
          'Engineer',
          'Consultant'
        ],

        datasets:[{

          label:'Minat Karir',

          data:[
            analystPercent,
            engineerPercent,
            consultantPercent
          ],

          backgroundColor:'rgba(37,99,235,0.2)',

          borderColor:'#2563eb',

          borderWidth:3

        }]

      }

    });

    document.getElementById("resultBox")
    .scrollIntoView({
      behavior:'smooth'
    });

  },2000);

}

function downloadPDF(){

  const element =
  document.getElementById("pdfContent");

  html2pdf().from(element).save(
    "hasil-prediksi-karir.pdf"
  );

}
