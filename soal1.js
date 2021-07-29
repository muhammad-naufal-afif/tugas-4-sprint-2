
let intro = {
  introduce: function(){
    console.log(`Nama saya ${this.name}, umur saya ${this.age} tahun, alamat saya di ${this.address}, dan saya punya hobby yaitu ${this.hobby}!`);
  }
}

let aku = Object.create(intro)
aku.name = "Agus"
aku.age = 30
aku.address = "Jln. Malioboro, Yogyakarta"
aku.hobby = "Gaming"
aku.introduce()