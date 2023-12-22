### JeyookProjectFront

#### 기술스택
node.js / next.js / react / redux / redux-toolkit / redux-saga / emotion /


##### 개발 컨벤션 
1.모든 변수명은 camelCase
2.페이지 안에 들어가는 이름은 kebab-case
3.let 대신 const이 기본이다.
4.import 순서는 아래와 같이 정렬합니다.

import React from 'react';                 // 1. React + hook
import Button from 'url';                  // 2. Components
import './Button.scss'                     // 3. Scss

5.상수는 SNAKE_CASE를 따릅니다.
const USER_DATA;

6.변수와 조합해 문자열을 생성하는 경우에는 템플릿 리터럴을 사용합니다.
const message = hello, ${name}!;         // good
const message = 'hello' + name + "!";      // bad

7.모든 변수는 가장 최상단에 선언합니다.

###### 컴포넌트 관련 컨벤션
1.useState와 같은 함수는 컴포넌트의 최상단에 선언합니다.
2.useEffect는 맨 밑에 선언합니다. 

###### git branch 관련 컨벤션 
Branch
// 브랜치 이름은 기능 및 컴포넌트별로 명명합니다.
feature/submit
component/button

// 긴급한 오류를 수정하기 위해 아래와 같은 브랜치를 생성할 수도 있습니다.
hotfix
PR & commit
// PR은 하나의 기능 개발 완료 시 진행합니다. 여러 commit이 쌓여서 하나의 PR이 완성됩니다. 즉 commit은 PR에 대한 상세 개발 내역입니다.
PR: 로그인 화면 개발
commit: 인풋 컴포넌트 개발 / 버튼 컴포넌트 개발 / 유효성 검사 기능 추가 등

// commit 메시지는 아래와 같이 나눠 작성합니다.
[feat] 제목          // 기능 추가
[fix] 제목           // 버그 수정
[refact] 제목        // 리팩토링
[style] 제목         // UI 수정
[etc] 제목           // 기타 수정 사항


###### 폴더구조 

```
├── public
└── src
    ├── api
    ├── components       // UI 단위별로 쪼개서 관리 
    │    ├── atoms
    │    ├── layouts
    │    ├── modals
    │    ├── molecules
    │    ├── organisms
    │    ├── templates
    │    └── utilies 
    ├── hooks            // 커스텀 훅에 대한 필요 시 사용 
    ├── pages            // 각 페이지들에 대한 폴더
    ├── store            // redux 폴더 
    │    ├── actions
    │    └── reducers  
    ├── styles           // css 폴더 
    └── utils            // 공통으로 쓰일 함수들에 대한 폴더 
```


######  추가 개발사항
프론트엔드 테스트코드 도입 예정(maybe)