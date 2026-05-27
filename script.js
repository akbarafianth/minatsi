const questions = [

  "Aktivitas yang paling kamu sukai?",
  "Mata kuliah favoritmu?",
  "Saat ada masalah dalam project?",
  "Skill yang paling ingin kamu kuasai?",
  "Kamu lebih nyaman bekerja dengan?"

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

    // ANALYST
    if(analyst >= engineer && analyst >= consultant){

      result = "ANALYST";

      desc =
      "Kamu memiliki kemampuan analitis yang kuat.";

      careers = [
        "Data Analyst",
        "Business Analyst",
        "System Analyst"
      ];

      strengths = [
        "Critical Thinking",
        "Detail Oriented",
        "Analytical Skill"
      ];

      skills = [
        "SQL",
        "Python",
        "Power BI"
      ];

    }

    // ENGINEER
    else if(engineer >= analyst && engineer >= consultant){

      result = "ENGINEER";

      desc =
      "Kamu tertarik dengan teknologi dan coding.";

      careers = [
        "Software Engineer",
        "AI Engineer",
        "Backend Developer"
      ];

      strengths = [
        "Logical Thinking",
        "Fast Learner",
        "Tech Oriented"
      ];

      skills = [
        "JavaScript",
        "React",
        "Node JS"
      ];

    }

    // CONSULTANT
    else{

      result = "CONSULTANT";

      desc =
      "Kamu unggul dalam komunikasi dan strategi.";

      careers = [
        "Business Consultant",
        "IT Consultant",
        "Management Consultant"
      ];

      strengths = [
        "Leadership",
        "Communication",
        "Strategic Thinking"
      ];

      skills = [
        "Business Analysis",
        "Communication",
        "Presentation"
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

  },1500);

}

function downloadPDF(){

  const element =
  document.getElementById("pdfContent");

  html2pdf().from(element).save(
    "hasil-prediksi-karir.pdf"
  );

}