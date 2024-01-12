const person = [
    {
        id: 1,
        personimg : './images/Person1-Dino.jpg',
        nameperson: 'Ramon Dino',
        age: '28 anos',
        champion: [ '2021 - Europa Pro (2º lugar) – Vaga Mr. Olympia 2021',
                    '2021 - Mr. Olympia (5º lugar)',
                    '2021 - Muscle Contest Brasil (1º lugar) – Vaga Mr. Olympia 2022',
                    '2022 - Arnold Classic (2º lugar)',
                    '2022 - Mr. Olympia (2º lugar)',
                    '2023 - Arnold Classic (campeão)',
                    '2023 - Mr. Olympia (2º lugar)',],

        sobre: 'O "Dinossauro do Acre", como ficou conhecido Ramon Rocha Queiroz, foi descoberto enquanto fazia Calistenia no Horto Florestal em Rio Branco ainda em 2016. Aos 28 anos, ele conquistou novamente o vice-campeonato da categoria Classic Physique no Mr. Olympia 2023 – a maior competição de fisiculturismo do mundo.'
    },

    {
        id: 2,
        personimg : './images/Person2-Kalecinski.jpg',
        nameperson: 'Urs Kalecinski',
        age: '25',
        champion: ['Dennis James Classic 2019 – Top 6',
        'Xtreme Bodybuilding Pro (Tijuana) 2021 – Top 2',
        'Tampa Pro 2021 – Top 1',
        'Mr. Olympia 2021 – Top 4',
        'Arnold Classic Ohio 2022 – Top 3',
        'Boston Pro 2022 – Top 1',
        'Kuwait Classic Pro 2022 – Top 1',
        'Mr. Olympia 2022 – Top 3',
        'Arnold Classic Ohio 2023 – Top 2',
        'Mr. Olympia 2023 – Top 3',
        'Texas State Pro 2023 – Top 1,'],

        sobre: 'Urs Kalecinski, nascido em 1998, começou sua jornada com uma paixão pelo treinamento de força e um desejo ardente de transformar seu corpo',

    },

    {
        id:3,
        personimg: './images/Person3-mike-sommerfeld.jpg',
        nameperson: 'Mike Sommerfeld',
        age:'29',
        champion: ['º 2023, Arnold Classic USA, Mne’s Classic Physique 4th Place',
        'º  2023, IFBB Saudi Classic Pro, Men’s Classic Physique, 1st',
        'º  2022, IFBB Olympia, Men’s Classic Physique, 5th',
        '2021, IFBB Poland Pro Supershow Men’s Classic Physique, 1st',
        '2021, IFBB Olympia Pro, Men’s Classic Physique, 7th',
        '2021, IFBB Xtreme Bodybuilding & Fitness Pro, Men’s Classic Physique, 1st',
        '2020, IFBB Romania Muscle Fest Pro, Men’s Classic Physique, 6th',
        '2020, IFBB British Grand Prix Pro, Men’s Classic Physique, 2nd',
        '2020, IFBB Europa Pro, Men’s Classic Physique, 3rd',
        '2019, IFBB Dennis James Classic Pro, Men’s Classic Physique, 2nd',
        '2019, IFBB Romania Pro, Men’s Bodybuilding – up to 212 lbs, 13th',
        '2016, IFBB Arnold Classic Europe Amateur, Men’s Bodybuilding – Juniors, 3rd',
        '2014, IFBB Arnold Classic Europe Amateur, Men’s Bodybuilding – Juniors, 3rd',
        ],

        sobre: 'Mike Sommerfield, atleta Alemão nascido em 1994 conseguiu seu Pro Card em 2018',
    },
]

const img = document.querySelector('.person-img');
const personname = document.querySelector('.personame');
const randomBTN = document.querySelector('.randombtn');


const buttonname = document.getElementById('nome')
const buttonage = document.getElementById('age')
const buttontrophy = document.getElementById('trophy')
const trophytext = document.getElementById('persontrophytext')
const buttonsobre = document.getElementById('sobre')

const trophyX = document.getElementById('person-trophyX')

const ButtonPrevious = document.querySelector('.button-previous')
const ButtonNext = document.querySelector('.button-next')




let currentperson = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson();
})

function showPerson(){
    const personreview = person[currentperson];
    img.src = personreview.personimg;
    personname.textContent = personreview.nameperson;


    buttonname.addEventListener('click', function(){
        personname.textContent = personreview.nameperson;
    })


    buttonage.addEventListener('click', function(){
        personname.textContent = personreview.age;
    })

    buttontrophy.addEventListener('click', function(){
        trophytext.textContent = personreview.champion;
        if (trophytext.classList.contains("person-trophyOn")) {
            trophytext.classList.add("person-trophyOn")
            trophytext.classList.remove("person-trophy")
            trophytext.insertAdjacentElement('afterbegin', trophyX);
          } else {
            trophytext.insertAdjacentElement('afterbegin', trophyX);
            trophytext.classList.add("person-trophyOn")
            
            

          }


    })

    trophyX.addEventListener('click', function(){
        if (trophytext.classList.contains("person-trophyOn")) {
            trophytext.classList.add("person-trophy");

          }else{
            personname.textContent = personreview.nameperson;
          }

    })






    
    buttonsobre.addEventListener('click', function(){
        personname.textContent = personreview.sobre;

    })




}

ButtonNext.addEventListener("click", function(){
    currentperson++
    if(currentperson > person.length -1){
        currentperson = 0
    }
    showPerson()
})

ButtonPrevious.addEventListener("click", function(){
    currentperson--
    if(currentperson < 0){
        currentperson = person.length -1;
    }
    showPerson()
})

randomBTN.addEventListener("click", function(){
    console.log(currentperson)
    currentItem = Math.floor(Math.random() * person.length);
    showPerson(currentperson);
})

