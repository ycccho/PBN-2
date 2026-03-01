const app = {
    // 검색 엔진이 수집할 수 있도록 하드코딩된 게시글 데이터 (PBN 핵심)
    posts: [
        {
            id: 1,
            title: "부산 서면 MBC 애견미용학원 인테리어 - 123평 국비지원 교육 공간",
            image: "https://cdn.imweb.me/upload/S20230327c0ff5f00bb0c3/d17951be56985.jpg",
            description: "부산 서면 123평 규모의 MBC 애견미용학원 인테리어 시공 사례. 밝고 화사한 크림 톤의 전문 교육 환경 조성.",
            content: `
                <p><b>부산 서면</b> 중심가에 위치한 123평 규모의 <b>국비지원 애견미용학원</b> 인테리어 프로젝트입니다. 전체적인 디자인 컨셉은 화사한 크림 톤을 베이스로 하여, 학원 특유의 청결함과 전문적인 이미지를 동시에 강조했습니다.</p>
                <p>공간 구성은 방문객을 맞이하는 입구 라운지부터 상담실, 애견샵, 이론 강의실, 실습실까지 각 영역의 독립성을 확보하면서도 동선의 효율성을 극대화했습니다. 특히 곡선형 디자인 요소를 가미하여 100평대의 넓은 공간이 자칫 딱딱해 보이지 않도록 부드러운 흐름을 유도했습니다.</p>
                <p>수강생들이 장시간 머물며 학습과 실습을 병행하는 공간인 만큼, 시각적 안정감과 쾌적한 환경 조성에 중점을 두어 성공적으로 완성된 현장입니다.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><a href="https://indecompany.imweb.me/A00/?idx=169678198&bmode=view" target="_blank" style="color: #dd5828; font-weight: bold; text-decoration: none;">👉 부산학원인테리어 본문 보러가기</a></p>
            `
        },
        {
            id: 2,
            title: "연제구 연산동 영어학원 인테리어 - 세련된 카페형 로비 디자인",
            image: "",
            description: "연산동 영어학원의 개방감 있는 로비와 모던한 강의실 인테리어입니다.",
            content: `
                <p><span style="font-size: 20px; color: #dd5828;"><b>모던하고 감각적인</b></span> 연산동 영어학원 인테리어 사례입니다. 학생들과 학부모님이 편안하게 대기할 수 있는 카페형 로비 공간을 조성했습니다.</p>
                <p>통유리창을 활용하여 개방감을 주었으며, 각 강의실은 최신 학습 트렌드에 맞춘 스마트 기기 활용이 용이하도록 전기 공사를 꼼꼼히 진행했습니다.</p>
                <p><a href="https://blog.naver.com/dudu8882" target="_blank"><b>영어학원 시공 후기 블로그 확인</b></a></p>
            `
        },
        {
            id: 3,
            title: "부산 남구 대연동 음악학원 방음 공사 및 인테리어 사례",
            image: "",
            description: "남구 대연동 음악학원의 완벽한 방음과 세련된 디자인 동시 구현 사례입니다.",
            content: `
                <p><b>부산 남구 대연동</b>에 위치한 음악학원 현장입니다. 음악학원의 가장 중요한 요소인 방음 시설을 위해 특수 흡음재와 차음재를 꼼꼼히 시공하였습니다.</p>
                <p>각 개인 연습실마다 개별 냉난방 시스템을 구축하였으며, 전체적으로 밝고 화사한 화이트&우드 톤으로 디자인하여 감성적인 공간을 완성했습니다.</p>
                <p><a href="https://busaninterior.kr" target="_blank"><b>부산 지역 음악학원 인테리어 정보 더보기</b></a></p>
            `
        },
        {
            id: 4,
            title: "동래구 안락동 국어학원 인테리어 - 원목 소재를 활용한 안정감",
            image: "",
            description: "동래구 안락동 국어학원의 따뜻하고 안정적인 원목 인테리어 시공 사례입니다.",
            content: `
                <p>집중력이 필요한 <b>국어학원</b>의 특성에 맞춰 원목 소재를 적극 활용한 인테리어입니다. 전체적으로 따뜻한 베이지 톤과 우드의 조합으로 심리적 안정감을 제공합니다.</p>
                <p>대형 강의실과 소규모 그룹 수업용 강의실을 적절히 배치하여 공간 활용도를 높였으며, 복도 공간에는 학생들의 작품을 전시할 수 있는 월을 제작했습니다.</p>
                <p><a href="https://pbn-1.pages.dev" target="_blank"><b>인테리어 면적 및 견적 계산기 사용하기</b></a></p>
            `
        },
        {
            id: 5,
            title: "부산 수영구 민락동 미술학원 인테리어 - 창의력을 높이는 채광 설계",
            image: "",
            description: "수영구 민락동 미술학원의 넓은 아뜰리에와 자연광을 극대화한 인테리어입니다.",
            content: `
                <p><b style="color: #dd5828;">창의적인 예술 공간</b>, 수영구 민락동 미술학원 인테리어입니다. 높은 층고를 그대로 살려 개방감을 주었으며, 자연광이 풍부하게 들어오도록 설계했습니다.</p>
                <p>바닥은 오염에 강하고 관리가 쉬운 에폭시 시공을 진행하였고, 학생들의 작품이 돋보일 수 있는 갤러리형 조명을 배치했습니다.</p>
                <p><a href="https://inde.co.kr" target="_blank"><b>부산 미술학원 인테리어 무료 상담</b></a></p>
            `
        },
        {
            id: 6,
            title: "사하구 당리동 태권도장 인테리어 - 안전을 최우선으로 한 시공",
            image: "",
            description: "사하구 당리동 태권도장의 충격 흡수 매트 시공과 안전한 실내 인테리어 사례입니다.",
            content: `
                <p>아이들이 마음껏 뛰어놀 수 있는 <b>사하구 당리동 태권도장</b> 현장입니다. 최고급 충격 흡수 매트를 전체 시공하여 안전 사고를 미연에 방지했습니다.</p>
                <p>기둥마다 모서리 보호 처리를 완료하였으며, 활기찬 분위기를 조성하기 위해 화이트 베이스에 파란색 포인트 컬러를 적용했습니다.</p>
                <p><a href="https://blog.naver.com/dudu8882" target="_blank"><b>도장 인테리어 포트폴리오 확인</b></a></p>
            `
        },
        {
            id: 7,
            title: "부산진구 양정동 코딩학원 인테리어 - 스마트 학습 환경 조성",
            image: "",
            description: "부산진구 양정동 코딩학원의 효율적인 네트워크 배선과 모던한 인테리어 사례입니다.",
            content: `
                <p>최신 IT 교육 트렌드에 맞춘 <b>부산진구 양정동 코딩학원</b>입니다. 많은 PC 장비가 들어가는 만큼 전력 부하와 지저분한 배선을 깔끔하게 매립 처리했습니다.</p>
                <p>눈의 피로를 덜어주는 LED 조명과 개인별 학습 집중도를 높이는 데스크 파티션을 맞춤 제작하여 쾌적한 학습 환경을 완성했습니다.</p>
                <p><a href="https://busaninterior.kr" target="_blank"><b>부산 코딩학원 전문 인테리어 상담</b></a></p>
            `
        },
        {
            id: 8,
            title: "금정구 구서동 입시학원 인테리어 - 대강의실 및 소강의실 배치 최적화",
            image: "",
            description: "금정구 구서동 입시학원의 효율적인 동선 확보와 대규모 강의실 배치 사례입니다.",
            content: `
                <p><b>금정구 구서동</b> 대형 입시학원 현장입니다. 수험생들의 동선을 최우선으로 고려하여 복도를 넓게 설계하고 대강의실을 중앙에 배치했습니다.</p>
                <p>방음 도어와 이중 창호 시공으로 외부 소음을 완벽히 차단하였으며, 자습실은 칸막이 독서실형으로 제작하여 면학 분위기를 극대화했습니다.</p>
                <p><a href="https://pbn-1.pages.dev" target="_blank"><b>학원 평수별 인테리어 견적 확인</b></a></p>
            `
        },
        {
            id: 9,
            title: "부산 북구 화명동 보습학원 인테리어 - 좁은 공간 활용의 정석",
            image: "",
            description: "부산 북구 화명동 보습학원의 화이트톤 확장감과 알찬 공간 구성 사례입니다.",
            content: `
                <p>좁은 평수의 공간을 넓어 보이게 만든 <b>부산 북구 화명동</b> 보습학원입니다. 전체 화이트 톤 베이스에 유리 파티션을 사용하여 공간감을 확보했습니다.</p>
                <p>자투리 공간을 활용한 상담실과 교재 보관함을 맞춤 제작하여 수납 효율을 높였으며, 밝은 조명 배치로 활기찬 학원 분위기를 조성했습니다.</p>
                <p><a href="https://inde.co.kr" target="_blank"><b>소규모 학원 인테리어 견적 문의</b></a></p>
            `
        }
    ],

    init() {
        this.renderPosts();
        this.setupEventListeners();
        this.handleRouting();
        window.addEventListener('hashchange', () => this.handleRouting());
    },

    // 3x3 그리드 렌더링
    renderPosts() {
        const grid = document.getElementById('posts-grid');
        grid.innerHTML = this.posts.map(post => `
            <div class="post-card" onclick="location.hash='#post/${post.id}'">
                ${post.image ? `<img src="${post.image}" class="post-thumb" alt="${post.title}">` : `<div class="post-thumb" style="background: #dd5828; color: white; opacity: 0.1;"></div>`}
                <h3>${post.title}</h3>
            </div>
        `).join('');
    },

    // 해시 기반 라우팅 및 SEO 메타 데이터 동적 변경
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

        // 브라우저 타이틀 및 메타 설명 변경 (SEO 핵심)
        document.title = `${post.title} | 부산 학원 인테리어 사례`;
        document.querySelector('meta[name="description"]').setAttribute("content", post.description);

        const content = document.getElementById('post-detail-content');
        content.innerHTML = `
            <h2 style="color: #dd5828; margin-bottom: 20px;">${post.title}</h2>
            ${post.image ? `<img src="${post.image}" style="width:100%; border-radius:8px; margin-bottom:20px;">` : ''}
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
        
        // 이미지 업로드 미리보기 기능
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

    // 관리자 페이지 등록 (임시 확인용)
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
