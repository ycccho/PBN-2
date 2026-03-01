const app = {
    posts: [
        {
            id: 1,
            title: "부산 해운대구 수학학원 인테리어 시공 사례",
            image: "https://cdn.imweb.me/thumbnail/20260123/23d57f54c6af8.jpg",
            content: "<p><b>해운대구 수학학원</b>의 집중력을 높이는 차분한 블루 톤의 인테리어 사례입니다. 학생들의 학습 효율을 극대화하기 위한 조명 설계와 개별 학습 공간 분리에 중점을 두었습니다.</p><p><a href='https://inde.co.kr' target='_blank'>부산학원인테리어 상세 견적 확인하기</a></p>"
        },
        {
            id: 2,
            title: "연산동 영어학원 깔끔한 모던 스타일 인테리어",
            image: "https://cdn.imweb.me/thumbnail/20251208/6b9edf94b74d4.jpg",
            content: "<p><span style='font-size: 20px; color: #dd5828;'>모던하고 세련된</span> 영어학원 인테리어입니다. 로비 공간을 카페처럼 꾸며 학생과 학부모님이 편안하게 대기할 수 있도록 설계했습니다.</p><p><a href='https://inde.co.kr' target='_blank'>인디컴퍼니 시공 사례 더보기</a></p>"
        },
        {
            id: 3,
            title: "부산 남구 음악학원 방음 및 디자인 동시 해결",
            image: "https://cdn.imweb.me/thumbnail/20251208/b8aa7836ce4ba.jpg",
            content: "<p>음악학원의 핵심인 <b>철저한 방음 시공</b>과 함께 감성적인 디자인을 입혔습니다. 각 연습실마다 개별 냉난방 시스템을 구축하여 쾌적한 환경을 제공합니다.</p><p><a href='https://blog.naver.com/dudu8882' target='_blank'>음악학원 시공 블로그 후기</a></p>"
        },
        {
            id: 4,
            title: "동래구 국어학원 전통과 현대의 조화",
            image: "https://cdn.imweb.me/thumbnail/20260301/1f63b4f21c14b.png",
            content: "<p>국어학원의 특색을 살려 한옥의 요소를 현대적으로 재해석한 인테리어입니다. 안정감을 주는 우드 톤 소재를 주로 사용하여 학습 몰입도를 높였습니다.</p><p><a href='https://inde.co.kr' target='_blank'>동래구 학원 인테리어 문의</a></p>"
        },
        {
            id: 5,
            title: "부산 수영구 미술학원 창의력을 자극하는 공간",
            image: "https://cdn.imweb.me/thumbnail/20251105/f93d17f7afe1f.png",
            content: "<p>높은 층고와 개방감을 살린 미술학원 공간입니다. <b style='color: #dd5828;'>자연 채광</b>을 최대한 활용하여 색채 감각을 익히기에 최적화된 환경을 조성했습니다.</p><p><a href='https://busaninterior.kr' target='_blank'>부산 미술학원 추천 정보</a></p>"
        },
        {
            id: 6,
            title: "사하구 태권도장 넓고 안전한 시공 사례",
            image: "https://cdn.imweb.me/thumbnail/20251208/f3aad1ca855f8.jpg",
            content: "<p>아이들의 안전을 최우선으로 생각한 태권도장 인테리어입니다. 충격 흡수 매트 시공과 모서리 보호 처리를 완벽하게 마쳤으며, 시인성 좋은 컬러를 사용했습니다.</p><p><a href='https://pbn-1.pages.dev' target='_blank'>도장 면적 계산해보기</a></p>"
        },
        {
            id: 7,
            title: "부산 진구 코딩학원 테크니컬한 디자인",
            image: "https://cdn.imweb.me/thumbnail/20251208/2d4f7cf41b730.jpg",
            content: "<p>최신 IT 교육 환경에 맞춘 스마트한 코딩학원 인테리어입니다. 선정리가 깔끔한 전용 데스크 제작과 눈의 피로를 덜어주는 간접 조명을 설치했습니다.</p><p><a href='https://inde.co.kr' target='_blank'>코딩학원 인테리어 무료 상담</a></p>"
        },
        {
            id: 8,
            title: "금정구 입시학원 대강의실 및 소강의실 배치",
            image: "https://cdn.imweb.me/thumbnail/20251208/cb71225733f49.jpg",
            content: "<p>입시 학원의 효율적인 동선 확보를 위한 평면 설계 사례입니다. <b>공간 분리</b>를 통해 소음 간섭을 최소화하고 대규모 인원을 수용할 수 있도록 했습니다.</p><p><a href='https://blog.naver.com/dudu8882' target='_blank'>입시학원 전문 포트폴리오</a></p>"
        },
        {
            id: 9,
            title: "북구 보습학원 소규모 공간 알찬 구성",
            image: "https://cdn.imweb.me/thumbnail/20260125/9a5a86f1d9000.jpg",
            content: "<p>소규모 공간이지만 답답하지 않게 화이트 톤으로 확장감을 준 보습학원입니다. 자투리 공간을 활용한 상담실과 교재 보관함 제작이 돋보이는 현장입니다.</p><p><a href='https://inde.co.kr' target='_blank'>보습학원 소규모 시공 문의</a></p>"
        }
    ],

    init() {
        this.renderPosts();
        this.setupEventListeners();
    },

    renderPosts() {
        const grid = document.getElementById('posts-grid');
        grid.innerHTML = this.posts.map(post => `
            <div class="post-card" onclick="app.showDetail(${post.id})">
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
            </div>
        `).join('');
    },

    setupEventListeners() {
        document.getElementById('admin-btn').addEventListener('click', () => this.showAdmin());
        document.getElementById('privacy-btn').addEventListener('click', () => this.toggleModal(true));
        document.querySelector('.close').addEventListener('click', () => this.toggleModal(false));
        document.getElementById('post-form').addEventListener('submit', (e) => this.handlePostSubmit(e));
        
        // Window click to close modal
        window.onclick = (event) => {
            if (event.target == document.getElementById('privacy-modal')) {
                this.toggleModal(false);
            }
        };
    },

    showHome() {
        document.getElementById('home-view').classList.remove('hidden');
        document.getElementById('detail-view').classList.add('hidden');
        document.getElementById('admin-view').classList.add('hidden');
        window.scrollTo(0, 0);
    },

    showDetail(id) {
        const post = this.posts.find(p => p.id === id);
        if (!post) return;

        const content = document.getElementById('post-detail-content');
        content.innerHTML = `
            <h2>${post.title}</h2>
            <img src="${post.image}" alt="${post.title}">
            <div class="detail-body">${post.content}</div>
        `;

        document.getElementById('home-view').classList.add('hidden');
        document.getElementById('detail-view').classList.remove('hidden');
        window.scrollTo(0, 0);
    },

    showAdmin() {
        const pass = prompt("관리자 암호를 입력하세요:");
        if (pass === "admin123") { // Simple mock auth
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('detail-view').classList.add('hidden');
            document.getElementById('admin-view').classList.remove('hidden');
        } else {
            alert("비밀번호가 올바르지 않습니다.");
        }
    },

    execCmd(command, value = null) {
        document.execCommand(command, false, value);
    },

    handlePostSubmit(e) {
        e.preventDefault();
        const title = document.getElementById('post-title').value;
        const image = document.getElementById('post-image').value;
        const content = document.getElementById('post-body').innerHTML;

        const newPost = {
            id: this.posts.length + 1,
            title,
            image,
            content
        };

        this.posts.unshift(newPost); // Add to beginning
        this.renderPosts();
        this.showHome();
        alert("게시글이 성공적으로 등록되었습니다 (새로고침 시 초기화됩니다).");
    },

    toggleModal(show) {
        document.getElementById('privacy-modal').style.display = show ? 'block' : 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
