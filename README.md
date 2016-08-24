# React + Flux + Express Starter Kit

React + Flux + Express でアプリーケーションを作成するための雛形です。

## セットアップ

```sh
$ npm install
$ npm start
```

下記にアクセスすると画像のような画面が表示されます。開発中はファイル変更でリビルドおよびライブリロードが行われます。

[http://localhost:8080](http://localhost:8080)

![スクリーンショット](./screen_shot.jpg)

## API一覧

### TODOリスト取得

```
method: GET
url: /apis/todos

↓ Response

todos: [
    { id: 1, title: 'hoge', completed: false }
]
```

### TODO作成

```
method: POST
url: /apis/todos
params: {
    title: 'foo'
}

↓ Response

todos: [
    { id: 1, title: 'hoge', completed: false },
    { id: 2, title: 'foo', completed: false }
]
```

### TODO更新

```
method: PUT
url: /apis/todos/:todoId
params: {
    todo: {
        id: 2,
        title: 'bar',
        completed: true,
    }
}

↓ Response

todos: [
    { id: 1, title: 'hoge', completed: false },
    { id: 2, title: 'bar', completed: true }
]
```

### TODO削除

```
method: DELETE
url: /apis/todos/:todoId

↓ Response

todos: [
    { id: 1, title: 'hoge', completed: false },
]
```