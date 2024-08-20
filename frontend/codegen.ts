import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'x-hasura-access-key': process.env
            .NEXT_PUBLIC_HASURA_SECRET as string,
        },
      },
    },
  ],
  documents: '**/*.graphql',
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
