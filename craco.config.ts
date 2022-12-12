import path from 'path';

const resolvePath = (p: string) => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@assets': resolvePath('./src/assets'),
            '@components': resolvePath('./src/components'),
            '@containers': resolvePath('./src/containers'),
            '@redux': resolvePath('./src/redux'),
        }
    },
}
