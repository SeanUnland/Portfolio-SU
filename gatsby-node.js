// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const response = await graphql(`
//     query {
//       allContentfulAboutMe {
//         edges {
//           node {
//             languages {
//               languages
//             }
//             bio
//             name
//           }
//         }
//       }
//     }
//   `)
//   response.data.allContentfulAboutMe.edges.forEach(edge => {
//     createPage({
//       path: `/about/${edge.node.languages.languages}`,
//       component: path.resolve("./src/templates/work-post.js"),
//       context: {
//         languages: edge.node.languages.languages,
//       },
//     })
//   })
// }
