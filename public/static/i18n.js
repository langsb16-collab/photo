// 다국어 번역 데이터
const translations = {
  ko: {
    // 헤더
    'nav.features': '기능',
    'nav.howItWorks': '사용법',
    'nav.about': '소개',
    
    // Hero Section
    'hero.title1': '사진 한 장으로',
    'hero.title2': '전 세계 식품',
    'hero.title2suffix': '을 손안에',
    'hero.subtitle1': '해외 과자·조미료·가공식품, 이제 찍기만 하세요!',
    'hero.subtitle2': 'AI가 찾아서 · 비교하고 · 소량 구매까지',
    'hero.subtitle2suffix': ' 한 번에 해결합니다',
    'hero.feature1': '1~3개 소량 구매',
    'hero.feature2': '전 세계 마켓 비교',
    'hero.feature3': '성분·알레르기 정보',
    'hero.cta': '지금 바로 촬영하기',
    
    // Scanner Section
    'scanner.title': '식품 패키지 스캔',
    'scanner.subtitle': '사진을 업로드하거나 직접 촬영하세요',
    'scanner.dragDrop': '클릭하거나 이미지를 드래그하세요',
    'scanner.fileSupport': 'JPG, PNG, WEBP 지원 (최대 10MB)',
    'scanner.analyzeBtn': 'AI 분석 시작하기',
    'scanner.analyzing': 'AI가 식품을 분석하고 있습니다...',
    'scanner.wait': '잠시만 기다려주세요',
    
    // Results Section
    'results.title': '검색 결과',
    'results.count': '총',
    'results.countSuffix': '개의 상품을 찾았습니다',
    'results.sortRecommended': '추천순',
    'results.sortPrice': '가격순',
    'results.sortShipping': '배송빠른순',
    'results.sortSmallQty': '소량구매',
    
    // Product Card
    'product.lowestPrice': '최저가',
    'product.minQty': '최소',
    'product.minQtySuffix': '개',
    'product.detailBtn': '상세보기',
    'product.match': '일치',
    
    // Product Detail Modal
    'detail.ingredients': '원재료',
    'detail.allergens': '알레르기 유발 물질',
    'detail.nutrition': '영양 정보',
    'detail.servingSize': '1회 제공량',
    'detail.calories': '칼로리',
    'detail.carbs': '탄수화물',
    'detail.protein': '단백질',
    'detail.certifications': '인증',
    'detail.brand': '브랜드',
    'detail.weight': '용량',
    'detail.manufacturer': '제조사',
    'detail.barcode': '바코드',
    'detail.sellersTitle': '구매 가능한 곳',
    'detail.sellersSuffix': '개',
    'detail.inStock': '재고 있음',
    'detail.lowStock': '재고 부족',
    'detail.productPrice': '상품',
    'detail.shippingPrice': '배송',
    'detail.directShipping': '한국 직배송',
    'detail.intlShipping': '해외 배송',
    'detail.buyNow': '구매하러 가기',
    'detail.reviews': '사용자 리뷰',
    'detail.similarProducts': '비슷한 상품',
    
    // Features Section
    'features.title': '왜 K-FoodScan인가요?',
    'features.subtitle': '기존 서비스와는 차원이 다른 통합 솔루션',
    'features.ai.title': 'AI 비전 인식',
    'features.ai.desc': '사진만으로 브랜드, 제품명, 성분까지 자동 인식',
    'features.smallQty.title': '소량 구매 특화',
    'features.smallQty.desc': '1~3개부터 구매 가능한 판매처만 필터링',
    'features.globalMarket.title': '글로벌 마켓 비교',
    'features.globalMarket.desc': '아마존, 알리, 쿠팡 등 전 세계 가격 실시간 비교',
    'features.allergyInfo.title': '알레르기 정보',
    'features.allergyInfo.desc': '성분, 알레르기 유발물질 자동 번역·분석',
    
    // How It Works Section
    'howItWorks.title': '이렇게 간단합니다',
    'howItWorks.subtitle': '3단계로 전 세계 식품을 손쉽게 구매하세요',
    'howItWorks.step1.title': '촬영',
    'howItWorks.step1.desc': '외국 식품 패키지를 사진으로 찍으세요',
    'howItWorks.step2.title': '검색',
    'howItWorks.step2.desc': 'AI가 자동으로 상품을 찾고 가격을 비교합니다',
    'howItWorks.step3.title': '구매',
    'howItWorks.step3.desc': '소량으로 바로 구매하거나 위시리스트에 저장',
    
    // About Section
    'about.title': 'K-FoodScan이란?',
    'about.desc1': '해외 여행에서 맛본 그 과자, SNS에서 본 그 조미료...',
    'about.desc2': '다시 사고 싶은데 이름도 모르고 어디서 파는지도 모르셨죠?',
    'about.desc3': 'K-FoodScan은 사진 한 장으로 모든 것을 해결합니다.',
    'about.stat1': '평균 검색 시간',
    'about.stat2': '연동 쇼핑몰',
    'about.stat3': '최소 구매 수량',
    
    // CTA Section
    'cta.title': '지금 바로 시작하세요!',
    'cta.subtitle': '전 세계 식품이 당신을 기다립니다',
    'cta.button': '첫 스캔 시작하기',
    
    // Footer
    'footer.tagline': '사진 한 장으로 전 세계 식품을 손안에',
    'footer.service': '서비스',
    'footer.search': '식품 검색',
    'footer.features': '기능 소개',
    'footer.howToUse': '사용 방법',
    'footer.support': '지원',
    'footer.help': '도움말',
    'footer.customerService': '고객센터',
    'footer.faq': 'FAQ',
    'footer.social': '소셜',
    'footer.copyright': '© 2024 K-FoodScan. All rights reserved.',
    
    // Messages
    'msg.addedToWishlist': '위시리스트에 추가되었습니다!',
    'msg.wishlistError': '위시리스트 추가에 실패했습니다.',
    'msg.imageRequired': '이미지가 필요합니다',
    'msg.imageTypeError': '이미지 파일만 업로드 가능합니다.',
    'msg.imageSizeError': '파일 크기는 10MB 이하여야 합니다.',
    'msg.analysisFailed': '분석 중 오류가 발생했습니다. 다시 시도해주세요.',
    'msg.loadDetailFailed': '상품 정보를 불러오는데 실패했습니다.'
  },
  
  en: {
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.about': 'About',
    
    'hero.title1': 'Find Global Foods',
    'hero.title2': 'With Just',
    'hero.title2suffix': ' One Photo',
    'hero.subtitle1': 'Foreign snacks, seasonings, processed foods - just take a photo!',
    'hero.subtitle2': 'AI finds, compares, and enables small-quantity purchases',
    'hero.subtitle2suffix': ' all in one place',
    'hero.feature1': 'Buy 1-3 pieces',
    'hero.feature2': 'Global market comparison',
    'hero.feature3': 'Ingredient & allergy info',
    'hero.cta': 'Start Scanning Now',
    
    'scanner.title': 'Scan Food Package',
    'scanner.subtitle': 'Upload a photo or take a picture',
    'scanner.dragDrop': 'Click or drag image here',
    'scanner.fileSupport': 'JPG, PNG, WEBP supported (Max 10MB)',
    'scanner.analyzeBtn': 'Start AI Analysis',
    'scanner.analyzing': 'AI is analyzing the food...',
    'scanner.wait': 'Please wait a moment',
    
    'results.title': 'Search Results',
    'results.count': 'Found',
    'results.countSuffix': ' products',
    'results.sortRecommended': 'Recommended',
    'results.sortPrice': 'Price',
    'results.sortShipping': 'Fast Shipping',
    'results.sortSmallQty': 'Small Quantity',
    
    'product.lowestPrice': 'Lowest Price',
    'product.minQty': 'Min',
    'product.minQtySuffix': ' pcs',
    'product.detailBtn': 'Details',
    'product.match': 'match',
    
    'detail.ingredients': 'Ingredients',
    'detail.allergens': 'Allergens',
    'detail.nutrition': 'Nutrition Facts',
    'detail.servingSize': 'Serving Size',
    'detail.calories': 'Calories',
    'detail.carbs': 'Carbs',
    'detail.protein': 'Protein',
    'detail.certifications': 'Certifications',
    'detail.brand': 'Brand',
    'detail.weight': 'Weight',
    'detail.manufacturer': 'Manufacturer',
    'detail.barcode': 'Barcode',
    'detail.sellersTitle': 'Available at',
    'detail.sellersSuffix': ' sellers',
    'detail.inStock': 'In Stock',
    'detail.lowStock': 'Low Stock',
    'detail.productPrice': 'Product',
    'detail.shippingPrice': 'Shipping',
    'detail.directShipping': 'Direct to Korea',
    'detail.intlShipping': 'International',
    'detail.buyNow': 'Buy Now',
    'detail.reviews': 'Reviews',
    'detail.similarProducts': 'Similar Products',
    
    'features.title': 'Why K-FoodScan?',
    'features.subtitle': 'An integrated solution beyond existing services',
    'features.ai.title': 'AI Vision Recognition',
    'features.ai.desc': 'Automatically recognizes brands, product names, and ingredients from photos',
    'features.smallQty.title': 'Small Quantity Purchase',
    'features.smallQty.desc': 'Filter sellers that allow purchases from 1-3 pieces',
    'features.globalMarket.title': 'Global Market Comparison',
    'features.globalMarket.desc': 'Real-time price comparison across Amazon, AliExpress, Coupang, etc.',
    'features.allergyInfo.title': 'Allergy Information',
    'features.allergyInfo.desc': 'Automatic translation and analysis of ingredients and allergens',
    
    'howItWorks.title': 'It\'s This Simple',
    'howItWorks.subtitle': 'Buy global foods in 3 easy steps',
    'howItWorks.step1.title': 'Scan',
    'howItWorks.step1.desc': 'Take a photo of the foreign food package',
    'howItWorks.step2.title': 'Search',
    'howItWorks.step2.desc': 'AI automatically finds products and compares prices',
    'howItWorks.step3.title': 'Purchase',
    'howItWorks.step3.desc': 'Buy in small quantities or save to wishlist',
    
    'about.title': 'What is K-FoodScan?',
    'about.desc1': 'That snack you tried while traveling abroad, that seasoning you saw on social media...',
    'about.desc2': 'You wanted to buy it again but didn\'t know its name or where to find it?',
    'about.desc3': 'K-FoodScan solves everything with just one photo.',
    'about.stat1': 'Avg. search time',
    'about.stat2': 'Connected shops',
    'about.stat3': 'Min. quantity',
    
    'cta.title': 'Start Now!',
    'cta.subtitle': 'Global foods are waiting for you',
    'cta.button': 'Start Your First Scan',
    
    'footer.tagline': 'Find global foods with just one photo',
    'footer.service': 'Service',
    'footer.search': 'Food Search',
    'footer.features': 'Features',
    'footer.howToUse': 'How to Use',
    'footer.support': 'Support',
    'footer.help': 'Help',
    'footer.customerService': 'Customer Service',
    'footer.faq': 'FAQ',
    'footer.social': 'Social',
    'footer.copyright': '© 2024 K-FoodScan. All rights reserved.',
    
    'msg.addedToWishlist': 'Added to wishlist!',
    'msg.wishlistError': 'Failed to add to wishlist.',
    'msg.imageRequired': 'Image is required',
    'msg.imageTypeError': 'Only image files are allowed.',
    'msg.imageSizeError': 'File size must be under 10MB.',
    'msg.analysisFailed': 'Analysis failed. Please try again.',
    'msg.loadDetailFailed': 'Failed to load product details.'
  },
  
  zh: {
    'nav.features': '功能',
    'nav.howItWorks': '使用方法',
    'nav.about': '关于',
    
    'hero.title1': '一张照片',
    'hero.title2': '找到全球',
    'hero.title2suffix': '美食',
    'hero.subtitle1': '国外零食·调味料·加工食品，现在只需拍照！',
    'hero.subtitle2': 'AI帮您查找、比较、小批量购买',
    'hero.subtitle2suffix': '一站式解决',
    'hero.feature1': '1-3件小批量购买',
    'hero.feature2': '全球市场比价',
    'hero.feature3': '成分·过敏信息',
    'hero.cta': '立即开始扫描',
    
    'scanner.title': '扫描食品包装',
    'scanner.subtitle': '上传照片或直接拍摄',
    'scanner.dragDrop': '点击或拖拽图片到这里',
    'scanner.fileSupport': '支持JPG, PNG, WEBP（最大10MB）',
    'scanner.analyzeBtn': '开始AI分析',
    'scanner.analyzing': 'AI正在分析食品...',
    'scanner.wait': '请稍候',
    
    'results.title': '搜索结果',
    'results.count': '共找到',
    'results.countSuffix': '件商品',
    'results.sortRecommended': '推荐',
    'results.sortPrice': '价格',
    'results.sortShipping': '快速配送',
    'results.sortSmallQty': '小批量',
    
    'product.lowestPrice': '最低价',
    'product.minQty': '最少',
    'product.minQtySuffix': '件',
    'product.detailBtn': '详情',
    'product.match': '匹配',
    
    'detail.ingredients': '成分',
    'detail.allergens': '过敏原',
    'detail.nutrition': '营养信息',
    'detail.servingSize': '每份',
    'detail.calories': '卡路里',
    'detail.carbs': '碳水化合物',
    'detail.protein': '蛋白质',
    'detail.certifications': '认证',
    'detail.brand': '品牌',
    'detail.weight': '重量',
    'detail.manufacturer': '制造商',
    'detail.barcode': '条形码',
    'detail.sellersTitle': '购买渠道',
    'detail.sellersSuffix': '个',
    'detail.inStock': '有货',
    'detail.lowStock': '库存不足',
    'detail.productPrice': '商品',
    'detail.shippingPrice': '运费',
    'detail.directShipping': '直邮韩国',
    'detail.intlShipping': '国际运输',
    'detail.buyNow': '立即购买',
    'detail.reviews': '用户评价',
    'detail.similarProducts': '相似商品',
    
    'features.title': '为什么选择K-FoodScan？',
    'features.subtitle': '超越现有服务的综合解决方案',
    'features.ai.title': 'AI视觉识别',
    'features.ai.desc': '仅凭照片自动识别品牌、产品名称和成分',
    'features.smallQty.title': '小批量购买',
    'features.smallQty.desc': '筛选支持1-3件购买的卖家',
    'features.globalMarket.title': '全球市场比价',
    'features.globalMarket.desc': '实时比较亚马逊、速卖通、Coupang等全球价格',
    'features.allergyInfo.title': '过敏信息',
    'features.allergyInfo.desc': '自动翻译和分析成分及过敏原',
    
    'howItWorks.title': '就是这么简单',
    'howItWorks.subtitle': '3步轻松购买全球美食',
    'howItWorks.step1.title': '扫描',
    'howItWorks.step1.desc': '拍摄外国食品包装照片',
    'howItWorks.step2.title': '搜索',
    'howItWorks.step2.desc': 'AI自动查找商品并比较价格',
    'howItWorks.step3.title': '购买',
    'howItWorks.step3.desc': '小批量直接购买或保存到心愿单',
    
    'about.title': '什么是K-FoodScan？',
    'about.desc1': '在国外旅行时品尝的零食，在社交媒体上看到的调味料...',
    'about.desc2': '想再次购买却不知道名称也不知道在哪里买？',
    'about.desc3': 'K-FoodScan用一张照片解决所有问题。',
    'about.stat1': '平均搜索时间',
    'about.stat2': '合作商城',
    'about.stat3': '最小购买量',
    
    'cta.title': '立即开始！',
    'cta.subtitle': '全球美食等着您',
    'cta.button': '开始首次扫描',
    
    'footer.tagline': '一张照片找到全球美食',
    'footer.service': '服务',
    'footer.search': '食品搜索',
    'footer.features': '功能介绍',
    'footer.howToUse': '使用方法',
    'footer.support': '支持',
    'footer.help': '帮助',
    'footer.customerService': '客服中心',
    'footer.faq': '常见问题',
    'footer.social': '社交',
    'footer.copyright': '© 2024 K-FoodScan. 版权所有。',
    
    'msg.addedToWishlist': '已添加到心愿单！',
    'msg.wishlistError': '添加到心愿单失败。',
    'msg.imageRequired': '需要图片',
    'msg.imageTypeError': '只能上传图片文件。',
    'msg.imageSizeError': '文件大小必须小于10MB。',
    'msg.analysisFailed': '分析失败。请重试。',
    'msg.loadDetailFailed': '加载商品详情失败。'
  },
  
  ja: {
    'nav.features': '機能',
    'nav.howItWorks': '使い方',
    'nav.about': '紹介',
    
    'hero.title1': '写真1枚で',
    'hero.title2': '世界中の',
    'hero.title2suffix': '食品を手に',
    'hero.subtitle1': '海外のお菓子・調味料・加工食品、今すぐ撮影するだけ！',
    'hero.subtitle2': 'AIが検索・比較・少量購入まで',
    'hero.subtitle2suffix': '一度に解決',
    'hero.feature1': '1〜3個の少量購入',
    'hero.feature2': '世界中のマーケット比較',
    'hero.feature3': '成分・アレルギー情報',
    'hero.cta': '今すぐスキャン開始',
    
    'scanner.title': '食品パッケージスキャン',
    'scanner.subtitle': '写真をアップロードまたは直接撮影',
    'scanner.dragDrop': 'クリックまたは画像をドラッグ',
    'scanner.fileSupport': 'JPG、PNG、WEBP対応（最大10MB）',
    'scanner.analyzeBtn': 'AI分析を開始',
    'scanner.analyzing': 'AIが食品を分析しています...',
    'scanner.wait': '少々お待ちください',
    
    'results.title': '検索結果',
    'results.count': '合計',
    'results.countSuffix': '件の商品が見つかりました',
    'results.sortRecommended': 'おすすめ順',
    'results.sortPrice': '価格順',
    'results.sortShipping': '配送速度順',
    'results.sortSmallQty': '少量購入',
    
    'product.lowestPrice': '最安値',
    'product.minQty': '最小',
    'product.minQtySuffix': '個',
    'product.detailBtn': '詳細',
    'product.match': '一致',
    
    'detail.ingredients': '原材料',
    'detail.allergens': 'アレルゲン',
    'detail.nutrition': '栄養情報',
    'detail.servingSize': '1食分',
    'detail.calories': 'カロリー',
    'detail.carbs': '炭水化物',
    'detail.protein': 'たんぱく質',
    'detail.certifications': '認証',
    'detail.brand': 'ブランド',
    'detail.weight': '内容量',
    'detail.manufacturer': '製造元',
    'detail.barcode': 'バーコード',
    'detail.sellersTitle': '購入可能な場所',
    'detail.sellersSuffix': '件',
    'detail.inStock': '在庫あり',
    'detail.lowStock': '在庫僅少',
    'detail.productPrice': '商品',
    'detail.shippingPrice': '送料',
    'detail.directShipping': '韓国直送',
    'detail.intlShipping': '海外配送',
    'detail.buyNow': '購入する',
    'detail.reviews': 'レビュー',
    'detail.similarProducts': '類似商品',
    
    'features.title': 'なぜK-FoodScan？',
    'features.subtitle': '既存サービスとは次元の異なる統合ソリューション',
    'features.ai.title': 'AIビジョン認識',
    'features.ai.desc': '写真だけでブランド、製品名、成分まで自動認識',
    'features.smallQty.title': '少量購入特化',
    'features.smallQty.desc': '1〜3個から購入可能な販売店のみフィルタリング',
    'features.globalMarket.title': 'グローバルマーケット比較',
    'features.globalMarket.desc': 'Amazon、AliExpress、Coupangなど世界中の価格をリアルタイム比較',
    'features.allergyInfo.title': 'アレルギー情報',
    'features.allergyInfo.desc': '成分、アレルゲンの自動翻訳・分析',
    
    'howItWorks.title': 'とても簡単です',
    'howItWorks.subtitle': '3ステップで世界中の食品を簡単購入',
    'howItWorks.step1.title': '撮影',
    'howItWorks.step1.desc': '外国の食品パッケージを写真で撮る',
    'howItWorks.step2.title': '検索',
    'howItWorks.step2.desc': 'AIが自動で商品を見つけて価格を比較',
    'howItWorks.step3.title': '購入',
    'howItWorks.step3.desc': '少量で直接購入またはウィッシュリストに保存',
    
    'about.title': 'K-FoodScanとは？',
    'about.desc1': '海外旅行で味わったあのお菓子、SNSで見たあの調味料...',
    'about.desc2': 'また買いたいけど名前も分からないしどこで売っているかも分からない？',
    'about.desc3': 'K-FoodScanは写真1枚ですべてを解決します。',
    'about.stat1': '平均検索時間',
    'about.stat2': '連携ショップ',
    'about.stat3': '最小購入数',
    
    'cta.title': '今すぐ始めましょう！',
    'cta.subtitle': '世界中の食品があなたを待っています',
    'cta.button': '最初のスキャンを開始',
    
    'footer.tagline': '写真1枚で世界中の食品を手に',
    'footer.service': 'サービス',
    'footer.search': '食品検索',
    'footer.features': '機能紹介',
    'footer.howToUse': '使い方',
    'footer.support': 'サポート',
    'footer.help': 'ヘルプ',
    'footer.customerService': 'カスタマーサービス',
    'footer.faq': 'よくある質問',
    'footer.social': 'ソーシャル',
    'footer.copyright': '© 2024 K-FoodScan. 全著作権所有。',
    
    'msg.addedToWishlist': 'ウィッシュリストに追加されました！',
    'msg.wishlistError': 'ウィッシュリストへの追加に失敗しました。',
    'msg.imageRequired': '画像が必要です',
    'msg.imageTypeError': '画像ファイルのみアップロード可能です。',
    'msg.imageSizeError': 'ファイルサイズは10MB以下である必要があります。',
    'msg.analysisFailed': '分析中にエラーが発生しました。もう一度お試しください。',
    'msg.loadDetailFailed': '商品情報の読み込みに失敗しました。'
  },
  
  vi: {
    'nav.features': 'Tính năng',
    'nav.howItWorks': 'Cách dùng',
    'nav.about': 'Giới thiệu',
    
    'hero.title1': 'Chỉ một bức ảnh',
    'hero.title2': 'Tìm thực phẩm',
    'hero.title2suffix': ' toàn cầu',
    'hero.subtitle1': 'Bánh kẹo, gia vị, thực phẩm chế biến nước ngoài - chỉ cần chụp ảnh!',
    'hero.subtitle2': 'AI tìm kiếm, so sánh và mua số lượng nhỏ',
    'hero.subtitle2suffix': ' tất cả trong một',
    'hero.feature1': 'Mua 1-3 sản phẩm',
    'hero.feature2': 'So sánh thị trường toàn cầu',
    'hero.feature3': 'Thông tin thành phần & dị ứng',
    'hero.cta': 'Bắt đầu quét ngay',
    
    'scanner.title': 'Quét bao bì thực phẩm',
    'scanner.subtitle': 'Tải ảnh lên hoặc chụp trực tiếp',
    'scanner.dragDrop': 'Nhấp hoặc kéo thả ảnh vào đây',
    'scanner.fileSupport': 'Hỗ trợ JPG, PNG, WEBP (Tối đa 10MB)',
    'scanner.analyzeBtn': 'Bắt đầu phân tích AI',
    'scanner.analyzing': 'AI đang phân tích thực phẩm...',
    'scanner.wait': 'Vui lòng đợi trong giây lát',
    
    'results.title': 'Kết quả tìm kiếm',
    'results.count': 'Đã tìm thấy',
    'results.countSuffix': ' sản phẩm',
    'results.sortRecommended': 'Đề xuất',
    'results.sortPrice': 'Giá',
    'results.sortShipping': 'Giao hàng nhanh',
    'results.sortSmallQty': 'Số lượng nhỏ',
    
    'product.lowestPrice': 'Giá thấp nhất',
    'product.minQty': 'Tối thiểu',
    'product.minQtySuffix': ' cái',
    'product.detailBtn': 'Chi tiết',
    'product.match': 'khớp',
    
    'detail.ingredients': 'Thành phần',
    'detail.allergens': 'Chất gây dị ứng',
    'detail.nutrition': 'Thông tin dinh dưỡng',
    'detail.servingSize': 'Khẩu phần',
    'detail.calories': 'Calo',
    'detail.carbs': 'Carbohydrate',
    'detail.protein': 'Protein',
    'detail.certifications': 'Chứng nhận',
    'detail.brand': 'Thương hiệu',
    'detail.weight': 'Trọng lượng',
    'detail.manufacturer': 'Nhà sản xuất',
    'detail.barcode': 'Mã vạch',
    'detail.sellersTitle': 'Có sẵn tại',
    'detail.sellersSuffix': ' người bán',
    'detail.inStock': 'Còn hàng',
    'detail.lowStock': 'Sắp hết hàng',
    'detail.productPrice': 'Sản phẩm',
    'detail.shippingPrice': 'Vận chuyển',
    'detail.directShipping': 'Giao trực tiếp đến Hàn Quốc',
    'detail.intlShipping': 'Quốc tế',
    'detail.buyNow': 'Mua ngay',
    'detail.reviews': 'Đánh giá',
    'detail.similarProducts': 'Sản phẩm tương tự',
    
    'features.title': 'Tại sao chọn K-FoodScan?',
    'features.subtitle': 'Giải pháp tích hợp vượt trội so với các dịch vụ hiện có',
    'features.ai.title': 'Nhận diện AI',
    'features.ai.desc': 'Tự động nhận diện thương hiệu, tên sản phẩm và thành phần từ ảnh',
    'features.smallQty.title': 'Mua số lượng nhỏ',
    'features.smallQty.desc': 'Lọc người bán cho phép mua từ 1-3 sản phẩm',
    'features.globalMarket.title': 'So sánh thị trường toàn cầu',
    'features.globalMarket.desc': 'So sánh giá thời gian thực trên Amazon, AliExpress, Coupang, v.v.',
    'features.allergyInfo.title': 'Thông tin dị ứng',
    'features.allergyInfo.desc': 'Dịch và phân tích thành phần và chất gây dị ứng tự động',
    
    'howItWorks.title': 'Đơn giản như thế này',
    'howItWorks.subtitle': 'Mua thực phẩm toàn cầu chỉ với 3 bước',
    'howItWorks.step1.title': 'Quét',
    'howItWorks.step1.desc': 'Chụp ảnh bao bì thực phẩm nước ngoài',
    'howItWorks.step2.title': 'Tìm kiếm',
    'howItWorks.step2.desc': 'AI tự động tìm sản phẩm và so sánh giá',
    'howItWorks.step3.title': 'Mua hàng',
    'howItWorks.step3.desc': 'Mua số lượng nhỏ hoặc lưu vào danh sách yêu thích',
    
    'about.title': 'K-FoodScan là gì?',
    'about.desc1': 'Món bánh bạn đã thử khi đi du lịch nước ngoài, gia vị bạn thấy trên mạng xã hội...',
    'about.desc2': 'Bạn muốn mua lại nhưng không biết tên và không biết mua ở đâu?',
    'about.desc3': 'K-FoodScan giải quyết mọi thứ chỉ với một bức ảnh.',
    'about.stat1': 'Thời gian tìm kiếm trung bình',
    'about.stat2': 'Cửa hàng liên kết',
    'about.stat3': 'Số lượng tối thiểu',
    
    'cta.title': 'Bắt đầu ngay!',
    'cta.subtitle': 'Thực phẩm toàn cầu đang chờ bạn',
    'cta.button': 'Bắt đầu quét đầu tiên',
    
    'footer.tagline': 'Tìm thực phẩm toàn cầu chỉ với một bức ảnh',
    'footer.service': 'Dịch vụ',
    'footer.search': 'Tìm kiếm thực phẩm',
    'footer.features': 'Tính năng',
    'footer.howToUse': 'Cách sử dụng',
    'footer.support': 'Hỗ trợ',
    'footer.help': 'Trợ giúp',
    'footer.customerService': 'Dịch vụ khách hàng',
    'footer.faq': 'Câu hỏi thường gặp',
    'footer.social': 'Mạng xã hội',
    'footer.copyright': '© 2024 K-FoodScan. Bảo lưu mọi quyền.',
    
    'msg.addedToWishlist': 'Đã thêm vào danh sách yêu thích!',
    'msg.wishlistError': 'Không thể thêm vào danh sách yêu thích.',
    'msg.imageRequired': 'Cần có hình ảnh',
    'msg.imageTypeError': 'Chỉ cho phép tải lên file hình ảnh.',
    'msg.imageSizeError': 'Kích thước file phải dưới 10MB.',
    'msg.analysisFailed': 'Phân tích thất bại. Vui lòng thử lại.',
    'msg.loadDetailFailed': 'Không thể tải chi tiết sản phẩm.'
  },
  
  mn: {
    'nav.features': 'Онцлог',
    'nav.howItWorks': 'Хэрхэн ажилладаг',
    'nav.about': 'Тухай',
    
    'hero.title1': 'Нэг зургаар',
    'hero.title2': 'Дэлхийн',
    'hero.title2suffix': ' хоолыг олох',
    'hero.subtitle1': 'Гадаадын чихэр, амтлагч, боловсруулсан хүнс - зөвхөн зураг авах хэрэгтэй!',
    'hero.subtitle2': 'AI хайж, харьцуулж, бага тоогоор худалдан авах',
    'hero.subtitle2suffix': ' боломжийг нэг дороос шийдвэрлэнэ',
    'hero.feature1': '1-3 ширхэг худалдаж авах',
    'hero.feature2': 'Дэлхийн зах зээл харьцуулах',
    'hero.feature3': 'Найрлага ба харшлын мэдээлэл',
    'hero.cta': 'Одоо скан эхлүүлэх',
    
    'scanner.title': 'Хүнсний савлагааг скан',
    'scanner.subtitle': 'Зураг оруулах эсвэл шууд авах',
    'scanner.dragDrop': 'Дарах эсвэл зургийг чирэх',
    'scanner.fileSupport': 'JPG, PNG, WEBP дэмжигдсэн (Хамгийн их 10MB)',
    'scanner.analyzeBtn': 'AI шинжилгээ эхлүүлэх',
    'scanner.analyzing': 'AI хоолыг шинжилж байна...',
    'scanner.wait': 'Түр хүлээнэ үү',
    
    'results.title': 'Хайлтын үр дүн',
    'results.count': 'Нийт',
    'results.countSuffix': ' бүтээгдэхүүн олдсон',
    'results.sortRecommended': 'Санал болгосон',
    'results.sortPrice': 'Үнэ',
    'results.sortShipping': 'Хурдан хүргэлт',
    'results.sortSmallQty': 'Бага тоо',
    
    'product.lowestPrice': 'Хамгийн бага үнэ',
    'product.minQty': 'Хамгийн бага',
    'product.minQtySuffix': ' ширхэг',
    'product.detailBtn': 'Дэлгэрэнгүй',
    'product.match': 'таарч байна',
    
    'detail.ingredients': 'Найрлага',
    'detail.allergens': 'Харшил үүсгэгч',
    'detail.nutrition': 'Шим тэжээлийн мэдээлэл',
    'detail.servingSize': 'Нэг хэсэг',
    'detail.calories': 'Калори',
    'detail.carbs': 'Нүүрс ус',
    'detail.protein': 'Уураг',
    'detail.certifications': 'Гэрчилгээ',
    'detail.brand': 'Брэнд',
    'detail.weight': 'Жин',
    'detail.manufacturer': 'Үйлдвэрлэгч',
    'detail.barcode': 'Зураасан код',
    'detail.sellersTitle': 'Худалдан авах боломжтой',
    'detail.sellersSuffix': ' борлуулагч',
    'detail.inStock': 'Бараа байгаа',
    'detail.lowStock': 'Бараа бага',
    'detail.productPrice': 'Бүтээгдэхүүн',
    'detail.shippingPrice': 'Хүргэлт',
    'detail.directShipping': 'Солонгос руу шууд',
    'detail.intlShipping': 'Олон улсын',
    'detail.buyNow': 'Одоо худалдаж авах',
    'detail.reviews': 'Үнэлгээ',
    'detail.similarProducts': 'Ижил төстэй бүтээгдэхүүн',
    
    'features.title': 'Яагаад K-FoodScan вэ?',
    'features.subtitle': 'Одоо байгаа үйлчилгээнээс давсан цогц шийдэл',
    'features.ai.title': 'AI харааны таних',
    'features.ai.desc': 'Зургаас брэнд, бүтээгдэхүүний нэр, найрлагыг автоматаар таних',
    'features.smallQty.title': 'Бага тоогоор худалдан авах',
    'features.smallQty.desc': '1-3 ширхэгээс худалдан авах боломжтой борлуулагчдыг шүүх',
    'features.globalMarket.title': 'Дэлхийн зах зээл харьцуулах',
    'features.globalMarket.desc': 'Amazon, AliExpress, Coupang гэх мэт дэлхийн үнийг бодит цагт харьцуулах',
    'features.allergyInfo.title': 'Харшлын мэдээлэл',
    'features.allergyInfo.desc': 'Найрлага, харшил үүсгэгчийг автоматаар орчуулж шинжлэх',
    
    'howItWorks.title': 'Энэ нь ийм энгийн',
    'howItWorks.subtitle': '3 алхамаар дэлхийн хоолыг амархан худалдан авах',
    'howItWorks.step1.title': 'Скан',
    'howItWorks.step1.desc': 'Гадаадын хүнсний савлагааны зураг авах',
    'howItWorks.step2.title': 'Хайх',
    'howItWorks.step2.desc': 'AI автоматаар бүтээгдэхүүн олж үнийг харьцуулна',
    'howItWorks.step3.title': 'Худалдан авах',
    'howItWorks.step3.desc': 'Бага тоогоор худалдан авах эсвэл хүслийн жагсаалтад хадгалах',
    
    'about.title': 'K-FoodScan гэж юу вэ?',
    'about.desc1': 'Гадаадад аялахдаа идсэн чихэр, сошиал медиад харсан амтлагч...',
    'about.desc2': 'Дахин худалдаж авмаар байсан ч нэрийг мэдэхгүй, хаанаас олохоо мэдэхгүй үү?',
    'about.desc3': 'K-FoodScan нэг зургаар бүх зүйлийг шийдвэрлэнэ.',
    'about.stat1': 'Дундаж хайлтын хугацаа',
    'about.stat2': 'Холбогдсон дэлгүүр',
    'about.stat3': 'Хамгийн бага тоо',
    
    'cta.title': 'Одоо эхлүүлээрэй!',
    'cta.subtitle': 'Дэлхийн хоол таныг хүлээж байна',
    'cta.button': 'Анхны скан эхлүүлэх',
    
    'footer.tagline': 'Нэг зургаар дэлхийн хоолыг олох',
    'footer.service': 'Үйлчилгээ',
    'footer.search': 'Хоол хайх',
    'footer.features': 'Онцлог',
    'footer.howToUse': 'Хэрхэн хэрэглэх',
    'footer.support': 'Дэмжлэг',
    'footer.help': 'Тусламж',
    'footer.customerService': 'Үйлчлүүлэгчийн үйлчилгээ',
    'footer.faq': 'Түгээмэл асуулт',
    'footer.social': 'Сошиал',
    'footer.copyright': '© 2024 K-FoodScan. Бүх эрх хуулиар хамгаалагдсан.',
    
    'msg.addedToWishlist': 'Хүслийн жагсаалтад нэмэгдлээ!',
    'msg.wishlistError': 'Хүслийн жагсаалтад нэмэхэд алдаа гарлаа.',
    'msg.imageRequired': 'Зураг шаардлагатай',
    'msg.imageTypeError': 'Зөвхөн зургийн файл оруулах боломжтой.',
    'msg.imageSizeError': 'Файлын хэмжээ 10MB-с бага байх ёстой.',
    'msg.analysisFailed': 'Шинжилгээ амжилтгүй болсон. Дахин оролдоно уу.',
    'msg.loadDetailFailed': 'Бүтээгдэхүүний дэлгэрэнгүй мэдээллийг ачаалж чадсангүй.'
  },
  
  ru: {
    'nav.features': 'Возможности',
    'nav.howItWorks': 'Как это работает',
    'nav.about': 'О нас',
    
    'hero.title1': 'Одна фотография —',
    'hero.title2': 'весь мир',
    'hero.title2suffix': ' еды',
    'hero.subtitle1': 'Иностранные снеки, приправы, обработанные продукты — просто сфотографируйте!',
    'hero.subtitle2': 'ИИ найдёт, сравнит и позволит купить малыми партиями',
    'hero.subtitle2suffix': ' — всё в одном месте',
    'hero.feature1': 'Покупка от 1-3 штук',
    'hero.feature2': 'Сравнение цен по миру',
    'hero.feature3': 'Состав и аллергены',
    'hero.cta': 'Начать сканирование',
    
    'scanner.title': 'Сканировать упаковку',
    'scanner.subtitle': 'Загрузите фото или сделайте снимок',
    'scanner.dragDrop': 'Нажмите или перетащите изображение',
    'scanner.fileSupport': 'Поддерживаются JPG, PNG, WEBP (макс. 10МБ)',
    'scanner.analyzeBtn': 'Начать анализ ИИ',
    'scanner.analyzing': 'ИИ анализирует продукт...',
    'scanner.wait': 'Пожалуйста, подождите',
    
    'results.title': 'Результаты поиска',
    'results.count': 'Найдено',
    'results.countSuffix': ' товаров',
    'results.sortRecommended': 'Рекомендуемые',
    'results.sortPrice': 'По цене',
    'results.sortShipping': 'Быстрая доставка',
    'results.sortSmallQty': 'Малые партии',
    
    'product.lowestPrice': 'Лучшая цена',
    'product.minQty': 'Мин.',
    'product.minQtySuffix': ' шт.',
    'product.detailBtn': 'Подробнее',
    'product.match': 'совпадение',
    
    'detail.ingredients': 'Состав',
    'detail.allergens': 'Аллергены',
    'detail.nutrition': 'Пищевая ценность',
    'detail.servingSize': 'Порция',
    'detail.calories': 'Калории',
    'detail.carbs': 'Углеводы',
    'detail.protein': 'Белки',
    'detail.certifications': 'Сертификаты',
    'detail.brand': 'Бренд',
    'detail.weight': 'Вес',
    'detail.manufacturer': 'Производитель',
    'detail.barcode': 'Штрихкод',
    'detail.sellersTitle': 'Где купить',
    'detail.sellersSuffix': ' продавцов',
    'detail.inStock': 'В наличии',
    'detail.lowStock': 'Мало',
    'detail.productPrice': 'Товар',
    'detail.shippingPrice': 'Доставка',
    'detail.directShipping': 'Прямая в Корею',
    'detail.intlShipping': 'Международная',
    'detail.buyNow': 'Купить',
    'detail.reviews': 'Отзывы',
    'detail.similarProducts': 'Похожие товары',
    
    'features.title': 'Почему K-FoodScan?',
    'features.subtitle': 'Комплексное решение нового уровня',
    'features.ai.title': 'Распознавание ИИ',
    'features.ai.desc': 'Автоматическое определение бренда, названия и состава по фото',
    'features.smallQty.title': 'Малые партии',
    'features.smallQty.desc': 'Фильтр продавцов с возможностью покупки от 1-3 штук',
    'features.globalMarket.title': 'Сравнение по миру',
    'features.globalMarket.desc': 'Сравнение цен на Amazon, AliExpress, Coupang и др. в реальном времени',
    'features.allergyInfo.title': 'Информация об аллергенах',
    'features.allergyInfo.desc': 'Автоматический перевод и анализ состава и аллергенов',
    
    'howItWorks.title': 'Это очень просто',
    'howItWorks.subtitle': '3 шага до покупки продуктов со всего мира',
    'howItWorks.step1.title': 'Сканируйте',
    'howItWorks.step1.desc': 'Сфотографируйте упаковку иностранного продукта',
    'howItWorks.step2.title': 'Ищите',
    'howItWorks.step2.desc': 'ИИ автоматически найдёт товар и сравнит цены',
    'howItWorks.step3.title': 'Покупайте',
    'howItWorks.step3.desc': 'Купите малыми партиями или сохраните в избранное',
    
    'about.title': 'Что такое K-FoodScan?',
    'about.desc1': 'Тот снек из зарубежной поездки, та приправа из соцсетей...',
    'about.desc2': 'Хотели купить снова, но не знали названия и где искать?',
    'about.desc3': 'K-FoodScan решает всё одной фотографией.',
    'about.stat1': 'Среднее время поиска',
    'about.stat2': 'Подключённые магазины',
    'about.stat3': 'Минимальное кол-во',
    
    'cta.title': 'Начните прямо сейчас!',
    'cta.subtitle': 'Продукты со всего мира ждут вас',
    'cta.button': 'Первое сканирование',
    
    'footer.tagline': 'Находите мировые продукты одной фотографией',
    'footer.service': 'Сервис',
    'footer.search': 'Поиск продуктов',
    'footer.features': 'Возможности',
    'footer.howToUse': 'Как использовать',
    'footer.support': 'Поддержка',
    'footer.help': 'Помощь',
    'footer.customerService': 'Служба поддержки',
    'footer.faq': 'Вопросы и ответы',
    'footer.social': 'Соцсети',
    'footer.copyright': '© 2024 K-FoodScan. Все права защищены.',
    
    'msg.addedToWishlist': 'Добавлено в избранное!',
    'msg.wishlistError': 'Не удалось добавить в избранное.',
    'msg.imageRequired': 'Требуется изображение',
    'msg.imageTypeError': 'Можно загружать только изображения.',
    'msg.imageSizeError': 'Размер файла должен быть менее 10МБ.',
    'msg.analysisFailed': 'Ошибка анализа. Попробуйте снова.',
    'msg.loadDetailFailed': 'Не удалось загрузить информацию о товаре.'
  }
};

