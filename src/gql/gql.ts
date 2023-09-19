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
    "query ProductGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductGetByCategorySlugDocument,
    "query ProductGetList {\n  products(first: 10) {\n    ...ProductListItem\n  }\n}": types.ProductGetListDocument,
    "fragment ProductListItem on Product {\n  id\n  ...ProductListItem_Product\n  ...ProductListItemImage_Product\n}": types.ProductListItemFragmentDoc,
    "\n\tfragment ProductListItemImage_Product on Product {\n\t\timages(first: 1) {\n\t\t\turl\n\t\t}\n\t}\n": types.ProductListItemImage_ProductFragmentDoc,
    "\n\tfragment ProductListItem_Product on Product {\n\t\tname\n\t\tprice\n\t\tcategories(first: 1) {\n\t\t\tname\n\t\t}\n\t}\n": types.ProductListItem_ProductFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByCategorySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList {\n  products(first: 10) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  ...ProductListItem_Product\n  ...ProductListItemImage_Product\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ProductListItemImage_Product on Product {\n\t\timages(first: 1) {\n\t\t\turl\n\t\t}\n\t}\n"): typeof import('./graphql').ProductListItemImage_ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ProductListItem_Product on Product {\n\t\tname\n\t\tprice\n\t\tcategories(first: 1) {\n\t\t\tname\n\t\t}\n\t}\n"): typeof import('./graphql').ProductListItem_ProductFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
