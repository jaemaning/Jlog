# Jlog

NextJS Blog Project (start : 2024/03/12)

# Ideas
- 블로그 업데이트는 mdx 파일을 commit 하는 것으로 진행합니다.
- aws ec2 서버를 사용하여 배포하며 github actions or jenkins 파이프라인을 구축해 CI/CD 자동배포 하였습니다.
- NextJS SSG 배포를 통하여 SEO 최적화 및 초기 페이지 접근 속도 향상, 리소스 낭비를 최소화하였습니다.
- 

# Issue

### Contentlayer
- Contentlayer 최신 업데이트가 9 Months ago 로 nextJS14 Version 호환 이슈가 있음을 확인하였습니다.
- 이에 더이상 Contentlayer 를 사용하지않고 "next-mdx-remote": "^5.0.0" + "gray-matter": "^4.0.3" 로 마이그레이션하였습니다.

### 개발환경 변경
- 로컬 개발 환경이 window11 notebook -> macbook m3 로 변경되었습니다.

### 

# Memo

### Storybook
- Storybook 을 사용하여 atom 단위 컴포넌트 테스트를 진행하였습니다.

### darkMode

### Vanilla-extract
- recipe 를 사용하여 Atomic design 패턴을 적용해 보았습니다.
- recipe 에 추가적인 Custom design 을 입히기 위해 자체적인 CSS ClassName 을 추가하여 덮어쓸 수 있도록 classNames 라이브러리를 추가하였습니다.

### 반응형 웹사이트 구현
- 반응형 웹사이트 구현을 위해 grid, flex-box 를 활용하여 직접 구현하였습니다.


