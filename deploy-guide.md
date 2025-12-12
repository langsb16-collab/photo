# K-FoodScan Cloudflare Pages 배포 가이드

## 1. Cloudflare API 설정

```bash
# setup_cloudflare_api_key 도구 실행
# (이미 실행됨)
```

## 2. Cloudflare Pages 프로젝트 생성

```bash
# 프로젝트 생성
npx wrangler pages project create k-foodscan \
  --production-branch main \
  --compatibility-date 2024-12-11

# 빌드
npm run build

# 배포
npx wrangler pages deploy dist --project-name k-foodscan
```

## 3. 커스텀 도메인 추가

### 옵션 A: Wrangler CLI 사용

```bash
# 스크립트 실행
./add-domain.sh
```

### 옵션 B: 수동 설정

1. **Cloudflare DNS 설정**

Cloudflare Dashboard → DNS → Add record:

```
Type: CNAME
Name: @
Content: k-foodscan.pages.dev
Proxy: Enabled (주황색)
TTL: Auto
```

```
Type: CNAME
Name: www
Content: k-foodscan.pages.dev
Proxy: Enabled
TTL: Auto
```

2. **Cloudflare Pages 설정**

```bash
npx wrangler pages domain add tourit.ceo --project-name k-foodscan
npx wrangler pages domain add www.tourit.ceo --project-name k-foodscan
```

## 4. SSL/TLS 설정

Cloudflare Dashboard → SSL/TLS:

- Encryption mode: **Full (strict)**
- Edge Certificates: 자동 발급 (무료)
- Always Use HTTPS: **ON**

## 5. 검증

```bash
# DNS 확인
dig tourit.ceo
dig www.tourit.ceo

# SSL 확인
curl -I https://tourit.ceo

# 브라우저 접속
https://tourit.ceo
https://www.tourit.ceo
```

## 6. 문제 해결

### DNS가 전파되지 않는 경우

```bash
# DNS 캐시 클리어
# Linux/Mac
sudo dscacheutil -flushcache

# Windows
ipconfig /flushdns

# 온라인 DNS 체크
https://dnschecker.org/#A/tourit.ceo
```

### SSL 인증서 오류

- 최대 24시간 대기 (보통 5-10분)
- Cloudflare Dashboard에서 "Purge Everything" 실행
- SSL/TLS 모드를 "Flexible"에서 "Full (strict)"로 변경

### 404 오류

```bash
# _routes.json 확인
cat dist/_routes.json

# 재배포
npm run build
npx wrangler pages deploy dist --project-name k-foodscan
```

