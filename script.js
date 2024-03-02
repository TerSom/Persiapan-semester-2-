let i = 0;

// standar function
function getDetailHuman() {
    i += 1
    if(i > 5){
        console.log("lebih dari 5x di clcik")
    }else {
        console.log("jata click masih ada")
    }
    console.log(`fuction di panggil sebnyak ${i} kali`) 
}

// arrow function
const getDetailHuman2 = () => {
    i += 1
    i > 5 ? console.log("lebih dari 5x bro human2") : console.log("jatah masih ada human 2")
}

const mahasiswa = [
    {
    nama: "Terry",
    alamat: "jalan jawa",
    usia: 20,
    semester: 3
    },
    {
    nama: "Terryumay",
    alamat: "jalan jawa2",
    usia: 30,
    semester: 8
    }
]

function getDetailData() {
    mahasiswa.map(function(result, i){
        console.table(result)
    })
    mahasiswa.forEach(result => {
        console.table(result)
    });
    // console.log(`data yang kalian cari adalah: ${mahasiswa.nama}`)
}

class Hewan {
    warna
    keahlian
    constructor(nama) {
        this.nama = nama
    }

    set newColor(color) {
        this.warna = color
    }

    set newSkill(skill) {
        this.keahlian = skill
    }

    get detail() {
        return `Hi saya ${this.nama}, saya berwarna ${this.warna} dan kehalian saya ${this.keahlian}`
    }
}

const kucing = new Hewan("Nigga")
kucing.newColor = "red"
kucing.newSkill = "madang"
console.log(kucing.detail)
