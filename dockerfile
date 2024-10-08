# 1. Node.js 베이스 이미지 사용 (Next.js는 Node.js 기반)
FROM node:18-alpine

# 2. 작업 디렉토리 설정
WORKDIR /jlog

# 3. package.json 및 package-lock.json 파일 복사
COPY package*.json ./

# 4. 종속성 설치
RUN npm install

# 5. 애플리케이션 코드 복사
COPY . .

# 6. Next.js 빌드
RUN npm run build

# 7. 포트 설정
EXPOSE 3000

# 8. Next.js 서버 실행
CMD ["npm", "start"]
