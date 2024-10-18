//Kullanıcıya kaç adet meyve girmek istediğini soralım.
//Söylediği adet kadar meyve ismini prompt ile eklesin.
//Yazılan her bir meyveyi diziye ekleyelim
//Eklenen meyvelerin hepsini console'a yazdıralım. 



let meyveler = []

function istenenMeyveler () {
  let istenenMeyveler = prompt ('Kaç adet meyve girmek istersiniz?');
  
  for(let i = 0; i < istenenMeyveler; i++) {
    let meyve = prompt(`${i + 1}. Meyvelerin İsmini Yazınız`);
    meyveler.push(meyve);
  }
  console.log(`Eklenen Ürünler : ${meyveler} \nÜrün Sayısı: ${istenenMeyveler}`);
}

istenenMeyveler();


