// 이미지 눌렀을 때, 해당 이미지 바뀌는 것
const heart = document.getElementById("heart");

const change = () => {
  if (heart) {
    /*만약에 하트 이미지를 누르면 이미지가 변한다. 꽉 찬 하트로*/
  }
};
heart.addEventListener("click", change);

// 더보기 버튼 생성

const btn = document.getElementById("btn");
const contents = document.getElementById("contents");

const more = () => {
  if (contents.value.length > 0) {
    submit.disabled = false;
    submit.classList.add("focus");
    //비활성화가 아니면 정보를 체크리스트에 더한다.
  } else {
    submit.disabled = true;
    submit.classList.remove("focus");
    //비활성화가 그대로면 체크리스트에서 지운다.
  }
};

btn.addEventListener("click", more);

// const btn = document.getElementById("btn");
// const contents = document.getElementById("contents");

// btn.addEventListener('click',() ) => {
//   btn.classList.toggle('clicked');
//   contents.classList.toggle('clamp');
// };

// const more = () => {
//   if(){
//     //버튼을 누르게 되면 더보기가 활성화된다.
//   }else{
//     return more;
//   }
// }
// btn.addEventListener('click', more)

// 댓글 입력
const comment = document.getElementById("comment");
const userId = document.getElementById("userId");
const userComments = document.getElementById("userComments");

const write = () => {
  if (comment.value.length > 0) {
    /*여기에는 엔터를 쳤을 경우코멘트가 작성이 된다.는 게 나와야 한다*/
    submit.classList.add("focus");
    /*정보를 체크리스트에 더한다.*/
  } else {
    /*엔터치지 않으면 아무런 반응이 없다는 걸 표현해야하나? */
    submit.classList.remove("focus");
  }
};

login.addEventListener("mouseenter", write);
/* 코멘트를 작성하면 등록이 되는 호출문을 적어야 한다*/
