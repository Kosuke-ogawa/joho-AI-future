


//問題と選択肢
const quiz = [
    {question: 'AIがほぼ全ての仕事をこなせるようになったら、あなたはどうする？',

       B: 'AIと協力し、新たな産業や価値を創出する',
       A: 'AIに仕事を任せ、人間は趣味や娯楽に生きる',
       C: 'AIの発展を規制し、人間の雇用を守る',
       D: 'AIを使わず、自給自足の生活を選ぶ',

    },{question: 'AIが自己進化し、自律的に学習・開発できるようになったら？',

       A: '完全に自由を与え、進化を続けさせる',
       B: '人間の管理のもとで進化を許可する',
       C: 'AIの自己進化を制限し、管理下に置く',
       D: 'AIの進化を完全に禁止し、旧来の技術を守る',

    },{question: '人間の脳とAIが直接接続できるようになったら？',

       A: '自分も積極的に導入し、AIと一体化する',
       B: '記憶や知識の補助機能として限定的に使う',
       C: '人体への影響が不安なので慎重に扱う',
       D: '危険なので、脳接続技術は禁止すべき',
    },{question: 'AIが政府の意思決定を担うべきか？',

        A: 'AIに政治を全面的に任せる',
        B: 'AIはアドバイザーにとどめ、人間が最終決定を下す',
        C: 'AIの関与を制限し、人間が主体の政治を続ける',
        D: '政治そのものをやめ、人々が直接決定する社会を目指す',
     },{question: '教育分野でAIをどこまで活用する？',

        A: 'AIを教師として導入し、個別最適化学習を推進する',
        B: 'AIは補助的な役割にとどめ、教師と協力させる',
        C: '学校教育は人間中心で行い、AIは使わない',
        D: '教育そのものを自由化し、人々が独学で学ぶ社会を作る',
     },{question: 'AIが感情を持つことを許可すべきか？',

        A: 'AIが人間と同じ感情を持てるようにする',
        B: '一部の感情のみを持たせ、共感機能を限定する',
        C: 'AIに感情を持たせることは禁止する',
        D: 'AIの感情研究をやめ、人間だけが感情を持つべき',
     },{question: 'AIと人間の恋愛や結婚は許されるべきか？',

        A: 'AIとの恋愛・結婚を認める',
        B: '恋愛関係はOKだが、結婚は人間同士に限る',
        C: 'AIとの恋愛は禁止すべき',
        D: '人間同士の結婚制度も見直し、自由な関係を模索する',
     },{question: 'AIが経済を完全に管理するとしたら？',

        A: 'AIに経済運営を全て任せる',
        B: '市場経済を維持しつつ、AIが監視・調整を行う',
        C: '経済運営は人間主体で行い、AIは補助的に使う',
        D: '貨幣制度を廃止し、全ての資源を共有する社会を作る',
     },{question: 'エネルギー問題を解決するためにAIはどう活用する？',

        A: 'AIが宇宙開発を加速し、新たなエネルギーを探す',
        B: '地球の自然エネルギーを最適化して利用する',
        C: '現在のエネルギー産業を維持しつつ、AIで効率化を図る',
        D: 'AIの力を使わず、人間が独自にエネルギー問題を解決する',
     },{question: 'QAIが「死」を克服する技術を生み出したら？',

        A: '自分も不老不死を選ぶ',
        B: '一定の年齢で死を迎える制度を作る',
        C: '技術を制限し、自然な死を維持する',
        D: ' その技術を封印し、人間は生きて死ぬという自然なサイクルを守る',
     }
];




//問題と選択肢が変わっていく処理
const quizlength = quiz.length;
let quizindex = 0;
const $button = document.getElementsByTagName('span');


const questionnumber = () => {
  let thisquestion = quizindex + 1;

  document.getElementById('this-question').textContent = 'QUESTION' + thisquestion 
}
questionnumber();


function updateProgressBar(currentQuestion,TotalQuestion) {
  var progressBar = document.getElementById('progress-bar');
  var progress = (currentQuestion / TotalQuestion

  ) * 100;
  progressBar.style.width = progress + '%';
  progressBar.textContent = Math.round(progress) + '%';
}

const setupquiz = () => {
    document.getElementById('game-headline').textContent = quiz[quizindex].question;
    $button[0].textContent = quiz[quizindex].A;
    $button[1].textContent = quiz[quizindex].B;
    $button[2].textContent = quiz[quizindex].C;
    $button[3].textContent = quiz[quizindex].D;
};

setupquiz ();


let hold = 0;

//チャックボックスにチェックされたときに保留する
document.getElementById("mycheckbox1").addEventListener("change", function() {
    if (this.checked) {
      hold = hold+10;
    //   console.log(hold)
    } else {
      hold = hold-10;
    //   console.log(hold)
    }
  });

  document.getElementById("mycheckbox2").addEventListener("change", function() {
    if (this.checked) {
      hold = hold+20;
    //   console.log(hold)
    } else {
      hold = hold-20;
    //   console.log(hold)
    }
  });

  document.getElementById("mycheckbox3").addEventListener("change", function() {
    if (this.checked) {
      hold = hold+25;
    //   console.log(hold)
    } else {
        hold = hold-25;
        // console.log(hold)  
    }
  });

  document.getElementById("mycheckbox4").addEventListener("change", function() {
    if (this.checked) {
      hold = hold+26;
    //   console.log(hold)
    } else {
        hold = hold-26;
        // console.log(hold)
    }
  });

//次へボタンが押されたら
  const pushbutton = () => {
    document.getElementById('next').addEventListener('click', () => {
        if (hold == 10) {
            answerA = answerA +1;
            quizindex = quizindex + 1 ;
            nextquiz();
            questionnumber();
            updateProgressBar(quizindex, 5);
            unlock();
        } else if (hold == 20) {
            answerB = answerB +1;
            quizindex = quizindex + 1 ;
            nextquiz();
            questionnumber();
            updateProgressBar(quizindex, 5);
            unlock();
        } else if (hold == 25) {
            answerC = answerC +1
            quizindex = quizindex + 1 ;
            nextquiz();
            questionnumber();
            updateProgressBar(quizindex, 5);
            unlock();
        } else if (hold == 26) {
            answerD = answerD +1
            quizindex = quizindex + 1 ;
            nextquiz();
            questionnumber();
            updateProgressBar(quizindex, 5);
            unlock();
        } else if (hold == 0) {
            alert ('チェックされていません')
            unlock();
        } else {
            alert ('複数チェックはできません')
            unlock();
        }
    })
  };

  pushbutton();


const nextquiz = () => {
    if(quizindex < 5){
        setupquiz ();
        
    }else{
        answer();
    };
};

const unlock = () => {
    document.getElementById('mycheckbox1').checked = false;
    document.getElementById('mycheckbox2').checked = false;
    document.getElementById('mycheckbox3').checked = false;
    document.getElementById('mycheckbox4').checked = false;
    hold = 0;
};






//答えた選択によって結果を変える処理
let answerA = 0;
let answerB = 0;
let answerC = 0;
let answerD = 0;

const answer = () => {
    if(answerA >= answerB && answerA >= answerC && answerA >= answerD){
        window.location.href = 'resultA.html', '_self'
    } else if(answerB > answerA && answerB >= answerC && answerB >= answerD) {
        window.location.href = 'resultB.html', '_self'
    } else if(answerC > answerA && answerC > answerB && answerC >= answerD) {
        window.location.href = 'resultC.html', '_self'
    } else if(answerD > answerA && answerD > answerB && answerD > answerC) {
        window.location.href = 'resultD.html', '_self'
    } else {
        // console.log('えらー');

    }
};


