# K-FoodScan 🍡📸

## 프로젝트 개요
- **이름**: K-FoodScan
- **슬로건**: "사진 한 장으로 전 세계 식품을 손안에"
- **목표**: 외국 과자·식품·조미료·가공식품의 판매처/제조원/소량 구매처를 AI 이미지 인식으로 찾아주는 통합 플랫폼

## 🎯 주요 기능

### ✅ 현재 구현된 기능

#### 🌍 다국어 지원 (NEW!)
1. **7개 언어 지원**
   - 🇰🇷 한국어 (Korean)
   - 🇺🇸 영어 (English)
   - 🇨🇳 중국어 (Chinese)
   - 🇯🇵 일본어 (Japanese)
   - 🇻🇳 베트남어 (Vietnamese)
   - 🇲🇳 몽골어 (Mongolian)
   - 🇷🇺 러시아어 (Russian)

2. **언어 선택 UI**
   - 헤더 드롭다운 메뉴
   - 모바일 최적화 언어 선택기
   - 국기 아이콘 표시
   - localStorage에 선택 저장

3. **실시간 번역**
   - 모든 텍스트 자동 번역
   - 페이지 새로고침 없이 즉시 변경
   - 700+ 번역 문자열

#### 🎨 기본 기능
1. **강력한 첫 화면 (Hero Section)**
   - 눈에 띄는 그라디언트 디자인
   - 핵심 가치 제안 강조
   - CTA(Call-to-Action) 버튼

2. **이미지 업로드 & 스캔**
   - 드래그 앤 드롭 지원
   - 모바일 카메라 촬영 지원
   - 이미지 미리보기
   - 파일 타입 & 크기 검증 (최대 10MB)

3. **AI 분석 시뮬레이션**
   - 로딩 애니메이션
   - 분석 진행 상태 표시
   - Mock 데이터 기반 결과 제공

4. **검색 결과 표시**
   - 상품 카드 그리드 레이아웃
   - 신뢰도(confidence) 표시
   - 최저가 판매처 하이라이트
   - 알레르기 정보 뱃지

5. **필터링 & 정렬**
   - 추천순, 가격순, 배송빠른순
   - 소량 구매 필터 (1~3개)
   - 실시간 결과 재정렬

6. **상품 상세 정보 모달**
   - 이미지 갤러리
   - 브랜드/제조사/바코드 정보
   - 영양 성분표
   - 원재료 목록
   - 알레르기 유발 물질
   - 인증 정보 (할랄, ISO 등)

7. **판매처 비교**
   - 여러 판매처 가격 비교
   - 최소 주문 수량(MOQ) 표시
   - 배송 정보 (기간, 비용)
   - 한국 직배송 여부
   - 재고 상태
   - 구매 링크 제공

8. **위시리스트 기능**
   - 관심 상품 저장
   - 하트 아이콘 토글
   - 토스트 알림

9. **사용자 리뷰**
   - 별점 평가
   - 리뷰 내용
   - 작성 날짜

10. **유사 상품 추천**
    - 관련 상품 제안
    - 썸네일 클릭 시 상세 페이지 이동

11. **반응형 디자인**
    - 모바일 최적화
    - 태블릿 지원
    - 데스크톱 레이아웃

12. **애니메이션 & UX**
    - 스무스 스크롤
    - 호버 효과
    - 카드 애니메이션
    - 로딩 스피너
    - 펄스 효과

## 📍 기능 URI 요약

### API 엔드포인트
| 메서드 | 경로 | 설명 | 파라미터 |
|--------|------|------|----------|
| GET | `/` | 메인 페이지 | - |
| POST | `/api/analyze` | 이미지 분석 | `image` (multipart/form-data) |
| GET | `/api/product/:id` | 상품 상세 정보 | `id` (상품 ID) |
| POST | `/api/wishlist` | 위시리스트 추가 | `productId` (JSON) |
| GET | `/api/compare/:productId` | 가격 비교 | `productId` (상품 ID) |

### 프론트엔드 섹션
- `#scanner` - 이미지 업로드/스캔 영역
- `#results` - 검색 결과 표시
- `#features` - 기능 소개
- `#how-it-works` - 사용 방법
- `#about` - 서비스 소개

