#!/bin/bash

# Cloudflare Pages에 커스텀 도메인 추가
# 사용법: ./add-domain.sh

echo "🌐 K-FoodScan에 tourit.ceo 도메인 추가 중..."

# 프로젝트명
PROJECT_NAME="k-foodscan"

# 도메인 추가
echo "📝 메인 도메인 추가: tourit.ceo"
npx wrangler pages domain add tourit.ceo --project-name $PROJECT_NAME

echo "📝 www 서브도메인 추가: www.tourit.ceo"
npx wrangler pages domain add www.tourit.ceo --project-name $PROJECT_NAME

echo "✅ 완료! 도메인이 추가되었습니다."
echo "🔄 DNS 전파까지 최대 24시간이 걸릴 수 있습니다."
echo ""
echo "📋 다음 단계:"
echo "1. Cloudflare DNS에 CNAME 레코드 추가"
echo "   - @ → k-foodscan.pages.dev"
echo "   - www → k-foodscan.pages.dev"
echo "2. SSL 인증서 자동 발급 대기 (약 5-10분)"
echo "3. https://tourit.ceo 접속 테스트"

