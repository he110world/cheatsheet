const opt = require('optimist')
opt.usage('This is an example for optimist.\nUsage: $0')
opt.demand('r').alias('r','required').describe('r','Required argument')
opt.default('d',100).alias('d','default').describe('d','Argument with default value')
opt.boolean('b').alias('b','boolean').describe('b','Boolean argument')
opt.string('s').alias('s','string').describe('s','String argument')

console.log(opt.argv)
console.log(opt.help())
