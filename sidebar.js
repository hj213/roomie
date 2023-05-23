const users = [
    {   
        index:0,
        id: 'hj213',
        password:'hj213',
        name: '윤효정',
        age: '24세',
        gender:'여성',
        img: 'image/hd.png',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },
    {
        index:1,
        id: '',
        password:'',
        name: '이광민',
        age: '24세',
        gender:'여성',
        img: 'image/p1.jpg',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },{
        index:2,
        id: '',
        password:'',
        name: '채가예',
        age: '24세',
        gender:'여성',
        img: 'image/p2.jpg',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },
    {
        index:3,
        id: '',
        password:'',
        name: '최지희',
        age: '24세',
        gender:'여성',
        img: 'image/p3.jpg',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },{
        index:4,
        id: '',
        password:'',
        name: '김민주',
        age: '24세',
        gender:'여성',
        img: 'image/p4.jpg',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },{
        index:5,
        id: '',
        password:'',
        name: '엄수빈',
        age: '24세',
        gender:'여성',
        img: 'image/hd.png',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },{
        index:6,
        id: '',
        password:'',
        name: '이승주',
        age: '24세',
        gender:'여성',
        img: 'image/hd.png',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },{
        index:7,
        id: '',
        password:'',
        name: '이철수',
        age: '24세',
        gender:'여성',
        img: 'image/hd.png',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },{
        index:8,
        id: '',
        password:'',
        name: '이유리',
        age: '24세',
        gender:'여성',
        img: 'image/hd.png',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },{
        index:9,
        id: '',
        password:'',
        name: '이맹구',
        age: '24세',
        gender:'여성',
        img: 'image/hd.png',
        location: '',
        roomGender: '',
        style: '',
        deposit:'',
        budget:'',
        smoking:'',
        roomSmoking:'',
        sleeping:'',
        roomSleeping:''
    },  
]

