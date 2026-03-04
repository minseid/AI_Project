# 별이에게 — 펫로스 증후군 치유 앱

별이 된 반려동물과 AI를 통해 다시 대화하며 추억을 나누는 감정 치유 플랫폼입니다.

## 주요 기능

- **AI 대화 채팅**: 반려동물의 성격과 추억을 학습한 AI와 자연스러운 대화
- **추억 일기**: 소중한 기억을 기록하고 보관
- **추억 앨범**: 함께한 사진을 모아 간직

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local.example` 파일을 `.env.local`로 복사하고 Anthropic API 키를 입력하세요:

```bash
cp .env.local.example .env.local
```

`.env.local` 파일에 API 키 입력:
```
ANTHROPIC_API_KEY=your_api_key_here
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Anthropic Claude API** (claude-sonnet-4-20250514)

## 프로젝트 구조

```
src/
  app/
    page.tsx          # 메인 페이지 (앱 상태 관리)
    layout.tsx        # 루트 레이아웃
    globals.css       # 전역 스타일
    api/
      chat/
        route.ts      # Anthropic API 프록시
  components/
    StarField.tsx     # 별 배경 파티클
    LandingPage.tsx   # 랜딩 화면
    PetProfileSetup.tsx  # 반려동물 프로필 설정
    ChatInterface.tsx    # 채팅 + 일기 + 앨범 탭
```

## 심리적 안전성

이 앱은 펫로스 증후군 극복을 돕는 감정 치유 도구입니다.
전문 심리 상담을 대체하지 않으며, 심각한 경우 전문가 상담을 권장합니다.