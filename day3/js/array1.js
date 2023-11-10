// 배열 사용
let animal = []; // 빈 배열 사용
console.log(animal);
console.log(animal.length + "개");

//입력(저장)
animal[0] = 'cow';
animal[1] = 'pig';
animal[2] = 'horse';
animal[3] = 'cat';

console.log(animal);

//수정
animal[2] = "dog";
console.log(animal);

//삭제
delete animal[1];
console.log(animal);

//특정 요소를 조회
console.log(animal[1]);

//전체 요소(값) 조회(목록)
for(let i = 0; i<animal.length; i++){
    document.write(animal[i]+" ");
}

//Array 객체를 사용한 배열