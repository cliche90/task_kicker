# TASK Kicker

> Pomodoro Timer, 단어장 등을 포함한 생산성 Application


-----
# 과정(임시)

## Preparement

1. Babel, Webpack 설치

        npm install babel webpack webpack-dev-server -g

2. React, ReactDOM 설치

        npm install react react-dom --save

3. Babel Plugin 설치

        npm install babel-core babel-loader babel-preset-react babel-react-es2015 webpack webpack-dev-server react-hot-loader --save-dev

4. express, ejs, path, babel-cli, pm2 설치

        npm install express, ejs, path --save
        npm install babel-cli pm2 -g

5. babel-cli 를 통한 server side 코드 변환

        babel [코드가 포함된 디렉토리] --out-dir [출력을 놓을 디렉토리]


## CLI Command

1. Script 변환 Bundling

        npm run build

2. 변환된 Script 일괄 삭제

        npm run clean

3. pm2 로 server 시작

        npm run start

4. pm2 로 server 정지

        npm run stop
