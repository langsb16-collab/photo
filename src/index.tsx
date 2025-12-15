import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// CORS 설정
app.use('/api/*', cors())

// 정적 파일 제공
app.use('/static/*', serveStatic({ root: './public' }))

// 메인 페이지
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>K-FoodScan - 사진 한 장으로 전 세계 식품을 손안에</title>
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
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                margin: 0 auto;
            }
            
            .lang-selector {
                position: relative;
            }
            
            /* 언어 버튼 - 눈에 띄는 밝은 색상 (모바일 초소형) */
            .lang-btn {
                padding: 6px 10px;
                border-radius: 20px;
                font-size: 11px;
                font-weight: 800;
                cursor: pointer;
                transition: all 0.3s ease;
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                border: 2px solid white;
                box-shadow: 0 4px 12px rgba(16, 185, 129, 0.6);
                animation: pulse-lang 2s ease-in-out infinite;
            }
            
            @keyframes pulse-lang {
                0%, 100% { box-shadow: 0 4px 12px rgba(16, 185, 129, 0.6); }
                50% { box-shadow: 0 6px 18px rgba(16, 185, 129, 0.9); }
            }
            
            .lang-btn:hover {
                background: linear-gradient(135deg, #059669, #047857);
                transform: scale(1.08);
                box-shadow: 0 6px 16px rgba(16, 185, 129, 0.8);
            }
            
            .lang-btn.active {
                background: white;
                color: #10b981;
                border-color: #10b981;
            }
            
            /* 모바일 초소형 최적화 */
            @media (max-width: 768px) {
                .lang-btn {
                    padding: 5px 8px;
                    font-size: 10px;
                    font-weight: 800;
                }
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
                min-width: 160px;
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
                display: flex;
                align-items: center;
                gap: 8px;
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
        <!-- 헤더 - 모바일 초소형 최적화 -->
        <header class="gradient-bg shadow-lg sticky top-0 z-50">
            <div class="container mx-auto px-2 py-1.5">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-1.5">
                        <i class="fas fa-camera-retro text-white text-sm md:text-xl"></i>
                        <h1 class="text-white text-xs md:text-base font-black whitespace-nowrap">K-FoodScan</h1>
                    </div>
                    <nav class="hidden md:flex items-center space-x-2">
                        <a href="#features" class="text-white hover:text-gray-200 font-medium text-xs" data-i18n="nav.features">기능</a>
                        <a href="#how-it-works" class="text-white hover:text-gray-200 font-medium text-xs" data-i18n="nav.howItWorks">사용법</a>
                        <a href="#about" class="text-white hover:text-gray-200 font-medium text-xs" data-i18n="nav.about">소개</a>
                        
                        <!-- 언어 선택 -->
                        <div class="lang-selector">
                            <button id="langToggle" class="lang-btn flex items-center space-x-2">
                                <i class="fas fa-globe text-sm"></i>
                                <span id="currentLang">KO</span>
                                <i class="fas fa-chevron-down text-xs"></i>
                            </button>
                            <div id="langDropdown" class="lang-dropdown">
                                <div class="lang-option active" data-lang="ko" onclick="changeLanguage('ko')">
                                    <span>🇰🇷</span> 한국어
                                </div>
                                <div class="lang-option" data-lang="en" onclick="changeLanguage('en')">
                                    <span>🇺🇸</span> English
                                </div>
                                <div class="lang-option" data-lang="zh" onclick="changeLanguage('zh')">
                                    <span>🇨🇳</span> 中文
                                </div>
                                <div class="lang-option" data-lang="ja" onclick="changeLanguage('ja')">
                                    <span>🇯🇵</span> 日本語
                                </div>
                                <div class="lang-option" data-lang="vi" onclick="changeLanguage('vi')">
                                    <span>🇻🇳</span> Tiếng Việt
                                </div>
                                <div class="lang-option" data-lang="mn" onclick="changeLanguage('mn')">
                                    <span>🇲🇳</span> Монгол
                                </div>
                                <div class="lang-option" data-lang="ru" onclick="changeLanguage('ru')">
                                    <span>🇷🇺</span> Русский
                                </div>
                            </div>
                        </div>
                    </nav>
                    <!-- 모바일 메뉴 버튼 -->
                    <button class="md:hidden text-white text-base" id="mobileMenuBtn">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            
            <!-- 모바일 메뉴 드롭다운 -->
            <div id="mobileMenu" class="hidden md:hidden bg-purple-700 border-t border-purple-600">
                <div class="container mx-auto px-3 py-3">
                    <div class="flex flex-col space-y-3">
                        <a href="#features" class="text-white hover:text-yellow-300 font-medium text-sm" data-i18n="nav.features">기능</a>
                        <a href="#how-it-works" class="text-white hover:text-yellow-300 font-medium text-sm" data-i18n="nav.howItWorks">사용법</a>
                        <a href="#about" class="text-white hover:text-yellow-300 font-medium text-sm" data-i18n="nav.about">소개</a>
                        
                        <!-- 모바일 언어 선택 -->
                        <div class="border-t border-purple-600 pt-3">
                            <p class="text-white text-xs font-bold mb-2">언어 / Language</p>
                            <div class="grid grid-cols-2 gap-2">
                                <button onclick="changeLanguage('ko')" class="text-white hover:bg-purple-600 px-3 py-2 rounded text-xs text-left">
                                    🇰🇷 한국어
                                </button>
                                <button onclick="changeLanguage('en')" class="text-white hover:bg-purple-600 px-3 py-2 rounded text-xs text-left">
                                    🇺🇸 English
                                </button>
                                <button onclick="changeLanguage('zh')" class="text-white hover:bg-purple-600 px-3 py-2 rounded text-xs text-left">
                                    🇨🇳 中文
                                </button>
                                <button onclick="changeLanguage('ja')" class="text-white hover:bg-purple-600 px-3 py-2 rounded text-xs text-left">
                                    🇯🇵 日本語
                                </button>
                                <button onclick="changeLanguage('vi')" class="text-white hover:bg-purple-600 px-3 py-2 rounded text-xs text-left">
                                    🇻🇳 Tiếng Việt
                                </button>
                                <button onclick="changeLanguage('mn')" class="text-white hover:bg-purple-600 px-3 py-2 rounded text-xs text-left">
                                    🇲🇳 Монгол
                                </button>
                                <button onclick="changeLanguage('ru')" class="text-white hover:bg-purple-600 px-3 py-2 rounded text-xs text-left" style="grid-column: span 2;">
                                    🇷🇺 Русский
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Hero Section - 모바일 초소형 및 빈 공간 최소화 -->
        <section class="hero-gradient text-white py-4 md:py-12 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div class="container mx-auto px-2 md:px-4 relative z-10">
                <div class="text-center max-w-4xl mx-auto">
                    <div class="mb-2 md:mb-4">
                        <div class="inline-block animate-bounce">
                            <i class="fas fa-magic text-2xl md:text-5xl mb-1"></i>
                        </div>
                    </div>
                    
                    <h2 class="text-base md:text-3xl lg:text-4xl font-black mb-2 md:mb-4 leading-tight">
                        <span data-i18n="hero.title1" class="whitespace-nowrap">사진 한 장으로</span>
                        <span class="text-yellow-300 whitespace-nowrap" data-i18n="hero.title2">전 세계 식품</span><span data-i18n="hero.title2suffix" class="whitespace-nowrap">을 손안에</span>
                    </h2>
                    
                    <p class="text-xs md:text-base lg:text-lg mb-3 md:mb-5 text-gray-100 leading-tight">
                        <span data-i18n="hero.subtitle1" class="block mb-0.5">해외 과자·조미료·가공식품, 이제 찍기만 하세요!</span>
                        <span class="font-bold text-yellow-300" data-i18n="hero.subtitle2">AI가 찾아서 · 비교하고 · 소량 구매까지</span><span data-i18n="hero.subtitle2suffix"> 한 번에 해결합니다</span>
                    </p>
                    
                    <div class="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4 md:mb-6">
                        <div class="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs whitespace-nowrap">
                            <i class="fas fa-check-circle mr-0.5"></i>
                            <span class="font-bold" data-i18n="hero.feature1">1~3개 소량 구매</span>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs whitespace-nowrap">
                            <i class="fas fa-check-circle mr-0.5"></i>
                            <span class="font-bold" data-i18n="hero.feature2">전 세계 마켓 비교</span>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs whitespace-nowrap">
                            <i class="fas fa-check-circle mr-0.5"></i>
                            <span class="font-bold" data-i18n="hero.feature3">성분·알레르기 정보</span>
                        </div>
                    </div>
                    
                    <a href="#scanner" class="inline-block bg-white text-purple-600 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-base font-bold hover:bg-yellow-300 hover:text-purple-700 transform hover:scale-105 transition-all shadow-2xl pulse-slow">
                        <i class="fas fa-camera mr-1"></i>
                        <span data-i18n="hero.cta">지금 바로 촬영하기</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- Scanner Section - 모바일 초소형 -->
        <section id="scanner" class="py-3 md:py-8 bg-white">
            <div class="container mx-auto px-2 md:px-4">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-2xl p-3 md:p-6">
                        <div class="text-center mb-3 md:mb-4">
                            <h3 class="text-sm md:text-xl font-black text-gray-800 mb-1">
                                <i class="fas fa-camera text-purple-600 mr-1"></i>
                                <span data-i18n="scanner.title">식품 패키지 스캔</span>
                            </h3>
                            <p class="text-gray-600 text-xs md:text-sm">
                                <span data-i18n="scanner.subtitle">사진을 업로드하거나 직접 촬영하세요</span>
                            </p>
                        </div>

                        <!-- Upload Area - 모바일 최적화 -->
                        <div id="uploadArea" class="border-3 border-dashed border-purple-300 rounded-xl p-6 md:p-10 text-center cursor-pointer hover:border-purple-500 hover:bg-purple-50/50 transition-all">
                            <div class="scan-animation">
                                <i class="fas fa-cloud-upload-alt text-4xl md:text-5xl text-purple-400 mb-3"></i>
                            </div>
                            <p class="text-base md:text-lg font-bold text-gray-700 mb-1.5">
                                클릭하거나 이미지를 드래그하세요
                            </p>
                            <p class="text-gray-500 text-xs md:text-sm">
                                JPG, PNG, WEBP 지원 (최대 10MB)
                            </p>
                            <input type="file" id="fileInput" accept="image/*" capture="environment" class="hidden" />
                        </div>

                        <!-- Image Preview - 모바일 최적화 -->
                        <div id="imagePreview" class="hidden mt-4">
                            <div class="relative">
                                <img id="previewImage" class="w-full image-preview rounded-lg shadow-lg" />
                                <button id="removeImage" class="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-red-600 shadow-lg text-sm">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <button id="analyzeBtn" class="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-xl text-base md:text-lg font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl">
                                <i class="fas fa-search mr-1.5"></i>
                                AI 분석 시작하기
                            </button>
                        </div>

                        <!-- Loading - 모바일 최적화 -->
                        <div id="loadingState" class="hidden mt-6 text-center">
                            <div class="loading-spinner mx-auto mb-3"></div>
                            <p class="text-base md:text-lg font-bold text-purple-600">AI가 식품을 분석하고 있습니다...</p>
                            <p class="text-gray-500 mt-1.5 text-sm">잠시만 기다려주세요</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Results Section - 모바일 최적화 -->
        <section id="results" class="py-6 md:py-12 bg-gray-50 hidden">
            <div class="container mx-auto px-3 md:px-4">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-6 md:mb-8">
                        <h3 class="text-2xl md:text-3xl font-black text-gray-800 mb-2">
                            <i class="fas fa-check-circle text-green-500 mr-1.5"></i>
                            검색 결과
                        </h3>
                        <p class="text-gray-600 text-sm md:text-base">
                            총 <span id="resultCount" class="font-bold text-purple-600">0</span>개의 상품을 찾았습니다
                        </p>
                    </div>

                    <!-- Filter Options - 모바일 최적화 -->
                    <div class="bg-white rounded-xl shadow-lg p-3 md:p-5 mb-4 md:mb-6">
                        <div class="flex flex-wrap gap-2">
                            <button class="filter-btn bg-purple-100 text-purple-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold hover:bg-purple-200 transition-all">
                                <i class="fas fa-star mr-1"></i>추천순
                            </button>
                            <button class="filter-btn bg-gray-100 text-gray-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold hover:bg-gray-200 transition-all">
                                <i class="fas fa-dollar-sign mr-1"></i>가격순
                            </button>
                            <button class="filter-btn bg-gray-100 text-gray-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold hover:bg-gray-200 transition-all">
                                <i class="fas fa-shipping-fast mr-1"></i>배송빠른순
                            </button>
                            <button class="filter-btn bg-gray-100 text-gray-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold hover:bg-gray-200 transition-all">
                                <i class="fas fa-box mr-1"></i>소량구매
                            </button>
                        </div>
                    </div>

                    <!-- Results Grid -->
                    <div id="resultsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Results will be inserted here -->
                    </div>

                    <!-- Product Detail Modal -->
                    <div id="productModal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div class="p-8">
                                <div class="flex justify-between items-start mb-6">
                                    <h4 class="text-3xl font-black text-gray-800" id="modalTitle">상품명</h4>
                                    <button id="closeModal" class="text-gray-400 hover:text-gray-600 text-3xl">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                                
                                <div id="modalContent">
                                    <!-- Modal content will be inserted here -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section - 모바일 최적화 -->
        <section id="features" class="py-8 md:py-16 bg-white">
            <div class="container mx-auto px-3 md:px-4">
                <div class="text-center mb-8 md:mb-12">
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800 mb-2 md:mb-3">
                        왜 K-FoodScan인가요?
                    </h3>
                    <p class="text-sm md:text-lg text-gray-600">
                        기존 서비스와는 차원이 다른 통합 솔루션
                    </p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    <div class="card-hover bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 md:p-6 text-center">
                        <div class="bg-purple-500 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                            <i class="fas fa-brain text-lg md:text-2xl text-white"></i>
                        </div>
                        <h4 class="text-sm md:text-base font-bold text-gray-800 mb-1.5 md:mb-2">AI 비전 인식</h4>
                        <p class="text-gray-600 text-xs md:text-sm leading-tight">
                            사진만으로 브랜드, 제품명, 성분까지 자동 인식
                        </p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 md:p-6 text-center">
                        <div class="bg-pink-500 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                            <i class="fas fa-shopping-cart text-lg md:text-2xl text-white"></i>
                        </div>
                        <h4 class="text-sm md:text-base font-bold text-gray-800 mb-1.5 md:mb-2">소량 구매 특화</h4>
                        <p class="text-gray-600 text-xs md:text-sm leading-tight">
                            1~3개부터 구매 가능한 판매처만 필터링
                        </p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 md:p-6 text-center">
                        <div class="bg-blue-500 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                            <i class="fas fa-globe text-lg md:text-2xl text-white"></i>
                        </div>
                        <h4 class="text-sm md:text-base font-bold text-gray-800 mb-1.5 md:mb-2">글로벌 마켓 비교</h4>
                        <p class="text-gray-600 text-xs md:text-sm leading-tight">
                            아마존, 알리, 쿠팡 등 전 세계 가격 실시간 비교
                        </p>
                    </div>

                    <div class="card-hover bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 md:p-6 text-center">
                        <div class="bg-green-500 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                            <i class="fas fa-shield-alt text-lg md:text-2xl text-white"></i>
                        </div>
                        <h4 class="text-sm md:text-base font-bold text-gray-800 mb-1.5 md:mb-2">알레르기 정보</h4>
                        <p class="text-gray-600 text-xs md:text-sm leading-tight">
                            성분, 알레르기 유발물질 자동 번역·분석
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works Section - 모바일 최적화 -->
        <section id="how-it-works" class="py-8 md:py-16 bg-gradient-to-br from-purple-50 to-pink-50">
            <div class="container mx-auto px-3 md:px-4">
                <div class="text-center mb-6 md:mb-12">
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800 mb-2 md:mb-3">
                        이렇게 간단합니다
                    </h3>
                    <p class="text-sm md:text-lg text-gray-600">
                        3단계로 전 세계 식품을 손쉽게 구매하세요
                    </p>
                </div>

                <div class="max-w-5xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div class="text-center">
                            <div class="step-number text-lg md:text-2xl w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3">1</div>
                            <div class="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                                <i class="fas fa-camera text-3xl md:text-4xl text-purple-500 mb-2 md:mb-3"></i>
                                <h4 class="text-base md:text-lg font-bold text-gray-800 mb-1.5 md:mb-2">촬영</h4>
                                <p class="text-gray-600 text-xs md:text-sm leading-tight">
                                    외국 식품 패키지를 사진으로 찍으세요
                                </p>
                            </div>
                        </div>

                        <div class="text-center">
                            <div class="step-number text-lg md:text-2xl w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3">2</div>
                            <div class="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                                <i class="fas fa-search text-3xl md:text-4xl text-pink-500 mb-2 md:mb-3"></i>
                                <h4 class="text-base md:text-lg font-bold text-gray-800 mb-1.5 md:mb-2">검색</h4>
                                <p class="text-gray-600 text-xs md:text-sm leading-tight">
                                    AI가 자동으로 상품을 찾고 가격을 비교합니다
                                </p>
                            </div>
                        </div>

                        <div class="text-center">
                            <div class="step-number text-lg md:text-2xl w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3">3</div>
                            <div class="bg-white rounded-xl p-4 md:p-6 shadow-lg">
                                <i class="fas fa-shopping-bag text-3xl md:text-4xl text-blue-500 mb-2 md:mb-3"></i>
                                <h4 class="text-base md:text-lg font-bold text-gray-800 mb-1.5 md:mb-2">구매</h4>
                                <p class="text-gray-600 text-xs md:text-sm leading-tight">
                                    소량으로 바로 구매하거나 위시리스트에 저장
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section - 모바일 최적화 -->
        <section id="about" class="py-8 md:py-16 bg-white">
            <div class="container mx-auto px-3 md:px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800 mb-3 md:mb-5">
                        K-FoodScan이란?
                    </h3>
                    <p class="text-sm md:text-base leading-relaxed mb-6 md:mb-8 text-gray-600">
                        해외 여행에서 맛본 그 과자, SNS에서 본 그 조미료...<br/>
                        다시 사고 싶은데 이름도 모르고 어디서 파는지도 모르셨죠?<br/><br/>
                        <span class="font-bold text-purple-600 text-base md:text-lg">
                            K-FoodScan은 사진 한 장으로 모든 것을 해결합니다.
                        </span>
                    </p>
                    
                    <div class="grid grid-cols-3 gap-3 md:gap-5 mt-6 md:mt-10">
                        <div class="bg-purple-50 rounded-lg p-3 md:p-5">
                            <div class="text-2xl md:text-3xl font-black text-purple-600 mb-1">10초</div>
                            <p class="text-gray-600 text-xs md:text-sm">평균 검색 시간</p>
                        </div>
                        <div class="bg-pink-50 rounded-lg p-3 md:p-5">
                            <div class="text-2xl md:text-3xl font-black text-pink-600 mb-1">50+</div>
                            <p class="text-gray-600 text-xs md:text-sm">연동 쇼핑몰</p>
                        </div>
                        <div class="bg-blue-50 rounded-lg p-3 md:p-5">
                            <div class="text-2xl md:text-3xl font-black text-blue-600 mb-1">1개</div>
                            <p class="text-gray-600 text-xs md:text-sm">최소 구매 수량</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section - 모바일 최적화 -->
        <section class="gradient-bg py-8 md:py-16">
            <div class="container mx-auto px-3 md:px-4 text-center">
                <h3 class="text-2xl md:text-3xl font-black text-white mb-3 md:mb-5">
                    지금 바로 시작하세요!
                </h3>
                <p class="text-sm md:text-lg text-gray-100 mb-5 md:mb-7">
                    전 세계 식품이 당신을 기다립니다
                </p>
                <a href="#scanner" class="inline-block bg-white text-purple-600 px-6 py-2.5 md:px-8 md:py-3.5 rounded-full text-base md:text-lg font-bold hover:bg-yellow-300 hover:text-purple-700 transform hover:scale-105 transition-all shadow-2xl">
                    <i class="fas fa-camera mr-1.5"></i>
                    첫 스캔 시작하기
                </a>
            </div>
        </section>

        <!-- Footer - 모바일 최적화 -->
        <footer class="bg-gray-900 text-white py-6 md:py-10">
            <div class="container mx-auto px-3 md:px-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                    <div>
                        <h4 class="text-base md:text-lg font-bold mb-2 md:mb-3">K-FoodScan</h4>
                        <p class="text-gray-400 text-xs md:text-sm">
                            사진 한 장으로<br/>
                            전 세계 식품을 손안에
                        </p>
                    </div>
                    <div>
                        <h4 class="text-sm md:text-base font-bold mb-2 md:mb-3">서비스</h4>
                        <ul class="space-y-1.5 text-gray-400 text-xs md:text-sm">
                            <li><a href="#scanner" class="hover:text-white">식품 검색</a></li>
                            <li><a href="#features" class="hover:text-white">기능 소개</a></li>
                            <li><a href="#how-it-works" class="hover:text-white">사용 방법</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-sm md:text-base font-bold mb-2 md:mb-3">지원</h4>
                        <ul class="space-y-1.5 text-gray-400 text-xs md:text-sm">
                            <li><a href="#" class="hover:text-white">도움말</a></li>
                            <li><a href="#" class="hover:text-white">고객센터</a></li>
                            <li><a href="#" class="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-sm md:text-base font-bold mb-2 md:mb-3">소셜</h4>
                        <div class="flex space-x-3">
                            <a href="#" class="text-lg md:text-xl hover:text-purple-400"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="text-lg md:text-xl hover:text-purple-400"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="text-lg md:text-xl hover:text-purple-400"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-800 pt-4 md:pt-6 text-center text-gray-400 text-xs md:text-sm">
                    <p>&copy; 2024 K-FoodScan. All rights reserved.</p>
                </div>
            </div>
        </footer>

        <script src="/static/i18n.js"></script>
        <script src="/static/app.js"></script>
        <script>
            // 언어 선택 UI 초기화
            window.addEventListener('DOMContentLoaded', () => {
                // 언어 드롭다운 토글
                const langToggle = document.getElementById('langToggle');
                const langDropdown = document.getElementById('langDropdown');
                const currentLangEl = document.getElementById('currentLang');
                
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
                
                if (mobileMenuBtn) {
                    mobileMenuBtn.addEventListener('click', () => {
                        if (mobileMenu) {
                            mobileMenu.classList.toggle('hidden');
                        }
                    });
                }
                
                // 초기 언어 설정 및 UI 업데이트
                setTimeout(() => {
                    const savedLang = window.currentLanguage || localStorage.getItem('language') || 'ko';
                    if (currentLangEl) {
                        currentLangEl.textContent = savedLang.toUpperCase();
                    }
                    
                    // 언어 옵션 활성화 상태 업데이트
                    document.querySelectorAll('.lang-option').forEach(option => {
                        if (option.getAttribute('data-lang') === savedLang) {
                            option.classList.add('active');
                        } else {
                            option.classList.remove('active');
                        }
                    });
                }, 100);
            });
        </script>
    </body>
    </html>
  `)
})

// API: 이미지 분석
app.post('/api/analyze', async (c) => {
  try {
    const body = await c.req.parseBody()
    const image = body['image']
    
    if (!image || typeof image === 'string') {
      return c.json({ error: '이미지가 필요합니다' }, 400)
    }

    // 시뮬레이션: 실제로는 AI 비전 모델 호출
    // Google Vision API, OpenAI Vision, 또는 Cloudflare AI 사용
    
    await new Promise(resolve => setTimeout(resolve, 2000))

    const mockResults = [
      {
        id: 1,
        name: 'Pocky 초콜릿 스틱',
        brand: 'Glico',
        country: '일본',
        category: '과자',
        image: 'https://via.placeholder.com/300x300?text=Pocky',
        confidence: 0.95,
        description: '일본의 대표적인 초콜릿 스틱 과자',
        ingredients: ['밀가루', '설탕', '코코아', '우유'],
        allergens: ['밀', '우유', '대두'],
        nutrition: {
          calories: 150,
          carbs: 20,
          protein: 2,
          fat: 7
        },
        sellers: [
          {
            platform: '쿠팡',
            url: 'https://www.coupang.com',
            price: 3500,
            minQuantity: 1,
            shipping: 0,
            shippingDays: '1-2일',
            directShipping: true,
            stock: 'in_stock'
          },
          {
            platform: '아마존 글로벌',
            url: 'https://www.amazon.com',
            price: 4200,
            minQuantity: 3,
            shipping: 5000,
            shippingDays: '7-14일',
            directShipping: false,
            stock: 'in_stock'
          },
          {
            platform: '알리익스프레스',
            url: 'https://www.aliexpress.com',
            price: 2800,
            minQuantity: 5,
            shipping: 2000,
            shippingDays: '14-30일',
            directShipping: false,
            stock: 'in_stock'
          }
        ]
      },
      {
        id: 2,
        name: '킷캣 말차 초콜릿',
        brand: 'Nestle',
        country: '일본',
        category: '초콜릿',
        image: 'https://via.placeholder.com/300x300?text=KitKat+Matcha',
        confidence: 0.92,
        description: '일본 한정 말차 맛 킷캣',
        ingredients: ['설탕', '카카오', '말차', '우유'],
        allergens: ['우유', '대두'],
        nutrition: {
          calories: 180,
          carbs: 25,
          protein: 3,
          fat: 9
        },
        sellers: [
          {
            platform: '11번가',
            url: 'https://www.11st.co.kr',
            price: 5500,
            minQuantity: 1,
            shipping: 2500,
            shippingDays: '2-3일',
            directShipping: true,
            stock: 'in_stock'
          },
          {
            platform: '지마켓',
            url: 'https://www.gmarket.co.kr',
            price: 5200,
            minQuantity: 2,
            shipping: 0,
            shippingDays: '1-3일',
            directShipping: true,
            stock: 'low_stock'
          }
        ]
      },
      {
        id: 3,
        name: '하리보 골드베어 젤리',
        brand: 'Haribo',
        country: '독일',
        category: '젤리',
        image: 'https://via.placeholder.com/300x300?text=Haribo',
        confidence: 0.88,
        description: '독일의 대표적인 곰돌이 젤리',
        ingredients: ['설탕', '젤라틴', '과일농축액', '구연산'],
        allergens: ['없음'],
        nutrition: {
          calories: 140,
          carbs: 32,
          protein: 2,
          fat: 0
        },
        sellers: [
          {
            platform: '쿠팡',
            url: 'https://www.coupang.com',
            price: 6900,
            minQuantity: 1,
            shipping: 0,
            shippingDays: '당일배송',
            directShipping: true,
            stock: 'in_stock'
          },
          {
            platform: '이베이',
            url: 'https://www.ebay.com',
            price: 8500,
            minQuantity: 1,
            shipping: 6000,
            shippingDays: '10-20일',
            directShipping: false,
            stock: 'in_stock'
          }
        ]
      }
    ]

    return c.json({
      success: true,
      results: mockResults,
      totalCount: mockResults.length
    })
  } catch (error) {
    return c.json({ error: '분석 중 오류가 발생했습니다' }, 500)
  }
})

// API: 상품 상세 정보
app.get('/api/product/:id', async (c) => {
  const id = c.req.param('id')
  
  // 시뮬레이션 데이터
  const mockProduct = {
    id: parseInt(id),
    name: 'Pocky 초콜릿 스틱',
    brand: 'Glico',
    country: '일본',
    manufacturer: 'Ezaki Glico Co., Ltd.',
    category: '과자',
    weight: '47g',
    image: 'https://via.placeholder.com/600x600?text=Pocky+Detail',
    images: [
      'https://via.placeholder.com/600x600?text=Pocky+1',
      'https://via.placeholder.com/600x600?text=Pocky+2',
      'https://via.placeholder.com/600x600?text=Pocky+3'
    ],
    description: '일본의 대표적인 초콜릿 스틱 과자. 바삭한 비스킷 스틱에 진한 초콜릿 코팅.',
    ingredients: ['밀가루', '설탕', '식물성유지', '코코아', '전지분유', '쇼트닝'],
    allergens: ['밀', '우유', '대두'],
    nutrition: {
      servingSize: '2개(10g)',
      calories: 150,
      carbs: 20,
      protein: 2,
      fat: 7,
      sodium: 45,
      sugar: 12
    },
    certifications: ['할랄', 'ISO 22000'],
    barcode: '4901005103139',
    reviews: [
      {
        user: '김철수',
        rating: 5,
        comment: '정말 맛있어요! 일본에서 먹었던 그 맛 그대로입니다.',
        date: '2024-12-01'
      },
      {
        user: '이영희',
        rating: 4,
        comment: '배송도 빠르고 가격도 적당해요. 추천합니다!',
        date: '2024-11-28'
      }
    ],
    similarProducts: [
      { id: 2, name: '킷캣 말차', image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Pretz 프레즐', image: 'https://via.placeholder.com/150' }
    ]
  }
  
  return c.json(mockProduct)
})

// API: 위시리스트 추가
app.post('/api/wishlist', async (c) => {
  const body = await c.req.json()
  
  return c.json({
    success: true,
    message: '위시리스트에 추가되었습니다',
    itemId: body.productId
  })
})

// API: 가격 비교
app.get('/api/compare/:productId', async (c) => {
  const productId = c.req.param('productId')
  
  const mockComparison = {
    productId,
    lowestPrice: 2800,
    highestPrice: 5500,
    averagePrice: 3833,
    priceHistory: [
      { date: '2024-11-01', price: 3200 },
      { date: '2024-11-15', price: 3500 },
      { date: '2024-12-01', price: 2800 },
      { date: '2024-12-11', price: 3500 }
    ]
  }
  
  return c.json(mockComparison)
})

export default app
