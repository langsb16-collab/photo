// K-FoodScan Frontend Application

let currentImage = null;
let currentResults = [];

// 다국어 지원 초기화
document.addEventListener('DOMContentLoaded', () => {
    // URL에서 언어 파라미터 확인
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    if (urlLang) {
        window.currentLanguage = urlLang;
        localStorage.setItem('language', urlLang);
    }
    
    // 모든 번역 가능한 요소 업데이트
    updateTranslations();
});

// DOM 요소
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const previewImage = document.getElementById('previewImage');
const removeImageBtn = document.getElementById('removeImage');
const analyzeBtn = document.getElementById('analyzeBtn');
const loadingState = document.getElementById('loadingState');
const resultsSection = document.getElementById('results');
const resultsGrid = document.getElementById('resultsGrid');
const resultCount = document.getElementById('resultCount');
const productModal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// 파일 업로드 영역 클릭
uploadArea.addEventListener('click', () => {
    fileInput.click();
});

// 드래그 앤 드롭
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('border-purple-500', 'bg-purple-50');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('border-purple-500', 'bg-purple-50');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('border-purple-500', 'bg-purple-50');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFileSelect(files[0]);
    }
});

// 파일 선택
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleFileSelect(file);
    }
});

// 파일 처리
function handleFileSelect(file) {
    // 파일 타입 체크
    if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.');
        return;
    }
    
    // 파일 크기 체크 (10MB)
    if (file.size > 10 * 1024 * 1024) {
        alert('파일 크기는 10MB 이하여야 합니다.');
        return;
    }
    
    currentImage = file;
    
    // 이미지 미리보기
    const reader = new FileReader();
    reader.onload = (e) => {
        previewImage.src = e.target.result;
        uploadArea.classList.add('hidden');
        imagePreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
}

// 이미지 제거
removeImageBtn.addEventListener('click', () => {
    currentImage = null;
    previewImage.src = '';
    uploadArea.classList.remove('hidden');
    imagePreview.classList.add('hidden');
    fileInput.value = '';
    resultsSection.classList.add('hidden');
});

