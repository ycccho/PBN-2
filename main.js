const app = {
    posts: [
        { id: 1, title: "해운대구 수학학원 인테리어 시공", image: null, content: "<p>학습 효율을 높이는 조명과 차분한 컬러의 조화.</p><p><a href='https://inde.co.kr' target='_blank'>상세 견적 보기</a></p>" },
        { id: 2, title: "연산동 영어학원 모던 스타일", image: null, content: "<p>세련된 로비와 개방감 있는 강의실 설계.</p><p><a href='https://inde.co.kr' target='_blank'>시공 사례 더보기</a></p>" },
        { id: 3, title: "남구 음악학원 방음 전문 시공", image: null, content: "<p>완벽한 방음과 감성적인 디자인의 만남.</p><p><a href='https://blog.naver.com/dudu8882' target='_blank'>블로그 후기 확인</a></p>" },
        { id: 4, title: "동래구 국어학원 우드톤 인테리어", image: null, content: "<p>안정감을 주는 원목 소재와 현대적인 가구 배치.</p><p><a href='https://inde.co.kr' target='_blank'>동래구 학원 공사 문의</a></p>" },
        { id: 5, title: "수영구 미술학원 창의적 공간", image: null, content: "<p>자연광이 풍부한 넓은 아뜰리에 구성.</p><p><a href='https://busaninterior.kr' target='_blank'>부산 인테리어 정보</a></p>" },
        { id: 6, title: "사하구 태권도장 안전 시공", image: null, content: "<p>충격 흡수 매트와 아이들을 위한 안전 설계.</p><p><a href='https://pbn-1.pages.dev' target='_blank'>면적 계산기 바로가기</a></p>" },
        { id: 7, title: "진구 코딩학원 스마트 오피스", image: null, content: "<p>최첨단 IT 교육 환경에 맞춘 네트워크 및 전기 공사.</p><p><a href='https://inde.co.kr' target='_blank'>코딩학원 전문 상담</a></p>" },
        { id: 8, title: "금정구 입시학원 대강의실 배치", image: null, content: "<p>많은 학생을 수용할 수 있는 효율적인 공간 분할.</p><p><a href='https://blog.naver.com/dudu8882' target='_blank'>입시학원 포트폴리오</a></p>" },
        { id: 9, title: "북구 보습학원 깔끔한 화이트톤", image: null, content: "<p>좁은 공간을 넓어 보이게 하는 화이트 컨셉.</p><p><a href='https://inde.co.kr' target='_blank'>무료 견적 요청</a></p>" }
    ],
    uploadedImage: null,

    init() {
        this.renderPosts();
        this.setupEventListeners();
        this.handleRouting();
        window.addEventListener('hashchange', () => this.handleRouting());
    },

    renderPosts() {
        const grid = document.getElementById('posts-grid');
        grid.innerHTML = this.posts.map(post => `
            <div class="post-card" onclick="location.hash='#post/${post.id}'">
                ${post.image ? `<img src="${post.image}" class="post-thumb">` : `<div class="post-thumb">No Image</div>`}
                <h3>${post.title}</h3>
            </div>
        `).join('');
    },

    handleRouting() {
        const hash = window.location.hash || '#home';
        const views = document.querySelectorAll('.view');
        views.forEach(v => v.classList.add('hidden'));

        if (hash === '#home') {
            document.getElementById('home-view').classList.remove('hidden');
        } else if (hash.startsWith('#post/')) {
            const id = parseInt(hash.split('/')[1]);
            this.showDetail(id);
        } else if (hash === '#admin') {
            this.showAdmin();
        }
    },

    showDetail(id) {
        const post = this.posts.find(p => p.id === id);
        if (!post) { location.hash = '#home'; return; }

        const content = document.getElementById('post-detail-content');
        content.innerHTML = `
            <h2>${post.title}</h2>
            ${post.image ? `<img src="${post.image}">` : ''}
            <div class="detail-body">${post.content}</div>
        `;
        document.getElementById('detail-view').classList.remove('hidden');
        window.scrollTo(0, 0);
    },

    showAdmin() {
        const pass = prompt("관리자 암호를 입력하세요:");
        if (pass === "1") {
            document.getElementById('admin-view').classList.remove('hidden');
        } else {
            alert("비밀번호가 틀렸습니다.");
            location.hash = '#home';
        }
    },

    setupEventListeners() {
        document.getElementById('admin-btn').addEventListener('click', () => location.hash = '#admin');
        document.getElementById('privacy-btn').addEventListener('click', () => this.toggleModal(true));
        document.querySelector('.close').addEventListener('click', () => this.toggleModal(false));
        
        // Image Upload logic
        const fileInput = document.getElementById('post-image-file');
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (readerEvent) => {
                    this.uploadedImage = readerEvent.target.result;
                    document.getElementById('image-preview').innerHTML = `<img src="${this.uploadedImage}">`;
                };
                reader.readAsDataURL(file);
            }
        });

        document.getElementById('post-form').addEventListener('submit', (e) => this.handlePostSubmit(e));
        
        window.onclick = (event) => {
            if (event.target == document.getElementById('privacy-modal')) this.toggleModal(false);
        };
    },

    execCmd(command, value = null) {
        document.execCommand(command, false, value);
    },

    handlePostSubmit(e) {
        e.preventDefault();
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-body').innerHTML;

        const newPost = {
            id: Date.now(),
            title,
            image: this.uploadedImage,
            content
        };

        this.posts.unshift(newPost);
        this.renderPosts();
        this.uploadedImage = null;
        document.getElementById('image-preview').innerHTML = '';
        e.target.reset();
        document.getElementById('post-body').innerHTML = '';
        location.hash = '#home';
        alert("게시글이 등록되었습니다.");
    },

    toggleModal(show) {
        document.getElementById('privacy-modal').style.display = show ? 'block' : 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
