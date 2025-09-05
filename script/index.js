const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")    // promise of response
        .then((res) => res.json())    // promise of json data
        .then((json) => displayLesson(json.data));
};


// display word function
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data))
};

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";


    // {
    //   "id": 4,
    //   "level": 5,
    //   "word": "Diligent",
    //   "meaning": "পরিশ্রমী",
    //   "pronunciation": "ডিলিজেন্ট"
    // }

    words.forEach(word => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm space-y-4 py-10 px-5 text-center">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold text-xl">Meaning /Pronounciation</p>

            <div class="font-medium text-2xl font-bangla">"${word.meaning} / ${word.pronunciation}"</div>

            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `;
        wordContainer.append(card);

    })
}


// display lesson function
const displayLesson = (lessons) => {
    // 1. get the container and empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // 2. get into every lessons
    for (let lesson of lessons) {
        // 3. create Element 
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `;

        // 4. append into container
        levelContainer.append(btnDiv)
    }

};

loadLessons();

