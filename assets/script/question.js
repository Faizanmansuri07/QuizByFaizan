const questions = [
    {
        id: 1,
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false },
            { text: "Delhi", correct: true }
        ]
    },
    {
        id: 2,
        question: "Which river is known as the Ganga of the South?",
        answers: [
            { text: "Krishna", correct: false },
            { text: "Cauvery", correct: true },
            { text: "Godavari", correct: false },
            { text: "Narmada", correct: false }
        ]
    },
    {
        id: 3,
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Indira Gandhi", correct: false },
            { text: "Sardar Vallabhbhai Patel", correct: false }
        ]
    },
    {
        id: 4,
        question: "Which is the largest state in India by area?",
        answers: [
            { text: "Uttar Pradesh", correct: false },
            { text: "Maharashtra", correct: false },
            { text: "Rajasthan", correct: true },
            { text: "Madhya Pradesh", correct: false }
        ]
    },
    {
        id: 5,
        question: "What is the national animal of India?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Lion", correct: false },
            { text: "Tiger", correct: true },
            { text: "Peacock", correct: false }
        ]
    },
    {
        id: 6,
        question: "Which Indian city is known as the 'Silicon Valley of India'?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Bengaluru", correct: true },
            { text: "Hyderabad", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        id: 7,
        question: "Who is known as the 'Father of the Nation' in India?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Bhagat Singh", correct: false }
        ]
    },
    {
        id: 8,
        question: "Which is the national bird of India?",
        answers: [
            { text: "Parrot", correct: false },
            { text: "Peacock", correct: true },
            { text: "Pigeon", correct: false },
            { text: "Sparrow", correct: false }
        ]
    },
    {
        id: 9,
        question: "In which year did India gain independence?",
        answers: [
            { text: "1945", correct: false },
            { text: "1947", correct: true },
            { text: "1950", correct: false },
            { text: "1952", correct: false }
        ]
    },
    {
        id: 10,
        question: "Which monument in India is called the 'Symbol of Love'?",
        answers: [
            { text: "Qutub Minar", correct: false },
            { text: "Red Fort", correct: false },
            { text: "Taj Mahal", correct: true },
            { text: "India Gate", correct: false }
        ]
    },
    {
        id: 11,
        question: "Who is the author of the Indian national anthem?",
        answers: [
            { text: "Sarojini Naidu", correct: false },
            { text: "Rabindranath Tagore", correct: true },
            { text: "Bankim Chandra Chatterjee", correct: false },
            { text: "Aurobindo Ghosh", correct: false }
        ]
    },
    {
        id: 12,
        question: "Which is the smallest state in India by area?",
        answers: [
            { text: "Sikkim", correct: false },
            { text: "Goa", correct: true },
            { text: "Tripura", correct: false },
            { text: "Nagaland", correct: false }
        ]
    },
    {
        id: 13,
        question: "Which of these is a popular folk dance of Punjab?",
        answers: [
            { text: "Bihu", correct: false },
            { text: "Bhangra", correct: true },
            { text: "Kathak", correct: false },
            { text: "Garba", correct: false }
        ]
    },
    {
        id: 14,
        question: "Who was the first woman Prime Minister of India?",
        answers: [
            { text: "Indira Gandhi", correct: true },
            { text: "Sonia Gandhi", correct: false },
            { text: "Sarojini Naidu", correct: false },
            { text: "Pratibha Patil", correct: false }
        ]
    },
    {
        id: 15,
        question: "Which is the longest river in India?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Godavari", correct: false },
            { text: "Narmada", correct: false },
            { text: "Ganga", correct: true }
        ]
    },
    {
        id: 16,
        question: "Who is known as the 'Iron Man of India'?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Sardar Vallabhbhai Patel", correct: true },
            { text: "B. R. Ambedkar", correct: false },
            { text: "Bhagat Singh", correct: false }
        ]
    },
    {
        id: 17,
        question: "Which Indian state is famous for its backwaters?",
        answers: [
            { text: "Tamil Nadu", correct: false },
            { text: "Kerala", correct: true },
            { text: "Goa", correct: false },
            { text: "Karnataka", correct: false }
        ]
    },
    {
        id: 18,
        question: "Which festival is known as the 'Festival of Lights'?",
        answers: [
            { text: "Holi", correct: false },
            { text: "Diwali", correct: true },
            { text: "Eid", correct: false },
            { text: "Lohri", correct: false }
        ]
    },
    {
        id: 19,
        question: "Which of these is the national sport of India?",
        answers: [
            { text: "Cricket", correct: false },
            { text: "Kabaddi", correct: false },
            { text: "Hockey", correct: true },
            { text: "Badminton", correct: false }
        ]
    },
    {
        id: 20,
        question: "Which is the largest desert in India?",
        answers: [
            { text: "Rann of Kutch", correct: false },
            { text: "Thar Desert", correct: true },
            { text: "Ladakh Desert", correct: false },
            { text: "Spiti Valley", correct: false }
        ]
    },
    {
        id: 21,
        question: "Which city is known as the 'Pink City'?",
        answers: [
            { text: "Jodhpur", correct: false },
            { text: "Jaipur", correct: true },
            { text: "Udaipur", correct: false },
            { text: "Bikaner", correct: false }
        ]
    },
    {
        id: 22,
        question: "In which state is the Sun Temple of Konark located?",
        answers: [
            { text: "West Bengal", correct: false },
            { text: "Odisha", correct: true },
            { text: "Madhya Pradesh", correct: false },
            { text: "Bihar", correct: false }
        ]
    },
    {
        id: 23,
        question: "Which freedom fighter said, 'Give me blood and I will give you freedom'?",
        answers: [
            { text: "Bhagat Singh", correct: false },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Subhas Chandra Bose", correct: true },
            { text: "Bal Gangadhar Tilak", correct: false }
        ]
    },
    {
        id: 24,
        question: "Who was the first Indian to win a Nobel Prize?",
        answers: [
            { text: "C. V. Raman", correct: false },
            { text: "Mother Teresa", correct: false },
            { text: "Rabindranath Tagore", correct: true },
            { text: "Hargobind Khurana", correct: false }
        ]
    },
    {
        id: 25,
        question: "Which is the southernmost tip of India?",
        answers: [
            { text: "Kanyakumari", correct: true },
            { text: "Rameswaram", correct: false },
            { text: "Madurai", correct: false },
            { text: "Coimbatore", correct: false }
        ]
    },
    {
        id: 26,
        question: "Which Indian state is known as the 'Land of Rising Sun'?",
        answers: [
            { text: "Assam", correct: false },
            { text: "Arunachal Pradesh", correct: true },
            { text: "Sikkim", correct: false },
            { text: "Manipur", correct: false }
        ]
    },
    {
        id: 27,
        question: "Who wrote the book 'Discovery of India'?",
        answers: [
            { text: "Rabindranath Tagore", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Sardar Patel", correct: false }
        ]
    },
    {
        id: 28,
        question: "Which city is called the 'City of Joy'?",
        answers: [
            { text: "Chennai", correct: false },
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: true },
            { text: "Hyderabad", correct: false }
        ]
    },
    {
        id: 29,
        question: "What is the national flower of India?",
        answers: [
            { text: "Rose", correct: false },
            { text: "Lotus", correct: true },
            { text: "Lily", correct: false },
            { text: "Marigold", correct: false }
        ]
    },
    {
        id: 30,
        question: "Which Indian state is the leading producer of tea?",
        answers: [
            { text: "West Bengal", correct: false },
            { text: "Kerala", correct: false },
            { text: "Assam", correct: true },
            { text: "Sikkim", correct: false }
        ]
    }
    // Add more questions following this format if needed.
];
