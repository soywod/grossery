<template>
  <Layout>
    <h1>About us</h1>
    <p>This is a fixed paragraph!</p>
    <p v-html="$page.allAbout.edges[0].node.html"></p>
  </Layout>
</template>

<page-query>
query {
  allAbout {
    edges {
      node {
        html
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>
