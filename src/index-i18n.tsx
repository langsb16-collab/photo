import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// CORS 설정
app.use('/api/*', cors())

// 정적 파일 제공
app.use('/static/*', serveStatic({ root: './public' }))

// 언어별 라우트 처리
const languages = ['ko', 'en', 'zh', 'ja', 'vi', 'mn', 'ru'];

languages.forEach(lang => {
  app.get(`/${lang}`, (c) => c.redirect(`/?lang=${lang}`));
});

// 메인 페이지 (다국어 지원)
app.get('/', (c) => {
  const lang = c.req.query('lang') || 'ko';
  
  return c.html(`
    <!DOCTYPE html>
    <html lang="${lang}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>K-FoodScan - Find Global Foods With Just One Photo</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Sans+SC:wght@400;500;700;900&display=swap');
            
            * {
                font-family: 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif;
            }
            
            .gradient-bg {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            
            .hero-gradient {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            }
            
            .card-hover {
                transition: all 0.3s ease;
            }
            
            .card-hover:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }
            
            .scan-animation {
                animation: scan 2s ease-in-out infinite;
            }
            
            @keyframes scan {
                0%, 100% { transform: translateY(0); opacity: 1; }
                50% { transform: translateY(10px); opacity: 0.5; }
            }
            
            .pulse-slow {
                animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            
            .image-preview {
                max-height: 400px;
                object-fit: contain;
            }
            
            .loading-spinner {
                border: 3px solid #f3f3f3;
                border-top: 3px solid #667eea;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .result-item {
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .result-item:hover {
                background: #f8f9ff;
                border-color: #667eea;
            }
            
            .badge {
                display: inline-block;
                padding: 4px 12px;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
            }
            
            .badge-primary {
                background: #ede9fe;
                color: #6d28d9;
            }
            
            .badge-success {
                background: #dcfce7;
                color: #15803d;
            }
            
            .badge-warning {
                background: #fef3c7;
                color: #a16207;
            }
            
            .price-tag {
                font-size: 24px;
                font-weight: 700;
                color: #667eea;
            }
            
            .step-number {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                font-weight: 700;
                margin: 0 auto 16px;
            }
            
            .lang-selector {
                position: relative;
            }
            
            .lang-btn {
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                background: rgba(255,255,255,0.2);
                color: white;
                border: 2px solid transparent;
            }
            
            .lang-btn:hover {
                background: rgba(255,255,255,0.3);
            }
            
            .lang-btn.active {
                background: white;
                color: #667eea;
                border-color: white;
            }
            
            .lang-dropdown {
                display: none;
                position: absolute;
                top: 100%;
                right: 0;
                margin-top: 8px;
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                padding: 8px;
                min-width: 150px;
                z-index: 1000;
            }
            
            .lang-dropdown.show {
                display: block;
            }
            
            .lang-option {
                padding: 10px 16px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                color: #333;
                font-weight: 500;
            }
            
            .lang-option:hover {
                background: #f3f4f6;
            }
            
            .lang-option.active {
                background: #ede9fe;
                color: #667eea;
                font-weight: 600;
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- 헤더 -->
        <header class="gradient-bg shadow-lg sticky top-0 z-50">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-camera-retro text-white text-3xl"></i>
                        <h1 class="text-white text-2xl font-black">K-FoodScan</h1>
                    </div>
                    <nav class="hidden md:flex items-center space-x-6">
                        <a href="#features" class="text-white hover:text-gray-200 font-medium" data-i18n="nav.features">기능</a>
                        <a href="#how-it-works" class="text-white hover:text-gray-200 font-medium" data-i18n="nav.howItWorks">사용법</a>
                        <a href="#about" class="text-white hover:text-gray-200 font-medium" data-i18n="nav.about">소개</a>
                        
                        <!-- 언어 선택 -->
                        <div class="lang-selector">
                            <button id="langToggle" class="lang-btn flex items-center space-x-2">
                                <i class="fas fa-globe"></i>
                                <span id="currentLang">${lang.toUpperCase()}</span>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </button>
                            <div id="langDropdown" class="lang-dropdown">
                                <div class="lang-option ${lang === 'ko' ? 'active' : ''}" data-lang="ko" onclick="changeLanguage('ko')">
                                    🇰🇷 한국어
                                </div>
                                <div class="lang-option ${lang === 'en' ? 'active' : ''}" data-lang="en" onclick="changeLanguage('en')">
                                    🇺🇸 English
                                </div>
                                <div class="lang-option ${lang === 'zh' ? 'active' : ''}" data-lang="zh" onclick="changeLanguage('zh')">
                                    🇨🇳 中文
                                </div>
                                <div class="lang-option ${lang === 'ja' ? 'active' : ''}" data-lang="ja" onclick="changeLanguage('ja')">
                                    🇯🇵 日本語
                                </div>
                                <div class="lang-option ${lang === 'vi' ? 'active' : ''}" data-lang="vi" onclick="changeLanguage('vi')">
                                    🇻🇳 Tiếng Việt
                                </div>
                                <div class="lang-option ${lang === 'mn' ? 'active' : ''}" data-lang="mn" onclick="changeLanguage('mn')">
                                    🇲🇳 Монгол
                                </div>
                                <div class="lang-option ${lang === 'ru' ? 'active' : ''}" data-lang="ru" onclick="changeLanguage('ru')">
                                    🇷🇺 Русский
                                </div>
                            </div>
                        </div>
                    </nav>
                    <button class="md:hidden text-white text-2xl" id="mobileMenuBtn">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                
                <!-- 모바일 메뉴 -->
                <div id="mobileMenu" class="hidden md:hidden mt-4 pb-4">
                    <div class="flex flex-col space-y-3">
                        <a href="#features" class="text-white hover:text-gray-200 font-medium" data-i18n="nav.features">기능</a>
                        <a href="#how-it-works" class="text-white hover:text-gray-200 font-medium" data-i18n="nav.howItWorks">사용법</a>
                        <a href="#about" class="text-white hover:text-gray-200 font-medium" data-i18n="nav.about">소개</a>
                        
                        <!-- 모바일 언어 선택 -->
                        <div class="flex flex-wrap gap-2 pt-2 border-t border-white/20">
                            <button class="lang-btn ${lang === 'ko' ? 'active' : ''}" data-lang="ko" onclick="changeLanguage('ko')">🇰🇷 KO</button>
                            <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" onclick="changeLanguage('en')">🇺🇸 EN</button>
                            <button class="lang-btn ${lang === 'zh' ? 'active' : ''}" data-lang="zh" onclick="changeLanguage('zh')">🇨🇳 ZH</button>
                            <button class="lang-btn ${lang === 'ja' ? 'active' : ''}" data-lang="ja" onclick="changeLanguage('ja')">🇯🇵 JA</button>
                            <button class="lang-btn ${lang === 'vi' ? 'active' : ''}" data-lang="vi" onclick="changeLanguage('vi')">🇻🇳 VI</button>
                            <button class="lang-btn ${lang === 'mn' ? 'active' : ''}" data-lang="mn" onclick="changeLanguage('mn')">🇲🇳 MN</button>
                            <button class="lang-btn ${lang === 'ru' ? 'active' : ''}" data-lang="ru" onclick="changeLanguage('ru')">🇷🇺 RU</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="hero-gradient text-white py-20 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div class="container mx-auto px-4 relative z-10">
                <div class="text-center max-w-4xl mx-auto">
                    <div class="mb-8">
                        <div class="inline-block animate-bounce">
                            <i class="fas fa-magic text-7xl mb-4"></i>
                        </div>
                    </div>
                    
                    <h2 class="text-5xl md:text-6xl font-black mb-6 leading-tight">
                        <span data-i18n="hero.title1">사진 한 장으로</span><br/>
                        <span class="text-yellow-300" data-i18n="hero.title2">전 세계 식품</span><span data-i18n="hero.title2suffix">을 손안에</span>
                    </h2>
                    
                    <p class="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                        <span data-i18n="hero.subtitle1">해외 과자·조미료·가공식품, 이제 찍기만 하세요!</span><br/>
                        <span class="font-bold text-yellow-300" data-i18n="hero.subtitle2">AI가 찾아서 · 비교하고 · 소량 구매까지</span><span data-i18n="hero.subtitle2suffix"> 한 번에 해결합니다</span>
                    </p>
                    
                    <div class="flex flex-wrap justify-center gap-4 mb-12">
                        <div class="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                            <i class="fas fa-check-circle mr-2"></i>
                            <span class="font-bold" data-i18n="hero.feature1">1~3개 소량 구매</span>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                            <i class="fas fa-check-circle mr-2"></i>
                            <span class="font-bold" data-i18n="hero.feature2">전 세계 마켓 비교</span>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                            <i class="fas fa-check-circle mr-2"></i>
                            <span class="font-bold" data-i18n="hero.feature3">성분·알레르기 정보</span>
                        </div>
                    </div>
                    
                    <a href="#scanner" class="inline-block bg-white text-purple-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 hover:text-purple-700 transform hover:scale-105 transition-all shadow-2xl pulse-slow">
                        <i class="fas fa-camera mr-2"></i>
                        <span data-i18n="hero.cta">지금 바로 촬영하기</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- 나머지 섹션들은 이전과 동일하지만 data-i18n 속성 추가 -->
        <!-- Scanner, Results, Features, How It Works, About, CTA, Footer 섹션 -->
        
        <script src="/static/i18n.js"></script>
        <script src="/static/app.js"></script>
        <script>
            // 언어 선택 초기화
            window.addEventListener('DOMContentLoaded', () => {
                const urlParams = new URLSearchParams(window.location.search);
                const lang = urlParams.get('lang') || localStorage.getItem('language') || 'ko';
                
                if (lang !== 'ko') {
                    changeLanguage(lang);
                }
                
                // 언어 드롭다운 토글
                const langToggle = document.getElementById('langToggle');
                const langDropdown = document.getElementById('langDropdown');
                
                if (langToggle && langDropdown) {
                    langToggle.addEventListener('click', (e) => {
                        e.stopPropagation();
                        langDropdown.classList.toggle('show');
                    });
                    
                    document.addEventListener('click', () => {
                        langDropdown.classList.remove('show');
                    });
                }
                
                // 모바일 메뉴 토글
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                const mobileMenu = document.getElementById('mobileMenu');
                
                if (mobileMenuBtn && mobileMenu) {
                    mobileMenuBtn.addEventListener('click', () => {
                        mobileMenu.classList.toggle('hidden');
                    });
                }
                
                // data-i18n 속성이 있는 모든 요소 업데이트
                document.querySelectorAll('[data-i18n]').forEach(element => {
                    const key = element.getAttribute('data-i18n');
                    element.textContent = t(key);
                });
            });
            
            // 언어 변경 함수 확장
            const originalChangeLanguage = window.changeLanguage;
            window.changeLanguage = function(lang) {
                originalChangeLanguage(lang);
                
                // URL 업데이트
                const url = new URL(window.location);
                url.searchParams.set('lang', lang);
                window.history.pushState({}, '', url);
                
                // 현재 언어 표시 업데이트
                const currentLangEl = document.getElementById('currentLang');
                if (currentLangEl) {
                    currentLangEl.textContent = lang.toUpperCase();
                }
                
                // 드롭다운 닫기
                const langDropdown = document.getElementById('langDropdown');
                if (langDropdown) {
                    langDropdown.classList.remove('show');
                }
                
                // 모바일 메뉴 닫기
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            };
        </script>
    </body>
    </html>
  `)
})

// 나머지 API 엔드포인트들은 이전과 동일
// ...
export default app
