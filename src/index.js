import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LokiJSAdapter from "@nozbe/watermelondb/src/adapters/lokijs";
import {Database} from "@nozbe/watermelondb/";
import {mySchema} from "./models/schema";
import Blog from "./models/Blog";
import Post from "./models/Post";
import Comment from "./models/Comment";


const adapter = new LokiJSAdapter({
    dbName: 'WatermelonDemo',
    schema: mySchema,
});

const database = new Database({
    adapter,
    modelClasses: [Blog, Post, Comment],
    actionsEnabled: true,
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
