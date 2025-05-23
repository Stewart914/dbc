document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('drawButton');
    const numberBalls = document.querySelectorAll('.number-ball');

    drawButton.addEventListener('click', () => {
        // 1부터 45까지의 숫자 중 6개를 중복 없이 무작위로 선택
        const lottoNumbers = generateLottoNumbers();
        
        // 각 공에 번호를 표시하고 애니메이션 효과 주기
        numberBalls.forEach((ball, index) => {
            // 초기화: 번호 숨기기 및 배경색 초기화
            ball.textContent = '';
            ball.style.backgroundColor = '#f8d43b'; // 기본 공 색상
            ball.style.transform = 'scale(0)'; // 초기 크기 0으로 설정

            setTimeout(() => {
                ball.textContent = lottoNumbers[index];
                // 번호에 따라 공 색상 변경 (예시)
                if (lottoNumbers[index] <= 10) {
                    ball.style.backgroundColor = '#f8d43b'; // 노랑
                } else if (lottoNumbers[index] <= 20) {
                    ball.style.backgroundColor = '#62c2f2'; // 파랑
                } else if (lottoNumbers[index] <= 30) {
                    ball.style.backgroundColor = '#ff5722'; // 빨강
                } else if (lottoNumbers[index] <= 40) {
                    ball.style.backgroundColor = '#bada55'; // 초록
                } else {
                    ball.style.backgroundColor = '#9c27b0'; // 보라
                }
                ball.style.transform = 'scale(1)'; // 나타나는 효과
                ball.style.transition = 'transform 0.5s ease-out, background-color 0.5s ease-out';
            }, index * 100); // 각 공이 순차적으로 나타나도록 지연 시간 부여
        });
    });

    function generateLottoNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1; // 1부터 45까지
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        // 번호를 오름차순으로 정렬
        return numbers.sort((a, b) => a - b);
    }
});