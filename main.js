const app = {
    // 검색 엔진 수집을 위한 하드코딩된 게시글 데이터 (PBN 9개 슬롯 완성)
    posts: [
        {
            id: 1,
            title: "부산 서면 MBC 애견미용학원 인테리어 - 123평 국비지원 교육 공간",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/d17951be56985.jpg",
            description: "부산 서면 123평 규모의 MBC 애견미용학원 인테리어 시공 사례. 밝고 화사한 크림 톤의 전문 교육 환경 조성.",
            content: `
                <p><b>부산 서면</b> 중심가에 위치한 123평 규모의 <b>국비지원 애견미용학원</b> 인테리어 프로젝트입니다. 전체적인 디자인 컨셉은 화사한 크림 톤을 베이스로 하여, 학원 특유의 청결함과 전문적인 이미지를 동시에 강조했습니다.</p>
                <p>입구 라운지부터 상담실, 실습실까지 각 영역의 독립성을 확보하면서도 곡선형 디자인 요소를 가미하여 동선의 효율성을 극대화했습니다. 수강생들이 장시간 머물며 학습과 실습을 병행하는 공간인 만큼 시각적 안정감에 중점을 두어 완성되었습니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=169678198&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">출처: 인디컴퍼니 홈페이지</p>
            `
        },
        {
            id: 2,
            title: "부산 범천동 KH정보교육원 IT·컴퓨터학원 인테리어 - 140평 트렌디한 교육 공간",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/3847ea5974c52.jpg",
            description: "부산 범천동 140평 규모의 IT 컴퓨터학원 인테리어. 2030 세대를 겨냥한 블루 포인트와 모던한 감각의 시공 사례.",
            content: `
                <p><b>부산 범천동</b>에 위치한 140평 규모의 <b>KH정보교육원 IT·컴퓨터학원</b> 인테리어 현장입니다. 이번 프로젝트는 IT 분야의 역동적인 이미지를 살리기 위해 젊고 트렌디한 감각으로 설계되었습니다.</p>
                <p>학원의 브랜드 컬러인 블루와 라이트 그레이를 메인으로 사용하여 공간의 통일성을 주었으며, 높은 층고를 활용한 롱브릭 타일 시공으로 안정감을 더했습니다. 2030 수강생들의 취향에 맞춘 세련된 라운지 설계가 돋보이는 현장입니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=126681688&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">출처: 인디컴퍼니 홈페이지</p>
            `
        },
        {
            id: 3,
            title: "부산 기장 예설라 국어논술학원 인테리어 - 43평 북카페형 학습 공간",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/5b7ff46150430.jpg",
            description: "기장 예설라 국어논술학원 43평 인테리어. 북카페를 닮은 아늑한 라운지와 감성적인 화이트톤 디자인.",
            content: `
                <p><b>부산 기장</b>에 위치한 40평대 <b>국어 논술 학원</b>으로, 북카페를 연상시키는 아늑한 라운지가 특징입니다. 부드러운 곡선 디자인과 플랜테리어를 적용하여 학원의 첫인상을 따뜻하게 구성했습니다.</p>
                <p>총 4개의 강의실은 시각적 피로를 최소화하는 정돈된 컬러로 마감되었으며, 화사한 화이트 톤을 통해 아이들이 독서와 수업에 자연스럽게 몰입할 수 있는 감성적인 학습 환경을 구현했습니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=169978230&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">출처: 인디컴퍼니 홈페이지</p>
            `
        },
        {
            id: 4,
            title: "포항 북구 런던 영어학원 인테리어 - 43평 몰입형 화이트&우드 디자인",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/680989bf77c37.jpg",
            description: "포항 영어학원 43평 인테리어 사례. 화이트와 우드의 조화로 완성한 집중력 높은 교육 공간.",
            content: `
                <p><b>포항 북구</b>에 위치한 영어학원 현장으로, 화이트의 청결함과 우드의 따뜻함이 공존하는 40평대 학습 공간입니다. 라운드 디테일과 간접 조명을 활용해 부드럽고 고급스러운 첫인상을 완성했습니다.</p>
                <p>유리로 구획된 개방형 자습실은 자연광을 적극적으로 끌어들여 학습 효율을 높였으며, 상담실의 곡면 유리 설계는 시각적 안정감과 프라이버시를 동시에 제공하여 신뢰감 있는 교육 환경을 선사합니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=169987154&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">출처: 인디컴퍼니 홈페이지</p>
            `
        },
        {
            id: 5,
            title: "양산 별하랑 국어학원 인테리어 - 40평 라운지 중심의 창의적 공간",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/1ca46dd00ad4f.jpg",
            description: "양산 별하랑 국어학원 인테리어. 아이들의 눈높이에 맞춘 낮은 책장과 따뜻한 채광 설계.",
            content: `
                <p><b>양산</b> 별하랑 국어학원은 교육 철학을 담아 라운지 공간을 비중 있게 설계한 현장입니다. 아이들이 도서관처럼 편안하게 독서할 수 있도록 낮은 책장을 맞춤 제작하여 친근한 분위기를 조성했습니다.</p>
                <p>건물 본연의 따뜻한 채광을 극대화하는 조명 설계로 자연스럽고 안락한 무드를 완성했으며, 학생들이 자유롭게 휴식하며 책과 친해질 수 있는 창의적인 부산학원인테리어의 특징을 잘 보여줍니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=121201368&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">출처: 인디컴퍼니 홈페이지</p>
            `
        },
        {
            id: 6,
            title: "해운대 센텀 유니크어학원 인테리어 - 40평 개방감을 극대화한 변신",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/4ce286b475d67.jpg",
            description: "해운대 센텀 40평 어학원 인테리어. 3m 높은 층고와 유리 부스 시공으로 완성한 시원한 공간.",
            content: `
                <p>기존 치과 공간을 철거하고 어학원으로 새롭게 탄생시킨 <b>해운대 센텀</b> 현장입니다. 좁은 공간의 답답함을 해결하기 위해 층고를 3m로 높이고, 상담실과 자습실을 유리 부스로 마감하여 시각적 개방감을 확보했습니다.</p>
                <p>상가 복도 쪽으로 크게 오픈한 픽스창은 외부 풍경을 액자처럼 담아내어 공간을 더욱 화사하게 만들어줍니다. 교육청 규정을 완벽히 준수하면서도 자유로운 소통이 가능한 세련된 학습 공간입니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=19797828&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">출처: 인디컴퍼니 홈페이지</p>
            `
        },
        {
            id: 7,
            title: "양산 물금 루틴수학학원 인테리어 - 56평 하이엔드 몰입형 환경",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/8b2f389ade133.png",
            description: "양산 물금 56평 수학학원 시공 사례. 베이지와 그린 컬러 포인트를 활용한 신뢰감 있는 공간.",
            content: `
                <p><b>양산 물금</b>에 위치한 56평 규모의 수학학원으로, 차분한 베이지 톤에 그린 컬러 포인트를 활용하여 브랜드 신뢰도를 높였습니다. 곡면 벽체와 유리 파티션을 통해 부드러운 동선과 개방감을 동시에 잡았습니다.</p>
                <p>학습 공간 내부에는 시각적 피로를 줄여주는 그린 보드와 우드 소재를 매치하여 몰입도를 극대화했습니다. 정돈된 여백의 미가 느껴지는 복도와 맞춤형 사이니지까지 하이엔드 교육 공간의 정석을 보여줍니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=170078463&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">출처: 인디컴퍼니 홈페이지</p>
            `
        },
        {
            id: 8,
            title: "부산 강서구 아담리즈 수학학원 인테리어 - 50평 부드러운 곡선 미학",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/9af5045acc665.jpg",
            description: "부산 강서구 50평대 수학학원 인테리어. 곡선과 원형 요소를 활용한 따뜻하고 생기 넘치는 공간.",
            content: `
                <p><b>부산 강서구</b> 50평대 수학학원 프로젝트로, 아이들에게 친근함을 줄 수 있는 부드러운 곡선과 원형 디자인을 메인 컨셉으로 잡았습니다. 베이지와 우드 톤의 조화로 전체적으로 밝고 포근한 분위기를 연출했습니다.</p>
                <p>입구와 오픈 교실에는 적절한 플랜테리어를 배치하여 자연스럽고 생동감 넘치는 환경을 조성했습니다. 시각적 자극을 줄이면서도 감성을 자극하는 안정적인 학습 공간입니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=166037043&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">출처: 인디컴퍼니 홈페이지</p>
            `
        },
        {
            id: 9,
            title: "부산 센텀 EM중고등전문학원 인테리어 - 31평 컬러 테라피 집중력 강화",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/df2ad7789e08f.jpg",
            description: "센텀 31평 중고등 전문 학원 인테리어. 노란색 컬러 테라피를 활용한 몰입도 높은 공간 설계.",
            content: `
                <p>학생들이 장시간 머무는 <b>부산 센텀</b>의 30평대 중고등 전문 학원 현장입니다. 심리적 안정과 집중력 향상을 위해 노란색을 활용한 <b>컬러 테라피</b>를 인테리어에 도입했습니다.</p>
                <p>좌뇌를 자극하여 학습 효율을 높여주는 노란색 포인트를 미드센추리 모던 스타일의 가구와 조합하여 세련된 분위기를 완성했습니다. 공간의 크리에이티브한 감각을 살려 학생들이 자발적으로 공부하고 싶은 환경을 구축했습니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=121208770&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
                <p style="font-size: 12px; color: #888; margin-top: 10px;">출처: 인디컴퍼니 홈페이지</p>
            `
        }
    ],

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
                ${post.image ? `<img src="${post.image}" class="post-thumb" alt="${post.title}">` : `<div class="post-thumb" style="background: #dd5828; color: white; opacity: 0.1;"></div>`}
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
            document.title = "부산 학원 인테리어 사례 | 전문 시공 포트폴리오";
            document.querySelector('meta[name="description"]').setAttribute("content", "부산 지역 학원 인테리어 전문 시공 사례 모음. 영어, 수학, 음악 학원 등 업종별 맞춤 디자인 확인.");
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

        document.title = `${post.title} | 부산 학원 인테리어 사례`;
        document.querySelector('meta[name="description"]').setAttribute("content", post.description);

        const content = document.getElementById('post-detail-content');
        content.innerHTML = `
            <h2 style="color: #dd5828; margin-bottom: 20px; line-height: 1.4;">${post.title}</h2>
            ${post.image ? `<img src="${post.image}" style="width:100%; border-radius:8px; margin-bottom:20px;" alt="${post.title}">` : ''}
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
        
        const fileInput = document.getElementById('post-image-file');
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (readerEvent) => {
                    this.uploadedImage = readerEvent.target.result;
                    document.getElementById('image-preview').innerHTML = `<img src="${this.uploadedImage}" style="max-width:200px;">`;
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
            image: this.uploadedImage || "",
            content,
            description: title
        };

        this.posts.unshift(newPost);
        this.renderPosts();
        alert("게시글이 임시 등록되었습니다. 영구 저장을 원하시면 해당 코드를 main.js 데이터에 추가해야 합니다.");
        location.hash = '#home';
    },

    toggleModal(show) {
        document.getElementById('privacy-modal').style.display = show ? 'block' : 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
