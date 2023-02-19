const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const timerElement = document.querySelector("#countdown");

const questionForm = document.querySelector('#question-form');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let availableQuestions = []
let timerRunning = true;


let questions = [
    {
        question: 'What is HTML short for?',
        choice1: 'HyperText Markup Language',
        choice2: 'HyperText Makeup Language',
        choice3: 'Hyper Telegraph Make Logic', 
        choice4:'Not short for anything',
        answer: 1,
    },

    {
        question: 'What is CSS short for?',
        choice1: 'Central Style System',
        choice2: 'Cascading Style Sheet',
        choice3: 'Central System Sheet',
        choice4:'Cascading Style System',
        answer: 2,
    },

    {
        question:'Translate from binary: 010',
        choice1: '10',
        choice2: '1',
        choice3: '2',
        choice4: '3',
        answer: 3,
    },

    {
        question: 'What is the ASCII standard?',
        choice1: 'Mapping of specific letters to numbers',
        choice2: 'The first programming language',
        choice3: 'Converting binary to numbers', 
        choice4: 'Apples operating system',
        answer: 1,
    },

    {
        question: 'What does RGB stand for?',
        choice1: 'Real Good Batching',
        choice2: 'Rules Glow Bravo',
        choice3: 'Red Green Blue',
        choice4:'Red Greenish Blue',
        answer: 3,
    },

    {
        question:'What  is Pseudocode?',
        choice1: 'Inexecutable lines of code',
        choice2: 'Code written wrong on purpose',
        choice3: 'A loop',
        choice4: 'Human-readable version of code',
        answer: 4,
    },
    {
        question: 'What is a function?',
        choice1: 'A feature in JS',
        choice2: 'Block of code that only runs when called',
        choice3: 'Block of code that loops', 
        choice4:'Block of code that start your program in JS',
        answer: 2,
    },

    {
        question: 'What are conditionals?',
        choice1: 'Commands for handling decisions',
        choice2: 'Specific condition for expressions',
        choice3: 'A for loop',
        choice4:'Conditions for a for loop',
        answer: 1,
    },
    {
        question: 'Who developed Scratch?',
        choice1: 'Harvard',
        choice2: 'Berkley',
        choice3: 'LSE',
        choice4:'MIT',
        answer: 4,
    },
    {
        question: 'What is VS code?',
        choice1: 'Virtual Sequance Code',
        choice2: 'A compiler',
        choice3: 'Machine code',
        choice4:'iOS language',
        answer: 2,
    },
    {
        question: 'What does the "\\n" do in C?',
        choice1: 'New Paragraph',
        choice2: 'New line',
        choice3: 'New page',
        choice4: 'Changes font to all small letters',
        answer: 2,
    },
    {
        question: 'What are variables?',
        choice1: 'Condition that is boolean',
        choice2: 'Instructions for compiler',
        choice3: 'Loop',
        choice4: 'Values that can change',
        answer: 4,
    },
    {
        question: 'How do you comment in C?',
        choice1: '<!--',
        choice2: '//',
        choice3: '#',
        choice4:'\\ \\',
        answer: 2,
    },
    {
        question: 'What is Abstrction in OOP?',
        choice1: 'Simlification of code to increase preformance',
        choice2: 'Abstracting specific part of the code',
        choice3: 'Converting one language to another',
        choice4: 'None of the above',
        answer: 1,
    },
    {
        question: 'What type of language is C?',
        choice1: 'Object-oriented',
        choice2: 'Imperative',
        choice3: 'Rules based',
        choice4: 'Binary',
        answer: 2,
    },
    {
        question: 'What is debugging?',
        choice1: 'A way to comment',
        choice2: 'Statement in C',
        choice3: 'Fixing errors in code',
        choice4: 'Removing bugs from PC-screen',
        answer: 3,
    },
    {
        question: 'What is RAM?',
        choice1: 'Remote Access Memory',
        choice2: 'Random Access Memory',
        choice3: 'Removable Access Memory',
        choice4: 'Re-distributional Access Memory',
        answer: 2,
    },
    {
        question: 'What happens when a stack overflow occurs?',
        choice1: 'You are guided to stackoverflow.com',
        choice2: 'You are accessing the wrong erea of memory',
        choice3: 'Code compiles as a stack',
        choice4: 'Excesive memory usage',
        answer: 4,
    },
    {
        question: 'What is heap overflow?',
        choice1:  'Heap of overflows in the code',
        choice2: 'Touching areas of memory not intended',
        choice3: 'Same as buffer overflow',
        choice4: 'Overflow from the heap-stack',
        answer: 2,
    },
    {
        question: 'What is hexadecimal numbering?',
        choice1: 'Numbering system with base 16',
        choice2: 'Numbering system with base 8',
        choice3: 'Numbering system as binary',
        choice4: 'Numbering system with base 32',
        answer:  1,
    },
    {
        question: 'What is a pointer in C?',
        choice1: 'Line of code pointing to another line of code',
        choice2: 'Constant that stores memory from stack',
        choice3: 'Variable that stores a memory address',
        choice4: 'For loop pointing to a variable',
        answer: 3,
    },
    {
        question: 'What are queues in data structure?',
        choice1: 'Linear structure based on the M-method',
        choice2: 'Linear structure that follow a particular order',
        choice3: 'Linear structure that follow no particular order',
        choice4: 'Linear structure that follow the LIFO-principle',
        answer: 2,
    },
    {
        question: 'What is a stack in data structure?',
        choice1: 'Linear structure that follow the M-method',
        choice2: 'Linear structure that follow the LIFO-principle',
        choice3: 'Stack of data that is stored in the compiler',
        choice4: 'Stack overflow',
        answer: 2,
    },
    {
        question: 'What is an array?',
        choice1: 'Block of contagious memory',
        choice2: 'Block of diconnected memory',
        choice3: 'Block of noncontagious memory',
        choice4: 'Block of random memory',
        answer: 1,
    },
    {
        question: 'What is a Binary Tree?',
        choice1: 'Simple code written in binary',
        choice2: 'Collection of binary to access memory',
        choice3: 'A tree that points to binary ',
        choice4: 'A tree which each node has 0 or 2 children',
        answer: 4,
    },
    {
        question: 'What is Linked list',
        choice1: 'Data elements containing link to its successor',
        choice2: 'List of elements looping through a function',
        choice3: 'Data elements containing lists of the nodes',
        choice4: 'List of elements compiling through Linked',
        answer: 1,
    },
    {
        question: 'How do you comment in Python',
        choice1: '//',
        choice2: '#',
        choice3: '\\ \\',
        choice4: '<!--',
        answer: 2,
    },
    {
        question: 'What type of language is Python?',
        choice1: 'Procedural',
        choice2: 'Logic',
        choice3: 'Functional',
        choice4: 'Object-oriented',
        answer: 4,
    },
    {
        question: 'What is SQL?',
        choice1: 'Semi-structured Query Language',
        choice2: 'String Query Language',
        choice3: 'Structured Query Language',
        choice4: 'Structured Query Line',
        answer: 3,
    },
    {
        question: 'Does Python native support CSV?',
        choice1: 'No',
        choice2: 'Yes',
        choice3: 'Not after Python 2',
        choice4: 'Not after Python 3',
        answer: 2,
    },
    {
        question: 'Which of these are essential operations for SQL?',
        choice1: 'Create, Read, Update, Delete (CRUD)',
        choice2: 'Create, Read, Update, Remove (CRUR)',
        choice3: 'Create, Read, Ping, Delete (CRPD)',
        choice4: 'Create, Read, Ping, Remove (CRRP',
        answer: 1,
    },
    {
        question: 'What does DNS stand for?',
        choice1: 'Dynamic Name Service',
        choice2: 'Domain Name System',
        choice3: 'Dynamic Name System',
        choice4: 'Domain Name Service',
        answer: 2,
    },
    {
        question: 'What does HTTP stand for?',
        choice1: 'HyperText Transfer Port',
        choice2: 'HoverText Transfer Port',
        choice3: 'HoverText Transfer Protocol',
        choice4: 'HyperText Transfer Protocol',
        answer: 4,
    },
    {
        question: 'What does IP stand for?',
        choice1: 'Internet Port',
        choice2: 'Internet Protocol',
        choice3: 'Internal Protocol ',
        choice4: 'Insert Protocol',
        answer: 2,
    },
    {
        question: 'How Many bits are IP addresses?',
        choice1: '64',
        choice2: '16',
        choice3: '8',
        choice4: '32',
        answer: 4,
    },
    {
        question: 'What is TCP?',
        choice1: 'Tranformation Control Port',
        choice2: 'Transmission Control Panel',
        choice3: 'Transfrom Central Packets',
        choice4: 'Transmission Control Packets',
        answer: 2,
    },
    {
        question: 'What is on top of the HTML hierarchy?',
        choice1: 'Body',
        choice2: 'Head',
        choice3: 'HTML',
        choice4: 'Document',
        answer: 4,
    },
    {
        question: 'What is bootstrap used for?',
        choice1: 'C framework',
        choice2: 'VSCode mixer',
        choice3: 'HTML framework',
        choice4: 'Booting DNS protocol',
        answer: 3,
    },
    {
        question: 'This is...',
        choice1: 'CS50x',
        choice2: 'David Malan',
        choice3: 'CS50',
        choice4: 'Harvard CS',
        answer: 3,
    },
    {
        question: 'What does API allow you to do?',
        choice1: 'Connect different nodes',
        choice2: 'Send and receive packets',
        choice3: 'Loops the IP',
        choice4: 'Interface with another service',
        answer: 4,
    },
    {
        question: 'What are meta tags used for in HTML?',
        choice1: 'Describe a web page',
        choice2: 'Open a web page',
        choice3: 'Internal comments on web page',
        choice4: 'Connect to facebook',
        answer: 1,
    },
    {
        question: 'What is Git?',
        choice1: 'Gig Image Transmitter',
        choice2: 'Distributed version control system',
        choice3: 'Workflow operator',
        choice4: 'Generic Image Tool',
        answer: 2,
    },
    {
        question: 'How do you stop an infinite loop in VScode?',
        choice1: 'Restart the computer',
        choice2: 'Ctrl-A',
        choice3: 'Ctrl-C',
        choice4: 'Ctrl-Z',
        answer: 3,
    },
    {
        question: 'What does GUI stand for?',
        choice1: 'Graphical User Interface',
        choice2: 'General User Interface',
        choice3: 'General User Interaction',
        choice4: 'Gucci Uses Innocentchildren',
        answer: 1,
    },
    {
        question: 'What are cookies?',
        choice1: 'Algorithms for faster browsing',
        choice2: 'Small files stored on your computer',
        choice3: 'Browsing history',
        choice4: 'Documentation about websites',
        answer: 2,
    },
    {
        question: 'What is the function used to open a file in C?',
        choice1: 'open',
        choice2: 'fopen',
        choice3: 'fileopen',
        choice4: 'copen',
        answer: 2,
    },
    {
        question: 'Where does malloc allocate memory from?',
        choice1: 'Pointers',
        choice2: 'RAM',
        choice3: 'Stack ',
        choice4: 'Heap',
        answer: 4,
    },
    {
        question: 'Difference between NUL and NULL?',
        choice1: 'No difference',
        choice2: 'NUL is C and NULL is Python',
        choice3: 'NUL refers to to "\\0", NULL is the zero address',
        choice4: 'NUL is the zero address, NULL refers to "\\0" ',
        answer: 3,
    },
    {
        question: 'What is Unicode?',
        choice1: 'A way to merge different programming languages',
        choice2: 'The predecessor of C',
        choice3: 'International encoding standard',
        choice4: 'Same as ASCII',
        answer: 3,
    },
    {
        question: 'Who invented linux?',
        choice1: 'Bill Gates',
        choice2: 'Linus Torvalds',
        choice3: 'Torvald Linus',
        choice4: 'Ailiens',
        answer: 2,
    },
    
    
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 50

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    startTimer()
}





getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
       return window.location.assign(`/end.html?finalScore=${score}`);
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` 

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex] 
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true

  
};

timeLeft = 30;
countdown.innerText = timeLeft;
const timer = setInterval(() => {
    timeLeft--;
    countdown.innerText = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        acceptingAnswers = false;
        localStorage.setItem('mostRecentScore', score);
        window.location.assign(`/endtime.html?finalScore=${score}`);
    }
}, 1000);

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        e.preventDefault();
        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'   

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()