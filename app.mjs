import express  from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from "uuid";
import generateRandomSequence from "./generateRandomSessionId.mjs";

const app = express();
const port = 8000;

app.use('/static',express.static('static'));
app.set('view engine', 'pug');
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded({ extended: true }));

const oneDay = 60*60*24*1000;
function genid(req) {
    return uuidv4();
}
app.use(session({
    genid: genid,
    secret: 'dGhpc2lzdGhlc2VjcmV0a2V5ZG9udHNoYXJld2l0aGFueW9uZQo=',
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}));

app.get('/',async (req,res)=>{
    req.session.sessionID = await generateRandomSequence(16);
    let sequenceIDtask1 = `${req.session.sessionID}/task-1`;
    let sequenceIDtask2 = `${req.session.sessionID}/task-2`;
    let sequenceIDtask3 = `${req.session.sessionID}/task-3`;
    let sequenceIDtask4 = `${req.session.sessionID}/task-4`;
    let sequenceIDtask5 = `${req.session.sessionID}/task-5`;
    req.session.progress = {
        task1 : false,
        task2 : false,
        task3 : false,
        task4 : false,
        task5 : false
    };
    console.log(req.session);
    res.status(200).render('index.pug',{sequencetask1:sequenceIDtask1,sequencetask2:sequenceIDtask2,sequencetask3:sequenceIDtask3,sequencetask4:sequenceIDtask4,sequencetask5:sequenceIDtask5,progress:req.session.progress});
});

app.get('/:sessionID/task-1',(req,res)=>{
    res.status(200).render('task_1.pug');
});
app.post('/:sessionID/task-1',(req,res)=>{
    req.session.progress.task1 = true;
    console.log("Session Updated:");
    console.log(req.session);
    res.status(200).redirect(`/${req.session.sessionID}/task-2`);
});

app.get('/:sessionID/task-2',(req,res)=>{
    let progress = req.session.progress.task1;
    console.log(progress)
    res.status(200).render('task_2.pug',{progress:progress});
});
app.post('/:sessionID/task-2',(req,res)=>{
    req.session.progress.task2 = true;
    res.status(200).redirect(`/${req.session.sessionID}/task-3`)
})

app.get('/:sessionID/task-3',(req,res)=>{
    let progress = req.session.progress.task2;
    console.log(req.session.sessionID);
    console.log(req.session);
    res.status(200).render('task_3.pug',{progress:progress});
});
app.post('/:sessionID/task-3',(req,res)=>{
    req.session.progress.task3 = true;
    res.status(200).redirect(`/${req.session.sessionID}/task-4`)
})

app.get('/:sessionID/task-4',(req,res)=>{
    let progress = req.session.progress.task3;
    console.log(req.session.sessionID);
    console.log(req.session);
    res.status(200).render('task_4.pug',{progress:progress});
});
app.post('/:sessionID/task-4',(req,res)=>{
    req.session.progress.task4 = true;
    res.status(200).redirect(`/${req.session.sessionID}/task-5`)
})

app.get('/:sessionID/task-5',(req,res)=>{
    let progress = req.session.progress.task4;
    console.log(req.session.sessionID);
    console.log(req.session);
    res.status(200).render('task_5.pug',{progress});
});
app.post('/:sessionID/task-5',(req,res)=>{
    req.session.progress.task5 = true;
    res.status(200).send('All Tasks Completed');
})

app.listen(port ,()=>{
    console.log(`Application Started at ${port} on localhost (127.0.0.1:8000)`);
});