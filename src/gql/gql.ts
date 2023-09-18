/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 1) {\n      id\n      name\n      description\n      price\n      categories(first: 1) {\n        name\n      }\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}": types.ProductGetByCategorySlugDocument,
    "query ProductGetList {\n  products(first: 10) {\n    id\n    name\n    description\n    price\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n  }\n}": types.ProductGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 1) {\n      id\n      name\n      description\n      price\n      categories(first: 1) {\n        name\n      }\n      images(first: 1) {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList {\n  products(first: 10) {\n    id\n    name\n    description\n    price\n    categories(first: 1) {\n      name\n    }\n    images(first: 1) {\n      url\n    }\n  }\n}"): typeof import('./graphql').ProductGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