const hyehwa = [
    {
        index:0,
        id: '',
        password:'',
        name: '김민주',
        age: '24세',
        gender:'여성',
        img: 'image/바다.jpg',
        location: '혜화',
        roomGender: '여성',
        style: ['아파트','투룸이상'],
        deposit:['1천만원~5천만원','5천만원~1억'],
        budget:['50만원~100만원','250만원 이상~'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'밤 취침(1시이전)',
        roomSleeping:'밤 취침(1시이전)',
        message:'깨끗하신 분이면 좋겠어요...! 규칙적으로 생활하시는 분이면 더 좋아요!',
        time:4,
    },{
        index:1,
        id: '',
        password:'',
        name: '엄수빈',
        age: '24세',
        gender:'여성',
        img: 'image/마동석.jpeg',
        location: '혜화',
        roomGender: '여성',
        style: ['투룸이상'],
        deposit:['1천만원~5천만원'],
        budget:['100만원~250만원','250만원 이상~'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'밤 취침(1시이전)',
        roomSleeping:'밤 취침(1시이전)',
        message:'안녕하세요! 야식 취향이 잘 맞으면 좋을 것 같아요. 저는 떡볶이 좋아합니다!!',
        time:17,
    },{
        index:2,
        id: '',
        password:'',
        name: '이승주',
        age: '24세',
        gender:'여성',
        img: 'image/고양이.jpg',
        location: '혜화',
        roomGender: '여성',
        style: ['아파트','오피스텔'],
        deposit:['1억 이상~'],
        budget:['~50만원 미만'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'새벽 취침',
        roomSleeping:'새벽 취침',
        message:'조용한 사람만',
        time:25,
    },
]
    
const seongsu = [
    {
        index:0,
        name: '신짱구',
        age: '5세',
        gender:'남성',
        img: 'image/짱구.jpeg',
        location: '성수',
        roomGender: '남성',
        style: ['아파트','투룸이상'],
        deposit:['1천만원~5천만원','5천만원~1억'],
        budget:['50만원~100만원','250만원 이상~'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'밤 취침(1시이전)',
        roomSleeping:'밤 취침(1시이전)',
        message:'시체 놀이 같이 할 사람~?',
        time:1,
    }, {
        index:1,
        id: '',
        password:'',
        name: '신짱아',
        age: '1세',
        gender:'여성',
        img: 'image/짱아.jpeg',
        location: '성수',
        roomGender: '여성',
        style: ['하숙'],
        deposit:['1천만원~5천만원'],
        budget:['50만원~100만원'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'오후 취침',
        roomSleeping:'오후 취침',
        message:'⋆୧(◍ ᐡᐤᐡ ◍) ୨*',
        time:2,
    },{
        index:2,
        id: '',
        password:'',
        name: '이철수',
        age: '5세',
        gender:'남성',
        img: 'image/철수.jpeg',
        location: '성수',
        roomGender: '남성',
        style: ['아파트','오피스텔'],
        deposit:['1억 이상~'],
        budget:['~50만원 미만'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'밤 취침(1시이전)',
        roomSleeping:'밤 취침(1시이전)',
        message:'똑똑하고 말이 잘 통하는 사람 구합니다.',
        time:4,
    },{
        index:3,
        id: '',
        password:'',
        name: '이유리',
        age: '5세',
        gender:'여성',
        img: 'image/유리.jpeg',
        location: '성수',
        roomGender: '여성',
        style: ['투룸이상'],
        deposit:['1천만원~5천만원'],
        budget:['100만원~250만원','250만원 이상~'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'밤 취침(1시이전)',
        roomSleeping:'밤 취침(1시이전)',
        message:'토끼 인형을 좋아하는 사람이면 좋을 것 같아🐰',
        time: 5,
    },{
        index:4,
        id: '',
        password:'',
        name: '맹구',
        age: '5세',
        gender:'남성',
        img: 'image/맹구.jpeg',
        location: '성수',
        roomGender: '남성',
        style: ['투룸이상','하숙'],
        deposit:['1천만원~5천만원'],
        budget:['~50만원 미만','100만원~250만원'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'밤 취침(1시이전)',
        roomSleeping:'밤 취침(1시이전)',
        message:'돌 같이 수집하실 분.',
        time:8,
    }, {
        index:5,
        id: '',
        password:'',
        name: '이훈이',
        age: '5세',
        gender:'남성',
        img: 'image/훈이.jpeg',
        location: '성수',
        roomGender: '남성',
        style: ['원룸','하숙'],
        deposit:['~5백만원 미만','5백만원~1천만원'],
        budget:['~50만원 미만','100만원~250만원'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'밤 취침(1시이전)',
        roomSleeping:'밤 취침(1시이전)',
        message:'과자 주는 사람 다 좋아',
        time:15,
    }, {
        index:6,
        id: '',
        password:'',
        name: '한수지',
        age: '5세',
        gender:'여성',
        img: 'image/수지.jpeg',
        location: '성수',
        roomGender: '여성',
        style: ['아파트','오피스텔'],
        deposit:['1억 이상~'],
        budget:['~50만원 미만'],
        smoking:'비흡연',
        roomSmoking:'비흡연',
        sleeping:'밤 취침(1시이전)',
        roomSleeping:'밤 취침(1시이전)',
        message:'흑곰 좋아',
        time:29,
    }, {
        index:7,
        name: '오수',
        age: '22세',
        gender:'남성',
        img: 'image/오수.webp',
        location: '성수',
        roomGender: '남성',
        style: ['원룸','하숙'],
        deposit:['~5백만원 미만'],
        budget:['~50만원 미만','50만원~100만원'],
        smoking:'흡연',
        roomSmoking:'흡연',
        sleeping:'새벽 취침',
        roomSleeping:'새벽 취침',
        message:'먹을 거 공짜로 나눠주는 사람이면 좋겠어요 (∩ ͡° ͜ʖ ͡°)⊃━✿✿✿✿✿✿',
        time:32,
    }, 
]

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

function logout(){
    const logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', ()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('password');
        localStorage.removeItem('index');

        checkLogin()
        initMap()
        profileList()
    })
}

function checkLogin(){
    let loginedUser = localStorage.getItem('id');
    let loginedUserIndex = localStorage.getItem('index');

    const logoutForm= document.getElementById('logoutForm');
    const nickname = document.querySelector('#logoutForm h4');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click',()=>{window.location.href='login.html'});

    
    if (loginedUser){
        loginButton.style.display = 'none';
        logoutForm.style.display = '';

        nickname.innerText = `안녕하세요 ${users[loginedUserIndex].name}님 👀 `; //나중에 닉네임으로 변경하기

    } else {
        loginButton.style.display = '';
        logoutForm.style.display = 'none';
    }
}

function imageChange(){
    const image = document.getElementById('heart');

    if(image.src.match('heart2')){
        image.src = 'image/heart1.png';
    } else {
        image.src = 'image/heart2.png';
    }
}

function back(){
    const detail = document.querySelector(".detail");
    const sidebar = document.querySelector(".sidebar");
    sidebar.removeChild(detail);

    const h4 = document.querySelector(".sidebar h4");
    h4.style.display = '';

    const h5 = document.querySelector(".sidebar h5");
    h5.style.display = '';


    const sidebarUl = document.querySelector(".sidebar-ul");
    sidebarUl.style.display = '';
}

function detailProfile(loca, index){

    let user = '';

    if(loca == '혜화'){
        user = hyehwa[index]
    } else if (loca == '성수'){
        user = seongsu[index]
    }

    const sidebar = document.querySelector(".sidebar");
    
    const h4 = document.querySelector(".sidebar h4");
    h4.style.display = 'none';

    const h5 = document.querySelector(".sidebar h5");
    h5.style.display = 'none';

    const sidebarUl = document.querySelector(".sidebar-ul");
    sidebarUl.style.display = 'none';

    const detail = document.createElement("div");
    detail.classList.add("detail");

    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("picture");

    const backImage = document.createElement("img");
    backImage.id = 'arrow'
    backImage.src = 'image/Arrow.png';
    backImage.width = 20;
    backImage.height = 20;
    backImage.onclick = function(){back()}

    const profileImage = document.createElement("img");
    profileImage.src = user.img;
    profileImage.width = innerWidth - 1100;
    profileImage.height = 330;

    pictureDiv.append(backImage);
    pictureDiv.appendChild(profileImage);

    const scrollDiv = document.createElement("div");
    scrollDiv.classList.add('scrollDiv');
    scrollDiv.style.height = `${innerHeight - 45 - 330 - 190}px`;

    const textDiv = document.createElement("div");
    textDiv.classList.add("textDiv");

    const locaTime = document.createElement("div");
    locaTime.classList.add("locaTime");

    const location = document.createElement("span");
    location.textContent = user.location;

    const time = document.createElement("span");
    time.textContent = `${user.time}분 전`;

    locaTime.appendChild(location);
    locaTime.appendChild(time);

    const name = document.createElement("div");
    name.classList.add('name');
    name.textContent = user.name;

    const extrainfo = document.createElement("div");
    extrainfo.classList.add('extrainfo');
    
    const gender = document.createElement("span");
    gender.textContent = user.gender;

    const age = document.createElement("span");
    age.textContent = user.age;

    const smoking = document.createElement("span");
    smoking.textContent = user.smoking;

    const sleeping = document.createElement("span");
    sleeping.textContent = user.sleeping;

    extrainfo.appendChild(gender);
    extrainfo.appendChild(document.createTextNode(" / "));
    extrainfo.appendChild(age);
    extrainfo.appendChild(document.createTextNode(" / "));
    extrainfo.appendChild(smoking);
    extrainfo.appendChild(document.createTextNode(" / "));
    extrainfo.appendChild(sleeping);

    const bar = document.createElement("hr");
    bar.style.border = 'solid 0.2px #f0f0f0';

    textDiv.appendChild(locaTime);
    textDiv.appendChild(name);
    textDiv.appendChild(extrainfo);
    textDiv.appendChild(bar);


    // 태그
    const tags = document.createElement("div");
    tags.classList.add("detailTags");

    const condition = document.createElement("p");
    condition.textContent = '💡 희망 조건';

    const tag1 = document.createElement("span");
    tag1.textContent = user.style;

    const tag2 = document.createElement("span");
    tag2.textContent = user.budget;

    const tag3 = document.createElement("span");
    tag3.textContent = user.deposit;

    const tag4 = document.createElement("span");
    tag4.textContent = user.roomGender;

    const tag5 = document.createElement("span");
    tag5.textContent = user.roomSmoking;

    const tag6 = document.createElement("span");
    tag6.textContent = user.roomSleeping;

    tags.appendChild(condition);
    tags.appendChild(tag1);
    tags.appendChild(document.createTextNode(" "));
    tags.appendChild(tag2);
    tags.appendChild(document.createTextNode(" "));
    tags.appendChild(tag3);
    tags.appendChild(document.createTextNode(" "));
    tags.appendChild(tag4);
    tags.appendChild(document.createTextNode(" "));
    tags.appendChild(tag5);
    tags.appendChild(document.createTextNode(" "));
    tags.appendChild(tag6);
    tags.appendChild(document.createTextNode(" "));

    const extraMessage = document.createElement("div");
    extraMessage.classList.add('extraMessage');

    const messageHead = document.createElement("p");
    messageHead.textContent = '👋 추가 설명';

    const message = document.createElement("p");
    message.classList.add('message');
    message.textContent = user.message;

    extraMessage.appendChild(messageHead);
    extraMessage.appendChild(message);

    scrollDiv.appendChild(textDiv);
    scrollDiv.appendChild(tags);
    scrollDiv.appendChild(extraMessage);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const chatDiv = document.createElement("span");
    chatDiv.classList.add('chatDiv');

    const chatButton = document.createElement("button");
    chatButton.textContent = '채팅하기';
    chatButton.style.width =  `${innerWidth - 1100 - 45 - 20 - 30}px`;

    chatDiv.appendChild(chatButton);

    const heartDiv = document.createElement("span");
    heartDiv.classList.add('heartDiv');
    heartDiv.style.marginRight = '20px';


    const heartButton = document.createElement("img");
    heartButton.id = 'heart';
    heartButton.src = 'image/heart2.png';
    heartButton.width = 45;
    heartButton.height = 45;
    heartButton.onclick = function(){imageChange()}

    heartDiv.appendChild(heartButton);

    chatDiv.appendChild(chatButton);
    heartDiv.appendChild(heartButton);

    buttons.appendChild(chatDiv);
    buttons.appendChild(heartDiv);

    detail.appendChild(pictureDiv);
    detail.appendChild(scrollDiv);
    detail.appendChild(buttons);

    sidebar.appendChild(detail);

}

function profileList(loca = ' '){
    // const h4 = document.querySelector(".sidebar h4");
    // h4.style.display = 'none';

    // const sidebarUl = document.querySelector(".sidebar-ul");
    // sidebarUl.style.display = 'none';

    // detailProfile(0);
    ///
    const sidebarUl = document.querySelector(".sidebar ul");
    const list = sidebarUl.querySelectorAll('.sidebar-ul li');
    console.log(list)

    if(list){
        list.forEach(( li)=>{
            sidebarUl.removeChild(li);
            
        })
    }

    const userIndex = localStorage.getItem('index');
    const localData = JSON.parse(localStorage.getItem(userIndex));
    let userList = [];

    //1번 로그인 유저가 없음, 2번 로그인 유저 있
    if(loca === ' ' && !localData){
        userList = users; //로그인 유저 없음
    } else if(loca === ' ' && localData){
        if (localData.location == '혜화'){
            userList = hyehwa
        } else if (localData.location == '성수'){ //추가
            userList = seongsu
        }
    } else if(loca != ' '){ 
        if (loca == '혜화'){
            userList = hyehwa
        } else if (loca == '성수'){ //추가
            userList = seongsu
        }
    }

    const sidebar = document.querySelector(".sidebar");
    sidebar.style.height = `${innerHeight - 103.5}px`;

    const h4 = document.querySelector(".sidebar h4");
    h4.innerText = `🏡 ${localData? userList[0].location: '전체'} 루미를 보고있어요.`

    userList.forEach(function(data) {
        // list
        const listItem = document.createElement("li");
        listItem.classList.add("sidebar-list");
        listItem.addEventListener('click',()=>{
            detailProfile(data.location, data.index);
        })
        //image
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
      
        const image = document.createElement("img");
        image.src = data.img;
        image.width = 70;
        image.height = 70;
      
        imageDiv.appendChild(image);
      
        // profile
        const profile = document.createElement("div");
        profile.classList.add("profile");
      
        // info
        const info = document.createElement("div");
        info.classList.add("info");
      
        const name = document.createElement("span");
        name.textContent = data.name;
      
        const gender = document.createElement("span");
        gender.textContent = data.gender;
      
        const age = document.createElement("span");
        age.textContent = data.age;

        const smoking = document.createElement("span");
        smoking.textContent = data.smoking;

        const sleeping = document.createElement("span");
        sleeping.textContent = data.sleeping;
      
        info.appendChild(name);
        info.appendChild(document.createTextNode(" "));
        info.appendChild(gender);
        info.appendChild(document.createTextNode(" "));
        info.appendChild(age);
        info.appendChild(document.createTextNode(" "));
        info.appendChild(smoking);
        info.appendChild(document.createTextNode(" "));
        info.appendChild(sleeping);

      
        // 태그
        const tags = document.createElement("div");
        tags.classList.add("tags");
        tags.style.width = `${innerWidth - 1100 - 130}px`;
        tags.style.height = '40px';

        const tag1 = document.createElement("span");
        tag1.textContent = data.style;

        const tag2 = document.createElement("span");
        tag2.textContent = data.budget;

        const tag3 = document.createElement("span");
        tag3.textContent = data.deposit;

        const tag4 = document.createElement("span");
        tag4.textContent = data.roomGender;

        const tag5 = document.createElement("span");
        tag5.textContent = data.roomSmoking;

        const tag6 = document.createElement("span");
        tag6.textContent = data.roomSleeping;
      
        tags.appendChild(tag1);
        tags.appendChild(document.createTextNode(" "));
        tags.appendChild(tag2);
        tags.appendChild(document.createTextNode(" "));
        tags.appendChild(tag3);
        tags.appendChild(document.createTextNode(" "));
        tags.appendChild(tag4);
        tags.appendChild(document.createTextNode(" "));
        tags.appendChild(tag5);
        tags.appendChild(document.createTextNode(" "));
        tags.appendChild(tag6);
        tags.appendChild(document.createTextNode(" "));
      
        profile.appendChild(info);
        profile.appendChild(tags);
      
        listItem.appendChild(imageDiv);
        listItem.appendChild(profile);
      
        const sidebarUl = document.querySelector(".sidebar-ul");
        sidebarUl.appendChild(listItem);
        
      });

      const h5 = document.querySelector(".sidebar h5");
      h5.innerText = `총 ${userList.length}개의 결과가 있습니다.`
      
      
}

checkLogin()
logout()
profileList()

