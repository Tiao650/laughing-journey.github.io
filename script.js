
// 轮播功能
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    currentSlide = index;
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

document.querySelector('.banner-next').addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.banner-prev').addEventListener('click', () => showSlide(currentSlide - 1));
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
});

// 自动轮播
setInterval(() => showSlide(currentSlide + 1), 4000);

// 角色切换数据
const characterData = {
    moli: {
        name: '莫莉',
        desc: '莫莉的灵感来源于一个孩子形象，孩子有着明亮的蓝眼睛、嘟嘴，穿着画家帽和长袍。她手持画笔，象征着一个 小画家。她可爱、聪明且自信，她的形象和各种形象持续吸引着众多粉丝，帮助莫莉成为极受欢迎的玩具。',
        img: 'images/people (1).webp',
        products: [
            { img: 'images/new1.png', name: 'MOLLY沿途的风景系列-项链盲盒' },
            { img: 'images/new2.webp', name: '愤怒的莫莉 - 心火怒放系列毛绒挂件盲盒' },
            { img: 'images/new3.png', name: '超级皇家莫莉 400% 童心2026' },
            { img: 'images/new4.png', name: 'MOLLY沿途的风景系列-冰箱贴盲盒' }
        ]
    },
    aiwugui: {
        name: '爱哭鬼',
        desc: 'CRYBABY既不是男孩也不是女孩;这甚至不仅仅是人类。它代表着一种直接发自内心深处的情感。它可以是任何东西，也可以是任何东西！笑声并不是让你感觉好些的唯一方式——哭泣也能治愈自己。如果有一天，笑容无法缓解你的烦恼，宝贝，让我们一起哭吧。',
        img: 'images/people (2).webp',
        products: [
            { img: 'images/new5.png', name: 'CRYBABY 泪流成海系列手办' },
            { img: 'images/new6.png', name: 'CRYBABY 眼泪的秘密系列盲盒' },
            { img: 'images/new7.webp', name: 'CRYBABY 哭泣美术馆系列-限量' },
            { img: 'images/new8.png', name: 'CRYBABY 雨天回忆系列-钥匙扣' }
        ]
    },
    dimeng: {
        name: '迪穆',
        desc: 'DIMOO的世界是一个充满幻想与冒险的奇妙空间。每一个角色都承载着独特的故事与情感，邀请你一同探索未知的精彩旅程。',
        img: 'images/people (3).webp',
        products: [
            { img: 'images/new9.png', name: 'DIMOO 梦境旅行系列手办' },
            { img: 'images/new10.png', name: 'DIMOO 时光隧道系列盲盒' },
            { img: 'images/new11.png', name: 'DIMOO 水族馆系列限定手办' },
            { img: 'images/new12.png', name: 'DIMOO 童话森林系列-摆件' }
        ]
    },
    guaiwu: {
        name: '怪物们',
        desc: '2015年，卡辛的个人风格在他的作品中日益突出，他开始创造自己的精灵角色和精灵世界。他以黑白为基调的线条搭配大胆而大胆的笔触，打造了卡辛作品中最著名的系列——精灵天团（中文译为精灵天团）。',
        img: 'images/people (4).webp',
        products: [
            { img: 'images/new13.png', name: '精灵天团 暗夜系列手办' },
            { img: 'images/new14.png', name: '精灵天团 丛林秘语系列盲盒' },
            { img: 'images/new15.png', name: '精灵天团 学院风系列-限定' },
            { img: 'images/new16.png', name: '精灵天团 童话镇系列-挂件' }
        ]
    },
    qilinmao: {
        name: '骷髅熊猫',
        desc: '他戴着带有双侧耳球的宇航员头盔、圆润的腿部和微微张开的嘴唇露出牙齿，SKULLPANDA 始终在二元性之间寻求平衡——一种我们都渴望的无拘无束状态。',
        img: 'images/people (5).webp',
        products: [
            { img: 'images/new17.png', name: 'SKULLPANDA 城市之光系列手办' },
            { img: 'images/new18.png', name: 'SKULLPANDA 幻影系列盲盒' },
            { img: 'images/new19.png', name: 'SKULLPANDA 夜行都市系列-限定' },
            { img: 'images/new20.jpg', name: 'SKULLPANDA 声波系列-摆件' }
        ]
    },
    yishanyishan: {
        name: '一闪一闪',
        desc: '星人由一群小星星组成，他们共同讲述关于勇气、渴望和爱的故事。他们开朗好奇，带着一丝固执和笨拙。他们脸红的小脸看起来既像快乐的孩子，也像害羞的大人。',
        img: 'images/people (6).webp',
        products: [
            { img: 'images/new21.png', name: '星人 夜空传说系列手办' },
            { img: 'images/new22.jpg', name: '星人 星光物语系列盲盒' },
            { img: 'images/new23.png', name: '星人 闪耀银河系列-限量' },
            { img: 'images/new24.jpg', name: '星人 流星许愿系列-挂饰' }
        ]
    }
};

// 渲染产品列表
function renderProducts(products) {
    const container = document.getElementById('characterProducts');
    container.innerHTML = products.map(p =>
        `<div class="character-product-item">
            <img src="${p.img}" alt="${p.name}">
            <a href="#" class="product-name">${p.name}</a>
        </div>`
    ).join('');
}

// 初始化默认角色产品
renderProducts(characterData.moli.products);

document.querySelectorAll('.ip-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        const key = this.dataset.character;
        const data = characterData[key];
        if (!data) return;

        document.querySelectorAll('.ip-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        document.getElementById('characterName').textContent = data.name;
        document.getElementById('characterDesc').textContent = data.desc;
        document.getElementById('characterImg').src = data.img;
        document.getElementById('characterImg').alt = data.name;

        // 切换产品列表
        renderProducts(data.products);
    });
});
