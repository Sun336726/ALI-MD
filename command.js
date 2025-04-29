var commands = [];kLkSySBQ#Mnfh1MA4LAXw8K7Ydm_Dv9IIt9kHcHhtbEhnHe65IMA

function cmd(info, func) {
    var data = info;kLkSySBQ#Mnfh1MA4LAXw8K7Ydm_Dv9IIt9kHcHhtbEhnHe65IMA
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if(!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd,
    Function:cmd,
    Module:cmd,
    commands,
};