// 분석 시작
analyzeBtn.addEventListener('click', async () => {
    if (!currentImage) {
        alert('이미지를 먼저 업로드해주세요.');
        return;
    }
    
    // UI 상태 변경
    imagePreview.classList.add('hidden');
    loadingState.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    
    try {
        // FormData 생성
        const formData = new FormData();
        formData.append('image', currentImage);
        
        // API 호출
        const response = await fetch('/api/analyze', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('분석 실패');
        }
        
        const data = await response.json();
        
        if (data.success) {
            currentResults = data.results;
            displayResults(data.results);
            
            // 스크롤
            setTimeout(() => {
                resultsSection.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        } else {
            throw new Error(data.error || '분석 실패');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('분석 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        loadingState.classList.add('hidden');
        imagePreview.classList.remove('hidden');
    }
});

// 결과 표시
function displayResults(results) {
    resultCount.textContent = results.length;
    resultsGrid.innerHTML = '';
    
    results.forEach(product => {
        const card = createProductCard(product);
        resultsGrid.appendChild(card);
    });
    
    resultsSection.classList.remove('hidden');
}

// 상품 카드 생성
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden result-item border-2 border-transparent';
    
    // 최저가 판매처 찾기
    const bestSeller = product.sellers.reduce((prev, current) => 
        (prev.price + prev.shipping) < (current.price + current.shipping) ? prev : current
    );
    
    const totalPrice = bestSeller.price + bestSeller.shipping;
    const confidence = Math.round(product.confidence * 100);
    
    card.innerHTML = `
        <div class="relative">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                ${confidence}% 일치
            </div>
        </div>
        <div class="p-6">
            <div class="flex items-start justify-between mb-3">
                <div>
                    <h5 class="text-xl font-bold text-gray-800 mb-1">${product.name}</h5>
                    <p class="text-sm text-gray-500">
                        <i class="fas fa-building mr-1"></i>${product.brand} · ${product.country}
                    </p>
                </div>
            </div>
            
            <div class="mb-4">
                <div class="flex flex-wrap gap-2 mb-3">
                    ${product.allergens.map(allergen => 
                        `<span class="badge badge-warning">
                            <i class="fas fa-exclamation-triangle mr-1"></i>${allergen}
                        </span>`
                    ).join('')}
                </div>
            </div>
            
            <div class="border-t pt-4 mb-4">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-600">최저가</span>
                    <div class="text-right">
                        <div class="price-tag">${totalPrice.toLocaleString()}원</div>
                        <div class="text-xs text-gray-500">${bestSeller.platform}</div>
                    </div>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-gray-600">
                        <i class="fas fa-box mr-1"></i>최소 ${bestSeller.minQuantity}개
                    </span>
                    <span class="text-green-600 font-bold">
                        <i class="fas fa-shipping-fast mr-1"></i>${bestSeller.shippingDays}
                    </span>
                </div>
            </div>
            
            <div class="flex gap-2">
                <button onclick="showProductDetail(${product.id})" class="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all">
                    <i class="fas fa-info-circle mr-2"></i>상세보기
                </button>
                <button onclick="addToWishlist(${product.id})" class="bg-gray-100 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 transition-all">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// 상품 상세보기
async function showProductDetail(productId) {
    try {
        const response = await fetch(`/api/product/${productId}`);
        const product = await response.json();
        
        modalTitle.textContent = product.name;
        
        modalContent.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- 이미지 갤러리 -->
                <div>
                    <img src="${product.image}" alt="${product.name}" class="w-full rounded-xl shadow-lg mb-4">
                    <div class="grid grid-cols-3 gap-2">
                        ${product.images.map(img => 
                            `<img src="${img}" alt="상품 이미지" class="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-all">`
                        ).join('')}
                    </div>
                </div>
                
                <!-- 상품 정보 -->
                <div>
                    <div class="mb-6">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="badge badge-primary">${product.category}</span>
                            <span class="badge badge-success">${product.country}</span>
                        </div>
                        <p class="text-gray-600 mb-4">${product.description}</p>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div class="bg-gray-50 p-3 rounded-lg">
                                <div class="text-gray-500 mb-1">브랜드</div>
                                <div class="font-bold">${product.brand}</div>
                            </div>
                            <div class="bg-gray-50 p-3 rounded-lg">
                                <div class="text-gray-500 mb-1">용량</div>
                                <div class="font-bold">${product.weight}</div>
                            </div>
                            <div class="bg-gray-50 p-3 rounded-lg">
                                <div class="text-gray-500 mb-1">제조사</div>
                                <div class="font-bold text-xs">${product.manufacturer}</div>
                            </div>
                            <div class="bg-gray-50 p-3 rounded-lg">
                                <div class="text-gray-500 mb-1">바코드</div>
                                <div class="font-bold text-xs">${product.barcode}</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 영양 정보 -->
                    <div class="mb-6 bg-blue-50 p-4 rounded-xl">
                        <h5 class="font-bold text-gray-800 mb-3 flex items-center">
                            <i class="fas fa-apple-alt text-blue-500 mr-2"></i>
                            영양 정보 (1회 제공량: ${product.nutrition.servingSize})
                        </h5>
                        <div class="grid grid-cols-3 gap-2 text-sm">
                            <div class="text-center">
                                <div class="text-2xl font-bold text-blue-600">${product.nutrition.calories}</div>
                                <div class="text-gray-600">칼로리</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-blue-600">${product.nutrition.carbs}g</div>
                                <div class="text-gray-600">탄수화물</div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-blue-600">${product.nutrition.protein}g</div>
                                <div class="text-gray-600">단백질</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 성분 정보 -->
                    <div class="mb-6 bg-yellow-50 p-4 rounded-xl">
                        <h5 class="font-bold text-gray-800 mb-3 flex items-center">
                            <i class="fas fa-list text-yellow-500 mr-2"></i>
                            원재료
                        </h5>
                        <p class="text-sm text-gray-700">${product.ingredients.join(', ')}</p>
                    </div>
                    
                    <!-- 알레르기 정보 -->
                    <div class="mb-6 bg-red-50 p-4 rounded-xl">
                        <h5 class="font-bold text-gray-800 mb-3 flex items-center">
                            <i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                            알레르기 유발 물질
                        </h5>
                        <div class="flex flex-wrap gap-2">
                            ${product.allergens.map(allergen => 
                                `<span class="badge badge-warning">${allergen}</span>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <!-- 인증 정보 -->
                    ${product.certifications.length > 0 ? `
                        <div class="mb-6">
                            <h5 class="font-bold text-gray-800 mb-3 flex items-center">
                                <i class="fas fa-certificate text-green-500 mr-2"></i>
                                인증
                            </h5>
                            <div class="flex flex-wrap gap-2">
                                ${product.certifications.map(cert => 
                                    `<span class="badge badge-success">${cert}</span>`
                                ).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <!-- 판매처 정보 -->
            <div class="mt-8">
                <h5 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <i class="fas fa-shopping-cart text-purple-500 mr-2"></i>
                    구매 가능한 곳 (${product.sellers?.length || 0}개)
                </h5>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${(product.sellers || []).map(seller => `
                        <div class="border-2 border-gray-200 rounded-xl p-4 hover:border-purple-500 transition-all">
                            <div class="flex items-center justify-between mb-3">
                                <div class="font-bold text-lg">${seller.platform}</div>
                                <span class="badge ${seller.stock === 'in_stock' ? 'badge-success' : 'badge-warning'}">
                                    ${seller.stock === 'in_stock' ? '재고 있음' : '재고 부족'}
                                </span>
                            </div>
                            <div class="mb-3">
                                <div class="text-2xl font-bold text-purple-600 mb-1">
                                    ${(seller.price + seller.shipping).toLocaleString()}원
                                </div>
                                <div class="text-sm text-gray-500">
                                    상품 ${seller.price.toLocaleString()}원 + 배송 ${seller.shipping.toLocaleString()}원
                                </div>
                            </div>
                            <div class="flex items-center justify-between text-sm mb-3">
                                <span class="text-gray-600">
                                    <i class="fas fa-box mr-1"></i>최소 ${seller.minQuantity}개
                                </span>
                                <span class="text-green-600 font-bold">
                                    <i class="fas fa-shipping-fast mr-1"></i>${seller.shippingDays}
                                </span>
                            </div>
                            <div class="flex items-center justify-between text-sm mb-3">
                                <span class="text-gray-600">
                                    ${seller.directShipping 
                                        ? '<i class="fas fa-check-circle text-green-500 mr-1"></i>한국 직배송' 
                                        : '<i class="fas fa-plane text-blue-500 mr-1"></i>해외 배송'}
                                </span>
                            </div>
                            <a href="${seller.url}" target="_blank" class="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all">
                                <i class="fas fa-external-link-alt mr-2"></i>구매하러 가기
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- 리뷰 -->
            ${product.reviews && product.reviews.length > 0 ? `
                <div class="mt-8">
                    <h5 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <i class="fas fa-star text-yellow-500 mr-2"></i>
                        사용자 리뷰
                    </h5>
                    <div class="space-y-4">
                        ${product.reviews.map(review => `
                            <div class="bg-gray-50 rounded-xl p-4">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="font-bold">${review.user}</div>
                                    <div class="flex items-center">
                                        ${Array(review.rating).fill('<i class="fas fa-star text-yellow-500"></i>').join('')}
                                        ${Array(5 - review.rating).fill('<i class="far fa-star text-gray-300"></i>').join('')}
                                    </div>
                                </div>
                                <p class="text-gray-700 mb-2">${review.comment}</p>
                                <div class="text-sm text-gray-500">${review.date}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- 유사 상품 -->
            ${product.similarProducts && product.similarProducts.length > 0 ? `
                <div class="mt-8">
                    <h5 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <i class="fas fa-th-large text-blue-500 mr-2"></i>
                        비슷한 상품
                    </h5>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${product.similarProducts.map(similar => `
                            <div class="cursor-pointer hover:opacity-75 transition-all" onclick="showProductDetail(${similar.id})">
                                <img src="${similar.image}" alt="${similar.name}" class="w-full h-32 object-cover rounded-lg mb-2">
                                <div class="text-sm font-bold text-gray-700 text-center">${similar.name}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;
        
        productModal.classList.remove('hidden');
    } catch (error) {
        console.error('Error:', error);
        alert('상품 정보를 불러오는데 실패했습니다.');
    }
}

// 위시리스트 추가
async function addToWishlist(productId) {
    try {
        const response = await fetch('/api/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // 성공 애니메이션
            const event = window.event;
            const btn = event.target.closest('button');
            const icon = btn.querySelector('i');
            
            icon.classList.remove('far');
            icon.classList.add('fas', 'text-red-500');
            
            // 토스트 메시지
            showToast('위시리스트에 추가되었습니다!', 'success');
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('위시리스트 추가에 실패했습니다.', 'error');
    }
}

// 토스트 메시지
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-8 right-8 px-6 py-4 rounded-xl shadow-2xl text-white font-bold z-50 transform transition-all ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle mr-2"></i>
        ${message}
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 모달 닫기
closeModalBtn.addEventListener('click', () => {
    productModal.classList.add('hidden');
});

productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.classList.add('hidden');
    }
});

// 필터 버튼
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // 모든 버튼 비활성화
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-purple-100', 'text-purple-700');
            b.classList.add('bg-gray-100', 'text-gray-700');
        });
        
        // 클릭된 버튼 활성화
        this.classList.remove('bg-gray-100', 'text-gray-700');
        this.classList.add('bg-purple-100', 'text-purple-700');
        
        // 필터링 로직 (실제 구현 시)
        const filterType = this.textContent.trim();
        console.log('Filter:', filterType);
        
        // 여기에 실제 필터링 로직 추가
        filterResults(filterType);
    });
});

// 결과 필터링
function filterResults(filterType) {
    let sortedResults = [...currentResults];
    
    if (filterType.includes('가격순')) {
        sortedResults.sort((a, b) => {
            const priceA = Math.min(...a.sellers.map(s => s.price + s.shipping));
            const priceB = Math.min(...b.sellers.map(s => s.price + s.shipping));
            return priceA - priceB;
        });
    } else if (filterType.includes('배송')) {
        sortedResults.sort((a, b) => {
            const daysA = parseInt(a.sellers[0].shippingDays);
            const daysB = parseInt(b.sellers[0].shippingDays);
            return (daysA || 99) - (daysB || 99);
        });
    } else if (filterType.includes('소량')) {
        sortedResults = sortedResults.filter(product => 
            product.sellers.some(s => s.minQuantity <= 3)
        );
    }
    
    displayResults(sortedResults);
}

// 번역 업데이트 함수
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (window.t) {
            element.textContent = window.t(key);
        }
    });
}

// 전역 함수로 노출
window.showProductDetail = showProductDetail;
window.addToWishlist = addToWishlist;
window.updateTranslations = updateTranslations;

console.log('K-FoodScan initialized! 🚀');
