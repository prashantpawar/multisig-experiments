module.exports = [
  {
    name: 'create',
    handlerFn: require('./create.js'),
    options: [
      '-c, --createKey [hash_string]',
      '-i, --importKey <key>'
    ]
  }
];