// 현재 언어
let currentLanguage = localStorage.getItem('language') || 'ko';

// 번역 함수
function t(key) {
  return translations[currentLanguage]?.[key] || translations['ko'][key] || key;
}

// 언어 변경 함수
function changeLanguage(lang) {
  currentLanguage = lang;
  window.currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // 모든 번역 가능한 요소 업데이트
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translated = t(key);
    if (translated && translated !== key) {
      element.textContent = translated;
    }
  });
  
  // HTML lang 속성 업데이트
  document.documentElement.lang = lang;
  
  // 현재 언어 표시 업데이트
  const currentLangEl = document.getElementById('currentLang');
  if (currentLangEl) {
    currentLangEl.textContent = lang.toUpperCase();
  }
  
  // 언어 옵션 활성화 상태 업데이트
  document.querySelectorAll('.lang-option').forEach(option => {
    if (option.getAttribute('data-lang') === lang) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
  
  // 언어 선택 버튼 활성화 상태 업데이트
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // 드롭다운 닫기
  const langDropdown = document.getElementById('langDropdown');
  if (langDropdown) {
    langDropdown.classList.remove('show');
  }
  
  // 모바일 메뉴 닫기
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
}

// 전역으로 노출
window.t = t;
window.changeLanguage = changeLanguage;
window.currentLanguage = currentLanguage;
