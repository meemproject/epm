module.exports = {
    schema: [
        {
            'https://dev-gql.meem.wtf/v1/graphql': {
                headers: {},
            },
        },
    ],
    documents: ['./src/**/*.tsx', './src/**/*.ts'],
    overwrite: true,
    generates: {
        './generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './generated/graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};