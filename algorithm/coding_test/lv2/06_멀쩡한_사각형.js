// Q2. 멀쩡한 사각형

/** 문제 설명
 * 
 *  가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있습니다. 
 *  종이에는 가로, 세로 방향과 평행하게 격자 형태로 선이 그어져 있으며, 모든 격자칸은 1cm x 1cm 크기입니다. 
 *  이 종이를 격자 선을 따라 1cm × 1cm의 정사각형으로 잘라 사용할 예정이었는데, 
 *  누군가가 이 종이를 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다. 
 *  그러므로 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태입니다. 
 *  새로운 종이를 구할 수 없는 상태이기 때문에, 
 *  이 종이에서 원래 종이의 가로, 세로 방향과 평행하게 1cm × 1cm로 잘라 사용할 수 있는 만큼만 사용하기로 하였습니다.
 *  가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.
**/

/** 제한 사항
 * 
 *  --W, H : 1억 이하의 자연수 
**/

/** 입출력 예시
 * 
 *  W   H    result
 * 
 *  8   12     80
**/

// 문제 파악
// 음 이거 Lv2 맞나 ? 직사각형 가로지르는 대각선 그었을 때 겹치지 않는 멀쩡한 1 x 1 정사각형 구하기
// 라고 생각했지만 전혀 오산이었고 내가 간과한 것들이 훨씬 ;;; 더 많음 ;;;
// 규칙 발견하기 🐶어려운 문제 --> 실제 공식: 사각형의 가로 + 사각형의 세로 - (사각형의 가로, 세로의 최대 공약수)
// 최대 공약수는 어떻게 구합니까 ??!???!! --> 유클리드 호제법 ...

// 풀이 1 (사실 틀림)
{
  function solution(w, h) {
    var answer = 1;
    if(w < h){
      answer = w * h - (2 * w);
    }else{
      answer = w * h - (2 * h);
    }
    return answer;
  }
}
// 풀이 2 
{
  // 유클리드 호제법을 이용한 최대 공약수 구하기  -> GCD = Greatest Common Divisor 
  function gcd(w, h){  // 처음 w와 h를 받는다.
      
    // w와 h의 나머지를 구한다.
    const mod = w % h;

    // 만약 나머지가 0일 경우, h를 반환한다.
    if (mod === 0){
      return h;
    }
    
    // 만약 0이 아닐 경우, w에 h를 넣고 h엔 나머지인 mod를 넣어 해당 함수를 다시 호출한다
    return gcd(h, mod);
  }

  function solution(w, h){
    const gcdVal = gcd(w, h);
    return w * h - (w + h - gcdVal);  // W * H 값에 최대 공약수 빼기
  }                                   // return 명령문은  01 함수 실행을 종료하는 역할
}                                     //                02 주어진 값을 함수 호출 지점으로 반환하는 역할


// GCD(최대공약수)와 LCM(최소공배수)
// a * b = GCD * LCM
// ex. a = 24, b = 16 -> a = 3*8, b = 2*8 즉, a와 b의 최대공약수는 8, 최대공배수는 48(8*3*2) 

// 01 최대공약수 구하기 O(N)
{
  let getGCD = (a, b) => {
    let gcd = 1;

    for (let i=2; i<=Math.min(a,b); i++){   // Math.min() 인자 중 가장 작은 수 반환
      if(a % i === 0 && b % i === 0){
        gcd = i;
      }
    }
    return gcd;
  }
}
// 02 최대 공약수 구하기 O(logN)
{
  let getGDC = (a, b) => {

    while(b > 0){
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  }
}

// 01 최소 공배수 구하기
{
  function getLCM(a, b){
    const result = (a * b)/getGDC(a, b);
    return result;
  }
}

