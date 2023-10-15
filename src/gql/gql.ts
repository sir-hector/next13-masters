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
    "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(\n    data: {total: 0, email: \"krauskarol7@gmail.com\", stripeCheckoutId: \"\"}\n  ) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        id\n        name\n        price\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuntity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetProductQuntityDocument,
    "query CategoryGetList {\n  categories(first: 10) {\n    id\n    name\n    slug\n  }\n}": types.CategoryGetListDocument,
    "query ProductCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductCountDocument,
    "query ProductCountByCategory($category: String!) {\n  productsConnection(where: {categories_every: {slug: $category}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductCountByCategoryDocument,
    "query ProductGetByCategorySlug($slug: String!, $number: Int!, $offset: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: $number, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductGetByCategorySlugDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n      slug\n    }\n    price\n    images(first: 1) {\n      url\n    }\n    sizeColorVariants: variants {\n      ... on ProductSizeColorVariant {\n        id\n        name\n        color\n        size\n      }\n    }\n    colorVariants: variants {\n      ... on ProductColorVariant {\n        id\n        name\n        color\n      }\n    }\n    sizeVariants: variants {\n      ... on ProductSizeVariant {\n        id\n        name\n        size\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetList($number: Int!, $offset: Int!) {\n  products(first: $number, skip: $offset) {\n    ...ProductListItem\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductGetListDocument,
    "fragment ProductListItem on Product {\n  id\n  ...ProductListItem_Product\n  ...ProductListItemImage_Product\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetListByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    ...ProductListItem\n  }\n  productsConnection(where: {name_contains: $name}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListByNameDocument,
    "mutation ReviewCreate($productId: ID!) {\n  createReview(\n    data: {content: \"content\", email: \"email\", headline: \"headline\", name: \"name\", product: {connect: {id: $productId}}, rating: 1}\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "\n\tfragment ProductListItemImage_Product on Product {\n\t\timages(first: 1) {\n\t\t\turl\n\t\t}\n\t}\n": types.ProductListItemImage_ProductFragmentDoc,
    "\n\tfragment ProductListItem_Product on Product {\n\t\tname\n\t\tprice\n\t\tcategories(first: 1) {\n\t\t\tname\n\t\t\tslug\n\t\t}\n\t}\n": types.ProductListItem_ProductFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(\n    data: {total: 0, email: \"krauskarol7@gmail.com\", stripeCheckoutId: \"\"}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        id\n        name\n        price\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuntity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuntityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetList {\n  categories(first: 10) {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoryGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductCountByCategory($category: String!) {\n  productsConnection(where: {categories_every: {slug: $category}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductCountByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetByCategorySlug($slug: String!, $number: Int!, $offset: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: $number, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n      slug\n    }\n    price\n    images(first: 1) {\n      url\n    }\n    sizeColorVariants: variants {\n      ... on ProductSizeColorVariant {\n        id\n        name\n        color\n        size\n      }\n    }\n    colorVariants: variants {\n      ... on ProductColorVariant {\n        id\n        name\n        color\n      }\n    }\n    sizeVariants: variants {\n      ... on ProductSizeVariant {\n        id\n        name\n        size\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList($number: Int!, $offset: Int!) {\n  products(first: $number, skip: $offset) {\n    ...ProductListItem\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  ...ProductListItem_Product\n  ...ProductListItemImage_Product\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    ...ProductListItem\n  }\n  productsConnection(where: {name_contains: $name}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($productId: ID!) {\n  createReview(\n    data: {content: \"content\", email: \"email\", headline: \"headline\", name: \"name\", product: {connect: {id: $productId}}, rating: 1}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ProductListItemImage_Product on Product {\n\t\timages(first: 1) {\n\t\t\turl\n\t\t}\n\t}\n"): typeof import('./graphql').ProductListItemImage_ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment ProductListItem_Product on Product {\n\t\tname\n\t\tprice\n\t\tcategories(first: 1) {\n\t\t\tname\n\t\t\tslug\n\t\t}\n\t}\n"): typeof import('./graphql').ProductListItem_ProductFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