## 🚧 미구현 기능

### Phase 1 (MVP 완성)
- [ ] 실제 AI 비전 모델 연동 (OpenAI Vision, Google Vision API, Cloudflare AI)
- [ ] OCR 텍스트 인식 (다국어 지원)
- [ ] 실제 상품 데이터베이스 구축 (D1 Database)
- [ ] 실시간 쇼핑몰 API 연동 (쿠팡, 아마존, 알리익스프레스)
- [ ] 사용자 인증 시스템 (회원가입/로그인)
- [ ] 위시리스트 영구 저장 (KV Storage)

### Phase 2 (고도화)
- [ ] 바코드/QR 코드 스캔
- [ ] 다국어 라벨 자동 번역
- [ ] 실시간 가격 추적 & 알림
- [ ] 관세·통관 정보 계산기
- [ ] B2B 파트너 대시보드
- [ ] 리뷰 작성 & 사진 업로드
- [ ] 소셜 공유 기능
- [ ] 맞춤 추천 알고리즘

### Phase 3 (확장)
- [ ] 모바일 앱 (iOS/Android)
- [ ] 음성 검색
- [ ] AR 상품 미리보기
- [ ] 식단 관리 연동
- [ ] 구독 서비스 (프리미엄)
- [ ] 데이터 인사이트 리포트 (B2B)

## 🎨 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **TailwindCSS** - 유틸리티 퍼스트 CSS 프레임워크
- **Font Awesome** - 아이콘
- **Vanilla JavaScript** - 순수 자바스크립트 (프레임워크 없음)
- **i18n.js** - 다국어 번역 시스템 (7개 언어)
- **Noto Sans Fonts** - 다국어 폰트 지원 (KR/JP/SC)

### Backend
- **Hono** - 경량 웹 프레임워크
- **TypeScript** - 타입 안전성
- **Cloudflare Workers** - 엣지 컴퓨팅 플랫폼

### DevOps
- **Vite** - 빌드 도구
- **Wrangler** - Cloudflare CLI
- **PM2** - 프로세스 관리 (개발 환경)

### 향후 통합 예정
- **Cloudflare D1** - 상품 데이터베이스
- **Cloudflare KV** - 캐시 & 세션
- **Cloudflare R2** - 이미지 스토리지
- **Cloudflare AI** - AI 이미지 인식
- **OpenAI Vision API** - 고급 이미지 분석
- **Google Vision API** - OCR & 라벨 인식

## 🚀 다음 개발 단계

### 우선순위 1: AI 연동
1. Cloudflare AI Workers AI 모델 통합
2. OpenAI Vision API 연동 (대체)
3. 이미지 → 텍스트 추출 (OCR)
4. 브랜드/제품명 인식 로직

### 우선순위 2: 데이터베이스
1. D1 Database 스키마 설계
   - `products` 테이블
   - `brands` 테이블
   - `sellers` 테이블
   - `users` 테이블
   - `wishlists` 테이블
2. Migration 파일 작성
3. Seed 데이터 입력

### 우선순위 3: 외부 API 연동
1. 쿠팡 파트너스 API
2. 아마존 Product Advertising API
3. 알리익스프레스 Affiliate API
4. 네이버 쇼핑 API
5. 가격 크롤링 시스템 (대체)

### 우선순위 4: 사용자 시스템
1. 회원가입/로그인 (Cloudflare Access or Auth0)
2. 세션 관리 (KV Storage)
3. 사용자 프로필
4. 검색 히스토리
5. 위시리스트 영구 저장

## 📦 데이터 모델

### Product (상품)
```typescript
{
  id: number
  name: string
  brand: string
  country: string
  manufacturer: string
  category: string
  weight: string
  barcode: string
  image: string
  images: string[]
  description: string
  ingredients: string[]
  allergens: string[]
  nutrition: {
    servingSize: string
    calories: number
    carbs: number
    protein: number
    fat: number
    sodium: number
    sugar: number
  }
  certifications: string[]
}
```

