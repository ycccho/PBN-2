document.addEventListener('DOMContentLoaded', () => {

  // 1. Data Definitions (Based on scraped data)
  const rankingsData = [
    { num: 1, category: '의료', title: '삼성스마트 내과·안과 126평', price: '1억 4,400만원', img: 'https://cdn.imweb.me/thumbnail/20251105/f93d17f7afe1f.png' },
    { num: 2, category: '사무', title: '마리넥스 무역회사 37평', price: '5,000만원', img: 'https://cdn.imweb.me/thumbnail/20251208/f3aad1ca855f8.jpg' },
    { num: 3, category: '교육', title: 'MBC 애견미용학원 123평', price: '1억 3,000만원', img: 'https://cdn.imweb.me/thumbnail/20251208/6b9edf94b74d4.jpg' },
    { num: 4, category: '교육', title: 'KH 국비지원학원 142평', price: '2억 3,800만원', img: 'https://cdn.imweb.me/thumbnail/20260123/23d57f54c6af8.jpg' },
    { num: 5, category: '교육', title: '별하랑 국어학원 46평', price: '4,600만원', img: 'https://cdn.imweb.me/thumbnail/20251208/b8aa7836ce4ba.jpg' }
  ];

  const portfolioData = [
    { category: '교육', title: 'MBC 애견미용학원', desc: '123평 인테리어 디자인', img: 'https://cdn.imweb.me/thumbnail/20251208/6b9edf94b74d4.jpg' },
    { category: '의료', title: '삼성스마트 내과·안과', desc: '126평 병원 리모델링', img: 'https://cdn.imweb.me/thumbnail/20251105/f93d17f7afe1f.png' },
    { category: '교육', title: 'KH 정보교육원', desc: '142평 국비지원학원', img: 'https://cdn.imweb.me/thumbnail/20260123/23d57f54c6af8.jpg' },
    { category: '사무', title: '마리넥스 무역회사', desc: '37평 오피스 공간', img: 'https://cdn.imweb.me/thumbnail/20251208/f3aad1ca855f8.jpg' },
    { category: '사무', title: '지사동 사무실', desc: '기업 오피스 디자인', img: 'https://cdn.imweb.me/thumbnail/20251208/2d4f7cf41b730.jpg' },
    { category: '의료', title: '연세소울 정신건강의학과', desc: '의원 인테리어', img: 'https://cdn.imweb.me/thumbnail/20251208/cb71225733f49.jpg' },
    { category: '의료', title: '정재활의학과', desc: '재활 병원 리모델링', img: 'https://cdn.imweb.me/thumbnail/20260125/9a5a86f1d9000.jpg' },
    { category: '교육', title: '별하랑 국어학원', desc: '46평 교육 공간', img: 'https://cdn.imweb.me/thumbnail/20251208/b8aa7836ce4ba.jpg' }
  ];

  // 2. Inject Rankings
  const rankingList = document.getElementById('ranking-list');
  rankingsData.forEach(item => {
    const el = document.createElement('div');
    el.className = 'ranking-item';
    el.innerHTML = `
      <div class="ranking-num">${item.num}</div>
      <img src="${item.img}" alt="${item.title}" class="ranking-img">
      <div class="ranking-info">
        <div class="ranking-category">${item.category}</div>
        <div class="ranking-title">${item.title}</div>
        <div class="ranking-price">${item.price}</div>
      </div>
    `;
    rankingList.appendChild(el);
  });

  // 3. Inject Portfolio with Filtering
  const portfolioGrid = document.getElementById('portfolio-grid');
  
  function renderPortfolio(filterCategory) {
    portfolioGrid.innerHTML = '';
    const filtered = filterCategory === '전체' 
      ? portfolioData 
      : portfolioData.filter(item => item.category === filterCategory);
      
    filtered.forEach(item => {
      const el = document.createElement('div');
      el.className = 'portfolio-item';
      el.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="portfolio-img">
        <div class="portfolio-info">
          <div class="ranking-category">${item.category}</div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `;
      portfolioGrid.appendChild(el);
    });
  }

  // Initial render
  renderPortfolio('전체');

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderPortfolio(e.target.textContent);
    });
  });

  // 4. Privacy Policy Modal Logic
  const privacyLink = document.getElementById('privacy-link');
  const privacyModal = document.getElementById('privacy-modal');
  const closeModal = document.getElementById('close-modal');

  privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    privacyModal.classList.add('active');
  });

  closeModal.addEventListener('click', () => {
    privacyModal.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
      privacyModal.classList.remove('active');
    }
  });

  // Smooth Scrolling for Nav Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href') === '#privacy') return; // Skip modal link
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });

});