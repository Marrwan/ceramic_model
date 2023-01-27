const express = require('express');
const { exec, execSync, execFile, spawn } = require('child_process');


const app = express();
const command = 'composedb model:list';

// express js configurtion with ejs engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    // execSync('export CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB="true"')
    // let key = execSync('composedb did:generate-private-key').toString();
    // console.log({key})
    // execSync(`composedb did:from-private-key ${key}`)
    const command = 'composedb model:list';
    const result = execSync(command).toString();
   
// console the type of resl
let arr = []
let jsonArray = result.split("\n");
// return res.json(jsonArray)
jsonArray.splice(-2,2)
jsonArray.forEach(jsonString => {
    let parsedData =JSON.parse(jsonString);

    arr.push(parsedData)
    console.log({parsedData});
});
// let parsedDatas =JSON.stringify(resl);
// console.log(typeof(parsedDatas),{parsedDatas});

return res.render('model', { arr: arr });



}) 

app.get('/:id', async(req, res) => {
    
    const {id} = req.params;
    const command = `composedb composite:from-model ${id} --ceramic-url=https://gateway-clay.ceramic.network`;
    const result = execSync(command).toString();
    let arr = []
    let jsonArray = result.split("\n");
    // return res.json(jsonArray)
    jsonArray.splice(-1,1);
   return res.json(JSON.parse(jsonArray[0]))
});

app.get('/command', (req, res) => {
    
    const command = 'composedb model:list';
    exec(command,  (error, stdout, stderr) => {
        if (error) {
            if(error.code === 'ETIMEDOUT') {
                console.log('Command timed out');
            }

            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        res.json({ output: stdout });
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000');
});