### Seller (판매처)
```typescript
{
  platform: string
  url: string
  price: number
  minQuantity: number
  shipping: number
  shippingDays: string
  directShipping: boolean
  stock: 'in_stock' | 'low_stock' | 'out_of_stock'
}
```

## 🎯 사용자 가이드

1. **메인 페이지 접속**
   - 강력한 첫 화면에서 서비스 이해
   - "지금 바로 촬영하기" 버튼 클릭

2. **이미지 업로드**
   - 드래그 앤 드롭 또는 클릭하여 파일 선택
   - 모바일: 카메라로 직접 촬영
   - 이미지 미리보기 확인

3. **AI 분석 시작**
   - "AI 분석 시작하기" 버튼 클릭
   - 10초 이내 결과 제공

4. **결과 확인**
   - 여러 상품 후보 표시
   - 신뢰도 높은 순으로 정렬
   - 필터 적용 (가격순, 소량 구매 등)

5. **상세 정보 보기**
   - "상세보기" 버튼 클릭
   - 영양 정보, 성분, 알레르기 확인
   - 여러 판매처 가격 비교

6. **구매하기**
   - 원하는 판매처 선택
   - "구매하러 가기" 클릭
   - 외부 쇼핑몰로 이동

7. **위시리스트**
   - 하트 아이콘 클릭하여 저장
   - 나중에 한 번에 비교/구매

## 🌐 배포 정보

- **플랫폼**: Cloudflare Pages
- **상태**: ✅ 실행 중 (다국어 지원)
- **개발 서버 URL**: https://3000-ix5z76v5srocn2u6w74mt-b9b802c4.sandbox.novita.ai/
- **Tech Stack**: Hono + TypeScript + TailwindCSS + i18n
- **지원 언어**: 7개국어 (한/영/중/일/베/몽/러)
- **마지막 업데이트**: 2024-12-11

## 🔗 바로가기

- **웹사이트**: [K-FoodScan 접속하기](https://3000-ix5z76v5srocn2u6w74mt-b9b802c4.sandbox.novita.ai/)
- **GitHub**: [소스코드 보기](https://github.com/langsb16-collab/photo)
- **언어별 접속**:
  - 🇰🇷 한국어: [KO](https://3000-ix5z76v5srocn2u6w74mt-b9b802c4.sandbox.novita.ai/)
  - 🇺🇸 English: [EN](https://3000-ix5z76v5srocn2u6w74mt-b9b802c4.sandbox.novita.ai/)
  - 🇨🇳 中文: [ZH](https://3000-ix5z76v5srocn2u6w74mt-b9b802c4.sandbox.novita.ai/)
  - 🇯🇵 日本語: [JA](https://3000-ix5z76v5srocn2u6w74mt-b9b802c4.sandbox.novita.ai/)
  - 🇻🇳 Tiếng Việt: [VI](https://3000-ix5z76v5srocn2u6w74mt-b9b802c4.sandbox.novita.ai/)
  - 🇲🇳 Монгол: [MN](https://3000-ix5z76v5srocn2u6w74mt-b9b802c4.sandbox.novita.ai/)
  - 🇷🇺 Русский: [RU](https://3000-ix5z76v5srocn2u6w74mt-b9b802c4.sandbox.novita.ai/)

## 📝 개발 노트

### 핵심 차별점
1. **식품 특화**: 일반 이미지 검색이 아닌 식품에 최적화
2. **소량 구매**: 1~3개부터 구매 가능한 판매처 필터링
3. **통합 솔루션**: 정보 확인 → 가격 비교 → 구매까지 원스톱
4. **글로벌 지원**: 전 세계 식품 & 쇼핑몰 커버
5. **알레르기 안전**: 성분 자동 번역 & 알레르기 정보 제공

### 기술적 도전 과제
- AI 이미지 인식 정확도 향상
- 실시간 가격 수집 & 동기화
- 다국어 OCR 정확도
- 대용량 상품 DB 관리
- 쇼핑몰 API Rate Limit 관리

## 🤝 기여하기

이 프로젝트는 현재 개발 중입니다. 기여를 환영합니다!

## 📄 라이선스

MIT License

---

**K-FoodScan** - 전 세계 식품을 손쉽게 찾고 구매하세요! 🌍🍡
